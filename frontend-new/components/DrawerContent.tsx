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
          formattedMessageId={"HOME"}
        />
        <DrawerContentLink
          currentPathname={pathname}
          href={"/beroepstaken"}
          formattedMessageId={"PROFESSIONAL_DUTIES"}
        />
      </List>
    </div>
  );
}
