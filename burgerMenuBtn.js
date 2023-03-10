import { toggleClass } from "./function.js";

const cross = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");

cross.addEventListener("click", (e) => {
  e.preventDefault();
  cross.classList.toggle("opened");
  cross.setAttribute("aria-expanded", cross.classList.contains("opened"));
});

cross.addEventListener("click", () => {
  toggleClass(mobileMenu, "mobile__burger-menu-show");
});
