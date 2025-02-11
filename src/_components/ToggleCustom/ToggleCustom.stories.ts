import type { Meta, StoryObj } from "@storybook/react";
import { ToggleCustom, ToggleCustomProps } from "./ToggleCustom";

const meta: Meta = {
  title: "Guitar neck/ToggleCustom",
  component: ToggleCustom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<ToggleCustomProps>;

export const Sample: Story = {
  args: {
    checked: true,
    onChange: (option) => console.log(option),
  },
};
