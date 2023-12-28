import React from "react";
import "video.js/dist/video-js.css";

// City
import "@videojs/themes/dist/city/index.css";

// Fantasy
import "@videojs/themes/dist/fantasy/index.css";

// Forest
import "@videojs/themes/dist/forest/index.css";

// Sea
import "@videojs/themes/dist/sea/index.css";
import videojs, { ReadyCallback } from "video.js";
import "./VideoPlayer.css";

export interface VideoPlayerProps {
  theme?: "city" | "fantasy" | "forest" | "sea";
  height?: number;
  width?: number;
  autoPlay?: boolean;
  loop?: boolean;
  sources?: {
    src: string;
    type: string;
  }[];
  poster?: string;

  // Videojs specific props
  controlBar?: {
    skipButtons?: {
      forward?: number;
      backward?: number;
    };
  };
  playbackRates?: number[];
  disablePictureInPicture?: boolean;
  isFluid?: boolean;

  onReady?: (ready: ReadyCallback | undefined) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  height = 1080,
  width = 1920,
  sources,
  autoPlay = false,
  loop = false,
  theme = "city",
  poster,
  // videojs specific props
  controlBar = {
    skipButtons: {
      forward: 5,
      back: 5,
    },
  },
  isFluid = false,
  playbackRates = [0.5, 1, 1.5, 2],
  disablePictureInPicture = false,
  onReady,
}) => {
  const videoRef = React.useRef(null);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    if (videoRef.current)
      videojs(
        videoRef.current,
        {
          controlBar,
          playbackRates,
          disablePictureInPicture,
          preferFullWindow: true,
        },
        function onPlayerReady(ready?: ReadyCallback | undefined) {
          videojs.log("Your player is ready!");
          if (onReady) onReady(ready);
        }
      );
  }, [videoRef]);

  return (
    <div>
      <div className="gl-video-player__wrapper">
        <video
          ref={videoRef}
          className={`video-js vjs-theme-${theme} gl-video-player__video ${
            isFluid ? "vjs-fluid" : ""
          }}`}
          controls
          autoPlay={autoPlay}
          preload="auto"
          width={width}
          height={height}
          loop={loop}
          poster={poster}
        >
          {sources?.map(({ src, type }) => (
            <source key={src} src={src} type={type} />
          ))}

          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
