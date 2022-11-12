import { useThemeSwitcher } from "react-css-theme-switcher";
import React, { useState } from "react";
import { HalfMoon, SunLight } from "iconoir-react";
import Loading from "./Loading";
import { Button, Tooltip } from "antd";

export function ThemeSwitch(){
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const [, setIsDarkMode] = useState(false);

  if (status === "loading") {
    return <Loading />;
  }

  const toggleDarkMode = () => {
    setIsDarkMode(previous => {
      switcher({ theme: previous ? themes.light : themes.dark });
      return !previous;
    });
  };

  return (<Tooltip title={"Current theme is: " + currentTheme} >
    <Button aria-label="switch theme" onClick={toggleDarkMode}>
      { currentTheme === themes.light ? <HalfMoon />  : <SunLight /> }
    </Button>
  </Tooltip>);
}