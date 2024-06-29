import React from "react";
import Dateicon from '../assets/Images/dateicon.svg';
import Locationicon from '../assets/Images/locationicon.svg';
import Shareicon from '../assets/Images/shareicon.svg';

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" id="section_1">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <small 
            className="font-extrabold text-lg sm:text-xl block mb-4"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
              letterSpacing: '1px'
            }}
          >
            The Lord&apos;s Brethren Church International Presents
          </small>
          <h2
            className="text-yellow mb-3 text-4xl sm:text-5xl lg:text-6xl font-black"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              letterSpacing: '2px',
              color: 'yellow'
            }}
          >
            The Lord&apos;s Brethren Convocation 2024
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8 sm:mt-12">
          <div className="flex items-center">
            <img src={Dateicon} alt="Date" className="bg-white h-6 w-6 rounded-full mr-2" />
            <h5 className="text-white text-lg sm:text-xl">
              31st Aug - 4th Sept, 2024
            </h5>
          </div> 
          <div className="flex items-center">
            <img src={Locationicon} alt="Location" className="bg-white h-6 w-6 rounded-full mr-2" />
            <h5 className="text-white text-lg sm:text-xl">
              Kingdom City Prayer Camp, Awka, Anambra State, Nigeria.
            </h5>
          </div>
          <div className="flex items-center">
            <span className="text-white mr-3 text-lg sm:text-xl">Share:</span>
            <a
              href="https://web.facebook.com/thelordsbrethrenchurchintl"
              className="flex items-center"
            >
              <img src={Shareicon} alt="Share" className="bg-white h-6 w-6 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;