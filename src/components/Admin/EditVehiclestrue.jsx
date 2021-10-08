import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import Button from "@material-ui/core/Button";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "react-dropzone";
import axios from "axios";
import {useHistory} from "react-router";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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

const EditVehiclesTrue = (props) => {
  const classes = useStyles();
  const [year, setYear] = useState(props.vehicle[0].year);
  const [make, setMake] = useState(props.vehicle[0].make);
  const [model, setModel] = useState(props.vehicle[0].model);
  const [vin, setVin] = useState(props.vehicle[0].vin);
  const [price, setPrice] = useState(props.vehicle[0].price);
  const [color, setColor] = useState(props.vehicle[0].color);
  const [millage, setMillage] = useState(props.vehicle[0].millage);
  const [setPhoto] = useState(props.vehicle[0].photo);
  const [description, setDescription] = useState(props.vehicle[0].description);
  const [image, setImage] = useState(props.vehicle[0].photo);
  const [condition, setCondition] = useState(props.vehicle[0].condition);
  const [bodystyle, setBodystyle] = useState(props.vehicle[0].bodystyle);
  const [status, setStatus] = useState(props.vehicle[0].status);
  const [views] = useState(props.vehicle[0].views);
  const [loading, setLoading] = useState("");
  const history = useHistory();
  const [state, setState] = useState(props.vehicle[0].enable);

  const handleChange = (event) => {
    setState(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("token"));
    let token = localStorage.getItem("token");
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
        enable: state,
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
      `http://localhost:3000/vehicle/editveh/${props.vehicle[0].id}`,
      requestOptions
    )
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
        setCondition("");
        setStatus("");
        setBodystyle("");
        // setDescription(props.vehicle[0].description)
        setColor("");
        routeChange();
      });
  };

  const routeChange = () => {
    let path = "/adminArea";
    history.push(path);
  };

  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setDescription(data);
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
                <img
                  alt="Uploaded"
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
  useEffect(() => {}, []);

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
            defaultValue={props.vehicle[0].year}
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
            defaultValue={props.vehicle[0].make}
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
            <MenuItem value={"Mercedes-Benz"}>Mercedes-Benz</MenuItem>
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
            defaultValue={props.vehicle[0].model}
            id="standard-basic"
            label="Model"
            onChange={(e) => setModel(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField
            id="standard-basic"
            defaultValue={props.vehicle[0].vin}
            label="VIN #"
            onChange={(e) => setVin(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField
            id="standard-basic"
            defaultValue={props.vehicle[0].millage}
            label="Millage"
            onChange={(e) => setMillage(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField
            className={classes.year}
            select
            label="Color"
            defaultValue={props.vehicle[0].color}
            onChange={(e) => setColor(e.target.value)}
            helperText="Please select Vehicle Color"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={"White"}>White</MenuItem>
            <MenuItem value={"Yellow"}>Yellow</MenuItem>
            <MenuItem value={"Red"}>Red</MenuItem>
            <MenuItem value={"Silver"}>Silver</MenuItem>
            <MenuItem value={"Gray"}>Gray</MenuItem>
            <MenuItem value={"Olive"}>Olive</MenuItem>
            <MenuItem value={"Marron"}>Marron</MenuItem>
            <MenuItem value={"Green"}>Green</MenuItem>
            <MenuItem value={"Teal"}>Teal</MenuItem>
            <MenuItem value={"Blue"}>Blue</MenuItem>
            <MenuItem value={"Navy"}>Navy</MenuItem>
            <MenuItem value={"Black"}>Black</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField
            className={classes.year}
            select
            label="Condition"
            defaultValue={props.vehicle[0].condition}
            onChange={(e) => setCondition(e.target.value)}
            helperText="Please select Vehicle Condition"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={"New"}>New</MenuItem>
            <MenuItem value={"Used"}>Used Vehicle</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField
            className={classes.year}
            select
            label="Body Style"
            defaultValue={props.vehicle[0].bodystyle}
            onChange={(e) => setBodystyle(e.target.value)}
            helperText="Please select Vehicle Body Style"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={"Sedan"}>Sedan</MenuItem>
            <MenuItem value={"SUV"}>SUV</MenuItem>
            <MenuItem value={"Truck"}>Truck</MenuItem>
            <MenuItem value={"Mini Van"}>Mini Van </MenuItem>
            <MenuItem value={"Compact"}>Compact</MenuItem>
            <MenuItem value={"Coupe"}>Coupe</MenuItem>
            <MenuItem value={"Convertible"}>Convertible</MenuItem>
            <MenuItem value={"Wagon"}>Wagon</MenuItem>
            <MenuItem value={"HatchBack"}>Hatchback</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField
            className={classes.year}
            select
            defaultValue={props.vehicle[0].status}
            label="Status of vehicle"
            onChange={(e) => setStatus(e.target.value)}
            helperText="Please select Vehicle Status"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={"On Sale"}>On sale</MenuItem>
            <MenuItem value={"Sold"}>Sold </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CurrencyTextField
            label="Amount"
            variant="standard"
            value={props.vehicle[0].price}
            currencySymbol="$"
            //minimumValue="0"
            outputFormat="string"
            decimalCharacter="."
            digitGroupSeparator=","
            onChange={(event, value) => setPrice(value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FormControlLabel
            control={
              <Switch
                checked={state}
                onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{"aria-label": "primary checkbox"}}
              />
            }
            label="Enable Vehicle"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Dropzone
            className="dropzone"
            onDrop={handleDrop}
            onChange={(e) => setPhoto(e.target.value)}
            value={props.vehicle[0].image}
          >
            {({getRootProps, getInputProps}) => (
              <section>
                <div {...getRootProps({className: "dropzone"})}>
                  <input {...getInputProps()} />
                  <span>📁</span>
                  <p>Drag 'n' drop some files here, or click to select files</p>
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
            data={props.vehicle[0].description}
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

export default EditVehiclesTrue;
