import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/Styles/bootstrap.min.css'; 
// import '../assets/Styles/bootstrap-icons.css';
// import '../assets/Styles/templatemo-festava-live.css';
// import '../assets/Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          TLBC'24
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
            <li className="nav-item">
              <Link to="/home" className="nav-link click-scroll">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link click-scroll">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link click-scroll">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/partners" className="nav-link click-scroll">Partner with us</Link>
            </li>   
            <li className="nav-item hidden">
              <Link to="/paystatus" className="nav-link click-scroll">PayStatus</Link>
            </li>          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
