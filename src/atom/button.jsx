import React from "react";
import { Button as Mbutton } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  primaryButton: {
    backgroundColor: "#ff7425 !important",
    color: "#fff !important",
    padding: "0.90rem 3rem !important",
    borderRadius: "100px !important",
    border: "2px solid #ff7425 !important",
    fontSize: "0.90rem !Important",
    transition: "all 0.50s ease !important",
    fontWeight: "bolder !important",
    "&:hover": {
      background: "none !important",
      border: "2px solid gray !important",
    },
  },
  secondaryButton: {
    background: "none !important",
    color: "#fff !important",
    padding: "0.90rem 3rem !important",
    borderRadius: "100px !important",
    border: "2px solid gray !important",
    fontSize: "0.90rem !Important",
    transition: "all 0.50s ease !important",
    fontWeight: "bolder !important",
    "&:hover": {
      backgroundColor: "#ff7425 !important",
      border: "2px solid #ff7425 !important",
    },
  },
  accentButton: {
    color:`${theme.palette.color.primary} !important`,
    fontWeight: "bolder !important",
    background:"none !important",
      "&::after":{
        content:"'+'",
        fontSize:"1.60rem",
        marginLeft:"0.50rem"
      }
  },
}));

export const Button = ({ children, variant, ...props }) => {
  const classes = useStyles();
  const buttonClass = variant === "primary" ? classes.primaryButton : variant === "secondary" ? classes.secondaryButton : variant === "accent" ? classes.accentButton : "";

  return (
    <Mbutton className={buttonClass} {...props}>
      {children}
    </Mbutton>
  );
};
