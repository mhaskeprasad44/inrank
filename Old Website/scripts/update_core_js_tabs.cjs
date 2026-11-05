const fs = require('fs');
let js = fs.readFileSync('inrank2.0/js/core.js', 'utf8');

const tabScript = `
  // ── Pricing Category Switcher Tabs ──
  document.querySelectorAll('.pricing-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.closest('.pricing-section, #packages, .pricing-wrap') || document;
      const targetId = btn.getAttribute('data-tab');
      if (!targetId) return;

      container.querySelectorAll('.pricing-tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      container.querySelectorAll('.pricing-content-panel').forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.remove('is-hidden');
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('is-hidden');
        }
      });
    });
  });
`;

// Insert before the last closing of init or at the end of DOMContentLoaded
if (js.includes('initFaqAccordion();')) {
  js = js.replace('initFaqAccordion();', 'initFaqAccordion();\n' + tabScript);
} else {
  js += '\n' + tabScript;
}

fs.writeFileSync('inrank2.0/js/core.js', js, 'utf8');
console.log('Successfully updated inrank2.0/js/core.js with pricing tab logic');

