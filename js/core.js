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


  /* ── Auto-initialize Inrank 2.0 Cookie Consent System ──── */
  (function initCookieConsentLoader() {
    if (typeof window !== 'undefined' && !document.getElementById('inrank-cookie-banner')) {
      const existing = document.querySelector('script[src*="cookie-consent.js"]');
      if (!existing) {
        const s = document.createElement('script');
        s.src = '/cookie-consent.js';
        s.defer = true;
        document.head.appendChild(s);
      }
    }
  })();


  /* ── Inrank 2.0 Floating CTA Widget (Right Down Position) ── */
  (function initFloatingCTAWidget() {
    if (typeof window === 'undefined') return;

    function mountWidget() {
      if (document.getElementById('inrank-floating-cta')) return;

      // Outlined Vector Icons (stroke only, fill: none)
      const outlinedChatSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009d49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      `;

      const outlinedWhatsAppSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1"/>
        </svg>
      `;

      const outlinedPhoneSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009d49" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      `;

      const outlinedCalendarSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <path d="M9 16l2 2 4-4"/>
        </svg>
      `;

      const outlinedArrowSvg = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7 7 17 7 17 17"/>
        </svg>
      `;

      const outlinedChevronSvg = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      `;

      const outlinedCloseSvg = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      `;

      const container = document.createElement('div');
      container.id = 'inrank-floating-cta';
      container.setAttribute('role', 'region');
      container.setAttribute('aria-label', 'Direct Communication and Project Inquiry');

      container.innerHTML = `
        <!-- Expanded Channels Card -->
        <div class="inrank-cta-card" id="inrank-cta-card" role="dialog" aria-modal="false" aria-label="Direct Contact Channels">
          <div class="inrank-cta-card-header">
            <div class="inrank-cta-card-eyebrow">
              <span class="inrank-cta-brand-tag">INRANK 2.0 DIRECT</span>
              <div style="display:flex;align-items:center;gap:8px;">
                <span class="inrank-cta-online-badge">
                  <span class="inrank-cta-pulse-dot" style="width:6px;height:6px;"></span> Baner HQ Online
                </span>
                <button class="inrank-cta-card-close-btn" id="inrank-cta-close-btn" aria-label="Close contact card">
                  ${outlinedCloseSvg}
                </button>
              </div>
            </div>
            <h3 class="inrank-cta-card-title">Talk directly with an engineer.</h3>
            <p class="inrank-cta-card-desc">Zero junior account managers. 15-minute response SLA from our Baner engineering team.</p>
          </div>

          <div class="inrank-cta-channels">
            <!-- WhatsApp Channel -->
            <a href="https://wa.me/918788823182?text=Hello%20Inrank%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20our%20business." target="_blank" rel="noopener noreferrer" class="inrank-cta-channel-item" title="Chat directly with Inrank Engineers on WhatsApp">
              <div class="inrank-cta-channel-icon" aria-hidden="true">
                ${outlinedWhatsAppSvg}
              </div>
              <div class="inrank-cta-channel-info">
                <div class="inrank-cta-channel-name-row">
                  <span class="inrank-cta-channel-name">Chat on WhatsApp</span>
                  <span class="inrank-cta-channel-pill">Fastest</span>
                </div>
                <div class="inrank-cta-channel-meta">+91 87888 23182 &bull; Instant Scope</div>
              </div>
              <span class="inrank-cta-channel-arrow" aria-hidden="true">${outlinedArrowSvg}</span>
            </a>

            <!-- Direct Phone Channel -->
            <a href="tel:+918788823182" class="inrank-cta-channel-item" title="Call Prasad Mhaske and Senior Architects Directly">
              <div class="inrank-cta-channel-icon" aria-hidden="true">
                ${outlinedPhoneSvg}
              </div>
              <div class="inrank-cta-channel-info">
                <div class="inrank-cta-channel-name-row">
                  <span class="inrank-cta-channel-name">Call Senior Architect</span>
                </div>
                <div class="inrank-cta-channel-meta">+91 87888 23182 &bull; Prasad Mhaske</div>
              </div>
              <span class="inrank-cta-channel-arrow" aria-hidden="true">${outlinedArrowSvg}</span>
            </a>

            <!-- Free 48-Hour Technical Audit & Roadmap -->
            <a href="/contact.html#consult-form" class="inrank-cta-channel-item" title="Book Free 15-Minute Strategy Consultation and 48-Hour Audit">
              <div class="inrank-cta-channel-icon" aria-hidden="true">
                ${outlinedCalendarSvg}
              </div>
              <div class="inrank-cta-channel-info">
                <div class="inrank-cta-channel-name-row">
                  <span class="inrank-cta-channel-name">Request Strategy Audit</span>
                </div>
                <div class="inrank-cta-channel-meta">Free 48-Hr Roadmap &bull; Fixed Pricing</div>
              </div>
              <span class="inrank-cta-channel-arrow" aria-hidden="true">${outlinedArrowSvg}</span>
            </a>
          </div>

          <div class="inrank-cta-card-footer">
            <span>🔒 100% Confidential</span>
            <span>Baner Office, Pune</span>
          </div>
        </div>

        <!-- Trigger Capsule Button -->
        <button class="inrank-cta-trigger" id="inrank-cta-trigger-btn" aria-expanded="false" aria-controls="inrank-cta-card" aria-label="Toggle direct contact options">
          <span class="inrank-cta-pulse-wrap" aria-hidden="true">
            <span class="inrank-cta-pulse-dot"></span>
            <span class="inrank-cta-pulse-ring"></span>
          </span>
          <span class="inrank-cta-trigger-icon" aria-hidden="true">
            ${outlinedChatSvg}
          </span>
          <span class="inrank-cta-trigger-labels">
            <span class="inrank-cta-trigger-text">Let's Talk Growth</span>
            <span class="inrank-cta-trigger-sub">Senior Engineers Online</span>
          </span>
          <span class="inrank-cta-trigger-arrow" aria-hidden="true">
            ${outlinedChevronSvg}
          </span>
        </button>
      `;

      document.body.appendChild(container);

      const triggerBtn = document.getElementById('inrank-cta-trigger-btn');
      const closeBtn = document.getElementById('inrank-cta-close-btn');

      function toggleCTA(e) {
        if (e) e.stopPropagation();
        const isOpen = container.classList.toggle('is-open');
        triggerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }

      function closeCTA() {
        container.classList.remove('is-open');
        triggerBtn.setAttribute('aria-expanded', 'false');
      }

      triggerBtn.addEventListener('click', toggleCTA);
      if (closeBtn) closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeCTA();
      });

      // Close when clicking anywhere outside
      document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
          closeCTA();
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && container.classList.contains('is-open')) {
          closeCTA();
        }
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', mountWidget);
    } else {
      mountWidget();
    }
  })();
