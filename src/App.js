import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@material-ui/core';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Landing from './components/Landing';
import BiasEducation from './components/BiasEducation';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar></Navbar>
      <Box className='App'>
        <Routes>
          <Route exact path='/' element={<Landing></Landing>}></Route>
          <Route
            exact
            path='/test'
            element={<BiasEducation></BiasEducation>}
          ></Route>
          <Route exact path='/about-us' element={<AboutUs></AboutUs>}></Route>
          <Route
            exact
            path='/contact-us'
            element={<ContactUs></ContactUs>}
          ></Route>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
