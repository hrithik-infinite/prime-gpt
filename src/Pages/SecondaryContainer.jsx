import React from "react";
import useLatestMovies from "../hooks/useLatestMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import useHorror from "../hooks/useHorror";

const SecondaryContainer = () => {
  useLatestMovies();
  useTopRated();
  useUpcoming();
  useHorror();
  return <div>SecondaryContainer</div>;
};

export default SecondaryContainer;
