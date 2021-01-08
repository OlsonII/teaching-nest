import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { GenericRepository } from "../base/generic.repository";
import { SavingAccountOrm } from "../database/orm/saving.account.orm";
import { CurrentAccountOrm } from "../database/orm/current.account.orm";
import { BankAccount } from "../../domain/entity/bank.account";
import { CurrentAccount } from "../../domain/entity/current.account";
import { SavingAccount } from "../../domain/entity/saving.account";

@Injectable()
@EntityRepository(SavingAccountOrm)
export class SavingAccountRepository extends GenericRepository<SavingAccountOrm>{

  public mapOrmToEntity(orm: SavingAccountOrm): BankAccount{
    const account: BankAccount = new SavingAccount();
    account._id = orm._id;
    account.number = orm.number;
    account.ownerId = orm.ownerId;
    account.city = orm.city;
    account.balance = orm.balance == undefined ? 0 : orm.balance;
    account.movements = orm.movements;
    return account;
  }

}