import {
  NUMBER_OF_FRETS,
  NUMBER_OF_STRINGS,
  OPEN_NOTES_REGULAR,
} from "../consts/fingerBoard";
import {
  ALL_NOTES_FLAT_SORTED,
  ALL_NOTES_SHARP_SORTED,
} from "../consts/notesOnOctave";
import { Note, NoteConstructor } from "./Notes";
import { Scale } from "./Scales";

export type NotesPerString = {
  string: number;
  open: {
    note: Note;
    isVisibled: boolean;
    isRoot?: boolean;
  };
  frets: Array<{
    fret: number;
    note: Note;
    isVisibled: boolean;
    isRoot?: boolean;
  }>;
};

export type NotesOnFindgerBoard = {
  allNotes: Array<NotesPerString>;
};

export class FingerBoard {
  numberOfStrings: number;
  numberOfFrets: number;

  constructor(numberOfStrings?: number, numberOfFrets?: number) {
    this.numberOfStrings = numberOfStrings ?? NUMBER_OF_STRINGS;
    this.numberOfFrets = numberOfFrets ?? NUMBER_OF_FRETS;
  }

  private createNotesPerString = (
    string: number,
    numberOfFrets: number,
    openNote: Note,
    scale: Scale | null,
  ): NotesPerString => {
    // all_notes_sorted は scale があり、かつ scale.isSharp が false の場合はフラットの音階を使う。それ以外はシャープの音階を使う。
    const all_notes_sorted =
      scale && !scale.isSharp ? ALL_NOTES_FLAT_SORTED : ALL_NOTES_SHARP_SORTED;
    return {
      string: string,
      open: {
        note: openNote,
        // isVisibled は scale が指定されていた場合、scale.motes に含まれるものだけ表示する。
        isVisibled: scale
          ? scale.noteConstructors.some(
              (noteConstructor) =>
                noteConstructor.name === openNote.constructor.name,
            )
          : false,
        // isRoot は scale が指定されていた場合 openNote と scale.rootNoteConstructor が一致していれば true にする。
        isRoot: scale
          ? openNote.constructor.name === scale.rootNoteConstructor.name
          : false,
      },
      frets: Array.from({ length: numberOfFrets }, (_, i) => {
        const index = all_notes_sorted.findIndex(
          (noteConstructor: NoteConstructor) => {
            return openNote.constructor.name === noteConstructor.name;
          },
        );
        const noteConstructor =
          all_notes_sorted[(index + i + 1) % all_notes_sorted.length];
        const note = new noteConstructor({
          octave: Math.floor((i + 1) / 12) + openNote.octave,
        });
        return {
          fret: i + 1,
          note: note,
          // isVisibled は scale が指定されていた場合、scale.notes に含まれるものだけ表示する。
          isVisibled: scale
            ? scale.noteConstructors.some(
                (noteConstructor) =>
                  noteConstructor.name === note.constructor.name,
              )
            : false,
          isRoot: scale
            ? note.constructor.name === scale.rootNoteConstructor.name
            : false,
        };
      }),
    };
  };

  createNotesOnFingerBoard = (scale: Scale | null): NotesOnFindgerBoard => {
    return {
      allNotes: OPEN_NOTES_REGULAR.map((note, string) => {
        return this.createNotesPerString(
          string + 1,
          NUMBER_OF_FRETS,
          note,
          scale,
        );
      }),
    };
  };
}
