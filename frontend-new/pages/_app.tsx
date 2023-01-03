import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IntlProvider } from "react-intl";
import { useMemo } from "react";
import { useRouter } from "next/router";

import English from "../lang/en.json";
import Dutch from "../lang/nl.json";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter();

  const messages = useMemo(() => {
    switch (locale) {
      case "en":
        return English;
      case "nl":
        return Dutch;
      default:
        return Dutch;
    }
  }, [locale]);

  return (
    <IntlProvider
      messages={messages}
      locale={locale ? locale : "nl"}
      defaultLocale={defaultLocale}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
}
