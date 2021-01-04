import { IFinancialService } from "../contracts/financial.services.interface";
import { Transaction } from "./transaction";

export abstract class BankAccount implements IFinancialService{

  protected number: string;
  protected balance: number;
  protected ownerId: string;
  protected city: string;

  public consing(transaction: Transaction){
    this.balance += transaction.value;
  }

  public remove(transaction: Transaction){
    this.balance -= transaction.value;
  }

  abstract transfer(transaction: Transaction);

}