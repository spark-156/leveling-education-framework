import React, { ReactNode } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export function ListItemLink(props: {
  href: string;
  text: string;
  icon?: ReactNode;
}) {
  return (
    <ListItem disablePadding>
      <a
        style={{ width: "100%" }}
        target="_blank"
        rel="noopener noreferrer"
        href={props.href}
      >
        <ListItemButton>
          {props.icon ? <ListItemIcon>{props.icon}</ListItemIcon> : null}
          <ListItemText>{props.text}</ListItemText>
        </ListItemButton>
      </a>
    </ListItem>
  );
}
