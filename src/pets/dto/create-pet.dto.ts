import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePetInput {
  @Field()
  public name!: string;

  @Field()
  public type!: string;

  @Field()
  public ownerId!: string;
}
