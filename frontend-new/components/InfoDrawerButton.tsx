import { FormattedMessage, useIntl } from "react-intl";
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import CloseIcon from "@mui/icons-material/Close";

export function InfoDrawerButton(props: { niveau: string; info: string }) {
  const [open, setOpen] = useState(false);
  const intl = useIntl();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        variant="temporary"
        anchor="right"
        // To be above navbar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Box
          width={250}
          maxWidth="80%"
          m={3}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">
              <FormattedMessage id="NIVEAU" /> {props.niveau}
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Typography>
            <ReactMarkdown
              className="markdown"
              components={{
                h1: "h2",
              }}
            >
              {props.info}
            </ReactMarkdown>
          </Typography>
        </Box>
      </Drawer>
      <Tooltip
        arrow
        title={intl.formatMessage(
          {
            id: "INFO_BUTTON_TOOLTIP",
          },
          { niveau: props.niveau }
        )}
      >
        <IconButton onClick={handleOpen}>
          <InfoOutlinedIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}
