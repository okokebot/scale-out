import type { Meta, StoryObj } from "@storybook/react";
import { Notes } from "../../classes/Notes";
import {
  OpenPositionPresenter,
  OpenPositionPresenterProps,
} from "./OpenPositionPresenter";

const aSharp = new Notes.ASharp();

const meta: Meta = {
  title: "Guitar neck/OpenPositionPresenter",
  component: OpenPositionPresenter,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#333333" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<OpenPositionPresenterProps>;

export const Default: Story = {};
export const String1Open: Story = {
  args: {
    string: 1,
    note: aSharp,
    isNoteVisible: true,
  },
};

export const String6Open: Story = {
  args: {
    string: 6,
    note: aSharp,
    isNoteVisible: true,
  },
};

export const String6OpenNoteUnvisibled: Story = {
  args: {
    string: 6,
    note: aSharp,
    isNoteVisible: false,
  },
};

export const String6OpenRoot: Story = {
  args: {
    string: 6,
    note: aSharp,
    isNoteVisible: true,
    isRoot: true,
  },
};
