import { Module } from "@nestjs/common";
import { OwnersResolver } from "./owners.resolver";
import { QueryModule } from "../query/query.module";

@Module({
  imports: [QueryModule],
  providers: [OwnersResolver],
})
export class OwnersModule {}
