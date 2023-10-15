function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let placeholder = document.querySelector("#placeholder");
let rollBtn = document.querySelector("#rollBtn");
let resetBtn = document.querySelector("#resetBtn");

rollBtn.addEventListener("click", function () {
  const rndInt = randomIntFromInterval(1, 6);
  placeholder.textContent = rndInt;
});

resetBtn.addEventListener("click", function () {
  placeholder.textContent = "";
});
