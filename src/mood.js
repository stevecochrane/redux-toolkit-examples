import { createAction, createReducer } from "@reduxjs/toolkit";

export const MOODS = {
  SAD: "sad",
  SHOCKED: "shocked",
  HAPPY: "happy",
  BLISSFUL: "blissful",
  LOVESTRUCK: "lovestruck",
  EXCITED: "excited",
  KO: "ko"
};

const INITIAL_STATE = { mood: MOODS.SAD };

const UPDATE_MOOD = "UPDATE_MOOD";
export const updateCatMood = createAction(UPDATE_MOOD);

export const reducer = createReducer(
  INITIAL_STATE,
  {
    [updateCatMood]: (state, action) => {
      state.mood = action.payload;
    }
  },
  [],
  (state) => state
};
