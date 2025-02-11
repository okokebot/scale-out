import { Note } from "../../classes/Notes";
import { NotePresenter } from "../Note/NotePresenter";
import "./open-position.css";

export type OpenPositionPresenterProps = {
  string: number;
  note: Note;
  isNoteVisible: boolean;
  isRoot?: boolean;
};

export const OpenPositionPresenter = ({
  string,
  note,
  isNoteVisible,
  isRoot,
}: OpenPositionPresenterProps) => {
  const className = `open-position string-${string}`;

  return (
    <div className={className}>
      {isNoteVisible && <NotePresenter note={note} isRoot={isRoot} />}
    </div>
  );
};
