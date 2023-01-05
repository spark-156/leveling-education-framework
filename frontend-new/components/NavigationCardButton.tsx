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
  let href;
  if (router.query[query_param_key] === query_param_value) {
    const { [query_param_key]: _, ...query } = router.query;
    href = { query };
  } else {
    href = { query: { ...router.query, [query_param_key]: query_param_value } };
  }

  return (
    <Grid item {...props}>
      <Link href={href} style={{ width: "100%" }}>
        <Button
          sx={{ textTransform: "none" }}
          variant={
            query_param_value === router.query[query_param_key]
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
