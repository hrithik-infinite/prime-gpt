import HOME_BANNER1 from "../assets/banner-1.jpeg";
import HOME_BANNER2 from "../assets/banner-2.jpeg";
export const dropdownValues = {
  Home: ["All", "Movies", "TV Shows"],
  Store: ["All", "Rent", "Channels"],
  Lang: ["En", "Hi", "Ben", "Es", "Ar"],
  MyStuff: ["All", "Watchlist", "Rentals"],
  userProfile: ["Account & Settings", "Prime Benefits", "Help", "Settings", "Sign Out"],
};

export const bannerContent = [
  {
    title: "Welcome to Prime Video",
    description: "Watch the latest movies, TV shows, and award-winning Amazon Originals",
    buttonText: "Sign in to join Prime",
    bannerImg: HOME_BANNER1,
  },
  {
    title: "Movie rentals on Prime Video",
    description: "Early Access to new movies, before digital subscription",
    buttonText: "Rent now",
    bannerImg: HOME_BANNER2,
  },
];
export const cardImgUrls = [
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_BBC_PLAYER.png",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Chaupal.png",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Anime.jpg",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png",
  "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg",
];
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
  },
};
export const TMDB_MOVIE_POSTER = "https://image.tmdb.org/t/p/original";
export const TMDB_URL = "https://api.themoviedb.org/3/movie/";
export const TRAILER_CONFIG = "/videos?language=en-US";
export const TMDB_MOVIE_IMAGES = "/images";
export const TMDB_MOVIE_LATEST = "popular?page=1";
export const TMDB_MOVIE_TOP_RATED = "top_rated?page=1";
export const TMDB_MOVIE_UPCOMING = "upcoming?page=1";
export const TMDB_MOVIE_HORROR = "&with_genres=27";
export const TMDB_DISCOVER_URL = "https://api.themoviedb.org/3/discover/movie?";
export const gptQuery =
  "Act as a Movie Recommendation system and suggest some movies for the given query. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Movie1, Movie2, Movie3, Movie4, Movie5  Query: ";
export const DUMMY_GPT_RESULTS = "Raaz, Bhool Bhulaiyaa, 1920, Pari, Stree";
export const TMDB_MOVIE_SEARCH = (movieName) =>
  `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;