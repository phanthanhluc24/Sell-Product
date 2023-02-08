let apiUser = "http://localhost:3000/user";
const username = document.querySelector(".input-signup-username");
const email = document.querySelector(".input-signup-email");
const password = document.querySelector(".input-signup-password");
const bntSignup = document.querySelector(".signup__signInButton");
// signup
bntSignup.addEventListener("click", (e) => {
  e.preventDefault()
  if (username.value == "" ||email.value == "" || password.value == "") {
    alert("Please enter your username and password");
  }  
  else if (password.value.length < 6) {
    alert("Password must be longer than 6 characters");}
  else {const user = {
  username: username.value,
  email: email.value,
  password: password.value,
};
fetch(apiUser, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
window.location.href="/pages/login.html";
alert("Sign up successfully");

  }
});



