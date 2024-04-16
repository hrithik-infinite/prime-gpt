import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_LATEST, TMDB_URL, TMDB_MOVIE_IMAGES } from "../utils/constants";
import { addLatestMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useLatestMovies = () => {
  const dispatch = useDispatch();
  //   const latestMovies = useSelector((store) => store.movies.latestMovies);
  const latestMovies = useSelector((store) => store.movie?.latestMovies);
  const getLatestMovies = async () => {
    try {
      console.log("atyttjenciencs");
      const data = await fetch(TMDB_URL + TMDB_MOVIE_LATEST, API_OPTIONS);
      const json = await data.json();
      for (const movie of json.results) {
        try {
          const logoData = await fetch(TMDB_URL + movie.id + TMDB_MOVIE_IMAGES, API_OPTIONS);
          const logoJson = await logoData.json();
          const filteredLogo = logoJson.logos.filter((image) => image.iso_639_1 === "en");
          const logo_key = filteredLogo.length > 0 ? filteredLogo[0].file_path : logoJson.logos[0]?.file_path;
          const trailerwithMovieId = {
            ...movie,
            movie_logo: logo_key,
          };
          dispatch(addLatestMovies(trailerwithMovieId));
        } catch (error) {
          console.error("Error fetching movie logo:", error);
        }
      }
    } catch (e) {
      console.error("Error fetching latest movies:", e);
    }
  };
  useEffect(() => {
    if (!latestMovies?.length) getLatestMovies();
  }, []);
};

export default useLatestMovies;
