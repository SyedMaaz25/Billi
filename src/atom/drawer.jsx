import React from "react";
import { Box } from "./box";
import { Drawer as MDrawer } from "@mui/material";

export const Drawer = ({ children, open, close, width, ...props }) => {
  return (
    <MDrawer {...props} open={open} onClose={close}>
      <Box style={{ width: `${width}px` }}>{children}</Box>
    </MDrawer>
  );
};