import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import React from "react";
import { Toolbar } from "@mui/material";

const navItems = [
  "Beroepstaken",
  "Vaardigheden",
  "GitHub",
  "API Documentatie",
  "Luca Bergman",
];

export default function DrawerContent({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) {
  return (
    <Box onClick={handleDrawerToggle}>
      <Toolbar />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
