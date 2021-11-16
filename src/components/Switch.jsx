import React from "react";
import Hero from "./Hero";
import Main from "./Main";
import WhyUs from "./WhyUs";
import Dashboard from "./Inventory/Dashboard";
import DashboardAdmin from "./Admin/Dashboard";
import {Route, Switch} from "react-router-dom";
import Auth from "./Auth/Auth";
import VehicleView from "./Inventory/Vehicle/VehicleView";
import AddVehicle from "./Admin/AddVehicle";
import EditVehicles from "./Admin/EditVehicles";
import GetallUsers from "./Admin/GetallUsers";
import ContactUs from "./ContactUs";
import Addusers from "./Admin/Addusers";
import NoTokenError from "./Admin/NoTokenError";
import EditUser from "./Admin/EditUser";

const SwitchLink = (props) => {
  const front = () => {
    return (
      <div>
        <Hero />
        <Main />
        <WhyUs />
      </div>
    );
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {front()}
        </Route>
        <Route exact path="/inventory">
            <Dashboard website={props.website} />
        </Route>
        <Route exact path="/test">
            <Auth updateToken={props.updateToken} />
        </Route>
        <Route exact path="/product_view/:id" component={VehicleView} />
        <Route exact path="/contacus">
            <ContactUs/>
        </Route>
        <Route exact path="/aboutus">
            <WhyUs />
        </Route>
        {/* Admin */}
        <Route exact path="/edituser/:id" component={EditUser} />
        <Route exact path="/editvehicle/:id" component={EditVehicles} />
        <Route exact path="/adminarea">
        {props.sessionToken ? <DashboardAdmin sessionToken={props.sessionToken} website={props.website}/> : <NoTokenError/>}
        </Route>
        <Route exact path="/vehicle/addavehicle" website={props.website}>
        {props.sessionToken ? <AddVehicle sessionToken={props.sessionToken} website={props.website}/> : <NoTokenError/>}
        </Route>
        <Route exact path="/admin/users">
        {props.sessionToken ? <GetallUsers sessionToken={props.sessionToken}/> : <NoTokenError/>}
        </Route>
        <Route exact path="/admin/users/addusers">
        {props.sessionToken ? <Addusers sessionToken={props.sessionToken} updateToken={props.updateToken} website={props.website}/> : <NoTokenError/>}
        </Route>
      </Switch>
    </div>
  );
};

export default SwitchLink;
