import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
const useRecommendation = () => {
  const [recomendedMovies, setRecommendedMovies] = useState(null);

  const { id: movieId } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations`, API_OPTIONS);
      const json = await response.json();
      setRecommendedMovies(json.results);
    })();
  }, []);

  return recomendedMovies;
};

export default useRecommendation;
