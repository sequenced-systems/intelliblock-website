/* ============================================================
   INTELLIBLOCK CONSULTING — main.js
   Mobile navigation toggle only. No inline scripts.
   ============================================================ */

(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (!toggle || !mobileNav) { return; }

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.classList.toggle('is-open', !expanded);
  });

  /* Close mobile nav on link click */
  var mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
    });
  });

  /* Close mobile nav on outside click */
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !mobileNav.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
    }
  });
}());
