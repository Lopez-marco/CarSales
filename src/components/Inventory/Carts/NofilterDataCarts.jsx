import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px",
    [theme.breakpoints.up("sm")]: {
      width: 360,
    },
    [theme.breakpoints.up("md")]: {
      width: 300,
    },
    [theme.breakpoints.up("lg")]: {
      width: 260,
    },
    transition: "transform 0.15s ease-in-out",
    "&:hover": {transform: "scale3d(1.03, 1.03, 1)"},
  },
  image: {
    [theme.breakpoints.up("sm")]: {
      width: 360,
      height: "300px",
    },
    [theme.breakpoints.up("md")]: {
      width: 300,
      height: "250px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "260px",
      height: "200px",
    },
    objectFit: "cover",
    overflow: "hidden",
  },
  button: {
    margin: "auto",
    backgroundColor: "",
    "&:hover": {
      color: "red",
    },
    cursor: "pointer",
  },
}));

const NofilterCards = (props) => {
  const classes = useStyles();
  const {year, make, model, price, photo, color, millage, vin, id} = props.vehicle;
  return (
    <div>
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{paddingLeft: 0, paddingRight: 0}}
      >
        <Card className={classes.root} hover="true"  >
        <Link to={`/product_view/${id}`}>
            <CardMedia
              className={classes.image}
              component="img"
              alt={make}
              image={photo[0]}
              title={make}
              />
        </ Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {year} {make} {model}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                VIN: {vin}
                <br />
                <strong>Price: ${price}</strong>
                <Divider style={{marginTop: "10px", marginBottom: "10px"}} />
                Exterior: {color}
                <br />
                Millage: {millage}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
              href={`/product_view/${id}`}
                className={classes.button}
                style={{cursor: "pointer"}}
                >
                <strong>See Vehicle</strong>
              </Button>
            </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default NofilterCards;
