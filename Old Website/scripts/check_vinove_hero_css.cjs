const fs = require('fs');
const css = fs.readFileSync('scripts/vinove_assets/css/pages/corporate.css', 'utf8');

const classes = ['.button', '.primary', '.secondary', '.hero-content', '.hero-note', '.home-image-hero', '.hero-media', '.hero-shade'];
classes.forEach(cls => {
  const idx = css.indexOf(cls);
  if (idx !== -1) {
    console.log('Found ' + cls + ':');
    console.log(css.substring(idx, idx + 250));
  } else {
    console.log('Not found: ' + cls);
  }
});

