import React from "react";
// import "../assets/Styles/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Ficon from '../assets/Images/fbicon.png';
import Yicon from '../assets/Images/youtubeicon.png';
import Ticon from '../assets/Images/tgicon.png';

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h2 className="text-white mb-lg-0 text-xl font-bold mb-2">THE LORD'S BRETHREN CONVOCATION'24</h2>
              </div>
              <div className="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
                <ul className="social-icon d-flex justify-content-lg-start">
                  <li className="social-icon-item">
                    <a
                      href="https://web.facebook.com/thelordsbrethrenchurchintl"
                      className="social-icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                       <img src={Ficon} alt="Facebook" className="h-10 w-10" />
                    </a>
                  </li>
                  <li className="social-icon-item">
                    <a
                      href="https://youtube.com/channel/UCcdBHIYqSBIktXvHimyPkaw"
                      className="social-icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Yicon} alt="YouTube" className="h-10 w-10" />
                    </a>
                  </li>
                  <li className="social-icon-item mt-">
                    <a
                      href="https://t.me/TheLordsbrethrenchurchintl"
                      className="social-icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Ticon} alt="Telegram" className="h-9 w-9 mt-2" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-4 pb-2">
              {/* <h5 className="site-footer-title mb-3">Links</h5> */}
              <ul className="site-footer-links">
                <li className="site-footer-link-item">
                  <a href="#section_1" className="site-footer-link hover:text-yellow-700">
                    Home
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#section_2" className="site-footer-link hover:text-yellow-700">
                    About
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#section_3" className="site-footer-link hover:text-yellow-700">
                    What to expect
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#section_6" className="site-footer-link hover:text-yellow-700">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <h5 className="site-footer-title mb-3">Have a question?</h5>
              <p className="text-white d-flex mb-1">
                <a href="tel:091-3444-5037" className="site-footer-link hover:text-yellow-700">
                +2349134445037
                </a>
              </p>
              <p className="text-white d-flex">
                <a
                  href="mailto:info@thelordsbrethrenchurch.org"
                  className="site-footer-link hover:text-yellow-700"
                >
                  info@thelordsbrethrenchurch.org
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-0">
              <h5 className="site-footer-title mb-3">Location</h5>
              <p className="text-white d-flex mt-3 mb-2">
              Kingdom City Prayer Camp, Awka, Anambra State, Nigeria.
              </p>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <div className="container">
            <p className="text-center text-white pt-4">
              Copyright © 2024 || TLBC'24 Planning Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
