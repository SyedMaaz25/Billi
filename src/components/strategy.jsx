import React from "react";
import { Box } from "../atom/box";
import { Typography } from "../atom/typography";
import { Container } from "../atom/container";
import { Grid } from "../atom/grid";
import { makeStyles } from "@mui/styles";
import { Button } from "../atom/button";
import circle from "../assets/images/strategy/circle.png";
import brand1 from "../assets/images/brands/brand-1.png"
import brand2 from "../assets/images/brands/brand-2.png"
import brand3 from "../assets/images/brands/brand-3.png"
import brand4 from "../assets/images/brands/brand-4.png"
import brand5 from "../assets/images/brands/brand-5.png"
import brand6 from "../assets/images/brands/brand-6.png"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 15),
    color: theme.palette.color.text,
    overflow: "hidden",
    [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 0, 4),
      },
  },
  sectionName:{
    padding:theme.spacing(0,0,10),
    [theme.breakpoints.down("md")]: {
    padding:theme.spacing(0,0,5),
        "& h2":{
            fontSize:"2rem"
        }
      },
  },
  circleImage:{
    [theme.breakpoints.down("md")]: {
        width:"100%"
  },
},
  strategyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    [theme.breakpoints.down("md")]: {
      display: "inline",
      flexWrap: "wrap",
    },
  },
  flexCol1: {
    border: "1px solid gray",
    padding: theme.spacing(8),
    borderRadius: "100%",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0,0,6),
      border: "0px",
    },
    "& li": {
      padding: theme.spacing(0),
      "& a": {
        textDecoration: "none",
        color: theme.palette.color.text,
        fontSize: "1.20rem",
        "&::after": {
          content: "'>'",
          marginLeft: "0.60rem",
          fontSize: "2rem",
          color: theme.palette.color.primary,
        },
        "&:hover": {
          color: theme.palette.color.primary,
          transition: "all 0.40s ease",
        },
      },
    },
  },
  flexCol3: {
    border: `1px solid${theme.palette.color.primary}`,
    padding: theme.spacing(8),
    borderRadius: "100%",
    "& h1":{
        color:theme.palette.color.primary
    },
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6,0,0),
      border: "0px",
    },
  },
  brandsContainer:{
    padding:theme.spacing(12,0,0),
    alignItems:'center',
    [theme.breakpoints.down('md')]: {
    padding:theme.spacing(4,2),
    },
  },
  brandImage:{
    filter: "brightness(0%) invert(100%)",
    "&:hover":{
    filter: "brightness(100%) invert(0%)",
    transition:"all 0.50s ease",
    cursor:"pointer"
    },
    [theme.breakpoints.down('md')]: {
      padding:theme.spacing(2,0)
    },
  }
}));

const Services = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Container>
          <Box className={classes.sectionName}>
            <Typography variant="body1" fontWeight="bold">
              STRATEGIC LINK BUILDING
            </Typography>
            <Typography variant="h2" component="h2" pt="1rem" fontWeight="bold">
              Grow Your Traffic, Leads &
            </Typography>
            <Typography variant="h2" component="h2" fontWeight="bold">
              Revenue with Results-Driven SEO
            </Typography>
          </Box>
          <Box className={classes.strategyContainer}>
            <Box className={classes.flexCol1}>
              <Typography variant="h1" fontWeight="bolder">
                20x
              </Typography>
              <Typography variant="h6" pt="0.80rem" fontWeight="bolder">
                Traffic will Multiplied
              </Typography>
              <Typography variant="body1" pt="1rem">
                Targeted StrategiesThrough our years of experience, we’ve also
                learned that while each channel has its own set of advantages.
              </Typography>
              <Button variant="accent">Read More</Button>
            </Box>
            <Box marginRight="-4rem" marginLeft="-4rem" zIndex="1">
              <img src={circle} alt={circle} className={classes.circleImage} />
            </Box>
            <Box className={classes.flexCol3}>
              <Typography variant="h1" component="h1" fontWeight="bolder">
                10x
              </Typography>
              <Typography variant="h6" pt="0.80rem" fontWeight="bolder">
                Traffic was Multiplied
              </Typography>
              <Typography variant="body1"  pt="0.80rem">
                Targeted StrategiesThrough our years of experience, we’ve also
                learned that while each channel has its own set of advantages.
              </Typography>
              <Button variant="accent">Read More</Button>
            </Box>
          </Box>
          <Grid container className={classes.brandsContainer} alignItems="center">
            <Grid item md={2} xs={6}><img src={brand1} alt={brand1} className={classes.brandImage}  /></Grid>
            <Grid item md={2} xs={6}><img src={brand2} alt={brand2} className={classes.brandImage}  /></Grid>
            <Grid item md={2} xs={6}><img src={brand3} alt={brand3} className={classes.brandImage}  /></Grid>
            <Grid item md={2} xs={6}><img src={brand4} alt={brand4} className={classes.brandImage}  /></Grid>
            <Grid item md={2} xs={6}><img src={brand5} alt={brand5} className={classes.brandImage}  /></Grid>
            <Grid item md={2} xs={6}><img src={brand6} alt={brand6} className={classes.brandImage}  /></Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Services;