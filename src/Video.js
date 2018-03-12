import React from "react";

const Video = ({ video }) => {
  const {
    title,
    channelTitle,
    description,
    thumbnails: { medium: { url } }
  } = video.snippet;
  return (
    <div>
      <img src={url} />
      <p>{title}</p>
      <p>{channelTitle}</p>
      <p>{description}</p>
    </div>
  );
};

export default Video;
