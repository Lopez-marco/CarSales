import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import APIURL from "../../helpers/environment"

const DeleteVehicle = (props) => {

  const handleDelete = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      props.sessionToken
    );

    var raw = "";

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${APIURL}/vehicle/delveh/${props.vehicle.id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        // console.log(result)
       props.handleTable()})
      .catch((error) => console.log("error", error));
      
      props.handleClose()
  };

  return <div><MenuItem onClick={handleDelete}>Delete</MenuItem></div>;
};

export default DeleteVehicle;
