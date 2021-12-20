import React from 'react';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import Image from '../img/landing.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2, 0, 0, 0),
    },
    width: '1200px',
    height: '700px',
    margin: '30px',
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
      <Typography variant='h4' gutterBottom style={{ color: '#0065bd' }}>
        <b>Technical University of Munich - Chair of Digital Finance</b>
      </Typography>
      <Typography variant='h6' gutterBottom>
        Please, feel free to get in touch with us by: <br></br>
        <b>
          <a href='mailto:muneeb.ahmed@tum.de'>muneeb.ahmed@tum.de</a>
        </b>
        <br></br>
        <b>
          <a href='mailto:tunar.mahmudov@tum.de'>tunar.mahmudov@tum.de</a>
        </b>
        <i>(for development)</i>
      </Typography>
      <Box pt={8}>
        <img
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          alt='background'
          src={Image}
        />
      </Box>
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
