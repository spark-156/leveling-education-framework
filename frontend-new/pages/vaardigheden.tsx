import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { Typography } from "@mui/material";

export default function Vaardigheden() {
  const intl = useIntl();
  return (
    <>
      <Head>
        <title>LEF - {intl.formatMessage({ id: "SKILLS" })}</title>
      </Head>
      <Typography>
        <FormattedMessage id="SKILLS" />
      </Typography>
    </>
  );
}
