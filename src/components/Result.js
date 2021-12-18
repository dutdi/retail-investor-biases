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
} from '@material-ui/core';
import React, { useState, useEffect, useContext } from 'react';
import Feedback from './Feedback';
import { BiasEducationCenter } from '../data/BiasEducationCenter';
import { Context } from '../helpers/Context';
import { db } from '../helpers/Firebase';
import { doc, setDoc } from 'firebase/firestore';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2, 0, 0, 0),
    },
    width: '1200px',
    height: '700px',
    margin: '50px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  paper: {
    height: 450,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
  },
}));

function createData(biasName, biasTips) {
  return { biasName, biasTips };
}

const Result = ({ biases }) => {
  const classes = useStyles();
  const { submissionId } = useContext(Context);
  const [showFeedback, setShowFeedback] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    for (var i = 0; i < biases.length; i++) {
      const name = BiasEducationCenter[biases[i]].bias.slice(
        9,
        BiasEducationCenter[biases[i]].bias.length
      );
      const tips = BiasEducationCenter[biases[i]].tips
        .split('\n')
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
    const submissionDoc = doc(db, 'submissions', submissionId);
    const resultFields = {
      resultDetails: {},
    };

    for (var i = 0; i < biases.length; i++) {
      const biasName = BiasEducationCenter[biases[i]].bias.slice(
        9,
        BiasEducationCenter[biases[i]].bias.length
      );
      resultFields.resultDetails['result' + i] = biasName;
    }
    await setDoc(submissionDoc, resultFields, { merge: true });
  };

  return (
    <>
      {showFeedback ? (
        <Feedback></Feedback>
      ) : (
        <div className={classes.root}>
          <Typography
            variant='h4'
            gutterBottom
            style={{ backgroundColor: '#0065bd', color: 'white' }}
          >
            Result
          </Typography>
          <Typography variant='h5' gutterBottom>
            You tend to show the following biases:
          </Typography>
          <Paper className={classes.paper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 50 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Bias</TableCell>
                    <TableCell align='center'>Tips</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.biasName}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {row.biasName}
                      </TableCell>
                      <TableCell align='left'>{row.biasTips}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <br></br>
          <br></br>
          <Button
            variant='text'
            style={{ textDecoration: 'none', color: '#0065bd' }}
            onClick={feedbackClicked}
          >
            Was this helpful? <b>Let us know what you think!</b>
          </Button>
        </div>
      )}
    </>
  );
};

export default Result;
