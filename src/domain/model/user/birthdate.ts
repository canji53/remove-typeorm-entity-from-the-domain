type BirthdateArgs = {
  value: Date;
};

export class Birthdate {
  readonly value!: Date;

  constructor(args: BirthdateArgs) {
    this.value = args.value;
  }
}
