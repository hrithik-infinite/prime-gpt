import React from "react";
import useRecommendation from "../hooks/useRecommendation";
import MovieList from "./MovieList";

const RecommendedMovies = () => {
  const recomendedMovies = useRecommendation();
  if (!recomendedMovies) return null;

  return (
    <div>
      <MovieList movies={recomendedMovies} count={recomendedMovies.length} />
    </div>
  );
};

export default RecommendedMovies;
