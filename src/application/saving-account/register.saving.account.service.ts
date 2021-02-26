import { IUnitOfWork } from "../../infrastructure/contracts/i.unit.of.work";
import { BankAccount } from "../../domain/entity/bank.account";
import { Transaction } from "../../domain/entity/transaction";
import { SavingAccount } from "../../domain/entity/saving.account";

export class RegisterSavingAccountService{

  constructor(private readonly unitOfWork: IUnitOfWork) {}

  async execute(request: RegisterSavingAccountRequest): Promise<RegisterSavingAccountResponse>{

    try{

      const accountSearched: BankAccount = await this.unitOfWork.savingAccountRepository.findOne({where: {number: request.number}});

      if(accountSearched == undefined){
        const newAccount: BankAccount = new SavingAccount();
        newAccount.number = request.number;
        newAccount.ownerId = request.ownerId;
        newAccount.city = request.city;
        const firstTransaction: Transaction = new Transaction();
        firstTransaction.value = request.firstConsingValue;
        firstTransaction.value = parseInt(request.firstConsingValue.toString());
        firstTransaction.city = request.city;
        newAccount.consing(firstTransaction);

        if(newAccount.balance > 0){
          const savedAccount = await this.unitOfWork.savingAccountRepository.save(newAccount);

          if(savedAccount != undefined)
            return new RegisterSavingAccountResponse('Cuenta de ahorros numero ' + savedAccount.number + ' ha sido creada satisfactoriamente');
        }

        return new RegisterSavingAccountResponse('Consignacion inicial insuficiente. La consigancion inicial minima debe ser de $50.000 COP')
      }

      return new RegisterSavingAccountResponse('Esta cuenta bancaria ya se encuentra registrada');

    }catch (e) {
      return new RegisterSavingAccountResponse('Se ha presentado un error al momento de registrar esta cuenta bancaria');
    }

  }

}

export class RegisterSavingAccountRequest{
  constructor(
    public readonly number: string,
    public readonly ownerId: string,
    public readonly city: string,
    public readonly firstConsingValue: number
  ) {}
}

export class RegisterSavingAccountResponse{
  constructor(public readonly message: string) {}
}