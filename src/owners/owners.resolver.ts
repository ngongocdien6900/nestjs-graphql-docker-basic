import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { Owner } from "./entities/owner.entity";
import { CreateOwnerInput } from "./dto/create-owner.input";
import { Pet } from "../pets/pets.entity";
import {QueryService} from "../query/query.service";

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(private queryService: QueryService) {}

  @Mutation(() => Owner)
  createOwner(@Args("input") createOwnerInput: CreateOwnerInput) {
    return this.queryService.createOwner(createOwnerInput);
  }

  @Query(() => [Owner], { name: "owners" })
  findAll() {
    return this.queryService.getOwners();
  }

  @Query(() => Owner, { name: "owner" })
  findOne(@Args("id", { type: () => String }) id: string) {
    return this.queryService.getOwner(id);
  }

  @ResolveField(returns => [Pet], { name: "pets" })
  public getPets(@Parent() owner: Owner): Promise<Pet[]> {
    return this.queryService.getPets(owner.id);
  }

  // @Mutation(() => Owner)
  // updateOwner(@Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput) {
  //   return this.queryService.update(updateOwnerInput.id, updateOwnerInput);
  // }
  //
  // @Mutation(() => Owner)
  // removeOwner(@Args('id', { type: () => Int }) id: number) {
  //   return this.queryService.remove(id);
  // }
}
