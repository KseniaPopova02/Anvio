import { toggleClass } from "./function.js";

const locationButton = document.getElementById("location");
const headerLocation = document.getElementById("headerLocation");
const nestedLi = document.getElementById("locationNestedLi");

//showing bg of location menu
locationButton.addEventListener("click", () => {
  toggleClass(headerLocation, "header__location-show");
});

//hiding block of entertainments if you click outside of it
window.addEventListener("click", (e) => {
  {
    const path = e.composedPath().includes(nestedLi);

    if (!path) {
      headerLocation.classList.remove("header__location-show");
      nestedLi.classList.remove("active__li");
    }
  }
});

nestedLi.addEventListener("click", () => {
  toggleClass(nestedLi, "active__li");
});
