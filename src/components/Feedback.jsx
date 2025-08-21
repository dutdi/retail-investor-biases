import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  Typography,
} from "@material-ui/core";
import { feedbackAccuracies } from "../helpers/lists/FeedbackAccuracyList";
import { feedbackRecommendations } from "../helpers/lists/FeedbackRecommendationList";
import { Context } from "../helpers/Context";
import { db } from "../helpers/Firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    height: "700px",
    margin: "30px",
    backgroundColor: "white",
    textAlign: "center",
  },
  text1: {
    backgroundColor: "#0065bd",
    color: "white",
    fontSize: "25px",
    [theme.breakpoints.up("md")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "40px",
    },
  },
  text2: {
    fontWeight: "600",
    fontSize: "0.75rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.25rem",
    },
  },
  select: { width: "100%" },
  formControl: {
    margin: theme.spacing(3),
    width: "50%",
  },
}));

const Feedback = () => {
  const classes = useStyles();
  const { submissionId, setSubmissionId } = useContext(Context);
  const [feedback, setFeedback] = useState({
    feedbackAccuracy: "",
    feedbackRecommendation: "",
  });
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    const checkAllEntered = () => {
      if (
        feedback.feedbackAccuracy === "" ||
        feedback.feedbackRecommendation === ""
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

  const sendFeedback = async () => {
    await saveToDB();
    setFeedback({
      feedbackAccuracy: "",
      feedbackRecommendation: "",
    });
    setSubmissionId("");
  };

  const saveToDB = async () => {
    const submissionDoc = doc(db, "submissions", submissionId);
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
      <Typography gutterBottom className={classes.text1}>
        Give us a feedback
      </Typography>
      <Box pt={8}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item>
            <Typography variant="h6" gutterBottom className={classes.text2}>
              On a scale of 1-10 how accurate do you think your result was?
            </Typography>
          </Grid>
          <Grid item>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="feedbackAccuracy">Accuracy</InputLabel>
              <Select
                className={classes.select}
                native
                value={feedback.feedbackAccuracy}
                onChange={handleChange}
                inputProps={{
                  name: "feedbackAccuracy",
                  id: "feedbackAccuracy",
                }}
              >
                <option aria-label="None" value="" />
                {feedbackAccuracies.map((feedbackAccuracy) => (
                  <option value={feedbackAccuracy}>{feedbackAccuracy}</option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Typography variant="h6" gutterBottom className={classes.text2}>
              How likely are you to recommend this tool to someone else?
            </Typography>
          </Grid>
          <Grid item>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="feedbackRecommendation">
                Recommendation
              </InputLabel>
              <Select
                className={classes.select}
                native
                value={feedback.feedbackRecommendation}
                onChange={handleChange}
                inputProps={{
                  name: "feedbackRecommendation",
                  id: "feedbackRecommendation",
                }}
              >
                <option aria-label="None" value="" />
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
        <Typography
          variant="h6"
          gutterBottom
          style={{ color: "red" }}
          className={classes.text2}
        >
          Enter all the fields*
        </Typography>
      ) : (
        <Button
          style={{ backgroundColor: "#0065bd", color: "white" }}
          component={Link}
          to="/"
          variant="contained"
          onClick={sendFeedback}
        >
          Send
        </Button>
      )}
      <Box pt={18}>
        <Typography
          variant="h5"
          gutterBottom
          style={{ backgroundColor: "#0065bd", color: "white" }}
        >
          Thank you!
        </Typography>
      </Box>
    </div>
  );
};

export default Feedback;
