import '../styles/globals.css'
import type {AppProps} from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {IntlProvider} from "react-intl";
import {useMemo} from "react";
import {useRouter} from "next/router";

import English from '../lang/en.json';
import Dutch from '../lang/nl.json';
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath, locale, defaultLocale } = useRouter();

  const messages = useMemo(() => {
    switch (locale) {
      case 'en':
        return English;
      case 'nl':
        return Dutch;
      default:
        return Dutch;
    }
  }, [locale]);

  // TODO move locale switching to its own component
  const language = useMemo(() => {
    if (locale === 'en') {
      return 'nl';
    } else {
      return 'en';
    }
  }, [locale]);

  return (
    <IntlProvider messages={messages} locale={locale ? locale : "nl"} defaultLocale={defaultLocale}>
      <Link href={asPath} locale={language}>
        {language}
      </Link>
      <Component {...pageProps} />
    </IntlProvider>
  )
}
