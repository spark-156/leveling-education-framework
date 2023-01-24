import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IntlProvider } from "react-intl";

import Layout from "../components/Layout";
import { useTranslation } from "../hooks/useTranslation";
import SelectedThemeProvider from "../providers/SelectedThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale, messages } = useTranslation();

  return (
    <IntlProvider
      messages={messages}
      locale={locale ? locale : "nl"}
      defaultLocale={defaultLocale}
    >
      <SelectedThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SelectedThemeProvider>
    </IntlProvider>
  );
}
