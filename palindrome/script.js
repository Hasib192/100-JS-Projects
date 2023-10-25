let submitBtn = document.querySelector(".submit");

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters
  const reverseStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reverseStr;
}

submitBtn.addEventListener("click", function () {
  const inputElement = document.querySelector(".input");
  const outputElement = document.getElementById("output");
  const inputValue = inputElement.value.trim();

  if (inputValue.length > 0) {
    if (isPalindrome(inputValue)) {
      outputElement.innerHTML = `${inputValue} is a palindrome`;
    } else {
      outputElement.innerHTML = `${inputValue} is not a palindrome`;
    }
    outputElement.style.opacity = 1;
  }
});
