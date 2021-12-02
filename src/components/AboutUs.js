import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4, 0, 0, 0),
    },
    width: '1000px',
    height: '500px',
    margin: '100px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant='h4'
        gutterBottom
        style={{ backgroundColor: '#0065bd', color: 'white' }}
      >
        About us
      </Typography>
    </div>
  );
};

export default AboutUs;
