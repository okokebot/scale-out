import { getSoundGenerator } from "@/consts/soundGenerator";
import { AccidentalType } from "@/types/notes";
import { useEffect, useState } from "react";
import { Note } from "../../classes/Notes";
import "./note.css";

export type NotePresenterProps = {
  note: Note;
  isRoot?: boolean;
};

const getAccidentalSymbol = (accidental: AccidentalType | null) => {
  if (accidental === null) {
    return null;
  }
  return accidental === "sharp" ? "#" : "b";
};

export const NotePresenter = ({ note, isRoot }: NotePresenterProps) => {
  const [soundGenerator, setSoundGenerator] = useState<SoundGenerator | null>(
    null,
  );

  useEffect(() => {
    getSoundGenerator().then(setSoundGenerator);
  }, []);

  const letterName = note.letterName;
  const className = isRoot
    ? `note ${letterName.toLowerCase()} root`
    : `note ${letterName.toLowerCase()}`;
  const accidentalClassName = isRoot ? "accidental root" : "accidental";
  const accidental = getAccidentalSymbol(note.accidental);

  return (
    <button
      className={className}
      onClick={() => soundGenerator?.playSound(note.frequency)}
      disabled={!soundGenerator} // 初期化前はボタンを無効化
    >
      {letterName}
      {note.octave}
      {accidental && <div className={accidentalClassName}>{accidental}</div>}
    </button>
  );
};
