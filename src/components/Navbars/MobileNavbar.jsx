import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import Biglogo from "../../assets/logo_size.jpg";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import {List, ListItem, Grid, SwipeableDrawer} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import {Link} from "react-router-dom";
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
    home: {
      color: "white",
      marginRight: theme.spacing(2),
    },
    button: {
      color: "black",
      backgroundColor: "",
      "&:hover": {
        color: "red",
      },
    },
    list: {
      width: 250,
      marginRight: "2px",
    },
    drawerPaper: {
      color: "blue",
    },
    mininavbar: {
      backgroundColor: "white",
      width: "100%",
    },
    tool: {
      backgroundColor: "#323232",
      minHeight: 30,
    },
    right: {
      flexGrow: 1,
    },
    pad: {
      height: 0,
      [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
        height: 0,
      },
      [theme.breakpoints.up("sm")]: {
        height: 0,
      },
    },
    links: {
      textDecoration: "none",
      color: "black",
    },
  })
);

const Navbar = (props) => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  let token = localStorage.getItem("token");
  const LoginTrue =
    props.sessionToken === token ? (
      <>
        <Link to="/adminarea" className={classes.links}>
          <ListItem key={3} button divider>
            <DashboardIcon style={{color: "#DE3736", marginRight: "10px"}} />
            <Typography variant="subtitle1">Admin</Typography>
          </ListItem>
        </Link>
        <Link to="/" className={classes.links}>
          <ListItem
            key={3}
            button
            divider
            onClick={() => {
              props.clearToken();
            }}
          >
            <LockOpenIcon style={{color: "#DE3736", marginRight: "10px"}} />
            <Typography variant="subtitle1">Log Out</Typography>
          </ListItem>
        </Link>
      </>
    ) : (
      <Link to="/login" className={classes.links}>
        <ListItem key={3} button divider>
          <LockOpenIcon style={{color: "#DE3736", marginRight: "10px"}} />
          <Typography variant="subtitle1">Login</Typography>
        </ListItem>
      </Link>
    );

  return (
    <div>
      <AppBar position="sticky" className={classes.mininavbar}>
        <Toolbar className={classes.tool}>
          <Grid container direction="row">
            <LocalPhoneIcon fontSize="small" className={classes.home} />
            <Typography variant="caption">(555-555-555)</Typography>
            <IconButton className={classes.right} disabled></IconButton>
            <BusinessIcon fontSize="small" className={classes.home} />
            <Typography variant="caption">123 Address Ave</Typography>
          </Grid>
        </Toolbar>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <img src={Biglogo} alt="Logo" style={{width: "150px"}} />
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon
                style={{color: "red"}}
                onClick={() => {
                  setDrawer(true);
                }}
              />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        className={{paper: classes.drawerPaper}}
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}
        onOpen={() => {
          setDrawer(true);
        }}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => {
            setDrawer(false);
          }}
          onKeyDown={() => {
            setDrawer(false);
          }}
        >
          <List className={classes.list}>
            <ListItem key={1} button divider>
              <img
                src={Biglogo}
                alt="Logo"
                style={{width: "125px", paddingBottom: "10px"}}
              />
            </ListItem>
            <Link to="/" className={classes.links}>
              <ListItem key={1} button divider>
                <HomeIcon style={{color: "#DE3736", marginRight: "10px"}} />{" "}
                <Typography variant="subtitle1">Home</Typography>
              </ListItem>
            </Link>
            <Link to="/inventory" className={classes.links}>
              <ListItem key={2} button divider>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-building-warehouse"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#DE3736"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21v-13l9 -4l9 4v13" />
                  <path d="M13 13h4v8h-10v-6h6" />
                  <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
                </svg>
                <Typography variant="subtitle1" style={{marginLeft: "10px"}}>
                  Inventory
                </Typography>
              </ListItem>
            </Link>
            <ListItem key={2} button divider>
              <InfoIcon style={{color: "#DE3736", marginRight: "10px"}} />{" "}
              <Typography variant="subtitle1">About us</Typography>
            </ListItem>
            <ListItem key={3} button divider>
              <MailIcon style={{color: "#DE3736", marginRight: "10px"}} />
              <Typography variant="subtitle1">Contact us</Typography>
            </ListItem>
            {LoginTrue}
          </List>
        </div>
      </SwipeableDrawer>
      <Paper>
        <div className={classes.pad} />
      </Paper>
    </div>
  );
};

export default Navbar;