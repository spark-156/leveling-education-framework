import Navbar from "./Navbar";
import React, { ReactNode } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";

const drawerWidth = 240;

export default function Layout({
  children,
  toggleTheme,
  currentTheme,
}: {
  children: ReactNode;
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar
        drawerWidth={drawerWidth}
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
      {/*<Footer />*/}
    </Box>
  );
}
