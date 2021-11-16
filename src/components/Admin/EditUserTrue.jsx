import React, { useState, useEffect } from 'react';
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

const EditUserTrue = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState(props.user[0].email);
    const [password, setPassword] = useState(props.user[0].password);
    const [usertype, setUsertype] = useState(props.user[0].usertype);
    const [firstName, setFirstName] = useState(props.user[0].firstName);
    const [lastName, setLastName] = useState(props.user[0].lastName);

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

    const handleEdit = () => {
        let token = localStorage.getItem("token")
      var myHeaders = new Headers();
      myHeaders.append(
    "Authorization",
      token
    );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    user: {
      email: email,
      password: password,
      usertype: usertype,
      firstName: firstName,
      lastName: lastName,
    },
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`http://localhost:3000/user/updateuser/${props.user[0].id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

console.log(props.user[0].email)

    return ( <div>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Sign up
        </Typography>
        <form autoComplete="off" onSubmit={handleEdit}>
          <FormControl className={classes.root}>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <Input
              id="my-input"
              defaultValue={firstName}
              aria-describedby="my-helper-text"
              required={true}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <br />
          <FormControl className={classes.root}>
            <InputLabel htmlFor="my-input">Last Name</InputLabel>
            <Input
              id="my-input"
              defaultValue={lastName}
              required={true}
              aria-describedby="my-helper-text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <br />
          <FormControl className={classes.root}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
            defaultValue={email}
              id="my-input"
              required={true}
              aria-describedby="my-helper-text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
            
          <br />

          {localStorage.getItem("role")=== "admin" ?
          <FormControl className={classes.root}>
            <TextField
              className={classes.year}
              select
              defaultValue={usertype}
              required={true}
              label="User Type"
              onChange={(e) => setUsertype(e.target.value)}
              helperText="Please select Vehicle Status"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"Employee"}>Employee</MenuItem>
            </TextField>
          </FormControl>
           : null}
          <br />
          {/* <FormControl>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
            //   value={values.password}
              defaultValue={password}
            //   required={true}
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
          </FormControl> */}
          <br />
          <Button type="submit" variant="contained" className={classes.button}>
            Update User Profile
          </Button>
        </form>
    </div> );
}
 
export default EditUserTrue;