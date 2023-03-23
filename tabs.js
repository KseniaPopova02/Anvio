const tabContent = document.getElementsByClassName("activities__tabs-content");
const tab = document.getElementsByClassName("activities__tabs-btn");
const tabsWrapper = document.getElementById("tabs");

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
