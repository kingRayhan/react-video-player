import { VideoPlayer } from "../../src";
import type { VideoPlayerProps } from "../../src";

const App = () => {
  const videoSources = [
    {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      type: "video/mp4",
    },
    // Add more video sources as needed
  ];

  const videoProps: VideoPlayerProps = {
    theme: "forest", // 'city', 'fantasy', 'forest', 'sea'
    autoPlay: false,
    loop: false,
    width: 1080,
    height: 720,
    sources: videoSources,
    controlBar: {
      skipButtons: {
        forward: 5,
        backward: 5,
      },
    },
    playbackRates: [0.5, 1, 1.5, 2],
    disablePictureInPicture: false,
    onReady: () => {
      console.log("Video player is ready!");
    },
  };

  return <VideoPlayer {...videoProps} className="name" />;
};

export default App;
