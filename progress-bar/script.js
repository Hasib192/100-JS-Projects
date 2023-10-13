function barWithoutValue(i) {
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

function barWithValue(i) {
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

function circleWithoutValue(i) {
  let progress = document.querySelector(".circle-progress-bar");
  let intervalID = setInterval(move, 20);

  function move() {
    if (i >= 100) {
      clearInterval(intervalID);
    } else {
      i++;
      progress.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#ff69b4 ${i}%, pink 0)`;
    }
  }
}

function circleWithValue(i) {
  let progress = document.querySelector(".circle-progress-bar-value");
  let intervalID = setInterval(move, 20);

  function move() {
    if (i >= 100) {
      clearInterval(intervalID);
    } else {
      i++;
      progress.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#ff69b4 ${i}%, pink 0)`;
      progress.style.setProperty("--before-content", `'${i}%'`);
    }
  }
}
