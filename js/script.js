const logo = document.getElementById('logo');
const menu = document.getElementById('menu');
const menuShow = document.getElementById('menu-show');
const mainBody = document.getElementById('main');
const menuClose = document.getElementById('menu-close');
const menuList = document.querySelectorAll('.menu-item');

const openMenu = () => {
  menuShow.classList.add('show-menu');
  logo.classList.add('blur-filter');
  menu.classList.add('blur-filter');
  mainBody.classList.add('blur-filter');
};

const closeMenu = () => {
  menuShow.classList.remove('show-menu');
  logo.classList.remove('blur-filter');
  menu.classList.remove('blur-filter');
  mainBody.classList.remove('blur-filter');
};

menu.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);

menuList.forEach((item) => {
  item.addEventListener('click', closeMenu);
});