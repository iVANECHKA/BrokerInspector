$(document).ready(function () {
  $('.news-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: document.querySelector('.previous-arrow'),
    nextArrow: document.querySelector('.next-arrow')
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


