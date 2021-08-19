import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteVehicle from "./DeleteVehicle";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;

const ActionsButton = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose} component={Link} to={`/editvehicle/${props.vehicle.id}`}> 
          Edit Vehicle
        </MenuItem>
        <DeleteVehicle
          vehicle={props.vehicle}
          sessionToken={props.sessionToken}
          handleClose={handleClose}
          handleTable={props.handleTable}
        />
      </Menu>
    </div>
  );
};

export default ActionsButton;
