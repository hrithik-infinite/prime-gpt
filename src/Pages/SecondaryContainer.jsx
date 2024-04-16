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
      {nowPlayingMovies && <MovieList title="Dil Hai Hindustani" movies={nowPlayingMovies} count={6} />}
      <ShimmerCards />
      <ShimmerCards />
      <ShimmerCards />
    </div>
  );
};

export default SecondaryContainer;
