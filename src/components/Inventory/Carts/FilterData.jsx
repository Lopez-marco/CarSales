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
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // 
    margin: "10px",
    [theme.breakpoints.up("sm")]: {
      width: 350,
    },
    [theme.breakpoints.up("md")]: {
      width: 256,
      height: "405px",
    },
    [theme.breakpoints.up("lg")]: {
      width: 256,
      height: "405px",
    },
    transition: "transform 0.15s ease-in-out",
    "&:hover": {transform: "scale3d(1.03, 1.03, 1)"},
  },
  image: {
    [theme.breakpoints.up("sm")]: {
      width: "350px",
      height: "195px",
    },
    [theme.breakpoints.up("md")]: {
      width: "260px",
      height: "146px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "260px",
      height: "146px",
    },
    // objectFit: "contain",
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

const FilterData = (props) => {
  const classes = useStyles();

  const show = () => {
    console.log(props.filteredData);
    return props.filteredData.map((value, index) => {
      return (
        <div>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{paddingLeft: 0, paddingRight: 0}}
          >
            <Card className={classes.root} hover="true">
              <Link to={`/product_view/${value.id}`}>
                <CardMedia
                  className={classes.image}
                  component="img"
                  alt={value.make}
                  image={value.photo.power[0]}
                  title={value.make}
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {value.year} {value.make} {value.model}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  VIN: {value.vin}
                  <br />
                  <strong>Price: ${value.price}</strong>
                  <Divider style={{marginTop: "10px", marginBottom: "10px"}} />
                  Exterior: {value.color}
                  <br />
                  Millage: {value.millage}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={`/product_view/${value.id}`}
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
    });
  };

  return (
    <div>
      <Grid container spacing={40}>
        {show()}
      </Grid>
    </div>
  );
};

export default FilterData;
