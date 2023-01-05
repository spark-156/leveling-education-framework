import { ReactNode } from "react";
import { useRouter } from "next/router";
import { Button, Grid, GridProps } from "@mui/material";
import Link from "next/link";

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
  const { [query_param_key]: query_param_value_real } = router.query;

  return (
    <Grid item {...props}>
      <Link
        href={
          query_param_value === query_param_value_real
            ? {}
            : { query: { [query_param_key]: query_param_value } }
        }
        style={{ width: "100%" }}
      >
        <Button
          sx={{ textTransform: "none" }}
          variant={
            query_param_value === query_param_value_real
              ? "contained"
              : "outlined"
          }
          fullWidth
        >
          {title}
        </Button>
      </Link>
    </Grid>
  );
}
