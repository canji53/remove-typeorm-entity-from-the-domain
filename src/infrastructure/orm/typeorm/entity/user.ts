import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Id } from "../../../../domain/model/id";
import {
  User as UserDomain,
  Name,
  Note,
  Birthdate,
} from "../../../../domain/model/user";

export type UserArgs = {
  id?: string;
  name?: string;
  birthdate?: Date;
  note?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

@Entity({ name: "User" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column({ name: "name" })
  readonly name?: string;

  @Column({ name: "birthdate" })
  readonly birthdate?: Date;

  @Column({ name: "note" })
  readonly note?: string;

  @CreateDateColumn({ name: "createdAt" })
  readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  readonly updatedAt?: Date;

  constructor(args?: UserArgs) {
    if (!args) {
      return this;
    }

    if (args.id) {
      this.id = args.id;
    }

    if (args.name) {
      this.name = args.name;
    }

    if (args.birthdate) {
      this.birthdate = args.birthdate;
    }

    if (args.note) {
      this.note = args.note;
    }

    if (args.createdAt) {
      this.createdAt = args.createdAt;
    }

    if (args.updatedAt) {
      this.updatedAt = args.updatedAt;
    }
  }

  static toDomain(user: User): UserDomain {
    const id = new Id({ value: user.id });
    const name = user.name ? new Name({ value: user.name }) : undefined;
    const note = user.note ? new Note({ value: user.note }) : undefined;
    const birthdate = user.birthdate
      ? new Birthdate({ value: user.birthdate })
      : undefined;

    return new UserDomain({
      id,
      name,
      note,
      birthdate,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }

  static toEntity(user: UserDomain): User {
    return new User({
      id: user.id?.value,
      birthdate: user.birthdate?.value,
      name: user.name?.value,
      note: user.note?.value,
    });
  }
}
