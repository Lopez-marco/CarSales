import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HandShake from "../assets/hand.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 15,
    marginBottom: 15,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    letterSpacing: 3,
    fontSize: "20px",
    marginBottom: 0,
  },
  image:{
    width: 410,
    borderRadius: "15px",
  }
}));

const ContactUs = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card className={classes.form} elevation={5}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <span style={{paddingLeft: 25}} >We are her to help.</span>
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
                      <TextField id="standard-basic" label="Email" fullWidth />
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
                    <Button variant="contained" style={{margin: 15}}>Send</Button>
                  </Grid>
                </form>
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={HandShake} alt="help" className={classes.image} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
