/* ============================================================
   VINOVE — Core JS
   Cursor · Navigation · Scroll Reveals · Smooth anchor
   ============================================================ */

'use strict';

/* Custom cursor removed — system cursor in use */


/* ── Navigation ────────────────────────────────────────── */
;(function () {
  const nav  = document.getElementById('nav');
  if (!nav) return;

  /* Match the corporate shell: transparent at the top, navy once the page moves. */
  let raf = false;
  function updateState() {
    const y = window.scrollY;
    const isDark = y <= 24;
    nav.classList.toggle('is-dark',  isDark);
    nav.classList.toggle('is-light', !isDark);
    raf = false;
  }
  updateState();

  window.addEventListener('scroll', () => {
    if (!raf) { raf = true; requestAnimationFrame(updateState); }
  }, { passive: true });

  /* ── Active-page indicator ── */
  (function markActive() {
    let path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
    if (path === '') path = '/';
    const seg = path.split('/').filter(Boolean)[0] || '';   // first segment
    const map = {
      companies: 'companies', standard: 'standard', ai: 'ai',
      partners: 'partners', blog: 'blog', about: 'about', careers: 'careers',
      ecosystem: 'ecosystem'
    };
    const key = map[seg];
    if (!key) return;
    nav.querySelectorAll('[data-nav="' + key + '"]').forEach(el => {
      const link = el.matches('.nav-link') ? el : el.querySelector('.nav-link');
      link?.classList.add('is-current');
      link?.setAttribute('aria-current', 'page');
    });
    document.querySelectorAll('#mob .mob-link').forEach(link => {
      if (link.pathname.split('/').filter(Boolean)[0] === seg) {
        link.classList.add('is-current');
        link.setAttribute('aria-current', 'page');
      }
    });
    document.querySelectorAll('#mob [data-nav="' + key + '"]').forEach(control => {
      control.classList.add('is-current');
      control.setAttribute('aria-current', 'page');
    });
  })();

  /* ── Dropdowns ── */
  const scrim = document.getElementById('nav-scrim');
  const items = Array.from(nav.querySelectorAll('.nav-item[data-dropdown]'));
  let active = null;
  let closeTimer = null;

  function syncChrome() {
    const anyOpen = !!active;
    nav.classList.toggle('nav-open', anyOpen);
    if (scrim) scrim.classList.toggle('show', anyOpen);
  }

  function open(item) {
    clearTimeout(closeTimer);
    if (active && active !== item) _close(active);
    item.setAttribute('data-open', '');
    item.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'true');
    active = item;
    syncChrome();
  }

  function close(item, now) {
    if (!now) {
      closeTimer = setTimeout(() => { _close(item); syncChrome(); }, 140);
    } else {
      _close(item);
      syncChrome();
    }
  }

  function _close(item) {
    item.removeAttribute('data-open');
    item.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'false');
    if (active === item) active = null;
  }

  /* Clicking the scrim closes any open dropdown */
  scrim?.addEventListener('click', () => { if (active) close(active, true); });

  items.forEach(item => {
    item.addEventListener('mouseenter', () => open(item));
    item.addEventListener('mouseleave', () => close(item, false));

    const btn = item.querySelector('button.nav-link');
    if (btn) {
      btn.addEventListener('click', () => {
        /* Mouse hover may already have opened the panel before the click
           lands. Keep that click from immediately closing the destination. */
        open(item);
      });
      btn.addEventListener('keydown', e => {
        if (e.key === 'Escape') { close(item, true); btn.focus(); }
        if (e.key === 'Tab' && !e.shiftKey) {
          /* Tab into the dropdown */
          const drop = item.querySelector('.nav-drop');
          if (!drop) return;
          if (!item.hasAttribute('data-open')) open(item);
        }
      });
    }

    const link = item.querySelector('a.nav-link');
    if (link) {
      link.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown' || e.key === ' ') {
          e.preventDefault();
          open(item);
          item.querySelector('.nav-drop a')?.focus();
        }
        if (e.key === 'Escape') { close(item, true); link.focus(); }
      });
    }
  });

  /* Close on click outside */
  document.addEventListener('click', e => {
    if (active && !active.contains(e.target)) close(active, true);
  });

  /* Escape from anywhere closes active */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && active) close(active, true);
  });

  /* ── Mobile menu ── */
  const burger  = document.getElementById('nav-burger');
  const mobMenu = document.getElementById('mob');
  const mobX    = document.getElementById('mob-x');

  mobMenu?.setAttribute('aria-hidden', 'true');

  function openMob() {
    mobMenu?.classList.add('open');
    mobMenu?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    burger?.setAttribute('aria-expanded', 'true');
    /* Focus first interactive element */
    mobMenu?.querySelector('button, a')?.focus();
  }
  function closeMob() {
    mobMenu?.classList.remove('open');
    mobMenu?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    burger?.setAttribute('aria-expanded', 'false');
    burger?.focus();
  }

  burger?.addEventListener('click', openMob);
  mobX?.addEventListener('click', closeMob);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobMenu?.classList.contains('open')) closeMob();
    if (e.key === 'Tab' && mobMenu?.classList.contains('open')) {
      const focusable = Array.from(mobMenu.querySelectorAll('a, button:not([disabled])'))
        .filter(el => el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Mobile accordions */
  document.querySelectorAll('.mob-acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const bodyId = btn.getAttribute('aria-controls');
      const body   = document.getElementById(bodyId);
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      body?.classList.toggle('open', !isOpen);
    });
  });
})();


/* ── Scroll Reveals ────────────────────────────────────── */
;(function () {
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!els.length) return;

  /* Instant fallback if no IO support */
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  /* Respect reduced motion */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { els.forEach(el => el.classList.add('is-visible')); return; }

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  els.forEach(el => io.observe(el));

  /* Immediately reveal anything already visible in the initial viewport */
  requestAnimationFrame(() => {
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 20 && r.bottom > 0) {
        el.classList.add('is-visible');
        io.unobserve(el);
      }
    });
  });
})();


/* ── Footer: dynamic year ──────────────────────────────── */
;(function () {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();


/* ── Scroll Progress Bar ───────────────────────────────── */
;(function () {
  const bar = document.getElementById('scroll-bar');
  if (!bar) return;
  let ticking = false;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    const pct = ((window.scrollY / max) * 100).toFixed(1);
    bar.style.width = pct + '%';
    bar.setAttribute('aria-valuenow', Math.round(pct));
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
})();


/* ── Go To Top ─────────────────────────────────────────── */
;(function () {
  const btn = document.getElementById('go-top');
  if (!btn) return;
  let ticking = false;
  function checkVisibility() {
    const threshold = document.documentElement.scrollHeight * 0.2;
    btn.classList.toggle('visible', window.scrollY > threshold);
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(checkVisibility); }
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
