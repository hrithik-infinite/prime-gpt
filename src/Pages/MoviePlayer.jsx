import React from "react";
import MovieDetails from "./MovieDetails";
import Footer from "../common/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecommendedMovies from "../components/RecommendedMovies";
import MovieDtls from "../components/MovieDtls";

const MoviePlayer = () => {
  return (
    <div className="flex flex-col min-h-[150vh]">
      <div className=" overflow-y-auto h-[85vh]">
        <MovieDetails />
      </div>
      <div className="-mt-5 text-center z-20 text-white">
        <Tabs defaultValue="related">
          <TabsList>
            <TabsTrigger value="related">Related</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="related">
            <RecommendedMovies />
          </TabsContent>
          <TabsContent value="details">
            <MovieDtls />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default MoviePlayer;
