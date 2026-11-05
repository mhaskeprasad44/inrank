const fs = require('fs');

const cssToAdd = `

/* ============================================================
   OACER-STYLE MASTER FOOTER (INRANK ARCHITECTURE)
   ============================================================ */
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

/* Responsive Breakpoints */
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
`;

let corp = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
if (!corp.includes('.ft {')) {
  corp += cssToAdd;
  fs.writeFileSync('inrank2.0/css/corporate.css', corp, 'utf8');
  console.log('Appended .ft styles to inrank2.0/css/corporate.css');
} else {
  console.log('.ft already in corporate.css');
}

