import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import {Button, Grid, GridProps, useMediaQuery, useTheme} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import {fontSize} from "@mui/system";
import {Biotech, CalendarMonth, CoPresent, Handshake, MenuBook} from "@mui/icons-material";

export function NavigationCardButton({
  title,
  query_param_key,
  query_param_value,
  props = { xs: 12, sm: 6 },
}: {
  title: string | ReactNode;
  query_param_key: string;
  query_param_value: string;
  props?: GridProps;
}) {
  const router = useRouter();
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  let href;
  if (router.query[query_param_key] === query_param_value) {
    const { [query_param_key]: _, ...query } = router.query;
    href = { query };
  } else {
    href = { query: { ...router.query, [query_param_key]: query_param_value } };
  }

  let icon;
  switch(query_param_value) {
    case "Juiste kennis ontwikkelen":
      icon = (<MenuBook sx={{fontSize: 48}} />)
      break;
    case "Kwalitatief product maken":
      icon = (<Biotech sx={{fontSize: 48}} />)
      break;
    case "Kwalitatief product maken":
      icon = (<Biotech sx={{fontSize: 48}} />)
      break;
    case "Kwalitatief product maken":
      icon = (<Biotech sx={{fontSize: 48}} />)
      break;
    case "Samenwerken":
      icon = (<Handshake sx={{fontSize: 48}} />)
      break;
    case "Boodschap delen":
      icon = (<CoPresent sx={{fontSize: 48}} />)
      break;
    case "Plannen":
      icon = (<CalendarMonth sx={{fontSize: 48}} />)
      break;
    case "Kwalitatief product maken":
      icon = (<Biotech sx={{fontSize: 48}} />)
      break;
    case "Kwalitatief product maken":
      icon = (<Biotech sx={{fontSize: 48}} />)
      break;
    case "Kwalitatief product maken":
      icon = (<Biotech sx={{fontSize: 48}} />)
      break;
    default:
      icon = (<MenuIcon sx={{fontSize: 48}} />)
      break;
  }

  return (
    <Grid item {...props}>
      <Link href={href} style={{ width: "100%" }}>
        <Button
          sx={ isLarge ? { textTransform: "none", flexDirection: "column", aspectRatio: "1.7777777777777777" } : { textTransform: "none"}}
          variant={
            query_param_value === router.query[query_param_key]
              ? "contained"
              : "outlined"
          }
          fullWidth
        >
          { isLarge
              ? icon
              : null
          }

          {title}
        </Button>
      </Link>
    </Grid>
  );
}
