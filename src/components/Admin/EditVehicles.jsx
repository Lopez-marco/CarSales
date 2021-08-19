import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MenuList from "./menuList";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import Button from "@material-ui/core/Button";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "react-dropzone";
import axios from "axios";
import {useHistory} from "react-router";
import EditVehiclesTrue from "./EditVehiclestrue";

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

  const GetData = () => {
    fetch(`http://localhost:3000/vehicle/get/${id}`, {
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
  };
  useEffect(() => {
    GetData();
  }, []);

  const isthereData = () => {
    return vehicle.length > 0 ? <EditVehiclesTrue vehicle={vehicle} /> : "Error Retribing Data";
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