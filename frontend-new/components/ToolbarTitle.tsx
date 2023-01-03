import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";
import React from "react";
import Link from "next/link";

export default function ToolbarTitle() {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        noWrap
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        <Link href="/">
          <FormattedMessage id={"TITLE_LONG"} />
        </Link>
      </Typography>
      <Typography
        variant="h6"
        component="div"
        noWrap
        sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
      >
        <Link href="/">
          <FormattedMessage id={"TITLE"} />
        </Link>
      </Typography>
    </>
  );
}
