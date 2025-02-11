import { NOTES_DATA } from "../consts/notes";
import { AccidentalType, LetterNameType } from "../types/notes";

type NoteConstructorOption = {
  // 要素によって変更が必要な場合はここでオプショナルに指定する
  octave?: number;
};

export class Note {
  letterName: LetterNameType;
  accidental: AccidentalType;
  baseFrequency: number;
  frequency: number;
  octave: number;

  constructor(
    letterName: LetterNameType,
    accidental: AccidentalType,
    baseFrequency: number,
    { octave = 0 }: NoteConstructorOption = {},
  ) {
    this.letterName = letterName;
    this.accidental = accidental;
    this.baseFrequency = baseFrequency;
    this.octave = octave;
    this.frequency = this.baseFrequency * Math.pow(2, octave);
  }
}

const createNoteClass = (name: string) => {
  const noteClass = class extends Note {
    constructor(options: NoteConstructorOption = {}) {
      const { letterName, accidental, baseFrequency } = NOTES_DATA[name];
      super(letterName, accidental, baseFrequency, options);
    }
  };
  Object.defineProperty(noteClass, "name", { value: name });
  return noteClass;
};

// 単音を生成する場合 (実際に利用するクラスはこれらなので class ファイル内に置いておく)
export const Notes = {
  C: createNoteClass("C"),
  CSharp: createNoteClass("CSharp"),
  DFlat: createNoteClass("DFlat"),
  D: createNoteClass("D"),
  DSharp: createNoteClass("DSharp"),
  EFlat: createNoteClass("EFlat"),
  E: createNoteClass("E"),
  F: createNoteClass("F"),
  FSharp: createNoteClass("FSharp"),
  GFlat: createNoteClass("GFlat"),
  G: createNoteClass("G"),
  GSharp: createNoteClass("GSharp"),
  AFlat: createNoteClass("AFlat"),
  A: createNoteClass("A"),
  ASharp: createNoteClass("ASharp"),
  BFlat: createNoteClass("BFlat"),
  B: createNoteClass("B"),
};

// Noteクラスそのものの型
export type NoteConstructor = {
  new (options: NoteConstructorOption): Note;
};
