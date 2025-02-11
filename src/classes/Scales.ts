import {
  ALL_NOTES_FLAT_SORTED,
  ALL_NOTES_SHARP_SORTED,
} from "../consts/notesOnOctave";
import { SCALES_DATA } from "../consts/scales";
import { Note, NoteConstructor } from "./Notes";

type ScaleConstructorOption = {
  // 要素によって変更が必要な場合はここでオプショナルに指定する
  rootNoteConstructor: NoteConstructor;
};

export class Scale {
  rootNoteConstructor: NoteConstructor;
  interval: number[];
  noteConstructors: NoteConstructor[];
  isSharp: boolean;

  constructor(
    interval: number[],
    { rootNoteConstructor }: ScaleConstructorOption,
  ) {
    this.interval = interval;
    this.rootNoteConstructor = rootNoteConstructor;
    // rootNoteConstructor がフラットの場合は false, それ以外の場合は true
    const sampleNote = new rootNoteConstructor({ octave: 0 });
    this.isSharp = !(sampleNote.accidental === "flat");
    this.noteConstructors = this.createNotesOnScale();
  }

  createNotesOnScale = () => {
    const notes = [this.rootNoteConstructor];
    const allNotesSorted = this.isSharp
      ? ALL_NOTES_SHARP_SORTED
      : ALL_NOTES_FLAT_SORTED;
    let index = allNotesSorted.findIndex((noteConstructor: NoteConstructor) => {
      return this.rootNoteConstructor.name === noteConstructor.name;
    });
    this.interval.forEach((interval) => {
      index = (index + interval) % allNotesSorted.length;
      notes.push(allNotesSorted[index]);
    });
    // notes から重複削除したものを返す
    return notes.filter(
      (note, i, self) => self.findIndex((n) => n.name === note.name) === i,
    );
  };

  createNoteInstances = (octave: number = 0): Note[] => {
    return this.noteConstructors.map(
      (noteConstructor) => new noteConstructor({ octave }),
    );
  };
}

const createScaleClass = (name: string) => {
  const scaleClass = class extends Scale {
    constructor(options: ScaleConstructorOption) {
      const { interval } = SCALES_DATA[name];
      super(interval, options);
    }
  };
  Object.defineProperty(scaleClass, "name", { value: name });
  return scaleClass;
};

export const Scales = {
  Major: createScaleClass("major"),
  Minor: createScaleClass("minor"),
  HarmonicMinor: createScaleClass("harmonicMinor"),
  MelodicMinor: createScaleClass("melodicMinor"),
  MajorPentatonic: createScaleClass("majorPentatonic"),
  MinorPentatonic: createScaleClass("minorPentatonic"),
  MajorBlues: createScaleClass("majorBlues"),
  MinorBlues: createScaleClass("minorBlues"),
  Dorian: createScaleClass("dorian"),
  Phrygian: createScaleClass("phrygian"),
  Lydian: createScaleClass("lydian"),
  Mixolydian: createScaleClass("mixolydian"),
  Locrian: createScaleClass("locrian"),
  WholeTone: createScaleClass("wholeTone"),
  Diminished: createScaleClass("diminished"),
  HalfDiminished: createScaleClass("halfDiminished"),
  Augmented: createScaleClass("augmented"),
  YoScale: createScaleClass("yoScale"),
  InScale: createScaleClass("inScale"),
  RyukyuScale: createScaleClass("ryukyuScale"),
  ArabicScale: createScaleClass("arabicScale"),
  PhrygianDominant: createScaleClass("phrygianDominant"),
  ByzantineScale: createScaleClass("byzantineScale"),
  GypsyScale: createScaleClass("gypsyScale"),
  RussianMinor: createScaleClass("russianMinor"),
  ChineseScale: createScaleClass("chineseScale"),
  PersianScale: createScaleClass("persianScale"),
  HindustaniScale: createScaleClass("hindustaniScale"),
  Egyptian: createScaleClass("egyptian"),
  HungarianMinor: createScaleClass("hungarianMinor"),
  Flamenco: createScaleClass("flamenco"),
  Chromatic: createScaleClass("chromatic"),
};

// Scaleクラスそのものの型
export type ScaleConstructor = {
  new (options: ScaleConstructorOption): Scale;
};
