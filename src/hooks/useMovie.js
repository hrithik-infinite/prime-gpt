// useMovie.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_URL } from "../utils/constants";
import { addMovieForDtls } from "../utils/moviesSlice";

const useMovie = (movieId) => {
  const dispatch = useDispatch();
  const movieDtls = useSelector((store) => store.movies?.movieDtls);

  useEffect(() => {
    const getMovieDtls = async () => {
      try {
        if (!movieDtls) {
          const response = await fetch(TMDB_URL + movieId, API_OPTIONS);
          const json = await response.json();
          dispatch(addMovieForDtls(json));
        }
      } catch (error) {
        console.error("Error fetching movie Data :", error);
      }
    };

    getMovieDtls();
  }, [dispatch, movieDtls, movieId]);

  return movieDtls;
};

export default useMovie;
