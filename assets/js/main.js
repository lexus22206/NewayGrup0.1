document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang__current');
    const langDropdown = document.querySelector('.lang__dropdown-wrapper');
    const menuBtns = document.querySelectorAll('.menu__btn');
    const allSubmenus = document.querySelectorAll('.submenu__level');
    const header = document.querySelector('.header');
    const menuButton = document.querySelector('.menu-mobile__button-wrapper');
    const mobileMenu = document.querySelector('.menu');
    const closeButton = document.querySelector('.menu-mobile__close');
  
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
      }
    });

    menuBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const menuItem = e.target.closest('.menu__item');
        const submenu = menuItem?.querySelector('.submenu__level');
  
        allSubmenus.forEach(sm => sm.style.display = 'none');
  
        if (submenu) {
          const isOpen = submenu.style.display === 'flex';
          submenu.style.display = isOpen ? 'none' : 'flex';
          header.style.backgroundColor = isOpen ? '' : '#ffffff';
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
    });
  });