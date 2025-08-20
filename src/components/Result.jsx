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
    "& > *": {
      margin: theme.spacing(2, 0, 0, 0),
    },
    width: "1200px",
    height: "700px",
    margin: "30px",
    backgroundColor: "white",
    textAlign: "center",
  },
  paper: {
    height: 450,
    width: "100%",
    /* marginTop: theme.spacing.unit * 3, */
    overflow: "auto",
  },
}));

function createData(biasName, biasTips) {
  return { biasName, biasTips };
}

const Result = ({ biases }) => {
  console.log(biases);
  const classes = useStyles();
  const { submissionId } = useContext(Context);
  const [showFeedback, setShowFeedback] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    removeDuplicates(biases);
    setRows([]);
    for (var i = 0; i < biases.length; i++) {
      const name = BiasEducationCenter[biases[i]].bias.slice(
        9,
        BiasEducationCenter[biases[i]].bias.length
      );
      const tips = BiasEducationCenter[biases[i]].tips
        .split("\n")
        .map((str) => <p>{str}</p>);
      setRows((rows) => [...rows, createData(name, tips)]);
      saveToDB();
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
          <Typography
            variant="h4"
            gutterBottom
            style={{ backgroundColor: "#0065bd", color: "white" }}
          >
            Result
          </Typography>
          <Typography variant="h5" gutterBottom>
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
                      key={row.biasName}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {
                          <Typography style={{ color: "red", fontWeight: 600 }}>
                            {row.biasName}
                          </Typography>
                        }
                      </TableCell>
                      <TableCell align="left">{row.biasTips}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <br></br>
          <br></br>
          <Button
            variant="text"
            style={{ textDecoration: "none", color: "#0065bd" }}
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
