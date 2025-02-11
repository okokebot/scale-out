import type { Meta, StoryObj } from "@storybook/react";
import { AudioSample } from "./AudioSample";

const meta: Meta = {
  title: "Guitar neck/AudioSample",
  component: AudioSample,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "dark", value: "#333333" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<ReturnType<typeof AudioSample>>;

export const AudioSampleDefault: Story = {
  args: {},
};
