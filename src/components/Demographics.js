import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { genders } from '../helpers/GenderList';
import { countries } from '../helpers/CountryList';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
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
  formControl: {
    margin: theme.spacing(1),
    width: 500,
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Demographics = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    age: '',
    gender: [],
    citizenship: '',
    profession: '',
    investingDate: '',
    totalInvestments: '',
  });
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    const checkAllEntered = () => {
      if (
        details.age === '' ||
        details.gender.length === 0 ||
        details.citizenship === '' ||
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
    console.log(name);
    setDetails({
      ...details,
      [name]: event.target.value,
    });
  };

  const submitForm = () => {
    //TODO: Save to DB
    console.log(details);
  };

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
              <option value='Under 18'>Under 18</option>
              <option value='18-30'>18-30</option>
              <option value='31-44'>31-44</option>
              <option value='45-60'>45-60</option>
              <option value='60+'>60+</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='gender'>
              Current Gender Identity (check all that apply)
            </InputLabel>
            <Select
              labelId='gender'
              id='gender-id'
              multiple
              value={details.gender}
              onChange={handleChange}
              inputProps={{
                name: 'gender',
                id: 'gender',
              }}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  <Checkbox checked={details.gender.indexOf(gender) > -1} />
                  <ListItemText primary={gender} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='citizenship'>
              What's your country/region of primary citizenship?
            </InputLabel>
            <Select
              native
              value={details.citizenship}
              onChange={handleChange}
              inputProps={{
                name: 'citizenship',
                id: 'citizenship',
              }}
            >
              <option aria-label='None' value='' />
              {countries.map((country) => (
                <option value={country}>{country}</option>
              ))}
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

export default Demographics;
