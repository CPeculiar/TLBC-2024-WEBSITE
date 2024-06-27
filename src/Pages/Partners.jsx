import React from "react";
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import PartnershipForm from "../Components/PartnershipForm";
// import '../assets/Styles/templatemo-festava-live.css';





function Partners() {
  return (
    <div>
      <Navbar />

      {/* <section className="hero-section" id="section_1">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="">
            <div className="col-12 mt-4 mb-5 text-center">
              <h2 className="text-white mb-1" id="annual">
                Register Now!!!
              </h2>
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur saepe quam recusandae totam delectus neque quia
                quasi maiores, sed quibusdam suscipit qui aut magni obcaecati
                sint fuga minus a ea?
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <PartnershipForm />







      <Footer />
    </div>
  );
}

export default Partners;
