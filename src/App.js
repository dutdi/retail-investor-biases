import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@material-ui/core";
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
/* import ProtectedRoutes from "./utils/ProtectedRoutes"; */
import MyContext from "./react_context/MyContext";

function App() {
  const [submissionId, setSubmissionId] = useState("");
  const [detailsButton, setDetailsButton] = useState(false);
  return (
    <MyContext.Provider value={{ detailsButton, setDetailsButton }}>
      <HashRouter>
        <Box className="UnderHashRouter">
          <CssBaseline />
          <Box>
            <Navbar></Navbar>
          </Box>
          <Box className="AppMain">
            <Context.Provider value={{ submissionId, setSubmissionId }}>
              <Box className="App">
                <Routes>
                  <Route exact path="/" element={<Landing />}></Route>
                  <Route
                    exact
                    path="study-info"
                    element={<StudyInfo />}
                  ></Route>
                  <Route
                    exact
                    path="/demographics"
                    element={<Demographics />}
                  ></Route>
                  {/* <Route element={<ProtectedRoutes />}> */}
                  <Route exact path="/test" element={<BiasTest />}></Route>
                  {/* </Route> */}
                  <Route exact path="/imprint" element={<Imprint />}></Route>
                  <Route exact path="/privacy" element={<Privacy />}></Route>
                  <Route
                    exact
                    path="/contact-us"
                    element={<ContactUs />}
                  ></Route>
                </Routes>
              </Box>
            </Context.Provider>
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </HashRouter>
    </MyContext.Provider>
  );
}

export default App;
