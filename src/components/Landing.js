import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//TODO: import image
//import Image from '../img/background.jpeg';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'brightness(80%)',
  },
  text: {
    textAlign: 'center',
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box p={20}>
        <Box
          className={classes.text}
          fontSize='h2.fontSize'
          fontWeight='fontWeightBold'
          fontFamily='Georgia'
        >
          The Only Tool You Need to Find & Combat Your Biases
        </Box>
        <Box
          className={classes.text}
          fontSize='h6.fontSize'
          fontStyle='italic'
          fontWeight='fontWeightLight'
        >
          by TUM Chair of Digital Finance
        </Box>
        <Box textAlign='center' m={3}>
          <Button
            component={Link}
            to='/personal-details'
            variant='contained'
            color='primary'
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
