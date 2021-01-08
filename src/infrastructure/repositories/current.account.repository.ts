import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { CurrentAccountOrm } from "../database/orm/current.account.orm";
import { GenericRepository } from "../base/generic.repository";
import { CurrentAccount } from "../../domain/entity/current.account";
import { BankAccount } from "../../domain/entity/bank.account";

@Injectable()
@EntityRepository(CurrentAccountOrm)
export class CurrentAccountRepository extends GenericRepository<CurrentAccountOrm>{

  public mapOrmToEntity(orm: CurrentAccountOrm): BankAccount{
    const account: BankAccount = new CurrentAccount();
    account._id = orm._id;
    account.number = orm.number;
    account.ownerId = orm.ownerId;
    account.city = orm.city;
    account.balance = orm.balance == undefined ? 0 : orm.balance;
    account.movements = orm.movements;
    return account;
  }


}