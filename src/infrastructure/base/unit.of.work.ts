import { IUnitOfWork } from "../contracts/i.unit.of.work";
import { CurrentAccountRepository } from "../repositories/current.account.repository";
import { SavingAccountRepository } from "../repositories/saving.account.repository";
import { Connection, EntityManager, QueryRunner } from "typeorm";
import { Inject } from "@nestjs/common";

export class UnitOfWork implements IUnitOfWork{
  public currentAccountRepository: CurrentAccountRepository;
  public savingAccountRepository: SavingAccountRepository;
  constructor(@Inject('DATABASE_CONNECTION') private readonly asyncDatabaseConnection: Connection ) {
    this.currentAccountRepository = this.asyncDatabaseConnection.getCustomRepository(CurrentAccountRepository);
    this.savingAccountRepository = this.asyncDatabaseConnection.getCustomRepository(SavingAccountRepository);
  }
}