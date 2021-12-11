import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
//TODO: import image
//import Image from '../img/background.jpeg';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  text1: {
    textAlign: 'center',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text2: {
    textAlign: 'center',
    color: '#0065bd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontWeight: '600',
  },
  text3: {
    textAlign: 'center',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontStyle: 'italic',
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box p={20}>
        <Typography className={classes.text1} variant='h2' gutterBottom>
          The Only Tool You Need to
        </Typography>
        <Typography className={classes.text2} variant='h2' gutterBottom>
          Find & Combat Your Biases
        </Typography>
        <Typography className={classes.text3} variant='h6' gutterBottom>
          by TUM Chair of Digital Finance
        </Typography>
        <Box textAlign='center' m={3}>
          <Button
            component={Link}
            to='/study-info'
            variant='contained'
            style={{ backgroundColor: '#0065bd', color: 'white' }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
