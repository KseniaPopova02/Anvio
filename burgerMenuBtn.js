import { toggleClass } from "./function.js";

//cross
const cross = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");

//region nav
const mobileRegionBtn = document.getElementById("mobileRegionNavLocation");
const mobileRegionContent = document.getElementById("mobileRegionContent");

//language nav
const languageBtn = document.getElementById("languageBtn");
const mobileLanguages = document.getElementById("mobileLanguages");

//mobile entertainments
const mobileEntertainments = document.getElementById("mobileEntertainments");
const mobileMenuEntertainments = document.getElementById(
  "mobileMenuEntertainments"
);

//mobile events
const mobileEvents = document.getElementById("mobileEvents");
const mobileEventsContent = document.getElementById("mobileEventsContent");

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

mobileRegionBtn.addEventListener("click", () => {
  toggleClass(mobileRegionBtn, "active__li");
});

//mobile language selection
languageBtn.addEventListener("click", () => {
  toggleClass(mobileLanguages, "mobile__language-show");
});

//mobile entertainments
mobileEntertainments.addEventListener("click", () => {
  toggleClass(mobileMenuEntertainments, "mobile__menu-entertainments-show");
});

mobileEntertainments.addEventListener("click", () => {
  toggleClass(mobileEntertainments, "active__li");
});

//mobile events
mobileEvents.addEventListener("click", () => {
  toggleClass(mobileEventsContent, "mobile__events-show");
});

mobileEvents.addEventListener("click", () => {
  toggleClass(mobileEvents, "active__li");
});
