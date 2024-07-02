import { Box } from "@mui/material";
import React, { useContext } from "react";
import { SelectedThemeContext } from "../context/SelectedThemeContext";

export function Logo() {
  const { selectedTheme } = useContext(SelectedThemeContext);
  return (
    <Box
      component="img"
      sx={{
        height: 40,
        width: 40,
      }}
      alt=""
      src={selectedTheme === "light" ? "/logo_light.svg" : "/logo_dark.svg"}
    />
  );
}
