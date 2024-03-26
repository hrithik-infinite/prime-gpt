import React, { useState } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import VideoTitle from "../components/VideoTitle";
import VideoBackground from "../components/VideoBackground";
import { Circle } from "lucide-react";

const MainContainer = () => {
  const [current, setCurrent] = useState(0);

  useNowPlayingMovies();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailerMovies = movies[0]?.slice(0, 6);
  if (!trailerMovies?.length) return <Skeleton className="h-96 w-[90vw] rounded-xl mx-auto mt-3" />;

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
        }}>
        <CarouselContent>
          {trailerMovies?.map((movie, index) => {
            const { adult, title, original_language, vote_average, id, backdrop_path, description } = movie;
            return (
              <CarouselItem key={id}>
                <div className={`ml-5 ${current !== index && "opacity-30"}`}>
                  <VideoTitle movie={movie} />
                  <VideoBackground />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-5 text-center flex justify-center text-sm text-muted-foreground gap-4">
        {Array.from({ length: trailerMovies?.length || 6 }).map((_, index) => (index === current ? <Circle size={10} fill="#ffffff" key={index} /> : <Circle size={10} fill="#808080" color="#808080" key={index} />))}
      </div>
    </div>
  );
};

export default MainContainer;
