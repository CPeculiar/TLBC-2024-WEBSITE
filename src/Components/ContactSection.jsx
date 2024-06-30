import React, { useState } from "react";
import emailjs from "emailjs-com";

// import "../assets/Styles/bootstrap.min.css";
// import "../assets/Styles/bootstrap-icons.css";
// import "../assets/Styles/templatemo-festava-live.css";

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState("ContactForm");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    church: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  const handleChange = (e) => {
    setFormErrors({});
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.church.trim()) errors.church = "Name of Church is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }
    return errors;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await emailjs.send(
          "service_qpmm229",
          "template_mpaslmz",
          {
            to_email: "chukwudipeculiar@gmail.com",
            from_name: formData.name,
            from_phone: formData.phone,
            from_email: formData.email,
            church: formData.church,
            message: formData.message,
          },
          "MsKdu3pdoxmwdF031"
        );

        if (response.status === 200) {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            church: "",
            message: "",
          });
          setIsSuccess(true);
        } else {
          alert("Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      setFormErrors(errors);
    }
  };



  //     try {
  //       const response = await fetch(
  //         // "https://api.emailjs.com/api/v1.0/email/send",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             service_id: "YOUR_EMAILJS_SERVICE_ID",
  //             template_id: "YOUR_EMAILJS_TEMPLATE_ID",
  //             user_id: "YOUR_EMAILJS_USER_ID",
  //             template_params: {
  //               to_email: "chukwudipeculiar@gail.com",
  //               from_name: formData.name,
  //               from_phone: formData.phone,
  //               from_email: formData.email,
  //               church: formData.church,
  //               message: formData.message,
  //             },
  //           }),
  //         }
  //       );

  //       if (response.ok) {
  //         alert("Message sent successfully!");
  //         setFormData({
  //           name: "",
  //           phone: "",
  //           email: "",
  //           church: "",
  //           message: "",
  //         });
  //       } else {
  //         alert("Failed to send message. Please try again.");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("An error occurred. Please try again.");
  //     }
  //   } else {
  //     setFormErrors(errors);
  //   }
  // };

  return (
    <section className="py-16" id="section_6">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Have any questions? Let's talk
          </h2>

          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "ContactForm"
                  ? "text-yellow-600 border-b-2 border-yellow-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("ContactForm")}
            >
              Contact Form
            </button>
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "ContactMap"
                  ? "text-yellow-600 border-b-2 border-yellow-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("ContactMap")}
            >
              Google Maps
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            {activeTab === "ContactForm" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Full name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md ${
                        formErrors.phone ? "border-red-500" : ""
                      }`}
                      placeholder="Phone number"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Email address"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="church"
                    value={formData.church}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                      formErrors.church ? "border-red-500" : ""
                    }`}
                    placeholder="Church"
                  />
                  {formErrors.church && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.church}
                    </p>
                  )}
                </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full px-3 py-2 border rounded-md ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Message"
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                  >
                    Send message
                  </button>
                </div>
              </form>
            )}

            {activeTab === "ContactMap" && (
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
