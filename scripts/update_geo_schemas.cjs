const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update website-design-company-in-pune.html
const webDesignFile = path.join(ROOT_DIR, 'website-design-company-in-pune.html');
let webDesignContent = fs.readFileSync(webDesignFile, 'utf8');

const founderBlock = `          "founder": {
            "@type": "Person",
            "name": "Prasad Mhaske",
            "jobTitle": "Founder & Principal Systems Strategist",
            "sameAs": "https://www.linkedin.com/in/prasadmhaske/"
          },
          "sameAs": [
            "https://www.linkedin.com/company/inranktech/",
            "https://www.instagram.com/inranktech/",
            "https://github.com/mhaskeprasad44"
          ],`;

if (!webDesignContent.includes('"founder": {')) {
  webDesignContent = webDesignContent.replace(
    /"streetAddress":\s*"FC Road, Shivaji Nagar"[^}]*\},/i,
    `"streetAddress": "Baner Road, Near Balewadi High Street",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411045",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5590,
            "longitude": 73.7868
          },
${founderBlock}`
  );
  fs.writeFileSync(webDesignFile, webDesignContent, 'utf8');
  console.log('Updated GEO schema in website-design-company-in-pune.html');
}

// 2. Update digital-marketing-agency-in-pune.html
const dgmFile = path.join(ROOT_DIR, 'digital-marketing-agency-in-pune.html');
let dgmContent = fs.readFileSync(dgmFile, 'utf8');

if (!dgmContent.includes('"founder": {')) {
  dgmContent = dgmContent.replace(
    /"postalCode":\s*"411045",\s*"addressCountry":\s*"IN"\s*\},/i,
    `"postalCode": "411045",
            "addressCountry": "IN"
          },
${founderBlock}`
  );
  fs.writeFileSync(dgmFile, dgmContent, 'utf8');
  console.log('Updated GEO schema in digital-marketing-agency-in-pune.html');
}
