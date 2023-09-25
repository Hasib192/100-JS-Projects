const allBtn = document.querySelectorAll(".button");
const display = document.querySelector(".count");

allBtn.forEach((btn) => btn.addEventListener("click", counter));

let value = 0;
function counter(e) {
  let id = e.target.id;
  if (id === "increment") value += 1;
  else if (id === "decrement") value -= 1;
  else value = 0;

  display.innerHTML = value;
}
