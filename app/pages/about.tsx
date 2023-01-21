import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import React, { useContext } from "react";
import { SelectedThemeContext } from "../context/SelectedThemeContext";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WebIcon from "@mui/icons-material/Web";
import SchoolIcon from "@mui/icons-material/School";
import Contributor from "../components/Contributor";

export default function About() {
  const { selectedTheme } = useContext(SelectedThemeContext);
  const cardMediaHeight = "400";

  const intl = useIntl();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader title={intl.formatMessage({ id: "MADE_BY" })} />
          <CardMedia
            component="img"
            height={cardMediaHeight}
            image="/fotovanmij.jpeg"
            alt="Luca Bergman"
          />
          <CardContent>
            <Typography variant="h5">Luca Bergman</Typography>
            <Typography variant="body1">
              <FormattedMessage id="ABOUT_LUCA_BERGMAN_DESCRIPTION" />
            </Typography>
            <List>
              <ListItem disablePadding>
                <a
                  style={{ width: "100%" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lucabergman.nl/"
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <FormattedMessage id="ABOUT_PROFILE_WEBSITE_TEXT" />
                    </ListItemText>
                  </ListItemButton>
                </a>
              </ListItem>
              <ListItem disablePadding>
                <a
                  style={{ width: "100%" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/luca-bergman-30b28b203/"
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText>LinkedIn</ListItemText>
                  </ListItemButton>
                </a>
              </ListItem>
              <ListItem disablePadding>
                <a
                  style={{ width: "100%" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/spark-156"
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText>GitHub</ListItemText>
                  </ListItemButton>
                </a>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader title={intl.formatMessage({ id: "MADE_POSSIBLE_BY" })} />

          <CardMedia
            component="img"
            height={cardMediaHeight}
            image={
              selectedTheme === "light" ? "/OI_Black.svg" : "/OI_White.svg"
            }
            alt="Open-ICT logo"
          />
          <CardContent>
            <Typography variant="h5">Open-ICT</Typography>
            <List>
              <ListItem disablePadding>
                <a
                  style={{ width: "100%" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.hu.nl/voltijd-opleidingen/open-ict"
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <FormattedMessage id="ABOUT_EDUCATION_LINK_TEXT" />
                    </ListItemText>
                  </ListItemButton>
                </a>
              </ListItem>
              <ListItem disablePadding>
                <a
                  style={{ width: "100%" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://husite.nl/open-ict/"
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <WebIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <FormattedMessage id="ABOUT_EDUCATION_SITE_TEXT" />
                    </ListItemText>
                  </ListItemButton>
                </a>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader title={intl.formatMessage({ id: "CONTRIBUTORS" })} />

          <CardMedia
            component="img"
            height={cardMediaHeight}
            image="/thankyou.gif"
            alt="Thank you gif"
          />
          <CardContent>
            <List sx={{ width: "100%" }}>
              <Contributor
                avatarImageSrc="/kevindemeijer.jpeg"
                name="Kevin de Meijer"
                outsideSrc="https://nl.linkedin.com/in/kevindemeijer"
                description={intl.formatMessage({
                  id: "THANK_YOU_KEVIN_DE_MEIJER_DESC",
                })}
              />
              <Contributor
                name="Gideon Swaak"
                description={intl.formatMessage({
                  id: "THANK_YOU_GIDEON_SWAAK_DESC",
                })}
              />
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
