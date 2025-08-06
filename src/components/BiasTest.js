import { useState, useEffect, useContext } from "react";
import { doc, setDoc } from "firebase/firestore";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Result from "./Result";
import { BiasEducationCenter } from "../data/BiasEducationCenter";
import Expire from "../helpers/Expire";
import { Context } from "../helpers/Context";
import { db } from "../helpers/Firebase";
/* import useEventListener from "@use-it/event-listener"; */

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    textAlign: "center",
  },
  text1: {
    textAlign: "center",
    padding: "15px",
    fontWeight: "600",
  },
  text2: {
    textAlign: "center",
    padding: "15px",
  },
  text3: {
    textAlign: "center",
    padding: "1px",
    color: "red",
    fontWeight: 600,
  },
  text4: {
    textAlign: "center",
    padding: "21px",
    fontWeight: "600",
    color: "#0065bd",
  },
  options: {
    [theme.breakpoints.up("md")]: {
      "& > *": {
        margin: theme.spacing(6, 3),
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& > *": {
        margin: theme.spacing(6, 3),
      },
    },
    spacing: 0,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  ImgUnderPaper: {
    maxWidth: "100%",
    maxHeight: "65%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "65%",
      maxHeight: "65%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "65%",
      maxHeight: "65%",
    },
  },
}));
/*  useEventListener("keydown", handleKeyPress); */
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
  const [biases, setBiases] = useState([]);

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

  const nextButtonClicked = () => {
    setShowQuestion(true);
  };

  const continueButtonClicked = () => {
    setShowQuestion(true);
    setStartTime(true);
    setSelectedAnswer("-1");
  };

  const handleKeyPress = (event) => {
    if (
      showQuestion &&
      !BiasEducationCenter[biasIndex].questions[questionIndex].isInstruction
    ) {
      if (
        event.target.textContent === "E" ||
        event.target.textContent === "e"
      ) {
        setShowWrongButton(false);
        setSelectedAnswer("A");
      } else if (
        event.target.textContent === "I" ||
        event.target.textContent === "i"
      ) {
        setShowWrongButton(false);
        setSelectedAnswer("B");
      } else {
        setShowWrongButton(true);
      }
    }
  };

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
      BiasEducationCenter[biasIndex].questions[questionIndex].part ===
        "Part 1" &&
      !BiasEducationCenter[biasIndex].questions[questionIndex].isInstruction
    ) {
      BiasEducationCenter[biasIndex].part1TimeSpent += timeSpent;
    } else if (
      BiasEducationCenter[biasIndex].questions[questionIndex].part ===
        "Part 2" &&
      !BiasEducationCenter[biasIndex].questions[questionIndex].isInstruction
    ) {
      BiasEducationCenter[biasIndex].part2TimeSpent += timeSpent;
    } else if (
      BiasEducationCenter[biasIndex].questions[questionIndex].part ===
        "Part 3" &&
      !BiasEducationCenter[biasIndex].questions[questionIndex].isInstruction
    ) {
      BiasEducationCenter[biasIndex].part3TimeSpent += timeSpent;
    } else if (
      BiasEducationCenter[biasIndex].questions[questionIndex].part ===
        "Part 4" &&
      !BiasEducationCenter[biasIndex].questions[questionIndex].isInstruction
    ) {
      BiasEducationCenter[biasIndex].part4TimeSpent += timeSpent;
    }

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
    const submissionDoc = doc(db, "submissions", submissionId);
    const biasFields = {
      biasDetails: {},
    };

    for (var i = 0; i < BiasEducationCenter.length; i++) {
      const biasData = {
        name: BiasEducationCenter[i].bias.slice(
          9,
          BiasEducationCenter[i].bias.length
        ),
        part1TimeSpent: BiasEducationCenter[i].part1TimeSpent,
        part2TimeSpent: BiasEducationCenter[i].part2TimeSpent,
        part3TimeSpent: BiasEducationCenter[i].part3TimeSpent,
        part4TimeSpent: BiasEducationCenter[i].part4TimeSpent,
      };
      biasFields.biasDetails["bias" + i] = biasData;
    }

    await setDoc(submissionDoc, biasFields, { merge: true });
  };

  function shuffle(array) {
    var start = 1;
    var end = 7;
    while (end <= array.length) {
      for (var i = end - 1; i >= start; i--) {
        var j = Math.floor(Math.random() * (i - start + 1));
        j += start;
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      start += 7;
      end += 7;
    }
    return array;
  }

  function checkBiases() {
    for (var i = 0; i < BiasEducationCenter.length; i++) {
      if (
        BiasEducationCenter[i].part3TimeSpent >
          BiasEducationCenter[i].part4TimeSpent &&
        !biases.includes(i)
      ) {
        // eslint-disable-next-line no-loop-func
        setBiases((biases) => [...biases, i]);
      }
    }
  }

  return (
    <>
      {showResult ? (
        <Result biases={biases}></Result>
      ) : (
        <div className={classes.root}>
          {showQuestion ? (
            <div tabIndex="0">
              <Typography
                variant="h4"
                gutterBottom
                style={{ backgroundColor: "#0065bd", color: "white" }}
              >
                {BiasEducationCenter[biasIndex].questions[questionIndex].part}
              </Typography>
              {BiasEducationCenter[biasIndex].questions[questionIndex]
                .isInstruction && <h1>Instructions</h1>}
              <Typography variant="h4" gutterBottom className={classes.text4}>
                <div>
                  {BiasEducationCenter[biasIndex].questions[
                    questionIndex
                  ].prompt
                    .split("\n")
                    .map((str, index) => (
                      <h6 key={str.id || index}>{str}</h6>
                    ))}
                </div>
              </Typography>
              {BiasEducationCenter[biasIndex].questions[questionIndex]
                .isInstruction && (
                <h2>
                  {
                    BiasEducationCenter[biasIndex].questions[questionIndex]
                      .instructions
                  }
                </h2>
              )}
              <Grid container className={classes.options}>
                <Grid item xs={5}>
                  Press{" "}
                  <Button
                    onClick={(e) => handleKeyPress(e)}
                    style={{
                      backgroundColor: "#0065bd",
                      color: "white",
                      margin: "12px",
                    }}
                  >
                    E
                  </Button>
                  <Typography
                    style={{
                      color: "green",
                      fontWeight: 600,
                      fontSize: "11px",
                    }}
                  >
                    {BiasEducationCenter[biasIndex].questions[questionIndex].A}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  Press{" "}
                  <Button
                    onClick={(e) => handleKeyPress(e)}
                    style={{
                      backgroundColor: "#0065bd",
                      color: "white",
                      margin: "12px",
                    }}
                  >
                    I
                  </Button>
                  <Typography
                    style={{ color: "red", fontWeight: 600, fontSize: "11px" }}
                  >
                    {BiasEducationCenter[biasIndex].questions[questionIndex].B}
                  </Typography>
                </Grid>
              </Grid>
              {BiasEducationCenter[biasIndex].questions[questionIndex]
                .isInstruction && (
                <Button
                  style={{
                    backgroundColor: "#0065bd",
                    color: "white",
                    margin: "12px",
                  }}
                  variant="contained"
                  onClick={continueButtonClicked}
                >
                  Continue
                </Button>
              )}
              {showWrongAnswer && (
                <Expire
                  delay={1000}
                  setShowWrongAnswer={setShowWrongAnswer}
                  children={
                    <Typography variant="h5" gutterBottom>
                      Wrong answer! ❌
                    </Typography>
                  }
                ></Expire>
              )}
              {showWrongButton && (
                <div>
                  <Typography variant="h5" gutterBottom>
                    You can only press E and I keys
                  </Typography>
                </div>
              )}
            </div>
          ) : (
            <div>
              <Typography
                variant="h5"
                gutterBottom
                className={classes.text1}
                style={{ backgroundColor: "#0065bd", color: "white" }}
              >
                {BiasEducationCenter[biasIndex].bias}
              </Typography>
              <Typography variant="h6" gutterBottom className={classes.text2}>
                {BiasEducationCenter[biasIndex].description}
              </Typography>
              <Typography variant="h6" gutterBottom className={classes.text3}>
                Please, make sure you understand what this bias means, you will
                be needing this moving forward.
              </Typography>
              <Typography variant="h6" gutterBottom className={classes.text2}>
                For this test you will use E and I to categorize items as fast
                as you can.
              </Typography>
              <Paper>
                <img
                  className={classes.ImgUnderPaper}
                  alt={BiasEducationCenter[biasIndex].bias}
                  src={BiasEducationCenter[biasIndex].categoriesAndItems}
                />
              </Paper>
              <Button
                style={{
                  backgroundColor: "#0065bd",
                  color: "white",
                  margin: "12px",
                }}
                variant="contained"
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
