import React from "react";
import { Box as Mbox } from "@mui/material";

export const Box = ({ children, ...props }) => {
  return <Mbox {...props}>{children}</Mbox>;
};