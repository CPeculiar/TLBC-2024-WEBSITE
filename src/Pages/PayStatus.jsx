import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import successIcon from '../assets/Images/success3.svg';
import failedIcon from '../assets/Images/fail.png'; 
import logo from '../assets/Images/TLBC24Logo2.png'; 


const PayStatus = () => {

  const location = useLocation();
  const [status, setStatus] = useState('');
  const [txRef, setTxRef] = useState('');
  const [transactionId, setTransactionId] = useState('');
  
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setStatus(query.get('status'));
    setTxRef(query.get('tx_ref'));
    setTransactionId(query.get('transaction_id'));
  }, [location.search]);

  const handleClose = () => {
    window.location.href = '/home';
  };
  
  

    return (
    <div>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <img src={logo} alt="Logo" className="w-20 h-20 mx-auto mb-6" />
        {status === 'successful' ? (
          <>
          <div className="flex justify-center mb-4">
            <img src={successIcon} alt="Success" className="w-20 h-20 filter-green" />
            </div>
            <h2 className="text-2xl font-bold text-green-600">Payment Successful</h2>
            <div className="mt-4 text-left">
            <p><strong>Transaction Reference:</strong> {txRef}</p>
              <p><strong>Transaction ID:</strong> {transactionId}</p>
            </div>
          </>
        ) : (
          <>
          <div className="flex justify-center mb-4">
            <img src={failedIcon} alt="Failed" className="w-18 h-20 filter-red" />
            </div>
            <h2 className={`text-2xl font-bold ${status === 'failed' ? 'text-red-600' : 'text-yellow-600'}`}>
            </h2>
            {status === 'failed' && <p className="mt-4 text-red-600">Your payment could not be processed. Please try again.</p>}
          </>
        )}
        <button
          onClick={handleClose}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </div>
      </div>
      </div>
  );
}

export default PayStatus






/*
  <section>
    <div className="font-bold text-red-500 text-6xl"><h2>THIS IS PAY STATUS</h2></div>
</section>




const PayStatus = ({ response }) => {

    const [statusMessage, setStatusMessage] = useState('');
    const [paymentInfo, setPaymentInfo] = useState({});
  
    useEffect(() => {
      switch (response.status) {
        case 'success':
          setStatusMessage('Payment was Successful');
          setPaymentInfo({
            firstname: response.firstname,
            lastname: response.lastname,
            email: response.email,
            amount: response.amount,
            paymentType: response.paymentType,
            phone: response.phone,
            transaction_id: response.transaction_id
          });
          break;
        case 'failed':
          setStatusMessage('Payment Failed');
          break;
        case 'error':
          setStatusMessage('Payment was not successful as an error occurred');
          break;
        default:
          setStatusMessage('Invalid Transaction status');
      }
    }, [response]);
  
    const handleClose = () => {
      window.location.href = 'http://localhost:5173/home';
    };
  

    return (
    <div>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <img src={logo} alt="Logo" className="mb-6" />
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        {response.status === 'success' ? (
          <>
            <img src={successIcon} alt="Success" className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-600">{statusMessage}</h2>
            <div className="mt-4 text-left">
              <p><strong>First Name:</strong> {paymentInfo.firstname}</p>
              <p><strong>Last Name:</strong> {paymentInfo.lastname}</p>
              <p><strong>Email:</strong> {paymentInfo.email}</p>
              <p><strong>Amount Paid:</strong> ${paymentInfo.amount}</p>
             <p><strong>Payment Type:</strong> {paymentInfo.paymentType}</p>
              <p><strong>Phone Number:</strong> {paymentInfo.phone}</p>
              <p><strong>Transaction ID:</strong> {paymentInfo.transaction_id}</p>
            </div>
          </>
        ) : (
          <>
            <img src={failedIcon} alt="Failed" className="mx-auto mb-4" />
            <h2 className={`text-2xl font-bold ${response.status === 'failed' ? 'text-red-600' : 'text-yellow-600'}`}>
              {statusMessage}
            </h2>
            {response.status === 'failed' && <p className="mt-4 text-red-600">{response.message}</p>}
          </>
        )}
        <button
          onClick={handleClose}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </div>
      </div>
      </div>
  );
}

export default PayStatus

*/