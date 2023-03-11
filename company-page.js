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


