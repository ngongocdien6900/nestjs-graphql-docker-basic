import { Module } from "@nestjs/common";
import { PetsResolver } from "./pets.resolver";
import { QueryModule } from "../query/query.module";

@Module({
  imports: [QueryModule],
  providers: [PetsResolver],
})
export class PetsModule {}
