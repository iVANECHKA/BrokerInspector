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