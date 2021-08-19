import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import BusinessIcon from "@material-ui/icons/Business";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import ScheduleIcon from "@material-ui/icons/Schedule";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Logo from "../../assets/logo_size.jpg";
import Paper from "@material-ui/core/Paper";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles((theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(1),
    },
    title: {
      color: "red",
      flexGrow: 1,
      marginLeft: theme.spacing(3),
    },
    titletwo: {
      color: "white",
      flexGrow: 1,
    },
    home: {
      color: "white",
      border: "transparent",
      backgroundColor: "",
      "&:hover": {
        color: "red",
      },
    },
    button: {
      color: "black",
      backgroundColor: "",
      "&:hover": {
        color: "red",
      },
    },
    buttontwo: {
      color: "white",
      backgroundColor: "",
    },
    largenavbar: {
      backgroundColor: "white",
      width: "100%",
    },
    search: {
      color: "black",
    },
    tool: {
      backgroundColor: "#323232",
      minHeight: 30,
    },
    pad: {
      [theme.breakpoints.up("sm")]: {
        height: 85,
      },
    },
  })
);

const Navbar = (props) => {
  const classes = useStyles();

  let token = localStorage.getItem("token");
  const LoginTrue =
    props.sessionToken === token ? (
      <>
        <Button className={classes.home} variant="outlined" href="/adminarea">
          <DashboardIcon fontSize="small" />
          Admin
        </Button>
        <Button
          className={classes.home}
          onClick={() => {
            props.clearToken();
          }}
          variant="outlined"
          href="/"
        >
          <LockOpenIcon fontSize="small" />
          Log Out
        </Button>
      </>
    ) : (
      <Button className={classes.home} variant="outlined" href="/login">
        <LockOpenIcon fontSize="small" />
        Login
      </Button>
    );

  return (
    <>
      <AppBar position="fixed" className={classes.largenavbar}>
        <Toolbar className={classes.tool}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            disabled
          >
            <BusinessIcon fontSize="small" className={classes.home} />
          </IconButton>
          <Typography variant="caption">123 Address Ave</Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            disabled
          >
            <ScheduleIcon fontSize="small" className={classes.home} />
          </IconButton>
          <Typography variant="caption" className={classes.titletwo}>
            10:00 AM To 5:00PM
          </Typography>
          <Button
            color="inherit"
            className={classes.buttontwo}
            href="#about"
            disabled
          >
            <LocalPhoneIcon fontSize="small" className={classes.home} />
          </Button>
          <Typography variant="caption">(555-555-555)</Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            disabled
          >
            <FacebookIcon fontSize="small" className={classes.home} />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            disabled
          >
            <TwitterIcon fontSize="small" className={classes.home} />
          </IconButton>
          {LoginTrue}
          {/* <Button className={classes.home} variant="outlined" href="/login">
             <LockOpenIcon fontSize="small" className={classes.home} />
             Login
          </Button> */}
        </Toolbar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={Logo} alt="Logo" />{" "}
          </Typography>
          <Button color="inherit" className={classes.button} href="/">
            <strong>Home</strong>
          </Button>
          <Button color="inherit" className={classes.button} href="/inventory">
            <strong>Inventory</strong>
          </Button>
          <Button color="inherit" className={classes.button} href="/">
            <strong>About Us</strong>
          </Button>
          <Button color="inherit" className={classes.button} href="/">
            <strong>Contact Us</strong>
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            href="#contact"
            style={{marginRight: "45px"}}
          >
            <SearchIcon
              fontSize="small"
              style={{color: "#212121"}}
              className={classes.home}
            />
            <strong>Search</strong>
          </Button>
        </Toolbar>
      </AppBar>
      <Paper>
        <div className={classes.pad} />
        MyContent will be shifted downwards by the div above. If you remove the
        div, your content will disappear under the app bar.
      </Paper>
    </>
  );
};

export default Navbar;
