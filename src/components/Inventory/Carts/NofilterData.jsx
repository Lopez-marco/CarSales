import React from "react";
import Grid from "@material-ui/core/Grid";
import NofilterDataCarts from "./NofilterDataCarts";

const NofilterData = (props) => {
  return (
    <div>
      <Grid container spacing={40}>
        {props.vehicle.length >= 0
          ? props.vehicle.map((vehicle, index) => (
              <NofilterDataCarts vehicle={vehicle} key={index} />
            ))
          : "No Vehicle"}
      </Grid>
    </div>
  );
};

export default NofilterData;
