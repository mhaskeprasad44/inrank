const fs = require('fs');

const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const newRules = `
/* ================================================================
   SERVICE CARD CHECKLIST (SINGLE COLUMN WITH CHECK BADGE)
   ================================================================ */
.service-card-checklist {
  list-style: none !important;
  padding: 0 !important;
  margin: 0 0 1.5rem 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.65rem !important;
}

.service-check-item {
  display: flex !important;
  align-items: center !important;
  gap: 0.65rem !important;
  font-size: 0.86rem !important;
  font-weight: 600 !important;
  color: #334155 !important;
  line-height: 1.35 !important;
}

.service-check-badge {
  width: 18px !important;
  height: 18px !important;
  border-radius: 50% !important;
  background: rgba(0, 157, 73, 0.12) !important;
  color: #009d49 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
  transition: all 0.25s ease !important;
}

.service-card:hover .service-check-badge {
  background: #009d49 !important;
  color: #ffffff !important;
  transform: scale(1.08) !important;
}
`;

if (!css.includes('.service-card-checklist')) {
  fs.writeFileSync('inrank2.0/css/corporate.css', css + '\n' + newRules, 'utf8');
  console.log('Appended checklist styles to inrank2.0/css/corporate.css');
} else {
  console.log('Styles already present in corporate.css');
}

