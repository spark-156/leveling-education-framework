import { useRouter } from "next/router";
import English from "../lang/en.json";
import Dutch from "../lang/nl.json";
import { useMemo } from "react";

export function useTranslation() {
  const { locale, defaultLocale } = useRouter();

  const EnglishMessages = { ...English };
  const DutchMessages = { ...Dutch };

  const messages = useMemo(() => {
    switch (locale) {
      case "en":
        return EnglishMessages;
      case "nl":
        return DutchMessages;
      default:
        return DutchMessages;
    }
    // eslint-disable-next-line
  }, [locale]);

  return {
    messages,
    locale,
    defaultLocale,
  };
}
