// 弦とフレットからポジションマークの描画が必要かを計算する。必要のない場合は null を返す
export const getPositionMarkClassName = (
  string: number,
  fret: number,
): string | null => {
  const positionMarkMarkClassName = positionMarkMarkClassNames.find(
    (positionMarkMarkClassName) => {
      return (
        positionMarkMarkClassName.string === string &&
        positionMarkMarkClassName.fret === fret
      );
    },
  );
  return positionMarkMarkClassName ? positionMarkMarkClassName.className : null;
};

// ポジションマークが必要なフレットとその位置
const positionMarkMarkClassNames = [
  { string: 1, fret: 12, className: "position-mark bottom" },
  { string: 1, fret: 24, className: "position-mark bottom" },

  { string: 2, fret: 12, className: "position-mark top" },
  { string: 2, fret: 24, className: "position-mark top" },

  { string: 3, fret: 3, className: "position-mark bottom" },
  { string: 3, fret: 5, className: "position-mark bottom" },
  { string: 3, fret: 7, className: "position-mark bottom" },
  { string: 3, fret: 9, className: "position-mark bottom" },
  { string: 3, fret: 15, className: "position-mark bottom" },
  { string: 3, fret: 17, className: "position-mark bottom" },
  { string: 3, fret: 19, className: "position-mark bottom" },
  { string: 3, fret: 21, className: "position-mark bottom" },

  { string: 4, fret: 3, className: "position-mark top" },
  { string: 4, fret: 5, className: "position-mark top" },
  { string: 4, fret: 7, className: "position-mark top" },
  { string: 4, fret: 9, className: "position-mark top" },
  { string: 4, fret: 15, className: "position-mark top" },
  { string: 4, fret: 17, className: "position-mark top" },
  { string: 4, fret: 19, className: "position-mark top" },
  { string: 4, fret: 21, className: "position-mark top" },

  { string: 5, fret: 12, className: "position-mark bottom" },
  { string: 5, fret: 24, className: "position-mark bottom" },

  { string: 6, fret: 12, className: "position-mark top" },
  { string: 6, fret: 24, className: "position-mark top" },
];
