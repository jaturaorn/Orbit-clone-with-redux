import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./postsSlice";

export const store = configureStore({
  reducer: { pick: appSlice },
});
