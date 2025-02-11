import type { Meta, StoryObj } from "@storybook/react";
import { OptionType, SelectCustom, SelectCustomProps } from "./SelectCustom";

const meta: Meta = {
  title: "Guitar neck/SelectCustom",
  component: SelectCustom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
// Options array
const options: OptionType[] = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
];

export default meta;
type Story = StoryObj<SelectCustomProps>;

export const Sample: Story = {
  args: {
    options: options,
    setSelectedOption: (option) => console.log(option),
  },
};
