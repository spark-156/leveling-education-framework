import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useIntl } from "react-intl";
import { useContext } from "react";
import { SelectedThemeContext } from "../context/SelectedThemeContext";

export default function About() {
  const { selectedTheme } = useContext(SelectedThemeContext);

  const intl = useIntl();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader title={intl.formatMessage({ id: "DEVELOPERS" })} />
          <CardMedia
            component="img"
            height="400"
            image="/fotovanmij.jpeg"
            alt="Luca Bergman"
          />
          <CardContent>
            <Typography variant="h5">Luca Bergman</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader title={intl.formatMessage({ id: "MADE_POSSIBLE_BY" })} />

          <CardMedia
            component="img"
            height="400"
            image={selectedTheme === "light" ? "OI_Black.svg" : "OI_White.svg"}
            alt="Open-ICT logo"
          />
          <CardContent>
            <Typography variant="h5">Open-ICT</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader title={intl.formatMessage({ id: "LOGO_BY" })} />

          <CardMedia
            component="img"
            height="400"
            image="/kevindemeijer.jpeg"
            alt="Kevin de Meijer"
          />
          <CardContent>
            <Typography variant="h5">Kevin de Meijer</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
