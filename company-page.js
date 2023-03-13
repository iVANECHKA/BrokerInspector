$(document).ready(function () {
  $('.news-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: document.querySelector('.previous-arrow'),
    nextArrow: document.querySelector('.next-arrow')
  });

  $('.review-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    vertical: true,
    verticalSwiping: true,
    prevArrow: document.querySelector('.feed-arrow-up'),
    nextArrow: document.querySelector('.feed-arrow-down')
  });
});

const specDivides = Array.from(document.querySelectorAll('.feed-spec-divide'));


specDivides.forEach((divide) => {
  if (divide.parentElement.clientWidth < 585) {
    do {
      divide.textContent += '_';
    } while(divide.parentElement.clientWidth < 585)
  }
})



// Маска для ввода номера телефона

$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$(".tel-input").mask("+7 (h99) 999-99-99");


// Открытие/Закрытие попапа

function openPopup (popup) {
  popup.fadeIn(300);
}

function closePopup (popup) {
  popup.fadeOut(300);
}


// Слушатели

$('.feed-button-black').click(() => {
  openPopup($('.refund-popup'))
});

$('.feed-button-white').click(() => {
  openPopup($('.review-popup'))
});

$('.refund-button').click((e) => {
  e.preventDefault();
  closePopup($('.refund-popup'))
  openPopup($('.questions-popup'))
});

$('.questions-button').click((e) => {
  e.preventDefault();
});

$('.review-button').click((e) => {
  e.preventDefault();
});

$('.popup-close-btn').click(() => {
  closePopup($('.popup-bg'))
});


