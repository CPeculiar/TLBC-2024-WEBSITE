import React, { useState } from 'react';
import Select from 'react-select';
import { Country, State } from 'country-state-city';
// import '../assets/Styles/Partner.css'
import logo from '../assets/Images/TLBC24Logo2.png'; 

const PartnershipForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currency: 'NGN',
    amount: '',
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
      data.append('country', selectedCountry.label);
    }
    if (selectedState) {
      data.append('state', selectedState.label);
    }


    try {
      const response = await fetch('https://lord-s-brethren-payment.onrender.com/api/payment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFTOKEN': getCookie('csrftoken'),
        },
        body: JSON.stringify(formData),
        // body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error('Something went wrong with your submission.');
      }

      const responseData = await response.json();
      console.log('Registration successful:', responseData);
      console.log('Registration successful:', responseData.status);
      console.log('Registration successful:', responseData.link);


      if (responseData.status === 'success' && responseData.link) {
        // Redirect to the link obtained from the response
        window.location.href = responseData.link;
      } else {
        throw new Error('Invalid response data');
      }
    } catch (error) {
      console.error('Error:', error);
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
        //form-header
        <img src={logo} alt="Logo" className="w-20 h-20 mx-auto mb-6" />
          <div className="text-center mb-6 mainTitle">
            <h2 className="text-blue-500 font-bold text-4xl">
              {" "}
              Partnership Form
            </h2>
          </div>
          <form id="partnership-form" method="post" onSubmit={handleSubmit}>
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
          name="name" required 
          placeholder="Enter your name" 
          value={formData.name}
          onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          id="email" 
          name="email" required 
          placeholder="Enter your email" 
          value={formData.email}
          onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
          type="tel" 
          id="phone" 
          name="phone" required 
          placeholder="Enter your phone number" 
          value={formData.phone}
          onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <Select
            id="country"
            name="country"
            options={countries}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Select your country"
            isClearable
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <Select
            id="state"
            name="state"
            options={statesOptions}
            value={selectedState}
            onChange={handleStateChange}
            placeholder="Select your state"
            isClearable
            isDisabled={!selectedCountry}
          />
        </div>
        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <select 
          id="currency" 
          name="currency" required
          value={formData.currency}
          onChange={handleInputChange}
          >
            <option value="NGN" selected>Naira</option>
            <option value="USD">USD</option>
            <option value="Euro">Euro</option>
            <option value="GBP">GBP</option>
            <option value="Yen">Yen</option>
            <option value="AUD">AUD</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input 
          type="number" 
          id="amount" 
          name="amount" required 
          placeholder="Enter amount" 
          value={formData.amount}
          onChange={handleInputChange}
          />
        </div>
        <div className="form-group submit submit-btn mt-0">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-0">Pay Now</button>
        </div>
      </form>
    </div>
    </section>
    </div>
  );
};

export default PartnershipForm;
