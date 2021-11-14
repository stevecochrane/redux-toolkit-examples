import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: "TweetFind"
  }
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => store.replaceReducer(rootReducer));
}

export default store;
