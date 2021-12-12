import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
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
    </div>
  );
};

export default Result;
