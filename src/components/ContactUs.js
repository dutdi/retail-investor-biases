import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Image from '../img/landing.png';

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

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant='h4'
        gutterBottom
        style={{ backgroundColor: '#0065bd', color: 'white' }}
      >
        Contact us
      </Typography>
      <Typography variant='h6' gutterBottom>
        Please, feel free to get in touch with us by{' '}
        <b>
          <a href='mailto:muneeb.ahmed@tum.de'>muneeb.ahmed@tum.de</a>
        </b>
      </Typography>
      <Paper>
        <img
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          alt='background'
          src={Image}
        />
      </Paper>
      <Typography
        variant='h5'
        gutterBottom
        style={{ backgroundColor: '#0065bd', color: 'white' }}
      >
        Thank you!
      </Typography>
    </div>
  );
};

export default ContactUs;
