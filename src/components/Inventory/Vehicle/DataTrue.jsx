import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Carousel from "./Carousel";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import ReactHtmlParser from "react-html-parser";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import {Helmet} from "react-helmet";
import APIURL from "../../../helpers/environment"

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
    padding: 5,
  },
  form2: {
    marginBottom: "1rem",
  },
  description: {
    marginBottom: 45,
    marginTop: 25,
    paddingTop: 0,
  },
  basicinfo: {
    marginTop: 25,
    paddingTop: 0,
  },
  button: {
    justifyContent: "center",
  },
}));

const DataTrue = (props) => {
  const classes = useStyles();

  const [year] = useState(props.vehicle.year);
  const [make] = useState(props.vehicle.make);
  const [model] = useState(props.vehicle.model);
  const [vin] = useState(props.vehicle.vin);
  const [price] = useState(props.vehicle.price);
  const [color] = useState(props.vehicle.color);
  const [millage] = useState(props.vehicle.millage);
  const [photo] = useState(props.vehicle.photo);
  const [description] = useState(props.vehicle.description);
  const [image] = useState(props.vehicle.photo);
  const [condition] = useState(props.vehicle.condition);
  const [bodystyle] = useState(props.vehicle.bodystyle);
  const [status] = useState(props.vehicle.status);
  const [views] = useState(props.vehicle.views++);

  useEffect(() => {
    let token = "";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      vehicle: {
        year: year,
        make: make,
        model: model,
        vin: vin,
        millage: millage,
        color: color,
        price: price,
        photo: image,
        condition: condition,
        bodystyle: bodystyle,
        status: status,
        views: views,
        description: description,
      },
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${APIURL}/vehicle/editviews/${props.vehicle.id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((results) => {
        console.log(results);
      });
  }, [
    year,
    bodystyle,
    color,
    condition,
    description,
    image,
    make,
    millage,
    model,
    price,
    status,
    views,
    vin,
    props.vehicle.id,
  ]);
  let title = `${year} ${make} ${model}`;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} | Car Dealer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Grid container spacing={3}>
          {/* ////Title//// */}
          <Grid item xs={12}>
            <CardHeader
              title={title}
              style={{marginBottom: 0, paddingBottom: 0}}
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              style={{marginTop: 0, paddingLeft: 15}}
            >
              Vin: {vin}
            </Typography>
          </Grid>
          {/* ////Column 1/// */}
          <Grid item xs={12} sm={12} md={7} lg={8}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Carousel images={photo} />
            </Grid>
            <Card elevation={2} style={{marginTop: "15px"}}>
            <CardHeader title="Basic Info:" style={{marginTop: "5px"}} />
              <CardContent>
                <Grid container>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                      style={{paddingLeft: "15px"}}
                    >
                      Millage: {millage}
                      <br />
                      Exterior: {color}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                      style={{paddingLeft: "15px"}}
                    >
                      Body Style: {bodystyle}
                      <br />
                      Condition: {condition}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card className={classes.description} elevation={3}>
            <CardHeader title="Description:" style={{paddingBottom: 0}} />
              <CardContent>
                <Grid item xs={12}>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {ReactHtmlParser(description)}
                    </Typography>
                  </CardContent>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* ///Column 2//// */}
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <Card className={classes.form2} elevation={3}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {views} people have recently viewed it.
                </Typography>
              </CardContent>
            </Card>
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
                    <Grid container spacing={2} style={{padding: 15}}>
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
                        Message
                        <TextField
                          id="standard-multiline-static"
                          multiline
                          rows={4}
                          fullWidth
                        />
                      </Grid>
                      <Button variant="contained" style={{margin: 15}}>
                        Send
                      </Button>
                    </Grid>
                  </form>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DataTrue;
