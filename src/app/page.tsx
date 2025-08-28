"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FingerBoardPresenter } from "../_components/FingerBoard/FingerBoardPresenter";
import { OptionType } from "../_components/SelectCustom/SelectCustom";
import ToggleCustom from "../_components/ToggleCustom/ToggleCustom";
import { FingerBoard } from "../classes/FingerBoard";
import { Scale } from "../classes/Scales";
import { NOTE_LIST, SCALE_LIST } from "./pageHelper";

const Select = dynamic(
  () => import("../_components/SelectCustom/SelectCustom"),
  { ssr: false },
);

export default function Home() {
  const [selectedKeyOption, setSelectedKeyOption] = useState<OptionType | null>(
    { value: NOTE_LIST[0].id, label: NOTE_LIST[0].displayName },
  );
  const [selectedScaleOption, setSelectedScaleOption] =
    useState<OptionType | null>({
      value: SCALE_LIST[0].id,
      label: SCALE_LIST[0].displayName,
    });
  const [scale, setScale] = useState<Scale | null>(null);
  const [isLeftHanded, setIsLeftHanded] = useState(false);

  const keyOptions = useMemo(
    () =>
      NOTE_LIST.map((note) => ({ value: note.id, label: note.displayName })),
    [],
  );

  const scaleOptions = useMemo(
    () =>
      SCALE_LIST.map((scale) => ({
        value: scale.id,
        label: scale.displayName,
      })),
    [],
  );

  const updateScale = useCallback(() => {
    if (!selectedKeyOption || !selectedScaleOption) {
      setScale(null);
      return;
    }

    const noteConstructor = NOTE_LIST.find(
      (note) => note.id === selectedKeyOption.value,
    )?.noteConstructor;
    const scaleConstructor = SCALE_LIST.find(
      (scale) => scale.id === selectedScaleOption.value,
    )?.scaleConstructor;

    if (noteConstructor && scaleConstructor) {
      setScale(new scaleConstructor({ rootNoteConstructor: noteConstructor }));
    }
  }, [selectedKeyOption, selectedScaleOption]);

  useEffect(updateScale, [updateScale]);

  const fingerBoard = new FingerBoard();
  const notesOnFingerBoard = fingerBoard.createNotesOnFingerBoard(scale);

  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <h1 className="text-2xl font-bold">Scale Out</h1>
        <Select
          options={keyOptions}
          setSelectedOption={setSelectedKeyOption}
          placeholder="Select Root"
          className="w-40"
          value={selectedKeyOption}
        />
        <Select
          options={scaleOptions}
          setSelectedOption={setSelectedScaleOption}
          placeholder="Select Scale"
          className="w-80"
          value={selectedScaleOption}
        />
        <div className="flex items-center space-x-2">
          <span className="text-md text-gray-400">LeftHand-Mode</span>
          <ToggleCustom
            checked={isLeftHanded}
            onChange={(checked) => setIsLeftHanded(checked)}
          />
        </div>
      </div>
      <div className="rounded-lg overflow-x-auto max-w-full scrollbar-hide">
        <div className="min-w-[1400px]">
          <FingerBoardPresenter
            notesOnFingerBoard={notesOnFingerBoard}
            isLeftHanded={isLeftHanded}
          />
        </div>
      </div>
    </div>
  );
}
