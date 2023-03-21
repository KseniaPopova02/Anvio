const cube = document.getElementById("cube1");
const arena = document.getElementById("arena1");

//I don't know if I can name functions like this
const changeClassIfWindowIsSmaller861 = (
  element,
  classNameToAdd,
  classNameToRemove
) => {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 861) {
      element.classList.add(classNameToAdd);
      element.classList.remove(classNameToRemove);
    } else {
      element.classList.add(classNameToRemove);
      element.classList.remove(classNameToAdd);
    }
  });
};

changeClassIfWindowIsSmaller861(cube, "top__angle-left", "bottom__angle-left");
changeClassIfWindowIsSmaller861(arena, "top__angle-left", "bottom__angle-left");
