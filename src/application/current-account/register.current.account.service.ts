import { IUnitOfWork } from "../../infrastructure/contracts/i.unit.of.work";
import { BankAccount } from "../../domain/entity/bank.account";
import { CurrentAccount } from "../../domain/entity/current.account";
import { Transaction } from "../../domain/entity/transaction";

export class RegisterCurrentAccountService{

  constructor(private readonly unitOfWork: IUnitOfWork) {}

  async execute(request: RegisterCurrentAccountRequest): Promise<RegisterCurrentAccountResponse>{

    try{

      const accountSearched: BankAccount = await this.unitOfWork.currentAccountRepository.findEntity(request.number);

      if(accountSearched == undefined){
        const newAccount: BankAccount = new CurrentAccount();
        newAccount.number = request.number;
        newAccount.ownerId = request.ownerId;
        newAccount.city = request.city;
        const firstTransaction: Transaction = new Transaction();
        firstTransaction.value = request.firstConsingValue;
        newAccount.consing(firstTransaction);

        if(newAccount.balance > 0){
          await this.unitOfWork.start();
          const savedAccount = await this.unitOfWork.currentAccountRepository.save(newAccount);

          if(savedAccount != undefined)
            return new RegisterCurrentAccountResponse('Cuenta corriente numero' + savedAccount.number + 'ha sido creada satisfactoriamente');
        }

        return new RegisterCurrentAccountResponse('Consignacion inicial insuficiente. La consigancion inicial minima debe ser de $100.000 COP')
      }

      return new RegisterCurrentAccountResponse('Esta cuenta bancaria ya se encuentra registrada');

    }catch (e) {
      return new RegisterCurrentAccountResponse('Se ha presentado un error al momento de registrar esta cuenta bancaria');
    }

  }

}

export class RegisterCurrentAccountRequest{
  constructor(
    public readonly number: string,
    public readonly ownerId: string,
    public readonly city: string,
    public readonly firstConsingValue: number
  ) {}
}

export class RegisterCurrentAccountResponse{
  constructor(public readonly message: string) {}
}