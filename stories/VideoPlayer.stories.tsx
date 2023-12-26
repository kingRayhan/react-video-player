import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import VideoPlayer, { VideoPlayerProps } from '../src/VideoPlayer';

const meta: Meta = {
  title: 'VideoPlayer',
  component: VideoPlayer,
};

export default meta;

const Template: StoryFn<VideoPlayerProps> = args => <VideoPlayer {...args} />;

const DEFAULT_ARGS: VideoPlayerProps = {
  height: 1080,
  width: 1920,
  sources: [
    {
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      type: 'video/mp4',
    },
  ],
  autoPlay: false,
  playbackRates: [0.5, 1, 1.5, 2],
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = { ...DEFAULT_ARGS, theme: 'city' };

export const City = Template.bind({});
City.args = { ...DEFAULT_ARGS, theme: 'city' };

export const Fantasy = Template.bind({});
Fantasy.args = { ...DEFAULT_ARGS, theme: 'fantasy' };

export const Forest = Template.bind({});
Forest.args = { ...DEFAULT_ARGS, theme: 'forest' };

export const Sea = Template.bind({});
Sea.args = { ...DEFAULT_ARGS, theme: 'sea' };

// forwardSkip and backSkip controlBar
export const ForwardAndBackSkip = Template.bind({});
ForwardAndBackSkip.args = {
  ...DEFAULT_ARGS,
  controlBar: {
    skipButtons: {
      forward: 5,
      backward: 5,
    },
  },
};

// disablePictureInPicture
export const DisablePictureInPicture = Template.bind({});
DisablePictureInPicture.args = {
  ...DEFAULT_ARGS,
  disablePictureInPicture: true,
};
