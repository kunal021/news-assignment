import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slice/news";

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
