import React, { useState } from 'react';
import { BiasContext } from './helpers/Context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@material-ui/core';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';
import ContactUs from './components/ContactUs';
import Landing from './components/Landing';
import BiasTest from './components/BiasTest';
import Demographics from './components/Demographics';
import './App.css';
import Feedback from './components/Feedback';
import StudyInfo from './components/StudyInfo';
import Footer from './components/Footer';
import Imprint from './components/Imprint';

function App() {
  const [biasIndex, setBiasIndex] = useState(0);

  return (
    <Router>
      <CssBaseline />
      <Navbar></Navbar>
      <Box className='App'>
        <BiasContext.Provider value={{ biasIndex, setBiasIndex }}>
          <Routes>
            <Route exact path='/' element={<Landing></Landing>}></Route>
            <Route
              exact
              path='study-info'
              element={<StudyInfo></StudyInfo>}
            ></Route>
            <Route
              exact
              path='/demographics'
              element={<Demographics></Demographics>}
            ></Route>
            <Route exact path='/test' element={<BiasTest></BiasTest>}></Route>
            <Route exact path='/imprint' element={<Imprint></Imprint>}></Route>
            <Route exact path='/privacy' element={<Privacy></Privacy>}></Route>
            <Route
              exact
              path='/contact-us'
              element={<ContactUs></ContactUs>}
            ></Route>
            <Route
              exact
              path='/feedback'
              element={<Feedback></Feedback>}
            ></Route>
          </Routes>
        </BiasContext.Provider>
      </Box>
      <Footer></Footer>
    </Router>
  );
}

export default App;
