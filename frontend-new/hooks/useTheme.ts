import { lightTheme } from "../themes/light-theme";
import { darkTheme } from "../themes/dark-theme";
import { useLocalStorage } from "./useLocalStorage";
import { ThemesEnum } from "../types/ThemesEnum";
import { LocalStorageEnum } from "../types/LocalStorageEnum";
import { useEffect, useState } from "react";

export function useTheme() {
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const { value: selectedTheme, setItem: setSelectedTheme } =
    useLocalStorage<ThemesEnum>(LocalStorageEnum.Theme);

  function getActiveTheme(themeMode: string | null) {
    return themeMode === "light" ? lightTheme : darkTheme;
  }

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  function toggleTheme() {
    const desiredTheme =
      selectedTheme === ThemesEnum.Light ? ThemesEnum.Dark : ThemesEnum.Light;

    setSelectedTheme(desiredTheme);
  }

  return {
    toggleTheme,
    selectedTheme,
    activeTheme,
  };
}
