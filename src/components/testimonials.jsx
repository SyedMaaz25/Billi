import React from "react";
import { Box } from "../atom/box";
import { Typography } from "../atom/typography";
import { Container } from "../atom/container";
import { makeStyles } from "@mui/styles";
import { Grid } from "../atom/grid";
import arrow from "../assets/images/testimonials/arrow.png";
import person from "../assets/images/testimonials/person.png";
import "swiper/swiper-bundle.css";
import { TestimonialsDetails } from "../../index.json";
import { Divider, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.color.text,
    padding: theme.spacing(0, 0, 10),
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5, 0, 10),
    },
  },
  personImage: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  swiper: {
    width: "100%",
    height: "100%",
  },
  swiperSlide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  clientImage: {
    borderRadius: "100%",
  },
  testimonialsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1rem",
      padding: "2rem 0rem",
      textAlign: "center",
    },
    "& h5": {
      fontWeight: "bolder",
      padding: theme.spacing(5, 0, 1.3),
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
      },
    },
    "& p": {
      [theme.breakpoints.down("md")]: {},
    },
  },
  divider: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  contactContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0, 13),
    padding: theme.spacing(15, 0, 0),
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      justifyContent: "center",
      padding: theme.spacing(0),
      gap: theme.spacing(0, 5),
    },
    "& h1": {
      fontSize: "10rem !important",
      fontWeight: "bolder !important",
      [theme.breakpoints.down("md")]: {
        fontSize: "4rem !important",
      },
    },
    "& img": {
      width: "15%",
    },
  },
  nextSlideContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1.50rem",
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  iconContainer: {
    background: `${theme.palette.color.other} !important`,
    "&:hover": {
      background: `${theme.palette.color.primary} !important`,
      transition: "all 0.70s ease",
    },
  },
  icon: {
    fontSize: "2rem !important",
    color: theme.palette.color.text,
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  const [swiper, setSwiper] = React.useState(null);

  const handleNextSlide = () => {
    swiper.slideNext();
  };

  const handlePreviousSlide = () => {
    swiper.slidePrev();
  };

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Container>
          <Grid container alignItems="center" columnSpacing={40}>
            <Grid item md={4} xs={12}>
              <img src={person} alt={person} className={classes.personImage} />
            </Grid>
            <Grid item md={8} xs={12}>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                modules={[Navigation]}
                onSwiper={(swiper) => setSwiper(swiper)}
                className={classes.swiper}
              >
                {TestimonialsDetails?.map(
                  ({ id, src, title, subTitle, description }) => {
                    return (
                      <SwiperSlide className={classes.swiperSlide} key={id}>
                        <Box className={classes.testimonialsContainer}>
                          <Box>
                            <img
                              src={src}
                              alt={src}
                              className={classes.clientImage}
                            />
                            <Typography variant="h5">{title}</Typography>
                            <Typography variant="body1" component="p">
                              {subTitle}
                            </Typography>
                          </Box>
                          <Divider
                            className={classes.divider}
                            sx={{
                              border: "1px solid #ff7425",
                              padding: "11rem 0rem",
                            }}
                          />
                          <Box>
                            <Typography variant="h6">
                              "{description}"
                            </Typography>
                            <Box className={classes.nextSlideContainer}>
                              <IconButton
                                className={classes.iconContainer}
                                onClick={handlePreviousSlide}
                              >
                                <ArrowBackIcon className={classes.icon} />
                              </IconButton>
                              <IconButton
                                className={classes.iconContainer}
                                onClick={handleNextSlide}
                              >
                                <ArrowForwardIcon className={classes.icon} />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </SwiperSlide>
                    );
                  }
                )}
              </Swiper>
            </Grid>
          </Grid>

          <Box className={classes.contactContainer}>
            <Typography variant="h1" component="h1">
              Let`s Talk
            </Typography>
            <img src={arrow} alt={arrow} />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Testimonials;
