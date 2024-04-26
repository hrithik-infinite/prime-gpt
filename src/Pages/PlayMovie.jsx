import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PlayMovie = ({ allowControls = 0 }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const { id: movieId } = useParams();
  const src = `https://www.youtube.com/embed/${trailer?.[movieId]?.key}?showinfo=0&autoplay=1&mute=1&controls=${allowControls}&loop=1&rel=0&autohide=1&start=5&playlist=${trailer?.[movieId]?.key}`;

  return (
    <iframe
      className={`w-full aspect-video relative ${!allowControls && "scale-y-125"} overflow-hidden`}
      src={src}
      title="video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
      loading="lazy"></iframe>
  );
};

export default PlayMovie;