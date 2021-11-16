import React, {useState} from "react";
import Login from "./Login";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import SignIn from "./SignIn";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    paddingTop: 45,
    paddingBottom: 45,
    textAlign: "center",
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  border: {
    backgroundColor: "#EDEDED",
  },
});

const Auth = (props) => {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);

  const LoginTrue = isLogin ? <Login updateToken={props.updateToken}/> : <SignIn updateToken={props.updateToken}/> ;

  function Toggle(e) {
    e.preventDefault();
    if (isLogin === true) {
      setIsLogin(false);
      // setLetter(false);
    } else {
      setIsLogin(true);
      // setLetter(true);
    }
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.border} elevation={5}>
              {LoginTrue}
              <CardActions>
                <Button
                  className={classes.button}
                  onClick={(e) => Toggle(e)}
                  color="primary"
                >
                  signup
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Auth;
