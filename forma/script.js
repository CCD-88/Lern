const form = document.querySelector("#form");

const inputEmail = document.querySelector("#email");
const lbEmail = document.querySelector("#lb-email");
const errEmail = document.querySelector("#error-email");
const starEmail = document.querySelector("#star-email");

const password = document.querySelector("#password");
const lbPass = document.querySelector("#lb-pass");
const errPass = document.querySelector("#error-password");
const starPass = document.querySelector("#star-password");

const realCbx = document.querySelector(".real-checkbox");
const checkbox = document.querySelector("#custom-checkbox");
const starCbx = document.querySelector("#star-cbx");
const errCbx = document.querySelector("#error-cbx");

const button = document.querySelector("#button");

const re =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu; //Регулярное выражение на валидацию Эмейла

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function isEmailValid(value) {
  return re.test(String(value).toLowerCase());
}

const user = {}

function onInput() {
  let emptyInput = "";
  emptyInput = inputEmail.value.length;

  if (isEmailValid(inputEmail.value) === false) {
    errEmail.style.display = "block";
    errEmail.textContent = "Email не валидный";
    lbEmail.style.color = "#CB2424";
    starEmail.style.color = "#CB2424";
    inputEmail.style.border = "2px solid #CB2424";
  } else {
    errEmail.style.display = "none";
    errEmail.textContent = "";
    lbEmail.style.color = "#787878";
    starEmail.style.color = "#787878";
    inputEmail.style.border = "2px solid #62eb1ed6";
    localStorage.setItem("emailOne", inputEmail.value);
  }

  if (emptyInput === 0) {
    errEmail.style.display = "block";
    errEmail.textContent = "Поле обязательно для заполнения ";
    lbEmail.style.color = "#CB2424";
    starEmail.style.color = "#CB2424";
    inputEmail.style.border = "2px solid #CB2424";
  }
}

// Password
let passResult = "";

function passCheck() {
  password.addEventListener("input", (event) => {
    passResult = event.target.value;
  });
  if (passResult.length === 0) {
    errPass.style.display = "block";
    lbPass.style.color = "#CB2424";
    starPass.style.color = "#CB2424";
    password.style.border = "2px solid #CB2424";
  } else if (passResult.length <= 7) {
    errPass.textContent = "Пароль должен содержать как минимум 8 символов ";
  } else {
    errPass.style.display = "none";
    lbPass.style.color = "#787878";
    starPass.style.color = "#787878";
    password.style.border = "2px solid #62eb1ed6";
    localStorage.setItem("passwordOne", passResult);
  }
}

//Checkbox
function chekCheckBox() {
  if (!realCbx.checked) {
    checkbox.style.border = "2px solid #CB2424";
    starCbx.style.color = "#CB2424";
    errCbx.style.display = "block";
  } else {
    checkbox.style.border = "2px solid #62eb1ed6";
    starCbx.style.color = "#787878";
    errCbx.style.display = "none";
  }
}

button.addEventListener("click", function () {
  //   event.preventDefault();
  onInput();
  passCheck();
  chekCheckBox();
});
