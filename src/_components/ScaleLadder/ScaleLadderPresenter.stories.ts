import type { Meta, StoryObj } from "@storybook/react";
import { Notes } from "../../classes/Notes";
import { Scales } from "../../classes/Scales";
import {
  ScaleLadderPresenter,
  ScaleLadderPresenterProps,
} from "./ScaleLadderPresenter";

const meta: Meta = {
  title: "Guitar neck/ScaleLadderPresenter",
  component: ScaleLadderPresenter,
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
type Story = StoryObj<ScaleLadderPresenterProps>;

export const CMajor: Story = {
  args: {
    scaleConstructor: Scales.Major,
    rootNoteConstructor: Notes.C,
    isSharp: true,
  },
};

export const DMajor: Story = {
  args: {
    scaleConstructor: Scales.Major,
    rootNoteConstructor: Notes.D,
    isSharp: true,
  },
};

export const DMinor: Story = {
  args: {
    scaleConstructor: Scales.Minor,
    rootNoteConstructor: Notes.D,
    isSharp: true,
  },
};
