import { IFinancialService } from "../contracts/financial.services.interface";
import { Transaction } from "./transaction";
import { FinancialMovement } from "./financial.movement";
import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export abstract class BankAccount implements IFinancialService{

  @ObjectIdColumn()
  public _id: ObjectID;
  @Column()
  public number: string;
  @Column()
  public balance: number;
  @Column()
  public ownerId: string;
  @Column()
  public city: string;
  @Column()
  public movements: FinancialMovement[];

  constructor() {
    this.movements = []
    this.balance = 0;
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