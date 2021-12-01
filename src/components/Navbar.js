import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: '#fff',
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
          <Typography
            component={Link}
            to='/'
            variant='h6'
            color='primary'
            className={classes.title}
          >
            Retail Investor Biases
          </Typography>
          <div>
            <Button component={Link} to='/personal-details' color='primary'>
              Take the Test
            </Button>
            <Button component={Link} to='/about-us' color='primary'>
              About us
            </Button>
            <Button component={Link} to='/contact-us' color='primary'>
              Contact us
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
