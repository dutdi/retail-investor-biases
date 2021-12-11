import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4, 0, 0, 0),
    },
    width: '1200px',
    height: '700px',
    margin: '50px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  text1: {
    textAlign: 'center',
    padding: '15px',
  },
  text2: {
    textAlign: 'center',
    padding: '21px',
    fontWeight: '600',
  },
  options: {
    '& > *': {
      margin: theme.spacing(10, 5),
    },
    spacing: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const StudyInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h5' gutterBottom className={classes.text1}>
        In this study, you will complete an Investment Bias Test (IBT) in which
        you will be asked to sort words and scenarios into groups as fast as you
        can. In addition to the IBT, there are some questions about your
        investment strategies, attitudes, opinions, and some standard
        demographic questions. This study should take about 10 minutes to
        complete.
      </Typography>
      <Typography variant='h5' gutterBottom className={classes.text2}>
        In the end, you will receive a list of investment biases that you tend
        to have and some tips on how you can combat them.
      </Typography>
      <Typography variant='h6' gutterBottom className={classes.text1}>
        We thank you for being here!
      </Typography>
      <Button
        component={Link}
        to='/personal-details'
        style={{
          backgroundColor: '#0065bd',
          color: 'white',
          margin: '12px',
        }}
      >
        Continue
      </Button>
    </div>
  );
};

export default StudyInfo;
