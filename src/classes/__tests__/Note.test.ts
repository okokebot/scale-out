import { Note, Notes } from "../Notes";

describe("クラス: Note", () => {
  test("インスタンスが生成できること", () => {
    const noteA = new Notes.A();
    expect(noteA).toBeInstanceOf(Note);
  });

  test("周波数の計算が正しいこと", () => {
    const noteA = new Notes.A({ octave: 4 });
    expect(noteA.frequency).toBe(440);
  });
});
