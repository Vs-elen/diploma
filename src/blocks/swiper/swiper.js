import './swiper-bundle.min.js';

export var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3.5,
  centeredSlides: true,
  spaceBetween: 16,
  slidesPerGroup: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    500: {
      slidesPerView: 2.2,
      slidesPerGroup: 2,
      spaceBetween: 8,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3.5,
      slidesPerGroup: 3,
      spaceBetween: 16
    }
  },
  init: false,
  loop: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});