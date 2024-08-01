import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectlanguage = (state) => state.language;

const languageSelector = createDraftSafeSelector(
  selectlanguage,
  (language) => language
);

export default languageSelector;
