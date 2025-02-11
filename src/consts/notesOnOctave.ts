import { Notes } from "../classes/Notes";
import { NotesOnOctaveArray } from "../types/notesOnOctave";

// 周波数順番に並べた配列を作成、指板状の音を生成する場合はこれをベースにすると便利
export const ALL_NOTES_SHARP_SORTED: NotesOnOctaveArray = [
  Notes.C,
  Notes.CSharp,
  Notes.D,
  Notes.DSharp,
  Notes.E,
  Notes.F,
  Notes.FSharp,
  Notes.G,
  Notes.GSharp,
  Notes.A,
  Notes.ASharp,
  Notes.B,
];

export const ALL_NOTES_FLAT_SORTED: NotesOnOctaveArray = [
  Notes.C,
  Notes.DFlat,
  Notes.D,
  Notes.EFlat,
  Notes.E,
  Notes.F,
  Notes.GFlat,
  Notes.G,
  Notes.AFlat,
  Notes.A,
  Notes.BFlat,
  Notes.B,
];
