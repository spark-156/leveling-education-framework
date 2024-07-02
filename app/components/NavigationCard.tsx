import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { ReactNode } from "react";

export function NavigationCard({
  title,
  subheader,
  children,
}: {
  title: string | ReactNode;
  subheader: string | ReactNode;
  children: ReactNode;
}) {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardHeader title={title} subheader={subheader} component={"h1"} />
      <CardContent>
        <Grid container spacing={1}>
          {children}
        </Grid>
      </CardContent>
    </Card>
  );
}
