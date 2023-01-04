import { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LocalStorageEnum } from "../types/LocalStorageEnum";
import { ThemesEnum } from "../types/ThemesEnum";
import { SelectedThemeContext } from "../context/SelectedThemeContext";

export default function SelectedThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { value: selectedTheme, setItem: setTheme } =
    useLocalStorage<ThemesEnum>(LocalStorageEnum.Theme);

  function toggleSelectedTheme() {
    setTheme(
      selectedTheme === ThemesEnum.Light ? ThemesEnum.Dark : ThemesEnum.Light
    );
  }

  return (
    <SelectedThemeContext.Provider
      value={{ selectedTheme, toggleSelectedTheme }}
    >
      {children}
    </SelectedThemeContext.Provider>
  );
}
