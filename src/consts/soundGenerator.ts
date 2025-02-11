import { SoundGenerator } from "@/classes/SoundGenerator";

let soundGenerator: SoundGenerator | null = null;

(async () => {
  soundGenerator = await SoundGenerator.create();
})();

export function getSoundGenerator(): SoundGenerator {
  if (!soundGenerator) {
    throw new Error("SoundGenerator is not initialized yet.");
  }
  return soundGenerator;
}
