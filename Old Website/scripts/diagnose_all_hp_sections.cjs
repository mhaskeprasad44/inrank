const { spawn } = require('child_process');
const fs = require('fs');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9620;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('localhost:8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    const result = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const checks = [];

          // Check Hero
          const hero = document.getElementById('top');
          if (hero) {
            const h1 = hero.querySelector('h1');
            const sub = hero.querySelector('.hero-sub, p');
            const stickers = hero.querySelectorAll('.hero-tech-sticker, .hero-platform-sticker, [class*="sticker"]');
            checks.push({
              section: 'hero',
              h1: h1 ? h1.textContent.trim().replace(/\\s+/g, ' ') : null,
              h1Color: h1 ? window.getComputedStyle(h1).color : null,
              stickersCount: stickers.length
            });
          }

          // Check Marquee
          const marquee = document.querySelector('.eco-marquee-band');
          if (marquee) {
            checks.push({
              section: 'marquee',
              display: window.getComputedStyle(marquee).display,
              items: marquee.querySelectorAll('.marquee-item, span').length
            });
          }

          // Check Services
          const services = document.getElementById('services');
          if (services) {
            const pillars = services.querySelectorAll('.eco-pillar-card');
            const cards = services.querySelectorAll('.eco-service-card');
            checks.push({
              section: 'services',
              pillarsCount: pillars.length,
              cardsCount: cards.length,
              pillarsW: Array.from(pillars).map(p => p.clientWidth),
              cardsW: Array.from(cards).map(c => c.clientWidth)
            });
          }

          // Check Philosophy
          const phil = document.getElementById('philosophy');
          if (phil) {
            const cards = phil.querySelectorAll('.eco-manifesto-card');
            checks.push({
              section: 'philosophy',
              cardsCount: cards.length,
              cardsW: Array.from(cards).map(c => c.clientWidth)
            });
          }

          // Check Process
          const proc = document.getElementById('process');
          if (proc) {
            const stages = proc.querySelectorAll('.eco-stage-card');
            const stack = proc.querySelector('.hero-stack-marquee-wrap');
            checks.push({
              section: 'process',
              stagesCount: stages.length,
              stagesW: Array.from(stages).map(s => s.clientWidth),
              stackW: stack ? stack.clientWidth : null
            });
          }

          // Check Niches
          const niches = document.getElementById('niches');
          if (niches) {
            const cards = niches.querySelectorAll('.eco-niche-card');
            checks.push({
              section: 'niches',
              cardsCount: cards.length,
              cardsW: Array.from(cards).map(c => c.clientWidth)
            });
          }

          // Check Proof
          const proof = document.getElementById('proof');
          if (proof) {
            checks.push({
              section: 'proof',
              statsCount: proof.querySelectorAll('.eco-proof-stat, .stat').length
            });
          }

          // Check Our Work
          const work = document.getElementById('our-work');
          if (work) {
            const cards = work.querySelectorAll('.eco-work-card');
            checks.push({
              section: 'our-work',
              cardsCount: cards.length,
              cardsW: Array.from(cards).map(c => c.clientWidth),
              imgs: Array.from(cards).map(c => {
                const img = c.querySelector('img');
                return {
                  src: img ? img.getAttribute('src') : null,
                  w: img ? img.clientWidth : null,
                  h: img ? img.clientHeight : null
                };
              })
            });
          }

          // Check Comparison
          const comp = document.getElementById('comparison');
          if (comp) {
            const card = comp.querySelector('.eco-comparison-card');
            checks.push({
              section: 'comparison',
              hasCard: !!card,
              w: card ? card.clientWidth : null
            });
          }

          // Check About
          const about = document.getElementById('about');
          if (about) {
            const card = about.querySelector('.eco-founder-card');
            checks.push({
              section: 'about',
              hasCard: !!card,
              w: card ? card.clientWidth : null,
              img: card ? (card.querySelector('img') ? card.querySelector('img').src : null) : null
            });
          }

          // Check Testimonials
          const testi = document.getElementById('testimonials');
          if (testi) {
            const cards = testi.querySelectorAll('.eco-testi-card');
            checks.push({
              section: 'testimonials',
              cardsCount: cards.length,
              cardsW: Array.from(cards).map(c => c.clientWidth)
            });
          }

          // Check Lead Magnet
          const lead = document.getElementById('lead-magnet');
          if (lead) {
            const card = lead.querySelector('.eco-lead-magnet-card');
            checks.push({
              section: 'lead-magnet',
              hasCard: !!card,
              w: card ? card.clientWidth : null
            });
          }

          // Check Pricing
          const pricing = document.getElementById('pricing');
          if (pricing) {
            const tabs = pricing.querySelectorAll('.pricing-tab-btn');
            const grids = pricing.querySelectorAll('.eco-pricing-grid');
            checks.push({
              section: 'pricing',
              tabsCount: tabs.length,
              gridsCount: grids.length,
              activeGridCards: grids[0] ? grids[0].querySelectorAll('.eco-pricing-card').length : 0
            });
          }

          // Check FAQ
          const faq = document.getElementById('faq');
          if (faq) {
            const details = faq.querySelectorAll('details');
            checks.push({
              section: 'faq',
              faqsCount: details.length
            });
          }

          // Check Contact
          const contact = document.getElementById('contact');
          if (contact) {
            const cards = contact.querySelectorAll('.eco-close-card');
            checks.push({
              section: 'contact',
              cardsCount: cards.length,
              cardsW: Array.from(cards).map(c => c.clientWidth)
            });
          }

          return checks;
        })()
      `,
      returnByValue: true
    });

    console.log(JSON.stringify(result.result.value, null, 2));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

