import React, {useState, useEffect} from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ActionsButton from "./ActionsButton";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#323232",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    padding: 10,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

const Vehicletable = (props) => {
  const classes = useStyles();
  const [vehicle, setVehicle] = useState([]);

  const handleTable = () => {
    fetch(`http://localhost:3000/vehicle/all`, {
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
  }

  useEffect(() => {
    handleTable()
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID #</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Year</StyledTableCell>
              <StyledTableCell>Make</StyledTableCell>
              <StyledTableCell>Model</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicle.map((item) => (
              <StyledTableRow key={item.year}>
                <StyledTableCell>{item.id}</StyledTableCell>
                <StyledTableCell>
                  <img alt={item.make} src={item.photo[0]} style={{width: "75px"}} />
                </StyledTableCell>
                <StyledTableCell>{item.year}</StyledTableCell>
                <StyledTableCell>{item.make}</StyledTableCell>
                <StyledTableCell>{item.model}</StyledTableCell>
                <StyledTableCell>${item.price}</StyledTableCell>
                <StyledTableCell>Enable</StyledTableCell>
                <StyledTableCell>
                  <ActionsButton vehicle={item} sessionToken={props.sessionToken} handleTable={handleTable} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Vehicletable;
