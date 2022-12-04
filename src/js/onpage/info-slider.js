document.addEventListener('DOMContentLoaded', () => {
    const swiperInfoNav = new Swiper('.js-infoSliderNav', {
        direction: 'horizontal',
        slidesPerView: '3',
        spaceBetween: 17,
        loop: true, 
    });
    const swiperInfo = new Swiper('.js-infoSlider', {
        direction: 'horizontal',
        slidesPerView: '1',
        loop: true,
        draggable: true,
        navigation: {
          nextEl: '.swiper-button-next-information',
          prevEl: '.swiper-button-prev-information',
        },
        //thumbs: {
          //swiper: swiperInfoNav,
        //},
        pagination: {
          el: '.swiper-pagination-information',
          dynamicMainBullets: 3,
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          992: {
            effect: 'fade',
            slidesPerView: '1',
            fadeEffect: {
              crossFade: true
            },
          }
        }
    });
  })