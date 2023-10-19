let divElement = document.querySelector(".mail-info");
let span = document.querySelector(".mail-text");
let mailId = span.textContent;

divElement.addEventListener("click", function () {
  try {
    navigator.clipboard.writeText(mailId).then(
      function () {
        span.textContent = "Copied!";
        divElement.classList.add("success");
        setTimeout(function () {
          span.textContent = mailId;
          divElement.classList.remove("success");
        }, 1000);
        console.log("Copying to clipboard was successful!");
      },
      function (e) {
        span.textContent = "Couldn't copy, hit Ctrl + C!";
        divElement.classList.add("error");

        setTimeout(function () {
          span.textContent = mailId;
          divElement.classList.remove("error");
        }, 1000);
      }
    );
  } catch (e) {
    span.textContent = "Couldn't copy, hit Ctrl + C!";
    divElement.classList.add("error");

    setTimeout(function () {
      span.textContent = mailId;
      divElement.classList.remove("error");
    }, 1000);
  }
});
