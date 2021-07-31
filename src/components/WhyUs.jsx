import React from "react";
import {Container, Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    paddingBottom: "15px",
  },
  center: {
    textAlign: "center",
  },
  root: {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingBottom: "30px",
  },
  padding:{
    paddingTop: "55px",
    paddingBottom: "55px"
  }
});

const WhyUs = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.padding}>
      <Container className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom className={classes.title}>
              Why Choose Us?
            </Typography>
          </Grid>
          <Grid item xs={12} md={2} lg={2}></Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Typography variant="body2" gutterBottom className={classes.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dignissim laoreet purus, vel lacinia odio aliquam at. Morbi mi
              nisi, rutrum a lacus et, iaculis gravida libero. Donec semper
              ipsum a libero pulvinar, eget vestibulum ante laoreet. Suspendisse
              sollicitudin feugiat pretium. Aliquam quis ultrices justo. Vivamus
              sit amet mi nulla.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2} lg={2}></Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardContent className={classes.center}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-award"
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
                    <circle cx="12" cy="9" r="6" />
                    <polyline
                      points="9 14.2 9 21 12 19 15 21 15 14.2"
                      transform="rotate(-30 12 9)"
                    />
                    <polyline
                      points="9 14.2 9 21 12 19 15 21 15 14.2"
                      transform="rotate(30 12 9)"
                    />
                  </svg>
                  <Typography variant="h6" gutterBottom>
                    Great Selection
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
          <Grid item xs={12} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardContent className={classes.center}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-award"
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
                    <circle cx="12" cy="9" r="6" />
                    <polyline
                      points="9 14.2 9 21 12 19 15 21 15 14.2"
                      transform="rotate(-30 12 9)"
                    />
                    <polyline
                      points="9 14.2 9 21 12 19 15 21 15 14.2"
                      transform="rotate(30 12 9)"
                    />
                  </svg>
                  <Typography variant="h6" gutterBottom>
                    Great Selection
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis condimentum risus nec justo cursus, ut lacinia arcu
                    pulvinar. Etiam id nisi diam. Curabitur non sapien molestie,
                    ullamcorper velit ut, blandit
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardContent className={classes.center}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-award"
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
                    <circle cx="12" cy="9" r="6" />
                    <polyline
                      points="9 14.2 9 21 12 19 15 21 15 14.2"
                      transform="rotate(-30 12 9)"
                    />
                    <polyline
                      points="9 14.2 9 21 12 19 15 21 15 14.2"
                      transform="rotate(30 12 9)"
                    />
                  </svg>
                  <Typography variant="h6" gutterBottom>
                    Great Selection
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis condimentum risus nec justo cursus, ut lacinia arcu
                    pulvinar. Etiam id nisi diam. Curabitur non sapien molestie,
                    ullamcorper velit ut, blandit
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WhyUs;
