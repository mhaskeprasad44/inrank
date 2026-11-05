const fs = require('fs');

const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const filterCss = `
/* ================================================================
   PORTFOLIO & CASE STUDIES FILTER STRIP (MODERN SEGMENTED PILLS)
   ================================================================ */
.work-filter-strip {
  background: rgba(255, 255, 255, 0.94) !important;
  border-bottom: 1px solid rgba(8, 20, 36, 0.08) !important;
  padding: 1.15rem 0 !important;
  position: sticky !important;
  top: var(--nav-h) !important;
  z-index: 85 !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  box-shadow: 0 4px 20px rgba(8, 20, 36, 0.03) !important;
}

.work-filter-wrap {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  gap: 14px !important;
}

.work-filter-label {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  font-size: 0.76rem !important;
  font-weight: 850 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: #64748b !important;
}

.work-filter-label-dot {
  width: 7px !important;
  height: 7px !important;
  border-radius: 50% !important;
  background: #009d49 !important;
  box-shadow: 0 0 8px rgba(0, 157, 73, 0.6) !important;
}

.work-filter-pills {
  display: flex !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  gap: 8px !important;
}

.filter-btn {
  appearance: none !important;
  -webkit-appearance: none !important;
  border: 1px solid rgba(8, 20, 36, 0.1) !important;
  background: #ffffff !important;
  color: #475569 !important;
  padding: 7px 16px !important;
  border-radius: 999px !important;
  font-size: 0.82rem !important;
  font-weight: 700 !important;
  font-family: inherit !important;
  cursor: pointer !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
  line-height: 1.2 !important;
}

.filter-btn:hover {
  border-color: #009d49 !important;
  color: #009d49 !important;
  background: rgba(0, 157, 73, 0.04) !important;
  transform: translateY(-1px) !important;
}

.filter-btn.is-active {
  background: #081424 !important;
  color: #ffffff !important;
  border-color: #081424 !important;
  box-shadow: 0 4px 14px rgba(8, 20, 36, 0.18) !important;
}

.filter-btn .filter-count {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 0.72rem !important;
  font-weight: 800 !important;
  padding: 2px 7px !important;
  border-radius: 999px !important;
  background: rgba(8, 20, 36, 0.06) !important;
  color: #475569 !important;
  line-height: 1 !important;
  transition: all 0.25s ease !important;
}

.filter-btn:hover .filter-count {
  background: rgba(0, 157, 73, 0.14) !important;
  color: #009d49 !important;
}

.filter-btn.is-active .filter-count {
  background: rgba(255, 255, 255, 0.2) !important;
  color: #ffffff !important;
}
`;

if (!css.includes('.work-filter-strip')) {
  fs.writeFileSync('inrank2.0/css/corporate.css', css + '\n' + filterCss, 'utf8');
  console.log('Appended work-filter-strip CSS to inrank2.0/css/corporate.css');
} else {
  console.log('work-filter-strip CSS already present');
}

