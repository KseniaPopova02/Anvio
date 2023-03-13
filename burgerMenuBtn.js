import { toggleClass } from "./function.js";

//cross
const cross = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");
//region nav
const mobileRegionBtn = document.getElementById("mobileRegionNavLocation");
const mobileRegionContent = document.getElementById("mobileRegionContent");

//open and close animation
cross.addEventListener("click", (e) => {
  e.preventDefault();
  cross.classList.toggle("opened");
  cross.setAttribute("aria-expanded", cross.classList.contains("opened"));
});

cross.addEventListener("click", () => {
  toggleClass(mobileMenu, "mobile__burger-menu-show");
});

//mobile region nav selection animation
mobileRegionBtn.addEventListener("click", () => {
  toggleClass(mobileRegionContent, "mobile__region-location-show");
});
