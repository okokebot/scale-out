import { Note } from "../../classes/Notes";
import { NotePresenter } from "../Note/NotePresenter";
import "./fret-position.css";
import { getPositionMarkClassName } from "./fretPositionHelper";
import "./position-mark.css";

export type FretPositionPresenterProps = {
  string: number;
  fret: number;
  note: Note;
  isNoteVisible: boolean;
  isLeftHanded?: boolean;
  isRoot?: boolean;
};

export const FretPositionPresenter = ({
  string,
  fret,
  note,
  isNoteVisible,
  isLeftHanded,
  isRoot,
}: FretPositionPresenterProps) => {
  const className = isLeftHanded
    ? `fret-position left-handed string-${string}`
    : `fret-position string-${string}`;
  const positionMarkClassName = getPositionMarkClassName(string, fret);
  return (
    <div className={className}>
      {positionMarkClassName !== null && (
        <div className={positionMarkClassName}></div>
      )}
      {isNoteVisible && <NotePresenter note={note} isRoot={isRoot} />}
    </div>
  );
};
