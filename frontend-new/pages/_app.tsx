import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IntlProvider } from "react-intl";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import English from "../lang/en.json";
import Dutch from "../lang/nl.json";
import Layout from "../components/Layout";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes/light-theme";
import { darkTheme } from "../themes/dark-theme";

export default function App({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter();
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");

  function getActiveTheme(themeMode: "light" | "dark") {
    return themeMode === "light" ? lightTheme : darkTheme;
  }

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  const toggleTheme = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";

    setSelectedTheme(desiredTheme);
  };

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
      <ThemeProvider theme={activeTheme}>
        <Layout toggleTheme={toggleTheme} currentTheme={selectedTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </IntlProvider>
  );
}
