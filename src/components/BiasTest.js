import React, { useState, useEffect, useContext } from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BiasEducationCenter } from '../helpers/BiasEducationCenter';
import { BiasContext } from '../helpers/Context';
import Result from './Result';
import useEventListener from '@use-it/event-listener';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1200px',
    height: '700px',
    margin: '20px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  text1: {
    textAlign: 'center',
    padding: '15px',
    fontWeight: '600',
  },
  text2: {
    textAlign: 'center',
    padding: '15px',
  },
  text3: {
    textAlign: 'center',
    padding: '1px',
    color: 'red',
  },
  text4: {
    textAlign: 'center',
    padding: '21px',
    fontWeight: '600',
    color: '#0065bd',
  },
  options: {
    '& > *': {
      margin: theme.spacing(10, 5),
    },
    spacing: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const BiasTest = () => {
  const classes = useStyles();

  const { biasIndex, setBiasIndex } = useContext(BiasContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(false);

  useEffect(() => {
    let interval = null;
    if (startTime) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startTime]);

  const setSelectedAnswer = (answer) => {
    BiasEducationCenter[biasIndex].questions[questionIndex].timeSpent = time;
    setTime(0);
    BiasEducationCenter[biasIndex].questions[questionIndex].userSelection =
      answer;
    if (questionIndex < BiasEducationCenter[biasIndex].questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      if (biasIndex < BiasEducationCenter.length - 1) {
        setShowQuestion(false);
        setQuestionIndex(0);
        setBiasIndex(biasIndex + 1);
      } else {
        console.log('END OF BIASES');
        //TODO: Save to DB
        setStartTime(false);
        setShowResult(true);
      }
    }
  };

  const nextButtonClicked = () => {
    setShowQuestion(true);
    setStartTime(true);
  };

  const handleKeyPress = (event) => {
    if (showQuestion) {
      if (event.key === 'E' || event.key === 'e') {
        console.log('e pressed');
        setSelectedAnswer('A');
      } else if (event.key === 'I' || event.key === 'i') {
        console.log('i pressed');
        setSelectedAnswer('B');
      }
    }
  };

  useEventListener('keydown', handleKeyPress);

  return (
    <>
      {showResult ? (
        <Result></Result>
      ) : (
        <div className={classes.root}>
          {showQuestion ? (
            <div tabIndex='0'>
              <Typography variant='h4' gutterBottom className={classes.text4}>
                {BiasEducationCenter[biasIndex].questions[questionIndex].prompt}
              </Typography>
              <Grid container className={classes.options}>
                <Grid item xs={5}>
                  Press E for{' '}
                  <Typography
                    variant='h5'
                    style={{ color: 'green', fontWeight: 600 }}
                  >
                    {BiasEducationCenter[biasIndex].questions[questionIndex].A}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  Press I for{' '}
                  <Typography
                    variant='h5'
                    style={{ color: 'red', fontWeight: 600 }}
                  >
                    {BiasEducationCenter[biasIndex].questions[questionIndex].B}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div>
              <Typography
                variant='h5'
                gutterBottom
                className={classes.text1}
                style={{ backgroundColor: '#0065bd', color: 'white' }}
              >
                {BiasEducationCenter[biasIndex].bias}
              </Typography>
              <Typography variant='h6' gutterBottom className={classes.text2}>
                {BiasEducationCenter[biasIndex].description}
              </Typography>
              <Typography variant='h6' gutterBottom className={classes.text3}>
                {BiasEducationCenter[biasIndex].warning}
              </Typography>
              <Typography variant='h6' gutterBottom className={classes.text2}>
                {BiasEducationCenter[biasIndex].instruction}
              </Typography>
              <Paper>
                <img
                  style={{ width: '500px', height: '300px' }}
                  alt={BiasEducationCenter[biasIndex].bias}
                  src={BiasEducationCenter[biasIndex].categoriesAndItems}
                />
              </Paper>
              <Button
                style={{
                  backgroundColor: '#0065bd',
                  color: 'white',
                  margin: '12px',
                }}
                variant='contained'
                onClick={nextButtonClicked}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BiasTest;
