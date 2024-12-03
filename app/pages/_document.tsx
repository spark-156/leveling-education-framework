import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="shortcut icon" href="/logo_dark.svg"/>
            <link rel="apple-touch-icon" href="/logo_dark.svg"/>
            <link rel="icon" type="image/png" href="/logo_dark.svg"/>
            <link rel="manifest" href="/manifest.json"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
