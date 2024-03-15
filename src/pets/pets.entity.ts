import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Owner } from "../owners/entities/owner.entity";

@ObjectType()
@Entity()
export class Pet {
  @Field()
  @PrimaryGeneratedColumn()
  public id: string;

  @Field()
  @Column()
  public name: string;

  @Field()
  @Column()
  public type: string;

  /*
    Using to query relation in find options
    If we just use query builder, we don't need to add ManyToOne
   */
  @Field(() => Owner)
  @ManyToOne(() => Owner, owner => owner.pets)
  @JoinColumn({ name: "owner_id" })
  public owner!: Owner;

  @Column({ name: "owner_id" })
  public ownerId: string;
}
