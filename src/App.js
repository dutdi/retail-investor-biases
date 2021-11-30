import React, { useState } from 'react';
import { BiasContext } from './helpers/Context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@material-ui/core';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Landing from './components/Landing';
import BiasTest from './components/BiasTest';
import './App.css';

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
            <Route exact path='/test' element={<BiasTest></BiasTest>}></Route>
            <Route exact path='/about-us' element={<AboutUs></AboutUs>}></Route>
            <Route
              exact
              path='/contact-us'
              element={<ContactUs></ContactUs>}
            ></Route>
          </Routes>
        </BiasContext.Provider>
      </Box>
    </Router>
  );
}

export default App;
