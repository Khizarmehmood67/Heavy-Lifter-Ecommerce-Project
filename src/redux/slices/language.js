import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectlanguage: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setSelectedLanguage: (state, action) => {
      state.selectlanguage = action.payload;
    },
  },
});

export default languageSlice;
export const { setSelectedLanguage } = languageSlice.actions;
