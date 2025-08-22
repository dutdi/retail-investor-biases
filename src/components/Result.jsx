import React, { useState, useEffect, useContext } from "react";
import { doc, setDoc } from "firebase/firestore";
import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Context } from "../helpers/Context";
import { db } from "../helpers/Firebase";
import Feedback from "./Feedback";
import { BiasEducationCenter } from "../data/BiasEducationCenter";

const useStyles = makeStyles((theme) => ({
  root: {
    /*     "& > *": {
      margin: theme.spacing(2, 0, 0, 0),
    }, */
    margin: "30px",
    width: "80%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    height: "auto",
    backgroundColor: "white",
    textAlign: "center",
  },
  text1: {
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
  text2: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
    fontWeight: "400",
    lineHeight: "1.334",
    letterSspacing: "0em",
  },
  text3: {},
  text4: {
    color: "red",
    fontWeight: "600",
    fontSize: "0.7rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
  text5: {
    fontSize: "10px",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
    },
  },
  text6: {
    textDecoration: "none",
    color: "#0065bd",
    fontSize: "0.7rem",
    [theme.breakpoints.up("md")]: { fontSize: "1rem" },
  },
  paper: {
    height: 450,
    width: "100%",
    /* marginTop: theme.spacing.unit * 3, */
    overflow: "auto",
  },
}));

function createData(id, biasName, biasTips) {
  return { id, biasName, biasTips };
}

const Result = ({ biases }) => {
  const classes = useStyles();
  const { submissionId } = useContext(Context);
  const [showFeedback, setShowFeedback] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    removeDuplicates(biases);
    setRows([]);
    for (let i = 0; i < biases.length; i++) {
      const biasData = BiasEducationCenter[biases[i]];
      if (biasData) {
        const name = biasData.bias.slice(9, biasData.bias.length);
        const tips = biasData.tips
          .split("\n")
          .map((str, idx) => <p key={idx}>{str}</p>);
        setRows((rows) => [...rows, createData(i, name, tips)]);
        saveToDB();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const feedbackClicked = () => {
    setRows([]);
    setShowFeedback(true);
  };

  const saveToDB = async () => {
    const submissionDoc = doc(db, "submissions", submissionId);
    const resultFields = {
      resultDetails: {},
    };

    for (var i = 0; i < biases.length; i++) {
      const biasName = BiasEducationCenter[biases[i]].bias.slice(
        9,
        BiasEducationCenter[biases[i]].bias.length
      );
      resultFields.resultDetails["result" + i] = biasName;
    }
    await setDoc(submissionDoc, resultFields, { merge: true });
  };

  function removeDuplicates(array) {
    return [...new Set(array)];
  }

  return (
    <>
      {showFeedback ? (
        <Feedback></Feedback>
      ) : (
        <div className={classes.root}>
          <Typography gutterBottom className={classes.text1}>
            Result
          </Typography>
          <Typography className={classes.text2} gutterBottom>
            You tend to show the following biases:
          </Typography>
          <Paper className={classes.paper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 50 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography style={{ color: "black", fontWeight: 600 }}>
                        Bias
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography style={{ color: "black", fontWeight: 600 }}>
                        Tips to combat
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {
                          <Typography className={classes.text4}>
                            {row.biasName}
                          </Typography>
                        }
                      </TableCell>
                      <TableCell className={classes.text5} align="left">
                        {row.biasTips}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <br></br>
          <br></br>
          <Button
            className={classes.text6}
            variant="text"
            onClick={feedbackClicked}
          >
            Was this helpful? <b> Let us know what you think!</b>
          </Button>
        </div>
      )}
    </>
  );
};

export default Result;
