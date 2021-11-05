import { createAction } from "@reduxjs/toolkit";

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

//reducer
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case updateCatMood.type:
      return { ...state, mood: action.payload };

    default:
      return state;
  }
};
