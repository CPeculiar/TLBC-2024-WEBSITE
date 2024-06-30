import React, { useState } from 'react';

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your WhatsApp number
    const whatsappNumber = '2349046515936';
    const message = `Hello, my name is ${userData.fullName}, my email address is ${userData.email} 
                    and here is my contact number ${userData.phoneNumber}. I'd like to chat with an admin.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };


    return (
      <div className="fixed bottom-4 right-4 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-yellow-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        )}
  
        {isOpen && (
          <div className="bg-white rounded-lg shadow-xl p-4 w-72">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 left-[249px] bg-transparent font-semibold text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-semibold mb-3">Start a Live Chat</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="fullName"
                value={userData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-3 py-2 text-sm border rounded-md"
              />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-3 py-2 text-sm border rounded-md"
              />
              <input
                type="tel"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-3 py-2 text-sm border rounded-md"
              />
              <p className="text-xs text-gray-600">You will be redirected to WhatsApp to chat with our admin.</p>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-00 transition-colors text-sm font-medium"
              >
                Start Conversation
              </button>
            </form>
          </div>
        )}
      </div>
    );
  };
  
export default ChatbotIcon;





//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-yellow-600 transition-colors"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//           </svg>
//         </button>
//       )}
//       {isOpen && (
//         <div className="bg-white p-4 rounded-lg shadow-lg w-64">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-2 right-2 bg-transparent font-semibold text-gray-500 hover:text-gray-700"
//           >
//             ×
//           </button>
//           <h3 className="text-lg font-semibold mb-2">Start a Live Chat</h3>
//           <p className="text-sm text-gray-600 mb-4">
//             You will be redirected to WhatsApp to chat with our admin.
//           </p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="fullName"
//               value={userData.fullName}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className="w-full p-2 mb-2 border rounded"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
//             >
//               Start Conversation
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatbotIcon;