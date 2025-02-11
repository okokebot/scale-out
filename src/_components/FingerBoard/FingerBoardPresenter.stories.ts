import type { Meta, StoryObj } from "@storybook/react";
import { Note, NoteConstructor, Notes } from "../../classes/Notes";
import { NotesOnOctaveArray } from "../../types/notesOnOctave";
import {
  FingerBoardPresenter,
  FingerBoardPresenterProps,
} from "./FingerBoardPresenter";

const NUMBER_OF_FRETS = 24;
const OPEN_NOTES_REGULAR: Note[] = [
  new Notes.E({ octave: 4 }),
  new Notes.B({ octave: 4 }),
  new Notes.G({ octave: 3 }),
  new Notes.D({ octave: 3 }),
  new Notes.A({ octave: 2 }),
  new Notes.E({ octave: 2 }),
];

// 周波数順番に並べた配列を作成、指板状の音を生成する場合はこれをベースにすると便利
const ALL_NOTES_SHARE_SORTED: NotesOnOctaveArray = [
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

// NotesPerString の配列を作成する関数
const createNotesPerString = (
  string: number,
  openNote: Note,
  isNoteVisibled: boolean,
  numberOfFrets: number,
) => {
  return {
    string: string,
    open: {
      note: openNote,
      isVisibled: isNoteVisibled,
    },
    // frets は NUMBER_OF_FRETS の数の要素をもつ。
    // allNoteClassesSharp から openNote と同じ class を発見し、index を確認する。
    // openNote はインスタンス、allNoteClassesSharp は class が格納されているので注意。
    // fret:1 はその index から 1 つ、fret:2 はさらに1つという具合でずれていく。
    // 配列が末端に達したら最初に戻るようにする。
    // class が確定したら、そのインスタンスを初期化する。このとき octave は openNote の octave から決定する。
    // octave の計算は、openNote.octave に i ÷ 12 の商を足すことで行う。
    frets: Array.from({ length: numberOfFrets }, (_, i) => {
      // インスタンスがどのクラスであるかを判定する方法として、現在は constructor.name を使っている。A,B,...すべての親クラスは Note なので instanceof ではすべて true になってしまう。
      const index = ALL_NOTES_SHARE_SORTED.findIndex(
        (noteClass: NoteConstructor) => {
          return openNote.constructor.name === noteClass.name;
        },
      );
      const noteClass =
        ALL_NOTES_SHARE_SORTED[(index + i + 1) % ALL_NOTES_SHARE_SORTED.length];
      return {
        fret: i + 1,
        note: new noteClass({
          octave: Math.floor((i + 1) / 12) + openNote.octave,
        }),
        isVisibled: isNoteVisibled,
      };
    }),
  };
};

// NotesOnFindgerBoard の配列を作成する関数
const createNotesOnFingerBoard = (isNoteVisibled: boolean) => {
  return {
    allNotes: OPEN_NOTES_REGULAR.map((note, string) => {
      return createNotesPerString(
        string + 1,
        note,
        isNoteVisibled,
        NUMBER_OF_FRETS,
      );
    }),
  };
};

const notesOnFingerBoardNoteVisible = createNotesOnFingerBoard(true);
const notesOnFingerBoardNoteInvisible = createNotesOnFingerBoard(false);

const meta: Meta = {
  title: "Guitar neck/FingerBoardPresenter",
  component: FingerBoardPresenter,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "dark", value: "#333333" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<FingerBoardPresenterProps>;

export const FingerBoardNoteUnvisible: Story = {
  args: {
    notesOnFingerBoard: notesOnFingerBoardNoteInvisible,
  },
};

export const FingerBoardNoteVisible: Story = {
  args: {
    notesOnFingerBoard: notesOnFingerBoardNoteVisible,
  },
};

export const FingerBoardNoteVisibleLeftHanded: Story = {
  args: {
    notesOnFingerBoard: notesOnFingerBoardNoteVisible,
    isLeftHanded: true,
  },
};
