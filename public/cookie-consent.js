/**
 * Inrank Technologies — Modern Privacy & Cookie Consent Banner
 * Compliant with Indian DPDP Act 2023, GDPR, CCPA/CPRA, and Google Consent Mode v2
 * Ultra-compact mobile layout with zero layout interference and native SVG cookie iconography.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'inrank_cookie_consent_v1';

  // Check if consent has already been recorded
  function getSavedConsent() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return null;
      return JSON.parse(saved);
    } catch (e) {
      return null;
    }
  }

  function saveConsent(status, preferences) {
    try {
      const payload = {
        status, // 'all', 'necessary', 'custom'
        analytics: preferences ? preferences.analytics : (status === 'all'),
        marketing: preferences ? preferences.marketing : (status === 'all'),
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

      // Push Google Consent Mode v2 update if gtag is available
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          analytics_storage: payload.analytics ? 'granted' : 'denied',
          ad_storage: payload.marketing ? 'granted' : 'denied',
          ad_user_data: payload.marketing ? 'granted' : 'denied',
          ad_personalization: payload.marketing ? 'granted' : 'denied'
        });
      }
    } catch (e) {}
  }

  // If already consented, apply consent mode and do not show banner
  const existingConsent = getSavedConsent();
  if (existingConsent) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: existingConsent.analytics ? 'granted' : 'denied',
        ad_storage: existingConsent.marketing ? 'granted' : 'denied',
        ad_user_data: existingConsent.marketing ? 'granted' : 'denied',
        ad_personalization: existingConsent.marketing ? 'granted' : 'denied'
      });
    }
  }

  // Inject Styles for Cookie Banner & Modal
  const style = document.createElement('style');
  style.id = 'inrank-cookie-consent-styles';
  style.textContent = `
    #inrank-cookie-banner,
    #inrank-cookie-modal,
    #inrank-cookie-banner *,
    #inrank-cookie-modal * {
      box-sizing: border-box;
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
      -webkit-font-smoothing: antialiased;
    }

    /* Floating Banner Container (Bottom-Left) */
    #inrank-cookie-banner {
      position: fixed;
      left: 20px;
      bottom: 20px;
      z-index: 99990;
      width: 390px;
      max-width: calc(100vw - 24px);
      background: #0f172a;
      color: #f8fafc;
      border-radius: 18px;
      padding: 16px 18px;
      box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(16px);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
      transform: translateY(16px) scale(0.97);
      pointer-events: none;
    }

    #inrank-cookie-banner.inrank-visible {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    .inrank-cb-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 8px;
    }

    .inrank-cb-title-wrap {
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .inrank-cb-icon {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #10b981;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .inrank-cb-title {
      font-size: 13.5px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.01em;
    }

    .inrank-cb-dismiss {
      background: transparent;
      border: none;
      color: #94a3b8;
      width: 24px;
      height: 24px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      flex-shrink: 0;
    }

    .inrank-cb-dismiss:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }

    .inrank-cb-body {
      font-size: 12px;
      line-height: 1.5;
      color: #cbd5e1;
      margin-bottom: 12px;
    }

    .inrank-cb-body a {
      color: #34d399;
      text-decoration: underline;
      text-underline-offset: 2px;
      font-weight: 600;
      transition: color 0.15s ease;
    }

    .inrank-cb-body a:hover {
      color: #6ee7b7;
    }

    .inrank-cb-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .inrank-cb-btn {
      padding: 8px 14px;
      border-radius: 9px;
      font-size: 11.5px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      white-space: nowrap;
    }

    .inrank-cb-btn-accept {
      background: #009d49;
      color: #ffffff;
      flex: 1.1;
      box-shadow: 0 2px 8px rgba(0, 157, 73, 0.3);
    }

    .inrank-cb-btn-accept:hover {
      background: #00813c;
      transform: translateY(-1px);
    }

    .inrank-cb-btn-decline {
      background: rgba(255, 255, 255, 0.08);
      color: #e2e8f0;
      border: 1px solid rgba(255, 255, 255, 0.16);
      flex: 0.9;
    }

    .inrank-cb-btn-decline:hover {
      background: rgba(255, 255, 255, 0.16);
      color: #ffffff;
    }

    .inrank-cb-btn-pref {
      background: transparent;
      color: #94a3b8;
      border: none;
      padding: 6px 8px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    .inrank-cb-btn-pref:hover {
      color: #f1f5f9;
    }

    /* Mobile View Optimization (Zero Layout Interference) */
    @media (max-width: 640px) {
      #inrank-cookie-banner {
        left: 10px;
        right: 10px;
        bottom: 68px; /* Positioned above mobile sticky bottom bar with safe clearance */
        width: auto;
        max-width: calc(100vw - 20px);
        padding: 12px 14px;
        border-radius: 14px;
        box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.14);
      }

      .inrank-cb-header {
        margin-bottom: 6px;
      }

      .inrank-cb-icon {
        width: 24px;
        height: 24px;
        border-radius: 6px;
      }

      .inrank-cb-icon svg {
        width: 14px;
        height: 14px;
      }

      .inrank-cb-title {
        font-size: 12.5px;
      }

      .inrank-cb-body {
        font-size: 11px;
        line-height: 1.4;
        margin-bottom: 10px;
      }

      /* Keep buttons compact & horizontal — NEVER stack 3 full-width blocks on mobile */
      .inrank-cb-actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;
      }

      .inrank-cb-btn {
        padding: 7px 10px;
        font-size: 11px;
      }

      .inrank-cb-btn-pref {
        padding: 6px 4px;
        font-size: 10.5px;
      }
    }

    /* Preferences Modal Backdrop */
    #inrank-cookie-modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.7);
      backdrop-filter: blur(6px);
      z-index: 99998;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }

    #inrank-cookie-modal-backdrop.inrank-open {
      opacity: 1;
      pointer-events: auto;
    }

    /* Preferences Modal Window */
    #inrank-cookie-modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -48%) scale(0.96);
      z-index: 99999;
      width: 480px;
      max-width: calc(100vw - 28px);
      max-height: 85vh;
      overflow-y: auto;
      background: #ffffff;
      color: #0f172a;
      border-radius: 20px;
      padding: 20px 22px;
      box-shadow: 0 25px 65px -15px rgba(15, 23, 42, 0.35), 0 0 0 1px rgba(226, 232, 240, 0.9);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    #inrank-cookie-modal.inrank-open {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      pointer-events: auto;
    }

    .inrank-cm-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e2e8f0;
    }

    .inrank-cm-title {
      font-size: 16px;
      font-weight: 800;
      color: #0f172a;
    }

    .inrank-cm-close {
      background: #f1f5f9;
      border: none;
      border-radius: 8px;
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748b;
      transition: all 0.15s ease;
    }

    .inrank-cm-close:hover {
      background: #e2e8f0;
      color: #0f172a;
    }

    .inrank-cm-desc {
      font-size: 12.5px;
      line-height: 1.5;
      color: #475569;
      margin-bottom: 16px;
    }

    .inrank-cm-group {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 12px 14px;
      margin-bottom: 10px;
    }

    .inrank-cm-group-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
    }

    .inrank-cm-group-title {
      font-size: 13px;
      font-weight: 700;
      color: #0f172a;
    }

    .inrank-cm-badge-req {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #009d49;
      background: #eafaf1;
      border: 1px solid #bbf2d2;
      padding: 2px 7px;
      border-radius: 6px;
    }

    .inrank-cm-group-text {
      font-size: 11.5px;
      line-height: 1.45;
      color: #64748b;
      margin: 0;
    }

    /* Toggle Switches */
    .inrank-cm-switch {
      position: relative;
      display: inline-block;
      width: 38px;
      height: 22px;
      flex-shrink: 0;
    }

    .inrank-cm-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .inrank-cm-slider {
      position: absolute;
      cursor: pointer;
      inset: 0;
      background-color: #cbd5e1;
      transition: 0.25s;
      border-radius: 22px;
    }

    .inrank-cm-slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: 0.25s;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.25);
    }

    .inrank-cm-switch input:checked + .inrank-cm-slider {
      background-color: #009d49;
    }

    .inrank-cm-switch input:checked + .inrank-cm-slider:before {
      transform: translateX(16px);
    }

    .inrank-cm-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 16px;
      padding-top: 12px;
      border-top: 1px solid #e2e8f0;
    }
  `;
  document.head.appendChild(style);

  // Build Banner DOM
  const banner = document.createElement('div');
  banner.id = 'inrank-cookie-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Cookie Consent Banner');
  banner.innerHTML = `
    <div class="inrank-cb-header">
      <div class="inrank-cb-title-wrap">
        <div class="inrank-cb-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
            <path d="M8.5 8.5v.01"/>
            <path d="M16 15.5v.01"/>
            <path d="M12 12v.01"/>
            <path d="M11 17v.01"/>
            <path d="M7 14v.01"/>
          </svg>
        </div>
        <div class="inrank-cb-title">Cookie Preferences</div>
      </div>
      <button id="inrank-cb-dismiss-btn" class="inrank-cb-dismiss" aria-label="Dismiss cookie banner">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="inrank-cb-body">
      We use cookies to optimize site speed and analyze anonymous traffic in accordance with our 
      <a href="/privacy-policy.html">Privacy Policy</a>.
    </div>
    <div class="inrank-cb-actions">
      <button id="inrank-cb-accept-btn" class="inrank-cb-btn inrank-cb-btn-accept">Accept All</button>
      <button id="inrank-cb-decline-btn" class="inrank-cb-btn inrank-cb-btn-decline">Necessary</button>
      <button id="inrank-cb-pref-btn" class="inrank-cb-btn inrank-cb-btn-pref">Customize</button>
    </div>
  `;

  // Build Preferences Modal DOM
  const backdrop = document.createElement('div');
  backdrop.id = 'inrank-cookie-modal-backdrop';

  const modal = document.createElement('div');
  modal.id = 'inrank-cookie-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Cookie Preferences');
  modal.innerHTML = `
    <div class="inrank-cm-header">
      <div class="inrank-cm-title">Privacy &amp; Cookie Preferences</div>
      <button id="inrank-cm-close-btn" class="inrank-cm-close" aria-label="Close preferences">✕</button>
    </div>
    <div class="inrank-cm-desc">
      Control how Inrank Technologies collects and processes data during your visit. You can modify these preferences at any time.
    </div>

    <!-- Essential Group -->
    <div class="inrank-cm-group">
      <div class="inrank-cm-group-row">
        <span class="inrank-cm-group-title">Strictly Necessary Cookies</span>
        <span class="inrank-cm-badge-req">Always Active</span>
      </div>
      <p class="inrank-cm-group-text">
        Required for core system security, form submission routing, and caching headers. Cannot be disabled.
      </p>
    </div>

    <!-- Analytics Group -->
    <div class="inrank-cm-group">
      <div class="inrank-cm-group-row">
        <span class="inrank-cm-group-title">Analytics &amp; Performance Telemetry</span>
        <label class="inrank-cm-switch">
          <input type="checkbox" id="inrank-toggle-analytics" checked />
          <span class="inrank-cm-slider"></span>
        </label>
      </div>
      <p class="inrank-cm-group-text">
        Anonymized page views and Core Web Vitals telemetry via Google Analytics 4 and Microsoft Clarity.
      </p>
    </div>

    <!-- Marketing Group -->
    <div class="inrank-cm-group">
      <div class="inrank-cm-group-row">
        <span class="inrank-cm-group-title">Marketing &amp; Attribution</span>
        <label class="inrank-cm-switch">
          <input type="checkbox" id="inrank-toggle-marketing" checked />
          <span class="inrank-cm-slider"></span>
        </label>
      </div>
      <p class="inrank-cm-group-text">
        Campaign conversion attribution for Google Ads and Meta Ads.
      </p>
    </div>

    <div class="inrank-cm-actions">
      <button id="inrank-cm-save-btn" class="inrank-cb-btn inrank-cb-btn-accept" style="min-width: 140px;">Save Preferences</button>
    </div>
  `;

  document.body.appendChild(banner);
  document.body.appendChild(backdrop);
  document.body.appendChild(modal);

  // If no saved consent, display the banner after a gentle delay
  if (!existingConsent) {
    setTimeout(() => {
      banner.classList.add('inrank-visible');
    }, 800);
  }

  // Event Listeners
  const acceptBtn = document.getElementById('inrank-cb-accept-btn');
  const declineBtn = document.getElementById('inrank-cb-decline-btn');
  const prefBtn = document.getElementById('inrank-cb-pref-btn');
  const dismissBtn = document.getElementById('inrank-cb-dismiss-btn');
  const closeBtn = document.getElementById('inrank-cm-close-btn');
  const saveBtn = document.getElementById('inrank-cm-save-btn');
  const analyticsToggle = document.getElementById('inrank-toggle-analytics');
  const marketingToggle = document.getElementById('inrank-toggle-marketing');

  function hideBanner() {
    banner.classList.remove('inrank-visible');
  }

  function openModal() {
    const current = getSavedConsent();
    if (current) {
      analyticsToggle.checked = Boolean(current.analytics);
      marketingToggle.checked = Boolean(current.marketing);
    }
    backdrop.classList.add('inrank-open');
    modal.classList.add('inrank-open');
  }

  function closeModal() {
    backdrop.classList.remove('inrank-open');
    modal.classList.remove('inrank-open');
  }

  acceptBtn.addEventListener('click', () => {
    saveConsent('all');
    hideBanner();
  });

  declineBtn.addEventListener('click', () => {
    saveConsent('necessary', { analytics: false, marketing: false });
    hideBanner();
  });

  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      saveConsent('necessary', { analytics: false, marketing: false });
      hideBanner();
    });
  }

  prefBtn.addEventListener('click', () => {
    openModal();
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  saveBtn.addEventListener('click', () => {
    saveConsent('custom', {
      analytics: analyticsToggle.checked,
      marketing: marketingToggle.checked
    });
    closeModal();
    hideBanner();
  });

  // Global helper to allow re-opening preferences from footer link
  window.openInrankCookiePreferences = openModal;

})();
