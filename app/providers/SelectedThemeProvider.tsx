import { ReactNode, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LocalStorageEnum } from "../types/LocalStorageEnum";
import { ThemesEnum } from "../types/ThemesEnum";
import { SelectedThemeContext } from "../context/SelectedThemeContext";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes/light-theme";
import { darkTheme } from "../themes/dark-theme";

export default function SelectedThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const { value: selectedTheme, setItem: setSelectedTheme } =
    useLocalStorage<ThemesEnum>(LocalStorageEnum.Theme) as {
      value: ThemesEnum;
      setItem: (value: ThemesEnum) => void;
    };

  function getActiveTheme(themeMode: string | null) {
    return themeMode === "light" ? lightTheme : darkTheme;
  }

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  function toggleSelectedTheme() {
    setSelectedTheme(
      selectedTheme === ThemesEnum.Light ? ThemesEnum.Dark : ThemesEnum.Light
    );
  }

  return (
    <SelectedThemeContext.Provider
      value={{ selectedTheme, activeTheme, toggleSelectedTheme }}
    >
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    </SelectedThemeContext.Provider>
  );
}
