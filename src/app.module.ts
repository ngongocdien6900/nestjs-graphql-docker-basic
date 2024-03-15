import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PetsModule } from "./pets/pets.module";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import * as process from "process";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "db", // service name in docker-compose
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "postgres",
      entities: ["dist/**/*.entity{.ts,.js}"],
    }),
    PetsModule,
    OwnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
