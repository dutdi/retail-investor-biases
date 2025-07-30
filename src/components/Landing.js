import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Image from "../img/landing.png";

const useStyles = makeStyles((theme) => ({
  imageDiv: {
    /* backgroundImage: `url(${Image})`, */
    /*  backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center", */
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: "100%",
  },
  text1: {
    textAlign: "center",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "18px",
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
    },
  },
  text2: {
    textAlign: "center",
    color: "#0065bd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: "36px",
    [theme.breakpoints.up("md")]: {
      fontSize: "48px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "60px",
    },
  },
  text3: {
    textAlign: "center",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontStyle: "italic",
    fontSize: "16px",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px",
    },
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Box m={5}>
      <Typography className={classes.text1} /* variant="h5" */ gutterBottom>
        The Only Tool You Need to
      </Typography>
      <Typography className={classes.text2} /* variant="h2" */ gutterBottom>
        Find & Combat Your Biases
      </Typography>
      <Box textAlign="center" mt={10}>
        <Typography className={classes.text3} /* variant="h6" */ gutterBottom>
          by TUM Chair of Digital Finance
        </Typography>
        <Button
          component={Link}
          to="/study-info"
          variant="contained"
          style={{ backgroundColor: "#0065bd", color: "white" }}
        >
          Get Started
        </Button>
      </Box>
      <Box className={classes.imageDiv} mt={10}>
        <img className={classes.img} alt="background" src={Image} />
      </Box>
    </Box>
  );
};

export default Landing;
