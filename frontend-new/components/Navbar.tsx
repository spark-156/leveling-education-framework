import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ToolbarTitle from "./ToolbarTitle";
import DrawerContent from "./DrawerContent";
import LanguageSelector from "./LanguageSelector";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { LightModeOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";

export default function DrawerAppBar({
  drawerWidth,
  toggleTheme,
  currentTheme,
}: {
  drawerWidth: number;
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <ToolbarTitle />
          <Stack direction="row" gap={1}>
            <IconButton
              color="inherit"
              aria-label="change theme"
              edge="end"
              onClick={toggleTheme}
            >
              {currentTheme === "dark" ? (
                <LightModeOutlined />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
            <LanguageSelector />
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DrawerContent handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerContent handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Box>
    </>
  );
}
