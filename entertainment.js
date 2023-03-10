import { toggleClass } from "./function.js";
// import { removeClass } from "./function.js";

const entertainmentButton = document.getElementById("entertainments");
const headerEntertainments = document.getElementById("headerEntertainments");
const headerEntertainmentsContent = document.querySelectorAll(
  ".header__entertainments-content"
);
const nestedLi = document.getElementById("entertainmentNestedLi");
const arrowBtn = document.getElementById("entertainmentsSvg");

//showing bg of block with entertainments
entertainmentButton.addEventListener("click", () => {
  toggleClass(headerEntertainments, "header__entertainments-bg-show");
});

//showing content of block with entertainments
entertainmentButton.addEventListener("click", () => {
  headerEntertainmentsContent.forEach((element) => {
    toggleClass(element, "header__entertainments-content-show");
  });
});

//hiding block of entertainments if you click outside of it
window.addEventListener("click", (e) => {
  {
    const path =
      e.composedPath().includes(nestedLi) ||
      e.composedPath().includes(arrowBtn);
    if (!path) {
      headerEntertainments.classList.remove("header__entertainments-bg-show");
      headerEntertainmentsContent.forEach((element) => {
        element.classList.remove("header__entertainments-content-show");
      });
      nestedLi.classList.remove("active__li");
    }
  }
});

//change color of active link

nestedLi.addEventListener("click", () => {
  toggleClass(nestedLi, "active__li");
});
