$(document).ready(function () {
  $('.news-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: document.querySelector('.previous-arrow'),
    nextArrow: document.querySelector('.next-arrow')
  });

  $('.broker-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: false,
    prevArrow: document.querySelector('.brokers-arrow-up'),
    nextArrow: document.querySelector('.brokers-arrow-down')
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

function openPopup (popup) {
  popup.fadeIn(300);
}

function closePopup (popup) {
  popup.fadeOut(300);
}


// Слушатели

$('.intro-ad-button').click(() => {
  openPopup($('.refund-popup'))
});

$('.brokers-victim-link').click(() => {
  openPopup($('.refund-popup'))
});

$('.brokers-help-link').click(() => {
  openPopup($('.consult-popup'))
});

$('.refund-button').click((e) => {
  e.preventDefault();
  closePopup($('.refund-popup'))
  openPopup($('.questions-popup'))
});

$('.questions-button').click((e) => {
  e.preventDefault();
});

$('.consult-button').click((e) => {
  e.preventDefault();
});

$('.popup-close-btn').click(() => {
  closePopup($('.popup-bg'))
});