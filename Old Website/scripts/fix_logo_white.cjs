const fs = require('fs');

let nav = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css/nav.css', 'utf8');

// Fix .nav-logo-name in scrolled state to remain crisp white
nav = nav.replace(/#nav\.is-light\s+\.nav-logo-name[^{]*\{[^}]*\}/g, `
#nav.is-light .nav-logo-name,
#nav.nav-open .nav-logo-name {
  color: #ffffff !important;
}
`);

fs.writeFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css/nav.css', nav);
console.log('Fixed nav-logo-name color to white in all states!');

