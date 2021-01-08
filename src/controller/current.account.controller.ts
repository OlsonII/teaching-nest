import { Body, Controller, Post } from "@nestjs/common";
import {
  RegisterCurrentAccountRequest,
  RegisterCurrentAccountService
} from "../application/current-account/register.current.account.service";
import { UnitOfWork } from "../infrastructure/base/unit.of.work";

@Controller('currentAccount')
export class CurrentAccountController{

  constructor(private readonly unitOfWork: UnitOfWork) {}

  @Post()
  async registerCurrentAccount(@Body() request: RegisterCurrentAccountRequest) {
    const service: RegisterCurrentAccountService = new RegisterCurrentAccountService(this.unitOfWork);
    return await service.execute(request);
  }

}