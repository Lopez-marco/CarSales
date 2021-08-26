import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import FilterData from "../Carts/FilterData";
import NofilterData from "../Carts/NofilterData";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 280,
  },
  menu: {
    margin: "15px",
  },
  menuPadding: {
    marginBottom: "19px",
  },
  DashboardStyle: {
    backgroundColor: "#F5F5F5",
    paddingBottom: "15px",
    paddingTop: "15px"
  },
}));

const MenuDestok = (props) => {
  const classes = useStyles();
  const [filteredData, setFilteredData] = useState(props.vehicle);

  const handleData = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    let result = [];
    result = props.vehicle.filter((data) => {
      return data[name].search(value) !== -1;
    });
    setFilteredData(result);
  };

  return (
    <div>
      <Grid container spacing={40}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{
            paddingLeft: 25,
            paddingRight: 0,
            marginTop: 15,
            marginBottom: 15,
            textAlign: "center"
          }}
        >
          <FormControl className={classes.formControl} >
            <InputLabel id="demo-controlled-open-select-label">Year</InputLabel>
            <Select name="year" onChange={handleData}>
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
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Make</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              name="make"
              onChange={handleData}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
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
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Condition
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              name="condition" onChange={handleData}
              >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"New"}>New</MenuItem>
            <MenuItem value={"Used"}>Used Vehicle</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Exterior Color
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              name="color" onChange={handleData}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
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
            </Select>
          </FormControl>
          {/* <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Model
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              //   value={age}
              //   onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>2010</MenuItem>
              <MenuItem value={20}>2011</MenuItem>
              <MenuItem value={30}>2012</MenuItem>
            </Select>
          </FormControl> */}
          {/* <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Price
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              //   value={age}
              //   onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>2010</MenuItem>
              <MenuItem value={20}>2011</MenuItem>
              <MenuItem value={30}>2012</MenuItem>
            </Select>
          </FormControl> */}
          {/* <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Millage
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              //   value={age}
              //   onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>2010</MenuItem>
              <MenuItem value={20}>2011</MenuItem>
              <MenuItem value={30}>2012</MenuItem>
            </Select>
          </FormControl> */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={9}
          className={classes.DashboardStyle}
        >
          {filteredData >= 0 ? (
            <NofilterData vehicle={props.vehicle} />
          ) : (
            <FilterData filteredData={filteredData} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default MenuDestok;
