/**
 * RegalRise HP v2 — Scroll Animations
 * - IntersectionObserver による .fade-up の発火
 * - data-count 属性を持つ要素のカウントアップ
 * - ハンバーガーメニュー制御
 */

(function () {
  'use strict';

  /* ────────────────────────────────────────
     Fade-up (scroll trigger)
  ──────────────────────────────────────── */
  const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target); // 一度だけ発火
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up').forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* ────────────────────────────────────────
     Count-up (data-count 属性)
     数字が画面に入ったタイミングで 0 → target へカウント
  ──────────────────────────────────────── */
  function countUp(el, target, duration) {
    duration = duration || 1200;
    const isPlus = el.dataset.countSuffix === '+';
    const start  = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current  = Math.floor(eased * target);
      el.textContent = current + (isPlus && progress >= 1 ? '+' : '');
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + (isPlus ? '+' : '');
      }
    }

    requestAnimationFrame(update);
  }

  const countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.count, 10);
        if (!isNaN(target)) {
          countUp(el, target);
        }
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('[data-count]').forEach(function (el) {
    // 初期表示を 0 にしておく
    el.textContent = '0';
    countObserver.observe(el);
  });

  /* ────────────────────────────────────────
     Hamburger menu
  ──────────────────────────────────────── */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      // バー → X 変形
      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // メニュー外クリックで閉じる
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });
  }

  /* ────────────────────────────────────────
     Nav: スクロール時に背景を強化
  ──────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(10,10,10,0.98)';
        nav.style.boxShadow  = '0 1px 16px rgba(0,0,0,0.6)';
      } else {
        nav.style.background = '';
        nav.style.boxShadow  = '';
      }
    }, { passive: true });
  }

})();
