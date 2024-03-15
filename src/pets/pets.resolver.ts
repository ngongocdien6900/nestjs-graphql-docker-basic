import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Pet } from "./pets.entity";
import { CreatePetInput } from "./dto/create-pet.dto";
import { Owner } from "../owners/entities/owner.entity";
import { QueryService } from "../query/query.service";

@Resolver(of => Pet)
export class PetsResolver {
  constructor(private queryService: QueryService) {}

  @Query(returns => [Pet], { name: "pets" })
  public async getPets(): Promise<Pet[]> {
    return this.queryService.getPets();
  }

  @Query(returns => Pet, { name: "pet" })
  public async getPet(@Args("id", { type: () => String }) id: string): Promise<Pet> {
    return this.queryService.getPet(id);
  }

  @ResolveField(returns => Owner, { name: "owner" })
  public async getOwner(@Parent() pet: Pet): Promise<Owner> {
    return this.queryService.getOwner(pet.ownerId);
  }

  @Mutation(returns => Pet)
  public async createPet(@Args("input") input: CreatePetInput) {
    return this.queryService.createPet(input);
  }
}
