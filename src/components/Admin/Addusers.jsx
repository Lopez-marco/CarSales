import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MenuList from "./menuList";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {Helmet} from "react-helmet";
import SignIn from "../Auth/SignIn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Addusers = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin | {props.website}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <MenuList updateToken={props.updateToken} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant="h6" gutterBottom>
              Add New user
            </Typography>
            <Divider style={{marginBottom: 15}} />
            <Container>
              <SignIn updateToken={props.updateToken} />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Addusers;
