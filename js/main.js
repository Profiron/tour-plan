const hotelSlider = new Swiper('.hotel-slider', {
   // Бесконечный режим прокрутки слайдов
   loop: true,

   // Скорость прокрутки
   speed: 1000,

   // Navigation arrows
   navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
   },

   // Переключение при помощи стрелок
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },

   //Автопрокрутка слайдов
   autoplay: {
      delay: 3000,
      // Отключить после ручного переключения
      disableOnInteraction: false
   }
})


const reviewsSlider = new Swiper('.reviews-slider', {
   // Бесконечный режим прокрутки слайдов
   loop: true,

   // Скорость прокрутки
   speed: 1500,

   //Параллакс на слайдер с отзывами
   parallax: true,

   // Navigation arrows
   navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
   },
   // Переключение при помощи стрелок
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   //Автопрокрутка слайдов
   autoplay: {
      delay: 3000,
      // Отключить после ручного переключения
      disableOnInteraction: false
   }
})