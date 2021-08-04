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
    paddingBottom: "0px",
  },
}));

const MenuDestok = (props) => {
  const classes = useStyles();
  const [filteredData, setFilteredData] = useState(props.vehicle);

  const handleData = (event) => {
    let value = event.target.value;
    let result = [];
    console.log(value);
    result = props.vehicle.filter((data) => {
      return data.year.search(value) != -1;
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
          style={{paddingLeft: 25, paddingRight: 0, marginTop: 15, marginBottom: 15}} 
        >
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Year</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              onChange={handleData}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"2016"}>2016</MenuItem>
              <MenuItem value={"2005"}>2005</MenuItem>
              <MenuItem value={2006}>2006</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Make</InputLabel>
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
          </FormControl>
          <FormControl className={classes.formControl}>
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
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Condition
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
          </FormControl>
          <FormControl className={classes.formControl}>
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
          </FormControl>
          <FormControl className={classes.formControl}>
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
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Exterior Color
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
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9} className={classes.DashboardStyle}>
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
