document.addEventListener('DOMContentLoaded', () => {
  
  const swiperPartners = new Swiper('.js-articlesSlider ', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
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
  
  const swiperPartners = new Swiper('.js-articlesSlider-mobile ', {
      direction: 'horizontal',
      slidesPerView: '1',
      centeredSlides: true,
      centeredSlidesBounds: true,
      loop: true,
      spaceBetween: 0,
      allowTouchMove: true,
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
  
  const swiperPartners = new Swiper('.js-articlesSlider1', {
    direction: 'horizontal',
    slidesPerView: '3',
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