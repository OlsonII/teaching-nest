import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { GenericRepository } from "../base/generic.repository";
import { SavingAccount } from "../../domain/entity/saving.account";

@Injectable()
@EntityRepository(SavingAccount)
export class SavingAccountRepository extends GenericRepository<SavingAccount>{}