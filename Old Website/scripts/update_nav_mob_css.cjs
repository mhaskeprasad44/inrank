const fs = require('fs');
let css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const mobExtra = `
/* ── Mobile Accordion Body & Item Links ── */
.mob-acc-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 0 16px 10px;
}

.mob-co {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-decoration: none;
  transition: background var(--dur-fast);
}

.mob-co:hover {
  background: rgba(255, 255, 255, 0.08);
}

.mob-co-name {
  font-size: 0.9375rem;
  font-weight: 650;
  color: #ffffff;
}

.mob-co-cat {
  font-size: 0.6875rem;
  font-weight: 700;
  color: var(--terra-hero);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
`;

css += mobExtra;
fs.writeFileSync('inrank2.0/css/nav.css', css);
console.log('nav.css updated with mob classes!');

