import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FormattedMessage } from "react-intl";
import React from "react";

export function DrawerContentLink({
  href,
  currentPathname,
  formattedMessageId,
}: {
  href: string;
  currentPathname: string;
  formattedMessageId: string;
}) {
  return (
    <ListItem disablePadding>
      <Link href={href} style={{ width: "100%" }}>
        <ListItemButton selected={currentPathname === href}>
          <ListItemText
            primary={<FormattedMessage id={formattedMessageId} />}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
