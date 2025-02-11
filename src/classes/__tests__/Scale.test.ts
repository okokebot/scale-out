import { Notes } from "../Notes";
import { Scale, Scales } from "../Scales";

describe("クラス: Scale", () => {
  test("インスタンスが生成できること", () => {
    const scaleMajorA = new Scales.Major({ rootNoteConstructor: Notes.A });
    expect(scaleMajorA).toBeInstanceOf(Scale);
  });

  test.each`
    scaleConstructor          | rootNoteConstructor | expectedScale
    ${Scales.Major}           | ${Notes.A}          | ${[Notes.A, Notes.B, Notes.CSharp, Notes.D, Notes.E, Notes.FSharp, Notes.GSharp]}
    ${Scales.Minor}           | ${Notes.A}          | ${[Notes.A, Notes.B, Notes.C, Notes.D, Notes.E, Notes.F, Notes.G]}
    ${Scales.MajorPentatonic} | ${Notes.A}          | ${[Notes.A, Notes.B, Notes.CSharp, Notes.E, Notes.FSharp]}
    ${Scales.MinorPentatonic} | ${Notes.A}          | ${[Notes.A, Notes.C, Notes.D, Notes.E, Notes.G]}
    ${Scales.MinorPentatonic} | ${Notes.AFlat}      | ${[Notes.AFlat, Notes.B, Notes.DFlat, Notes.EFlat, Notes.GFlat]}
  `(
    "スケール: $scaleConstructor のスケール音一覧が $expectedScale であること",
    ({ scaleConstructor, rootNoteConstructor, expectedScale }) => {
      const scale = new scaleConstructor({ rootNoteConstructor });
      expect(scale.noteConstructors).toStrictEqual(expectedScale);
    },
  );
});
