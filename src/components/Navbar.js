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
    fontSize: "1.2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.5rem",
    },
  },
  toolBar: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
  },
  linkUnderToolBar: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      left: "0",
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      left: "0",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolBar}>
          <Link to="/" className={classes.linkUnderToolBar}>
            <img
              style={{
                width: "70px",
                height: "70px",
              }}
              alt="logo"
              src={Image}
            />
          </Link>
          <Typography component={Link} to="/" className={classes.title}>
            Retail Investor Biases
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
