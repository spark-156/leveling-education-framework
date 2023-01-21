import { lightTheme } from "../themes/light-theme";
import { createContext } from "react";
import { ThemesEnum } from "../types/ThemesEnum";

export const SelectedThemeContext = createContext({
  selectedTheme: ThemesEnum.Light,
  activeTheme: lightTheme,
  toggleSelectedTheme: () => {},
});
