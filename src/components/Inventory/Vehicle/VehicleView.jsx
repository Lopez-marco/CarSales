import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Carousel from "./Carousel";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import ReactHtmlParser from 'react-html-parser';
import DataTrue from "./DataTrue";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 25,
  },
  title: {
    letterSpacing: 3,
    fontSize: "20px",
    marginBottom: 0,
    // fontFamily: "sans-serif;",
  },
  form: {
    position: "sticky",
    top: "8rem",
    marginBottom: "2rem",
    padding: 5
  },
  form2: {
    marginBottom: "1rem",
  },
  description: {
    marginTop: 25
  },
  basic:{
    marginTop: 25
  }
}));

const VehicleView = (props) => {
  const classes = useStyles();

  let id = props.match.params.id;

  const [vehicle, setVehicle] = useState([]);

  const fetchVehicle = () => {
    fetch(`http://localhost:3000/vehicle/get/${id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        setVehicle(results);
        console.log(results);
      });
  };
  useEffect(() => {
    fetchVehicle();
  },[]);

  const isthereData = () => {
    return vehicle.length > 0 ? <DataTrue vehicle={vehicle[0]}/> : "No Vehicle";
  };

  return <div className={classes.root}>{isthereData()}</div>;
};

export default VehicleView;
