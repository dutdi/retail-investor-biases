import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@material-ui/core';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';
import ContactUs from './components/ContactUs';
import Landing from './components/Landing';
import BiasTest from './components/BiasTest';
import Demographics from './components/Demographics';
import StudyInfo from './components/StudyInfo';
import Footer from './components/Footer';
import Imprint from './components/Imprint';
import { Context } from './helpers/Context';
import './App.css';

function App() {
  const [submissionId, setSubmissionId] = useState('');
  return (
    <HashRouter>
      <CssBaseline />
      <Navbar></Navbar>
      <Context.Provider value={{ submissionId, setSubmissionId }}>
        <Box className='App'>
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
          </Routes>
        </Box>
      </Context.Provider>
      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
