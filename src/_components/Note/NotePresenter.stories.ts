import type { Meta, StoryObj } from "@storybook/react";
import { Notes } from "../../classes/Notes";
import { NotePresenter, NotePresenterProps } from "./NotePresenter";

const a = new Notes.A();
const aSharp = new Notes.ASharp();
const bFlat = new Notes.BFlat();
const b = new Notes.B();
const c = new Notes.C();
const cSharp = new Notes.CSharp();
const dFlat = new Notes.DFlat();
const d = new Notes.D();
const dSharp = new Notes.DSharp();
const eFlat = new Notes.EFlat();
const e = new Notes.E();
const f = new Notes.F();
const fSharp = new Notes.FSharp();
const gFlat = new Notes.GFlat();
const g = new Notes.G();
const gSharp = new Notes.GSharp();
const aFlat = new Notes.AFlat();

const meta: Meta<typeof NotePresenter> = {
  title: "Guitar neck/NotePresenter",
  component: NotePresenter,
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

type Story = StoryObj<NotePresenterProps>;

export const ANoRoot: Story = {
  args: {
    note: a,
  },
};

export const ASharpNoRoot: Story = {
  args: {
    note: aSharp,
  },
};

export const BFlatNoRoot: Story = {
  args: {
    note: bFlat,
  },
};

export const BNoRoot: Story = {
  args: {
    note: b,
  },
};

export const CNoRoot: Story = {
  args: {
    note: c,
  },
};

export const CSharpNoRoot: Story = {
  args: {
    note: cSharp,
  },
};

export const DFlatNoRoot: Story = {
  args: {
    note: dFlat,
  },
};

export const DNoRoot: Story = {
  args: {
    note: d,
  },
};

export const DSharpNoRoot: Story = {
  args: {
    note: dSharp,
  },
};

export const EFlatNoRoot: Story = {
  args: {
    note: eFlat,
  },
};

export const ENoRoot: Story = {
  args: {
    note: e,
  },
};

export const FNoRoot: Story = {
  args: {
    note: f,
  },
};

export const FSharpNoRoot: Story = {
  args: {
    note: fSharp,
  },
};

export const GFlatNoRoot: Story = {
  args: {
    note: gFlat,
  },
};

export const GNoRoot: Story = {
  args: {
    note: g,
  },
};

export const GSharpNoRoot: Story = {
  args: {
    note: gSharp,
  },
};

export const AFlatNoRoot: Story = {
  args: {
    note: aFlat,
  },
};

export const ANoRootRoot: Story = {
  args: {
    note: a,
  },
};

export const ASharpRoot: Story = {
  args: {
    note: aSharp,
    isRoot: true,
  },
};
