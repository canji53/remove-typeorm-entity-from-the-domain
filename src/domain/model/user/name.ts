import { isShorter, isLonger } from "../../../util/validation";

export type NameArgs = {
  value: string;
};

export class Name {
  private readonly MIN_NAME_LENGTH = 1;
  private readonly MAX_NAME_LENGTH = 50;

  readonly value!: string;

  constructor(args: NameArgs) {
    if (isShorter(args.value, this.MIN_NAME_LENGTH)) {
      throw new Error("Name is too short");
    }
    if (isLonger(args.value, this.MAX_NAME_LENGTH)) {
      throw new Error("Name is too long");
    }
    this.value = args.value;
  }
}
