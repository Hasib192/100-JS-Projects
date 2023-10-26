let outputPassword = document.getElementById("outputPassword");

let lengthInput = document.getElementById("lengthInput");
let upCheckbox = document.getElementById("uppercaseCheckbox");
let numCheckbox = document.getElementById("numberCheckbox");
let symbolCheckbox = document.getElementById("symbolChecbox");

let btn = document.getElementById("submit");

const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()_-+=<>?";

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let l = parseInt(lengthInput.value);

  let characters = lowerCharacters;
  if (upCheckbox.checked) {
    characters += upperCharacters;
  }
  if (numCheckbox.checked) {
    characters += numberCharacters;
  }
  if (symbolCheckbox.checked) {
    characters += symbolCharacters;
  }

  let result = "";
  for (let i = 0; i < l; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  outputPassword.value = result;
});
