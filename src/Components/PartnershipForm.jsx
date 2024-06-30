import React, { useState } from "react";
import Select from "react-select";
import { Country, State } from "country-state-city";
import "../assets/Styles/Partner.css";
import logo from "../assets/Images/TLBC24Logo2.png";

const PartnershipForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currency: "NGN",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setStates(State.getStatesOfCountry(country.value));
    setSelectedState(null); // Reset state selection when country changes
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!validateForm(formData)) {

    //   return;
    // }
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (selectedCountry) {
      data.append("country", selectedCountry.label);
    }
    if (selectedState) {
      data.append("state", selectedState.label);
    }

    try {
      const response = await fetch(
        "https://lord-s-brethren-payment.onrender.com/api/payment/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFTOKEN": getCookie("csrftoken"),
          },
          body: JSON.stringify(formData),
          // body: data,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error("Something went wrong with your submission.");
      }

      const responseData = await response.json();
      console.log("Registration successful:", responseData);

      if (responseData.status === "success" && responseData.link) {
        // Redirect to the link obtained from the response
        window.location.href = responseData.link;
      } else {
        throw new Error("Invalid response data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const statesOptions = states.map((state) => ({
    value: state.isoCode,
    label: state.name,
  }));

  return (
    <div>
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        //form-container mt-2
        // id="section_1"
        style={{ backgroundImage: 'url("/images/wordsession.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="relative p-8 rounded-lg shadow-lg w-full max-w-3xl bg-white mx-auto mt-3 mb-3 register-form">
          <img src={logo} alt="Logo" className="w-20 h-20 mx-auto mb-6" />
          <div className="text-center mb-6 mainTitle">
            <h2 className="text-yellow-500 font-bold text-4xl">
              {" "}
              Partnership Form
            </h2>
          </div>
          <form
            id="partnership-form"
            method="post"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="country"
                className="block text-gray-700 font-bold mb-2"
              >
                Country
              </label>
              <Select
                id="country"
                name="country"
                options={countries}
                value={selectedCountry}
                onChange={handleCountryChange}
                placeholder="Select your country"
                isClearable
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="state"
                className="block text-gray-700 font-bold mb-2"
              >
                State
              </label>
              <Select
                id="state"
                name="state"
                options={statesOptions}
                value={selectedState}
                onChange={handleStateChange}
                placeholder="Select your state"
                isClearable
                isDisabled={!selectedCountry}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="currency"
                className="block text-gray-700 font-bold mb-2"
              >
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                required
                value={formData.currency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="NGN" selected>
                  Naira
                </option>
                <option value="USD">USD</option>
                <option value="Euro">Euro</option>
                <option value="GBP">GBP</option>
                <option value="Yen">Yen</option>
                <option value="AUD">AUD</option>
                {/* Add more currencies as needed */}
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="amount"
                className="block text-gray-700 font-bold mb-2"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                required
                placeholder="Enter amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="form-group submit submit-btn mt-0 md:col-span-2">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded mt-0 w-full"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PartnershipForm;

/*

Responsive code


import React, { useState } from 'react';
import Select from 'react-select';
import { Country, State } from 'country-state-city';
import logo from '../assets/Images/TLBC24Logo2.png'; 

const PartnershipForm = () => {
  // ... (keep your existing state and functions)

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'url("/images/wordsession.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl p-6 sm:p-8 space-y-8">
        <div>
          <img src={logo} alt="Logo" className="mx-auto h-16 w-auto" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-yellow-500">
            Partnership Form
          </h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <Select
              id="country"
              name="country"
              options={countries}
              value={selectedCountry}
              onChange={handleCountryChange}
              placeholder="Select your country"
              isClearable
              className="react-select-container"
              classNamePrefix="react-select"
            />
            <Select
              id="state"
              name="state"
              options={statesOptions}
              value={selectedState}
              onChange={handleStateChange}
              placeholder="Select your state"
              isClearable
              isDisabled={!selectedCountry}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>

          <div>
            <label htmlFor="currency" className="sr-only">Currency</label>
            <select 
              id="currency" 
              name="currency"
              required
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
              value={formData.currency}
              onChange={handleInputChange}
            >
              <option value="NGN">Naira</option>
              <option value="USD">USD</option>
              <option value="Euro">Euro</option>
              <option value="GBP">GBP</option>
              <option value="Yen">Yen</option>
              <option value="AUD">AUD</option>
            </select>
          </div>

          <div>
            <label htmlFor="amount" className="sr-only">Amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnershipForm;

*/
