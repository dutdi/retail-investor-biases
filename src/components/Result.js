import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { BiasEducationCenter } from '../data/BiasEducationCenter';

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
}));

const Result = () => {
  const classes = useStyles();
  console.log(JSON.stringify(BiasEducationCenter));

  return (
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
      <Typography variant='h5' gutterBottom>
        Click on each bias to see the tips that are useful to combat with the
        corresponding bias
      </Typography>

      <Typography
        component={Link}
        to='/feedback'
        variant='h5'
        gutterBottom
        style={{ textDecoration: 'none', color: '#0065bd' }}
      >
        Was this helpful? <b>Let us know what you think!</b>
      </Typography>
    </div>
  );
};

export default Result;
