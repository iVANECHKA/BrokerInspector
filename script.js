// 2 states for header

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const header = document.querySelector('.header');
    const headerLogo = document.querySelector('.header-logo');
    const headerNumber = document.querySelector('.header-number');
    const headerMail = document.querySelector('.header-mail');
    const headerMenuLinks = document.querySelectorAll('.header-menu-link');

    if (entry.isIntersecting) {
      header.classList.remove('header-white');
      headerLogo.classList.remove('header-logo-white');
      headerNumber.classList.remove('header-number-white');
      headerMail.classList.remove('header-mail-white');
      headerMenuLinks.forEach((link) => {
        link.classList.remove('header-menu-link-white');
      });
      document.querySelector('.header-viber').src = './images/viber.svg';
      document.querySelector('.header-facebook').src = './images/facebook.svg';
      document.querySelector('.header-vk').src = './images/vk.svg';
      document.querySelector('.header-arrow').src = './images/arrow-down-white.svg';
      return;
    }


    header.classList.add('header-white');
    headerLogo.classList.add('header-logo-white');
    headerNumber.classList.add('header-number-white');
    headerMail.classList.add('header-mail-white');
    headerMenuLinks.forEach((link) => {
      link.classList.add('header-menu-link-white');
    });
    document.querySelector('.header-viber').src = './images/viber-dark.svg';
    document.querySelector('.header-facebook').src = './images/facebook-dark.svg';
    document.querySelector('.header-vk').src = './images/vk-dark.svg';
    document.querySelector('.header-arrow').src = './images/arrow-down-header-black.svg';
  });
});

observer.observe(document.querySelector('.header-anchor'));

// Slider for news

window.addEventListener('load', function () {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: '.goBack',
      next: '.goForward'
    }
  })
})
