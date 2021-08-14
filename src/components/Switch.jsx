import React from "react";
import Hero from "./Hero";
import Main from "./Main";
import WhyUs from "./WhyUs";
import Dashboard from "./Inventory/Dashboard";
import DashboardAdmin from "./Admin/Dashboard";
import {Route, Switch} from "react-router-dom";
import Auth from "./Auth/Auth";
import VehicleView from "./Inventory/Vehicle/VehicleView";

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
            <Dashboard />
        </Route>
        <Route exact path="/login">
            <Auth updateToken={props.updateToken}/>
        </Route>
        <Route exact path="/adminarea">
            <DashboardAdmin sessionToken={props.sessionToken}/>
        </Route>
        <Route exact path="/product_view/:id" component={VehicleView} />
      </Switch>
    </div>
  );
};

export default SwitchLink;
