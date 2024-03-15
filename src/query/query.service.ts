import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pet } from "../pets/pets.entity";
import { Owner } from "../owners/entities/owner.entity";
import { CreatePetInput } from "../pets/dto/create-pet.dto";
import { CreateOwnerInput } from "../owners/dto/create-owner.input";

@Injectable()
export class QueryService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  ) {}

  public async createPet(input: CreatePetInput): Promise<Pet> {
    return await this.petRepository.save(input);
  }

  public async getPets(ownerId?: string): Promise<Pet[]> {
    return this.petRepository.find({
      where: {
        ownerId,
      },
    });
  }

  public async getPet(id: string): Promise<Pet> {
    return this.petRepository.findOneOrFail({
      where: {
        id,
      },
    });
  }

  // ========== OWNER SQL ==========
  public async createOwner(input: CreateOwnerInput): Promise<Owner> {
    return this.ownerRepository.save(input);
  }

  public async getOwners(): Promise<Owner[]> {
    return this.ownerRepository.find();
  }

  public async getOwner(id: string): Promise<Owner> {
    return this.ownerRepository.findOneOrFail({
      where: {
        id,
      },
    });
  }
}
