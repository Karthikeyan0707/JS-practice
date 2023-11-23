const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//SHOW INPUT ERROR MESSAGE
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//SHOW SUCCESS OUTLINE
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//CHECK EMAIL IS VALID
function CheckEmail(input) {
  const re =
    /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//CHECK REQUIRED FIELDS
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    // console.log(input.value);
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
}
//CHECK INPUT LENGTH
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// CHECK PASSWORDS MATCH
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}
//GET FIELDNAME
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//EVENT LISTENERS
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log("submit");
  //   console.log(username.value);
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  CheckEmail(email);
  checkPasswordsMatch(password, password2);
});

// if (username.value === "") {
//     showError(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === "") {
//     showError(email, "Email is required");
//   } else if (!isVaidEmail(email.value)) {
//     showError(email, "Email is not valid");
//   } else {
//     showSuccess(email);
//   }
//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }
//   if (password2.value === "") {
//     showError(password2, "Confirm password");
//   } else {
//     showSuccess(password2);
//   }
