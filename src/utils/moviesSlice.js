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
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
