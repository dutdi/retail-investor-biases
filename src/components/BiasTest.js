import React, { useState, useEffect, useContext } from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BiasEducationCenter } from '../helpers/BiasEducationCenter';
import { BiasContext } from '../helpers/Context';
import Result from './Result';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1000px',
    height: '500px',
    margin: '100px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  textBias: {
    textAlign: 'center',
    padding: '21px',
  },
  textDesc: {
    textAlign: 'center',
    padding: '21px',
  },
  textWarning: {
    textAlign: 'center',
    padding: '2px',
    color: 'red',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1, 1),
    },
    textAlign: 'center',
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
    //Save time
    BiasEducationCenter[biasIndex].questions[questionIndex].timeSpent = time;
    //Reset time
    setTime(0);
    BiasEducationCenter[biasIndex].questions[questionIndex].userSelection =
      answer;
    if (questionIndex < BiasEducationCenter[biasIndex].questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      if (biasIndex < BiasEducationCenter.length - 1) {
        setBiasIndex(biasIndex + 1);
        setQuestionIndex(0);
      } else {
        console.log('END OF BIASES');
        //Stop time
        setStartTime(false);
        setShowResult(true);
      }
    }
  };

  const nextButtonClicked = () => {
    setShowQuestion(true);
    setStartTime(true);
  };

  return (
    <div>
      {showResult ? (
        <div>
          <Result></Result>
        </div>
      ) : (
        <div className={classes.root}>
          {showQuestion ? (
            <div>
              <Typography
                variant='h4'
                gutterBottom
                className={classes.textBias}
              >
                {BiasEducationCenter[biasIndex].questions[questionIndex].prompt}
              </Typography>
              <div className={classes.buttons}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => setSelectedAnswer('A')}
                >
                  {BiasEducationCenter[biasIndex].questions[questionIndex].A}
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => setSelectedAnswer('B')}
                >
                  {BiasEducationCenter[biasIndex].questions[questionIndex].B}
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <Typography
                variant='h2'
                gutterBottom
                className={classes.textBias}
              >
                {BiasEducationCenter[biasIndex].bias}
              </Typography>
              <Typography
                variant='h5'
                gutterBottom
                className={classes.textDesc}
              >
                {BiasEducationCenter[biasIndex].description}
              </Typography>
              <Typography
                variant='h6'
                gutterBottom
                className={classes.textWarning}
              >
                {BiasEducationCenter[biasIndex].warning}
              </Typography>
              <Typography
                variant='h6'
                gutterBottom
                className={classes.textDesc}
              >
                {BiasEducationCenter[biasIndex].instruction}
              </Typography>
              <Typography
                variant='h6'
                gutterBottom
                className={classes.textWarning}
              >
                {BiasEducationCenter[biasIndex].wrongAnswerWarning}
              </Typography>
              <div className={classes.buttons}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={nextButtonClicked}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BiasTest;
