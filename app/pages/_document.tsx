import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="icon" href="/logo_light.svg" media="(prefers-color-scheme: dark)"/>
            <link rel="icon" href="/logo_dark.svg" media="(prefers-color-scheme: light)"/>
            <link rel="shortcut icon" href="/logo_dark.svg"/>
            <link rel="apple-touch-icon" href="/logo_dark.svg"/>
            <link rel="manifest" href="/manifest.json"/>
            {/*<link rel="icon" type="image/png" href="/logo_dark.svg"/>*/}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
