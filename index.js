const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header-logo');
const headerNumber = document.querySelector('.header-number');
const headerMail = document.querySelector('.header-mail');
const headerMenuLinks = document.querySelectorAll('.header-menu-link');
const headerIcons = Array.from(document.querySelectorAll('.header-icon'));
const headerMobileBtn = document.querySelector('.header-mobile-btn');


function lockScroll() {
  $html = $('html');
  $body = $('body');
  var initWidth = $body.outerWidth();
  var initHeight = $body.outerHeight();

  var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  ];
  $html.data('scroll-position', scrollPosition);
  $html.data('previous-overflow', $html.css('overflow'));
  $html.css('overflow', 'hidden');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);

  var marginR = $body.outerWidth() - initWidth;
  var marginB = $body.outerHeight() - initHeight;
  $body.css({ 'margin-right': marginR, 'margin-bottom': marginB });
}

function unlockScroll() {
  $html = $('html');
  $body = $('body');
  $html.css('overflow', $html.data('previous-overflow'));
  var scrollPosition = $html.data('scroll-position');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);

  $body.css({ 'margin-right': 0, 'margin-bottom': 0 });
}

function makeHeaderWhite() {
  header.classList.add('header-white');
  headerLogo.classList.add('header-logo-white');
  headerNumber.classList.add('header-number-white');
  headerMail.classList.add('header-mail-white');
  headerMobileBtn.classList.add('header-mobile-btn-white');
  headerMenuLinks.forEach((link) => {
    link.classList.add('header-menu-link-white');
  });


  document.querySelector('.header-viber').style.backgroundImage = 'url(./images/viber-dark.svg)';
  document.querySelector('.header-facebook').style.backgroundImage = 'url(./images/facebook-dark.svg)';
  document.querySelector('.header-vk').style.backgroundImage = 'url(./images/vk-dark.svg)';
  headerIcons.forEach((icon) => {
    if (icon.classList.contains('header-viber')) {

      icon.addEventListener('mouseenter', () => {
        icon.classList.add('header-viber-white-hover');
      })
      icon.addEventListener('mouseleave', () => {
        icon.classList.remove('header-viber-white-hover');
      })

    } else return;
  })
}

function makeHeaderBlack() {
  header.classList.remove('header-white');
  headerLogo.classList.remove('header-logo-white');
  headerNumber.classList.remove('header-number-white');
  headerMail.classList.remove('header-mail-white');
  headerMobileBtn.classList.remove('header-mobile-btn-white');
  headerMenuLinks.forEach((link) => {
    link.classList.remove('header-menu-link-white');
  });
  document.querySelector('.header-viber').style.backgroundImage = 'url(./images/viber.svg)';
  document.querySelector('.header-facebook').style.backgroundImage = 'url(./images/facebook.svg)';
  document.querySelector('.header-vk').style.backgroundImage = 'url(./images/vk.svg)';
}

// 2 состояния для шапки

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      makeHeaderBlack();

      return;
    }

    makeHeaderWhite();

  });
});

observer.observe(document.querySelector('.header-anchor'));


// Слайдеры


$(document).ready(function () {

  if ($(window).width() > 900) {

    $('.news-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: document.querySelector('.previous-arrow'),
      nextArrow: document.querySelector('.next-arrow')
    });

  } else {
    $('.news-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      dots: true,
      arrows: false
    });
  }

  if ($(window).width() > 900) {
    $('.review-slider').slick({


      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: false,
      prevArrow: document.querySelector('.feed-arrow-up-review'),
      nextArrow: document.querySelector('.feed-arrow-down-review')
    });
  } else {
    $('.review-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots: true,
      arrows: false
    });
  }

  if ($(window).width() > 900) {
    $('.overlook-slider').slick({


      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: false,
      prevArrow: document.querySelector('.feed-arrow-up-overlook'),
      nextArrow: document.querySelector('.feed-arrow-down-overlook')
    });
  } else {
    $('.overlook-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots: true,
      arrows: false
    });
  }

  // аккордеон

  $('.info-faq > div > .info-answer').hide();

  $('.info-faq > div').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".info-answer").slideUp();
    } else {
      $(".info-faq > div.active .info-answer").slideUp();
      $(".info-faq > div.active").removeClass("active");
      $(this).addClass("active").find(".info-answer").slideDown();
    }
    return false;
  });
});

