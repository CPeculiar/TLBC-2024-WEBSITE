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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-8 rounded-lg shadow-md">
      <div className="flex justify-center">
        <div className="processing-icon w-16 h-16 sm:w-20 sm:h-20"></div>
      </div>
      <div className="text-center space-y-4">
        <p className="text-sm sm:text-base">
          Your reference ID is <span className="font-bold text-blue-600">{referenceId}</span>. <br /> 
          This will be used to authenticate your payment at the Registration point in the Convocation.
        </p>
        <p className="text-sm sm:text-base">
          You will be redirected to the payment page where you are expected to pay the sum of <span className="font-bold">₦{amount}</span> to
           register for TLBC 2024.
        </p>
        <p className="text-sm sm:text-base">
          Please do not refresh or close this page. You will be redirected in <span className="font-bold">{countdown}</span> seconds.
        </p>
        <p className="text-sm sm:text-base">
          If you are not automatically redirected, please{' '}
          <span 
            className="text-blue-600 cursor-pointer hover:underline" 
            onClick={handleManualRedirect}
          >
            click here
          </span>
        </p>
      </div>
    </div>
  </div>
);
};

export default Redirect;