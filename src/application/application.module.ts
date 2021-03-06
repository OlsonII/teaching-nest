import { Module } from "@nestjs/common";
import { RegisterCurrentAccountService } from "./current-account/register.current.account.service";
import { RegisterSavingAccountService } from "./saving-account/register.saving.account.service";

@Module({
  imports: [
    RegisterCurrentAccountService,
    RegisterSavingAccountService
  ],
  exports: [
    RegisterCurrentAccountService,
    RegisterSavingAccountService
  ]
})
export class ApplicationModule{}