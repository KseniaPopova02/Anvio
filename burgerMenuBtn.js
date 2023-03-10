import { toggleClass } from "./function.js";

const cross = document.getElementById("burgerButton");
const body = document.getElementById("body");
// const crossWrapper = getElementById("buttonWrapper");

cross.addEventListener("click", (e) => {
  e.preventDefault();
  cross.classList.toggle("opened");
  cross.setAttribute("aria-expanded", cross.classList.contains("opened"));
});

cross.addEventListener("click", () => {
  toggleClass(body, "menu__open");
});
