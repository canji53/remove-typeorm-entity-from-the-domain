import { Id } from "../id";
import { Name, Birthdate, Note } from "./";

export type UserArgs = {
  id?: Id;
  name?: Name;
  birthdate?: Birthdate;
  note?: Note;
  createdAt?: Date;
  updatedAt?: Date;
};

export class User {
  readonly id!: Id;
  readonly name?: Name;
  readonly birthdate?: Birthdate;
  readonly note?: Note;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;

  constructor(args: UserArgs) {
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
}
