import React from "react";
// import '../assets/Styles/bootstrap.min.css'
// import '../assets/Styles/bootstrap-icons.css'
// import "../assets/Styles/templatemo-festava-live.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="section_1">
      {/* <div className="section-overlay"></div> */}
      <div className="flex justify-center items-center h-screen">
        <div className="text-center row">
          <div className="mt-auto mb-5">
            <small 
           className="font-extrabold text-xl block mb-2"
              style={{
                color: '#FFFFFF', 
                textShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
                letterSpacing: '1px'
              }}
              >
              The Lord's Brethren Church International Presents
            </small>
            <h2
               className="text-white mb-3 text-6xl font-black"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                letterSpacing: '2px',
                color: 'white'
              }}
            >
              The Lord's Brethren Convocation '24
            </h2>
            {/* <a
              className="btn custom-btn smoothscroll py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md"
              href="#section_2"
            >
              About TLBC'24
            </a> */}
          </div>

          <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
            <div className="date-wrap">
              <h5 className="text-white">
                <i className="custom-icon bi-clock me-2"></i>
                31st Aug - 4th Sept<sup></sup>, 2024
              </h5>
            </div>
            <div className="location-wrap mx-auto py-3 py-lg-0">
              <h5 className="text-white">
                <i className="custom-icon bi-geo-alt me-2"></i>
                To be announced soon
              </h5>
            </div>
            <div className="social-share">
              <ul className="social-icon d-flex align-items-center justify-content-center">
                <span className="text-white me-3">Share:</span>
                <li className="social-icon-item">
                  <a
                    href="https://web.facebook.com/thelordsbrethrenchurchintl"
                    className="social-icon-link"
                  >
                    <span className="bi-facebook"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="video-wrap"></div>
    </section>
  );
};

export default HeroSection;
