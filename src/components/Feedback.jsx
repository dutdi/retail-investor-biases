import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  Typography,
} from '@material-ui/core';
import { feedbackAccuracies } from '../helpers/lists/FeedbackAccuracyList';
import { feedbackRecommendations } from '../helpers/lists/FeedbackRecommendationList';
import { Context } from '../helpers/Context';
import { db } from '../helpers/Firebase';

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
  formControl: {
    margin: theme.spacing(3),
    width: 500,
  },
}));

const Feedback = () => {
  const classes = useStyles();
  const { submissionId, setSubmissionId } = useContext(Context);
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
  };

  const sendFeedback = () => {
    saveToDB();
    setFeedback({
      feedbackAccuracy: '',
      feedbackRecommendation: '',
    });
    setSubmissionId('');
  };

  const saveToDB = async () => {
    const submissionDoc = doc(db, 'submissions', submissionId);
    const feedbackFields = {
      feedbackDetails: {
        accuracy: feedback.feedbackAccuracy,
        recommendation: feedback.feedbackRecommendation,
      },
    };
    await setDoc(submissionDoc, feedbackFields, { merge: true });
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
      <Box pt={8}>
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
      </Box>
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
      <Box pt={18}>
        <Typography
          variant='h5'
          gutterBottom
          style={{ backgroundColor: '#0065bd', color: 'white' }}
        >
          Thank you!
        </Typography>
      </Box>
    </div>
  );
};

export default Feedback;
