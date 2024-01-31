import React from "react";
import { Box } from "../atom/box";
import { Typography } from "../atom/typography";
import { Button } from "../atom/button";
import { makeStyles } from "@mui/styles";
import { Container } from "../atom/container";
import { Divider } from "@mui/material";
import { Grid } from "../atom/grid";
import { OfferDetails } from "../../index.json";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0),
    color: theme.palette.color.text,
  },
  divider: {
    margin: `${theme.spacing(8, 0)} !Important`,
    border: "1px solid gray !important",
    [theme.breakpoints.down("md")]: {
      margin: `${theme.spacing(5, 0)} !Important`,
    },
  },
  sectionName: {
    [theme.breakpoints.down("md")]: {
      "& h3": {
        fontSize: "2.50rem",
      },
    },
  },
  gridCol1: {
    "& ul": {
      border: "1px solid",
      padding: "1rem",
      borderRadius: "100%",
      marginRight: "1rem",
      [theme.breakpoints.down("md")]: {
        marginBottom: "1rem",
      },
    },
  },
  indexContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.60rem",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
  },
  hoverImage:{
    [theme.breakpoints.down("md")]:{
      display:"none"
    }
  }
}));

const Offer = () => {
  const classes = useStyles();
  const [showIndex, setShowIndex] = React.useState();
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseEnter = (index) => {
    setShowIndex(index);
  };
  
  const handleMouseMove = (event, index) => {
    const clientX = event.clientX;
    const clientY = event.clientY;
    setMousePosition({ x: clientX, y: clientY });
    setShowIndex(index);
  };

  const handleMouseLeave = () => {
    setShowIndex(false);
  };

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Container>
          <Box className={classes.sectionName}>
            <Typography variant="body2">WHAT WE OFFER</Typography>
            <Typography variant="h3" fontWeight="bolder">More Traffic. More Revenue.</Typography>
            <Typography variant="h3" fontWeight="bolder" pb="1rem">Top Rated SEO Agency</Typography>
            {OfferDetails?.map(
              ({ id, title, description, src, alt }) => {
                return (
                  <Box key={id}>
                    <Divider className={classes.divider} />
                    <Grid
                      container
                      columnSpacing={8}
                      spacing={3}
                      alignItems="center"
                      className={classes.gridCol1}
                      onMouseEnter={() => handleMouseEnter(id)}
                      onMouseMove={(event) => handleMouseMove(event, id)}
                      onMouseLeave={() => handleMouseLeave()}
                      >
                      <Grid item md={5} className={classes.indexContainer}>
                        <Typography variant="h6" component="ul" className={classes.index}>0{id}</Typography>
                        <Typography variant="h4" fontWeight="bolder">{title}</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Typography variant="body1">{description}</Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Button variant="primary">Read More</Button>
                      </Grid>
                      {showIndex === id && (
                        <img className={classes.hoverImage} src={src} alt={alt}
                        style={{
                          position: "fixed",
                          top: mousePosition.y,
                          left: mousePosition.x,
                          width:"30%",
                          borderRadius:"15px",
                          zIndex:1,
                        }}
                        />
                      )}
                    </Grid>
                  </Box>
                );
              }
            )}
            <Divider className={classes.divider} />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Offer;