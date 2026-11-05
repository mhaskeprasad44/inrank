const fs = require('fs');

const indexContent = fs.readFileSync('./index.html', 'utf-8');

const getSection = (startId, endId) => {
  // Rough extraction: look for <section id="XYZ" ... and the next <section or </main>
  const regex = new RegExp(`<section id="${startId}"[\\s\\S]*?(?=<section|<main|<!-- [A-Z\\s]+ SECTION -->)`);
  // This might be tricky because of nested sections? They are usually siblings.
  // Better way: split by <section> tags.
};

// simpler way by regex parsing
const sections = [
  'top',
  'services',
  'process',
  'industries',
  'results',
  'about',
  'faq',
  'contact'
];

let remainingContent = indexContent;

// Extract <head> and common structure
const headMatch = indexContent.match(/<head>[\s\S]*?<\/head>/i);
const headContent = headMatch ? headMatch[0] : '';
const bodyClass = 'bg-background text-foreground'; // Just defaults

const createHtmlWrap = (title, innerBody) => {
  return `<!doctype html>
<html lang="en" class="dark">
  ${headContent.replace('<title>Inrank', `<title>${title} | Inrank`)}
  <body>
    <div class="min-h-screen flex flex-col">
      <main class="flex-grow">
        ${innerBody}
      </main>
    </div>
  </body>
</html>`;
}

// Ensure dir exists
if (!fs.existsSync('./elementor-pages')) {
  fs.mkdirSync('./elementor-pages');
}

// Function to pull a section out exactly
function extractSection(id) {
  const startStr = `<section id="${id}"`;
  const startIndex = indexContent.indexOf(startStr);
  if (startIndex === -1) return '';
  
  // finding the closing section tag.
  // We need to match nested tags.
  let openCount = 0;
  let ptr = startIndex;
  let inTag = false;
  let tagStr = '';

  while (ptr < indexContent.length) {
    if (indexContent.substr(ptr, 9) === '<section ') {
      openCount++;
      ptr += 8;
    } else if (indexContent.substr(ptr, 10) === '</section>') {
      openCount--;
      if (openCount === 0) {
        return indexContent.substring(startIndex, ptr + 10);
      }
      ptr += 10;
    } else {
      ptr++;
    }
  }
  return '';
}

// Home page: Top + Marquee + Why Us (it doesn't have an ID, it comes right after services? wait, let's just make Home = top + Marquee)
// Actually, let's grab the HTML from <section id="top" to the end of the section right before Services.
// For accuracy, I will write specific page constructions.

const homeSection = extractSection('top');
const servicesSection = extractSection('services');
const processSection = extractSection('process');
const industriesSection = extractSection('industries');
const resultsSection = extractSection('results');
const aboutSection = extractSection('about');
const faqSection = extractSection('faq');
const contactSection = extractSection('contact');

// Let's also grab that Why Us section manually. It's the one after services grid, <section class="relative py-24 sm:py-32 border-t border-border bg-card/40">
const whyUsMatch = indexContent.match(/<section class="relative py-24 sm:py-32 border-t border-border bg-card\/40">[\s\S]*?<\/section>/);
const whyUsSection = whyUsMatch ? whyUsMatch[0] : '';

const logosMarqueeMatch = indexContent.match(/<section class="border-y border-border bg-card\/50 overflow-hidden py-6">[\s\S]*?<\/section>/);
const logosMarqueeSection = logosMarqueeMatch ? logosMarqueeMatch[0] : '';


fs.writeFileSync('./elementor-pages/home.html', createHtmlWrap('Home', homeSection + '\n' + logosMarqueeSection + '\n' + whyUsSection));
fs.writeFileSync('./elementor-pages/services.html', createHtmlWrap('Services', servicesSection));
fs.writeFileSync('./elementor-pages/process.html', createHtmlWrap('Our Process', processSection));
fs.writeFileSync('./elementor-pages/industries.html', createHtmlWrap('Industries & Results', industriesSection + '\n' + resultsSection));
fs.writeFileSync('./elementor-pages/about.html', createHtmlWrap('About Us', aboutSection));
fs.writeFileSync('./elementor-pages/contact.html', createHtmlWrap('Contact & FAQ', faqSection + '\n' + contactSection));

console.log('Pages extracted into ./elementor-pages/');
