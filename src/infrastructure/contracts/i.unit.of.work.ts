import { CurrentAccountRepository } from "../repositories/current.account.repository";
import { SavingAccountRepository } from "../repositories/saving.account.repository";
import { Connection } from "typeorm";

export interface IUnitOfWork{

  //Repositories
  currentAccountRepository: CurrentAccountRepository;
  savingAccountRepository: SavingAccountRepository;

  start(): void;
  complete(work: () => any): Promise<any>;
  getConnection(): Connection;
  closeConnection();

}