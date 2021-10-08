import React, {useState, useEffect} from "react";
import MenuDestok from "./Menu/MenuDestok";
import {Helmet} from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inventory | {props.website}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <MenuDestok vehicle={vehicle} website={props.website} />
    </div>
  );
};

export default Dashboard;
