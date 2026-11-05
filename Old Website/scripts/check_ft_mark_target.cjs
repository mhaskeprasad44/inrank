const fs = require('fs');

const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const target = `/* Watermark INRANK wordmark at bottom */
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

console.log('Target found in corporate.css:', css.includes(target));

