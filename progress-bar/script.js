function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const rndInt = randomIntFromInterval(1, 99);

function progressWithoutValue(i) {
  let progress = document.querySelector(".progress");
  let intervalID = setInterval(move, 20);
  function move() {
    if (i >= 100) {
      clearInterval(intervalID);
    } else {
      i++;
      progress.style.width = i + "%";
    }
  }
}

function progressWithValue(i) {
  let progress = document.querySelector(".progress-value");
  let intervalID = setInterval(move, 20);
  function move() {
    if (i >= 100) {
      clearInterval(intervalID);
    } else {
      i++;
      progress.style.width = i + "%";
      progress.textContent = i + "%";
    }
  }
}
