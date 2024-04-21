import React from "react";
import { useSelector } from "react-redux";
import useLatestMovies from "../hooks/useLatestMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import useHorror from "../hooks/useHorror";
import ShimmerCards from "../components/ShimmerCards";
import MovieList from "../components/MovieList";

const SecondaryContainer = () => {
  useLatestMovies();
  useTopRated();
  useUpcoming();
  useHorror();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const latestMovies = useSelector((store) => store.movies.latestMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const horrorMovies = useSelector((store) => store.movies.horrorMovies);
  return (
    <div className="relative overflow-auto">
      {nowPlayingMovies[0] && <MovieList title="Keep Watching" movies={nowPlayingMovies[0]} count={6} />}
      {latestMovies && <MovieList title="Popular" movies={latestMovies} count={20} />}
      {topRatedMovies && <MovieList title="Top Rated" movies={topRatedMovies} count={34} />}
      {upcomingMovies && <MovieList title="Upcoming" movies={upcomingMovies} count={48} />}
      {horrorMovies && (
        <div className="mb-80">
          <MovieList title="Horror" movies={horrorMovies} count={62} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
