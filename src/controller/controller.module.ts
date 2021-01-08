import { Module } from "@nestjs/common";
import { CurrentAccountController } from "./current.account.controller";
import { SavingAccountController } from "./saving.account.controller";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { ApplicationModule } from "../application/application.module";

@Module({
  imports:[
    InfrastructureModule,
    ApplicationModule
  ],
  controllers: [
    CurrentAccountController,
    SavingAccountController
  ]
})
export class ControllerModule{}