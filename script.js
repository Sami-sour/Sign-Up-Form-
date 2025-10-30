const createAccount = document.getElementById("create-btn");
const formInfo = document.querySelector(".form-information");
const userAccountInfo = document.querySelector(".user-account");
const heading = document.querySelector(".heading");
const userName = document.querySelector(".new-user-name ");
const lastName = document.querySelector(".last_name");
const email = document.querySelector(".email");
const passwordInfo = document.querySelector(".pass-info");
const forPassword = document.querySelector(".pass");
const forConfirmPassword = document.querySelector(".conf-pass");
const strongOrWeak = document.querySelector(".pass-note");
let phoneNumber = document.querySelector(".number");
let password = document.querySelector(".password");
let conformPassword = document.querySelector(".confirm-password");
let firstName = document.querySelector(".first_name");
let genRandomNumber = Math.floor(Math.random() * 1000 + 100);

password.addEventListener("input", () => {
  const value = password.value;

  const hasLower = /[a-z]/.test(value);
  const hasUpper = /[A-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecial = /[!@#$&*]/.test(value);

  if (hasLower && hasUpper && hasNumber && hasSpecial) {
    strongOrWeak.innerHTML = "STRONG PASSWORD";
    strongOrWeak.style.color = "darkgreen";
  } else {
    strongOrWeak.innerHTML = "WEAK PASSWORD";
    strongOrWeak.style.color = "red";
  }
});

forPassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    forPassword.classList.remove("fa-eye");
    forPassword.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    forPassword.classList.remove("fa-eye-slash");
    forPassword.classList.add("fa-eye");
  }
});

forConfirmPassword.addEventListener("click", () => {
  if (conformPassword.type === "password") {
    conformPassword.type = "text";
    forConfirmPassword.classList.remove("fa-eye");
    forConfirmPassword.classList.add("fa-eye-slash");
  } else {
    conformPassword.type = "password";
    forConfirmPassword.classList.remove("fa-eye-slash");
    forConfirmPassword.classList.add("fa-eye");
  }
});

createAccount.addEventListener("click", () => {
  formInfo.style.display = "none";
  userAccountInfo.style.display = "block";
  heading.style.display = "block";

  if (password.value.length > 8) {
    passwordInfo.innerHTML =
      "The length should not be greater than 8 characters!";
    passwordInfo.style.color = "red";
    userAccountInfo.style.display = "none";
    heading.style.display = "none";
    formInfo.style.display = "block";
  }

  if (password.value !== conformPassword.value) {
    passwordInfo.innerHTML = "Password does not match!";
    passwordInfo.style.color = "red";
    userAccountInfo.style.display = "none";
    heading.style.display = "none";
    formInfo.style.display = "block";
  }

  newUserName(firstName, userName);
  addCondition(firstName);
});

const addCondition = (firstName) => {
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    number.value === "" ||
    password.value === "" ||
    conformPassword === ""
  ) {
    alert("Please fill the following information!");
    userAccountInfo.style.display = "none";
    heading.style.display = "none";
    formInfo.style.display = "block";

    return;
  }
};

firstName.addEventListener("input", (e) => {
  firstName = e.target.value;
  newUserName(userName, firstName);
});

const newUserName = (userName, firstName) => {
  userName.innerHTML = firstName + "@" + genRandomNumber;
};

phoneNumber.addEventListener("input", () => {
  if (phoneNumber.value.length > 10) {
    phoneNumber.value = phoneNumber.value.slice(0, 10);
  }
});
