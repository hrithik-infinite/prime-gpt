import React from "react";
import { TMDB_MOVIE_POSTER } from "../utils/constants";
import movie_bg from "../assets/Prime_Video_logo.avif";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieCard = ({ posterPath, title, logo, description, isAdult, releaseDate, setShowInfo, showInfo, index, movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
//   useMovieTrailer(trailer, description);
  return (
    <div onMouseOver={() => setShowInfo(index)} onMouseLeave={() => setShowInfo(-1)} className={`transition-transform transform relative hover:scale-125 hover:zoom-in-150 ${showInfo === index && "z-40"}`}>
      <div className="w-30 md:w-60 cursor-pointer relative">
        {showInfo !== index ? (
          <img src={posterPath ? TMDB_MOVIE_POSTER + posterPath : movie_bg} alt="movie-card" className={`rounded-lg ${index === showInfo ? "rounded-t-lg rounded-b-none" : "rounded-lg"}`} />
        ) : (
          <iframe
            className="relative z-50 w-full aspect-auto zoom-in-150 scale-y-150"
            src={"https://www.youtube.com/embed/" + trailer?.[movieId]?.key + "?showinfo=0&autoplay=1&mute=1&controls=0&loop=1&rel=0&autohide=1&start=5"}
            title="video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            loading="lazy"></iframe>
        )}
        <div className="text-gray-200 text-center text-sm md:text-lg font-mono absolute bottom-3 right-2">{logo ? <img src={TMDB_MOVIE_POSTER + logo} alt={title} className="w-28" /> : <span>{title}</span>}</div>
      </div>
    </div>
  );
};

export default MovieCard;
