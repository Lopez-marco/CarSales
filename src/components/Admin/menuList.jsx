import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const menuList = (props) => {
  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button component="a" href="/adminarea">
          <ListItemIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-home"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9e9e9e"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/vehicle/addavehicle">
          <ListItemIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-plus"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9e9e9e"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </ListItemIcon>
          <ListItemText primary="Add a Vehicle" />
        </ListItem>
        <ListItem button component="a" href="/adminarea">
          <ListItemIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-building-warehouse"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9e9e9e"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21v-13l9 -4l9 4v13" />
              <path d="M13 13h4v8h-10v-6h6" />
              <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
            </svg>
          </ListItemIcon>
          <ListItemText primary="See all Vehicles" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        {/* <ListItem button component="a" href="/admin/users">
          <ListItemIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-users"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9e9e9e"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem> */}
        <ListItem button component="a" href="/">
          <ListItemIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-back-up"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9e9e9e"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
            </svg>
          </ListItemIcon>
          <ListItemText primary="Back to Website" />
        </ListItem>
      </List>
    </div>
  );
};

export default menuList;
