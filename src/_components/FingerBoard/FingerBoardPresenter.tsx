import { NotesOnFindgerBoard, NotesPerString } from "../../classes/FingerBoard";
import { Note } from "../../classes/Notes";
import { FretPositionPresenter } from "../FretPosition/FretPositionPresenter";
import { OpenPositionPresenter } from "../OpenPosition/OpenPositionPresenter";
import "./finger-board.css";

export type FingerBoardPresenterProps = {
  notesOnFingerBoard: NotesOnFindgerBoard;
  isLeftHanded?: boolean;
};

export const FingerBoardPresenter = ({
  notesOnFingerBoard,
  isLeftHanded,
}: FingerBoardPresenterProps) => {
  // 解放弦の表示
  const openPositionView = (
    string: number,
    note: Note,
    isVisibled: boolean,
    isRoot?: boolean,
  ) => {
    return (
      <OpenPositionPresenter
        string={string}
        note={note}
        isNoteVisible={isVisibled}
        isRoot={isRoot}
      />
    );
  };

  // フレットの表示
  const fretPositionView = (
    string: number,
    fret: number,
    note: Note,
    isVisibled: boolean,
    isLeftHanded?: boolean,
    isRoot?: boolean,
  ) => {
    return (
      <FretPositionPresenter
        key={`${string}-${fret}`} // map で表示するため list 扱い。key が必要
        string={string}
        fret={fret}
        note={note}
        isNoteVisible={isVisibled}
        isLeftHanded={isLeftHanded}
        isRoot={isRoot}
      />
    );
  };

  // 弦ごとの表示
  const stringView = (notesPerString: NotesPerString) => {
    return (
      // key が必要だったのでとりあえず div で囲む
      <div key={notesPerString.string}>
        {isLeftHanded
          ? stringViewLeftHanded(notesPerString)
          : stringViewRightHanded(notesPerString)}
      </div>
    );
  };

  const stringViewRightHanded = (notesPerString: NotesPerString) => {
    return (
      <div className="neck-direction">
        {openPositionView(
          notesPerString.string,
          notesPerString.open.note,
          notesPerString.open.isVisibled,
          notesPerString.open.isRoot,
        )}
        {notesPerString.frets.map((fret) => {
          return fretPositionView(
            notesPerString.string,
            fret.fret,
            fret.note,
            fret.isVisibled,
            isLeftHanded,
            fret.isRoot,
          );
        })}
      </div>
    );
  };

  const stringViewLeftHanded = (notesPerString: NotesPerString) => {
    return (
      <div className="neck-direction">
        {notesPerString.frets
          .slice()
          .reverse()
          .map((fret) => {
            return fretPositionView(
              notesPerString.string,
              fret.fret,
              fret.note,
              fret.isVisibled,
              isLeftHanded,
              fret.isRoot,
            );
          })}
        {openPositionView(
          notesPerString.string,
          notesPerString.open.note,
          notesPerString.open.isVisibled,
          notesPerString.open.isRoot,
        )}
      </div>
    );
  };

  // ネック端の表示
  const neckEndView = (notesPerString: NotesPerString) => {
    return (
      <>
        {isLeftHanded
          ? neckEndViewLeftHanded(notesPerString)
          : neckEndViewRightHanded(notesPerString)}
      </>
    );
  };

  const neckEndViewLeftHanded = (notesPerString: NotesPerString) => {
    return (
      <div className="neck-direction">
        {notesPerString.frets
          .slice()
          .reverse()
          .map((fret) => (
            <div key={fret.fret} className="fret-position-end"></div>
          ))}
        <div className="open-position-end"></div>
      </div>
    );
  };

  const neckEndViewRightHanded = (notesPerString: NotesPerString) => {
    return (
      <div className="neck-direction">
        <div className="open-position-end"></div>
        {notesPerString.frets.map((fret) => {
          return <div key={fret.fret} className="fret-position-end"></div>;
        })}
      </div>
    );
  };

  // フレット番号の表示
  // ネック端の表示
  const fretNumberView = (notesPerString: NotesPerString) => {
    return (
      <>
        {isLeftHanded
          ? fretNumberViewLeftHanded(notesPerString)
          : fretNumberViewRightHanded(notesPerString)}
      </>
    );
  };

  const fretNumberViewRightHanded = (notesPerString: NotesPerString) => {
    return (
      <div className="neck-direction">
        <div className="open-position-number"></div>
        {/* 開放弦の位置に空白を追加 */}
        {notesPerString.frets.map((fret) => {
          return (
            <div key={fret.fret} className="fret-number-display">
              {fret.fret}
            </div>
          );
        })}
      </div>
    );
  };

  const fretNumberViewLeftHanded = (notesPerString: NotesPerString) => {
    return (
      <div className="neck-direction">
        {notesPerString.frets
          .slice()
          .reverse()
          .map((fret) => (
            <div key={fret.fret} className="fret-number-display">
              {fret.fret}
            </div>
          ))}
        <div className="open-position-number"></div>
      </div>
    );
  };

  return (
    <div className="finger-board">
      {/* 1弦のフレット数だけネック端を用意 */}
      {neckEndView(notesOnFingerBoard.allNotes[0])}

      {/* フレット全体 */}
      {notesOnFingerBoard.allNotes.map((notesPerString) => {
        return stringView(notesPerString);
      })}

      {/* 最終弦のフレット数だけネック端を用意 */}
      {neckEndView(
        notesOnFingerBoard.allNotes[notesOnFingerBoard.allNotes.length - 1],
      )}

      {/* フレット番号の表示をここに追加 */}
      {fretNumberView(
        notesOnFingerBoard.allNotes[notesOnFingerBoard.allNotes.length - 1],
      )}
    </div>
  );
};
