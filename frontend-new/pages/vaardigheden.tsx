import Head from "next/head";
import { useIntl } from "react-intl";
import { VaardighedenNavigationCard } from "../components/VaardighedenNavigationCard";

export default function Vaardigheden() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>LEF - {intl.formatMessage({ id: "SKILLS" })}</title>
      </Head>

      <VaardighedenNavigationCard />
    </>
  );
}
