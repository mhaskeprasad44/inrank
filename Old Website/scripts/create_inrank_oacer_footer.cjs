const fs = require('fs');

const testHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inrank Oacer Footer Preview</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/corporate.css">
  <style>
    /* OACER-STYLE FOOTER FOR INRANK */
    .ft {
      --ink: #eef4ef;
      --mute: #9aa79f;
      --line: rgba(255, 255, 255, 0.08);
      --green: #009d49;
      --green-hi: #00bf5d;
      --ease: cubic-bezier(.16, 1, .3, 1);
      position: relative;
      overflow: hidden;
      isolation: isolate;
      color: var(--ink);
      background: radial-gradient(90% 70% at 85% 0%, rgba(0, 157, 73, 0.22), rgba(0, 157, 73, 0) 60%), linear-gradient(180deg, #071510, #040c08);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .ft :where(h2, h3, p, ul, address) {
      margin: 0;
    }

    .ft ul {
      padding: 0;
      list-style: none;
    }

    .ft a {
      color: inherit;
      text-decoration: none;
    }

    .ft-glow {
      position: absolute;
      z-index: -1;
      left: -10%;
      bottom: -30%;
      width: 60%;
      height: 70%;
      background: radial-gradient(closest-side, rgba(0, 157, 73, 0.16), transparent);
      pointer-events: none;
    }

    .ft-wrap {
      max-width: 1280px;
      margin-inline: auto;
      padding-inline: 24px;
    }

    /* Top CTA Grid */
    .ft-cta {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
      gap: clamp(28px, 5vw, 80px);
      align-items: end;
      padding-block: clamp(60px, 7vw, 100px) clamp(40px, 5vw, 64px);
      background: linear-gradient(var(--line), var(--line)) 50% 100% / calc(100% - 48px) 1px no-repeat;
    }

    .ft-label {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--green-hi);
    }

    .ft-label:before {
      content: "";
      width: 22px;
      height: 1.5px;
      background: var(--green);
    }

    .ft-title {
      font-size: clamp(2rem, 3.8vw, 3.25rem);
      line-height: 1.1;
      letter-spacing: -0.035em;
      font-weight: 400;
      color: #ffffff;
    }

    .ft-title span {
      display: block;
      font-weight: 850;
      color: var(--green-hi);
    }

    .ft-points {
      display: grid;
      gap: 10px;
      margin-bottom: 26px;
    }

    .ft-points li {
      position: relative;
      padding-left: 28px;
      font-size: 0.95rem;
      font-weight: 400;
      color: #cbd5e1;
      line-height: 1.5;
    }

    .ft-points li:before {
      content: "";
      position: absolute;
      left: 2px;
      top: 0.45em;
      width: 13px;
      height: 7px;
      border-left: 2.5px solid var(--green-hi);
      border-bottom: 2.5px solid var(--green-hi);
      transform: rotate(-45deg);
    }

    .ft-btns {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .ft-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 48px;
      padding: 0 24px;
      border-radius: 999px;
      background: var(--green);
      color: #ffffff !important;
      font-size: 0.8125rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      box-shadow: 0 4px 18px rgba(0, 157, 73, 0.35);
      transition: transform 0.4s var(--ease), box-shadow 0.4s, background 0.3s;
    }

    .ft-btn svg {
      transition: transform 0.4s var(--ease);
    }

    .ft-btn:hover {
      transform: translateY(-2px);
      background: var(--green-hi);
      box-shadow: 0 16px 34px -10px rgba(0, 157, 73, 0.6);
    }

    .ft-btn:hover svg {
      transform: translate(2px, -2px);
    }

    .ft-btn--ghost {
      background: rgba(255, 255, 255, 0.04);
      color: var(--ink) !important;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    }

    .ft-btn--ghost:hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: inset 0 0 0 1px var(--green-hi);
      color: #ffffff !important;
    }

    /* 4-Column Grid */
    .ft-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(0, 0.85fr)) minmax(0, 1.15fr);
      gap: clamp(28px, 4vw, 56px);
      padding-block: clamp(48px, 6vw, 72px);
    }

    .ft-brand-logo {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
      text-decoration: none;
    }

    .ft-brand p {
      max-width: 36ch;
      font-size: 0.875rem;
      line-height: 1.7;
      font-weight: 400;
      color: var(--mute);
    }

    .ft-social {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 24px;
    }

    .ft-social a {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #c9d3cc;
      background: rgba(255, 255, 255, 0.03);
      box-shadow: inset 0 0 0 1px var(--line);
      transition: background 0.3s, color 0.3s, transform 0.4s var(--ease), box-shadow 0.3s;
    }

    .ft-social a:hover {
      background: var(--green);
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 8px 18px -4px rgba(0, 157, 73, 0.45);
    }

    .ft h3 {
      margin-bottom: 20px;
      font-size: 0.72rem;
      font-weight: 750;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #ffffff;
    }

    .ft nav ul {
      display: grid;
      gap: 13px;
    }

    .ft nav ul a, .ft-hq a {
      position: relative;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--mute);
      transition: color 0.25s, transform 0.25s;
      display: inline-block;
    }

    .ft nav ul a:hover, .ft-hq a:hover {
      color: var(--green-hi);
      transform: translateX(2px);
    }

    .ft-hq address {
      font-style: normal;
      font-size: 0.875rem;
      line-height: 1.7;
      font-weight: 400;
      color: var(--mute);
      max-width: 32ch;
    }

    .ft-hq p {
      display: grid;
      gap: 10px;
      margin-top: 16px;
    }

    .ft-hq-corridors {
      display: block;
      margin-top: 14px;
      font-size: 0.75rem;
      line-height: 1.5;
      color: #64748b;
    }

    /* Bottom Legal Bar */
    .ft-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px 24px;
      padding-block: 22px;
      background: linear-gradient(var(--line), var(--line)) 50% 0 / calc(100% - 48px) 1px no-repeat;
      font-size: 0.8125rem;
      font-weight: 400;
      color: var(--mute);
    }

    .ft-bar nav {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 24px;
    }

    .ft-bar a {
      color: var(--mute);
      transition: color 0.25s;
    }

    .ft-bar a:hover {
      color: var(--green-hi);
    }

    /* Watermark INRANK wordmark at bottom */
    .ft-mark {
      height: 0.72em;
      overflow: hidden;
      margin-top: clamp(12px, 2.5vw, 28px);
      text-align: center;
      font-size: clamp(4.5rem, 21vw, 19rem);
      font-weight: 900;
      letter-spacing: 0.05em;
      line-height: 1;
      cursor: default;
      user-select: none;
      color: transparent;
      background: linear-gradient(180deg, rgba(0, 191, 93, 0.25) 0%, rgba(0, 191, 93, 0.02) 80%);
      -webkit-background-clip: text;
      background-clip: text;
    }

    /* Responsive */
    @media (max-width: 1023px) {
      .ft-cta {
        grid-template-columns: minmax(0, 1fr);
        align-items: start;
        gap: 36px;
      }
      .ft-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .ft-brand {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 639px) {
      .ft-btns .ft-btn {
        flex: 1 1 0;
        padding: 0 14px;
        white-space: nowrap;
        font-size: 0.75rem;
        letter-spacing: 0.04em;
      }
      .ft-grid {
        row-gap: 36px;
      }
      .ft-hq {
        grid-column: 1 / -1;
      }
      .ft-bar {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body style="margin:0; background:#081424; color:#ffffff;">

  <div style="padding: 100px 24px; text-align: center; color: #64748b;">
    [Page content above footer]
  </div>

  <!-- OACER-STYLE MASTER FOOTER WITH INRANK DATA -->
  <footer data-nosnippet="true" class="ft">
    <div class="ft-glow" aria-hidden="true"></div>

    <!-- Top CTA Block -->
    <div class="ft-wrap ft-cta">
      <div>
        <p class="ft-label">Start a project</p>
        <h2 class="ft-title">
          Tell us what you’re building.
          <span>We’ll show you how we’d build it.</span>
        </h2>
      </div>

      <div class="ft-cta-side">
        <ul class="ft-points">
          <li>A reply within one business day</li>
          <li>Direct consultation with senior pod, no junior interns</li>
          <li>Full technical audit &amp; fixed milestone estimate</li>
        </ul>
        <div class="ft-btns">
          <a class="ft-btn" href="/contact.html">
            Start a project
            <svg stroke="currentColor" fill="none" stroke-width="2.2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" height="14" width="14">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          <a href="https://wa.me/918788823182" class="ft-btn ft-btn--ghost" target="_blank" rel="noopener noreferrer">
            WhatsApp us
            <svg stroke="currentColor" fill="none" stroke-width="2.2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" height="14" width="14">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- 4-Column Grid -->
    <div class="ft-wrap ft-grid">
      <!-- Col 1: Brand & Pune Bio -->
      <div class="ft-brand">
        <a href="/" class="ft-brand-logo" aria-label="Inrank Technologies Home">
          <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" />
          <div style="display:flex;flex-direction:column;line-height:1.1;">
            <span style="font-size:1.25rem;font-weight:850;color:#ffffff;letter-spacing:-0.03em;">Inrank</span>
            <span style="font-size:0.65rem;font-weight:750;color:var(--green-hi);letter-spacing:0.12em;text-transform:uppercase;">Technologies</span>
          </div>
        </a>
        <p>Performance-first digital growth engineering, conversion-engineered web platforms, and authoritative search dominance. Built by senior engineers in Baner, Pune since 2018.</p>
        
        <div class="ft-social">
          <a href="https://wa.me/918788823182" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/company/inranktech/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.instagram.com/inranktech/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="mailto:contact@inranktech.com" aria-label="Email">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
          <a href="tel:+918788823182" aria-label="Phone">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
        </div>
      </div>

      <!-- Col 2: Company -->
      <nav aria-labelledby="ft-company">
        <h3 id="ft-company">Company</h3>
        <ul>
          <li><a href="/about.html">About Inrank</a></li>
          <li><a href="/about.html#prasad-mhaske">Leadership Profile</a></li>
          <li><a href="/our-work.html">Our Work &amp; Portfolio</a></li>
          <li><a href="/case-studies.html">Case Studies</a></li>
          <li><a href="/pricing.html">Pricing Architecture</a></li>
          <li><a href="/contact.html">Baner Engineering Lab</a></li>
        </ul>
      </nav>

      <!-- Col 3: Expertise -->
      <nav aria-labelledby="ft-expertise">
        <h3 id="ft-expertise">Expertise</h3>
        <ul>
          <li><a href="/services/seo-company-pune.html">SEO Company Pune</a></li>
          <li><a href="/services/custom-website-development.html">Custom Web Development</a></li>
          <li><a href="/services/ppc-services.html">Google Ads &amp; PPC</a></li>
          <li><a href="/services/meta-ads-agency.html">Meta &amp; Instagram Ads</a></li>
          <li><a href="/services/ui-ux-design-services.html">Brand Identity &amp; CRO</a></li>
          <li><a href="/services.html">All 27 Services</a></li>
        </ul>
      </nav>

      <!-- Col 4: Pune HQ & Contact -->
      <div class="ft-hq">
        <h3>Pune HQ &amp; Lab</h3>
        <address>Baner Road, Near Balewadi High Street, Baner, Pune, Maharashtra 411045, India</address>
        <p>
          <a href="tel:+918788823182">Direct: (+91) 87888 23182</a>
          <a href="https://wa.me/918788823182">WhatsApp: (+91) 87888 23182</a>
          <a href="mailto:contact@inranktech.com">contact@inranktech.com</a>
        </p>
        <span class="ft-hq-corridors">Serving Baner · Balewadi · Hinjewadi · Aundh · Kothrud · PCMC Belt</span>
      </div>
    </div>

    <!-- Bottom Legal Bar -->
    <div class="ft-wrap ft-bar">
      <p>© 2026 Inrank Technologies Pvt Ltd · Baner, Pune, India. All rights reserved.</p>
      <nav aria-label="Legal">
        <a href="/privacy-policy.html">Privacy Policy</a>
        <a href="/terms-and-conditions.html">Terms of Service</a>
        <a href="/contact.html">Contact Us</a>
        <a href="https://wa.me/918788823182">Direct WhatsApp</a>
      </nav>
    </div>

    <!-- Giant Watermark Wordmark -->
    <p class="ft-mark" aria-hidden="true">INRANK</p>
  </footer>

</body>
</html>`;

fs.writeFileSync('inrank2.0/test_footer.html', testHtml, 'utf8');
console.log('Saved inrank2.0/test_footer.html');

