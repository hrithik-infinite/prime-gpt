import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);

  const getNowPlaying = async () => {
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?region=IN&language=en-US&release_date.gte=2017-08-01&with_original_language=en", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addNowPlayingMovies(response.results))
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (!(nowPlayingMovies.length)) {
      getNowPlaying();
    }
  }, []);
};

export default useNowPlayingMovies;
