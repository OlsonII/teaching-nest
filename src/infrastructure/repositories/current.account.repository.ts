import { Injectable } from "@nestjs/common";
import { EntityRepository, ObjectID } from "typeorm";
import { GenericRepository } from "../base/generic.repository";
import { CurrentAccount } from "../../domain/entity/current.account";

@Injectable()
@EntityRepository(CurrentAccount)
export class CurrentAccountRepository extends GenericRepository<CurrentAccount>{}