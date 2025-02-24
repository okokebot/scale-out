"use client";

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
  const [wasmAudio, setWasmAudio] = useState<any>(null);

  useEffect(() => {
    import("@/../public/wasm/wasm_audio_api.js").then(async (module) => {
      const wasm = await module.default();
      const audioInstance = new module.WasmAudio();
      setWasmAudio(audioInstance);
    });
  }, []);

  const playNote = (frequency: number) => {
    if (!wasmAudio) return;
    wasmAudio.set_frequency(frequency);
    wasmAudio.set_volume_with_fadeout(1.0, 0.5);
    wasmAudio.start();
  };

  const letterName = note.letterName;
  const className = isRoot
    ? `note ${letterName.toLowerCase()} root`
    : `note ${letterName.toLowerCase()}`;
  const accidentalClassName = isRoot ? "accidental root" : "accidental";
  const accidental = getAccidentalSymbol(note.accidental);

  return (
    <button className={className} onClick={() => playNote(note.frequency)}>
      {letterName}
      {note.octave}
      {accidental && <div className={accidentalClassName}>{accidental}</div>}
    </button>
  );
};
