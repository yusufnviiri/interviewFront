import { configureStore } from "@reduxjs/toolkit";
import questions from "./replySlice";

const store = configureStore({
  reducer: {
    questions,
  },
});
export default store;
