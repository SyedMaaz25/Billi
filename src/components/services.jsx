import React from "react";
import { Box } from "../atom/box";
import { Typography } from "../atom/typography";
import { makeStyles } from "@mui/styles";
import { Card, CardContent } from "@mui/material";
import { ServicesDetails } from "./index.json";
import s from "../assets/images/offer/service1.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 13),
    color: theme.palette.color.text,
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 0, 10),
    
    },
  },
  serviceContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "inline",
      flexWrap: "wrap",
      justifyContent: "start",
    },
  },
  serviceCard: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: theme.spacing(4, 0),
    borderRadius: "0px !important",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 0),
    },
    "&:hover": {
      width: "100%",
      transition: "all 1s ease",
      height: "77vh",
      padding: theme.spacing(2, 3),
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      [theme.breakpoints.down("md")]: {
        height: "auto",
        width: "auto",
        padding: theme.spacing(10, 0),
      },
      [theme.breakpoints.up("md")]: {
        "& h4": {
          padding: "2rem 0rem 20rem",
        },
      },
    },
  },
  cardContent: {
    color: theme.palette.color.text,
  },
  cardNumber: {
    padding: "0rem 0rem 20rem",
    WebkitTextFillColor: "transparent !important",
    WebkitTextStroke: "1px #fff !important",
    [theme.breakpoints.down("md")]: {
      padding: "0rem 0rem 1rem",
    },
  },
  readMore: {
    background: "#565758",
    borderRadius: "100%",
    padding: theme.spacing(2),
    "&:hover": {
      background: theme.palette.color.primary,
      cursor: "pointer",
    },
  },
  customCursor: {
    position: "absolute",
    background: "#565758",
    padding: theme.spacing(3),
    borderRadius: "100%",
    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  strokeText: {
    fontWeight: "100 !important",
    WebkitTextFillColor: "transparent",
    WebkitTextStroke: "1px #fff",
    cursor: "none",
  },
  scrollingContainer: {
    width: "100%",
    whiteSpace: "nowrap",
    animation: "$scrollRight 20s linear infinite",
  },
  "@keyframes scrollRight": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
}));

const Services = () => {
  const classes = useStyles();
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setCursorPosition(false);
  };

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.serviceContainer}>
          {ServicesDetails?.map(({ id, title, src }) => (
            <Card
              key={id}
              className={classes.serviceCard}
              sx={{
                backgroundImage: `url(${s})`,
                cursor: cursorPosition ? "none" : "auto",
              }}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="h2"
                  component="h4"
                  className={classes.cardNumber}
                >
                  0{id}
                </Typography>
                <Typography variant="h3" pb="2rem" fontWeight="bolder">
                  {title}
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  className={classes.readMore}
                >
                  →
                </Typography>
              </CardContent>
            </Card>
          ))}
          {cursorPosition && (
            <Box
              className={classes.customCursor}
              style={{ left: cursorPosition.x, top: cursorPosition.y }}
            >
              C!
            </Box>
          )}
        </Box>
        <Box className={classes.scrollingContainer} pt="5rem">
          <Typography variant="h1" fontSize="10rem">
            <span className={classes.strokeText}>_ eCommerce_</span>Marketing
            <span className={classes.strokeText}>_SEO.</span>
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Services;
