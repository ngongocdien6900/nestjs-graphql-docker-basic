import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pet } from "../pets/pets.entity";
import { Owner } from "../owners/entities/owner.entity";
import { QueryService } from "./query.service";

@Module({
  imports: [TypeOrmModule.forFeature([Pet, Owner])],
  providers: [QueryService],
  exports: [QueryService],
})
export class QueryModule {}
