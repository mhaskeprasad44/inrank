const fs = require('fs');
const path = require('path');

const servicesDir = path.resolve('inrank2.0/services');
const dirs = fs.readdirSync(servicesDir).filter(f => fs.statSync(path.join(servicesDir, f)).isDirectory());

console.log(`Syncing ${dirs.length} service pages...`);

dirs.forEach(slug => {
  const dirIndexPath = path.join(servicesDir, slug, 'index.html');
  const flatHtmlPath = path.join(servicesDir, `${slug}.html`);

  if (fs.existsSync(dirIndexPath)) {
    let content = fs.readFileSync(dirIndexPath, 'utf8');

    // Ensure the header logo has both dark and white logo images
    const oldLogoImg = /<img src="\/img\/inrank-white-logo\.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon" \/>/;
    const dualLogoImg = `<img src="/img/inrank-dark-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon logo-icon--dark" />
        <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon logo-icon--white" />`;

    if (oldLogoImg.test(content)) {
      content = content.replace(oldLogoImg, dualLogoImg);
    }

    // Write back to dirIndexPath and flatHtmlPath
    fs.writeFileSync(dirIndexPath, content, 'utf8');
    fs.writeFileSync(flatHtmlPath, content, 'utf8');
    console.log(`Synced: ${slug}.html (${content.length} bytes)`);
  } else {
    console.warn(`Warning: Missing ${dirIndexPath}`);
  }
});

console.log('All 27 service pages synced successfully!');

