import { Avatar, Stack, Typography } from "@mui/material";

export default function Contributor(props: {
  avatarImageSrc?: string;
  outsideSrc?: string;
  name: string;
  description: string;
}) {
  return (
    <a
      style={{ width: "100%" }}
      target="_blank"
      rel="noopener noreferrer"
      href={props.outsideSrc ? props.outsideSrc : undefined}
    >
      <Stack alignItems="center" direction="row" gap={2}>
        <Avatar src={props.avatarImageSrc ? props.avatarImageSrc : undefined}>
          {props.avatarImageSrc ? null : props.name.slice(0, 2)}
        </Avatar>
        <Stack justifyContent="center" direction="column" gap={0}>
          <Typography
            variant="h5"
            sx={{ textDecoration: props.outsideSrc ? "underline" : "" }}
          >
            {props.name}
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
        </Stack>
      </Stack>
    </a>
  );
}
