import { Grid, Stack, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { InfoDrawerButton } from "./InfoDrawerButton";

export function Level(props: {
  niveauKey: string;
  title: string;
  info: string;
}) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Stack gap={1}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" fontWeight="normal" component={"h2"}>
            <FormattedMessage id="NIVEAU" /> {props.niveauKey}
          </Typography>

          {props.info ? (
            <InfoDrawerButton niveau={props.niveauKey} info={props.info} />
          ) : null}
        </Stack>
        <Typography
          variant="body2"
          whiteSpace="pre-wrap"
          sx={{ wordBreak: "break-word" }}
        >
          {props.title}
        </Typography>
      </Stack>
    </Grid>
  );
}
