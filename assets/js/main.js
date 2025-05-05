document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.querySelector('.lang__current');
  const langDropdown = document.querySelector('.lang-dropdown');
  const menuBtns = document.querySelectorAll('.menu__btn');
  const allSubmenus = document.querySelectorAll('.submenu');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const menuButton = document.querySelector('.menu-burger');
  const mobileMenu = document.querySelector('.menu');
  const closeButton = document.querySelector('.menu-close');


  langBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (e) => {
    const clickedInsideLang = e.target.closest('.lang');
    const clickedInsideMenu = e.target.closest('.menu');

    if (!clickedInsideLang) {
      langDropdown.style.display = 'none';
    }

    if (!clickedInsideMenu) {
      allSubmenus.forEach(sm => sm.style.display = 'none');
      header.style.backgroundColor = '';
      main?.classList.remove('main--blur');
      document.body.style.overflow = '';
    }
  });

  menuBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const menuItem = e.target.closest('.menu__item');
      const submenu = menuItem?.querySelector('.submenu');
      const isOpen = submenu.style.display === 'flex';

      allSubmenus.forEach(sm => sm.style.display = 'none');

      if (submenu) {
        submenu.style.display = isOpen ? 'none' : 'flex';
        header.style.backgroundColor = isOpen ? '' : '#ffffff';
        main?.classList.toggle('main--blur', !isOpen);
        document.body.style.overflow = 'hidden';
      } else {
        main?.classList.remove('main--blur');
      }
    });
  });

  menuButton?.addEventListener('click', () => {
    mobileMenu.classList.add('menu--active');
    document.body.style.overflow = 'hidden';
  });

  closeButton?.addEventListener('click', () => {
    mobileMenu.classList.remove('menu--active');
    document.body.style.overflow = '';
    allSubmenus.forEach(sm => sm.style.display = 'none');
    header.style.backgroundColor = '';
    main?.classList.remove('main--blur');
  });
});

const submenuBackButtons = document.querySelectorAll('.submenu__button');
submenuBackButtons.forEach(button => {
  button.addEventListener('click', () => {
    const submenu = button.closest('.submenu');
    submenu.style.display = 'none';
  });
});

window.addEventListener('scroll', function () {
  const scroll = window.scrollY;
  const header = document.querySelector('.header');

  if (scroll < 200) {
    header.classList.remove('header--sticky', 'header--show');
  } else {
    header.classList.add('header--sticky');
    setTimeout(() => {
      header.classList.add('header--show');
    }, 10);
  }
}); 
