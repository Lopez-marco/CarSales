import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import NoTokenError from "./NoTokenError";
import MenuList from "./menuList";
import Vehicletable from "./Vehicletable";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {Helmet} from "react-helmet";

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

const Dashboard = (props) => {
  const classes = useStyles();

  const Menu = () => {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Admin | {props.website}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Container maxWidth="lg">
          <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <MenuList />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Typography variant="h6" gutterBottom>
                Add a Vehicle
              </Typography>
              <Divider style={{marginBottom: 15}} />
              <Vehicletable sessionToken={props.sessionToken} />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };

  const token = props.sessionToken ? Menu() : <NoTokenError />;

  return <div>{token}</div>;
};

export default Dashboard;
