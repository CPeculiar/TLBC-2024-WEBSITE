document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signin-form");

    
        // try {
        //     const response = await fetch('https://lord-s-brethren-payment.onrender.com/api/auth/login/', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(bodyData)
        //     });

        //     if (!response.ok) {
        //         const errorData = await response.json();
        //         console.error('Error response:', errorData);
        //         throw new Error('Sign-in failed');
        //     }

        //     const responseData = await response.json();
        //     console.log('Sign-in successful:', responseData);

        //     // Save the access token to local storage
        //     localStorage.setItem('accessToken', responseData.access);

        //     // Clear the form fields
        //     form.reset();

        //     // Redirect to the dashboard page
        //     window.location.href = 'http://127.0.0.1:5500/dashboard/dashboard.html';

        // } catch (error) {
        //     console.error('Error:', error);
        //     // alert('Sign-in failed. Please try again.');
        // }

        async function login(email, password) {
            form.addEventListener("submit", async (event) => {
                event.preventDefault();
        
                let formData = new FormData(form);
                let bodyData = Object.fromEntries(formData.entries());
        
                console.log('Form Data:', bodyData);
        

            try {
                const response = await fetch('https://lord-s-brethren-payment.onrender.com/api/auth/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password })
                });
        
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Login failed');
                }
        
                const { access, refresh } = await response.json();
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh);
            } catch (error) {
                console.error('Error logging in:', error);
                alert('Login failed. Please try again.');
            }
        })}
        
        async function refreshToken() {
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) return;
        
            try {
                const response = await fetch('https://lord-s-brethren-payment.onrender.com/api/auth/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ refreshToken })
                });
        
                if (!response.ok) {
                    throw new Error('Token refresh failed');
                }
        
                const { accessToken } = await response.json();
                localStorage.setItem('accessToken', accessToken);
            } catch (error) {
                console.error('Error refreshing token:', error);
                alert('Session expired. Please log in again.');
                // Optionally, redirect to the login page
                window.location.href = 'http://127.0.0.1:5500/dashboard/dashboard.html';
            }
        }
        
        // Automatically refresh token before it expires
        setInterval(refreshToken, 15 * 60 * 1000); // e.g., every 15 minutes
        
    });






// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("signin-form");

//     form.addEventListener("submit", async (event) => {
//         event.preventDefault();

//         let formData = new FormData(form);
//         let bodyData = Object.fromEntries(formData.entries());

//         console.log('Form Data:', bodyData);

//         // For debugging: log FormData entries to check if they are populated
//         for (let pair of formData.entries()) {
//             console.log(pair[0]+ ', ' + pair[1]); 
//         }

//         // Further logic for fetching data from server goes here
//     });
// });
