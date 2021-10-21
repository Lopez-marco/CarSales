import React, {useState, useEffect} from "react";
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
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    paddingBottom: 15,
  },
  button: {
    marginTop: 25,
  },
}));

const SignIn = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [fistName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [usertype, setUsertype] = useState("");
  const [open, setOpen] = React.useState(false);
  const [errorHandle, setErrorHandle] = useState("");
  const [successhandle, setSuccessHandle] = useState("");

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
        firstName: fistName,
        lastName: lastName,
        email: email,
        password: values.password,
        usertype: usertype,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/user/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // props.updateToken(result.sessionToken);
        console.log(result.sessionToken);
        console.log(result);
        setSuccessHandle(result.message)
        handleClick(true)
        let token = result.sessionToken;
        if (token === undefined) {
          handleClick(true);
          // localStorage.clear();
        } else {
          routeChange();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const routeChange = () => {
    let path = "/admin/users";
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
          Sign up
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <FormControl className={classes.root}>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              required={true}
              onChange={(e) => setFistName(e.target.value)}
            />
          </FormControl>
          <br />
          <FormControl className={classes.root}>
            <InputLabel htmlFor="my-input">Last Name</InputLabel>
            <Input
              id="my-input"
              required={true}
              aria-describedby="my-helper-text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <br />
          <FormControl className={classes.root}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="my-input"
              required={true}
              aria-describedby="my-helper-text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <br />
          <FormControl className={classes.root}>
            <TextField
              className={classes.year}
              select
              required={true}
              label="User Type"
              onChange={(e) => setUsertype(e.target.value)}
              helperText="Please select Vehicle Status"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"addvehicle"}>Employe</MenuItem>
            </TextField>

            {/* <InputLabel htmlFor="my-input">User Type</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={(e) => setUsertype(e.target.value)}
            /> */}
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
              required={true}
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
            Sign Up
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
          A Error Ocurred! Make sure a user has not been created with this Email. 
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignIn;
