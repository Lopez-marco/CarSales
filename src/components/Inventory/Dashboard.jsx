import React, {useState, useEffect} from "react";
import MenuDestok from "./Menu/MenuDestok";

const Dashboard = (props) => {

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
