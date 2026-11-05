const fs = require('fs');

const footerHtml = fs.readFileSync('scripts/oacer_footer.html', 'utf8');
const ftCss = fs.readFileSync('scripts/oacer_all_css.css', 'utf8');

const demoPage = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      background: #0b1510;
      color: #eef4ef;
      font-family: Poppins, sans-serif;
    }
    ${ftCss}
  </style>
</head>
<body>
  <div style="height: 100px; display:flex; align-items:center; justify-content:center; color:#666;">[Content above footer]</div>
  ${footerHtml}
</body>
</html>`;

fs.writeFileSync('scripts/preview_oacer_footer.html', demoPage, 'utf8');
console.log('Saved preview_oacer_footer.html');

