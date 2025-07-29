import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Box, CssBaseline, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Privacy from "./components/Privacy";
import ContactUs from "./components/ContactUs";
import Landing from "./components/Landing";
import BiasTest from "./components/BiasTest";
import Demographics from "./components/Demographics";
import StudyInfo from "./components/StudyInfo";
import Footer from "./components/Footer";
import Imprint from "./components/Imprint";
import { Context } from "./helpers/Context";
import "./App.css";

const useStyles = makeStyles(() => ({
  underHashRouter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
  },
}));
function App() {
  const [submissionId, setSubmissionId] = useState("");
  const classes = useStyles();
  return (
    <HashRouter>
      <Box className={classes.underHashRouter}>
        <Box>
          <Navbar></Navbar>
          <CssBaseline />
          <Context.Provider value={{ submissionId, setSubmissionId }}>
            <Box className="App">
              <Routes>
                <Route exact path="/" element={<Landing></Landing>}></Route>
                <Route
                  exact
                  path="study-info"
                  element={<StudyInfo></StudyInfo>}
                ></Route>
                <Route
                  exact
                  path="/demographics"
                  element={<Demographics></Demographics>}
                ></Route>
                <Route
                  exact
                  path="/test"
                  element={<BiasTest></BiasTest>}
                ></Route>
                <Route
                  exact
                  path="/imprint"
                  element={<Imprint></Imprint>}
                ></Route>
                <Route
                  exact
                  path="/privacy"
                  element={<Privacy></Privacy>}
                ></Route>
                <Route
                  exact
                  path="/contact-us"
                  element={<ContactUs></ContactUs>}
                ></Route>
              </Routes>
            </Box>
          </Context.Provider>
        </Box>
        <Footer></Footer>
      </Box>
    </HashRouter>
  );
}

export default App;
