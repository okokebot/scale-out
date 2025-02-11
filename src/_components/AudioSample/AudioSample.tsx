import init, { WasmAudio } from "@/../public/wasm/wasm_audio_api.js"; // __wbg_init() を呼び出すため
import type { WasmAudio as WasmAudioType } from "@/../src/types/wasm/wasm_audio_api"; // `src/types/` の型を参照
import { useEffect, useState } from "react";

export const AudioSample = () => {
  const [wasmAudio, setWasmAudio] = useState<WasmAudioType | null>(null);

  useEffect(() => {
    async function loadWasm() {
      await init("@/../public/wasm/wasm_audio_api.js"); // WebAssembly の初期化

      // `new WasmAudio()` で WebAssembly のインスタンスを作成
      const audio = new WasmAudio();
      setWasmAudio(audio);
    }

    loadWasm();
  }, []);

  const playSound = () => {
    if (wasmAudio) {
      wasmAudio.set_frequency(440);
      wasmAudio.set_volume_with_fadeout(1.0, 0.5); // 0.5 秒かけて音量を 0 にする
      wasmAudio.start();
    }
  };

  const stopSound = () => {
    if (wasmAudio) {
      wasmAudio.stop();
    }
  };

  return (
    <div>
      <button onClick={playSound}>音を再生</button>
      <button onClick={stopSound}>音を停止</button>
    </div>
  );
};
