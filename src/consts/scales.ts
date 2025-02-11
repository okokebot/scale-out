type ScaleDataType = {
  interval: number[];
};

export const SCALES_DATA: { [key: string]: ScaleDataType } = {
  // Major and Minor Scales
  major: { interval: [2, 2, 1, 2, 2, 2, 1] }, // Ionian
  minor: { interval: [2, 1, 2, 2, 1, 2, 2] }, // Aeolian (naturalMinor)

  harmonicMinor: { interval: [2, 1, 2, 2, 1, 3, 1] },
  melodicMinor: { interval: [2, 1, 2, 2, 2, 2, 1] },

  // Pentatonic Scales
  majorPentatonic: { interval: [2, 2, 3, 2, 3] },
  minorPentatonic: { interval: [3, 2, 2, 3, 2] },

  // Blues Scales
  majorBlues: { interval: [2, 1, 1, 3, 2, 3] },
  minorBlues: { interval: [3, 2, 1, 1, 3, 2] },

  // Modal Scales
  dorian: { interval: [2, 1, 2, 2, 2, 1, 2] },
  phrygian: { interval: [1, 2, 2, 2, 1, 2, 2] },
  lydian: { interval: [2, 2, 2, 1, 2, 2, 1] },
  mixolydian: { interval: [2, 2, 1, 2, 2, 1, 2] },
  locrian: { interval: [1, 2, 2, 1, 2, 2, 2] },

  // Whole Tone and Diminished Scales
  wholeTone: { interval: [2, 2, 2, 2, 2, 2] },
  diminished: { interval: [2, 1, 2, 1, 2, 1, 2, 1] },
  halfDiminished: { interval: [1, 2, 1, 2, 1, 2, 1, 2] },

  // Augmented Scales
  augmented: { interval: [3, 1, 3, 1, 3, 1] },

  // Other Exotic Scales
  //// 日本のスケール
  yoScale: { interval: [2, 3, 2, 2, 3] },
  inScale: { interval: [1, 4, 2, 1, 4] },
  ryukyuScale: { interval: [2, 3, 2, 3, 2] },

  //// アラビアのスケール
  arabicScale: { interval: [2, 1, 3, 1, 1, 3, 1] },
  phrygianDominant: { interval: [1, 3, 1, 2, 1, 2, 2] },
  byzantineScale: { interval: [1, 3, 1, 2, 1, 3, 1] },

  //// ロシアのスケール
  gypsyScale: { interval: [1, 3, 1, 2, 1, 3, 1] },
  russianMinor: { interval: [2, 1, 2, 1, 1, 2, 2] },

  //// その他のスケール
  chineseScale: { interval: [4, 2, 1, 4, 1] },
  persianScale: { interval: [1, 3, 1, 1, 2, 3, 1] },
  hindustaniScale: { interval: [2, 1, 4, 1, 1, 2, 1] },

  //// Other Exotic Scales
  egyptian: { interval: [2, 3, 2, 3, 2] },
  hungarianMinor: { interval: [2, 1, 3, 1, 1, 3, 1] },
  flamenco: { interval: [1, 3, 1, 2, 1, 3, 1] },

  // Chromatic Scale
  chromatic: { interval: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
};
