// MovieDetails.js
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TMDB_MOVIE_POSTER } from "../utils/constants";
import useMovie from "../hooks/useMovie";

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const movieData = useSelector((store) => store.movies?.movieDtls);
  useMovie(movieId);

  if (!movieData) return null;

  const { title, description, vote_average: rating, original_language: language, adult: isAdult, backdrop_path: thumbnail } = movieData;

  const backgroundImage = TMDB_MOVIE_POSTER + thumbnail;

  return (
    <div
      className="px-20 py-4 md:py-32 absolute bg-gradient-to-r from-black from-10% w-full aspect-video z-10 text-white h-full"
      style={{
        background: `linear-gradient(to right, black ${backgroundImage ? "10%" : "20%"}, transparent), url(${backgroundImage}) no-repeat center center/cover`,
      }}></div>
  );
};

export default MovieDetails;
