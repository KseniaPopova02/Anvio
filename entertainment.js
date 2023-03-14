import { toggleClass } from "./function.js";

const headerEntertainments = document.getElementById("headerEntertainments");
const headerEntertainmentsContent = document.querySelectorAll(
  ".header__entertainments-content"
);
const nestedLi = document.getElementById("entertainmentNestedLi");
const nestedSvg = document.getElementById("entertainmentNestedSvg");

//showing block of entertainments
nestedLi.addEventListener("click", () => {
  toggleClass(headerEntertainments, "header__entertainments-bg-show");
});

nestedSvg.addEventListener("click", () => {
  toggleClass(headerEntertainments, "header__entertainments-bg-show");
});

//showing content of block with entertainments
nestedLi.addEventListener("click", () => {
  headerEntertainmentsContent.forEach((element) => {
    toggleClass(element, "header__entertainments-content-show");
  });
});

nestedSvg.addEventListener("click", () => {
  headerEntertainmentsContent.forEach((element) => {
    toggleClass(element, "header__entertainments-content-show");
  });
});

//hiding block of entertainments if you click outside of it
window.addEventListener("click", (e) => {
  const path = e.composedPath().includes(nestedLi);

  if (!path) {
    headerEntertainments.classList.remove("header__entertainments-bg-show");
    headerEntertainmentsContent.forEach((element) => {
      element.classList.remove("header__entertainments-content-show");
    });
    nestedLi.classList.remove("active__li");
    nestedSvg.classList.remove("active__li");
  }
});

//change color of active link
nestedLi.addEventListener("click", () => {
  toggleClass(nestedLi, "active__li");
});
nestedSvg.addEventListener("click", () => {
  toggleClass(nestedLi, "active__li");
});
