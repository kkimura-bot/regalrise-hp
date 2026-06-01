(function() {
  'use strict';

  function initNav() {
    var hamburger = document.querySelector('.nav-hamburger');
    var mobileMenu = document.querySelector('.nav-mobile-menu');

    if (!hamburger || !mobileMenu) return;

    // 初期状態を確実にhide
    mobileMenu.style.display = 'none';

    function openMenu() {
      mobileMenu.style.display = 'flex';
      mobileMenu.style.flexDirection = 'column';
      hamburger.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      mobileMenu.style.display = 'none';
      hamburger.setAttribute('aria-expanded', 'false');
    }

    function toggleMenu(e) {
      e.stopPropagation();
      if (mobileMenu.style.display === 'flex') {
        closeMenu();
      } else {
        openMenu();
      }
    }

    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('touchend', function(e) {
      e.preventDefault();
      toggleMenu(e);
    });

    // メニュー内リンクをタップしたら閉じる
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });

    // 外側タップで閉じる
    document.addEventListener('click', function(e) {
      if (mobileMenu.style.display === 'flex' &&
          !hamburger.contains(e.target) &&
          !mobileMenu.contains(e.target)) {
        closeMenu();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
