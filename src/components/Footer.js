import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    display: 'flex',
    position: 'relative',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: 'lightgrey',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerRoot}>
      <Typography
        style={{
          margin: '0 auto',
          textAlign: 'center',
        }}
        variant='body1'
        gutterBottom
      >
        Made with 💙 in Munich by Tunar Mahmudov & Muneeb Ahmed @ TUM's Chair of
        Digital Finance
      </Typography>
      <div style={{ position: 'absolute', right: '0px' }}>
        <Typography
          component={Link}
          to='/imprint'
          variant='h6'
          style={{ color: '#0065bd', textDecoration: 'none' }}
        >
          Imprint
        </Typography>
        <Typography
          component={Link}
          to='/privacy'
          variant='h6'
          style={{ color: '#0065bd', textDecoration: 'none' }}
        >
          {' '}
          | Privacy |{' '}
        </Typography>
        <Typography
          component={Link}
          to='/contact-us'
          variant='h6'
          style={{ color: '#0065bd', textDecoration: 'none' }}
        >
          Contact us
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
