const preloader = document.getElementById("pagePreloader");
const removePreloader = () => {
  setTimeout(() => {
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 1000);
};
