const menuButton = document.querySelector('.burger-menu-button');
const menu = document.querySelector('.menu');
const subMenu = menu.querySelector('.menu__dropdown-content');
const extendableLink = menu.querySelector('.menu__link_extendable');
const linkList = menu.querySelectorAll('.menu__link');
const headerLogo = document.querySelector('.header__logo');




menuButton.addEventListener('click', () => {
  menu.classList.toggle('invisible');
  menuButton.classList.toggle('open');
  headerLogo.classList.toggle('open');
})

extendableLink.addEventListener('click', () => {
  subMenu.classList.toggle('menu__dropdown-content_opened');
  extendableLink.classList.toggle('menu__link_type_active');
  linkList.forEach((link) => {
    if (!(link.classList.contains('menu__link_extendable') || link.classList.contains('menu__link_type_sublink'))) {
      link.classList.toggle('menu__link_type_inactive');
    }
  })
})


