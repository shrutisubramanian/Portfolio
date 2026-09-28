/* SHRUTI'S PORTFOLIO — desk interactions */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- scroll reveal: papers placed onto the desk ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { revealIO.observe(el); });
    // nudge elements already in view
    revealEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) el.classList.add('in');
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- scrollspy: highlight active section in nav ---------- */
  var sections = ['about', 'projects', 'experience', 'skills', 'contact'];
  var sideLinks = document.querySelectorAll('.side-link');
  var mobileLinks = document.querySelectorAll('.mobile-nav a[data-section]');

  function setActive(id) {
    sideLinks.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('data-section') === id);
    });
    mobileLinks.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('data-section') === id);
    });
  }

  if ('IntersectionObserver' in window) {
    var spyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-38% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spyIO.observe(el);
    });
  }

  /* ---------- mobile menu ---------- */
  var menuBtn = document.getElementById('menuBtn');
  var mobileNav = document.getElementById('mobileNav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- subtle hero paper tilt (desktop, pointer devices) ---------- */
  var hero = document.getElementById('hero');
  var heroPaper = document.getElementById('heroPaper');
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  if (hero && heroPaper && finePointer && !reduced) {
    var raf = null;
    hero.addEventListener('pointermove', function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        var r = hero.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        heroPaper.style.setProperty('--px', x.toFixed(3));
        heroPaper.style.setProperty('--py', y.toFixed(3));
        raf = null;
      });
    });
    hero.addEventListener('pointerleave', function () {
      heroPaper.style.setProperty('--px', 0);
      heroPaper.style.setProperty('--py', 0);
    });
  }

  /* ---------- contact form (placeholder) ---------- */
  var form = document.querySelector('.quick-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.btn-send');
      var original = btn.innerHTML;
      btn.innerHTML = 'SENT ✓';
      btn.disabled = true;
      btn.classList.add('sent');
      setTimeout(function () {
        btn.innerHTML = original;
        btn.disabled = false;
        btn.classList.remove('sent');
        form.reset();
      }, 2200);
    });
  }

  /* ---------- footer year ---------- */
  var copy = document.querySelector('.copy-pill');
  if (copy) {
    copy.textContent = copy.textContent.replace(/© \d{4}/, '© ' + new Date().getFullYear());
  }
})();
