import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { CurrentAccountOrm } from "../database/orm/current.account.orm";
import { GenericRepository } from "../base/generic.repository";

@Injectable()
@EntityRepository(CurrentAccountOrm)
export class CurrentAccountRepository extends GenericRepository<CurrentAccountOrm>{}