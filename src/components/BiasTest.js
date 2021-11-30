import React, { useState, useContext } from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BiasEducationCenter } from '../helpers/BiasEducationCenter';
import { BiasContext } from '../helpers/Context';

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

  const setSelectedAnswer = (answer) => {
    BiasEducationCenter[biasIndex].questions[questionIndex].userSelection =
      answer;
    setQuestionIndex(questionIndex + 1);
    if (questionIndex === BiasEducationCenter[biasIndex].questions.length - 1) {
      if (biasIndex === BiasEducationCenter.length - 1) {
      } else {
        setBiasIndex(biasIndex + 1);
        setQuestionIndex(0);
      }
    }
    console.log(biasIndex);
  };

  return (
    <div className={classes.root}>
      {showQuestion ? (
        <div>
          <Typography variant='h4' gutterBottom className={classes.textBias}>
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
          <Typography variant='h2' gutterBottom className={classes.textBias}>
            {BiasEducationCenter[biasIndex].bias}
          </Typography>
          <Typography variant='h5' gutterBottom className={classes.textDesc}>
            {BiasEducationCenter[biasIndex].description}
          </Typography>
          <Typography variant='h6' gutterBottom className={classes.textWarning}>
            {BiasEducationCenter[biasIndex].warning}
          </Typography>
          <Typography variant='h6' gutterBottom className={classes.textDesc}>
            {BiasEducationCenter[biasIndex].instruction}
          </Typography>
          <Typography variant='h6' gutterBottom className={classes.textWarning}>
            {BiasEducationCenter[biasIndex].wrongAnswerWarning}
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant='contained'
              color='primary'
              onClick={() => setShowQuestion(true)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BiasTest;
