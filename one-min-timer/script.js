let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let stopBtn = document.querySelector("#stop");

let timer = null;
let startTime = null; // Variable to store the start time
let elapsedTime = 0; // Variable to store the elapsed time

const timeInSecond = 60_000;

startBtn.addEventListener("click", function () {
  if (timer != null) {
    clearInterval(timer);
    startTime = new Date().getTime() + elapsedTime;
    // elapsedTime = startTime - new Date().getTime();
  } else {
    startTime = new Date().getTime() + timeInSecond;
  }

  timer = setInterval(updateStopwatch, 10);

  function updateStopwatch() {
    let currentTime = new Date().getTime();
    elapsedTime = Math.max(0, startTime - currentTime);

    if (elapsedTime <= 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = `00:00:000`;

      // creating and playing audio element
      let audio = document.createElement("audio");
      let audioSource = document.createElement("source");
      document.body.prepend(audio);
      audio.append(audioSource);
      audioSource.src = "./assets/audio/bell.wav";
      document.querySelector("audio").play();
    } else {
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
  }
});

resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  startTime = null;
  elapsedTime = 0;
  document.getElementById("timer").innerHTML = `01:00:000`;
});

stopBtn.addEventListener("click", function () {
  clearInterval(timer);
});
