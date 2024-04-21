import React from "react";
import MovieDetails from "./MovieDetails";
import Footer from "../common/Footer";

const MoviePlayer = () => {
  return (
    <div>
      <MovieDetails />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MoviePlayer;
