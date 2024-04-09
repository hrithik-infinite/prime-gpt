import React from "react";
import { useSelector } from "react-redux";
import { TMDB_MOVIE_POSTER } from "../utils/constants";
import { useEffect, useState } from "react";
import { Star, Check, Play, Info, Plus, ShoppingBagIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const VideoTitle = ({ movieId, title, language, isAdult, rating, thumbnail, currentIndex }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const isTrailerAvailable = trailer?.[movieId]?.name;
  const movieLogo = trailer?.[movieId]?.movie_logo ? (
    <img src={TMDB_MOVIE_POSTER + trailer?.[movieId]?.movie_logo} alt={title} className="w-10 md:w-72 md:max-h-[120px] lg:max-w-[80%]" />
  ) : (
    <div className="w-20 md:w-72 text-xs md:text-6xl">{title}</div>
  );
  const [backgroundImage, setBackgroundImage] = useState(TMDB_MOVIE_POSTER + thumbnail);
  const languageNames = new Intl.DisplayNames(["en"], {
    type: "language",
  });
  useEffect(() => {
    setBackgroundImage(TMDB_MOVIE_POSTER + thumbnail);
    if (!isTrailerAvailable) return;

    const timer = setTimeout(() => {
      setBackgroundImage("");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, isTrailerAvailable, thumbnail]);
  return (
    <div
      className="px-5 md:px-20 py-1 md:py-10 absolute bg-gradient-to-r from-black from-40% w-screen aspect-video z-10"
      style={{
        background: `linear-gradient(to right, black ${backgroundImage ? "20%" : "40%"}, transparent), url(${backgroundImage}) no-repeat center center/cover`,
      }}>
      <div>
        <div className="flex">
          <span className="flex text-xs mdLtext-lg pe-2">
            <div className="bg-yellow-500 rounded-sm px-1 text-black font-extrabold me-2">TMDb</div>
            {rating ? rating.toFixed(1) : ""}
          </span>
          <Star color="#f4d50b" fill="#f4d50b" strokeWidth={3} className="md:mt-[2px] -mt-1 w-2 md:w-4" />{" "}
        </div>
        <div className="max-w-fit">
          <h1 className="text-6xl mt-5 py-2 rounded-lg mb-1 bg-gradient-to-r from-transparent via-sky-600 to-transparent">{movieLogo}</h1>
          <p className="text-center text-xs md:text-lg">{languageNames.of(language)}</p>
        </div>
        <div className="mt-2 md:mt-12 lg:md-6 flex">
          {isTrailerAvailable ? (
            <span className="flex text-xs md:text-lg">
              <Check strokeWidth={5} color="#000000" className="bg-sky-500 h-4 rounded-full p-1 me-2 mt-1 w-4 md:w-6 md:h-6" />
              Included with Prime
            </span>
          ) : (
            <span className="flex text-xs md:text-lg">
              <ShoppingBagIcon strokeWidth={2} color="#fbbf24" className="h-4 me-2 w-4 md:w-6 md:h-6" />
              Available to rent
            </span>
          )}
          {isTrailerAvailable && <div className="ps-5 text-sm md:text-xl flex items-center">Play Trailer</div>}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="bg-neutral-700 rounded-full p-3 w-fit h-fit ms-10 cursor-pointer hidden md:block">
                  <Plus size={28} color="#ffffff" strokeWidth={3} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-lg">Watchlist </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="bg-neutral-700 rounded-full p-2 md:p-3 w-fit h-fit ms-2 cursor-pointer">
                  <Info color="#ffffff" strokeWidth={2} className="h-3 w-3 md:h-8 md:w-8" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs md:text-lg">Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
