import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./country";

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});
