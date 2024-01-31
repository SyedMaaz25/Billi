import React from "react";
import { Grid as MGrid } from "@mui/material";

export const Grid = ({ children, ...props }) => {
  return <MGrid {...props}>{children}</MGrid>;
};