import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home'; // Create Home.js for home page content
import Gallery from './Pages/Gallery'; // Create Gallery.js for gallery content
import Register from './Pages/Register'; // Create Register.js for register content
import Partners from './Pages/Partners'; // Create Partners.js for partners content
import PayStatus from './Pages/PayStatus';
import Redirect from './Pages/Redirect';
import ScrollToTop from './Components/ScrollToTop';
import './index.css';
// import './assets/Styles/bootstrap.min.css';
// import './assets/Styles/bootstrap-icons.css'; 
// import './assets/Styles/templatemo-festava-live.css'

const App = () => {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
               
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/register" element={<Register />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/paystatus" element={<PayStatus />} />
          <Route path="/redirect" element={<Redirect />} />


      </Routes>
    </Router>

    </>
  
);
};

export default App;
