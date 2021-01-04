import { Transaction } from "../entity/transaction";

export interface IFinancialService{

  consing(transaction: Transaction);
  transfer(transaction: Transaction);
  remove(transaction: Transaction);

}