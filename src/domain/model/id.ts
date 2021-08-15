import { isUUIDv4 } from "../../util/validation";

export type IdArgs = {
  value: string;
};

export class Id {
  readonly value!: string;

  constructor(args: IdArgs) {
    if (!isUUIDv4(args.value)) {
      throw new Error("Id is not uuid4.");
    }

    this.value = args.value;
  }
}
