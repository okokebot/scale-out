import { AccidentalType, LetterNameType } from "../types/notes";

type NoteDataType = {
  letterName: LetterNameType;
  accidental: AccidentalType;
  baseFrequency: number;
};

export const NOTES_DATA: { [key: string]: NoteDataType } = {
  C: { letterName: "C", accidental: null, baseFrequency: 16.35 },
  CSharp: { letterName: "C", accidental: "sharp", baseFrequency: 17.32 },
  DFlat: { letterName: "D", accidental: "flat", baseFrequency: 17.32 },
  D: { letterName: "D", accidental: null, baseFrequency: 18.35 },
  DSharp: { letterName: "D", accidental: "sharp", baseFrequency: 19.45 },
  EFlat: { letterName: "E", accidental: "flat", baseFrequency: 19.45 },
  E: { letterName: "E", accidental: null, baseFrequency: 20.6 },
  F: { letterName: "F", accidental: null, baseFrequency: 21.83 },
  FSharp: { letterName: "F", accidental: "sharp", baseFrequency: 23.12 },
  GFlat: { letterName: "G", accidental: "flat", baseFrequency: 23.12 },
  G: { letterName: "G", accidental: null, baseFrequency: 24.5 },
  GSharp: { letterName: "G", accidental: "sharp", baseFrequency: 25.96 },
  AFlat: { letterName: "A", accidental: "flat", baseFrequency: 25.96 },
  A: { letterName: "A", accidental: null, baseFrequency: 27.5 },
  ASharp: { letterName: "A", accidental: "sharp", baseFrequency: 29.14 },
  BFlat: { letterName: "B", accidental: "flat", baseFrequency: 29.14 },
  B: { letterName: "B", accidental: null, baseFrequency: 30.87 },
};
