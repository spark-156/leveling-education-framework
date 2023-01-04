import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { Typography } from "@mui/material";

export default function Beroepstaken() {
  const intl = useIntl();
  return (
    <>
      <Head>
        <title>LEF - {intl.formatMessage({ id: "PROFESSIONAL_DUTIES" })}</title>
      </Head>
      <Typography>
        <FormattedMessage id="PROFESSIONAL_DUTIES" />
      </Typography>
    </>
  );
}
