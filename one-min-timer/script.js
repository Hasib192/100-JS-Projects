let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let stopBtn = document.querySelector("#stop");

let timer = null;
// let startTime = null; // Variable to store the start time
let elapsedTime = 0; // Variable to store the elapsed time

startBtn.addEventListener("click", function () {
  if (timer != null) {
    clearInterval(timer);
    // startTime = new Date().getTime() - elapsedTime;
  }
  // else {
  //   // startTime = new Date().getTime() - (elapsedTime || 0);
  // }

  startTime = new Date().getTime() + 5_000;

  timer = setInterval(updateStopwatch, 10);

  function updateStopwatch() {
    let currentTime = new Date().getTime();
    elapsedTime = startTime - currentTime;
    
    if (currentTime == startTime) {
      clearInterval(timer);
    }

    // milliseconds
    let milliseconds = Math.floor(elapsedTime % 1000);

    // seconds
    let seconds = Math.floor(elapsedTime / 1000) % 60;

    // minutes
    let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;

    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(3, "0");

    document.getElementById("timer").innerHTML = `${m}:${s}:${ms}`;
  }
});

resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  // startTime = null;
  elapsedTime = 0;
  document.getElementById("timer").innerHTML = `00:00:000`;
});

stopBtn.addEventListener("click", function () {
  clearInterval(timer);
});
