import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

export default function LanguageSelector() {
  const { asPath, locale, push } = useRouter();

  return (
    <Box flexShrink={1}>
      <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <InputLabel id="select-language">
          <FormattedMessage id="LANGUAGE" />
        </InputLabel>
        <Select
          labelId="select-language"
          id="select-language"
          value={locale}
          label={<FormattedMessage id="LANGUAGE" />}
          onChange={(event: { target: { value: string } }) =>
            push(asPath, asPath, { locale: event.target.value })
          }
        >
          <MenuItem value="nl">Nl</MenuItem>
          <MenuItem value="en">En</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
