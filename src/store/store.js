import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slices/data/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
