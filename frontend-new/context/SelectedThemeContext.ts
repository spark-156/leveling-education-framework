import { createContext } from "react";
import { ThemesEnum } from "../types/ThemesEnum";

interface SelectedThemeContextInterface {
  selectedTheme: null | ThemesEnum;
  toggleSelectedTheme: () => void;
}

export const SelectedThemeContext =
  createContext<SelectedThemeContextInterface>({
    selectedTheme: null,
    toggleSelectedTheme: () => {},
  });
