import React from "react";
import { Box } from "../atom/box";
import { Typography } from "../atom/typography";
import { Button } from "../atom/button";
import { Container } from "../atom/container";
import { Grid } from "../atom/grid";
import { makeStyles } from "@mui/styles";
import banner from "../assets/images/methodology/banner.jpg";
import { MethodologyDetails } from "../../index.json";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0, 15),
    color: theme.palette.color.text,
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 0, 4),
      },
  },
  readMore: {
    "& a": {
      color: theme.palette.color.primary,
      textDecoration: "none",
      fontWeight: "bolder",
      "&:hover": {
        color: theme.palette.color.text,
        transition: "all 0.50s ease",
      },
    },
  },
  title: {
    '&::before': {
      content: "'◯'",
      marginRight: '0.80rem',
      fontSize: '0.80rem',
    },
    '&:hover::before': {
      color: theme.palette.color.primary,
    },
  },
  videoContainer: {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    padding: theme.spacing(30, 38),
    borderRadius: "5px",
    backgroundPosition: "center right",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(20,15),
      width: "100%",
    backgroundPosition: "center",
    },
  },
  icon: {
    fontSize: "7rem !important",
    color: theme.palette.color.text,
    "&:hover": {
      color: theme.palette.color.primary,
      transition: "all 0.50s ease",
    },
  },
}));

const Methodology = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Container>
          <Grid container alignItems="center" columnSpacing={5}>
            <Grid item md={6} xs={12}>
              <Typography variant="body2" fontWeight="bolder">
                CONVERSIONS AND STRONG ROI
              </Typography>
              <Typography variant="h3" fontWeight="bolder" pt="1rem">
                Our SEO
              </Typography>
              <Typography variant="h3" fontWeight="bolder">
                Methodology
              </Typography>
              <Grid container pt="2rem" columnSpacing={2} alignItems="center">
                {MethodologyDetails?.map(({ id, title, description }) => {
                  return (
                    <Grid item md={6} key={id} pb="1rem">
                      <Typography variant="h5" fontWeight="bolder" className={classes.title}>
                        {title}
                      </Typography>
                      <Typography variant="body1" pt="1rem">
                        {description}
                      </Typography>
                      <Typography
                        variant="body2"
                        pt="1rem"
                        className={classes.readMore}
                      >
                        <a href="#">READ MORE</a>
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box className={classes.videoContainer}>
                <IconButton className={classes.iconContainer}>
                  <PlayCircleIcon className={classes.icon} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Methodology;
