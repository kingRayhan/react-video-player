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

export interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The theme of the video player
   * @default "city"
   */
  theme?: "city" | "fantasy" | "forest" | "sea";

  /**
   * The height and width of the video player
   * @default 1080
   */
  height?: number;

  /**
   * The height and width of the video player
   * @default 1920
   */
  width?: number;

  /**
   * Whether the video should autoplay or not
   * @default false
   */
  autoPlay?: boolean;

  /**
   * Whether the video should loop or not
   * @default false
   */
  loop?: boolean;

  /**
   * The sources of the video
   * @default []
   * @example
```ts
   <VideoPlayer
    sources={[
        {
            src: "https://vjs.zencdn.net/v/oceans.mp4",
            type: "video/mp4",
        },
        {
            src: "https://vjs.zencdn.net/v/oceans.webm",
            type: "video/webm",
        },
        {
            src: "https://vjs.zencdn.net/v/oceans.ogv",
            type: "video/ogg",
        },
    ]}
/>
```
   */
  sources?: {
    src: string;
    type: string;
  }[];

  /**
   * The poster of the video
   * @default ""
   */
  poster?: string;

  // -------------- Videojs specific props

  /**
   * Whether the video should be fluid or not
   */
  controlBar?: {
    skipButtons?: {
      forward?: number;
      backward?: number;
    };
  };

  /**
   * The playback rates of the video
   * @default [0.5, 1, 1.5, 2]
   */
  playbackRates?: number[];

  /**
   * Whether the video should be fluid or not
   * @default false
   */
  disablePictureInPicture?: boolean;

  /**
   * Whether the video should be fluid or not
   * @default false
   */
  isFluid?: boolean;

  /**
   * Callback when the video is ready
   * @default undefined
   */
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
  ...props
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
      <div className="gl-video-player__wrapper" {...props}>
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
