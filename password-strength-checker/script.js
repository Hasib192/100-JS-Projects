let password = document.getElementById("password");
let passwordBtn = document.getElementById("show-hide-button");

passwordBtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    passwordBtn.textContent = "Hide";
  } else {
    password.type = "password";
    passwordBtn.textContent = "Show";
  }
});

// let progressbar = document.getElementById("password-strength");
let result = document.getElementById("result");

password.addEventListener("keyup", function (e) {
  let strength = "";
  let str = password.value;

  let upperCase = false;
  let lowerCase = false;
  let number = false;
  let symbol = false;

  if (str.match(/[a-z]+/)) {
    lowerCase = true;
  }
  if (str.match(/[A-Z]+/)) {
    upperCase = true;
  }
  if (str.match(/[0-9]+/)) {
    number = true;
  }
  if (str.match(/[!,%,&,@,#,$,^,*,?,_,~]+/)) {
    symbol = true;
  }

  if (lowerCase && upperCase && number && symbol && str.length > 8) {
    result.textContent = "strong";
    result.classList.add("success");
    result.classList.remove("warning", "danger");
  } else if (((lowerCase || upperCase) && number && symbol) || str.length > 8) {
    result.textContent = "medium";
    result.classList.add("warning");
    result.classList.remove("success", "danger");
  } else if (lowerCase || upperCase || number || symbol) {
    result.textContent = "weak";
    result.classList.add("danger");
    result.classList.remove("success", "warning");
  } else {
    result.textContent = "";
    result.classList.remove("danger", "success", "warning");
  }
});
