import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countryValue: "jakarta",
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    passCountry: (state, action) => {
      state.countryValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { passCountry } = countrySlice.actions;

export default countrySlice.reducer;
