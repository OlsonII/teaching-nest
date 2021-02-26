import { Connection } from "typeorm";
import { CurrentAccount } from "../../../domain/entity/current.account";
import { SavingAccount } from "../../../domain/entity/saving.account";

export const currentAccountProvider = [
  {
    provide: 'CURRENT_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(CurrentAccount),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const savingAccountProvider = [
  {
    provide: 'SAVING_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(SavingAccount),
    inject: ['DATABASE_CONNECTION'],
  }
];

