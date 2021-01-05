import { IFinancialService } from "../contracts/financial.services.interface";
import { Transaction } from "./transaction";
import { FinancialMovement } from "./financial.movement";

export abstract class BankAccount implements IFinancialService{

  public number: string;
  public balance: number;
  public ownerId: string;
  public city: string;
  public movements: FinancialMovement[];

  constructor() {
    this.movements = []
  }

  public consing(transaction: Transaction){
    let newMovement = new FinancialMovement();
    newMovement.type = 'Consignacion';
    newMovement.date = new Date();
    newMovement.value = transaction.value;
    this.balance += transaction.value;
    this.movements.push(newMovement);
  }

  public abstract remove(transaction: Transaction);

  public transfer(transaction: Transaction, account: IFinancialService){
    //TODO: VALIDAR SI PUEDE RETIRAR PRIMERO
    this.remove(transaction);
    account.consing(transaction);
  }

}