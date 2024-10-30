import { createReducer } from "@reduxjs/toolkit";
import { setMode, setDirection, setLocale, setIsDarkMode } from "./actions";
interface state {
  mode: string;
  isDarkMode: boolean;
  direction: string;
  locale: string;
}
const initialState: state = {
  mode: "light",
  isDarkMode: false,
  direction: "ltr",
  locale: "enUS",
};

export const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(setMode, (state, action: any) => {
    state.mode = action.payload;
  });
  builder.addCase(setDirection, (state, action: any) => {
    state.direction = action.payload;
  });
  builder.addCase(setLocale, (state, action: any) => {
    state.locale = action.payload;
  });
  builder.addCase(setIsDarkMode, (state, action: any) => {
    state.isDarkMode = action.payload;
  });
});
