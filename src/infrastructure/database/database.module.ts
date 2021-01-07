import { Module } from "@nestjs/common";
import { databaseProviders } from "./provider/database.provider";
import { currentAccountProvider, savingAccountProvider } from "./migrations/entities.provider";

@Module({
  providers: [
    ...databaseProviders,
    ...currentAccountProvider,
    ...savingAccountProvider
  ],
  exports: [
    ...databaseProviders,
    ...currentAccountProvider,
    ...savingAccountProvider
  ]
})
export class DatabaseModule{}