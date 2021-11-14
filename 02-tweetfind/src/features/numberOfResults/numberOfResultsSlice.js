import { createSlice } from "@reduxjs/toolkit";

// create the slice
const numberOfResultsSlice = createSlice({
  name: "numberOfResults",
  initialState: "10",
  reducers: {
    setNumberOfResults(state, action) {
      return action.payload;
    },
  },
});

// export the action creator and reducer
export const { setNumberOfResults } = numberOfResultsSlice.actions;
export default numberOfResultsSlice.reducer;
