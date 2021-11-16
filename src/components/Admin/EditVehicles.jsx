import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MenuList from "./menuList";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import EditVehiclesTrue from "./EditVehiclestrue";
import APIURL from "../../helpers/environment"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
}));

const EditVehicles = (props) => {
  const classes = useStyles();
  const [vehicle, setVehicle] = useState([]);

  let id = props.match.params.id;

  useEffect(() => {
    fetch(`${APIURL}/vehicle/get/${id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
        setVehicle(results);
      });
  }, []);

  const isthereData = () => {
    return vehicle.length > 0 ? <EditVehiclesTrue vehicle={vehicle} /> : "Error Retriving Data";
  };


  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <MenuList />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Edit a Vehicle
                </Typography>
                <Divider style={{marginBottom: 15}} />
              </Grid>
              {isthereData()}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditVehicles;