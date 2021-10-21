import React, {useState, useEffect} from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MenuList from "./menuList";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import UserActions from "./UserActions";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    float: "right",
    marginBottom: "10px"
  }
}));

const GetallUsers = (props) => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const Getall = () => {
    let token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:3000/user/all", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUsers(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    Getall();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <MenuList />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant="h6" gutterBottom>
              Users
            </Typography>
            <Divider style={{marginBottom: 15}} />
            <Link
              to="/admin/users/addusers"
              style={{textDecoration: "none", color: "black"}}
            >
              <Button variant="contained" color="primary" className={classes.button}>
                Add a New user
              </Button>
            </Link>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ID #</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Role</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <StyledTableRow key={user.email}>
                      <StyledTableCell>{user.id}</StyledTableCell>
                      <StyledTableCell>{user.email}</StyledTableCell>
                      <StyledTableCell>{user.firstName} {user.lastName}</StyledTableCell>
                      <StyledTableCell>{user.usertype}</StyledTableCell>
                      <StyledTableCell><UserActions user = {user} Getall ={Getall}/> </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GetallUsers;
