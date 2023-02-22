import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import commentSlice from "./slices/commentSlice";
import postSlice from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    comment: commentSlice,
  },
});
