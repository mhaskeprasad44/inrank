const fs = require('fs');

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://inranktech.com/blog.html#blog",
      "url": "https://inranktech.com/blog.html",
      "name": "Inrank Digital Growth Engineering & Technical SEO Journal",
      "description": "Deep technical guides and strategic blueprints on SEO in Pune, Generative Engine Optimization (GEO), Core Web Vitals, and conversion web architecture.",
      "publisher": {
        "@type": "Organization",
        "name": "Inrank Technologies Pvt Ltd",
        "url": "https://inranktech.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://inranktech.com/img/inrank-white-logo.svg"
        }
      }
    }
  ]
};

let content = fs.readFileSync('inrank2.0/blog.html', 'utf8');
if (!content.includes('application/ld+json')) {
  const jsonLdTag = `\n  <script type="application/ld+json">\n  ${JSON.stringify(blogSchema, null, 2)}\n  </script>`;
  content = content.replace('</head>', `${jsonLdTag}\n</head>`);
  fs.writeFileSync('inrank2.0/blog.html', content, 'utf8');
  console.log('Injected Blog schema into inrank2.0/blog.html');
}

