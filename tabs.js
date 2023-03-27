const tabContent = document.getElementsByClassName("activities__tabs-content");
const tab = document.getElementsByClassName("activities__tabs-btn");
const tabsWrapper = document.getElementById("tabs");
const tabsMobile = document.getElementsByClassName("tabs__mobile-btn");
const tabsMobileWrapper = document.getElementById("tabsMobileWrapper");
const tabsMobileContent = document.getElementsByClassName(
  "mobile__tabs-content"
);
const arrowDiv = document.getElementsByClassName("activities__arrow-svg");
const arrowSvg = document.getElementsByClassName("arrow__svg");
const hideTabsContent = (num) => {
  for (let i = num; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tab[i].classList.remove("active__tab");
  }
};

const showTabsContent = (num) => {
  if (tabContent[num].classList.contains("hide")) {
    hideTabsContent(0);
    tab[num].classList.add("active__tab");
    tabContent[num].classList.remove("hide");
    tabContent[num].classList.add("show");
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

const showMobileTabsContent = (num) => {
  tabsMobileContent[num].classList.toggle("mobile__tabs-content-show");
  tabsMobile[num].classList.toggle("activities__mobile-tabs-active");
  arrowDiv[num].classList.toggle("active__div-svg");
  arrowSvg[num].classList.toggle("active__svg");
};

tabsMobileWrapper.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target.className == "tabs__mobile-btn" ||
    "tabs__mobile-btn activities__mobile-tabs-active"
  ) {
    for (let i = 0; i < tabsMobile.length; i++) {
      if (target == tabsMobile[i]) {
        showMobileTabsContent(i);
        break;
      }
    }
  }
});
