// AboutSection.js

import React from "react";
import ContactSection from "./ContactSection";
import "../assets/Styles/bootstrap.min.css";
import "../assets/Styles/bootstrap-icons.css";
import "../assets/Styles/templatemo-festava-live.css";
import Theword from './images/Theword.jpg'
import PraiseSession from './images/PraiseSession.jpg'
import FamilyExperience from './images/FamilyExperience.jpg'


const AboutSection = () => {
  return (
    <>
 <section className="about-section section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info">
              <h2
                className="mb-4 text-center"
                style={{
                  color: '#FFD700', // Gold color
                  fontSize: '3rem',
                }}
              >
                About TLBC'24
              </h2>
              <p className="text-white" style={{ fontSize: '1.25rem', textAlign: 'justify' }}>
                The Lord's Brethren Convocation (TLBC) is an annual glorious homecoming of stakeholders in The Lord's Brethren Nation where we celebrate our partners, victories, joys, successes, conquests, coups, and feats. It is an event that everyone who joined forces with our vision to push for the propagation of the Gospel always anticipates with joy and excitement every year.
              </p>
              <p className="text-white" style={{ fontSize: '1.25rem', textAlign: 'justify' }}>
                It's a meeting that affords us the opportunity to celebrate our pastors, partners, and ministry departments in grand style and also highlights all that has been achieved in the work of the ministry every year.
              </p>
              <p className="text-white" style={{ fontSize: '1.25rem', textAlign: 'justify' }}>
                This year's convocation is going to be a meeting of worship, teachings, impartation, awards, and of course, The Lord's Brethren Family meeting.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-text-wrap">
              <img
                src="images/brethren-4-1024x683.jpg"
                className="about-image img-fluid"
                alt="Brethren"
              />
              <div className="about-text-info d-flex mt-3">
                <div className="ms-4">
                  <h4>Our Annual Homecoming</h4>
                  <p className="mb-0">An amazing experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      
      <section className="artists-section section-padding" id="section_3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2 
              className="mb-4 text-center"
                style={{
                  color: 'black', // Gold color
                  fontSize: '3.2rem',
                }}
              >What to expect</h2>
            </div>
            <div className="col-lg-5 col-12">
              <div className="artists-thumb">
                <div className="artists-image-wrap">
                  <img
                    src={Theword}
                    className="artists-image img-fluid"
                    alt="Testimonies"
                  />
                </div>
                <div className="artists-hover">
                  <p>
                    <strong>The Word</strong>
                  </p>
                </div>
              </div>
              <div className="artists-thumb">
                <div className="artists-image-wrap">
                  <img
                    src={PraiseSession}
                    className="artists-image img-fluid"
                    alt="Dance"
                  />
                </div>
                <div className="artists-hover">
                  <p>
                    <strong>Praise Moments</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="artists-thumb">
                <div className="artists-image-wrap">
                  <img
                    src="images/worship.jpg"
                    className="artists-image img-fluid"
                    alt="Worship"
                  />
                </div>
                <div className="artists-hover">
                  <p>
                    <strong>Worship Experience</strong>
                  </p>
                </div>
              </div>
              <div className="artists-thumb">
                <img
                  src={FamilyExperience}
                  className="artists-image img-fluid"
                  alt="Prayers"
                />
                <div className="artists-hover">
                  <p>
                    <strong>FamilyExperience</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      
   
    </>
  );
};

export default AboutSection;



/*


 <section className="about-section section-padding" id="section_4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-text-wrap">
                <img
                  src="images/Reverend-Elochukwu.png"
                  className="about-image img-fluid"
                  alt="Reverend Elochukwu"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info">
                <h2 className="text-white mb-4">Meet Reverend Elochukwu</h2>
                <p className="text-white">
                  Reverend Elochukwu Udegbunam is a supernatural and skillful
                  minister of God's word whose ministry has helped many around
                  the world experience a victorious, impactful and effective
                  life in the word of God. He is the founding Pastor of The
                  Lord's Brethren Church International. Within a few years of
                  starting the church, he has raised many in the word of God who
                  are passionate about the work of the ministry and as a result
                  the church has centers in different cities in the country at
                  the time with a wide following online.
                </p>
                <p className="text-white">
                  Reverend Elochukwu received a 3-Fold mandate from the Lord for
                  the work of the ministry:
                  <ul>
                    <li className="text-white">Calling Sinners to Christ</li>
                    <li className="text-white">Building Saints in Christ</li>
                    <li className="text-white">
                      Making Every saint a minister of the Lord Jesus Christ.
                    </li>
                  </ul>
                </p>
                <p className="text-white">
                  He seeks to accomplish this through various platforms which
                  includes: local churches, conferences, crusades, school of
                  ministry, media and prints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>





         <section className="contact-section section-padding" id="section_6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <h2 className="text-center mb-4">
                Have any questions? Let's talk
              </h2>
              <nav className="d-flex justify-content-center">
                <div
                  className="nav nav-tabs align-items-baseline justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-ContactForm-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-ContactForm"
                    type="button"
                    role="tab"
                    aria-controls="nav-ContactForm"
                    aria-selected="false"
                  >
                    <h5>Contact Form</h5>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-ContactMap-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-ContactMap"
                    type="button"
                    role="tab"
                    aria-controls="nav-ContactMap"
                    aria-selected="false"
                  >
                    <h5>Google Maps</h5>
                  </button>
                </div>
              </nav>
              <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-ContactForm"
                  role="tabpanel"
                  aria-labelledby="nav-ContactForm-tab"
                >
                  <form
                    className="custom-form contact-form mb-5 mb-lg-0"
                    action="#"
                    method="post"
                    role="form"
                  >
                    <div className="contact-form-body">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <input
                            type="text"
                            name="contact-name"
                            id="contact-name"
                            className="form-control"
                            placeholder="Full name"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <input
                            type="email"
                            name="contact-email"
                            id="contact-email"
                            pattern="[^ @]*@[^ @]*"
                            className="form-control"
                            placeholder="Email address"
                            required
                          />
                        </div>
                      </div>
                      <input
                        type="text"
                        name="contact-company"
                        id="contact-company"
                        className="form-control"
                        placeholder="Company"
                        required
                      />
                      <textarea
                        name="contact-message"
                        rows="3"
                        className="form-control"
                        id="contact-message"
                        placeholder="Message"
                      ></textarea>
                      <div className="col-lg-4 col-md-10 col-8 mx-auto">
                        <button type="submit" className="form-control">
                          Send message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-ContactMap"
                  role="tabpanel"
                  aria-labelledby="nav-ContactMap-tab"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3456853358566!2d7.056821773041316!3d6.218063326641412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043830c5d178e93%3A0x3305b6015697a207!2sThe%20Lords%20Brethren%20Place%2C%20Awka!5e0!3m2!1sen!2sng!4v1703920380110!5m2!1sen!2sng"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
*/