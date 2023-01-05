import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IntlProvider } from "react-intl";

import Layout from "../components/Layout";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "../hooks/useTranslation";

export default function App({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale, messages } = useTranslation();
  const { activeTheme, selectedTheme, toggleTheme } = useTheme();

  return (
    <IntlProvider
      messages={messages}
      locale={locale ? locale : "nl"}
      defaultLocale={defaultLocale}
    >
      <ThemeProvider theme={activeTheme}>
        <Layout toggleTheme={toggleTheme} currentTheme={selectedTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </IntlProvider>
  );
}
