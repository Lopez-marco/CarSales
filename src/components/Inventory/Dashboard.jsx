import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import MenuDestok from "./Menu/MenuDestok";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  menuPadding: {
    marginBottom: "19px",
  },
  DashboardStyle: {
    backgroundColor: "#F5F5F5",
    marginBottom: "12px",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();

  const [vehicle, setVehicle] = useState([]);

  const fetchVehicle = () => {
    fetch(`http://localhost:3000/vehicle/all`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        setVehicle(results);
      });
  };

  useEffect(() => {
    fetchVehicle();    
  }, []);


  return (
    <div>
          <MenuDestok vehicle={vehicle}/>
    </div>
  );
};

export default Dashboard;
