const burgerBtn = document.querySelector('.burger-button');
const navigationLinks = document.querySelector('.navigation-links')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active-burger');
  navigationLinks.classList.toggle('active-navigation');
  if (burgerBtn.classList.contains('active-burger')) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
})