import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MenuList from "./menuList";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import Button from "@material-ui/core/Button";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "react-dropzone";
import axios from "axios";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
}));

const EditVehicles = (props) => {
  const classes = useStyles();
  const [vehicle, setVehicle] = useState([]);

  let id = props.match.params.id;

  const GetData = () => {
    fetch(`http://localhost:3000/vehicle/get/${id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
        setVehicle(results);
      });
  };
  useEffect(() => {
    GetData();
  }, []);

  const [year, setYear] = useState(vehicle[0].year);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [millage, setMillage] = useState("");
  const [setPhoto] = useState({power: []});
  const [setDescription] = useState("");
  const [image, setImage] = useState({power: []});
  const [loading, setLoading] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("token"));
    let token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
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
        description: value,
      },
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:3000/vehicle/editveh/${vehicle[0].id}`, requestOptions)
      .then((response) => response.text())
      .then((results) => {
        console.log(token);
        console.log(results);
        setYear("");
        setMake("");
        setModel("");
        setVin("");
        setPrice("");
        setMillage("");
        setColor("");
        routeChange();
      });
  };

  const routeChange = () => {
    let path = "/adminArea";
    history.push(path);
  };

  const [value, setValue] = useState("");
  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setValue(data);
  };

  const handleDrop = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "dev_setup"); // Replace the preset name with your own
      formData.append("api_key", "iWtzb0gNKfNM0r-eNzIspr_xp8c"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);
      setLoading("true");
      return axios
        .post("https://api.cloudinary.com/v1_1/mlpez/image/upload", formData, {
          headers: {"X-Requested-With": "XMLHttpRequest"},
        })
        .then((response) => {
          const data = response.data;
          const fileURL = data.secure_url;
          let specificArrayInObject = image.power;
          specificArrayInObject.push(fileURL);
          const newObj = {...image, specificArrayInObject};
          setImage(newObj);
          console.log(image);
        });
    });
    axios.all(uploaders).then(() => {
      setLoading("false");
    });
  };

  function imagaPrevie() {
    if (loading === "true") {
      return <h3>Loading</h3>;
    }
    if (loading === "false") {
      return (
        <h3>
          {image.power.length <= 0
            ? "No Vehicle"
            : image.power.map((item, index) => (
                <img alt="Uploaded"
                  style={{
                    width: "125px",
                    height: "70px",
                    backgroundSize: "cover",
                    paddingRight: "15px",
                  }}
                  src={item}
                />
              ))}
        </h3>
      );
    }
    return "";
  }

  const isthereData = () => {
    return vehicle.length > 0 ? dataDisplay() : "Error Retribing Data";
  };

  const dataDisplay = () => {
    return (

        <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <TextField
              id="standard-select-currency"
              select
              label="Year"
              defaultValue={vehicle[0].year}
              onChange={(e) => setYear(e.target.value)}
              helperText="Please select Vehicle Year"
              className={classes.year}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"2022"}>2022</MenuItem>
              <MenuItem value={"2021"}>2021</MenuItem>
              <MenuItem value={"2020"}>2020</MenuItem>
              <MenuItem value={"2019"}>2019</MenuItem>
              <MenuItem value={"2018"}>2018</MenuItem>
              <MenuItem value={"2017"}>2017</MenuItem>
              <MenuItem value={"2016"}>2016</MenuItem>
              <MenuItem value={"2015"}>2015</MenuItem>
              <MenuItem value={"2014"}>2014</MenuItem>
              <MenuItem value={"2013"}>2013</MenuItem>
              <MenuItem value={"2012"}>2012</MenuItem>
              <MenuItem value={"2011"}>2011</MenuItem>
              <MenuItem value={"2010"}>2010</MenuItem>
              <MenuItem value={"2009"}>2009</MenuItem>
              <MenuItem value={"2008"}>2008</MenuItem>
              <MenuItem value={"2007"}>2007</MenuItem>
              <MenuItem value={"2006"}>2006</MenuItem>
              <MenuItem value={"2005"}>2005</MenuItem>
              <MenuItem value={"2004"}>2004</MenuItem>
              <MenuItem value={"2003"}>2003</MenuItem>
              <MenuItem value={"2002"}>2002</MenuItem>
              <MenuItem value={"2001"}>2001</MenuItem>
              <MenuItem value={"2000"}>2000</MenuItem>
              <MenuItem value={"1999"}>1999</MenuItem>
              <MenuItem value={"1998"}>1998</MenuItem>
              <MenuItem value={"1997"}>1997</MenuItem>
              <MenuItem value={"1996"}>1996</MenuItem>
              <MenuItem value={"1995"}>1995</MenuItem>
              <MenuItem value={"1994"}>1994</MenuItem>
              <MenuItem value={"1993"}>1993</MenuItem>
              <MenuItem value={"1992"}>1992</MenuItem>
              <MenuItem value={"1991"}>1991</MenuItem>
              <MenuItem value={"1990"}>1990</MenuItem>
              <MenuItem value={"1989"}>1989</MenuItem>
              <MenuItem value={"1988"}>1988</MenuItem>
              <MenuItem value={"1987"}>1987</MenuItem>
              <MenuItem value={"1986"}>1986</MenuItem>
              <MenuItem value={"1985"}>1985</MenuItem>
              <MenuItem value={"1984"}>1984</MenuItem>
              <MenuItem value={"1983"}>1983</MenuItem>
              <MenuItem value={"1982"}>1982</MenuItem>
              <MenuItem value={"1981"}>1981</MenuItem>
              <MenuItem value={"1980"}>1980</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <TextField
              className={classes.year}
              id="standard-select-currency"
              select
              label="Make"
              defaultValue={vehicle[0].make}
              onChange={(e) => setMake(e.target.value)}
              helperText="Please select Vehicle Make"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={"Alfa Romeo"}>Alfa Romeo</MenuItem>
              <MenuItem value={"Aston Martin"}>Aston Martin</MenuItem>
              <MenuItem value={"Audi"}>Audi</MenuItem>
              <MenuItem value={"BMW"}>BMW</MenuItem>
              <MenuItem value={"Cadillac"}>Cadillac</MenuItem>
              <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
              <MenuItem value={"Chrysler"}>Chrysler</MenuItem>
              <MenuItem value={"Dodge"}>Dodge</MenuItem>
              <MenuItem value={"Fiat"}>Fiat</MenuItem>
              <MenuItem value={"Ford"}>Ford</MenuItem>
              <MenuItem value={"Honda"}>Honda</MenuItem>
              <MenuItem value={"Hummer"}>Hummer</MenuItem>
              <MenuItem value={"Hyundai"}>Hyundai</MenuItem>
              <MenuItem value={"Infiniti"}>Infiniti</MenuItem>
              <MenuItem value={"Jaguar"}>Jaguar</MenuItem>
              <MenuItem value={"Jeep"}>Jeep</MenuItem>
              <MenuItem value={"Kia"}>Kia</MenuItem>
              <MenuItem value={"Land Rover"}>Land Rover</MenuItem>
              <MenuItem value={"Lexus"}>Lexus</MenuItem>
              <MenuItem value={"Mazda"}>Mazda</MenuItem>
              <MenuItem value={"Mercedes-Benz"}>
                Mercedes-Benz
              </MenuItem>
              <MenuItem value={"Mini"}>Mini</MenuItem>
              <MenuItem value={"Mitsubishi"}>Mitsubishi</MenuItem>
              <MenuItem value={"Nissan"}>Nissan</MenuItem>
              <MenuItem value={"Saab"}>Saab</MenuItem>
              <MenuItem value={"Subaru"}>Subaru</MenuItem>
              <MenuItem value={"Suzuki"}>Suzuki</MenuItem>
              <MenuItem value={"Tesla"}>Tesla</MenuItem>
              <MenuItem value={"Toyota"}>Toyota</MenuItem>
              <MenuItem value={"Volkswagen"}>Volkswagen</MenuItem>
              <MenuItem value={"Volvo"}>Volvo</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <TextField
            defaultValue={vehicle[0].model}
              id="standard-basic"
              label="Model"
              onChange={(e) => setModel(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <TextField
              id="standard-basic"
              defaultValue={vehicle[0].vin}
              label="VIN #"
              onChange={(e) => setVin(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <TextField
              id="standard-basic"
              defaultValue={vehicle[0].millage}
              label="Millage"
              onChange={(e) => setMillage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <TextField
              id="standard-basic"
              defaultValue={vehicle[0].color}
              label="Color"
              onChange={(e) => setColor(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CurrencyTextField
              label="Amount"
              variant="standard"
              value={vehicle[0].price}
              currencySymbol="$"
              //minimumValue="0"
              outputFormat="string"
              decimalCharacter="."
              digitGroupSeparator=","
              onChange={(event, value) => setPrice(value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Dropzone
              className="dropzone"
              onDrop={handleDrop}
              onChange={(e) => setPhoto(e.target.value)}
              value={vehicle[0].image}
            >
              {({getRootProps, getInputProps}) => (
                <section>
                  <div {...getRootProps({className: "dropzone"})}>
                    <input {...getInputProps()} />
                    <span>📁</span>
                    <p>
                      Drag 'n' drop some files here, or click to
                      select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
            {imagaPrevie()}
          </Grid>
          <Grid item xs={12}>
            Description:
            <CKEditor
              editor={ClassicEditor}
              data={vehicle[0].description}
              onChange={handleOnChange}
            />
          </Grid>
          {/* <Grid item xs={12}>
            hello
            </Grid>
            <Grid item xs={12}>
            hello
          </Grid>*/}
        </Grid>
        <Button type="submit">Click to Submit</Button>
      </form>
    );
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <MenuList />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Edit a Vehicle
                </Typography>
                <Divider style={{marginBottom: 15}} />
              </Grid>
              {isthereData()}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditVehicles;