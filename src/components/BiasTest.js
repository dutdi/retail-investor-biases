import React, { useState, useEffect, useContext } from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BiasEducationCenter } from '../data/BiasEducationCenter';
import Result from './Result';
import Expire from '../helpers/Expire';
import useEventListener from '@use-it/event-listener';
import { Context } from '../helpers/Context';
import { db } from '../helpers/Firebase';
import { doc, setDoc } from 'firebase/firestore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1200px',
    height: '750px',
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

const biases = [];

const BiasTest = () => {
  const classes = useStyles();
  const { submissionId } = useContext(Context);
  const [biasIndex, setBiasIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  const [showWrongButton, setShowWrongButton] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(false);

  useEffect(() => {
    for (let i = 0; i < BiasEducationCenter.length; i++) {
      shuffle(BiasEducationCenter[i].questions);
    }
  }, []);

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
    const timeSpent = time;
    //Check if chose correct answer
    if (
      BiasEducationCenter[biasIndex].questions[questionIndex].answer === answer
    ) {
      setShowWrongAnswer(false);
    } else {
      setShowWrongAnswer(true);
    }

    //Add time to the correct part
    if (
      BiasEducationCenter[biasIndex].questions[questionIndex].part === 'Part 1'
    ) {
      BiasEducationCenter[biasIndex].part1TimeSpent += timeSpent;
    } else if (
      BiasEducationCenter[biasIndex].questions[questionIndex].part === 'Part 2'
    ) {
      BiasEducationCenter[biasIndex].part2TimeSpent += timeSpent;
    } else if (
      BiasEducationCenter[biasIndex].questions[questionIndex].part === 'Part 3'
    ) {
      BiasEducationCenter[biasIndex].part3TimeSpent += timeSpent;
    } else if (
      BiasEducationCenter[biasIndex].questions[questionIndex].part === 'Part 4'
    ) {
      BiasEducationCenter[biasIndex].part4TimeSpent += timeSpent;
    }

    BiasEducationCenter[biasIndex].questions[questionIndex].timeSpent =
      timeSpent;
    BiasEducationCenter[biasIndex].questions[questionIndex].userSelection =
      answer;

    //Increment bias index and question index
    if (questionIndex < BiasEducationCenter[biasIndex].questions.length - 1) {
      setTime(0);
      setQuestionIndex(questionIndex + 1);
    } else {
      if (biasIndex < BiasEducationCenter.length - 1) {
        setStartTime(false);
        setShowQuestion(false);
        setQuestionIndex(0);
        setBiasIndex(biasIndex + 1);
      } else {
        saveToDB();
        setStartTime(false);
        checkBiases();
        setBiasIndex(0);
        setQuestionIndex(0);
        setShowResult(true);
      }
    }
  };

  const saveToDB = async () => {
    const submissionDoc = doc(db, 'submissions', submissionId);
    const biasFields = {
      biases: {
        bias0: {
          name: BiasEducationCenter[0].bias,
          part1TimeSpent: BiasEducationCenter[0].part1TimeSpent,
          part2TimeSpent: BiasEducationCenter[0].part2TimeSpent,
          part3TimeSpent: BiasEducationCenter[0].part3TimeSpent,
          part4TimeSpent: BiasEducationCenter[0].part4TimeSpent,
        },
        bias1: {
          name: BiasEducationCenter[1].bias,
          part1TimeSpent: BiasEducationCenter[1].part1TimeSpent,
          part2TimeSpent: BiasEducationCenter[1].part2TimeSpent,
          part3TimeSpent: BiasEducationCenter[1].part3TimeSpent,
          part4TimeSpent: BiasEducationCenter[1].part4TimeSpent,
        },
        bias2: {
          name: BiasEducationCenter[2].bias,
          part1TimeSpent: BiasEducationCenter[2].part1TimeSpent,
          part2TimeSpent: BiasEducationCenter[2].part2TimeSpent,
          part3TimeSpent: BiasEducationCenter[2].part3TimeSpent,
          part4TimeSpent: BiasEducationCenter[2].part4TimeSpent,
        },
        bias3: {
          name: BiasEducationCenter[3].bias,
          part1TimeSpent: BiasEducationCenter[3].part1TimeSpent,
          part2TimeSpent: BiasEducationCenter[3].part2TimeSpent,
          part3TimeSpent: BiasEducationCenter[3].part3TimeSpent,
          part4TimeSpent: BiasEducationCenter[3].part4TimeSpent,
        },
        bias4: {
          name: BiasEducationCenter[4].bias,
          part1TimeSpent: BiasEducationCenter[4].part1TimeSpent,
          part2TimeSpent: BiasEducationCenter[4].part2TimeSpent,
          part3TimeSpent: BiasEducationCenter[4].part3TimeSpent,
          part4TimeSpent: BiasEducationCenter[4].part4TimeSpent,
        },
        bias5: {
          name: BiasEducationCenter[5].bias,
          part1TimeSpent: BiasEducationCenter[5].part1TimeSpent,
          part2TimeSpent: BiasEducationCenter[5].part2TimeSpent,
          part3TimeSpent: BiasEducationCenter[5].part3TimeSpent,
          part4TimeSpent: BiasEducationCenter[5].part4TimeSpent,
        },
      },
    };

    await setDoc(submissionDoc, biasFields, { merge: true });
  };

  const nextButtonClicked = () => {
    setShowQuestion(true);
    setStartTime(true);
  };

  const handleKeyPress = (event) => {
    if (showQuestion) {
      if (event.key === 'E' || event.key === 'e') {
        setShowWrongButton(false);
        setSelectedAnswer('A');
      } else if (event.key === 'I' || event.key === 'i') {
        setShowWrongButton(false);
        setSelectedAnswer('B');
      } else {
        setShowWrongButton(true);
      }
    }
  };

  function shuffle(array) {
    var start = 0;
    var end = 6;
    while (end <= array.length) {
      for (var i = end - 1; i >= start; i--) {
        var j = Math.floor(Math.random() * (i - start + 1));
        j += start;
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      start += 6;
      end += 6;
    }
    return array;
  }

  function checkBiases() {
    var index = 0;
    while (index < BiasEducationCenter.length) {
      if (
        BiasEducationCenter[index].part3TimeSpent >
        BiasEducationCenter[index].part4TimeSpent
      ) {
        biases.push(index);
      }
      index++;
    }
  }

  useEventListener('keydown', handleKeyPress);

  return (
    <>
      {showResult ? (
        <Result biases={biases}></Result>
      ) : (
        <div className={classes.root}>
          {showQuestion ? (
            <div tabIndex='0'>
              <Typography
                variant='h4'
                gutterBottom
                style={{ backgroundColor: '#0065bd', color: 'white' }}
              >
                {BiasEducationCenter[biasIndex].questions[questionIndex].part}
              </Typography>
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
              {showWrongAnswer && (
                <div>
                  <Expire delay='1000'>
                    <Typography variant='h5' gutterBottom>
                      Wrong answer! ❌
                    </Typography>
                  </Expire>
                </div>
              )}
              {showWrongButton && (
                <div>
                  <Typography variant='h5' gutterBottom>
                    You can only press E and I keys
                  </Typography>
                </div>
              )}
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
                Please, make sure you understand what this bias means, you will
                be needing this moving forward.
              </Typography>
              <Typography variant='h6' gutterBottom className={classes.text2}>
                For this test you will use E and I to categorize items as fast
                as you can.
              </Typography>
              <Paper>
                <img
                  style={{ maxWidth: '65%', maxHeight: '65%' }}
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
