import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backgroundColor: {
    backgroundColor: "#EDEDED",
  },
  root: {
    paddingBottom: "65px",
    paddingTop: "65px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  center: {
    textDecoration: "none"
  }
}));

const Main = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundColor}>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={1} lg={1}></Grid>
          <Grid item xs={12} md={5} lg={5}>
          <Link to={"/inventory"} style={{textDecoration: "none"}}>
            <Card>
              <CardActionArea>
                <CardContent className={classes.center}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-building-warehouse"
                    width="68"
                    height="68"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21v-13l9 -4l9 4v13" />
                    <path d="M13 13h4v8h-10v-6h6" />
                    <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
                  </svg>
                  <Typography variant="h6" gutterBottom>
                    Inventory
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis condimentum risus nec justo cursus, ut lacinia arcu
                    pulvinar. Etiam id nisi diam. Curabitur non sapien molestie,
                    ullamcorper velit ut, blandit.Curabitur non sapien molestie,
                    ullamcorper velit ut, blandit.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
                    </Link>
          </Grid>
          <Grid item xs={12} md={1} lg={1}></Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardContent className={classes.center}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-file-like"
                    width="68"
                    height="68"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="3" y="16" width="3" height="5" rx="1" />
                    <path d="M6 20a1 1 0 0 0 1 1h3.756a1 1 0 0 0 .958 -.713l1.2 -3c.09 -.303 .133 -.63 -.056 -.884c-.188 -.254 -.542 -.403 -.858 -.403h-2v-2.467a1.1 1.1 0 0 0 -2.015 -.61l-1.985 3.077v4z" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M5 12.1v-7.1a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-2.3" />
                  </svg>
                  <Typography variant="h6" gutterBottom>
                    Fill up your application
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis condimentum risus nec justo cursus, ut lacinia arcu
                    pulvinar. Etiam id nisi diam. Curabitur non sapien molestie,
                    ullamcorper velit ut, blandit.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={1} lg={1}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
