import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FormattedMessage } from "react-intl";
import React from "react";

export function DrawerContentLink(props: {
  onClick?: () => void;
  href: string;
  currentPathname: string;
  formattedMessageId: string;
}) {
  return (
    <ListItem onClick={props.onClick} disablePadding>
      <Link href={props.href} style={{ width: "100%" }}>
        <ListItemButton selected={props.currentPathname === props.href}>
          <ListItemText
            primary={<FormattedMessage id={props.formattedMessageId} />}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
