import React from "react";
import useVideoTrailer from "../hooks/useVideoTrailer";
import { useSelector } from "react-redux";

const VideoTrailer = ({ movieID }) => {
  useVideoTrailer(movieID);
  const trailer = useSelector((store) => store.movies?.videoTrailer);

  if(!trailer) return;
  //console.log(trailer);

  return (
    <div className="">
      <iframe
        
        className="w-screen aspect-video"
        src= {`https://www.youtube.com/embed/${trailer.key}?si=g-5i30xochyMdgD4?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
