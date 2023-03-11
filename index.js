// 2 states for header

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
      document.querySelector('.header-viber').style.backgroundImage = 'url(../images/viber.svg)';
      document.querySelector('.header-facebook').style.backgroundImage = 'url(../images/facebook.svg)';
      document.querySelector('.header-vk').style.backgroundImage = 'url(../images/vk.svg)';

      return;
    }


    header.classList.add('header-white');
    headerLogo.classList.add('header-logo-white');
    headerNumber.classList.add('header-number-white');
    headerMail.classList.add('header-mail-white');
    headerMenuLinks.forEach((link) => {
      link.classList.add('header-menu-link-white');
    });
    document.querySelector('.header-viber').style.backgroundImage = 'url(../images/viber-dark.svg)';
    document.querySelector('.header-facebook').style.backgroundImage = 'url(../images/facebook-dark.svg)';
    document.querySelector('.header-vk').style.backgroundImage = 'url(../images/vk-dark.svg)';
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

const blocks = Array.from(document.querySelectorAll('.info-faq-block'));

blocks.forEach((block) => {
  block.addEventListener('click', () => {
    block.querySelector('.info-faq-img').classList.toggle('trans-active');
  })
})

$(function(){

  $('.link-faq').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#faq').offset().top }, 1000);
    e.preventDefault();
  });
  
  });

  $(function(){

    $('.link-info').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#info').offset().top }, 1000);
      e.preventDefault();
    });
    
    });

