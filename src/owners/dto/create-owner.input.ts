import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateOwnerInput {
  @Field()
  public name: string;
}
