import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { TMDB_MOVIE_POSTER } from "../utils/constants";
import useMovie from "../hooks/useMovie";
import { Check, Info, Play, Plus, ShoppingBagIcon, Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const movieData = useSelector((store) => store.movies?.movieDtls);
  useMovie(movieId);

  if (!movieData) return null;

  const { title, overview, vote_average: rating, original_language: language, adult: isAdult, backdrop_path: thumbnail } = movieData;
  const movieLogo = movieData?.movie_logo ? <img src={TMDB_MOVIE_POSTER + movieData?.movie_logo} alt={title} className="w-10 md:w-72 md:max-h-[120px] lg:max-w-[80%]" /> : <div className="text-white w-20 md:w-72 text-xs md:text-4xl">{title}</div>;

  const backgroundImage = TMDB_MOVIE_POSTER + thumbnail;

  return (
    <div
      className="px-20 pt-4 md:pt-32 absolute bg-gradient-to-r from-black from-10% w-full aspect-video z-10 text-white h-[85vh]"
      style={{
        background: `linear-gradient(to right, black ${backgroundImage ? "10%" : "20%"}, transparent), url(${backgroundImage}) no-repeat center center/cover`,
      }}>
      <div>
        <div className="flex">
          <span className="flex text-xs md:text-lg pe-2">
            <div className="bg-yellow-500 rounded-sm px-1 text-black font-extrabold me-2 ">TMDb</div>
            {rating ? rating.toFixed(1) : 7.4}
          </span>
          <Star color="#f4d50b" fill="#f4d50b" strokeWidth={3} className="md:mt-[2px] -mt-1 w-2 md:w-4" />
        </div>
        <div className="max-w-fit">
          <div className="text-3xl mt-5 py-2 rounded-lg mb-1 bg-gradient-to-r from-transparent via-sky-600 to-transparent">{movieLogo}</div>
        </div>
        <p className="text-xl w-[40%] py-4 hidden md:block">{overview || "No description available!"}</p>
        <div className="mt-4 md:mt-12 lg:mt-6 flex">
          {movieData ? (
            <span className="flex text-sm md:text-lg">
              <Check strokeWidth={5} color="#000000" className="bg-sky-500 h-4 rounded-full p-1 me-2 mt-1 w-4 md:w-6 md:h-6" />
              Included with Prime
            </span>
          ) : (
            <span className="flex text-xs md:text-lg">
              <ShoppingBagIcon strokeWidth={2} color="#fbbf24" className="h-4 me-2 w-4 md:w-6 md:h-6" />
              Available to rent
            </span>
          )}
          <span className="text-xs md:text-lg font-semibold px-1 py-[2px] mx-3 bg-neutral-700 rounded-md">{isAdult ? "A 18+" : "U/A 13+"}</span>
        </div>
        <div className="flex mt-2 md:mt-4">
          {movieData ? (
            <Link to={`/play/${movieId}`} className="bg-white rounded-full w-fit h-fit p-2 md:p-4 hover:scale-105 hover:opacity-90 cursor-pointer">
              <Play color="#000000" strokeWidth={3} fill="#000000" className="color-black ps-1 h-4 w-4 md:h-8 md:w-8" />
            </Link>
          ) : (
            <div className="bg-white rounded-lg w-fit h-fit p-1 md:p-4 hover:scale-105 hover:opacity-90 cursor-pointer text-black text-xs md:text-xl font-medium">More Details</div>
          )}
          {movieData && <div className="ps-5 text-xl flex items-center">Play Trailer</div>}
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

export default MovieDetails;
