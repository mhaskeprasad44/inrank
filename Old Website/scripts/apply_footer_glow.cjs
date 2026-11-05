const fs = require('fs');

// 1. Update corporate.css
let css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const oldTarget = `/* Watermark INRANK wordmark at bottom */
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
}`;

const newTarget = `/* Watermark INRANK wordmark at bottom with interactive brand glow hover */
.ft-mark {
  height: 0.72em;
  overflow: hidden;
  margin-top: clamp(12px, 2.5vw, 28px);
  text-align: center;
  font-size: clamp(4.5rem, 21vw, 19rem);
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  color: transparent;
  background: linear-gradient(180deg, rgba(0, 191, 93, 0.22) 0%, rgba(0, 191, 93, 0.02) 80%);
  -webkit-background-clip: text;
  background-clip: text;
  transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
  will-change: filter, transform;
  position: relative;
}

.ft-mark:hover {
  background: radial-gradient(circle 420px at var(--mouse-x, 50%) var(--mouse-y, 50%), #00ff88 0%, #00bf5d 28%, #009d49 55%, rgba(0, 157, 73, 0.28) 85%);
  -webkit-background-clip: text;
  background-clip: text;
  filter: drop-shadow(0 0 25px rgba(0, 255, 136, 0.75)) drop-shadow(0 0 70px rgba(0, 157, 73, 0.5)) drop-shadow(0 0 120px rgba(0, 157, 73, 0.25));
  transform: translateY(-2px);
}`;

if (css.includes(oldTarget)) {
  css = css.replace(oldTarget, newTarget);
  fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
  console.log('[SUCCESS] Updated inrank2.0/css/corporate.css with .ft-mark:hover brand glow!');
} else {
  console.log('[WARN] oldTarget not found in corporate.css');
}

// 2. Update inrank2.0/js/core.js
let js = fs.readFileSync('inrank2.0/js/core.js', 'utf8');

const glowJs = `
  // Interactive Glowing Watermark in Footer (Cursor Spotlight Follow)
  (function initFooterWatermarkGlow() {
    const ftMark = document.querySelector('.ft-mark');
    if (!ftMark) return;

    ftMark.setAttribute('title', 'Click to scroll to top');

    ftMark.addEventListener('mousemove', (e) => {
      const rect = ftMark.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      ftMark.style.setProperty('--mouse-x', x.toFixed(1) + '%');
      ftMark.style.setProperty('--mouse-y', y.toFixed(1) + '%');
    });

    ftMark.addEventListener('mouseleave', () => {
      ftMark.style.setProperty('--mouse-x', '50%');
      ftMark.style.setProperty('--mouse-y', '50%');
    });

    ftMark.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();
`;

if (!js.includes('initFooterWatermarkGlow')) {
  js = js + '\n' + glowJs;
  fs.writeFileSync('inrank2.0/js/core.js', js, 'utf8');
  console.log('[SUCCESS] Added initFooterWatermarkGlow to inrank2.0/js/core.js!');
} else {
  console.log('[INFO] initFooterWatermarkGlow already present in core.js');
}

