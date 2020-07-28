import './swiper-bundle.min.js';

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3.5,
    centeredSlides: true,
    spaceBetween: 16,
    slidesPerGroup: 3,
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