// Грамотная анимация стрелок для аккордеона

const blocks = Array.from(document.querySelectorAll('.info-faq-block'));


blocks.forEach((block) => {

  block.addEventListener('click', () => {

    if (document.querySelector('.trans-active') && !block.querySelector('.trans-active')) {

      document.querySelector('.trans-active').classList.toggle('trans-active');
      block.querySelector('.info-faq-img').classList.toggle('trans-active');

    } else {

      block.querySelector('.info-faq-img').classList.toggle('trans-active');
    }
  })

})




// Плавный переход по якорю

$(function () {

  $('.link-faq').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#faq').offset().top }, 1000);
    e.preventDefault();
  });

});

$(function () {

  $('.link-info').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#info').offset().top }, 1000);
    e.preventDefault();
  });

});


// Селектор из попапа

$(".default_option").click(function () {
  $(this).parent().toggleClass("active");
});

$(".select_ul li").click(function () {
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
});

// Маска для ввода номера телефона

$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$(".tel-input").mask("+7 (h99) 999-99-99");


// Открытие/Закрытие попапа

function openPopup(popup) {
  popup.fadeIn(300);
}

function closePopup(popup) {
  popup.fadeOut(300);
}


// Слушатели



$('.intro-button').click(() => {
  openPopup($('.review-popup'))
});

$('.popup-close-btn').click(() => {
  closePopup($('.popup-bg'))
});

$('.review-button').click((e) => {
  e.preventDefault();
});


// Открытие/Закрытие мобильного меню
$('.header-mobile-btn').click(() => {

  if (!document.querySelector('.header-mobile-btn-active')) {
    $('.header-mobile-btn').addClass('header-mobile-btn-active');
    makeHeaderWhite();
    $('.mobile-header').slideDown(500);
    lockScroll();
  } else {
    $('.header-mobile-btn').removeClass('header-mobile-btn-active');
    // makeHeaderBlack();
    $('.mobile-header').slideUp(500);
    unlockScroll();
  }
})

$('.mobile-header-menu-item').click(() => {
  $('.header-mobile-btn').removeClass('header-mobile-btn-active');
  unlockScroll();
  $('.mobile-header').slideUp(500);
})

// Валидация

const checkInputValidity = (formElement, inputElement, validationSettings) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity('');
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
  } else {
    hideInputError(formElement, inputElement, validationSettings);
  }
};

const showInputError = (formElement, inputElement, errorMessage, validationSettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationSettings.inputError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSettings.inputErrorActive);
};

const hideInputError = (formElement, inputElement, validationSettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationSettings.inputError);
  errorElement.classList.remove(validationSettings.inputErrorActive);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement, validationSettings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationSettings.saveBtnInactive);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validationSettings.saveBtnInactive);
    buttonElement.disabled = false;
  }
}



const setEventListeners = (formElement, validationSettings) => {

  const inputList = Array.from(formElement.querySelectorAll(validationSettings.popupInput));
  const buttonElement = formElement.querySelector(validationSettings.saveBtn);

  toggleButtonState(inputList, buttonElement, validationSettings);

  formElement.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, validationSettings);
    }, 0);

  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationSettings);
      toggleButtonState(inputList, buttonElement, validationSettings);
    });
  });
};

const enableValidation = (validationSettings) => {
  const formList = Array.from(document.querySelectorAll(validationSettings.popupForm));
  formList.forEach((formElement) => {

    formList.forEach(formElement => {
      setEventListeners(formElement, validationSettings);
    })

  });
};

const validationSettings = {
  popupForm: '.popup-form',
  popupInput: '.popup-input',
  saveBtn: '.popup-button',
  saveBtnInactive: 'popup-button-inactive',
  inputError: 'popup-input-type-error',
  inputErrorActive: 'popup-input-error-active',
};

enableValidation(validationSettings);