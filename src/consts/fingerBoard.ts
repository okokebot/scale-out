import { Note, Notes } from "../classes/Notes";

export const NUMBER_OF_FRETS = 24;

export const NUMBER_OF_STRINGS = 6;

export const OPEN_NOTES_REGULAR: Note[] = [
  new Notes.E({ octave: 4 }),
  new Notes.B({ octave: 3 }),
  new Notes.G({ octave: 3 }),
  new Notes.D({ octave: 3 }),
  new Notes.A({ octave: 2 }),
  new Notes.E({ octave: 2 }),
];
