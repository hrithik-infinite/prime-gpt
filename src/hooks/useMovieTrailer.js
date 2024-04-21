import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, TMDB_URL, TRAILER_CONFIG, TMDB_MOVIE_IMAGES } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId, description) => {
  const movieTrailer = useSelector((store) => store.movies.trailerVideo?.[movieId]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieTrailer = async () => {
      if (!movieId || movieTrailer) return; // Check if trailer already exists or movieId is not provided
      try {
        const data = await fetch(TMDB_URL + movieId + TRAILER_CONFIG, API_OPTIONS);
        const json = await data.json();
        const filteredResults = json?.results?.filter((video) => video.type === "Trailer");
        const trailer = filteredResults.length ? filteredResults[0] : json.results[0];
        const logoData = await fetch(TMDB_URL + movieId + TMDB_MOVIE_IMAGES, API_OPTIONS);
        const logoJson = await logoData.json();
        const filteredLogo = logoJson.logos.filter((image) => image.iso_639_1 === "en");
        const logo_key = filteredLogo?.file_path ?? logoJson?.logos[0]?.file_path;
        const trailerwithMovieId = {
          ...trailer,
          id: movieId,
          description,
          movie_logo: logo_key,
        };
        dispatch(addTrailerVideo(trailerwithMovieId));
      } catch (error) {
        console.log(error);
      }
    };
    getMovieTrailer();
  }, [dispatch, movieId, movieTrailer, description]);
};

export default useMovieTrailer;
