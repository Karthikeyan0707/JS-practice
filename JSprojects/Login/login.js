// function validate() {
//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;

//   if (username === "karthik" && password === "sasken") {
//     alert("login successful!");
//   } else {
//     alert("login failed!");
//   }
// }

const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (username.value.trim() === "") {
    usernameError.innerText = "Username is required";
  } else {
    usernameError.innerText = "";
  }
  if (password.value.trim() === "") {
    passwordError.innerText = "Password is required";
  } else {
    passwordError.innerText = "";
  }

  if (username.value === "karthik" && password.value === "sasken") {
    alert("login successful!");
  } else {
    alert("login failed!");
  }
});
