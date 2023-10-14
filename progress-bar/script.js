function moveBar(i) {
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

function moveBarValue(i) {
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

function moveCircularBar(i) {
  let progress = document.querySelector(".circle-progress-bar");
  let intervalID = setInterval(move, 20);

  function move() {
    if (i >= 100) {
      clearInterval(intervalID);
    } else {
      i++;
      progress.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#43A6C6 ${i}%, rgba(0, 0, 0, 0.075) 0)`;
    }
  }
}

function moveCircularBarValue(i) {
  let progress = document.querySelector(".circle-progress-bar-value");
  let intervalID = setInterval(move, 20);

  function move() {
    if (i >= 100) {
      clearInterval(intervalID);
    } else {
      i++;
      progress.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#43A6C6 ${i}%, rgba(0, 0, 0, 0.075) 0)`;
      progress.style.setProperty("--before-content", `'${i}%'`);
    }
  }
}
