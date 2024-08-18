import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { Grid } from "@mui/material";
import { NavigationCardButton } from "../components/NavigationCardButton";
import { NavigationCard } from "../components/NavigationCard";
import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { BeroepstakenOrVaardigheden as BeroepstakenType } from "../types/BeroepstakenOrVaardigheden";
import { getBeroepstakenOrVaardigheden } from "../util/getBeroepstakenOrVaardigheden";
import { filterBeroepstaken } from "../util/filterBeroepstaken";
import { LevelsCard } from "../components/LevelsCard";
import {
  architecture_layers,
  Architectuurlaag,
} from "../types/Architectuurlaag";
import { Activiteit, activities } from "../types/Activiteit";
import DefaultErrorPage from "next/error";

export const getStaticProps: GetStaticProps = async (context) => {
  // static site generation
  const beroepstaken = await getBeroepstakenOrVaardigheden(
    "hboi",
    context.locale === "en" ? "en" : "nl"
  );

  if (context.locale === "en")
    // disable english translations whilst there are none
    return {
      notFound: true,
    };

  return {
    props: {
      beroepstaken,
    },
  };
};

export default function Beroepstaken({
  beroepstaken,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const intl = useIntl();
  const router = useRouter();

  const { activiteit, architectuurlaag } = router.query as {
    [key: string]: string;
  };

  if (activiteit && !activities.includes(activiteit as Activiteit))
    return <DefaultErrorPage statusCode={404} />;

  if (
    architectuurlaag &&
    !architecture_layers.includes(architectuurlaag as Architectuurlaag)
  )
    return <DefaultErrorPage statusCode={404} />;

  const filteredBeroepstaken: BeroepstakenType = filterBeroepstaken(
    beroepstaken,
    {
      activiteit,
      architectuurlaag,
    }
  );

  return (
    <>
      <Head>
        <title>LEF - {intl.formatMessage({ id: "PROFESSIONAL_DUTIES" })}</title>
      </Head>
      <Grid container spacing={2}>
        <Grid container item spacing={2} component={"header"}>
          <Grid item xs={12} component={"section"}>
            <NavigationCard
                title={<FormattedMessage id="ARCHITECTURE_LAYERS" />}
                subheader={<FormattedMessage id="ARCHITECTURE_LAYERS_SUBHEADER" />}
            >
              {architecture_layers.map((architecture_layer) => (
                  <NavigationCardButton
                      key={architecture_layer}
                      title={<FormattedMessage id={architecture_layer} />}
                      query_param_key="architectuurlaag"
                      query_param_value={architecture_layer}
                      props={{ xs: 12, lg: 2.4 }}
                  />
              ))}
            </NavigationCard>
          </Grid>
          <Grid item xs={12} component={"section"}>
            <NavigationCard
                title={<FormattedMessage id="ACTIVITIES" />}
                subheader={<FormattedMessage id="ACTIVITIES_SUBHEADER" />}
            >
              {activities.map((activity) => (
                  <NavigationCardButton
                      key={activity}
                      title={<FormattedMessage id={activity} />}
                      query_param_key="activiteit"
                      query_param_value={activity}
                      props={{ xs: 12, lg: 2.4 }}
                  />
              ))}
            </NavigationCard>
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          {Object.keys(filteredBeroepstaken).map((beroepstaakKey) => (
              <LevelsCard
                  key={beroepstaakKey}
                  title={beroepstaakKey}
                  item={filteredBeroepstaken[beroepstaakKey]}
              />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
