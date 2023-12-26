import type { Meta, StoryObj } from "@storybook/react";
import { VideoPlayer } from "../src";
import { VideoPlayerProps } from "../src/VideoPlayer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "VideoPlayer",
  component: VideoPlayer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

const DEFAULT_ARGS: VideoPlayerProps = {
  height: 1080,
  width: 1920,
  sources: [
    {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      type: "video/mp4",
    },
  ],
  autoPlay: false,
  playbackRates: [0.5, 1, 1.5, 2],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  name: "Default",
  args: {
    ...DEFAULT_ARGS,
  },
};

export const ThemeCity: Story = {
  name: "Theme: City",
  args: {
    ...DEFAULT_ARGS,
    theme: "city",
  },
};

export const ThemeForest: Story = {
  name: "Theme: Forest",
  args: {
    ...DEFAULT_ARGS,
    theme: "forest",
  },
};

export const ThemeFantacy: Story = {
  name: "Theme: Ocean",
  args: {
    ...DEFAULT_ARGS,
    theme: "fantasy",
  },
};

export const ThemeSea: Story = {
  name: "Theme: sea",
  args: {
    ...DEFAULT_ARGS,
    theme: "sea",
  },
};
