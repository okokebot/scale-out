import { FingerBoard } from "../FingerBoard";

describe("クラス: FingerBoard", () => {
  test("インスタンスが生成できること", () => {
    const fingerBoard = new FingerBoard();
    expect(fingerBoard).toBeInstanceOf(FingerBoard);
  });

  test("弦数とフレット数が正しいこと", () => {
    const fingerBoard = new FingerBoard();
    expect(fingerBoard.numberOfStrings).toBe(6);
    expect(fingerBoard.numberOfFrets).toBe(24);
  });
});
