import React from "react";
import { Container as Mcontainer } from "@mui/material";

export const Container = ({ children, ...props }) => {
  return <Mcontainer {...props}>{children}</Mcontainer>;
};