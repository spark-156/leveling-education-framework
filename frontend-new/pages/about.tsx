import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

export default function About() {
  return (
    <Typography variant="body1">
      <FormattedMessage id="HELLO_WORLD" />
    </Typography>
  );
}
