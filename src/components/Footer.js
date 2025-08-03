import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    display: "flex",
    flexDirection: "column",
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: "white",
  },
  textUnderFooterRoot: {
    margin: "0 auto",
    textAlign: "center",
    fontSize: "10px",
    [theme.breakpoints.up("md")]: { fontSize: "15px" },
    [theme.breakpoints.up("lg")]: { fontSize: "20px" },
  },
  linkUnderFooterRoot: {
    fontSize: "15px",
    [theme.breakpoints.up("md")]: { fontSize: "20px" },
    [theme.breakpoints.up("lg")]: { fontSize: "25px" },
    color: "#0065bd",
    textDecoration: "none",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerRoot}>
      <Typography
        className={classes.textUnderFooterRoot}
        style={{}}
        /* variant="body1" */
        gutterBottom
      >
        Made with 💙 in Munich by Tunar Mahmudov & Muneeb Ahmed @ TUM's Chair of
        Digital Finance
      </Typography>
      <div style={{ textAlign: "center", right: "0px" }}>
        <Typography
          component={Link}
          to="/imprint"
          className={classes.linkUnderFooterRoot}
        >
          Imprint
        </Typography>
        <Typography
          component={Link}
          to="/privacy"
          className={classes.linkUnderFooterRoot}
        >
          {" "}
          | Privacy |{" "}
        </Typography>
        <Typography
          component={Link}
          to="/contact-us"
          className={classes.linkUnderFooterRoot}
        >
          Contact us
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
