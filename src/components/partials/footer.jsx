import React from "react";
import { Box } from "../../atom/box";
import { Typography } from "../../atom/typography";
import { makeStyles } from "@mui/styles";
import { Container } from "../../atom/container";
import { Grid } from "../../atom/grid";
import logo from "../../assets/logo/logo.png";
import { List, ListItem, ListItemText } from "../../atom/list";
import { TextField } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#0e0e0e",
    padding: theme.spacing(10, 0, 8),
    color: theme.palette.color.text,
  },
  gridCol2: {
    "& li": {
      padding: theme.spacing(0.3, 0),
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        color: theme.palette.color.primary,
        cursor: "pointer",
        "&::before": {
          content: "'+'",
          fontSize: "1.50em",
          marginRight: theme.spacing(0.7),
        },
      },
    },
  },
  gridCol3: {
    "& li": {
      padding: theme.spacing(0.3, 0),
      "&:hover": {
        transition: "all 0.3s ease-in-out",
        color: theme.palette.color.primary,
        cursor: "pointer",
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Container>
          <Grid container columnSpacing={10} spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <img src={logo} alt={logo} />
              <Typography variant="body1" pt="1rem">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae aspernatur,
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.gridCol2}>
              <Typography variant="h6" fontWeight="bolder">
                Services
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>UI/UX Experience</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Digital Experience</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Web Development</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Product Design</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.gridCol3}>
              <Typography variant="h6" fontWeight="bolder">
                Contacts
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    27 Division St, New York, NY 10002
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>+1 800 123 456 789</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>bili@mail.com</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3}>
              <Typography variant="h6" fontWeight="bolder">
                Subscribe
              </Typography>
              <TextField
                fullWidth
                id="standard-basic"
                label="Get News & Updates"
                variant="standard"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{
                  style: { color: "#fff", borderBottom: "1px solid #fff" },
                }}
              />
              <Typography variant="body2" pt="0.70rem">
                Our expertise, as well as our passion for web design, sets us.
              </Typography>
              <Box pt="1.50rem" display="flex" gap="1.20rem">
                <InstagramIcon sx={{ fontSize: "1.10rem" }} />
                <XIcon sx={{ fontSize: "1.10rem" }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Footer;