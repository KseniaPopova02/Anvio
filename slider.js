const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper__pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper__arrow-next",
    prevEl: ".swiper__arrow-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
