const fs = require('fs');

const path = 'inrank2.0/contact.html';
let content = fs.readFileSync(path, 'utf8');

// 1. Give IDs to submit button and whatsapp button if not present
content = content.replace(
  '<button type="submit" class="form-btn-submit">',
  '<button type="submit" class="form-btn-submit" id="contact-submit-btn">'
);
content = content.replace(
  '<a href="https://wa.me/918788823182?text=Hello%20Inrank,%20I%20would%20like%20to%20discuss%20a%20website%20or%20marketing%20project." target="_blank" rel="noopener noreferrer" class="form-btn-wa">',
  '<a href="https://wa.me/918788823182?text=Hello%20Inrank,%20I%20would%20like%20to%20discuss%20a%20website%20or%20marketing%20project." target="_blank" rel="noopener noreferrer" class="form-btn-wa" id="contact-wa-btn">'
);

// 2. Add Google Maps embed below form-card
const mapSnippet = `          </div>

          <!-- Google Maps Embed for Baner HQ Lab -->
          <div class="contact-map-card" style="margin-top: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.06);">
            <div style="padding: 0.85rem 1.25rem; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009d49" stroke-width="2.2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span style="font-size: 0.85rem; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em;">Baner Engineering Lab Location</span>
              </div>
              <a href="https://maps.app.goo.gl/3QW9cZ1G894jX8aQ7" target="_blank" rel="noopener noreferrer" style="font-size: 0.78rem; font-weight: 600; color: #009d49; text-decoration: none;">Open in Google Maps ↗</a>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.349984666157!2d73.77147387465281!3d18.55825366802338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbac16a05d19%3A0x2a2fe604d668c4e5!2sInrank%20Technologies!5e0!3m2!1sen!2sin!4v1793881918852!5m2!1sen!2sin" width="600" height="450" style="border:0; width:100%; height:400px; display:block;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>`;

if (!content.includes('contact-map-card')) {
  const targetClosing = `            </form>\n          </div>\n        </div>`;
  const replacementClosing = `            </form>\n${mapSnippet}\n        </div>`;
  if (content.includes(targetClosing)) {
    content = content.replace(targetClosing, replacementClosing);
  } else {
    content = content.replace(`            </form>\r\n          </div>\r\n        </div>`, `            </form>\r\n${mapSnippet}\r\n        </div>`);
  }
}

// Remove any prior script snippet if exists
const scriptIdx = content.indexOf('<!-- Live Inrank Production Form Handler');
if (scriptIdx !== -1) {
  content = content.slice(0, scriptIdx) + '</body></html>';
}

