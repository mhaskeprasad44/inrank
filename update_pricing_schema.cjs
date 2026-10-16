const fs = require('fs');

const file = 'pricing.html';
let content = fs.readFileSync(file, 'utf8');

const oldSchemaRegex = /<!-- Schema\.org \/ LocalBusiness JSON-LD -->[\s\S]*?<\/script>/;

const newSchema = `<!-- Schema.org / LocalBusiness & Organization JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": "https://inranktech.com/#organization",
          "name": "Inrank Technologies",
          "alternateName": "Inrank Tech Pune",
          "image": "https://inranktech.com/logo.png",
          "url": "https://inranktech.com/pricing.html",
          "telephone": "+91 76204 14165",
          "priceRange": "₹11,999 - ₹35,000",
          "description": "Transparent website development and SEO pricing in Pune. Fixed-price website packages starting from ₹11,999 with 365-day support, SEO retainers from ₹11,999/mo, and Social Media packages.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "FC Road, Shivaji Nagar",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411005",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          },
          "areaServed": [
            { "@type": "City", "name": "Pune" },
            { "@type": "Place", "name": "Baner, Pune" },
            { "@type": "Place", "name": "Hinjewadi, Pune" },
            { "@type": "Place", "name": "Wakad, Pune" },
            { "@type": "Place", "name": "Kharadi, Pune" },
            { "@type": "Place", "name": "Hadapsar, Pune" },
            { "@type": "Place", "name": "Viman Nagar, Pune" },
            { "@type": "Place", "name": "Kothrud, Pune" },
            { "@type": "Place", "name": "Pimpri-Chinchwad, Pune" },
            { "@type": "State", "name": "Maharashtra" }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "214",
            "bestRating": "5",
            "worstRating": "1"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Inrank Transparent Pricing Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Starter Launch Website Package"
                },
                "price": "11999",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Business Growth Website Package"
                },
                "price": "16999",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-Commerce Scale Website Package"
                },
                "price": "21999",
                "priceCurrency": "INR"
              }
            ]
          }
        }
      ]
    }
    </script>`;

if (!oldSchemaRegex.test(content)) {
  console.error("Regex did not match old schema in pricing.html!");
  process.exit(1);
}

content = content.replace(oldSchemaRegex, newSchema);
fs.writeFileSync(file, content, 'utf8');
console.log("Successfully updated schema in pricing.html!");
