console.log('log in js');
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
;
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  if (!email || !password) {
    return;
  }
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/feed");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".log-in")
  .addEventListener("click", loginFormHandler);
