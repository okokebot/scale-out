import type { Meta, StoryObj } from "@storybook/react";
import { Notes } from "../../classes/Notes";
import {
  FretPositionPresenter,
  FretPositionPresenterProps,
} from "./FretPositionPresenter";

const aSharp = new Notes.ASharp();

const meta: Meta = {
  title: "Guitar neck/FretPositionPresenter",
  component: FretPositionPresenter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<FretPositionPresenterProps>;

export const Default: Story = {};
export const String1Fret1: Story = {
  args: {
    string: 1,
    fret: 1,
    note: aSharp,
    isNoteVisible: true,
  },
};

export const String6Fret1: Story = {
  args: {
    string: 6,
    fret: 1,
    note: aSharp,
    isNoteVisible: true,
  },
};

export const String6Fret1NoteUnvisibled: Story = {
  args: {
    string: 6,
    fret: 1,
    note: aSharp,
    isNoteVisible: false,
  },
};

export const String6Fret1Root: Story = {
  args: {
    string: 6,
    fret: 1,
    note: aSharp,
    isNoteVisible: true,
    isRoot: true,
  },
};

export const String6Fret12Root: Story = {
  args: {
    string: 6,
    fret: 12,
    note: aSharp,
    isNoteVisible: true,
    isRoot: true,
  },
};

export const String5Fret12Root: Story = {
  args: {
    string: 5,
    fret: 12,
    note: aSharp,
    isNoteVisible: true,
    isRoot: true,
  },
};

export const String6Fret1LeftHanded: Story = {
  args: {
    string: 6,
    fret: 1,
    note: aSharp,
    isNoteVisible: true,
    isLeftHanded: true,
  },
};
