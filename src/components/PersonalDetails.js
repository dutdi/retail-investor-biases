import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4, 0, 0, 0),
    },
    width: '1200px',
    height: '600px',
    margin: '50px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  formControl: {
    margin: theme.spacing(2),
    width: 500,
  },
}));

const PersonalDetails = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    age: '',
    country: '',
    profession: '',
    investingDate: '',
    totalInvestments: '',
  });
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    const checkAllEntered = () => {
      if (
        details.age === '' ||
        details.country === '' ||
        details.profession === '' ||
        details.investingDate === '' ||
        details.totalInvestments === ''
      ) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    };
    checkAllEntered();
  }, [details]);

  const handleChange = (event) => {
    const name = event.target.name;
    setDetails({
      ...details,
      [name]: event.target.value,
    });
  };

  const submitForm = () => {
    //TODO: Save to DB
    console.log(details);
  };

  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  var ages = range(18, 100);

  return (
    <div className={classes.root}>
      <Typography
        variant='h4'
        gutterBottom
        style={{ backgroundColor: '#0065bd', color: 'white' }}
      >
        Enter your details
      </Typography>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='stretch'
      >
        <Grid item>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='age'>Age</InputLabel>
            <Select
              native
              value={details.age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'age',
              }}
            >
              <option aria-label='None' value='' />
              {ages.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='country'>Country</InputLabel>
            <Select
              native
              value={details.country}
              onChange={handleChange}
              inputProps={{
                name: 'country',
                id: 'country',
              }}
            >
              <option aria-label='None' value='' />
              <option value='Germany'>Germany</option>
              <option value='UK'>UK</option>
              <option value='USA'>USA</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='profession'>Profession</InputLabel>
            <Select
              native
              value={details.profession}
              onChange={handleChange}
              inputProps={{
                name: 'profession',
                id: 'profession',
              }}
            >
              <option aria-label='None' value='' />
              <option value='Doctor'>Doctor</option>
              <option value='Engineer'>Engineer</option>
              <option value='Student'>Student</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='investingDate'>
              When did you start investing?
            </InputLabel>
            <Select
              native
              value={details.investingDate}
              onChange={handleChange}
              inputProps={{
                name: 'investingDate',
                id: 'investingDate',
              }}
            >
              <option aria-label='None' value='' />
              <option value='This year'>This year</option>
              <option value='Last year'>Last year</option>
              <option value='2 years ago'>2 years ago</option>
              <option value='3 years ago'>3 years ago</option>
              <option value='4 years ago'>4 years ago</option>
              <option value='Way Before'>Way Before</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='totalInvestments'>
              Total current investments
            </InputLabel>
            <Select
              native
              value={details.totalInvestments}
              onChange={handleChange}
              inputProps={{
                name: 'totalInvestments',
                id: 'totalInvestments',
              }}
            >
              <option aria-label='None' value='' />
              <option value='Less than 100'>Less than 100</option>
              <option value='100-500'>100-500</option>
              <option value='500-1000'>500-1000</option>
              <option value='1000-2000'>1000-2000</option>
              <option value='2000-5000'>2000-5000</option>
              <option value='5000+'>5000+</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {hasError ? (
        <Typography variant='h6' gutterBottom style={{ color: 'red' }}>
          Enter all the fields*
        </Typography>
      ) : (
        <Button
          style={{ backgroundColor: '#0065bd', color: 'white' }}
          component={Link}
          to='/test'
          variant='contained'
          onClick={submitForm}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default PersonalDetails;
