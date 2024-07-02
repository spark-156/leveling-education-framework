import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="icon" href="/logo_light.svg" media="(prefers-color-scheme: dark)"/>
            <link rel="icon" href="/logo_dark.svg" media="(prefers-color-scheme: light)"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
