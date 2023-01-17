import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { Grid } from "@mui/material";
import { NavigationCardButton } from "../components/NavigationCardButton";
import { NavigationCard } from "../components/NavigationCard";

export default function Beroepstaken() {
  const intl = useIntl();
  const architecture_layers = [
    "gebruikersinteractie",
    "organisatieprocessen",
    "infrastructuur",
    "software",
    "hardwareinterfacing",
  ];
  const activities = [
    "analyseren",
    "adviseren",
    "ontwerpen",
    "realiseren",
    "manage_en_control",
  ];
  return (
    <>
      <Head>
        <title>LEF - {intl.formatMessage({ id: "PROFESSIONAL_DUTIES" })}</title>
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <NavigationCard
            title={<FormattedMessage id="ARCHITECTURE_LAYERS" />}
            subheader={<FormattedMessage id="ARCHITECTURE_LAYERS_SUBHEADER" />}
          >
            {architecture_layers.map((architecture_layer) => (
              <NavigationCardButton
                key={architecture_layer}
                title={<FormattedMessage id={architecture_layer} />}
                query_param_key="architectuur"
                query_param_value={architecture_layer}
                props={{ xs: 12 }}
              />
            ))}
          </NavigationCard>
        </Grid>
        <Grid item xs={12} sm={6}>
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
                props={{ xs: 12 }}
              />
            ))}
          </NavigationCard>
        </Grid>
      </Grid>
    </>
  );
}
