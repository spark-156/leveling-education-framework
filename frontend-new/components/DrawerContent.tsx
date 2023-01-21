import List from "@mui/material/List";
import React from "react";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  Toolbar,
} from "@mui/material";
import { useRouter } from "next/router";
import { DrawerContentLink } from "./DrawerContentLink";
import ListItemText from "@mui/material/ListItemText";
import { FormattedMessage } from "react-intl";
import ListItemButton from "@mui/material/ListItemButton";

export default function DrawerContent({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) {
  const { pathname } = useRouter();

  return (
    <>
      <Toolbar />
      <List>
        <DrawerContentLink
          onClick={handleDrawerToggle}
          currentPathname={pathname}
          href={"/"}
          formattedMessageId={"PROFESSIONAL_DUTIES"}
        />
        <DrawerContentLink
          onClick={handleDrawerToggle}
          currentPathname={pathname}
          href={"/vaardigheden"}
          formattedMessageId={"SKILLS"}
        />
        <DrawerContentLink
          onClick={handleDrawerToggle}
          currentPathname={pathname}
          href={"/about"}
          formattedMessageId={"ABOUT"}
        />
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText>
            <FormattedMessage id="MADE_BY" />
          </ListItemText>
        </ListItem>
        <a
          style={{ width: "100%" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/luca-bergman-30b28b203/"
        >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar src="/fotovanmij.jpeg" alt="Luca Bergman" />
            </ListItemAvatar>
            <ListItemText>Luca Bergman</ListItemText>
          </ListItemButton>
        </a>
      </List>
    </>
  );
}
