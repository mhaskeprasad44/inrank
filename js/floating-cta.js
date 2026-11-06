/**
 * Inrank Technologies 2.0 - Floating Call To Action Widget
 * Position: Bottom-Right
 * Outlined Vector Icons · Inrank 2.0 Obsidian Glassmorphism · Direct Senior Access
 */

(function () {
  'use strict';

  function initFloatingCTA() {
    if (document.getElementById('inrank-floating-cta')) return;

    // Outlined Vector Icons
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
    document.addEventListener('DOMContentLoaded', initFloatingCTA);
  } else {
    initFloatingCTA();
  }

  window.inrankInitFloatingCTA = initFloatingCTA;
})();
