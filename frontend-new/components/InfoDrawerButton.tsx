import { useIntl } from "react-intl";
import { IconButton, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export function InfoDrawerButton(props: { niveau: string }) {
  const intl = useIntl();

  return (
    <Tooltip
      arrow
      title={intl.formatMessage(
        {
          id: "INFO_BUTTON_TOOLTIP",
        },
        { niveau: props.niveau }
      )}
    >
      <IconButton>
        <InfoOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
}
