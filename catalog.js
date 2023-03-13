$(document).ready(function () {
  $('.news-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: document.querySelector('.previous-arrow'),
    nextArrow: document.querySelector('.next-arrow')
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
  openPopup($('.consult-popup'))
});

$('.popup-close-btn').click(() => {
  closePopup($('.popup-bg'))
});

$('.consult-button').click((e) => {
  e.preventDefault()
});