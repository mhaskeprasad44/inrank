/**
 * Inrank Technologies — Modern Privacy & Cookie Consent Banner
 * Compliant with Indian DPDP Act 2023, GDPR, CCPA/CPRA, and Google Consent Mode v2
 * Positioned on the bottom-left to prevent overlap with the WhatsApp floating button
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

    /* Floating Banner Container (Bottom-Left: leaves right side free for WhatsApp) */
    #inrank-cookie-banner {
      position: fixed;
      left: 24px;
      bottom: 24px;
      z-index: 99990;
      width: 440px;
      max-width: calc(100vw - 32px);
      background: #0f172a;
      color: #f8fafc;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(16px);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
      transform: translateY(20px) scale(0.97);
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
      gap: 10px;
      margin-bottom: 10px;
    }

    .inrank-cb-icon {
      width: 32px;
      height: 32px;
      border-radius: 10px;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 16px;
    }

    .inrank-cb-title {
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.015em;
    }

    .inrank-cb-body {
      font-size: 12.5px;
      line-height: 1.55;
      color: #cbd5e1;
      margin-bottom: 16px;
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
      flex-wrap: wrap;
    }

    .inrank-cb-btn {
      padding: 9px 16px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .inrank-cb-btn-accept {
      background: linear-gradient(135deg, #049649 0%, #009d49 100%);
      color: #ffffff;
      flex: 1;
      min-width: 120px;
      box-shadow: 0 4px 12px rgba(4, 150, 73, 0.3);
    }

    .inrank-cb-btn-accept:hover {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(4, 150, 73, 0.45);
    }

    .inrank-cb-btn-decline {
      background: rgba(255, 255, 255, 0.08);
      color: #e2e8f0;
      border: 1px solid rgba(255, 255, 255, 0.15);
      flex: 1;
      min-width: 110px;
    }

    .inrank-cb-btn-decline:hover {
      background: rgba(255, 255, 255, 0.16);
      color: #ffffff;
    }

    .inrank-cb-btn-pref {
      background: transparent;
      color: #94a3b8;
      border: 1px solid transparent;
      padding: 9px 12px;
      font-size: 11.5px;
      font-weight: 600;
      cursor: pointer;
    }

    .inrank-cb-btn-pref:hover {
      color: #e2e8f0;
      text-decoration: underline;
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
      width: 500px;
      max-width: calc(100vw - 32px);
      max-height: 85vh;
      overflow-y: auto;
      background: #ffffff;
      color: #0f172a;
      border-radius: 24px;
      padding: 24px;
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
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid #e2e8f0;
    }

    .inrank-cm-title {
      font-size: 17px;
      font-weight: 800;
      color: #0f172a;
    }

    .inrank-cm-close {
      background: #f1f5f9;
      border: none;
      border-radius: 8px;
      width: 32px;
      height: 32px;
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
      font-size: 13px;
      line-height: 1.5;
      color: #475569;
      margin-bottom: 18px;
    }

    .inrank-cm-group {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 14px;
      margin-bottom: 12px;
    }

    .inrank-cm-group-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .inrank-cm-group-title {
      font-size: 13.5px;
      font-weight: 700;
      color: #0f172a;
    }

    .inrank-cm-badge-req {
      font-size: 10.5px;
      font-weight: 700;
      background: #d1fae5;
      color: #065f46;
      padding: 3px 8px;
      border-radius: 9999px;
    }

    .inrank-cm-group-text {
      font-size: 12px;
      line-height: 1.5;
      color: #64748b;
      margin: 0;
    }

    /* Switch Toggle */
    .inrank-cm-switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 22px;
    }

    .inrank-cm-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .inrank-cm-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #cbd5e1;
      transition: .3s;
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
      transition: .3s;
      border-radius: 50%;
    }

    input:checked + .inrank-cm-slider {
      background-color: #049649;
    }

    input:checked + .inrank-cm-slider:before {
      transform: translateX(18px);
    }

    .inrank-cm-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid #e2e8f0;
    }

    @media (max-width: 640px) {
      #inrank-cookie-banner {
        left: 12px;
        right: 12px;
        bottom: 76px;
        width: auto;
        padding: 16px;
      }
      .inrank-cb-actions {
        flex-direction: column;
      }
      .inrank-cb-btn {
        width: 100%;
      }
      .inrank-cb-btn-pref {
        text-align: center;
      }
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
      <div class="inrank-cb-icon">🍪</div>
      <div class="inrank-cb-title">Cookie &amp; Privacy Preferences</div>
    </div>
    <div class="inrank-cb-body">
      Inrank Technologies uses essential cookies, Google Analytics, and telemetry to deliver sub-second performance, analyze traffic, and ensure secure communication. By clicking <strong>Accept All</strong>, you agree to our data handling in accordance with our 
      <a href="/privacy-policy.html">Privacy Policy</a> and <a href="/terms-and-conditions.html">Terms</a>.
    </div>
    <div class="inrank-cb-actions">
      <button id="inrank-cb-accept-btn" class="inrank-cb-btn inrank-cb-btn-accept">Accept All</button>
      <button id="inrank-cb-decline-btn" class="inrank-cb-btn inrank-cb-btn-decline">Necessary Only</button>
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
        Required for core system security, form submission routing, load-balancing, and caching headers. Cannot be disabled.
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
        Anonymized page views, Core Web Vitals measurements via Google Analytics 4, and heatmap diagnostics via Microsoft Clarity.
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
        Conversion attribution for Google Ads and Meta Ads campaigns. Helps measure inbound business inquiries.
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
