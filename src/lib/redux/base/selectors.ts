import { RootState } from "../store";

export const darkMode = (state: RootState) => state.root.isDarkMode;
export const themeMode = (state: RootState) => state.root.mode;
