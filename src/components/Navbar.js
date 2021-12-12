import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Image from '../img/digital finance.png';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'lightgrey',
  },
  title: {
    flexGrow: 1,
    padding: 5,
    textDecoration: 'none',
    boxShadow: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position='static'>
        <Toolbar>
          <Avatar variant='square' src={Image} />
          <Typography
            component={Link}
            to='/'
            variant='h6'
            style={{ color: '#0065bd' }}
            className={classes.title}
          >
            Retail Investor Biases
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
