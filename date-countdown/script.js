let submit = document.querySelector("#submit");
let input = document.querySelector("#datetime-local");
let hidden = document.querySelector(".hidden");

let currentDateTime = new Date().toISOString();
input.min = currentDateTime.slice(0, 16);

submit.addEventListener("click", function () {
  let endDate = new Date(input.value).getTime();

  setInterval(calcDate, 1000);

  hidden.classList.remove("hidden");

  function calcDate() {
    let today = new Date().getTime();

    // Calculate the time difference in milliseconds
    let timeDiff = endDate - today;

    // years
    let years = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));

    // months
    let months = Math.floor(timeDiff / (30 * 24 * 60 * 60 * 1000));

    // days
    let days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));

    // hours
    let hours = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

    // minutes
    let minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));

    // seconds
    let seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);

    // document.getElementById("demo").innerHTML = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";

    document.querySelector(".countdown-days").innerHTML = days;
    document.querySelector(".countdown-hours").innerHTML = hours;
    document.querySelector(".countdown-minutes").innerHTML = minutes;
    document.querySelector(".countdown-seconds").innerHTML = seconds;
  }
});
