import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    latestMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    horrorMovies: [],
    movieDtls: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies.push(action.payload);
    },
    addTrailerVideo: (state, action) => {
      const { id: movieId } = action.payload;
      state.trailerVideo = {
        ...state.trailerVideo,
        [movieId]: { ...action.payload },
      };
    },
    addLatestMovies: (state, action) => {
      state.latestMovies.push(action.payload);
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies.push(action.payload);
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies.push(action.payload);
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies.push(action.payload);
    },
    addMovieForDtls: (state, action) => {
      state.movieDtls = action.payload;
    },
  },
});

export const { addLatestMovies, addNowPlayingMovies, addTrailerVideo, addTopRatedMovies, addHorrorMovies, addUpcomingMovies, addMovieForDtls } = moviesSlice.actions;

export default moviesSlice.reducer;
