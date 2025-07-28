import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Image from "../img/digital finance.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
  },
  title: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    color: "#0065bd",
    padding: 5,
    textDecoration: "none",
    boxShadow: "none",
    fontSize: "2.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.5rem",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link to="/">
            <img
              style={{ width: "70px", height: "70px" }}
              alt="logo"
              src={Image}
            />
          </Link>
          <Typography
            component={Link}
            to="/"
            variant="h4"
            className={classes.title}
          >
            Retail Investor Biases
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
