const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

//show input err msg

function ShowError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control err";

  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// check email

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

//check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    ShowError(input, `username must be at least  ${min} characters`);
  } else if (input.value.length > max) {
    ShowError(input, `username must be  less then  ${max} characters`);
  } else {
    showSuccess(input);
  }
}

//check password match

function checkPasswordMatch(input1 , input2){
    if(input1.value !== input2.value){
        ShowError(input2 , 'password do not match')
    }
}

//Event listener

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    ShowError(username, "user name is required ");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    ShowError(email, "Email is required ");
  } else if (!validateEmail(email.value)) {
    ShowError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    ShowError(password, "Password is required ");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    ShowError(password2, "Password 2  is required ");
  } else {
    showSuccess(password2);
  }
  checkLength(username, 3, 15);
  checkLength(password, 6, 15);
  checkPasswordMatch(password , password2)
});
