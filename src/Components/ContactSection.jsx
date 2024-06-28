
// import "../assets/Styles/bootstrap.min.css";
// import "../assets/Styles/bootstrap-icons.css";
// import "../assets/Styles/templatemo-festava-live.css";

import React, { useState } from 'react';

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState('ContactForm');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="py-16" id="section_6">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Have any questions? Let's talk</h2>

          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 font-semibold ${activeTab === 'ContactForm' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('ContactForm')}
            >
              Contact Form
            </button>
            <button
              className={`px-4 py-2 font-semibold ${activeTab === 'ContactMap' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('ContactMap')}
            >
              Google Maps
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            {activeTab === 'ContactForm' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="contact-name"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Full name"
                    required
                  />
                  <input
                    type="email"
                    name="contact-email"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Email address"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="contact-company"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Company"
                  required
                />
                <textarea
                  name="contact-message"
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Message"
                ></textarea>
                <div className="flex justify-center">
                  <button type="submit" className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                    Send message
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'ContactMap' && (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3456853358566!2d7.056821773041316!3d6.218063326641412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043830c5d178e93%3A0x3305b6015697a207!2sThe%20Lords%20Brethren%20Place%2C%20Awka!5e0!3m2!1sen!2sng!4v1703920380110!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;