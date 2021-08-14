import React, {useState, useEffect} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import MobileNavbar from "./MobileNavbar";
import DestokNavbar from "./DestokNavbar";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
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
    list: {
      width: 250,
      marginRight: "2px",
    },
    fullList: {
      width: "auto",
    },
    drawerPaper: {
      color: "blue",
    },
    mininavbar: {
      backgroundColor: "white",
      width: "100%",
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
  })
);

const Navbar = (props) => {
  const classes = useStyles();

  const [drawerActive, setDrawerActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setDrawerActive(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1050) {
        setDrawerActive(true);
      } else {
        setDrawerActive(false);
      }
    });
  }, []);

  const Navbar = drawerActive ? (
    <MobileNavbar
      sessionToken={props.sessionToken}
      clearToken={props.clearToken}
    />
  ) : (
    <DestokNavbar
      sessionToken={props.sessionToken}
      clearToken={props.clearToken}
    />
  );

  return <div className={classes.root}>{Navbar}</div>;
};

export default Navbar;
