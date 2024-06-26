import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, currentIndex, videoIndex, description }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId, description);

  const autoplay = currentIndex === videoIndex ? 1 : 0;
  const src = `https://www.youtube.com/embed/${trailer?.[movieId]?.key}?showinfo=0&autoplay=${autoplay}&mute=1&controls=0&loop=1&playlist=${trailer?.[movieId]?.key}`;

  return (
    <div className="w-screen h-[22vh] md:h-[50vh] text-5xl text-white cursor-pointer aspect-auto overflow-hidden scale-125">
      <iframe className="w-screen h-full ps-[37%] md:ps-[25%] aspect-auto scale-125 md:scale-150" src={src} title="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" loading="lazy"></iframe>
    </div>
  );
};

export default VideoBackground;
