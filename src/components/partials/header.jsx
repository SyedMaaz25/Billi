import React from "react";
import { Box } from "../../atom/box";
import { Typography } from "../../atom/typography";
import { makeStyles } from "@mui/styles";
import { AppBar, Hidden, IconButton, TextField } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Drawer } from "../../atom/drawer";
import { Container } from "../../atom/container";
import drawerImage from "../../assets/images/header/drawer-bottom.jpg";
import logo from "../../assets/logo/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { ContactDetails } from "../../index.json";
import { Menu } from "../../atom/menu";
import { MenuItem } from "../../atom/menu";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem 0rem",
  },
  appBar: {
    background: `none !important`,
    boxShadow: "none !Important",
    padding: "1.50rem 0rem",
  },
  toolBar: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 !important",
  },
  navigationContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1.50rem",
    "& p": {
      fontFamily: "ArimoMedium !important ",
      textTransform: "uppercase",
      "&::before": {
        content: "'○'",
        marginRight: "0.50rem",
      },
      "&:hover": {
        color: theme.palette.color.primary,
        fontWeight: "bolder",
        cursor: "pointer",
      },
    },
  },
  navLink:{
    textDecoration:"none",
    color:theme.palette.color.text,
    "&.active":{
    color:theme.palette.color.primary,
    fontWeight:"bolder"
    }
  },
  menuIconContainer: {
    background: "#303030 !important",
    padding: "1rem !important  ",
    color: `${theme.palette.color.text} !important`,
    "&:hover": {
      background: `${theme.palette.color.primary} !important`,
      transition: "all 0.90s ease",
    },
  },
  contactInfo: {
    padding: "0.10rem 0rem",
    "& a": {
      textDecoration: "none",
      color: theme.palette.color.text,
    },
    "&::before": {
      color: theme.palette.color.primary,
      content: "'○'",
      marginRight: "0.80rem",
      fontSize: "1.30rem",
    },
    "& :hover": {
      color: theme.palette.color.primary,
      fontWeight: "bold",
    },
  },
  menu: {
    padding: "0.50rem 1rem",
    margin: "0.50rem 1rem",
    background: `${theme.palette.background.default} !important`,
    "& li": {
      fontSize: "1.1rem !important",
      color: theme.palette.color.text,
      "&::before": {
        content: "'◌'",
        marginRight: "0.90rem",
        fontSize: "1.50rem",
        color: theme.palette.color.primary,
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorLeft, setAnchorLeft] = React.useState(false);
  const [anchorRight, setAnchorRight] = React.useState(false);
  const [anchorElHome, setAnchorElHome] = React.useState(null);
  const trigger = useScrollTrigger();

  const handleClick = (menuType, event) => {
    if (menuType === "Home") {
      setAnchorElHome(event.currentTarget);
    } else if (menuType === "About") {
    }
  };

  const handleClose = (menuType) => {
    if (menuType === "Home") {
      setAnchorElHome(null);
    } else if (menuType === "About") {
      setAnchorElAbout(null);
    }
  };

  return (
    <Box className={classes.root}>
      {/* Desktop Navigation */}
      <AppBar
        className={classes.appBar}
        sx={{ backgroundColor: trigger ? "#0E0E0E !important" : null }}
      >
        <Container>
          <Toolbar className={classes.toolBar}>
            <Hidden smDown mdDown>
              <img src={logo} alt={logo} />
              <Box className={classes.navigationContainer}>
                <NavLink to="/" className={classes.navLink}>
                <Typography>Home</Typography>
                </NavLink>
                <Typography>Pages</Typography>
                <Typography>Blog</Typography>
                <Typography>Portfolio</Typography>
                <NavLink to="/contact" className={classes.navLink}>
                <Typography>Contacts</Typography>
                </NavLink>
              </Box>
              <IconButton
                onClick={() => setAnchorLeft(true)}
                className={classes.menuIconContainer}
              >
                <MenuIcon
                  sx={{ fontSize: "1.70rem" }}
                  className={classes.menuIcon}
                />
              </IconButton>
              <Drawer
                anchor="right"
                open={anchorLeft}
                width={400}
                PaperProps={{
                  sx: {
                    backgroundColor: "#0e0e0e",
                    color: "#fff",
                    padding: "4rem 0rem",
                  },
                }}
              >
                <Container>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <img src={logo} alt={logo} />
                    <IconButton
                      onClick={() => setAnchorLeft(false)}
                      className={classes.menuIconContainer}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Box pt="3rem">
                    <Typography variant="h5" component="h5">
                      Unique Digital Ideas for Successful Business.
                    </Typography>
                    <Typography
                      pt="1rem"
                      pb="0.40rem"
                      variant="h6"
                      component="h6"
                    >
                      Contact Us :
                    </Typography>
                    {ContactDetails?.map(({ id, info, link }) => {
                      return (
                        <Typography
                          key={id}
                          className={classes.contactInfo}
                          variant="body1"
                          component="div"
                        >
                          <a href={link} target="_blank">
                            {info}
                          </a>
                        </Typography>
                      );
                    })}
                    <TextField
                      fullWidth
                      id="standard-basic"
                      label="Subscribe"
                      variant="standard"
                      InputLabelProps={{ style: { color: "#fff" } }}
                      InputProps={{
                        style: {
                          color: "#fff",
                          borderBottom: "1px solid #fff",
                        },
                      }}
                    />
                    <Typography variant="body2" pt="0.70rem">
                      Our expertise, as well as our passion for web design, sets
                      us apart from other agencies.
                    </Typography>
                    <Box pt="2rem" display="flex" gap="1.20rem">
                      <InstagramIcon />
                      <XIcon />
                    </Box>
                  </Box>
                </Container>
                <img
                  src={drawerImage}
                  style={{ position: "absolute", bottom: "0" }}
                  width="100%"
                  alt={drawerImage}
                />
              </Drawer>
            </Hidden>

            {/* Mobile Navigation */}
            <Hidden mdUp>
              <MenuIcon
                onClick={() => setAnchorRight(true)}
                sx={{ fontSize: "1.90rem" }}
              />
              <img src={logo} alt={logo} />
              <SearchIcon
                sx={{ fontSize: "1.90rem" }}
                className={classes.menuIcon}
              />
              <Drawer
                anchor="left"
                open={anchorRight}
                width={300}
                PaperProps={{
                  sx: {
                    backgroundColor: "#0e0e0e",
                    color: "#fff",
                    padding: "2rem 0rem",
                  },
                }}
              >
                <Container>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <img src={logo} alt={logo} />
                    <IconButton
                      onClick={() => setAnchorRight(false)}
                      className={classes.menuIconContainer}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Box pt="2rem">
                    <Box pt="1rem">
                      <Typography
                        variant="h6"
                        onClick={(event) => handleClick("Home", event)}
                      >
                        Pages
                      </Typography>
                      <Menu
                        open={Boolean(anchorElHome)}
                        onClose={() => handleClose("Home")}
                        anchorEl={anchorElHome}
                        PaperProps={{ className: classes.menu }}
                      >
                        <MenuItem
                          className={classes.menuItem}
                          onClick={() => handleClose("Home")}
                        >
                          About
                        </MenuItem>
                        <MenuItem
                          className={classes.menuItem}
                          onClick={() => handleClose("Home")}
                        >
                          Contact
                        </MenuItem>
                        <MenuItem
                          className={classes.menuItem}
                          onClick={() => handleClose("Home")}
                        >
                          Cart
                        </MenuItem>
                      </Menu>
                    </Box>
                  </Box>
                </Container>
              </Drawer>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;