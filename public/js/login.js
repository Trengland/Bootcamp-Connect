console.log('log in js');
const loginFormHandler = async (event) => {
  event.preventDefault();
console.log('clicked');
  // Collect values from the login form

  const email = document.querySelector('#email').value.trim()
  const emailText = document.querySelector('#email')
  const password = document.querySelector("#password").value.trim();
  const passwordText = document.querySelector('#password')
 
  if (!email || !password) {
    alert('Please enter a valid email or password')
    emailText.value = ""
    passwordText.value = ""
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
    } else if (!response.ok) {
      alert('Please enter a valid email and password');
      emailText.value = ""
      passwordText.value = ""
    }
  }
};

document
  .querySelector(".log-in")
  .addEventListener("click", loginFormHandler);
