import React, { useState, useEffect } from 'react';

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteVehicle from "./DeleteVehicle";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;

const UserActions = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    let token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      token
    );

    var raw = "";

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `http://localhost:3000/user/deleteuser/${props.user.id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log(result)
       props.Getall()})
      .catch((error) => console.log("error", error));
      
      handleClose()
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={handleClose}> 
          Edit Vehicle
        </MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        {/* <DeleteVehicle
          vehicle={props.vehicle}
          sessionToken={props.sessionToken}
          handleClose={handleClose}
          handleTable={props.handleTable}
        /> */}
      </Menu>
    </div>
  );
};

export default UserActions;
