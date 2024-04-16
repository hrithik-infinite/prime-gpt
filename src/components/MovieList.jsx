import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, count }) => {
  return (
    <div className="mb-10 mx-16">
      <div className="hover:relative hover:z-10">
        <h1 className="text-white font-semibold text-lg md:text-xl py-4">{title}</h1>
        <div className="hide-scroll">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
