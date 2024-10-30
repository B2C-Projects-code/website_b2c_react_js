import { createAction } from "@reduxjs/toolkit";
export const setMode = createAction<string>("SET_MODE");
export const setDirection = createAction<any>("SET_DIRECTION");
export const setLocale = createAction<any>("SET_LOCALE");
export const setIsDarkMode = createAction<any>("SET_DARK");
