import React from "react";
import Grid from "@material-ui/core/Grid";
import NofilterDataCarts from "./NofilterDataCarts";
import Paper from "@material-ui/core/Paper";
import NoVehicle from "../../../assets/NoVehicle.jpg";
import Typography from '@material-ui/core/Typography';
import useInfiniteScroll from '@closeio/use-infinite-scroll';

const NofilterData = (props) => {
  return (
    <div>
      <Grid container spacing={40}>
        {props.vehicle.length > 0 ? (
          props.vehicle.map((vehicle, index) => (
            <NofilterDataCarts vehicle={vehicle} key={index} />
          ))
        ) : (
          <Paper elevation={3} style={{padding: 25, marginLeft: 15}}>
            <img alt="no vehicles" src={NoVehicle} style={{width: 1050}} />
            <Typography variant="h4" gutterBottom style={{textAlign: "center", margin: 15}}>
              
        No vehicles Yet
      </Typography>
          </Paper>
        )}
      </Grid>
    </div>
  );
};

export default NofilterData;
