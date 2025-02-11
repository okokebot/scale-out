import init, { WasmAudio } from "@/../public/wasm/wasm_audio_api.js";
import type { WasmAudio as WasmAudioType } from "@/../src/types/wasm/wasm_audio_api";

export class SoundGenerator {
  wasmAudio: WasmAudioType;

  private constructor(wasmAudio: WasmAudioType) {
    this.wasmAudio = wasmAudio;
  }

  static async create(): Promise<SoundGenerator> {
    await init("/wasm/wasm_audio_api_bg.wasm");
    const wasmAudio = new WasmAudio();
    return new SoundGenerator(wasmAudio);
  }

  playSound(frequency: number) {
    this.wasmAudio.set_frequency(frequency);
    this.wasmAudio.set_volume_with_fadeout(1.0, 0.5);
    this.wasmAudio.start();
  }
}
