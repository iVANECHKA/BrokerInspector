const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const header = document.querySelector('.header');
  
      if (entry.isIntersecting) {
        header.classList.add('header-black');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      header.classList.remove('header-black');
    });
  });
  
  observer.observe(document.querySelector('.feed-show-all-link'));
