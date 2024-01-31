import React from "react";
import { Box } from "../atom/box";
import { Typography } from "../atom/typography";
import { Container } from "../atom/container";
import { makeStyles } from "@mui/styles";
import contactImage from "../assets/images/contact-us/contacts-bg-scaled.jpg";
import { NavLink } from "react-router-dom";
import { Grid } from "../atom/grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { List, ListItem, ListItemText } from "../atom/list";
import { IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "../atom/button";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.color.text,
    padding: theme.spacing(15, 0, 0),
    overflow: "hidden",
    backgroundImage: `url(${contactImage})`,
    margin: theme.spacing(-12, 0),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 0, 0),
    },
  },
  breadCrumb: {
    textAlign: "center",
    padding: theme.spacing(10, 0),
  },
  navLinkContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.50rem",
    padding: theme.spacing(3, 0),
    "& p a": {
      color: theme.palette.color.primary,
      fontWeight: "bolder",
      textDecoration: "none",
    },
    "& span": {
      fontWeight: "bolder",
    },
  },
  gridContainer: {
    padding: theme.spacing(30, 0, 15),
    color: theme.palette.color.text,
    alignItems: "center",
  },
  gridCol1: {
    "& form": {
      background: "#232323",
      padding: theme.spacing(8, 5),
      borderRadius: "4px",
      "& h5": {
        fontWeight: "bolder",
        padding: theme.spacing(0, 0, 1.5),
      },
      "& p": {
        padding: theme.spacing(0, 0, 1.5),
      },
      "& button": {
        margin: theme.spacing(4, 0, 0),
      },
    },
  },
  gridCol2: {
    "& h4": {
      padding: theme.spacing(2, 0),
      fontWeight: "bolder",
    },
    "& p": {
      fontSize: "1.15rem",
      padding: theme.spacing(0, 0, 1),
    },
    "& li": {
      padding: theme.spacing(0.3, 0),
      "& span": {
        fontSize: "1.15rem",
      },
    },
    "& button": {
      margin: theme.spacing(1.5, 0),
      "& path": {
        color: theme.palette.color.text,
      },
    },
  },
  map: {
    height: "400px",
    width: "100%",
  },
}));

const Contact = () => {
  const classes = useStyles();

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.breadCrumb}>
          <Typography variant="h3" fontWeight="bolder">
            Contacts
          </Typography>
          <Box className={classes.navLinkContainer}>
            <Typography variant="body1" component="p">
              <NavLink to="/">HOME _ </NavLink>
            </Typography>
            <Typography variant="body1" component="span">
              CONTACTS
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container>
        <Grid container className={classes.gridContainer} columnSpacing={10}>
          <Grid item md={6} xs={12} className={classes.gridCol1}>
            <form action="">
              <Typography variant="h5" component="h5">
                Drop Us a Line
              </Typography>
              <Typography variant="body2" component="p">
                Your email address will not be published. Required fields are
                marked *
              </Typography>
              <TextField
                fullWidth
                id="standard-basic"
                label="Website"
                variant="standard"
                InputLabelProps={{
                  style: { color: "#fff", fontSize: "1.10rem" },
                }}
                InputProps={{
                  style: {
                    color: "#fff",
                    borderBottom: "1px solid #fff",
                    padding: "0.50rem",
                  },
                }}
              />
              <TextField
                fullWidth
                id="standard-basic"
                label="Comment"
                variant="standard"
                InputLabelProps={{
                  style: { color: "#fff", fontSize: "1.10rem" },
                }}
                InputProps={{
                  style: {
                    color: "#fff",
                    borderBottom: "1px solid #fff",
                    padding: "0.50rem",
                  },
                }}
              />
              <TextField
                fullWidth
                id="standard-basic"
                label="Name"
                variant="standard"
                InputLabelProps={{
                  style: { color: "#fff", fontSize: "1.10rem" },
                }}
                InputProps={{
                  style: {
                    color: "#fff",
                    borderBottom: "1px solid #fff",
                    padding: "0.50rem",
                  },
                }}
              />
              <Button variant="primary">GET IN TOUCH</Button>
            </form>
          </Grid>
          <Grid item md={6} xs={12} className={classes.gridCol2}>
            <Typography variant="body2" component="span" fontWeight="bolder">
              OUR CONTACTS
            </Typography>
            <Typography variant="h4" component="h4">
              Let’s Start Working Together. Get in Touch with Us!
            </Typography>
            <Typography variant="body1" component="p">
              Get in touch to discuss your employee wellbeing needs today.
              Please give us a call, drop us an email.
            </Typography>
            <List>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  27 Division St, New York, NY 10002, USA
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>+1 800 123 456 789</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>bili@mail.com</ListItemText>
              </ListItem>
            </List>
            <IconButton>
              <XIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Contact;
