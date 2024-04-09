import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
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
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
