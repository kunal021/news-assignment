import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slice/news";
import saveReducer from "./slice/save";

const store = configureStore({
  reducer: {
    news: newsReducer,
    save: saveReducer,
  },
});

export default store;
