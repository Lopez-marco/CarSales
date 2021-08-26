import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import EmailIcon from "@material-ui/icons/Email";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneIcon from "@material-ui/icons/Phone";
import BusinessIcon from "@material-ui/icons/Business";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#323232",
  },
  Letter: {
    color: "white",
    textAlign: "center"
  },
  padding: {
    paddingTop: "35px",
    paddingBottom: "35px",
    paddingLeft: "85px",
  },
  icons: {
    color: "white",
  },
  bar:{
      backgroundColor: "#323232",
      textAlign: "center",
      paddingBottom: "15px",
      paddingTop: "15px"
  }
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.padding}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={9} md={6} lg={4} className={classes.Letter}>
                  <Typography variant="h6" gutterBottom>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196237.8451990967!2d-86.27283469179362!3d39.77970029291871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1627513033120!5m2!1sen!2sus" width="400" height="300" title="map" allowfullscreen="" loading="lazy"></iframe>
                  </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={4} className={classes.Letter}>
            <List>
            <Link to="/" style={{textDecoration: "none", color: "white"}}>
              <ListItem button>
                <ListItemIcon>
                  <ChevronRightIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/inventory" style={{textDecoration: "none", color: "white"}}>
              <ListItem button >
                <ListItemIcon>
                  <ChevronRightIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary="Inventory" />
              </ListItem>
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "white"}}>
              <ListItem button >
                <ListItemIcon>
                  <ChevronRightIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary="About us" />
              </ListItem>
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "white"}}>
              <ListItem button>
                <ListItemIcon>
                  <ChevronRightIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary="Contact us" />
              </ListItem>
            </Link>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={4} className={classes.Letter}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <BusinessIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary="123 Address Ave" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary="(555)-555-555" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary="10:00 AM To 5:00 PM" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary="Email@Email.com" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <AppBar position="static" className={classes.bar}>
          <Container maxWidth="md">
              <Typography color="inherit">
                © 2021 Marco Lopez
              </Typography>
          </Container>
        </AppBar>
    </div>
  );
};

export default Footer;
