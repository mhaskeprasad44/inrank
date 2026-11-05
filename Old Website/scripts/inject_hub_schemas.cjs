const fs = require('fs');

// 1. about.html schema
const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://inranktech.com/about.html#webpage",
      "url": "https://inranktech.com/about.html",
      "name": "About Inrank Technologies | Senior Growth Engineers Pune",
      "description": "Meet Inrank Technologies — Pune's premier performance web development and digital growth engineering lab founded by Prasad Mhaske in Baner, Pune.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inranktech.com/" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://inranktech.com/about.html" }
        ]
      },
      "mainEntity": {
        "@type": "ProfessionalService",
        "@id": "https://inranktech.com/#organization",
        "name": "Inrank Technologies Pvt Ltd",
        "alternateName": "Inrank Tech Pune",
        "url": "https://inranktech.com/",
        "logo": "https://inranktech.com/img/inrank-white-logo.svg",
        "image": "https://inranktech.com/img/og-preview.png",
        "telephone": "+918788823182",
        "email": "contact@inranktech.com",
        "priceRange": "₹11,999 - ₹1,50,000",
        "foundingDate": "2018",
        "founder": {
          "@type": "Person",
          "name": "Prasad Mhaske",
          "jobTitle": "Founder & Head of Growth Engineering",
          "sameAs": [
            "https://www.linkedin.com/in/prasadmhaske/",
            "https://www.instagram.com/inranktech/"
          ]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Baner Road, Near Balewadi High Street",
          "addressLocality": "Baner, Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411045",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5590",
          "longitude": "73.7868"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:30",
            "closes": "19:30"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Pune" },
          { "@type": "AdministrativeArea", "name": "Baner" },
          { "@type": "AdministrativeArea", "name": "Balewadi" },
          { "@type": "AdministrativeArea", "name": "Hinjawadi" },
          { "@type": "AdministrativeArea", "name": "Aundh" },
          { "@type": "AdministrativeArea", "name": "Kothrud" },
          { "@type": "AdministrativeArea", "name": "PCMC" },
          { "@type": "AdministrativeArea", "name": "Maharashtra" },
          { "@type": "Country", "name": "India" }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/inranktech/",
          "https://www.instagram.com/inranktech/",
          "https://wa.me/918788823182"
        ]
      }
    }
  ]
};

// 2. contact.html schema
const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://inranktech.com/contact.html#webpage",
      "url": "https://inranktech.com/contact.html",
      "name": "Contact Inrank Technologies | Baner Engineering Lab, Pune",
      "description": "Connect directly with senior growth engineers in Baner, Pune. Book a strategy consultation, request a technical audit, or reach our direct engineering pod.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inranktech.com/" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://inranktech.com/contact.html" }
        ]
      },
      "mainEntity": {
        "@type": "ProfessionalService",
        "@id": "https://inranktech.com/#organization",
        "name": "Inrank Technologies Pvt Ltd",
        "telephone": "+918788823182",
        "email": "contact@inranktech.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Baner Road, Near Balewadi High Street",
          "addressLocality": "Baner, Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411045",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5590",
          "longitude": "73.7868"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+918788823182",
            "contactType": "technical consultation",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi", "Marathi"]
          }
        ]
      }
    }
  ]
};

// 3. services.html schema
const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://inranktech.com/services.html#webpage",
      "url": "https://inranktech.com/services.html",
      "name": "27 Specialized Growth Services | 4 Accountable Pillars | Inrank Pune",
      "description": "Explore Inrank's 27 specialized digital services across 4 accountable growth pillars: Search Dominance, High-Performance Web, Paid Acquisition, and Brand & CRO.",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Inrank Digital Growth Services",
        "itemListElement": [
          { "@type": "Service", "name": "SEO Company Pune", "url": "https://inranktech.com/services/seo-company-pune.html" },
          { "@type": "Service", "name": "AI SEO Services", "url": "https://inranktech.com/services/ai-seo-services.html" },
          { "@type": "Service", "name": "GEO & Answer Engine Optimization", "url": "https://inranktech.com/services/geo-seo-agency.html" },
          { "@type": "Service", "name": "Google My Business & Local 3-Pack", "url": "https://inranktech.com/services/google-my-business-services.html" },
          { "@type": "Service", "name": "Custom Website Development", "url": "https://inranktech.com/services/custom-website-development.html" },
          { "@type": "Service", "name": "WordPress Development Services", "url": "https://inranktech.com/services/wordpress-development-services.html" },
          { "@type": "Service", "name": "E-Commerce Website Development", "url": "https://inranktech.com/services/ecommerce-website-development-company.html" },
          { "@type": "Service", "name": "Shopify Store Development", "url": "https://inranktech.com/services/shopify-store-development.html" },
          { "@type": "Service", "name": "PPC Services & Google Ads", "url": "https://inranktech.com/services/ppc-services.html" },
          { "@type": "Service", "name": "Meta & Instagram Ads Agency", "url": "https://inranktech.com/services/meta-ads-agency.html" },
          { "@type": "Service", "name": "UI/UX Design Services", "url": "https://inranktech.com/services/ui-ux-design-services.html" },
          { "@type": "Service", "name": "Conversion Rate Optimization (CRO)", "url": "https://inranktech.com/services/conversion-rate-optimization-services.html" }
        ]
      }
    }
  ]
};

