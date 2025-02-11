import { NoteConstructor } from "../../classes/Notes";
import { ScaleConstructor } from "../../classes/Scales";
import { NotePresenter } from "../Note/NotePresenter";
import "./scale-ladder.css";

export type ScaleLadderPresenterProps = {
  scaleConstructor: ScaleConstructor;
  rootNoteConstructor: NoteConstructor;
  isSharp?: boolean;
};

export const ScaleLadderPresenter = ({
  scaleConstructor,
  rootNoteConstructor,
}: ScaleLadderPresenterProps) => {
  const scale = new scaleConstructor({ rootNoteConstructor });
  const scaleSample = scale.createNoteInstances(4);

  return (
    <div className="scale-ladder">
      {scaleSample.map((note, index) => {
        // 動的な位置を計算
        const positionStyle = {
          left: `${10 + index * 30}px`,
        };

        return (
          <button className="box" key={index} style={positionStyle}>
            <NotePresenter note={note} isRoot={false} />
          </button>
        );
      })}
    </div>
  );
};
