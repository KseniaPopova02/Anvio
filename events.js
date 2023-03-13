import { toggleClass } from "./function.js";

const headerEvents = document.getElementById("headerEvents");
const nestedLi = document.getElementById("eventsNestedLi");
const arrowEvents = document.getElementById("arrowEvents");

//showing content of event's block
nestedLi.addEventListener("click", () => {
  toggleClass(headerEvents, "header__events-bg-show");
});

arrowEvents.addEventListener("click", () => {
  toggleClass(headerEvents, "header__events-bg-show");
});

//hiding block of events if you click outside of it
window.addEventListener("click", (e) => {
  {
    const path = e.composedPath().includes(nestedLi);
    if (!path) {
      headerEvents.classList.remove("header__events-bg-show");
      nestedLi.classList.remove("active__li");
    }
  }
});

//change color of active link
nestedLi.addEventListener("click", () => {
  toggleClass(nestedLi, "active__li");
});
