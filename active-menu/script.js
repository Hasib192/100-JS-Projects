let menuItems = document.querySelectorAll("a");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    for (let j = 0; j < menuItems.length; j++) {
      if (menuItems[j] == this) {
        this.classList.add("active");
      } else {
        menuItems[j].classList.remove("active");
      }
    }
  });
}
