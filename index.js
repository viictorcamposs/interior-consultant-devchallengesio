const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navbar = document.getElementById('navbar');
const navbarLinks = document.getElementById('navbarLinks');

openMenu.addEventListener('click', () => {
  navbar.style.top = '0%';
  setTimeout(() => {
    navbarLinks.style.opacity = 1; 
    closeMenu.style.opacity = 1;   
  }, 800);
});

closeMenu.addEventListener('click', () => {
  navbar.style.top = '-100%';
  navbarLinks.style.opacity = 0;
  closeMenu.style.opacity = 0;
});