import React from "react";
import { useSelector } from "react-redux";
import { TMDB_MOVIE_POSTER } from "../utils/constants";
import { useEffect, useState } from "react";

const VideoTitle = ({ movieId, title, language, isAdult, rating, thumbnail, currentIndex }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const isTrailerAvailable = trailer?.[movieId]?.name;
  const movieLogo = trailer?.[movieId]?.movie_logo ? (
    <img src={TMDB_MOVIE_POSTER + trailer?.[movieId]?.movie_logo} alt={title} className="w-10 md:w-72 md:max-h-[120px] lg:max-w-[80%]" />
  ) : (
    <div className="w-20 md:w-72 text-xs md:text-6xl">{title}</div>
  );
  const [backgroundImage, setBackgroundImage] = useState(TMDB_MOVIE_POSTER + thumbnail);
  const languageNames = new Intl.DisplayNames(["en"], {
    type: "language",
  });
  useEffect(() => {
    setBackgroundImage(TMDB_MOVIE_POSTER + thumbnail);
    if (!isTrailerAvailable) return;

    const timer = setTimeout(() => {
      setBackgroundImage("");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, isTrailerAvailable, thumbnail]);
  return (
    <div
      className="px-5 md:px-20 py-1 md:py-10 absolute bg-gradient-to-r from-black from-40% w-screen aspect-video z-10"
      style={{
        background: `linear-gradient(to right, black ${backgroundImage ? "20%" : "40%"}, transparent), url(${backgroundImage}) no-repeat center center/cover`,
      }}>
      VideoTitle
    </div>
  );
};

export default VideoTitle;
