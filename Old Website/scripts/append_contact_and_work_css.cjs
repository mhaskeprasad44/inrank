const fs = require('fs');

const extraCss = `
/* ══════════════════════════════════════════════════════════════════
   INRANK 2.0 WORK & CONTACT CORPORATE EXTENSIONS
   ══════════════════════════════════════════════════════════════════ */

/* Work Card Screenshot Fixes */
.work-card-media {
  height: 230px !important;
  background: #081424 !important;
  position: relative !important;
  overflow: hidden !important;
  padding: 0 !important;
  display: block !important;
  border-bottom: 1px solid var(--line) !important;
}

.work-card-media img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: top center !important;
  display: block !important;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.work-card:hover .work-card-media img {
  transform: scale(1.05) !important;
}

.work-card-pill {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(8, 20, 36, 0.88);
  backdrop-filter: blur(8px);
  color: #34d399;
  border: 1px solid rgba(52, 211, 153, 0.35);
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 750;
  z-index: 2;
  letter-spacing: 0.02em;
}

.work-card-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.work-card-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  font-weight: 750;
  color: #ffffff;
  background: var(--terra);
  padding: 6px 14px;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.work-card-link:hover {
  background: #00873e;
  transform: translateX(2px);
}

.work-live-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
  background: rgba(8, 20, 36, 0.05);
  padding: 6px 10px;
  border-radius: 999px;
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
}

.work-live-link:hover {
  color: var(--text-strong);
  background: rgba(8, 20, 36, 0.1);
}

/* Filter Strip */
.filter-btn {
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  border: 1px solid var(--line);
  background: #ffffff;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.filter-btn:hover {
  border-color: var(--terra);
  color: var(--terra);
}

.filter-btn.is-active {
  background: var(--navy);
  color: #ffffff;
  border-color: var(--navy);
}

/* ══════════════════════════════════════════════════════════════════
   CONTACT PAGE 2.0 CORPORATE SYSTEM
   ══════════════════════════════════════════════════════════════════ */
.contact-section {
  padding: 4.5rem 0 6rem;
  background: var(--paper);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 3.5rem;
  align-items: flex-start;
}

@media (max-width: 960px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.contact-channel-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.contact-channel-card:hover {
  transform: translateY(-3px);
  border-color: var(--terra);
  box-shadow: 0 12px 32px rgba(8, 20, 36, 0.06);
}

.channel-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(0, 157, 73, 0.1);
  color: var(--terra);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.timeline-step {
  display: flex;
  gap: 14px;
  position: relative;
  padding-bottom: 1.25rem;
}

.timeline-step:last-child {
  padding-bottom: 0;
}

.timeline-step::before {
  content: '';
  position: absolute;
  top: 32px;
  left: 15px;
  bottom: 0;
  width: 2px;
  background: var(--line);
}

.timeline-step:last-child::before {
  display: none;
}

.timeline-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--navy);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 2;
}

.contact-form-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 2.75rem 2.25rem;
  box-shadow: 0 24px 64px rgba(8, 20, 36, 0.06);
  position: sticky;
  top: calc(var(--nav-h) + 1.5rem);
}

@media (max-width: 640px) {
  .contact-form-card {
    padding: 1.75rem 1.25rem;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1.25rem;
}

.form-label {
  font-size: 0.8125rem;
  font-weight: 750;
  color: var(--text-strong);
  display: flex;
  justify-content: space-between;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #ffffff;
  font-family: inherit;
  font-size: 0.92rem;
  color: var(--text-strong);
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  box-sizing: border-box;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--terra);
  box-shadow: 0 0 0 4px rgba(0, 157, 73, 0.12);
}

.form-textarea {
  min-height: 110px;
  resize: vertical;
}

.form-btn-submit {
  width: 100%;
  padding: 14px 24px;
  border-radius: 999px;
  background: var(--terra);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 800;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 8px 24px rgba(0, 157, 73, 0.25);
  font-family: inherit;
}

.form-btn-submit:hover {
  background: #00873e;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 157, 73, 0.35);
}
`;

const cssPath = 'inrank2.0/css/corporate.css';
let currentCss = fs.readFileSync(cssPath, 'utf8');

// Check if already appended
if (!currentCss.includes('INRANK 2.0 WORK & CONTACT CORPORATE EXTENSIONS')) {
  currentCss += '\n' + extraCss;
  fs.writeFileSync(cssPath, currentCss, 'utf8');
  console.log('Appended Work & Contact CSS extensions to inrank2.0/css/corporate.css');
} else {
  console.log('Extensions already present in corporate.css');
}

