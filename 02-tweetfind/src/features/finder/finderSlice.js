import { createSlice } from "@reduxjs/toolkit";
import { findTweets } from "./findTweets";

export const fetchTweets = (searchValue, numberOfResults) => async (dispatch) => {
  try {
    dispatch(isLoadingTweets());
    const tweets = await findTweets(searchValue, numberOfResults);
    dispatch(loadingTweetsSuccess(tweets));
  } catch (error) {
    const errorMsg = error.toString();
    dispatch(loadingTweetsFailed(errorMsg));
  }
};

const initialState = { error: null, isLoading: false, tweets: [] };

const finderSlice = createSlice({
  name: "finder",
  initialState,
  reducers: {
    isLoadingTweets(state) {
      state.isLoading = true;
    },
    loadingTweetsFailed(state, payload) {
      state.isLoading = false;
      state.error = payload;
    },
    loadingTweetsSuccess(state, { payload }) {
      state.tweets = payload;
      state.isLoading = false;
      state.error = null;
    }
  }
});

export const { isLoadingTweets, loadingTweetsFailed, loadingTweetsSuccess } = finderSlice.actions;
export default finderSlice.reducer;
