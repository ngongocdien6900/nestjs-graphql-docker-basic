import { ObjectType, Field } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pet } from "../../pets/pets.entity";

@ObjectType()
@Entity()
export class Owner {
  @Field()
  @PrimaryGeneratedColumn()
  public id: string;

  @Field()
  @Column()
  public name: string;

  @Field(() => [Pet], { nullable: true })
  @OneToMany(() => Pet, pet => pet.owner)
  public pets?: Pet[];
}
