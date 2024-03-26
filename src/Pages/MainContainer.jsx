import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import { Carousel } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const MainContainer = () => {
  useNowPlayingMovies();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // const trailerMovies = movies.slice(0, 6);
  // if (!trailerMovies.length) return <Skeleton className="h-96 w-[90vw] rounded-xl mx-auto mt-3" />;

  return (
    <div className="text-white px-4 mx-auto w-[95%] mt-5">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 15000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}></Carousel>
    </div>
  );
};

export default MainContainer;
