import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";

export default function Contributor(props: {
  avatarImageSrc?: string;
  outsideSrc?: string;
  name: string;
  description: string;
}) {
  return (
    <ListItem
      alignItems="flex-start"
      disablePadding
      secondaryAction={
        props.outsideSrc ? (
          <a target="_blank" rel="noopener noreferrer" href={props.outsideSrc}>
            <IconButton>
              <OpenInNewIcon />
            </IconButton>
          </a>
        ) : null
      }
    >
      <ListItemAvatar>
        <Avatar src={props.avatarImageSrc ? props.avatarImageSrc : undefined}>
          {props.avatarImageSrc ? null : props.name.slice(0, 2)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.name} secondary={props.description} />
    </ListItem>
  );
}
