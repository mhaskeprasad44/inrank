/* ============================================================
   INRANK 2.0 - Core JS
   Floating Dock Navigation · Scroll Transitions · Reveals · FAQ
   ============================================================ */

'use strict';

/* ── Floating Navigation & Active States ───────────────── */
;(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let raf = false;
  function updateNav() {
    const y = window.scrollY;
    const isScrolled = y > 20;
    nav.classList.toggle('is-scrolled', isScrolled);
    nav.classList.toggle('is-dark', !isScrolled);
    nav.classList.toggle('is-light', isScrolled);
    raf = false;
  }
  updateNav();

  window.addEventListener('scroll', () => {
    if (!raf) {
      raf = true;
      requestAnimationFrame(updateNav);
    }
  }, { passive: true });

  /* ── Active-page indicator ── */
  (function markActive() {
    let path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
    if (path === '') path = '/';
    const seg = path.split('/').filter(Boolean)[0] || '';
    const cleanSeg = seg.replace('.html', '');
    const map = {
      services: 'services',
      pricing: 'pricing',
      'our-work': 'work',
      portfolio: 'work',
      'case-studies': 'cases',
      about: 'about',
      contact: 'contact',
      blog: 'blog'
    };
    const key = map[cleanSeg];
    if (!key) return;

    nav.querySelectorAll('[data-nav="' + key + '"]').forEach(el => {
      const link = el.matches('.nav-link') ? el : el.querySelector('.nav-link');
      link?.classList.add('is-current');
      link?.setAttribute('aria-current', 'page');
    });

    document.querySelectorAll('#mob .mob-link').forEach(link => {
      const linkSeg = link.pathname.split('/').filter(Boolean)[0]?.replace('.html', '');
      if (linkSeg === cleanSeg) {
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
      closeTimer = setTimeout(() => {
        _close(item);
        syncChrome();
      }, 160);
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

  scrim?.addEventListener('click', () => {
    if (active) close(active, true);
  });

  items.forEach(item => {
    item.addEventListener('mouseenter', () => open(item));
    item.addEventListener('mouseleave', () => close(item, false));

    const btn = item.querySelector('button.nav-link');
    if (btn) {
      btn.addEventListener('click', () => {
        if (item.hasAttribute('data-open')) {
          close(item, true);
        } else {
          open(item);
        }
      });
      btn.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          close(item, true);
          btn.focus();
        }
        if (e.key === 'Tab' && !e.shiftKey) {
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
        if (e.key === 'Escape') {
          close(item, true);
          link.focus();
        }
      });
    }
  });

  document.addEventListener('click', e => {
    if (active && !active.contains(e.target)) close(active, true);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && active) close(active, true);
  });

  /* ── Mobile menu ── */
  const burger = document.getElementById('nav-burger');
  const mobMenu = document.getElementById('mob');
  const mobX = document.getElementById('mob-x');

  mobMenu?.setAttribute('aria-hidden', 'true');

  function openMob() {
    mobMenu?.classList.add('open', 'is-open');
    mobMenu?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    burger?.setAttribute('aria-expanded', 'true');
    mobMenu?.querySelector('button, a')?.focus();
  }

  function closeMob() {
    mobMenu?.classList.remove('open', 'is-open');
    mobMenu?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    burger?.setAttribute('aria-expanded', 'false');
    burger?.focus();
  }

  burger?.addEventListener('click', openMob);
  mobX?.addEventListener('click', closeMob);

  // Close mobile drawer when clicking any link inside
  mobMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMob);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && (mobMenu?.classList.contains('open') || mobMenu?.classList.contains('is-open'))) {
      closeMob();
    }
  });

  /* Mobile accordions */
  document.querySelectorAll('.mob-acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const bodyId = btn.getAttribute('aria-controls');
      const body = document.getElementById(bodyId);
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      if (body) {
        body.style.display = isOpen ? 'none' : 'flex';
      }
    });
  });
})();


/* ── Scroll Reveals ────────────────────────────────────── */
;(function () {
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!els.length) return;

  function revealAll() {
    els.forEach(el => el.classList.add('is-visible', 'revealed'));
  }

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealAll();
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible', 'revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '120px 0px 120px 0px' });

  els.forEach(el => io.observe(el));

  function revealVisible() {
    const viewH = window.innerHeight;
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < viewH + 200 && r.bottom > -200) {
        el.classList.add('is-visible', 'revealed');
        io.unobserve(el);
      }
    });
  }

  revealVisible();
  requestAnimationFrame(revealVisible);
  window.addEventListener('load', revealVisible);
  window.addEventListener('scroll', revealVisible, { passive: true, once: true });
})();


/* ── Footer: dynamic year ──────────────────────────────── */
;(function () {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();


/* ── Top Scroll Progress Bar ───────────────────────────── */
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
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
})();


/* ── Go To Top Button ──────────────────────────────────── */
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
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(checkVisibility);
    }
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ── FAQ Accordion Toggle ──────────────────────────────── */
;(function () {
  document.querySelectorAll('.faq-question, .faq-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const wasActive = item.classList.contains('active') || item.classList.contains('is-open');
      const accordion = item.closest('.faq-accordion');
      if (accordion) {
        accordion.querySelectorAll('.faq-item').forEach(function (other) {
          other.classList.remove('active', 'is-open');
          other.querySelector('.faq-btn, .faq-question')?.setAttribute('aria-expanded', 'false');
        });
      }
      if (!wasActive) {
        item.classList.add('active', 'is-open');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();



  // ── Pricing Category Switcher Tabs ──
  document.querySelectorAll('.pricing-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.closest('.pricing-section, #packages, .pricing-wrap') || document;
      const targetId = btn.getAttribute('data-tab');
      if (!targetId) return;

      container.querySelectorAll('.pricing-tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      container.querySelectorAll('.pricing-content-panel').forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.remove('is-hidden');
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('is-hidden');
        }
      });
    });
  });


  // Interactive Glowing Watermark in Footer (Cursor Spotlight Follow)
  (function initFooterWatermarkGlow() {
    const ftMark = document.querySelector('.ft-mark');
    if (!ftMark) return;

    ftMark.setAttribute('title', 'Click to scroll to top');

    ftMark.addEventListener('mousemove', (e) => {
      const rect = ftMark.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      ftMark.style.setProperty('--mouse-x', x.toFixed(1) + '%');
      ftMark.style.setProperty('--mouse-y', y.toFixed(1) + '%');
    });

    ftMark.addEventListener('mouseleave', () => {
      ftMark.style.setProperty('--mouse-x', '50%');
      ftMark.style.setProperty('--mouse-y', '50%');
    });

    ftMark.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();
