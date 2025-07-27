import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Image from "../img/landing.png";

const useStyles = makeStyles({
  image: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  text1: {
    textAlign: "center",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text2: {
    textAlign: "center",
    color: "#0065bd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontWeight: "600",
  },
  text3: {
    textAlign: "center",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontStyle: "italic",
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <Box m={5}>
      <Typography className={classes.text1} variant="h5" gutterBottom>
        The Only Tool You Need to
      </Typography>
      <Typography className={classes.text2} variant="h2" gutterBottom>
        Find & Combat Your Biases
      </Typography>
      <Box textAlign="center" mt={10}>
        <Typography className={classes.text3} variant="h6" gutterBottom>
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
        <Box className={classes.image} mt={10}>
          <img alt="background" src={Image} />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
