document.addEventListener('DOMContentLoaded', () => {
  
  const swiperPartners = new Swiper('.js-articlesSlider ', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 24,
      draggable: true,
      autoplay: {
        delay: 10000,
      },
      navigation: {
        nextEl: '.swiper-button-next-articles',
        prevEl: '.swiper-button-prev-articles',
      }
  });  
});  
document.addEventListener('DOMContentLoaded', () => {
  
  const swiperPartners = new Swiper('.js-articlesSlider1 ', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 24,
      draggable: true,
      autoplay: {
        delay: 10000,
      },
      navigation: {
        nextEl: '.swiper-button-next-articles',
        prevEl: '.swiper-button-prev-articles',
      }
  });  
});  