import { NoteConstructor } from "../classes/Notes";
import { FixedLengthArray } from "./utils";

// 1オクターブの音階を配列にしたもの
export type NotesOnOctaveArray = FixedLengthArray<NoteConstructor, 12>;
