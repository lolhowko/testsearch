import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../api/api";
import userReducer from "./slice/userSlice";

export default configureStore({
  reducer: {
    users: userReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
