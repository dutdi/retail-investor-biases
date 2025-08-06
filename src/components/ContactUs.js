import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Image from "../img/landing.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2, 0, 0, 0),
    },
    width: "80%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    height: "100%",
    backgroundColor: "white",
    textAlign: "center",
  },
  contactUs: {
    backgroundColor: "#0065bd",
    color: "white",
    fontSize: "25px",
    [theme.breakpoints.up("md")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "40px",
    },
  },
  text1: {
    color: "#0065bd",
    fontSize: "16px",
    [theme.breakpoints.up("md")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "40px",
    },
  },
  thankYou: {
    backgroundColor: "#0065bd",
    color: "white",
    fontSize: "20px",
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "35px",
    },
    margin: "10px",
  },
  /* imgUnderBox: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  }, */
}));

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom className={classes.contactUs}>
        Contact us
      </Typography>
      <Typography className={classes.text1} gutterBottom>
        <b>Technical University of Munich - Chair of Digital Finance</b>
      </Typography>
      <Typography variant="h6" gutterBottom>
        Please, feel free to get in touch with us by: <br></br>
        <b>
          <a href="mailto:muneeb.ahmed@tum.de">muneeb.ahmed@tum.de</a>
        </b>
        <br></br>
        <b>
          <a href="mailto:tunar.mahmudov@tum.de">tunar.mahmudov@tum.de</a>
        </b>
        <i>(for development)</i>
      </Typography>
      <Box pt={8}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          alt="background"
          src={Image}
        />
      </Box>
      <Typography className={classes.thankYou} variant="h5" gutterBottom>
        Thank you!
      </Typography>
    </div>
  );
};

export default ContactUs;
