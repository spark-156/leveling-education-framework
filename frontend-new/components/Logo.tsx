import { Box } from "@mui/material";
import React from "react";

export function Logo(props: { currentTheme: "light" | "dark" | null }) {
  return (
    <Box
      component="img"
      sx={{
        height: 40,
        width: 40,
      }}
      alt="LEF Logo"
      src={
        props.currentTheme === "light" ? "/logo_light.svg" : "/logo_dark.svg"
      }
    />
  );
}
