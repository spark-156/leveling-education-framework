import Head from 'next/head'
import {Typography} from "@mui/material";
import {FormattedMessage} from "react-intl";

export default function Home() {
  return (
    <>
      <Head>
        <title>LEF - Leveling Education Framework</title>
        <meta name="description" content="Leveling Education Framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography variant="body1">
          <FormattedMessage id="TITLE" />
        </Typography>
      </main>
    </>
  )
}
