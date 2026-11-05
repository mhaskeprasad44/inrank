const fs = require('fs');

const contactCss = `
/* ══════════════════════════════════════════════════════════════
   CONTACT PAGE ARCHITECTURE (INRANK 2.0 CORPORATE SPECIFICATION)
   ══════════════════════════════════════════════════════════════ */
.contact-section {
  padding: clamp(4rem, 6vw, 6rem) 0 !important;
  background: #f8fafc !important;
}

.contact-grid {
  display: grid !important;
  grid-template-columns: 1fr 1.18fr !important;
  gap: clamp(2rem, 4vw, 4rem) !important;
  align-items: start !important;
}

/* Hero Trust Bar: Strict Rule NO PILLS, NO GREEN DOTS */
.hero-trust-bar {
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  gap: 1.75rem !important;
  margin-top: 2rem !important;
}

.hero-trust-item {
  font-size: 0.88rem !important;
  font-weight: 700 !important;
  color: #cbd5e1 !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
}

.hero-trust-item svg {
  stroke: #00bf5d !important;
  flex-shrink: 0 !important;
}

.hero-trust-item strong {
  color: #ffffff !important;
}

/* Left Column: Direct Senior Channels */
.contact-channels-list {
  display: flex !important;
  flex-direction: column !important;
  gap: 1.25rem !important;
  margin: 2rem 0 2.25rem !important;
}

.contact-channel-card {
  display: flex !important;
  align-items: flex-start !important;
  gap: 1.25rem !important;
  padding: 1.5rem !important;
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 16px !important;
  text-decoration: none !important;
  color: inherit !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
  box-shadow: 0 1px 3px rgba(8, 20, 36, 0.03) !important;
}

.contact-channel-card:hover {
  border-color: #009d49 !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 20px rgba(8, 20, 36, 0.06) !important;
}

.channel-icon-box {
  width: 48px !important;
  height: 48px !important;
  border-radius: 12px !important;
  background: rgba(0, 157, 73, 0.08) !important;
  color: #009d49 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
}

.channel-kicker {
  font-size: 0.72rem !important;
  font-weight: 850 !important;
  color: #009d49 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  display: block !important;
  margin-bottom: 2px !important;
}

.channel-val {
  font-size: 1.2rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  display: block !important;
  letter-spacing: -0.01em !important;
}

.channel-desc {
  font-size: 0.85rem !important;
  color: #64748b !important;
  margin: 4px 0 0 !important;
  line-height: 1.45 !important;
}

/* Process Box */
.process-box {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 16px !important;
  padding: 1.75rem !important;
  margin-bottom: 2rem !important;
}

.process-title {
  font-size: 1.05rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  margin: 0 0 1.25rem !important;
  letter-spacing: -0.01em !important;
}

.process-steps {
  display: flex !important;
  flex-direction: column !important;
  gap: 1.25rem !important;
}

.process-step-item {
  display: flex !important;
  align-items: flex-start !important;
  gap: 1rem !important;
}

.process-step-num {
  width: 28px !important;
  height: 28px !important;
  border-radius: 8px !important;
  background: #f1f5f9 !important;
  color: #081424 !important;
  font-weight: 850 !important;
  font-size: 0.82rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
}

.process-step-item strong {
  display: block !important;
  font-size: 0.92rem !important;
  color: #081424 !important;
  margin-bottom: 2px !important;
}

.process-step-item p {
  font-size: 0.84rem !important;
  color: #64748b !important;
  margin: 0 !important;
  line-height: 1.45 !important;
}

/* Pune Coverage Tags */
.coverage-box {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 14px !important;
  padding: 1.25rem 1.5rem !important;
}

.coverage-kicker {
  font-size: 0.72rem !important;
  font-weight: 850 !important;
  color: #64748b !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  margin-bottom: 6px !important;
  display: block !important;
}

.coverage-box p {
  font-size: 0.84rem !important;
  color: #475569 !important;
  margin: 0 !important;
  line-height: 1.5 !important;
}

/* Right Column: The Form Card */
.form-card {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 20px !important;
  padding: 2.75rem 2.5rem !important;
  box-shadow: 0 10px 30px rgba(8, 20, 36, 0.05) !important;
}

.form-head {
  margin-bottom: 2rem !important;
}

.form-head h3 {
  font-size: 1.6rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  margin: 0 0 0.5rem !important;
  letter-spacing: -0.02em !important;
}

.form-head p {
  font-size: 0.9rem !important;
  color: #64748b !important;
  margin: 0 !important;
  line-height: 1.5 !important;
}

.contact-form {
  display: flex !important;
  flex-direction: column !important;
  gap: 1.25rem !important;
}

.form-row {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 1.25rem !important;
}

.form-group {
  display: flex !important;
  flex-direction: column !important;
  gap: 6px !important;
}

.form-label {
  font-size: 0.76rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  display: flex !important;
  align-items: center !important;
  gap: 4px !important;
}

.form-label span.req {
  color: #009d49 !important;
}

.form-input,
.form-select {
  width: 100% !important;
  height: 48px !important;
  padding: 0 16px !important;
  background: #ffffff !important;
  border: 1.5px solid #cbd5e1 !important;
  border-radius: 10px !important;
  font-size: 0.92rem !important;
  color: #081424 !important;
  font-family: inherit !important;
  transition: all 0.2s ease !important;
  box-sizing: border-box !important;
}

.form-textarea {
  width: 100% !important;
  min-height: 110px !important;
  padding: 12px 16px !important;
  background: #ffffff !important;
  border: 1.5px solid #cbd5e1 !important;
  border-radius: 10px !important;
  font-size: 0.92rem !important;
  color: #081424 !important;
  font-family: inherit !important;
  resize: vertical !important;
  transition: all 0.2s ease !important;
  box-sizing: border-box !important;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #009d49 !important;
  outline: none !important;
  box-shadow: 0 0 0 3px rgba(0, 157, 73, 0.12) !important;
}

.form-btn-submit {
  width: 100% !important;
  height: 50px !important;
  background: #009d49 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 10px !important;
  font-size: 0.95rem !important;
  font-weight: 800 !important;
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  transition: all 0.2s ease !important;
  box-shadow: 0 4px 14px rgba(0, 157, 73, 0.25) !important;
  font-family: inherit !important;
}

.form-btn-submit:hover {
  background: #00873e !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 6px 20px rgba(0, 157, 73, 0.35) !important;
}

.form-btn-wa {
  width: 100% !important;
  height: 48px !important;
  background: #f8fafc !important;
  color: #081424 !important;
  border: 1.5px solid #cbd5e1 !important;
  border-radius: 10px !important;
  font-size: 0.92rem !important;
  font-weight: 750 !important;
  text-decoration: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  transition: all 0.2s ease !important;
  margin-top: 8px !important;
}

.form-btn-wa:hover {
  background: #f1f5f9 !important;
  border-color: #94a3b8 !important;
}

.form-footnote {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  margin-top: 1.25rem !important;
  font-size: 0.78rem !important;
  color: #64748b !important;
}

@media (max-width: 991px) {
  .contact-grid {
    grid-template-columns: 1fr !important;
    gap: 2.5rem !important;
  }
  .form-row {
    grid-template-columns: 1fr !important;
  }
  .form-card {
    padding: 2rem 1.5rem !important;
  }
}
`;

let css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
css += '\n' + contactCss;
fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
console.log('Successfully appended contact page CSS to inrank2.0/css/corporate.css');

