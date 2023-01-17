import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";
import React from "react";
import Link from "next/link";
import { Box, Stack } from "@mui/material";

function Logo(props: { currentTheme: "light" | "dark" | null }) {
  return (
    <Box
      component="img"
      sx={{
        height: 40,
      }}
      alt="LEF Logo"
      src={props.currentTheme === "light" ? "/logo_light.png" : "logo_dark.png"}
    />
  );
}

export default function ToolbarTitle(props: {
  currentTheme: "light" | "dark" | null;
}) {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        noWrap
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Link href="/" style={{ width: "100%" }}>
          <Stack width={"100%"} alignItems="center" direction="row" gap={2}>
            <Logo currentTheme={props.currentTheme} />
            <FormattedMessage id={"TITLE_LONG"} />
          </Stack>
        </Link>
      </Typography>
      <Typography
        variant="h6"
        component="div"
        noWrap
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Link href="/" style={{ width: "100%" }}>
          <Stack width={"100%"} alignItems="center" direction="row" gap={2}>
            <Logo currentTheme={props.currentTheme} />
          </Stack>
        </Link>
      </Typography>
      <Box flexGrow={1} />
    </>
  );
}
