import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { BeroepstaakOrVaardigheid } from "../types/BeroepstakenOrVaardigheden";
import { Level } from "./Level";

export function LevelsCard(props: {
  title: string;
  item: BeroepstaakOrVaardigheid;
}) {
  return (
    <Grid item xs={12}>
      <Card>
        {/* TODO translate titles */}
        <CardHeader title={props.title} />
        <CardContent>
          <Grid container spacing={5}>
            {Object.keys(props.item).map((niveauKey) => (
              <Level
                key={niveauKey}
                niveauKey={niveauKey}
                title={props.item[niveauKey].title}
                info={props.item[niveauKey].info}
              />
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
