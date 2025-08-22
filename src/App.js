import { useState } from "react";
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
import RouteChangeListener from "./helpers/RouteChangeListener";

function App() {
  const [submissionId, setSubmissionId] = useState("");
  const [detailsButton, setDetailsButton] = useState(true);

  return (
    <Context.Provider
      value={{ detailsButton, setDetailsButton, submissionId, setSubmissionId }}
    >
      <HashRouter>
        <Box className="UnderHashRouter">
          <RouteChangeListener />
          <CssBaseline />
          <Box>
            <Navbar></Navbar>
          </Box>
          <Box className="AppMain">
            <Box className="App">
              <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                <Route exact path="study-info" element={<StudyInfo />}></Route>
                <Route
                  exact
                  path="/demographics"
                  element={<Demographics />}
                ></Route>
                <Route
                  exact
                  path="/test"
                  element={detailsButton ? <Demographics /> : <BiasTest />}
                ></Route>
                <Route exact path="/imprint" element={<Imprint />}></Route>
                <Route exact path="/privacy" element={<Privacy />}></Route>
                <Route exact path="/contact-us" element={<ContactUs />}></Route>
              </Routes>
            </Box>
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </HashRouter>
    </Context.Provider>
  );
}

export default App;
