const swiperAbout = new Swiper('.about__swiper', {
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.about-swiper__pagination',
    dynamicBullets: true,
    dynamicMainBullets: 1,
    clickable: true,
    slidesPerGroup: 3,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  rewind: true,
})
