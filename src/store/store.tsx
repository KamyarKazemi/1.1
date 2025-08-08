import { configureStore } from "@reduxjs/toolkit";
import { nameReducer } from "./slices/nameSlice";

const store = configureStore({
  reducer: {
    nameReducer,
  },
});

export { store };
