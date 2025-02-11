import { Notes } from "../classes/Notes";
import { Scales } from "../classes/Scales";

export const NOTE_LIST = [
  { id: 1, displayName: "C", noteConstructor: Notes.C },
  { id: 2, displayName: "C#", noteConstructor: Notes.CSharp },
  { id: 3, displayName: "Db", noteConstructor: Notes.DFlat },
  { id: 4, displayName: "D", noteConstructor: Notes.D },
  { id: 5, displayName: "D#", noteConstructor: Notes.DSharp },
  { id: 6, displayName: "Eb", noteConstructor: Notes.EFlat },
  { id: 7, displayName: "E", noteConstructor: Notes.E },
  { id: 8, displayName: "F", noteConstructor: Notes.F },
  { id: 9, displayName: "F#", noteConstructor: Notes.FSharp },
  { id: 10, displayName: "Gb", noteConstructor: Notes.GFlat },
  { id: 11, displayName: "G", noteConstructor: Notes.G },
  { id: 12, displayName: "G#", noteConstructor: Notes.GSharp },
  { id: 13, displayName: "Ab", noteConstructor: Notes.AFlat },
  { id: 14, displayName: "A", noteConstructor: Notes.A },
  { id: 15, displayName: "A#", noteConstructor: Notes.ASharp },
  { id: 16, displayName: "Bb", noteConstructor: Notes.BFlat },
  { id: 17, displayName: "B", noteConstructor: Notes.B },
];

export const SCALE_LIST = [
  { id: 1, displayName: "メジャースケール", scaleConstructor: Scales.Major },
  { id: 2, displayName: "マイナースケール", scaleConstructor: Scales.Minor },
  {
    id: 3,
    displayName: "ハーモニックマイナー",
    scaleConstructor: Scales.HarmonicMinor,
  },
  {
    id: 4,
    displayName: "メロディックマイナー",
    scaleConstructor: Scales.MelodicMinor,
  },
  {
    id: 5,
    displayName: "メジャーペンタトニック",
    scaleConstructor: Scales.MajorPentatonic,
  },
  {
    id: 6,
    displayName: "マイナーペンタトニック",
    scaleConstructor: Scales.MinorPentatonic,
  },
  {
    id: 7,
    displayName: "メジャーブルース",
    scaleConstructor: Scales.MajorBlues,
  },
  {
    id: 8,
    displayName: "マイナーブルース",
    scaleConstructor: Scales.MinorBlues,
  },
  { id: 9, displayName: "ドリアンスケール", scaleConstructor: Scales.Dorian },
  {
    id: 10,
    displayName: "フリジアンスケール",
    scaleConstructor: Scales.Phrygian,
  },
  {
    id: 11,
    displayName: "リディアンスケール",
    scaleConstructor: Scales.Lydian,
  },
  {
    id: 12,
    displayName: "ミクソリディアンスケール",
    scaleConstructor: Scales.Mixolydian,
  },
  {
    id: 13,
    displayName: "ロクリアンスケール",
    scaleConstructor: Scales.Locrian,
  },
  {
    id: 14,
    displayName: "ホールトーンスケール",
    scaleConstructor: Scales.WholeTone,
  },
  {
    id: 15,
    displayName: "ディミニッシュスケール",
    scaleConstructor: Scales.Diminished,
  },
  {
    id: 16,
    displayName: "ハーフディミニッシュ",
    scaleConstructor: Scales.HalfDiminished,
  },
  {
    id: 17,
    displayName: "オーグメンテッドスケール",
    scaleConstructor: Scales.Augmented,
  },
  { id: 18, displayName: "ヨースケール", scaleConstructor: Scales.YoScale },
  { id: 19, displayName: "インスケール", scaleConstructor: Scales.InScale },
  { id: 20, displayName: "琉球スケール", scaleConstructor: Scales.RyukyuScale },
  {
    id: 21,
    displayName: "アラビアンスケール",
    scaleConstructor: Scales.ArabicScale,
  },
  {
    id: 22,
    displayName: "フリジアンドミナント",
    scaleConstructor: Scales.PhrygianDominant,
  },
  {
    id: 23,
    displayName: "ビザンチンスケール",
    scaleConstructor: Scales.ByzantineScale,
  },
  {
    id: 24,
    displayName: "ジプシースケール",
    scaleConstructor: Scales.GypsyScale,
  },
  {
    id: 25,
    displayName: "ロシアンマイナー",
    scaleConstructor: Scales.RussianMinor,
  },
  {
    id: 26,
    displayName: "チャイニーズスケール",
    scaleConstructor: Scales.ChineseScale,
  },
  {
    id: 27,
    displayName: "ペルシアンスケール",
    scaleConstructor: Scales.PersianScale,
  },
  {
    id: 28,
    displayName: "ヒンドゥスターニースケール",
    scaleConstructor: Scales.HindustaniScale,
  },
  {
    id: 29,
    displayName: "エジプシャンスケール",
    scaleConstructor: Scales.Egyptian,
  },
  {
    id: 30,
    displayName: "ハンガリアンマイナー",
    scaleConstructor: Scales.HungarianMinor,
  },
  {
    id: 31,
    displayName: "フラメンコスケール",
    scaleConstructor: Scales.Flamenco,
  },
  {
    id: 32,
    displayName: "クロマチックスケール",
    scaleConstructor: Scales.Chromatic,
  },
];
