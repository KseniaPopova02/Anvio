const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper__arrow-next",
    prevEl: ".swiper__arrow-prev",
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".pag__2",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper__arrow-next",
    prevEl: ".swiper__arrow-prev",
  },
});
