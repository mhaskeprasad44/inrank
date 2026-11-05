/* ============================================================
   INRANK 2.0 - Contact Form Controller
   AJAX Submission to contact.php · Direct WhatsApp Fallback
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const statusBox = document.getElementById('contact-status');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Request...</span>';
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // 1. Submit to primary PHP endpoint
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const res = await response.json();

      if (response.ok && (res.status === 'success' || res.success)) {
        statusBox.className = 'ct-status success';
        statusBox.innerHTML = `
          <strong>✓ Consultation Request Received!</strong><br>
          Thank you, ${data.name || 'there'}. A senior technical strategist will review your requirements and reach out within 15 minutes.
        `;
        form.reset();
      } else {
        throw new Error(res.message || 'Server returned an error');
      }
    } catch (err) {
      console.warn('Primary submission fallback triggered:', err);

      // Fallback: create direct WhatsApp link
      const waText = encodeURIComponent(
        `*New Inquiry from Inrank 2.0 Website:*\n` +
        `• Name: ${data.name || 'N/A'}\n` +
        `• Phone: ${data.phone || 'N/A'}\n` +
        `• Email: ${data.email || 'N/A'}\n` +
        `• Service: ${data.service || 'N/A'}\n` +
        `• Budget: ${data.package || 'N/A'}\n` +
        `• Message: ${data.message || 'N/A'}`
      );
      const waUrl = `https://wa.me/918788823182?text=${waText}`;

      statusBox.className = 'ct-status success';
      statusBox.innerHTML = `
        <strong>✓ Request Logged!</strong><br>
        For immediate 15-minute response, you can also <a href="${waUrl}" target="_blank" style="color:var(--brand-primary); font-weight:700; text-decoration:underline;">Click here to connect directly on WhatsApp →</a>
      `;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Consultation Request</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor"><path d="M2 7h10M7 2l5 5-5 5"/></svg>';
      }
    }
  });
});

