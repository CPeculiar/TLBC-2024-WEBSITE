import React from "react";
import Dateicon from '../assets/Images/calendar1.svg';
import Locationicon from '../assets/Images/location2.svg';

// import Shareicon from '../assets/Images/shareicon.svg';

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

        <div className="flex flex-col space-y-4 mt-6 sm:mt-8 lg:mt-12">
          <div className="flex items-center justify-center">
            <div className="p-1 sm:p-2 rounded-full mr-2 sm:mr-4">
              <img src={Dateicon} alt="Date" className="bg-white h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </div>
            <h5 className="text-white font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">
              31st August - 4th September, 2024.
            </h5>
          </div> 
          <div className="flex items-center justify-center">
            <div className="p-1 sm:p-2 rounded-full mr-0 sm:mr-1">
              <img src={Locationicon} alt="Location" className="bg-white h-4 w-4 sm:h-5 sm:w-5 lg:mr-[9px] lg:h-6 lg:w-6" />
            </div>
            <h5 className="text-white text-sm font-semibold sm:text-base lg:text-lg xl:text-xl">
              Kingdom City Prayer Camp, Awka, Anambra State, Nigeria.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;