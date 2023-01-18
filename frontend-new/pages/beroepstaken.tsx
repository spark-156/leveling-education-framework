import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { NavigationCardButton } from "../components/NavigationCardButton";
import { NavigationCard } from "../components/NavigationCard";
import { useRouter } from "next/router";
import { Architectuurlaag } from "../types/Architectuurlaag";
import { Activiteit } from "../types/Activiteit";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Beroepstaken as BeroepstakenType } from "../types/Beroepstaken";
import { getBeroepstaken } from "../util/getBeroepstaken";
import { filterBeroepstaken } from "../util/filterBeroepstaken";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const getStaticProps: GetStaticProps = async (context) => {
  // static site generation
  const beroepstaken = await getBeroepstaken(context.locale);

  return {
    props: {
      beroepstaken,
    },
  };
};

export default function Beroepstaken({
  beroepstaken,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { activiteit, architectuurlaag } = router.query as {
    [key: string]: string;
  };

  const filteredBeroepstaken: BeroepstakenType = filterBeroepstaken(
    beroepstaken,
    {
      activiteit,
      architectuurlaag,
    }
  );

  const intl = useIntl();
  const architecture_layers: Architectuurlaag[] = [
    "Gebruikersinteractie",
    "Organisatieprocessen",
    "Infrastructuur",
    "Software",
    "Hardwareinterfacing",
  ];
  const activities: Activiteit[] = [
    "Analyseren",
    "Adviseren",
    "Ontwerpen",
    "Realiseren",
    "Manage & Control",
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
                query_param_key="architectuurlaag"
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
        {Object.keys(filteredBeroepstaken).map((beroepstaakKey) => (
          <Grid item xs={12} key={beroepstaakKey}>
            <Card>
              {/* TODO translate beroepstaken */}
              <CardHeader title={beroepstaakKey} />
              <CardContent>
                <Grid container spacing={3}>
                  {Object.keys(filteredBeroepstaken[beroepstaakKey]).map(
                    (niveauKey) => (
                      <Grid key={niveauKey} item xs={12} sm={6} md={3}>
                        <Stack gap={1}>
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Typography variant="h6" fontWeight="normal">
                              <FormattedMessage id="NIVEAU" /> {niveauKey}
                            </Typography>

                            {filteredBeroepstaken[beroepstaakKey][niveauKey]
                              .info ? (
                              <Tooltip
                                arrow
                                title={intl.formatMessage(
                                  {
                                    id: "INFO_BUTTON_TOOLTIP",
                                  },
                                  { niveau: niveauKey }
                                )}
                              >
                                <IconButton>
                                  <InfoOutlinedIcon />
                                </IconButton>
                              </Tooltip>
                            ) : null}
                          </Stack>
                          <Typography variant="body2" whiteSpace="pre-wrap">
                            {
                              filteredBeroepstaken[beroepstaakKey][niveauKey]
                                .title
                            }
                          </Typography>
                        </Stack>
                      </Grid>
                    )
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
