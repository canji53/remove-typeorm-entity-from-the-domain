import { isShorter, isLonger } from "../../../util/validation";

export type NoteArgs = {
  value: string;
};

export class Note {
  private readonly MIN_NOTE_LENGTH = 1;
  private readonly MAX_NOTE_LENGTH = 200;

  readonly value!: string;

  constructor(args: NoteArgs) {
    if (isShorter(args.value, this.MIN_NOTE_LENGTH)) {
      throw new Error("Note is too short.");
    }
    if (isLonger(args.value, this.MAX_NOTE_LENGTH)) {
      throw new Error("Note is too long.");
    }
    this.value = args.value;
  }
}
