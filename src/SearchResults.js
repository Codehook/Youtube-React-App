import React from "react";
import Video from "./Video.js";

const SearchResults = ({videos}) => {
  const VideoItems = videos.map(video => (
    <Video
      key={video.etag}
      video={video}
    />
  ));

  return (
    <div>
      {VideoItems}
    </div>
  )
}

export default SearchResults;
