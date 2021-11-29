import React, { useState, useContext } from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BiasEducationCenter } from '../helpers/BiasEducationCenter';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1000px',
    height: '500px',
    margin: '100px',
    backgroundColor: 'white',
  },
  textBias: {
    textAlign: 'center',
    padding: '21px',
  },
  textDesc: {
    textAlign: 'center',
    padding: '21px',
  },
  textWarning: {
    textAlign: 'center',
    padding: '21px',
    color: 'red',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(10, 1),
    },
    textAlign: 'center',
  },
}));

const BiasEducation = () => {
  const classes = useStyles();

  const [index, setIndex] = useState(0);

  const backButtonClicked = () => {
    console.log('BACK');
  };

  const nextButtonClicked = () => {
    console.log('NEXT');
  };

  return (
    <div className={classes.root}>
      <Typography variant='h3' gutterBottom className={classes.textBias}>
        {BiasEducationCenter[index].bias}
      </Typography>
      <Typography variant='h5' gutterBottom className={classes.textDesc}>
        {BiasEducationCenter[index].description}
      </Typography>
      <Typography variant='h6' gutterBottom className={classes.textWarning}>
        {BiasEducationCenter[index].warning}
      </Typography>
      <div className={classes.buttons}>
        <Button
          variant='contained'
          color='secondary'
          onClick={backButtonClicked}
        >
          Back
        </Button>
        <Button variant='contained' color='primary' onClick={nextButtonClicked}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default BiasEducation;