// 4. pricing.html schema
const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemPage",
      "@id": "https://inranktech.com/pricing.html#webpage",
      "url": "https://inranktech.com/pricing.html",
      "name": "Transparent Packages & Pricing | Inrank Technologies Pune",
      "description": "Transparent, fixed-price websites starting at ₹11,999 and performance growth retainers with zero hidden fees. Built by senior engineers in Baner, Pune.",
      "mainEntity": {
        "@type": "OfferCatalog",
        "name": "Fixed-Price Website & Growth Retainers",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Starter Website Package",
            "price": "11999",
            "priceCurrency": "INR",
            "description": "Up to 10 mobile-first pages, free 1st-year NVMe Cloud Hosting, SSL, 2 business emails, Google map sync, 5-7 days turnaround."
          },
          {
            "@type": "Offer",
            "name": "Business Scale Website",
            "price": "24999",
            "priceCurrency": "INR",
            "description": "Up to 25 custom pages, sub-second LCP optimization, advanced lead funnels, WhatsApp CRM sync, 10-14 days turnaround."
          },
          {
            "@type": "Offer",
            "name": "Custom Enterprise Web Architecture",
            "price": "49999",
            "priceCurrency": "INR",
            "description": "Unlimited pages, headless React/Next.js or bespoke architecture, custom quotation calculator, 365-day SLA."
          },
          {
            "@type": "Offer",
            "name": "Local SEO Dominance Sprint",
            "price": "11999",
            "priceCurrency": "INR",
            "description": "Hyperlocal Pune Google 3-Pack rankings, Schema markup, monthly technical audit."
          },
          {
            "@type": "Offer",
            "name": "Growth Scale SEO Retainer",
            "price": "18999",
            "priceCurrency": "INR",
            "description": "High-competition commercial keyword ranking, Generative Engine Optimization (GEO), monthly content sprint."
          }
        ]
      }
    }
  ]
};

// 5. our-work.html schema
const ourWorkSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://inranktech.com/our-work.html#webpage",
      "url": "https://inranktech.com/our-work.html",
      "name": "Our Work & Production Portfolio | Inrank Technologies Pune",
      "description": "Verified production web development, e-commerce, and SEO case studies delivered by Inrank Technologies across Pune and India.",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Featured Inrank Client Projects",
        "itemListElement": [
          { "@type": "CreativeWork", "name": "CyTOS Machines — Precision CNC Machinery Portal", "url": "https://inranktech.com/our-work/cytos.html" },
          { "@type": "CreativeWork", "name": "Fludio Water Solutions — Architectural Aquatic Engineering", "url": "https://inranktech.com/our-work/fludio.html" },
          { "@type": "CreativeWork", "name": "HIRAGRAFIX™ — Luxury Packaging & Commercial Printing", "url": "https://inranktech.com/our-work/hiragrafix.html" },
          { "@type": "CreativeWork", "name": "Grey To The Green — Plant-Powered Home Care & Biotech", "url": "https://inranktech.com/our-work/greytothegreen.html" },
          { "@type": "CreativeWork", "name": "Vasro Ventures — Contemporary Fashion & Apparel Storefront", "url": "https://inranktech.com/our-work/vasroventures.html" },
          { "@type": "CreativeWork", "name": "HCPNest — Healthcare Staffing & Medical Recruitment Network", "url": "https://inranktech.com/our-work/hcpnest.html" },
          { "@type": "CreativeWork", "name": "Riitu Institution — CA & Commerce Coaching Academy", "url": "https://inranktech.com/our-work/riituinstitution.html" },
          { "@type": "CreativeWork", "name": "Shetkari Foodstuff — Export E-Commerce Infrastructure", "url": "https://inranktech.com/our-work/shetkarifoodstuff.html" },
          { "@type": "CreativeWork", "name": "Dr. Shyam Thakkar — Orthopedic Foot & Ankle Surgical Practice", "url": "https://inranktech.com/our-work/orthopedicanklefootspecialist.html" },
          { "@type": "CreativeWork", "name": "Dravya Financial Solutions — Enterprise Capital Advisory Portal", "url": "https://inranktech.com/our-work/dravyafinancial.html" }
        ]
      }
    }
  ]
};

// 6. case-studies.html schema
const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://inranktech.com/case-studies.html#webpage",
      "url": "https://inranktech.com/case-studies.html",
      "name": "Commercial Case Studies & Growth Verdicts | Inrank Technologies",
      "description": "Explore in-depth technical breakdowns and verified revenue metrics across 10 client case studies engineered by Inrank Technologies.",
      "mainEntity": ourWorkSchema["@graph"][0].mainEntity
    }
  ]
};

function injectSchema(filePath, schemaObj) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('application/ld+json')) {
    console.log(`${filePath} already has schema, skipping or updating`);
    return;
  }
  const jsonLdTag = `\n  <script type="application/ld+json">\n  ${JSON.stringify(schemaObj, null, 2)}\n  </script>`;
  content = content.replace('</head>', `${jsonLdTag}\n</head>`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Injected rich schema into ${filePath}`);
}

injectSchema('inrank2.0/about.html', aboutSchema);
injectSchema('inrank2.0/contact.html', contactSchema);
injectSchema('inrank2.0/services.html', servicesSchema);
injectSchema('inrank2.0/services/index.html', servicesSchema);
injectSchema('inrank2.0/pricing.html', pricingSchema);
injectSchema('inrank2.0/our-work.html', ourWorkSchema);
injectSchema('inrank2.0/case-studies.html', caseStudiesSchema);

console.log('Finished injecting schemas into all hub pages.');

