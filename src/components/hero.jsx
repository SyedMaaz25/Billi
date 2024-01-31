import React from "react";
import { Box } from "../atom/box";
import { Typography } from "../atom/typography";
import { Button } from "../atom/button";
import banner from "../assets/images/hero/banner.png";
import mobileBanner from "../assets/images/hero/banner.jpg";
import { Divider } from "@mui/material";
import { Grid } from "../atom/grid";
import { makeStyles } from "@mui/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Container } from "../atom/container";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: theme.spacing(38, 0, 25),
    margin: theme.spacing(-13, 0),
    backgroundPosition: "center",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(25, 1, 10),
    backgroundImage: `url(${mobileBanner})`,
    },
  },
  divider: {
    border: "1px solid gray !important",
    position: "absolute",
    top: 110,
    left: 0,
    right: 0,
    padding: "0rem",
  },
  gridCol1: {
    "& div": {
      display: "flex",
      alignItems: "center",
      gap: "1.50rem",
      paddingBottom: "2rem",
      [theme.breakpoints.down("md")]: {
        border: "1px solid",
        padding: theme.spacing(2, 6),
        borderRadius: "10px",
        margin: theme.spacing(2, 0),
      },
    },
    "& h2": {
      fontWeight: "bolder",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 1),
    },
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      "& button": {
        width: "100%",
      },
    },
  },
  gridCol2: {
    [theme.breakpoints.down("md")]: {
      "& h2": {
        fontSize: "2.80rem",
      },
    },
  },
  gridCol3: {
    paddingLeft: "3rem",
    "& h6": {
      padding: "0.50rem 0rem",
      "& a": {
        color: "#fff",
        textDecoration: "none",
        "&:hover": {
          color: theme.palette.color.primary,
          textDecoration: "underline",
          transition: "all 0.40s ease",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 1, 1),
    },
  },
  iconsContainer: {
    display: "flex",
    gap: theme.spacing(2),
    padding: theme.spacing(3, 0),
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Container>
          <Divider className={classes.divider} />
          <Grid container alignItems="center">
            <Grid
              item
              md={3}
              order={{ xs: 1, md: 0 }}
              className={classes.gridCol1}
            >
              <Box className={classes.childContainer} component="div">
                <Typography variant="h2">10x</Typography>
                <Typography variant="h6">Traffic Multiplied</Typography>
              </Box>
              <Box className={classes.childContainer} component="div">
                <Typography variant="h2">40k</Typography>
                <Typography variant="h6">Contact Profile</Typography>
              </Box>
              <Box className={classes.childContainer} component="div">
                <Typography variant="h2">3k+</Typography>
                <Typography variant="h6">Using Vault</Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              textAlign="center"
              className={classes.gridCol2}
            >
              <Typography variant="h2" pb="2rem" fontWeight="bolder">
                Increase Your Web Traffic with Our Experts.
              </Typography>
              <Box className={classes.buttonContainer}>
                <Button variant="primary">start right now</Button>
                <Button variant="secondary">about seo agency</Button>
              </Box>
            </Grid>
            <Grid item md={3} xs={12} className={classes.gridCol3}>
              <Typography variant="h6">
                <a href="#">27 Division St, New York, NY 10002, USA</a>
              </Typography>
              <Typography variant="h6">
                <a href="#">+1 800 123 456 789</a>
              </Typography>
              <Typography variant="h6">
                <a href="#">bili@mail.com</a>
              </Typography>
              <Box className={classes.iconsContainer}>
                <InstagramIcon />
                <XIcon />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ marginBottom: "7rem" }}></Box>
    </React.Fragment>
  );
};

export default Hero;