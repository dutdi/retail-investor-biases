import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: '1000px',
    height: '500px',
    margin: '100px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
});

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h4' gutterBottom>
        About us
      </Typography>
    </div>
  );
};

export default AboutUs;
