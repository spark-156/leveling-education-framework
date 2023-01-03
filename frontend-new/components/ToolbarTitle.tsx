import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";
import React from "react";

export default function ToolbarTitle() {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        noWrap
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        <FormattedMessage id={"TITLE_LONG"} />
      </Typography>
      <Typography
        variant="h6"
        component="div"
        noWrap
        sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
      >
        <FormattedMessage id={"TITLE"} />
      </Typography>
    </>
  );
}
