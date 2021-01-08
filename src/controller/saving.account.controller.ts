import { Body, Controller, Post } from "@nestjs/common";
import { UnitOfWork } from "../infrastructure/base/unit.of.work";
import {
  RegisterSavingAccountRequest,
  RegisterSavingAccountService
} from "../application/saving-account/register.saving.account.service";

@Controller('savingAccount')
export class SavingAccountController{

  constructor(private readonly unitOfWork: UnitOfWork) {}

  @Post()
  async registerCurrentAccount(@Body() request: RegisterSavingAccountRequest) {
    const service: RegisterSavingAccountService = new RegisterSavingAccountService(this.unitOfWork);
    return await service.execute(request);
  }

}