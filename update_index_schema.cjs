const fs = require('fs');

const file = 'index.html';
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
          "url": "https://inranktech.com",
          "telephone": "+91 76204 14165",
          "priceRange": "₹11,999 - ₹35,000",
          "description": "Pune's #1 Performance Digital Marketing Agency & Web Development Company. Transparent fixed-price websites from ₹11,999, data-driven SEO, Generative Engine Optimization (GEO), and ROI-driven paid ads.",
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
          "review": [
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Vikram Shinde" },
              "datePublished": "2026-09-12",
              "reviewBody": "Inrank built our corporate real estate portal in 6 days flat for ₹16,999. In two months our Google organic inquiries tripled in Baner and Wakad. Incomparable ROI compared to traditional Pune agencies.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Dr. Snehal Kulkarni" },
              "datePublished": "2026-08-28",
              "reviewBody": "Our clinic ranks #1 on Google Maps in Kothrud thanks to Inrank's local SEO and GMB optimization. Transparent pricing and zero hidden fees. Highly recommend!",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Amit Deshmukh" },
              "datePublished": "2026-07-15",
              "reviewBody": "Best web development company in Pune. Their interactive consultation and WhatsApp communication made the launch seamless. The site loads in 0.8 seconds.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Website Development & SEO Packages",
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
          },
          "sameAs": [
            "https://www.instagram.com/inranktech",
            "https://www.linkedin.com/company/inranktech"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://inranktech.com/#website",
          "url": "https://inranktech.com",
          "name": "Inrank Technologies",
          "publisher": { "@id": "https://inranktech.com/#organization" }
        },
        {
          "@type": "FAQPage",
          "@id": "https://inranktech.com/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does a website cost in Pune with Inrank?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Inrank offers 100% transparent website packages starting from ₹11,999 for Starter Launch (up to 5 pages with 365-day support), ₹16,999 for Business Growth (up to 10 pages, CMS & deep Schema), and ₹21,999 for full E-Commerce setups with 0% transaction commission."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to deliver a custom website in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard business websites are delivered within 5 to 7 business days with complete responsive styling, Core Web Vitals optimization, and Google Business Profile integration."
              }
            },
            {
              "@type": "Question",
              "name": "What is Generative Engine Optimization (GEO) and why does Inrank specialize in it?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GEO is the new frontier of search optimization ensuring your business is directly cited and recommended by AI engines like Google AI Overviews, ChatGPT Search, and Perplexity when potential buyers search for your services."
              }
            }
          ]
        }
      ]
    }
    </script>`;

if (!oldSchemaRegex.test(content)) {
  console.error("Regex did not match old schema!");
  process.exit(1);
}

content = content.replace(oldSchemaRegex, newSchema);
fs.writeFileSync(file, content, 'utf8');
console.log("Successfully updated schema in index.html!");
