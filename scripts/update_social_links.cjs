const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const OLD_LINKEDIN = 'https://www.linkedin.com/company/inranktech/';
const NEW_LINKEDIN = 'https://www.linkedin.com/company/inrank-technologies/';
const NEW_FACEBOOK = 'https://www.facebook.com/profile.php?id=61590051255129';

const FB_SVG_LINK = `          <a href="${NEW_FACEBOOK}" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>`;

function scan(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    if (['node_modules', '.git', 'dist'].includes(f)) return;
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      files = files.concat(scan(fp));
    } else if (f.endsWith('.html') || f.endsWith('.apib') || f.endsWith('.txt')) {
      files.push(fp);
    }
  });
  return files;
}

const files = scan(ROOT_DIR);
let updated = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Replace LinkedIn company URL
  content = content.replace(/https:\/\/(www\.)?linkedin\.com\/company\/inranktech\/?/gi, NEW_LINKEDIN);

  // 2. In blueprints: remove Prasad's personal linkedin and github
  if (file.endsWith('.apib')) {
    content = content.replace(/\[Connect on LinkedIn\]\(https:\/\/www\.linkedin\.com\/in\/prasadmhaske\/?\)\s*\|\s*/gi, '');
    content = content.replace(/\s*\|\s*\[GitHub\]\(https:\/\/github\.com\/[^\)]+\)/gi, '');
    content = content.replace(/\* \*\*Follow Us:\*\* [^\n]+/gi, `* **Follow Us:** [LinkedIn](${NEW_LINKEDIN}) | [Facebook](${NEW_FACEBOOK}) | [Instagram](https://www.instagram.com/inranktech/)`);
    if (!content.includes(NEW_FACEBOOK)) {
      content = content.replace(/\* \*\*Portfolio:\*\* [^\n]+/gi, `* **Portfolio:** [inranktech.com/our-work.html](https://inranktech.com/our-work.html)\n* **Follow Us:** [LinkedIn](${NEW_LINKEDIN}) | [Facebook](${NEW_FACEBOOK}) | [Instagram](https://www.instagram.com/inranktech/)`);
    }
  }

  // 3. In HTML footers: add Facebook icon to ft-social if not present
  if (file.endsWith('.html')) {
    if (content.includes('class="ft-social"') && !content.includes(NEW_FACEBOOK)) {
      content = content.replace(
        /(<a href="https:\/\/www\.linkedin\.com\/company\/inrank-technologies\/"[^>]*>[\s\S]*?<\/a>)/i,
        `$1\n${FB_SVG_LINK}`
      );
    }

    // In Schema.org JSON-LD sameAs arrays:
    if (content.includes('"sameAs"') && !content.includes(NEW_FACEBOOK)) {
      content = content.replace(
        /("sameAs":\s*\[\s*"https:\/\/www\.linkedin\.com\/company\/inrank-technologies\/",)/gi,
        `$1\n            "${NEW_FACEBOOK}",`
      );
    }
  }

  // 4. In llms.txt & llms-full.txt: add official socials if not present
  if (file.endsWith('llms.txt') || file.endsWith('llms-full.txt')) {
    if (!content.includes(NEW_FACEBOOK)) {
      content = content.replace(
        /(- \*\*Official Inquiries Email\*\*: [^\n]+)/i,
        `$1\n- **Official LinkedIn**: [${NEW_LINKEDIN}](${NEW_LINKEDIN})\n- **Official Facebook**: [${NEW_FACEBOOK}](${NEW_FACEBOOK})\n- **Official Instagram**: [https://www.instagram.com/inranktech/](https://www.instagram.com/inranktech/)`
      );
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updated++;
    console.log(`Updated social links in: ${path.relative(ROOT_DIR, file).replace(/\\/g, '/')}`);
  }
});

console.log(`\nSocial link update complete. Total files updated: ${updated}`);
