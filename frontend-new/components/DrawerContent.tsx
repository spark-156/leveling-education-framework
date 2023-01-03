import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { Toolbar } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";

export default function DrawerContent({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) {
  const { pathname } = useRouter();

  return (
    <div onClick={handleDrawerToggle}>
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <Link href={"/"} style={{ width: "100%" }}>
            <ListItemButton selected={pathname === "/"}>
              <ListItemText primary={<FormattedMessage id={"HOME"} />} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </div>
  );
}
