import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import '../assets/Styles/old-register.css'
import "../assets/Styles/register.css";
// import '../assets/Images/wordsession.jpg'

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    birthdate: "",
    phone: "",
    address: "",
    category: "",
    church_name: "",
    is_aware_of_convention: "",
    attendance_mode: "",
    was_participant: "",
    health_issue: "",
    reach: "",
  });

  const [errors, setErrors] = useState({});
  const [memberStatus, setMemberStatus] = useState("");
  const [campingStatus, setCampingStatus] = useState("");
  const [healthCondition, setHealthCondition] = useState("");

  const handleInputChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      ...(name === "category" && value === "Member" ? { church_name: "" } : {}),
    }));
    if (name === "category") {
      setMemberStatus(value);
    } else {
    }
  };

  const handleTermsAccepted = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleCampingChange = (e) => {
    setCampingStatus(e.target.value);
    handleInputChange(e);
  };

  const handleHealthConditionChange = (e) => {
    const { value } = e.target;
    setHealthCondition(value);
    if (value === "false") {
      // Reset the health_issue detail if No is selected
      setFormData((prevState) => ({
        ...prevState,
        health_issue: "",
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        health_issue: "",
      }));
    }
  };

  const validateForm = (data) => {
    const newErrors = {};
    let isValid = true;

    if (!data.firstname) {
      newErrors.firstname = "Firstname is required";
      isValid = false;
    }

    if (!data.lastname) {
      newErrors.lastname = "Lastname is required";
      isValid = false;
    }

    if (!data.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    if (!validateEmail(data.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!data.birthdate) {
      newErrors.birthdate = "Birth Date is required";
      isValid = false;
    }

    if (!validatePhone(data.phone)) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }

    if (!data.address) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    if (!data.category) {
      newErrors.category = "Membership status is required";
      isValid = false;
    }

    if (data.category === "Member" && !data.church_name) {
      newErrors.church_name = "Church Zone is required";
      isValid = false;
    }

    if (data.category === "Invitee" && !data.church_name) {
      newErrors.church_name = "Church Ministry name is required";
      isValid = false;
    }

    if (!data.is_aware_of_convention) {
      newErrors.is_aware_of_convention = "Awareness confirmation is required";
      isValid = false;
    }

    if (!data.attendance_mode) {
      newErrors.attendance_mode = "Camping intention is required";
      isValid = false;
    }

    if (!data.was_participant) {
      newErrors.was_participant = "Past attendance status is required";
      isValid = false;
    }

    if (!data.reach) {
      newErrors.reach = "This field is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    setIsLoading(true);
    if (!validateForm(formData)) {
      return;
    }

    try {
      const response = await fetch(
        "https://lord-s-brethren-payment.onrender.com/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFTOKEN": getCookie("csrftoken"),
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   console.error("Error response:", errorData);

      if (response.ok) {
        navigate("/redirect", {
          state: {
            paymentLink: data.link,
            userCategory: formData.category, // assuming you have this in your form data
            referenceId: data.reference,
          },
        });
      } else {
        throw new Error("Invalid response data"); // Handle error
      }
    } catch (error) {
      console.error("Error details:", error);
      alert("An error occurred: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === `${name}=`) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{11}$/;
    return re.test(String(phone));
  };

  return (
    <div>
      <section
        //hero-section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center heroSection"
        id="section_1"
        style={{ backgroundImage: 'url("/images/wordsession.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="relative p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-xxl bg-white mx-auto my-3 register-form overflow-y-auto max-h-[90vh]">
          <div className="text-center mb-6 mainTitle">
            <h2 className="text-yellow-500 font-bold text-4xl">
              {" "}
              Registration Form
            </h2>
          </div>
          <form id="registration-form" method="post" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group firstname">
                <label
                  htmlFor="firstname"
                  className="block text-gray-700 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                />
                <span className="error text-red-500 text-sm">
                  {errors.firstname}
                </span>
              </div>
              <div className="form-group mb-2 lastname">
                <label
                  htmlFor="lastname"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                />
                <span className="error">{errors.lastname}</span>
              </div>
              <div className="form-group mb-2 gender">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
                <span className="error text-red-500 text-sm">
                  {errors.gender}
                </span>
              </div>
              <div className="form-group email">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                />
                <span className="error text-red-500 text-sm">
                  {errors.email}
                </span>
              </div>
              <div className="form-group mb-2 birth-date">
                <label
                  htmlFor="date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Birth Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="birthdate"
                  placeholder="Select your date"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                />
                <span className="error text-red-500 text-sm">
                  {errors.birthdate}
                </span>
              </div>
              <div className="form-group mb-2 phone-number">
                <label
                  htmlFor="number"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                />
                <span className="error text-red-500 text-sm">
                  {errors.phone}
                </span>
              </div>
              <div className="form-group mb-2 address">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address (Street, state, country)
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                />
                <span className="error text-red-500 text-sm">
                  {errors.address}
                </span>
              </div>
              <div className="form-group mb-2 membership-status">
                <label
                  htmlFor="member"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Are you a member of The Lord's Brethren Ministry?
                </label>
                <select
                  id="member"
                  name="category"
                  value={formData.category}
                  onChange={(e) => {
                    handleInputChange(e);
                    // handleMemberChange(e);
                  }}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                >
                  <option value="" disabled>
                    Select your membership status
                  </option>
                  <option value="Member">Yes</option>
                  <option value="Invitee">No</option>
                </select>
                <span className="error text-red-500 text-sm" id="member-error">
                  {errors.category}
                </span>
              </div>
              {memberStatus === "Member" && (
                <div className="form-group mb-2 your-zone">
                  <label
                    htmlFor="churchZone"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Please state your church or zone
                  </label>
                  <select
                    type="text"
                    id="churchZone"
                    name="church_name"
                    placeholder="Select your Zone"
                    value={formData.church_name}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                  >
                    <option value="" disabled>
                      Select your zone
                    </option>
                    <option value="Awka zone">Awka zone</option>
                    <option value="Nnewi Zone">Nnewi zone</option>
                    <option value="Owerri Zone">Owerri zone</option>
                    <option value="Ekwulobia Zone">Ekwulobia zone</option>
                    <option value="TLBC Onitsha">TLBC Onitsha</option>
                    <option value="TLBCM UNILAG">TLBCM UNILAG</option>
                  </select>
                  <span
                    className="error text-red-500 text-sm"
                    id="churchZone-error"
                  >
                    {errors.church_name}
                  </span>
                </div>
              )}
              {memberStatus === "Invitee" && (
                <div className="form-group mb-2 name-of-church" id="not-member">
                  <label
                    htmlFor="churchname"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    What is the name of your Ministry?
                  </label>
                  <input
                    type="text"
                    id="churchname"
                    name="church_name"
                    placeholder="Enter the name of your Ministry"
                    value={formData.church_name}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                  />
                  <span
                    className="error text-red-500 text-sm"
                    id="churchname-error"
                  >
                    {errors.church_name}
                  </span>
                </div>
              )}
              <div className="form-group mb-2 are-you-aware">
                <label
                  htmlFor="areYouAware"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Are you aware that you are registering for a camp meeting?
                </label>
                <select
                  id="areYouAware"
                  name="is_aware_of_convention"
                  value={formData.is_aware_of_convention}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <span
                  className="error text-red-500 text-sm"
                  id="areYouAware-error"
                >
                  {errors.is_aware_of_convention}
                </span>
              </div>
              <div className="form-group mb-2 are-you-camping">
                <label
                  htmlFor="areYouCamping"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Do you intend to camp all through the Convocation?
                </label>
                <select
                  id="areYouCamping"
                  name="attendance_mode"
                  value={formData.attendance_mode}
                  onChange={(e) => {
                    handleInputChange(e);
                    handleCampingChange(e);
                  }}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                >
                  <option value="" disabled>
                    Choose option
                  </option>
                  <option value="Camper">Yes</option>
                  <option value="No">No</option>
                </select>
                <span
                  className="error text-red-500 text-sm"
                  id="areYouCamping-error"
                >
                  {errors.attendance_mode}
                </span>
              </div>
              {campingStatus === "No" && (
                <div
                  className="form-group mb-2 how-to-join"
                  id="dailyOrStreamDiv"
                >
                  <label
                    htmlFor="dailyOrStream"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    How will you join the Convocation?
                  </label>
                  <select
                    id="dailyOrStream"
                    name="attendance_mode"
                    value={formData.attendance_mode}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                  >
                    <option value="" disabled>
                      Choose an option
                    </option>
                    <option value="LiveStream">Live Streaming</option>
                    <option value="DailyAttendant">Daily Attendance</option>
                  </select>
                  <span
                    className="error text-red-500 text-sm"
                    id="dailyOrStream-error"
                  >
                    {errors.attendance_mode}
                  </span>
                </div>
              )}
              <div className="form-group was-participant">
                <label
                  htmlFor="haveyouAttendedBefore"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Have you attended The Convocation in the past?
                </label>
                <select
                  id="haveyouAttendedBefore"
                  name="was_participant"
                  value={formData.was_participant}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <span
                  className="error text-red-500 text-sm"
                  id="haveyouAttendedBefore-error"
                >
                  {errors.was_participant}
                </span>
              </div>
              <div className="form-group mb-2 health-condition">
                <label
                  htmlFor="anyHealthCondition"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Do you have any health condition or physical disabilities?
                </label>
                <select
                  id="anyHealthCondition"
                  name="health_issue"
                  value={healthCondition}
                  // onChange={handleHealthConditionChange}
                  onChange={(e) => {
                    handleInputChange(e);
                    handleHealthConditionChange(e);
                  }}
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <span
                  className="error text-red-500 text-sm"
                  id="anyHealthCondition-error"
                >
                  {errors.health_issue}
                </span>
              </div>
              {healthCondition === "true" && (
                <div className="form-group mb-2 health-condition">
                  <label
                    htmlFor="yourHealthCondition"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Please state your health condition
                  </label>
                  <input
                    type="text"
                    id="yourHealthCondition"
                    name="health_issue"
                    placeholder="State your health condition(s)"
                    value={formData.health_issue}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                  />
                  <span
                    className="error text-red-500 text-sm"
                    id="yourHealthCondition-error"
                  >
                    {errors.health_issue}
                  </span>
                </div>
              )}

              <div className="form-group mb-2 reach">
                <label
                  htmlFor="reach"
                  className="block text-gray-700 font-bold mb-2"
                >
                  How did you hear about TLBC?
                </label>
                <select
                  id="reach"
                  name="reach"
                  value={formData.reach}
                  onChange={handleInputChange}
                  className="mt-1 mb-2 p-2 border border-gray-300 rounded w-full text-sm appearance-none"
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="Facebook">Facebook</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Church">Church Announcement</option>
                  <option value="Website">Website</option>
                  <option value="Friend">A friend</option>
                  <option value="Outreach">Outreach</option>
                </select>
                <span className="error text-red-500 text-sm mb-1" id="reach-error">
                  {errors.reach}
                </span>
              </div>
            </div>

            <div className="form-group mb-1 terms-and-conditions relative">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  checked={termsAccepted}
                  onChange={handleTermsAccepted}
                  className="absolute top-[-15px] left-[-210px] mt-1 h-4 w-4 cursor-pointer"
                />
                <label
                  htmlFor="termsCheckbox"
                  className="text-sm cursor-pointer pl-6 leading-tight mt-3"
                  style={{ marginTop: '0.25rem' }} // Adjust the margin top value as needed
                >
                  Please note that trousers and any form of indecent dressing
                  will not be allowed for females. Check the box above if you consent
                  to this.
                </label>
              </div>
            </div>

            <div className="form-group submit submit-btn mt-2">
              <button
                type="submit"
                className={`bg-yellow-500 text-white px-4 py-2 rounded w-full transition-opacity duration-300 ${
                  !termsAccepted && "opacity-50 cursor-not-allowed"
                }`}
                disabled={!termsAccepted}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegistrationForm;

//hover:text-yellow-700 ist btn div class

//hover:text-yellow-700

{
  /* Dimming overlay */
}
{
  /* <div className="container d-flex justify-content-center align-items-center"> */
}
{
  /*<div className="">
             <div className="col-12 mt-4 mb-5 text-center">
              <h2 className="text-white mb-1" id="annual">Register Now!!!</h2>
            </div> 
          </div>*/
}
{
  /* </div> */
}
{
  /* <div className="flex justify-center items-center bg-gray-100 registration-container"> */
}

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({ ...formData, [name]: value });
// };

// // const handleMemberChange = (e) => {
// //   setMemberStatus(e.target.value);
// //   if (e.target.value === 'Member') {
// //     setFormData({ ...formData, church_name: '' });
// //   }
// // };

// const handleMemberChange = (e) => {
//   const { value } = e.target;
//   setMemberStatus(value);
//   setFormData({ ...formData, category: value });
//   if (value === 'Member') {
//     setFormData({ ...formData, church_name: '' });
//   }
// };

// const handleCampingChange = (e) => {
//   const { value } = e.target;
//   setCampingStatus(value);
//   setFormData({ ...formData, attendance_mode: value });
// };

// const handleHealthConditionChange = (e) => {
//   const { value } = e.target;
//   setHealthCondition(value);
//   setFormData({ ...formData, health_issue: value });
// };

// const handleHealthConditionChange = (e) => {
//   setHealthCondition(e.target.value);
//   handleInputChange(e);
// };

// localStorage.setItem('accessToken', responseData.access);
// localStorage.setItem('refreshToken', responseData.refresh);

// e.target.reset();
// window.location.href = 'http://127.0.0.1:5500/dashboard/dashboard.html';
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// const RegistrationForm = () => {
//     return (
//       <div>
//         <section className="hero-section" id="section_1">
//           <div className="container d-flex justify-content-center align-items-center">
//             <div className="">
//               <div className="col-12 mt-4 mb-5 text-center">
//                 <h2 className="text-white mb-1" id="annual">Register Now!!!</h2>
//                 <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur saepe quam recusandae totam delectus neque quia quasi maiores, sed quibusdam suscipit qui aut magni obcaecati sint fuga minus a ea?</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="registration-container">
//         <div className="register-form">
//           <form id="registration-form" method="post">
//             <h2>Registration Form</h2>
//             <div className="form-group firstname">
//               <label htmlFor="firstname">Firstname</label>
//               <input type="text" id="firstname" name="firstname" placeholder="Enter your firstname" />
//               <span className="error" id="firstname-error"></span>
//             </div>
//             <div className="form-group lastname">
//               <label htmlFor="lastname">Lastname</label>
//               <input type="text" id="lastname" name="lastname" placeholder="Enter your lastname" />
//               <span className="error" id="lastname-error"></span>
//             </div>
//             <div className="form-group gender">
//               <label htmlFor="gender">Gender</label>
//               <select id="gender" name="gender">
//                 <option value="" disabled>Select your gender</option>
//                 <option value="M">Male</option>
//                 <option value="F">Female</option>
//               </select>
//               <span className="error" id="gender-error"></span>
//             </div>
//             <div className="form-group email">
//               <label htmlFor="email">Email Address</label>
//               <input type="email" id="email" name="email" placeholder="Enter your email address" />
//               <span className="error" id="email-error"></span>
//             </div>
//             <div className="form-group password">
//               <label htmlFor="password">Password</label>
//               <input type="password" id="password" name="password" placeholder="Enter your password" />
//               <span className="error" id="password-error"></span>
//             </div>
//             <div className="form-group birth-date">
//               <label htmlFor="date">Birth Date</label>
//               <input type="date" id="date" name="birthdate" placeholder="Select your date" />
//               <span className="error" id="date-error"></span>
//             </div>
//             <div className="form-group phone-number">
//               <label htmlFor="number">Phone Number</label>
//               <input type="tel" id="number" name="phone" placeholder="Enter your phone number" />
//               <span className="error" id="number-error"></span>
//             </div>
//             <div className="form-group address">
//               <label htmlFor="address">Address (Street, state, country)</label>
//               <input type="text" id="address" name="address" placeholder="Enter your address" />
//               <span className="error" id="address-error"></span>
//             </div>
//             <div className="form-group are-you-member">
//               <label htmlFor="member">Are you a member of The Lord's Brethren Church International?</label>
//               <select id="member" name="category">
//                 <option value="" disabled>Choose option</option>
//                 <option value="Member">Yes</option>
//                 <option value="Invitee">No</option>
//               </select>
//               <span className="error" id="member-error"></span>
//             </div>
//             <div className="form-group your-zone" id="is-member" style={{ display: 'none' }}>
//               <label htmlFor="churchZone">What is your Church/Zone?</label>
//               <select id="churchZone" name="church_name" disabled>
//                 <option value="" disabled>Choose your zone</option>
//                 <option value="Awka zone">Awka zone</option>
//                 <option value="Nnewi zone">Nnewi zone</option>
//                 <option value="Owerri zone">Owerri zone</option>
//                 <option value="Ekwulobia zone">Ekwulobia zone</option>
//               </select>
//               <span className="error" id="churchZone-error"></span>
//             </div>
//             <div className="form-group name-of-church" id="not-member" style={{ display: 'none' }}>
//               <label htmlFor="churchname">What is the name of your Church/Ministry*</label>
//               <input type="text" id="churchname" disabled name="church_name" placeholder="What is the name of your church?" />
//               <span className="error" id="churchname-error"></span>
//             </div>
//             <div className="form-group are-you-aware">
//               <label htmlFor="areYouAware">Are you aware that you are registering for a camp meeting?</label>
//               <select id="areYouAware" name="is_aware_of_convention">
//                 <option value="" disabled>Choose option</option>
//                 <option value="true">Yes</option>
//                 <option value="false">No</option>
//               </select>
//               <span className="error" id="areYouAware-error"></span>
//             </div>
//             <div className="form-group are-you-camping">
//               <label htmlFor="areYouCamping">Do you intend to camp all through the Convocation?</label>
//               <select id="areYouCamping" name="attendance_mode">
//                 <option value="" disabled>Choose option</option>
//                 <option value="Camper">Yes</option>
//                 <option value="No">No</option>
//               </select>
//               <span className="error" id="areYouCamping-error"></span>
//             </div>
//             <div className="form-group how-to-join" id="dailyOrStreamDiv" style={{ display: 'none' }}>
//               <label htmlFor="dailyOrStream">How will you join the Convocation?</label>
//               <select id="dailyOrStream" name="attendance_mode" disabled>
//                 <option value="" disabled>Choose option</option>
//                 <option value="Streamer">Live Streaming</option>
//                 <option value="Daily">Daily Attendance</option>
//               </select>
//               <span className="error" id="dailyOrStream-error"></span>
//             </div>
//             <div className="form-group was-participant">
//               <label htmlFor="haveyouAttendedBefore">Have you attended The Convocation in the past?</label>
//               <select id="haveyouAttendedBefore" name="was_participant">
//                 <option value="" disabled>Choose option</option>
//                 <option value="true">Yes</option>
//                 <option value="false">No</option>
//               </select>
//               <span className="error" id="haveyouAttendedBefore-error"></span>
//             </div>
//             <div className="form-group health-condition">
//               <label htmlFor="anyHealthCondition">Do you have any health condition or physical disabilities?</label>
//               <select id="anyHealthCondition">
//                 <option value="" disabled>Choose option</option>
//                 <option value="true">Yes</option>
//                 <option value="false">No</option>
//               </select>
//               <span className="error" id="anyHealthCondition-error"></span>
//             </div>
//             <div className="form-group health-condition" id="yourHealthConditionDiv" style={{ display: 'none' }}>
//               <label htmlFor="yourHealthCondition">Tell us about the condition briefly</label>
//               <input type="text" id="yourHealthCondition" name="health_issue" placeholder="" />
//               <span className="error" id="yourHealthCondition-error"></span>
//             </div>
//             <div className="form-group reach">
//               <label htmlFor="reach">How did you hear about TLBC</label>
//               <select id="reach" name="reach">
//                 <option value="" disabled>Choose option</option>
//                 <option value="Facebook">Facebook</option>
//                 <option value="WhatsApp">WhatsApp</option>
//                 <option value="Instagram">Instagram</option>
//                 <option value="Church">Church Announcement</option>
//                 <option value="Website">Website</option>
//                 <option value="Friend">A friend</option>
//                 <option value="Outreach">Outreach</option>
//               </select>
//               <span className="error" id="dailyOrStream-error"></span>
//             </div>
//             <div className="form-group registration-section">
//               <h3>Registration Section</h3>
//               <p>YOU WILL NEED TO PROCEED TO PAY FOR THE CONVOCATION AS PAYMENT IS WHAT THAT VALIDATES YOUR REGISTRATION.</p>
//             </div>
//             <div className="form-group submit-btn">
//               <input type="submit" value="PROCEED TO PAYMENT" />
//             </div>
//           </form>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default RegistrationForm
