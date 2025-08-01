import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import {
  Box,
  Tooltip, //For make hover
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
} from "@material-ui/core";
import { genders } from "../helpers/lists/GenderList";
import { countries } from "../helpers/lists/CountryList";
import { educations } from "../helpers/lists/EducationList";
import { ages } from "../helpers/lists/AgeList";
import { professions } from "../helpers/lists/ProfessionList";
import { investingDates } from "../helpers/lists/InvestingDateList";
import { totalInvestments } from "../helpers/lists/TotalInvestmentList";
import { ibts } from "../helpers/lists/IBTList";
import { Context } from "../helpers/Context";
import { db } from "../helpers/Firebase";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2, 0, 0, 0),
    },
    width: "70%",
    /* height: "700px", */
    margin: "30px",
    backgroundColor: "white",
    textAlign: "center",
  },
  formControl: {
    width: 400,
    textOverflow: "ellipsis",
    maxWidth: "100%",
  },
  labelEllipsis: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
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
  const { setSubmissionId } = useContext(Context);
  const [details, setDetails] = useState({
    age: "",
    gender: [],
    citizenship: "",
    residence: "",
    education: "",
    profession: [],
    investingDate: "",
    totalInvestments: "",
    ibts: "",
  });
  const [hasError, setHasError] = useState(true);
  const submissionsCollectionRef = collection(db, "submissions");

  useEffect(() => {
    const checkAllEntered = () => {
      if (
        details.age === "" ||
        details.gender.length === 0 ||
        details.citizenship === "" ||
        details.residence === "" ||
        details.education === "" ||
        details.profession.length === 0 ||
        details.investingDate === "" ||
        details.totalInvestments === "" ||
        details.ibts === ""
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
    setDetails({
      ...details,
      [name]: event.target.value,
    });
  };

  const submitForm = async () => {
    const userFields = {
      userDetails: {
        age: details.age,
        gender: details.gender,
        citizenship: details.citizenship,
        residence: details.residence,
        education: details.education,
        profession: details.profession,
        investingDate: details.investingDate,
        totalInvestments: details.totalInvestments,
        IBTsPerformedPreviously: details.ibts,
      },
    };
    const newSubmission = await addDoc(submissionsCollectionRef, userFields);
    setSubmissionId(newSubmission.id);
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        gutterBottom
        style={{
          backgroundColor: "#0065bd",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Enter your details
      </Typography>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="age">Age</InputLabel>
              <Select
                native
                value={details.age}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "age",
                }}
              >
                <option aria-label="None" value="" />
                {ages.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="gender">
                Current Gender Identity (check all that apply)
              </InputLabel>
              <Select
                labelId="gender"
                id="gender-id"
                multiple
                value={details.gender}
                onChange={handleChange}
                inputProps={{
                  name: "gender",
                  id: "gender",
                }}
                renderValue={(selected) => selected.join(", ")}
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
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="citizenship">
                What's your country/region of primary citizenship?
              </InputLabel>
              <Select
                native
                value={details.citizenship}
                onChange={handleChange}
                inputProps={{
                  name: "citizenship",
                  id: "citizenship",
                }}
              >
                <option aria-label="None" value="" />
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="residence">
                What is your country/region of residence?
              </InputLabel>
              <Select
                native
                value={details.residence}
                onChange={handleChange}
                inputProps={{
                  name: "residence",
                  id: "residence",
                }}
              >
                <option aria-label="None" value="" />
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="education">
                Highest level of education that you have completed
              </InputLabel>
              <Select
                native
                value={details.education}
                onChange={handleChange}
                inputProps={{
                  name: "education",
                  id: "education",
                }}
              >
                <option aria-label="None" value="" />
                {educations.map((education) => (
                  <option key={education} value={education}>
                    {education}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="profession">
                Profession (check all that apply)
              </InputLabel>
              <Select
                labelId="profession"
                id="profession-id"
                multiple
                value={details.profession}
                onChange={handleChange}
                inputProps={{
                  name: "profession",
                  id: "profession",
                }}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {professions.map((profession) => (
                  <MenuItem key={profession} value={profession}>
                    <Checkbox
                      checked={details.profession.indexOf(profession) > -1}
                    />
                    <ListItemText primary={profession} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="investingDate">
                When did you start investing?
              </InputLabel>
              <Select
                native
                value={details.investingDate}
                onChange={handleChange}
                inputProps={{
                  name: "investingDate",
                  id: "investingDate",
                }}
              >
                <option aria-label="None" value="" />
                {investingDates.map((investingDate) => (
                  <option key={investingDate} value={investingDate}>
                    {investingDate}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="totalInvestments">
                Total current investments
              </InputLabel>
              <Select
                native
                value={details.totalInvestments}
                onChange={handleChange}
                inputProps={{
                  name: "totalInvestments",
                  id: "totalInvestments",
                }}
              >
                <option aria-label="None" value="" />
                {totalInvestments.map((totalInvestment) => (
                  <option key={totalInvestment} value={totalInvestment}>
                    {totalInvestment}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <FormControl required className={classes.formControl}>
              <Tooltip title="Total Investor Bias Tests previously performed on our platform">
                <InputLabel htmlFor="ibts" className={classes.labelEllipsis}>
                  Total Investor Bias Tests previously performed on our platform
                </InputLabel>
              </Tooltip>
              <Select
                native
                value={details.ibts}
                onChange={handleChange}
                inputProps={{
                  name: "ibts",
                  id: "ibts",
                }}
              >
                <option aria-label="None" value="" />
                {ibts.map((ibt) => (
                  <option key={ibt} value={ibt}>
                    {ibt}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {hasError ? (
          <Typography variant="h6" gutterBottom style={{ color: "red" }}>
            Enter all the fields*
          </Typography>
        ) : (
          <Button
            style={{ backgroundColor: "#0065bd", color: "white" }}
            component={Link}
            to="/test"
            variant="contained"
            onClick={submitForm}
          >
            Next
          </Button>
        )}
      </Box>
    </div>
  );
};

export default Demographics;
