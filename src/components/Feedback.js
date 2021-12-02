import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  formControl: {
    margin: theme.spacing(1),
    width: 400,
  },
}));

const Feedback = () => {
  const classes = useStyles();
  const [feedback, setFeedback] = useState({
    accuracy: '',
    recommendation: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setFeedback({
      ...feedback,
      [name]: event.target.value,
    });
  };

  const sendFeedback = () => {
    //TODO: Save to DB
    console.log(feedback);
  };

  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  var accuracies = range(1, 10);

  return (
    <div className={classes.root}>
      <Typography
        variant='h4'
        gutterBottom
        style={{ backgroundColor: '#0065bd', color: 'white' }}
      >
        Give us a feedback
      </Typography>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='stretch'
      >
        <Grid item>
          <Typography variant='h6' gutterBottom style={{ fontWeight: 600 }}>
            On a scale of 1-10 how accurate do you think your result was?
          </Typography>
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='accuracy'>Select</InputLabel>
            <Select
              native
              value={feedback.accuracy}
              onChange={handleChange}
              inputProps={{
                name: 'accuracy',
                id: 'accuracy',
              }}
            >
              <option aria-label='None' value='' />
              {accuracies.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Typography variant='h6' gutterBottom style={{ fontWeight: 600 }}>
            How likely are you to recommend this tool to someone else?
          </Typography>
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='recommendation'>Select</InputLabel>
            <Select
              native
              value={feedback.recommendation}
              onChange={handleChange}
              inputProps={{
                name: 'recommendation',
                id: 'recommendation',
              }}
            >
              <option aria-label='None' value='' />
              <option value='Strongly not recommended'>
                Strongly not recommended
              </option>
              <option value='Not recommended'>Not recommended</option>
              <option value='Recommended'>Recommended</option>
              <option value='Strongly recommended'>Strongly recommended</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button
        style={{ backgroundColor: '#0065bd', color: 'white' }}
        component={Link}
        to='/'
        variant='contained'
        onClick={sendFeedback}
      >
        Send
      </Button>
      <Typography
        variant='h6'
        gutterBottom
        style={{ backgroundColor: '#0065bd', color: 'white' }}
      >
        Thank you!
      </Typography>
    </div>
  );
};

export default Feedback;
