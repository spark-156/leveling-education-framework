import List from "@mui/material/List";
import React from "react";
import { Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import { DrawerContentLink } from "./DrawerContentLink";

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
        <DrawerContentLink
          currentPathname={pathname}
          href={"/"}
          formattedMessageId={"PROFESSIONAL_DUTIES"}
        />
        <DrawerContentLink
          currentPathname={pathname}
          href={"/vaardigheden"}
          formattedMessageId={"SKILLS"}
        />
        <DrawerContentLink
          currentPathname={pathname}
          href={"/about"}
          formattedMessageId={"ABOUT"}
        />
      </List>
    </div>
  );
}
