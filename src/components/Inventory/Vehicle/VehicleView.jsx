import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import DataTrue from "./DataTrue";
import APIURL from "../../../helpers/environment"

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

  useEffect(() => {
    fetch(`${APIURL}/vehicle/get/${id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        setVehicle(results);
        // console.log(results);
      });
  },[id]);

  const isthereData = () => {
    return vehicle.length > 0 ? <DataTrue vehicle={vehicle[0]} website={props.website}/> : "No Vehicle";
  };

  return <div className={classes.root}>{isthereData()}</div>;
};

export default VehicleView;
