import { createSlice } from "@reduxjs/toolkit";

const initialState = { tweets: [] };

// create the slice
const finderSlice = createSlice({
  name: "finder",
  initialState,
  reducers: {
    addTweet(state, payload) {
      state.tweets = payload;
    },
  },
});

// export the action creator and reducer
export const { addTweet } = finderSlice.actions;
export default finderSlice.reducer;
