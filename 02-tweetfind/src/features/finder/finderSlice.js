import { createSlice } from "@reduxjs/toolkit";
import { findTweets } from "./findTweets";

export const fetchTweets = (searchValue, numberOfResults) => async (dispatch) => {
    dispatch(isLoadingTweets());
    const tweets = await findTweets(searchValue, numberOfResults);
    dispatch(loadingTweetsSuccess(tweets));
};

const initialState = { tweets: [], isLoading: false, error: null };

// create the slice
const finderSlice = createSlice({
  name: "finder",
  initialState,
  reducers: {
    loadingTweetsSuccess(state, {payload}) {
      state.tweets = payload;
      state.isLoading = false;
      state.error = null;
    },
    isLoadingTweets(state) {
      state.isLoading = true;
    }
  }
});

// export the action creator and reducer
export const { isLoadingTweets, loadingTweetsSuccess } = finderSlice.actions;
export default finderSlice.reducer;
