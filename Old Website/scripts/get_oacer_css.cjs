const fs = require('fs');

async function run() {
  const res = await fetch('https://oacer.com/');
  const html = await res.text();
  
  // Find all stylesheet links
  const links = [];
  const linkRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/g;
  let m;
  while ((m = linkRegex.exec(html)) !== null) {
    links.push(m[1]);
  }
  console.log('Found CSS links:', links);

  let allCss = '';
  for (const l of links) {
    const url = l.startsWith('http') ? l : 'https://oacer.com' + l;
    try {
      const cRes = await fetch(url);
      const text = await cRes.text();
      allCss += `\n/* SOURCE: ${url} */\n` + text;
    } catch (e) {
      console.error('Failed to fetch:', url);
    }
  }

  // Also check inline style tags
  const styleTags = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
  styleTags.forEach(st => {
    allCss += '\n' + st;
  });

  fs.writeFileSync('scripts/oacer_all_css.css', allCss, 'utf8');
  console.log('Saved all CSS, size:', allCss.length);

  // Extract rules mentioning .ft
  const ftRules = allCss.split('}').filter(r => r.includes('.ft')).map(r => r.trim() + '}');
  fs.writeFileSync('scripts/oacer_ft_rules.css', ftRules.join('\n\n'), 'utf8');
  console.log('Saved .ft rules, count:', ftRules.length);
}
run();

