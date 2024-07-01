// AboutSection.js

import React from "react";
import ContactSection from "./ContactSection";
import "../assets/Styles/bootstrap.min.css";
import "../assets/Styles/bootstrap-icons.css";
import "../assets/Styles/templatemo-festava-live.css";
import Theword from '../assets/Images/Theword.jpg';
import PraiseSession from '../assets/Images/PraiseSession.jpg';
import FamilyExperience from '../assets/Images/FamilyExperience.jpg';
import styled from 'styled-components';

const Section = styled.section`
  padding: 69px 0;
  background-color: ${props => props.dark ? '#000' : '#f8f9fa'};

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 90%;
    max-width: 1200px;
     margin: 0 auto;
  }
`;

const Title = styled.h2`
  color: ${props => props.dark ? '#FFD700' : 'black'};
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: ${props => props.full ? '0 0 100%' : '0 0 50%'};
  max-width: ${props => props.full ? '100%' : '50%'};
  padding: 15px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Text = styled.p`
  color: ${props => props.dark ? '#fff' : '#333'};
  font-size: 1.38rem;
  text-align: justify;
  margin-bottom: 1rem;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const ImageCaption = styled.div`
  margin-top: 1rem;

  h4 {
    color: ${props => props.dark ? '#FFD700' : '#333'};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    color: ${props => props.dark ? '#fff' : '#666'};
    font-size: 1rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const ArtistThumb = styled.div`
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ArtistImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;

  ${ArtistThumb}:hover & {
    transform: scale(1.1);
  }
`;

const ArtistHover = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 215, 0, 0.9); // Golden color with slight transparency
  color: white;
  padding: 15px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${ArtistThumb}:hover & {
    transform: translateY(0);
  }
  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  `;


const AboutSection = () => {
  return (
    <>
 <Section dark id="section_2">
        <Container>
          <Row>
            <Column>
              <Title dark>About TLBC'24</Title>
              <Text dark>
                The Lord's Brethren Convocation (TLBC) is an annual glorious homecoming of stakeholders in The Lord's Brethren Nation where we celebrate our partners, victories, joys, successes, conquests, coups, and feats. It is an event that everyone who joined forces with our vision to push for the propagation of the Gospel always anticipates with joy and excitement every year.
              </Text>
              <Text dark>
                It's a meeting that affords us the opportunity to celebrate our pastors, partners, and ministry departments in grand style and also highlights all that has been achieved in the work of the ministry every year.
              </Text>
              <Text dark>
                This year's convocation is going to be a meeting of worship, teachings, impartation, awards, and of course, The Lord's Brethren Family meeting.
              </Text>
            </Column>
            <Column>
              <Image
                src="images/brethren-4-1024x683.jpg"
                alt="Brethren"
              />
              <ImageCaption dark>
                <h4>Our Annual Homecoming</h4>
                <p>An amazing experience</p>
              </ImageCaption>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section id="section_3">
        <Container>
          <Title>What to expect</Title>
          <Row>
            <Column>
              <ArtistThumb>
                <ArtistImage src={Theword} alt="The Word" />
                <ArtistHover>
                  <p>The Word</p>
                </ArtistHover>
              </ArtistThumb>
              <ArtistThumb>
                <ArtistImage src={PraiseSession} alt="Praise Moments" />
                <ArtistHover>
                  <p>Praise Moments</p>
                </ArtistHover>
              </ArtistThumb>
            </Column>
            <Column>
              <ArtistThumb>
                <ArtistImage src="images/worship.jpg" alt="Worship Experience" />
                <ArtistHover>
                  <p>Worship Experience</p>
                </ArtistHover>
              </ArtistThumb>
              <ArtistThumb>
                <ArtistImage src={FamilyExperience} alt="Family Experience" />
                <ArtistHover>
                  <p>Family Experience</p>
                </ArtistHover>
              </ArtistThumb>
            </Column>
          </Row>
        </Container>
      </Section>
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