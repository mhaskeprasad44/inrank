const fs = require('fs');

['inrank2.0/contact.html', 'inrank2.0/our-work.html', 'inrank2.0/blog.html'].forEach(p => {
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const heroIdx = html.indexOf('class="contact-hero') > -1 ? html.indexOf('class="contact-hero') :
                    html.indexOf('class="work-hero') > -1 ? html.indexOf('class="work-hero') :
                    html.indexOf('class="page-hero') > -1 ? html.indexOf('class="page-hero') :
                    html.indexOf('<main');
    console.log(`=== ${p} ===`);
    console.log(html.substring(heroIdx, heroIdx + 300));
  }
});

