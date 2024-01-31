import React from "react";
import { Menu as Mmenu, MenuItem as MmenuItem } from "@mui/material";

export const Menu = ({ children, open, anchorEl, onClose, ...props }) => {
  return (
    <React.Fragment>
      <Mmenu {...props} open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={onClose}>
        {children}
      </Mmenu>
    </React.Fragment>
  );
};

export const MenuItem = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <MmenuItem {...props}>{children}</MmenuItem>
    </React.Fragment>
  );
};