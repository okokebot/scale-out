import { SoundGenerator } from "@/classes/SoundGenerator";

let soundGenerator: Promise<SoundGenerator> | null = null;

export const getSoundGenerator = (): Promise<SoundGenerator> => {
  if (!soundGenerator) {
    soundGenerator = SoundGenerator.create();
  }
  return soundGenerator;
};
