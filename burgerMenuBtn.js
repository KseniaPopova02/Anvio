import { toggleClass } from "./function.js";

//cross
const cross = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");

//overlay
const overlay = document.getElementById("overlay");
const overlayLocation = document.getElementById("overlay2");

//region nav
const mobileRegionBtn = document.getElementById("mobileRegionNavLocation");
const mobileRegionContent = document.getElementById("mobileRegionContent");

//language nav
const languageBtn = document.getElementById("languageBtn");
const mobileLanguages = document.getElementById("mobileLanguages");

//mobile subtract
const mobileSubtract = document.getElementById("mobileSubtract");
const mobileMenuLocation = document.getElementById("mobileMenuLocation");
const htmlTag = document.getElementsByTagName("html");

//mobile entertainments
const mobileEntertainments = document.getElementById("mobileEntertainments");
const mobileMenuEntertainments = document.getElementById(
  "mobileMenuEntertainments"
);

//mobile events
const mobileEvents = document.getElementById("mobileEvents");
const mobileEventsContent = document.getElementById("mobileEventsContent");

//mobile wrappers
const locationMenuWrapper = document.getElementById("locationMenuWrapper");
const MenuWrapper = document.getElementById("MenuWrapper");

//open and close animation
cross.addEventListener("click", (e) => {
  e.preventDefault();
  toggleClass(cross, "opened");
  cross.setAttribute("aria-expanded", cross.classList.contains("opened"));
  toggleClass(mobileMenu, "mobile__burger-menu-show");
  toggleClass(overlay, "mobile__burger-overlay");
  toggleClass(body, "no__scroll");
});

//mobile region nav selection animation
mobileRegionBtn.addEventListener("click", () => {
  toggleClass(mobileRegionContent, "mobile__region-location-show");
  toggleClass(mobileRegionBtn, "active__li");
});

//mobile language selection
languageBtn.addEventListener("click", () => {
  toggleClass(mobileLanguages, "mobile__language-show");
});

//mobile entertainments
mobileEntertainments.addEventListener("click", () => {
  toggleClass(mobileMenuEntertainments, "mobile__menu-entertainments-show");
  toggleClass(mobileEntertainments, "active__li");
});

//mobile events
mobileEvents.addEventListener("click", () => {
  toggleClass(mobileEventsContent, "mobile__events-show");
  toggleClass(mobileEvents, "active__li");
});

//mobile location
mobileSubtract.addEventListener("click", () => {
  toggleClass(mobileMenuLocation, "mobile__burger-menu-show");
  toggleClass(overlayLocation, "mobile__burger-overlay2");
  toggleClass(body, "no__scroll2");
});

// hide menu
window.addEventListener("click", (e) => {
  {
    const path = e.target;
    if (
      !path.closest(".mobile__burger-menu") &&
      !path.closest(".burger__button")
    ) {
      mobileMenu.classList.remove("mobile__burger-menu-show");
      cross.classList.remove("opened");
      overlay.classList.remove("mobile__burger-overlay");
      body.classList.remove("no__scroll");
    }
  }
});

window.addEventListener("click", (e) => {
  {
    const path = e.target;
    if (
      !path.closest(".mobile__subtract") &&
      !path.closest("#mobileMenuLocation")
    ) {
      mobileMenuLocation.classList.remove("mobile__burger-menu-show");
      overlayLocation.classList.remove("mobile__burger-overlay2");
      body.classList.remove("no__scroll2");
    }
  }
});

//change height depending on screen height
if (innerWidth < 377) {
  locationMenuWrapper.style.height = `${innerHeight - 100}px`;
  MenuWrapper.style.height = `${innerHeight - 100}px`;
}
