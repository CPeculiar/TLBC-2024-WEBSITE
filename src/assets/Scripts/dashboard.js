document.addEventListener("DOMContentLoaded", () => {
const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
});

// document.addEventListener("DOMContentLoaded", () => {
    const section1 = document.getElementById("dash-content");
    const section2 = document.getElementById("status");
    const toggleButton = document.getElementById("status-button");
  
    toggleButton.addEventListener("click", () => {
      if (section1.classList.contains("status")) {
        section1.classList.remove("status");
        section2.classList.add("status");
      } else {
        section1.classList.add("status");
        section2.classList.remove("status");
      }
    });

// Logout functionality
const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
        fetch('https://lord-s-brethren-payment.onrender.com/api/auth/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refreshToken: refreshToken })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Clear any user-related data from localStorage if necessary
                localStorage.removeItem("mode");
                localStorage.removeItem("status");
                localStorage.removeItem("refreshToken");

                // Redirect to the signin page
                window.location.href = "http://127.0.0.1:5500/signin.html";
            } else {
                console.error("Logout failed:", data.message);
                // Handle logout failure (optional)
            }
        })
        .catch(error => {
            console.error("Error during logout:", error);
            // Handle error during logout (optional)
        });
    } else {
        console.error("No refresh token found");
        // Redirect to signin page even if no refresh token is found
        window.location.href = "http://127.0.0.1:5500/signin.html";
    }
});
});



//  // Logout functionality
//  const logoutButton = document.getElementById("logout-button");
//  logoutButton.addEventListener("click", () => {
//      // Clear any user-related data from localStorage if necessary
//      localStorage.removeItem("mode");
//      localStorage.removeItem("status");

//      // Redirect to the signin page
//      window.location.href = "http://127.0.0.1:5500/signin.html";
//  });

// });

  