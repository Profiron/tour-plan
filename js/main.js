$(document).ready(function () {
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
      delay: 5000,
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
    //Авто высота слайдера
    autoHeight: true,
    spaceBetween: 20,
  })

  //Меню в мобильной версии
  var menuButton = $(".menu-button")
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass('navbar-bottom--visible')

  })

  //Модальное окно
  var modalButton = $('[data-toggle=modal]')
  var closeModalButton = $(".modal__close")
  modalButton.on("click", openModal)
  closeModalButton.on("click", closeModal)

  // Открытие модельного окна 
  function openModal() {
    var targetModal = $(this).attr('data-href')
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible')
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible')
  }

  // Закрытие модельного окна 
  function closeModal(event) {
    event.preventDefault()
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
  }

  //Закрытие модельного окна с помощью клавиши Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      e.preventDefault()
      var modalOverlay = $('.modal__overlay')
      var modalDialog = $('.modal__dialog')
      modalOverlay.removeClass('modal__overlay--visible')
      modalDialog.removeClass('modal__dialog--visible')
    }
  })

  //Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        //Имя
        name: {
          required: "Enter your full Name",
          minlength: "Minimum number of characters 2",
        },
        feedbackName: {
          required: "Enter your full Name",
          minlength: "Minimum number of characters 2",
        },
        bookingName: {
          required: "Enter your full Name",
          minlength: "Minimum number of characters 2",
        },
        //Телефон
        phone: {
          required: "Enter your phone",
          minlength: "Enter format +7 (999) 999-99-99",
        },
        feedbackPhone: {
          required: "Enter your phone",
          minlength: "Enter format +7 (999) 999-99-99",
        },
        bookingPhone: {
          required: "Enter your phone",
          minlength: "Enter format +7 (999) 999-99-99",
        },
        //e-mail
        email: {
          required: "Enter your e-mail",
          email: "Enter the correct address in the format name@domain.com",
        },
        feedbackEmail: {
          required: "Enter your e-mail",
          email: "Enter the correct address in the format name@domain.com",
        },
        bookingEmail: {
          required: "Enter your e-mail",
          email: "Enter the correct address in the format name@domain.com",
        },
        //Сообщение
        message: {
          required: "Enter your message",
        },
        feedbackMessage: {
          required: "Enter your message",
        },
        bookingMessage: {
          required: "Enter your message",
        },
      },
    });

    $(".subscribe").validate({
      errorClass: "subscribe-invalid",
      messages: {
        //Подписка
        subs: {
          required: "Enter your e-mail address",
        },
      },
    });
  })

  // Маска для телефона
  $(".phone").mask("+7 (000) 000-00-00");

  //Инициализация AOS 
  AOS.init();

  //Загрузка карты при наведении мыши
  let map = document.getElementById('map');
  let options_map = {
    once: true,
    passive: true,
    capture: true
  };
  map.addEventListener('click', start_lazy_map, options_map);
  map.addEventListener('mouseover', start_lazy_map, options_map);
  map.addEventListener('touchstart', start_lazy_map, options_map);
  map.addEventListener('touchmove', start_lazy_map, options_map);
  let map_loaded = false;
  function start_lazy_map() {
    if (!map_loaded) {
      let map_block = document.getElementById('ymap_lazy');
      map_loaded = true;
      map_block.setAttribute('src', map_block.getAttribute('data-src'));
      map_block.removeAttribute('data_src');
      console.log('YMAP LOADED');
    }
  }
  
})