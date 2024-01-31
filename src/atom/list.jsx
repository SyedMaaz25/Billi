import React from "react";
import {
  List as Mlist,
  ListItem as MlistItem,
  ListItemText as MlistItemText,
} from "@mui/material";

export const List = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <Mlist {...props}>{children}</Mlist>
    </React.Fragment>
  );
};

export const ListItem = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <MlistItem {...props}>{children}</MlistItem>
    </React.Fragment>
  );
};

export const ListItemText = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <MlistItemText {...props}>{children}</MlistItemText>
    </React.Fragment>
  );
};