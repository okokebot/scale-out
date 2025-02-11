import { AccidentalType } from "@/types/notes";
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
  const letterName = note.letterName;
  const className = isRoot
    ? `note ${letterName.toLowerCase()} root`
    : `note ${letterName.toLowerCase()}`;
  const accidentalClassName = isRoot ? "accidental root" : "accidental";
  const accidental = getAccidentalSymbol(note.accidental);
  return (
    <button className={className} onClick={() => alert(note)}>
      {letterName}
      {note.octave}
      {accidental && <div className={accidentalClassName}>{accidental}</div>}
    </button>
  );
};
