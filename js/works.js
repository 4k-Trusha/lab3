var swiper = new Swiper('.works .swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.works .slider__numbers',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.works .slider__arrow--next',
    prevEl: '.works .slider__arrow--prev',
  },
});
