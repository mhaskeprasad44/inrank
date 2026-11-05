const fs = require('fs');

function cleanText(text) {
  let res = text;

  // 1. "and," and "And,"
  res = res.replace(/\bAnd,\s*/g, 'And ');
  res = res.replace(/\band,\s*/g, 'and ');
  res = res.replace(/\bAND,\s*/g, 'AND ');
  res = res.replace(/\band,\b/g, 'and');
  res = res.replace(/\bAnd,\b/g, 'And');
  res = res.replace(/&amp;,\s*/g, '&amp; ');

  // 2. HTML dash entities
  res = res.replace(/\s*&mdash;\s*/g, ' - ');
  res = res.replace(/&mdash;/g, ' - ');
  res = res.replace(/\s*&#8212;\s*/g, ' - ');
  res = res.replace(/&#8212;/g, ' - ');
  res = res.replace(/\s*&ndash;\s*/g, ' - ');
  res = res.replace(/&ndash;/g, '-');
  res = res.replace(/\s*&#8211;\s*/g, ' - ');
  res = res.replace(/&#8211;/g, '-');

  // 3. Numbers/ranges with en-dash or em-dash: e.g. 5–7, Mon–Sat
  res = res.replace(/(\d+)\s*[—–]\s*(\d+)/g, (m, a, b) => a + '-' + b);
  res = res.replace(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s*[—–]\s*(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/gi, (m, a, b) => a + '-' + b);

  // 4. Em-dashes in titles and prose: e.g. "Title — Subtitle" or "word—word"
  res = res.replace(/\s*[—]\s*/g, ' - ');
  res = res.replace(/[—]/g, ' - ');

  // 5. En-dashes with spaces: "9:30 AM – 7:30 PM"
  res = res.replace(/\s*[–]\s*/g, ' - ');
  res = res.replace(/[–]/g, '-');

  // 6. Clean up any accidental double spaces around hyphens
  res = res.replace(/\s{2,}-\s{2,}/g, ' - ');
  res = res.replace(/\s{2,}-/g, ' -');
  res = res.replace(/-\s{2,}/g, '- ');

  return res;
}

const tests = [
  "Meet Inrank Technologies — Pune's premier performance web development",
  "CyTOS Machines — Inrank Technologies Case Study",
  "5–7 Day Sprint Delivery",
  "Mon–Sat, 9:30 AM – 7:30 PM IST",
  "Starter Website / Local SEO — ₹11,999",
  "₹16,999 — ₹18,999",
  "Dr. Shyam Thakkar — ARTICUL8 Foot & Ankle Clinic — Inrank",
  "GA4 and, where useful, your CRM",
  "with next steps and, where relevant, a free audit",
  "design, and, development"
];

for (const t of tests) {
  console.log('Original: ' + t);
  console.log('Cleaned:  ' + cleanText(t));
  console.log('---');
}

