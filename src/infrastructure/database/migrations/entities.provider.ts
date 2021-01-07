import { Connection } from "typeorm";
import { CurrentAccountOrm } from "../orm/current.account.orm";
import { SavingAccountOrm } from "../orm/saving.account.orm";

export const currentAccountProvider = [
  {
    provide: 'CURRENT_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(CurrentAccountOrm),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const savingAccountProvider = [
  {
    provide: 'SAVING_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(SavingAccountOrm),
    inject: ['DATABASE_CONNECTION'],
  }
];