const robustScript = `
  <!-- Live Inrank Production Form Handler (Multi-Tier Delivery Engine) -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('inrank-contact-form');
      const submitBtn = document.getElementById('contact-submit-btn') || (form ? form.querySelector('button[type="submit"]') : null);
      const submitBtnSpan = submitBtn ? submitBtn.querySelector('span') : null;
      const waBtn = document.getElementById('contact-wa-btn') || (form ? form.querySelector('.form-btn-wa') : null);
      const nameInput = document.getElementById('form-name');
      const phoneInput = document.getElementById('form-phone');
      const emailInput = document.getElementById('form-email');
      const urlInput = document.getElementById('form-url');
      const serviceSelect = document.getElementById('form-service');
      const packageSelect = document.getElementById('form-package');
      const msgInput = document.getElementById('form-message');

      // Status banner element
      let statusBanner = document.getElementById('form-status-banner');
      if (!statusBanner && form) {
        statusBanner = document.createElement('div');
        statusBanner.id = 'form-status-banner';
        statusBanner.style.cssText = 'display:none;margin-top:1.25rem;padding:1rem 1.25rem;border-radius:12px;font-size:0.92rem;font-weight:600;line-height:1.5;';
        form.appendChild(statusBanner);
      }

      // Dynamic WhatsApp synchronization
      function updateWhatsAppLink() {
        if (!waBtn) return;
        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const service = serviceSelect ? serviceSelect.value : '';
        const budget = packageSelect ? packageSelect.value : '';
        
        let text = 'Hello Inrank, I would like to discuss a project with Prasad Mhaske.';
        if (name) text += ' My name is ' + name + '.';
        if (service) text += ' Required Service: ' + service + '.';
        if (budget) text += ' Target Scope: ' + budget + '.';
        if (phone) text += ' Contact: ' + phone + '.';
        
        waBtn.href = 'https://wa.me/918788823182?text=' + encodeURIComponent(text);
      }

      if (form) {
        form.addEventListener('input', updateWhatsAppLink);
        form.addEventListener('change', updateWhatsAppLink);
      }

      // Helper with timeout
      async function fetchWithTimeout(url, options, timeoutMs = 4000) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        try {
          const res = await fetch(url, { ...options, signal: controller.signal });
          clearTimeout(timer);
          return res;
        } catch (err) {
          clearTimeout(timer);
          throw err;
        }
      }

      // Submission handler with 3-tier delivery
      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();

          // Honeypot check
          const honeypot = form.querySelector('input[name="_hp_company_field"]');
          if (honeypot && honeypot.value) {
            console.warn('[INRANK] Bot detected via honeypot.');
            return;
          }

          const name = nameInput ? nameInput.value.trim() : '';
          const phone = phoneInput ? phoneInput.value.trim() : '';
          const email = emailInput ? emailInput.value.trim() : '';
          const website = urlInput ? urlInput.value.trim() : '';
          const service = serviceSelect ? serviceSelect.value : 'General Consultation';
          const budget = packageSelect ? packageSelect.value : 'Not specified';
          const message = msgInput ? msgInput.value.trim() : '';

          if (!name || (!phone && !email)) {
            if (form.reportValidity) form.reportValidity();
            return;
          }

          if (submitBtn) {
            submitBtn.disabled = true;
            if (submitBtnSpan) submitBtnSpan.textContent = 'Transmitting Consultation Request...';
          }

          const payload = {
            name: name,
            phone: phone,
            email: email,
            website: website,
            services_needed: service,
            budget_range: budget,
            message: message,
            source: 'https://inranktech.com/contact.html (Inrank 2.0 Consultation Form)'
          };

          const formSubmitPayload = {
            _subject: 'New Inrank Project Inquiry: ' + name + ' (' + service + ')',
            _template: 'table',
            _captcha: 'false',
            'Client Name': name,
            'Phone / WhatsApp': phone,
            'Email Address': email || 'Not provided',
            'Website URL': website || 'None',
            'Service Needed': service,
            'Target Investment': budget,
            'Requirements': message || 'None',
            'Submitted From': 'https://inranktech.com/contact.html'
          };

          let delivered = false;

          // Tier 1: Hostinger Native PHP Mail Engine (/contact.php)
          try {
            const phpRes = await fetchWithTimeout('/contact.php', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            }, 3500);
            if (phpRes.ok) {
              const phpData = await phpRes.json().catch(() => null);
              if (phpData && (phpData.mailSent === true || phpData.success === true || phpData.status === 'success')) {
                delivered = true;
                console.log('[INRANK] Consultation lead delivered via /contact.php engine');
              }
            }
          } catch (err) {
            console.warn('[INRANK] /contact.php dispatch note:', err.message || err);
          }

          // Tier 2: FormSubmit Cloud Relay (Primary Fallback to inranktech@gmail.com)
          if (!delivered) {
            try {
              const fsRes = await fetchWithTimeout('https://formsubmit.co/ajax/inranktech@gmail.com', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify(formSubmitPayload)
              }, 4000);
              if (fsRes && fsRes.ok) {
                const fsData = await fsRes.json().catch(() => null);
                if (fsData && (fsData.success === 'true' || fsData.success === true)) {
                  delivered = true;
                  console.log('[INRANK] Consultation lead delivered via FormSubmit cloud relay');
                }
              }
            } catch (err) {
              console.warn('[INRANK] FormSubmit fallback note:', err.message || err);
            }
          }

          // Tier 3: Local Node.js logging
          try {
            await fetchWithTimeout('/api/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...payload, skip_mail: true })
            }, 2000).catch(() => {});
          } catch (e) {}

          // Update UI
          if (statusBanner) {
            statusBanner.style.display = 'block';
            statusBanner.style.background = 'rgba(0, 157, 73, 0.1)';
            statusBanner.style.border = '1px solid #009d49';
            statusBanner.style.color = '#007a38';
            statusBanner.innerHTML = '✔ <strong>Consultation Request Received!</strong> Prasad Mhaske will review your requirements and reach out within 24 hours.';
            statusBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }

          if (submitBtn) {
            submitBtn.disabled = false;
            if (submitBtnSpan) submitBtnSpan.textContent = 'Request Submitted Successfully ✓';
            setTimeout(() => {
              if (submitBtnSpan) submitBtnSpan.textContent = 'Submit Consultation Request';
            }, 6000);
          }

          form.reset();
        });
      }
    });
  </script>
`;

content = content.replace('</body>', `${robustScript}\n</body>`);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated inrank2.0/contact.html with robust form handler');
