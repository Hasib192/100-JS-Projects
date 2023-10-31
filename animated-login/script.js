let password = document.querySelector("#password");
let btn = document.querySelector("button");

let defaultPassword = "12345";

let passwordMatch = false;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (passwordMatch) alert("Login successful");
});

password.addEventListener("keyup", function () {
  let str = this.value;
  if (str == defaultPassword) {
    btn.classList.remove("button-right", "button-left");
    btn.removeEventListener("mouseover", btnMove);
    passwordMatch = true;
  } else {
    btn.addEventListener("mouseover", btnMove);
  }
});

btn.addEventListener("mouseover", btnMove);

function btnMove() {
  //   let style = btn.style.float;
  //   if (style == "right") {
  //     btn.style.float = "left";
  //   } else {
  //     btn.style.float = "right";
  //   }

  if (btn.classList.contains("button-right")) {
    btn.classList.remove("button-right");
    btn.classList.add("button-left");
  } else {
    btn.classList.add("button-right");
    btn.classList.remove("button-left");
  }
}
