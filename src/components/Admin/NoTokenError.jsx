import React from "react";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  center: {
    textAlign: "center",
    paddingBottom: "65px",
    paddingTop: "65px",
  },
  title: {
    paddingTop: "15px",
  },
});

const NoTokenError = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.center}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-ban"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
        </svg>
        <br />
        <Typography variant="h5" gutterBottom className={classes.title}>
          You don't Have access to this area
        </Typography>
      </Container>
    </div>
  );
};

export default NoTokenError;
