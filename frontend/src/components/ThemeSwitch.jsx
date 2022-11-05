import { useThemeSwitcher } from "react-css-theme-switcher";
import React from "react";
import { HalfMoon, SunLight } from "iconoir-react";
import Loading from "./Loading";

export function ThemeSwitch(){
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const [, setIsDarkMode] = React.useState(false);

  if (status === "loading") {
    return <Loading />;
  }

  const toggleDarkMode = () => {
    setIsDarkMode(previous => {
      switcher({ theme: previous ? themes.light : themes.dark });
      return !previous;
    });
  };

  return (
    <div className="theme-switch" style={{display: "inline", position: "relative",verticalAlign:"middle", marginRight: 5, cursor:"pointer"}} >
      {
        currentTheme === "light" ? <HalfMoon />  : <SunLight onClick={toggleDarkMode}/> 
      }
    </div>
  );
}