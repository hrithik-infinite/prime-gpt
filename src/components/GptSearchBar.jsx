import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import OpenAI from "openai";
import { API_OPTIONS, DUMMY_GPT_RESULTS, TMDB_MOVIE_SEARCH, gptQuery } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(TMDB_MOVIE_SEARCH(movieName), API_OPTIONS);
    const json = await data.json();
    return json.results;
  };
  const handleSearch = async () => {
    try {
    //   const gptResults = DUMMY_GPT_RESULTS;
    //   const recommendedMovies = gptResults?.split(",");

        const gptResults = await openai.chat.completions.create({
          messages: [{ role: "user", content: gptQuery + searchQuery }],
          model: "gpt-3.5-turbo",
        });
        const recommendedMovies = gptResults?.choices?.[0]?.message?.content?.split(",");

      const movieDataPromises = recommendedMovies?.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(movieDataPromises);
      dispatch(
        addGptMovieResult({
          movieNames: recommendedMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("openai error", error);
    }
  };

  return (
    <div className="flex justify-center pt-[10%]">
      <div className="flex items-center bg-gray-800 rounded-lg p-2 w-1/2">
        <Input className="bg-transparent text-white flex-grow px-4 py-2 focus:outline-none" placeholder="What would you like to watch today?" type="text" name="gptsearch" value={searchQuery} onChange={handleInputChange} />
        <Button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg" type="submit" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default GptSearchBar;
