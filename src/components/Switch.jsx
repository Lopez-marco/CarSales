import React from "react";
import Hero from "./Hero";
import Main from "./Main";
import WhyUs from "./WhyUs";
import Dashboard from "./Inventory/Dashboard";
import {Route, Link, Switch} from "react-router-dom";

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
      </Switch>
    </div>
  );
};

export default SwitchLink;
