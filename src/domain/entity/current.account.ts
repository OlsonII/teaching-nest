import { BankAccount } from "./bank.account";
import { Transaction } from "./transaction";
import { Entity } from "typeorm";

@Entity()
export class CurrentAccount extends BankAccount{

  private readonly _overdraft: number = -20000;
  private readonly _minimalFirstConsign: number = 100000;

  consing(transaction: Transaction) {
    if(this.validateFirstMovements() && transaction.value >= this._minimalFirstConsign)
      super.consing(transaction);
    else if(!this.validateFirstMovements() && transaction.value > 0)
      super.consing(transaction);
  }

  validateFirstMovements(){
    return this.movements.length == 0;
  }

  remove(transaction: Transaction) {
    let newBalance: number = this.balance - this.calculateFourThousand(transaction.value);
    if(newBalance >= this._overdraft)
      this.balance -= transaction.value;
  }

  private calculateFourThousand(value: number): number {
    return value - ((value * 4)/1000);
  }

  transfer(transaction: Transaction) {}
}