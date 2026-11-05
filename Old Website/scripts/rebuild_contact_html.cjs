const fs = require('fs');

let content = fs.readFileSync('inrank2.0/contact.html', 'utf8');

const mainStart = content.indexOf('<main id="main">');
const footerStart = content.indexOf('<!-- ============================================================', mainStart);

const newMainContent = `<main id="main">
    
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:48vh;padding-top:calc(var(--nav-h) + 3.5rem);padding-bottom:3.5rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="shell hero-content">
        <div class="hero-copy">
          <span class="section-kicker">DIRECT SENIOR ARCHITECT ACCESS</span>
          <h1 class="hero-title" style="margin-top:0.75rem;margin-bottom:1rem;font-size:clamp(2.4rem, 4.2vw, 3.8rem);">
            Let's Talk <em>Growth.</em>
          </h1>
          <p class="hero-sub" style="max-width:820px;font-size:clamp(1.05rem, 1.5vw, 1.25rem);color:var(--terra-hero);line-height:1.55;">
            Connect directly with Prasad Mhaske and our senior growth engineering pod in Baner, Pune. Receive an objective technical audit of your existing site and an actionable 90-day search roadmap with zero sales pitch.
          </p>

          <!-- Quick Trust Metadata (Strict Lifetime Rule: NO PILLS, NO GREEN DOTS, NO EMOJIS) -->
          <div class="hero-trust-bar">
            <div class="hero-trust-item">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke-width="2.2"><circle cx="10" cy="10" r="8"/><polyline points="10 5 10 10 13 13"/></svg>
              <span><strong>15-Minute</strong> Response SLA</span>
            </div>
            <div class="hero-trust-item">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke-width="2.2"><path d="M10 2L3 5v6c0 5 7 8 7 8s7-3 7-8V5l-7-3z"/></svg>
              <span><strong>Transparent</strong> Fixed Pricing</span>
            </div>
            <div class="hero-trust-item">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke-width="2.2"><rect x="2" y="3" width="16" height="11" rx="2"/><path d="M6 17h8M10 14v3"/></svg>
              <span><strong>Direct</strong> Senior Access</span>
            </div>
            <div class="hero-trust-item">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke-width="2.2"><path d="M10 2a6 6 0 0 0-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
              <span><strong>Baner HQ</strong>, Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Grid Section -->
    <section class="contact-section" aria-labelledby="contact-heading">
      <div class="shell contact-grid">
        
        <!-- Left Column: Direct Senior Channels & Assurance -->
        <div>
          <span class="section-kicker">DIRECT SENIOR CHANNELS</span>
          <h2 class="section-title" id="contact-heading" style="margin-bottom:1rem;font-size:clamp(2rem, 3.2vw, 2.75rem);">Speak directly with an engineer, not a salesperson.</h2>
          <p class="section-copy" style="margin-bottom:2rem;color:#64748b;line-height:1.6;">
            No junior account managers, outsourced support, or generic slide decks. When you contact Inrank, you interface directly with senior practitioners who build high-performance web systems and drive organic search dominance.
          </p>

          <div class="contact-channels-list">
            <!-- WhatsApp & Phone -->
            <a href="https://wa.me/918788823182?text=Hello%20Inrank,%20I%20would%20like%20to%20discuss%20a%20website%20or%20marketing%20project." target="_blank" rel="noopener noreferrer" class="contact-channel-card">
              <div class="channel-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div style="flex-grow:1;">
                <span class="channel-kicker">Phone &amp; WhatsApp · Fastest Channel</span>
                <strong class="channel-val">+91 87888 23182</strong>
                <p class="channel-desc">Direct access to Prasad Mhaske. Instant project briefing &amp; quick quotation.</p>
              </div>
            </a>

            <!-- Direct Inquiries Email -->
            <a href="mailto:contact@inranktech.com" class="contact-channel-card">
              <div class="channel-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div style="flex-grow:1;">
                <span class="channel-kicker">Direct Inquiries Email</span>
                <strong class="channel-val" style="font-size:1.05rem;">contact@inranktech.com</strong>
                <p class="channel-desc">Formal RFPs, technical specifications, and complimentary audit requests.</p>
              </div>
            </a>

            <!-- Baner Lab Physical Address -->
            <div class="contact-channel-card" style="cursor:default;">
              <div class="channel-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div style="flex-grow:1;">
                <span class="channel-kicker">Baner Engineering Lab</span>
                <strong class="channel-val" style="font-size:1.02rem;">Office No. 11, Shree Bhagwati Suvarna Complex, Baner Road, Near Balewadi High Street, Pune 411045</strong>
                <p class="channel-desc">In-person strategy reviews by appointment. Open Mon–Sat, 9:30 AM – 7:30 PM IST.</p>
              </div>
            </div>
          </div>

          <!-- Process Box: What Happens Next -->
          <div class="process-box">
            <h3 class="process-title">What Happens After You Inquire:</h3>
            <div class="process-steps">
              <div class="process-step-item">
                <div class="process-step-num">1</div>
                <div>
                  <strong>15-Min Scoping or WhatsApp Review</strong>
                  <p>We review your business goals, target Pune/national search terms, and current website architecture.</p>
                </div>
              </div>
              <div class="process-step-item">
                <div class="process-step-num">2</div>
                <div>
                  <strong>48-Hour Technical &amp; SEO Audit</strong>
                  <p>You receive a complimentary deep-dive audit analyzing speed, indexation, ranking gaps, and competitors.</p>
                </div>
              </div>
              <div class="process-step-item">
                <div class="process-step-num">3</div>
                <div>
                  <strong>Fixed-Price Sprint Proposal</strong>
                  <p>Transparent fixed pricing (from ₹11,999), 5-7 day sprint milestones, and zero hidden retainer fees.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Pune Service Coverage -->
          <div class="coverage-box">
            <span class="coverage-kicker">Pune Local Service Coverage</span>
            <p>Baner · Balewadi High Street · Hinjewadi Phase 1-3 · Aundh · Wakad · Kothrud · Shivaji Nagar · Viman Nagar · Kharadi · Magarpatta · Bhosari &amp; PCMC Industrial Belt.</p>
          </div>
        </div>

        <!-- Right Column: Interactive Consultation Form Card -->
        <div>
          <div class="form-card">
            <div class="form-head">
              <span class="section-kicker">COMPLIMENTARY STRATEGY SESSION</span>
              <h3>Request Consultation</h3>
              <p>Fill out your details below. Prasad Mhaske will review your digital footprint and return an actionable plan within 24 hours.</p>
            </div>

            <form class="contact-form" action="/contact.php" method="POST" id="inrank-contact-form">
              <input type="text" name="_hp_company_field" style="display:none;" tabindex="-1" autocomplete="off" />

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="form-name">
                    <span>Your Full Name</span> <span class="req">*</span>
                  </label>
                  <input type="text" class="form-input" id="form-name" name="name" placeholder="e.g. Vikram Shinde" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="form-phone">
                    <span>Phone / WhatsApp Number</span> <span class="req">*</span>
                  </label>
                  <input type="tel" class="form-input" id="form-phone" name="phone" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="form-email">
                    <span>Work Email</span> <span class="req">*</span>
                  </label>
                  <input type="email" class="form-input" id="form-email" name="email" placeholder="name@company.com" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="form-url">
                    <span>Current Website URL / Brand</span>
                  </label>
                  <input type="text" class="form-input" id="form-url" name="url" placeholder="https://example.com" />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="form-service">
                  <span>Required Capability</span> <span class="req">*</span>
                </label>
                <select class="form-select" id="form-service" name="service" required>
                  <option value="Custom Website Development">Custom Website Development (from ₹11,999)</option>
                  <option value="Local SEO & Google 3-Pack" selected>Local SEO &amp; Google 3-Pack Domination (from ₹11,999/mo)</option>
                  <option value="Growth SEO & Organic Scale">Growth SEO &amp; Organic Scale (from ₹18,999/mo)</option>
                  <option value="Social Media & Viral Reels">Social Media &amp; Reels Growth (from ₹11,499/mo)</option>
                  <option value="Google & Meta Ads PPC">Google &amp; Meta Ads Management</option>
                  <option value="E-Commerce & Shopify Store">Custom E-Commerce Store (from ₹21,999)</option>
                  <option value="Brand Identity & CRO">Brand Identity &amp; Conversion Rate Optimization</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="form-package">
                  <span>Target Investment / Package</span>
                </label>
                <select class="form-select" id="form-package" name="package">
                  <option value="Starter Tier (₹11,999)">Starter Website / Local SEO — ₹11,999</option>
                  <option value="Growth Tier (₹16,999 - ₹18,999)" selected>Growth Business / Growth SEO — ₹16,999 to ₹18,999</option>
                  <option value="Scale Tier (₹21,999 - ₹27,999)">Custom E-Commerce / Market Authority — ₹21,999 to ₹27,999</option>
                  <option value="Custom Enterprise">Custom Enterprise Scope</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="form-message">
                  <span>Project Goals or Primary Bottleneck</span>
                </label>
                <textarea class="form-textarea" id="form-message" name="message" placeholder="Briefly describe your business goals, target keywords, or what needs fixing..."></textarea>
              </div>

              <button type="submit" class="form-btn-submit">
                <span>Submit Consultation Request</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
              </button>

              <a href="https://wa.me/918788823182?text=Hello%20Inrank,%20I%20would%20like%20to%20discuss%20a%20website%20or%20marketing%20project." target="_blank" rel="noopener noreferrer" class="form-btn-wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2.2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                <span>Or Chat Directly on WhatsApp (+91 87888 23182)</span>
              </a>

              <div class="form-footnote">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009d49" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>100% Confidential. Zero spam. Direct senior response from Baner, Pune.</span>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>

  </main>

  `;

content = content.substring(0, mainStart) + newMainContent + content.substring(footerStart);
fs.writeFileSync('inrank2.0/contact.html', content, 'utf8');
console.log('Successfully rebuilt inrank2.0/contact.html');

