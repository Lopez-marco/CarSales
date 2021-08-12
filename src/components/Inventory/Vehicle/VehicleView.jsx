import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Carousel from "./Carousel";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 25,
  },
  title: {
    letterSpacing: 3,
    fontSize: "20px",
    marginBottom: 0,
    // fontFamily: "sans-serif;",
  },
  form: {
    position: "sticky",
    top: "8rem",
    marginBottom: "2rem",
    padding: 5
  },
  form2: {
    marginBottom: "1rem",
  },
  description: {
    marginTop: 25
  },
  basic:{
    marginTop: 25
  }
}));

const VehicleView = (props) => {
  const classes = useStyles();

  let id = props.match.params.id;

  const [vehicle, setVehicle] = useState([]);

  const fetchVehicle = () => {
    fetch(`http://localhost:3000/vehicle/get/${id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        setVehicle(results);
        console.log(results);
      });
  };

  useEffect(() => {
    fetchVehicle();
  }, []);

  const isthereData = () => {
    return vehicle.length > 0 ? dataDisplay() : "No Vehicle";
  };

  const dataDisplay = () => {
    const {year, make, model, price, photo, color, millage, vin, description} = vehicle[0];

    return (
      <Container>
        <Grid container spacing={3}>
          {/* ////Title//// */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              <strong>
                {year} {make} {model}
              </strong>
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Vin: {vin}
            </Typography>
          </Grid>
          {/* ////Column 1/// */}
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Grid item xs={12} sm={11} md={11} lg={11}>
              <Carousel images={photo} />
            </Grid>
            <Grid item xs={12} className={classes.basic}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                <strong>
                  BASIC INFO
                </strong>
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Millage: {millage}<br/>
                Exterior: {color}<br/>
                Interior: 
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.description}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                <strong>
                  Description
                </strong>
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
              {ReactHtmlParser(description)}
              </Typography>
            </Grid>
          </Grid>
          {/* ///Column 2//// */}
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card className={classes.form2} elevation={3}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Price: ${price}
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.form} elevation={5}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Contact us
                  <form noValidate autoComplete="off">
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <TextField id="standard-basic" label="First Name" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField id="standard-basic" label="Last Name" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="standard-basic" label="Phone" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="standard-basic"
                          label="Email"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="standard-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Message"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </form>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  };

  return <div className={classes.root}>{isthereData()}</div>;
};

export default VehicleView;
