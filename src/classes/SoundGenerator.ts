import init, { WasmAudio } from "@/../public/wasm/wasm_audio_api.js";
import type { WasmAudio as WasmAudioType } from "@/../src/types/wasm/wasm_audio_api";

export class SoundGenerator {
  wasmAudio: WasmAudioType;

  private constructor(wasmAudio: WasmAudioType) {
    this.wasmAudio = wasmAudio;
  }

  static async create(): Promise<SoundGenerator> {
    try {
      const response = await fetch("wasm/wasm_audio_api_bg.wasm");
      if (!response.ok) {
        throw new Error(`Failed to fetch WASM file: ${response.statusText}`);
      }
      const wasmArrayBuffer = await response.arrayBuffer();
      await init({ wasmArrayBuffer });
      const wasmAudio = new WasmAudio();
      return new SoundGenerator(wasmAudio);
    } catch (error) {
      console.error("Error initializing WebAssembly:", error);
      throw error;
    }
  }

  playSound(frequency: number) {
    this.wasmAudio.set_frequency(frequency);
    this.wasmAudio.set_volume_with_fadeout(1.0, 0.5);
    this.wasmAudio.start();
  }
}
