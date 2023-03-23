const tabContent = document.getElementsByClassName("activities__tabs-content");
const tab = document.getElementsByClassName("activities__tabs-btn");
const tabsWrapper = document.getElementById("tabs");

const hideTabsContent = (array) => {
  for (let i = array; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tab[i].classList.remove("active__tab");
  }
};

const showTabsContent = (item) => {
  if (tabContent[item].classList.contains("hide")) {
    hideTabsContent(0);
    tab[item].classList.add("active__tab");
    tabContent[item].classList.remove("hide");
    tabContent[item].classList.add("show");
  }
};

tabsWrapper.addEventListener("click", (event) => {
  const target = event.target;
  if (target.className == "activities__tabs-btn") {
    for (let i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
});
