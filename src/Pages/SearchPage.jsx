import React from "react";
import gptBanner from "../assets/GPT-banner.png";
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestions from "../components/GptMovieSuggestions";
import Footer from "../common/Footer";
const SearchPage = () => {
  return (
    <div className="text-white h-screen flex flex-col justify-between bg-slate-900 overflow-auto">
      <GptSearchBar />
      <GptMovieSuggestions />
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
