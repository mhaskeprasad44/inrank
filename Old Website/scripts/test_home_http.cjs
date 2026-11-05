const http = require('http');

http.get('http://localhost:8080/', (res) => {
  console.log('Status:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Length:', data.length);
    console.log('Has #nav:', data.includes('id="nav"'));
    console.log('Has .hero.image-hero:', data.includes('class="hero image-hero'));
    console.log('Has .manifesto:', data.includes('class="manifesto"'));
    console.log('Has .operating:', data.includes('class="operating"'));
    console.log('Has .capabilities-section:', data.includes('class="capabilities-section"'));
    console.log('Has .proof:', data.includes('class="proof"'));
    console.log('Has .work-section:', data.includes('class="work-section"'));
    console.log('Has .pricing-section:', data.includes('class="pricing-section"'));
    console.log('Has .comparison-section:', data.includes('class="comparison-section"'));
    console.log('Has .people-section:', data.includes('class="people-section"'));
    console.log('Has .testi-section:', data.includes('class="testi-section"'));
    console.log('Has .faq-section:', data.includes('class="faq-section"'));
    console.log('Has .closing:', data.includes('class="closing"'));
    console.log('Has .site-footer:', data.includes('class="site-footer"'));
  });
}).on('error', err => console.error(err));

