"use client";

import ReactPlayer from "react-player/lazy";

const VideoPlayer = (props: { name: string }) => {
  return (
    <ReactPlayer
      url={props.name}
      width="100%"
      height="100%"
      volume={0}
      muted
      controls
      loop
    />
  );
};
export default VideoPlayer;
