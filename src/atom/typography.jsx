import React from "react";
import { Typography as MTypography } from "@mui/material";

export const Typography = ({ children, ...props }) => {
  return <MTypography {...props}>{children}</MTypography>;
};