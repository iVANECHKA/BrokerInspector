// 2 состояния для шапки

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const header = document.querySelector('.header');
    const headerLogo = document.querySelector('.header-logo');
    const headerNumber = document.querySelector('.header-number');
    const headerMail = document.querySelector('.header-mail');
    const headerMenuLinks = document.querySelectorAll('.header-menu-link');
    const headerIcons = Array.from(document.querySelectorAll('.header-icon'));


    if (entry.isIntersecting) {
      header.classList.remove('header-white');
      headerLogo.classList.remove('header-logo-white');
      headerNumber.classList.remove('header-number-white');
      headerMail.classList.remove('header-mail-white');
      headerMenuLinks.forEach((link) => {
        link.classList.remove('header-menu-link-white');
      });
      document.querySelector('.header-viber').style.backgroundImage = 'url(./images/viber.svg)';
      document.querySelector('.header-facebook').style.backgroundImage = 'url(./images/facebook.svg)';
      document.querySelector('.header-vk').style.backgroundImage = 'url(./images/vk.svg)';

      return;
    }


    header.classList.add('header-white');
    headerLogo.classList.add('header-logo-white');
    headerNumber.classList.add('header-number-white');
    headerMail.classList.add('header-mail-white');
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
  });
});

observer.observe(document.querySelector('.header-anchor'));

// Слайдеры

$(document).ready(function () {
  $('.news-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: document.querySelector('.previous-arrow'),
    nextArrow: document.querySelector('.next-arrow')
  });


  $('.review-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: false,
    prevArrow: document.querySelector('.feed-arrow-up-review'),
    nextArrow: document.querySelector('.feed-arrow-down-review')
  });

  $('.overlook-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: false,
    prevArrow: document.querySelector('.feed-arrow-up-overlook'),
    nextArrow: document.querySelector('.feed-arrow-down-overlook')
  });

  // Аккордион

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


// const blockElement = document.querySelector('.info-faq-block');
// const blocks = Array.from(document.querySelectorAll('.info-faq-block'));
// const faqArrows = Array.from(document.querySelectorAll('.info-faq-img'));

// blocks.forEach((block) => {
//   block.addEventListener('click', (evt) => {
//     // if ((!evt.target.classList.contains('trans-active')) && faqArrows.some(e => e.classList.contains('trans-active'))) {
//     //   faqArrows.forEach((arrow) => {
//     //     arrow.classList.toggle('trans-active');
//     //   })
//     // } else {
//       block.querySelector('.info-faq-img').classList.toggle('trans-active');
//     // }
//   })
// })



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

function openPopup (popup) {
  popup.fadeIn(300);
}

function closePopup (popup) {
  popup.fadeOut(300);
}


// Слушатели

$('.intro-button').click(() => {
  openPopup($('.review-popup'))
});

$('.popup-close-btn').click(() => {
  closePopup($('.popup-bg'))
});