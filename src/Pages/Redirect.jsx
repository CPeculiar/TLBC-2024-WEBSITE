import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/Styles/Redirect.css'; 

const Redirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(20);
  
  // Assuming you passed these as state when navigating to this page
  const { paymentLink, userCategory, referenceId } = location.state || {};
  
  const amount = userCategory === 'Member' ? '5,000' : '3,000';

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      if (paymentLink) {
        window.location.href = paymentLink;
      }
    }, 20000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [paymentLink]);

  const handleManualRedirect = () => {
    if (paymentLink) {
      window.location.href = paymentLink;
    }
  };

  return (
    <div className="redirect-container">
      <div className="processing-icon"></div>
      <p className="redirect-text">
        Your refernce ID is <span>{referenceId}.</span> <br /> Please you are expected to save this ref ID because 
        it will be used to authenticate your payment at the Registration point in the Convocation.
      </p>
      <p className="redirect-text">
        You will be redirected to the payment page where you are expected to pay the sum of <span>₦{ amount }</span> for 
        your registration for TLBC 2024.
      </p>
      <p className="redirect-text">
        Please do not refresh or close this page. You will be redirected in {countdown} seconds.
      </p>
      <p className="redirect-text">
        If you are not automatically redirected, please{' '}
        <span className="redirect-link" onClick={handleManualRedirect}>
          click here
        </span>
      </p>
    </div>
  );
};

export default Redirect;