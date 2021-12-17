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
import { feedbackAccuracies } from '../helpers/lists/FeedbackAccuracyList';
import { feedbackRecommendations } from '../helpers/lists/FeedbackRecommendationList';

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
    margin: theme.spacing(3),
    width: 500,
  },
}));

const Feedback = () => {
  const classes = useStyles();
  const [feedback, setFeedback] = useState({
    feedbackAccuracy: '',
    feedbackRecommendation: '',
  });
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    const checkAllEntered = () => {
      if (
        feedback.feedbackAccuracy === '' ||
        feedback.feedbackRecommendation === ''
      ) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    };
    checkAllEntered();
  }, [feedback]);

  const handleChange = (event) => {
    const name = event.target.name;
    setFeedback({
      ...feedback,
      [name]: event.target.value,
    });
    console.log(feedback);
  };

  const sendFeedback = () => {
    //TODO: Save to DB
    console.log(feedback);
  };

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
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='feedbackAccuracy'>Accuracy</InputLabel>
            <Select
              native
              value={feedback.feedbackAccuracy}
              onChange={handleChange}
              inputProps={{
                name: 'feedbackAccuracy',
                id: 'feedbackAccuracy',
              }}
            >
              <option aria-label='None' value='' />
              {feedbackAccuracies.map((feedbackAccuracy) => (
                <option value={feedbackAccuracy}>{feedbackAccuracy}</option>
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
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='feedbackRecommendation'>
              Recommendation
            </InputLabel>
            <Select
              native
              value={feedback.feedbackRecommendation}
              onChange={handleChange}
              inputProps={{
                name: 'feedbackRecommendation',
                id: 'feedbackRecommendation',
              }}
            >
              <option aria-label='None' value='' />
              {feedbackRecommendations.map((feedbackRecommendation) => (
                <option value={feedbackRecommendation}>
                  {feedbackRecommendation}
                </option>
              ))}
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
          to='/'
          variant='contained'
          onClick={sendFeedback}
        >
          Send
        </Button>
      )}
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

export default Feedback;
