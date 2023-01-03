import Navbar from "./Navbar";
import React, { ReactNode } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";

const drawerWidth = 240;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar drawerWidth={drawerWidth} />
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
