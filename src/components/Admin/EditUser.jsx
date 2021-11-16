import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import NoTokenError from "./NoTokenError";
import MenuList from "./menuList";
import Vehicletable from "./Vehicletable";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {Helmet} from "react-helmet";
import EditUserTrue from "./EditUserTrue";

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

const EditUser = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState("");

  const fetchUser = () => {
  let id = props.match.params.id;
  var myHeaders = new Headers();
  let token = localStorage.getItem("token")
  myHeaders.append(
    "Authorization",
    token
    );
    
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    
    fetch(`http://localhost:3000/user/get/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      setUser(result)
    })
    .catch((error) => console.log("error", error));
  }
    
  useEffect(() => {
    fetchUser()
  }, []);

  const isthereData = () => {
    return user.length > 0 ? <EditUserTrue user={user} /> : "Error Retriving Data";
  };

  return(
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Admin | </title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Container maxWidth="lg">
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <MenuList updateToken={props.updateToken}/>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography variant="h6" gutterBottom>
            Edit User
          </Typography>
          <Divider style={{marginBottom: 15}} />
          {isthereData()}
        </Grid>
      </Grid>
    </Container>
  </>
  );
};

export default EditUser;
