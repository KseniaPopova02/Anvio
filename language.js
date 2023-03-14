import { toggleClass } from "./function.js";

const languageBtn = document.getElementById("languageBtn");
const headerLanguage = document.getElementById("headerLanguage");
const nestedLi = document.getElementById("languageNestedLi");

//showing block of languages
languageBtn.addEventListener("click", () => {
  toggleClass(headerLanguage, "header__language-show");
});

//hiding block of languages if you click outside of it
window.addEventListener("click", (e) => {
  const path = e.composedPath().includes(nestedLi);

  if (!path) {
    headerLanguage.classList.remove("header__language-show");
    nestedLi.classList.remove("active__li");
  }
});

//change color of active link
nestedLi.addEventListener("click", () => {
  toggleClass(nestedLi, "active__li");
});

//I also want to do clickable language options
