import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

export default function Custom404() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Stack justifyContent="center" alignItems="center" flexDirection="column">
      <Typography variant="h2">404</Typography>
      <Typography variant="h6">
        <FormattedMessage id="NOT_FOUND" />
      </Typography>
      <Typography
        onClick={handleGoBack}
        variant="body1"
        sx={{ textDecoration: "underline", cursor: "pointer" }}
      >
        <FormattedMessage id="GO_BACK" />
      </Typography>
    </Stack>
  );
}
