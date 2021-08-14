import React, {useState} from "react";
import {useHistory} from "react-router";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  root: {
    width: 250,
    paddingBottom: 15,
  },
  button: {
    marginTop: 25,
  },
});

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [Email, setEmail] = useState("");
  const [open, setOpen] = React.useState(false);
  const [errorHandle, setErrorHandle] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };

  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword});
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user: {
        Email: Email,
        password: values.password,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/user/signin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        props.updateToken(result.sessionToken);
        console.log(result.sessionToken);
        console.log(result);
        let token = result.sessionToken;
        if (token === undefined) {
          setErrorHandle(result.error);
          handleClick(true);
          localStorage.clear();
        } else {
          routeChange();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const routeChange = () => {
    let path = "/adminArea";
    history.push(path);
  };

  return (
    <div>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Login
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <FormControl className={classes.root}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <Button type="submit" variant="contained" className={classes.button}>
            Log In
          </Button>
        </form>
      </CardContent>
      <Snackbar
        anchorOrigin={{vertical: "top", horizontal: "center"}}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} variant="filled" severity="error">
          {errorHandle}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
