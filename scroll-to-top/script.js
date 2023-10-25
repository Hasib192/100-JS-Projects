let btn = document.querySelector("button");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    btn.style.display = "block";
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    btn.style.display = "none";
  }
});
