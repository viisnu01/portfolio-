
window.addEventListener('scroll', () => {
  const links = document.querySelectorAll('.nav-link');
  let fromTop = window.scrollY + 100;
  links.forEach(link => {
    if(link.hash){
      let section = document.querySelector(link.hash);
      if(section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});
