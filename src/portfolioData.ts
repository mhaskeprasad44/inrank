export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
  change: string;
  icon: string;
}

export interface CaseStudyPillar {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudyDeliverable {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudyFAQ {
  question: string;
  answer: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  category: "direct" | "collaboration";
  categoryBadge: string;
  domain: string;
  liveUrl: string;
  industry: string;
  timeline: string;
  location: string;
  heroHeadline: string;
  heroSummary: string;
  accentGradient: string;
  accentColor: string;
  badge: string;
  services: string[];
  technologies: string[];
  screenshot: string;
  sector: string;
  metaServices: string[];
  tingQuestion: string;
  tingAnswer: string;
  bigTitleBanner: string;
  usps: CaseStudyPillar[];
  
  // Detailed Case Study Content
  clientBackground: string;
  challenges: string[];
  strategicSolution: {
    overview: string;
    pillars: CaseStudyPillar[];
  };
  technicalArchitecture: {
    stackOverview: string;
    layers: {
      layer: string;
      tech: string;
      role: string;
    }[];
    speedAndPerformance: string[];
    aiAndGeoStrategy: string[];
  };
  results: {
    highlight: string;
    metrics: CaseStudyMetric[];
    keyOutcomes: string[];
  };
  deliverables: CaseStudyDeliverable[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  faqs: CaseStudyFAQ[];
  metaTitle: string;
  metaDesc: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "cytos",
    slug: "cytos-cnc-machines-pune",
    title: "CyTOS Machines Pune - High-Speed Industrial Machinery & CNC Portal",
    clientName: "CyTOS Machines Pune",
    category: "direct",
    categoryBadge: "Direct Inrank Project",
    domain: "cytos.in",
    liveUrl: "https://cytos.in",
    industry: "Industrial Manufacturing & CNC Automation",
    sector: "Precision CNC Machinery & Industrial Automation",
    screenshot: "/portfolio/screenshots/cytos.png",
    metaServices: ["Custom React 18 SPA","Vite 5 Build Engine","Interactive Machine Wizard","Technical B2B SEO","WhatsApp Direct RFQ"],
    tingQuestion: "How do you turn a traditional industrial CNC manufacturing catalog into Maharashtra's fastest digital sales machine?",
    tingAnswer: "By building a headless, sub-second React 18 SPA featuring an interactive 3-step Machine Recommendation Wizard, instant WhatsApp RFQ routing, and 22 deep technical engineering guides that tripled commercial buyer inquiries.",
    bigTitleBanner: "HIGH-SPEED INDUSTRIAL ENGINEERING MEETS ULTRA-FAST DIGITAL LEAD GENERATION",
    usps: [
      {
            "title": "A 360° View of Industrial Buyer Intent",
            "description": "Replaced dense PDF spec sheets with interactive machine filters and a guided wizard that maps spindle RPM and bed size directly to commercial RFQs.",
            "icon": "compass"
      },
      {
            "title": "Harnessing 0.72s Mobile Core Web Vitals",
            "description": "Engineered with Vite code-splitting and Gzip-compressed asset pipelines, ensuring factory owners on shop-floor 4G connections experience instant page transitions.",
            "icon": "zap"
      },
      {
            "title": "B2B Machine Schema & AI Search Ingestion",
            "description": "Structured JSON-LD Product & TechArticle markup indexing CyTOS directly into Google 3-Pack and generative AI engine recommendations.",
            "icon": "bot"
      },
      {
            "title": "Frictionless WhatsApp Sales Funnel",
            "description": "Eliminated lengthy form fatigue with a 1-click consultation modal that auto-populates exact workpiece parameters straight to engineering sales.",
            "icon": "message-circle"
      }
],
    timeline: "3 Weeks Turnaround",
    location: "Pune, Maharashtra",
    heroHeadline: "From Traditional Factory Floor to a 0.8s High-Performance Digital Lead Machine",
    heroSummary: "Architected a custom React 18 + Vite single page application with an interactive 3-step Machine Recommendation Wizard, WhatsApp direct RFQ engineering, and 22 technical engineering guide hubs that tripled qualified commercial buyer inquiries across Maharashtra.",
    accentGradient: "from-blue-600 via-indigo-600 to-emerald-600",
    accentColor: "#2563eb",
    badge: "Industrial React 18 SPA",
    services: [
      "Custom React 18 SPA Development",
      "Vite High-Speed Build Engine",
      "Technical B2B SEO & Machine Schema",
      "Interactive Machine Finder Wizard",
      "Automated CI/CD to Hostinger",
      "WhatsApp Direct RFQ Consultation Funnel"
    ],
    technologies: ["React 18", "Vite", "TailwindCSS", "Lucide Icons", "Hostinger Git CI/CD", "Apache .htaccess Rewrites", "JSON-LD Product Schema"],
    clientBackground: "CyTOS Machines is a premier Pune-based manufacturer and distributor of CNC Routers, Milling Machines, Laser Cutters, and customized precision automation machinery. They needed to modernize their web presence to attract high-value industrial manufacturing buyers, educational institutions, and aerospace tier-3 suppliers across India.",
    challenges: [
      "Legacy website was sluggish, taking over 4.8 seconds to load on mobile connections, causing severe drop-offs among factory procurement managers.",
      "Industrial buyers were confused by dense technical PDF specifications and struggled to determine which machine model matched their workshop spindle tolerances.",
      "Zero ranking on Google for high-intent queries like 'CNC router manufacturer in Pune' and 'PCB drilling prototype machine'.",
      "Inquiry drop-offs due to lengthy contact forms rather than instant direct-to-engineering mobile chat."
    ],
    strategicSolution: {
      overview: "Inrank engineered a modern, lightweight React 18 SPA tailored specifically for industrial decision-makers. We replaced dense static tables with interactive machine filters, embedded an instant Machine Finder recommendation wizard, and built 22 technical pillar guides capturing organic search intent.",
      pillars: [
        {
          title: "3-Step Machine Recommendation Wizard",
          description: "Engineered a client-side decision wizard that asks buyers for their material type (wood, acrylic, mild steel, PCB), workshop bed size, and spindle power, instantly suggesting the exact CNC machine model with 1-click RFQ.",
          icon: "cpu"
        },
        {
          title: "Sub-Second Mobile Core Web Vitals",
          description: "Structured code-splitting via Vite with Gzip compression and aggressive browser caching on Hostinger Apache, slashing Largest Contentful Paint (LCP) from 4.8s to 0.72s.",
          icon: "zap"
        },
        {
          title: "B2B Technical Engineering Content Engine",
          description: "Authored 22 in-depth technical guides covering CNC feed rates, spindle calibration, and tooling tolerances, each embedded with Product and HowTo structured data schema.",
          icon: "book-open"
        },
        {
          title: "Instant WhatsApp Priority RFQ Desk",
          description: "Implemented a custom Quote Modal that auto-populates exact machine specs, workpiece size, and customer requirements into a pre-formatted WhatsApp consultation link.",
          icon: "message-circle"
        }
      ]
    },
    technicalArchitecture: {
      stackOverview: "Built on React 18 with Vite 5 bundled build output, styled with utilitarian TailwindCSS design tokens, and deployed via automated GitHub Actions CI/CD to Hostinger Apache infrastructure with robust .htaccess client-side route rewrites.",
      layers: [
        { layer: "Frontend Framework", tech: "React 18 + Vite 5", role: "Lightning-fast client-side SPA rendering with zero hydration lag." },
        { layer: "Design System", tech: "TailwindCSS + Lucide", role: "Utilitarian industrial UI with dark slate aesthetics and responsive specs grid." },
        { layer: "Lead Funnel Engine", tech: "QuoteModal + MachineFinder", role: "Interactive state-driven consultation wizard generating pre-formatted WhatsApp RFQs." },
        { layer: "DevOps & CI/CD", tech: "GitHub Actions + Hostinger Git", role: "Automated production branch compilation, testing, and zero-downtime deployment." }
      ],
      speedAndPerformance: [
        "99/100 Google PageSpeed score on desktop and 96/100 on mobile devices.",
        "Zero layout shifts (CLS 0.00) using fixed aspect-ratio image containers and preload tags.",
        "Under 42KB initial JS bundle size per route via dynamic dynamic imports."
      ],
      aiAndGeoStrategy: [
        "Product schema with specific industrial parameters (cutting area, spindle speed, positioning accuracy).",
        "Authoritative llms.txt and markdown knowledge index for Perplexity and Gemini indexing.",
        "Structured FAQPage schema addressing industrial procurement and warranty questions."
      ]
    },
    results: {
      highlight: "+310% Qualified Machine Inquiries & #1 Google 3-Pack Rankings",
      metrics: [
        { label: "Mobile PageSpeed", before: "38/100", after: "97/100", change: "+155%", icon: "gauge" },
        { label: "LCP Load Time", before: "4.8s", after: "0.72s", change: "-85%", icon: "clock" },
        { label: "Monthly RFQs", before: "14", after: "58+", change: "+314%", icon: "trending-up" },
        { label: "Top 3 Keywords", before: "0", after: "19", change: "+1900%", icon: "award" }
      ],
      keyOutcomes: [
        "Achieved #1 position in Pune for 'CNC Router Manufacturer in Pune' and 'Industrial Laser Machine Suppliers'.",
        "Secured machinery purchase orders from major automotive ancillary vendors in Chakan and Bhosari within 60 days of launch.",
        "Cut customer discovery time in half using the interactive Machine Finder wizard."
      ]
    },
    deliverables: [
      { title: "React 18 SPA Architecture", description: "Complete responsive frontend code repository with Vite build setup.", icon: "code" },
      { title: "Machine Catalog Engine", description: "Structured database of 8 machine categories and comprehensive spec sheets.", icon: "layers" },
      { title: "Interactive Machine Finder", description: "3-step guided wizard recommending machinery based on client workshop parameters.", icon: "crosshair" },
      { title: "WhatsApp Direct RFQ Modal", description: "Instant pre-formatted lead generation modal transmitting specs to engineering sales.", icon: "send" },
      { title: "22 Technical Pillar Guides", description: "SEO-optimized engineering guides establishing industrial authority.", icon: "file-text" },
      { title: "Hostinger CI/CD Workflow", description: "Automated Git push deployment pipeline straight to production Apache servers.", icon: "git-branch" }
    ],
    testimonial: {
      quote: "Inrank completely transformed how industrial buyers discover CyTOS. In our business, buyers don't fill out long static inquiry forms - they want specs and instant WhatsApp answers. The new website loads instantaneously, our Machine Finder has saved our sales team countless hours, and our organic inquiries from Pune and across Maharashtra have more than tripled.",
      author: "Prasad Mhaske",
      role: "Operations & Technical Director",
      company: "CyTOS Machines Pune"
    },
    faqs: [
      {
        question: "How did Inrank ensure high Google rankings for industrial machine queries?",
        answer: "We built 22 hyper-targeted technical engineering articles alongside rich Product schema containing exact machine specs, spindle RPM, and bed dimensions. Combined with sub-second Core Web Vitals, CyTOS rapidly outranked older competitor directories."
      },
      {
        question: "Why use React 18 for an industrial machinery website instead of WordPress?",
        answer: "React 18 paired with Vite allows instant tab switching between machine categories, real-time client-side specification filtering, and the custom Machine Finder wizard without reloading the page, yielding a superior user experience and higher conversion rates."
      }
    ],
    metaTitle: "CyTOS Machines Pune Case Study | High-Speed Industrial Machinery Web Development",
    metaDesc: "Discover how Inrank Technologies built a sub-second React 18 SPA for CyTOS Machines Pune, increasing monthly industrial RFQs by +314% with local SEO domination."
  },
  {
    id: "fludio",
    slug: "fludio-water-solutions-pune",
    title: "Fludio Water Solutions - Architectural Fountains & Aquatic Engineering Portal",
    clientName: "Fludio Water Solutions",
    category: "direct",
    categoryBadge: "Direct Inrank Project",
    domain: "fludio.in",
    liveUrl: "https://fludio.in",
    industry: "Architectural Water Features & Aquatic Engineering",
    sector: "Luxury Architectural Water Features & Aquatic Engineering",
    screenshot: "/portfolio/screenshots/fludio.png",
    metaServices: ["Luxury Architectural Web Design","DMX 512 Spec Matrix","Interactive Video Showcase","High-Ticket Lead Funnel","Speed Optimization"],
    tingQuestion: "How do you translate high-end hydraulic symphony and architectural fountain design into an immersive luxury web experience?",
    tingAnswer: "By engineering an editorial, cinematic digital portal with interactive product spec matrices, high-resolution visual showcases, and direct commercial inquiry funnels tailored for luxury architects and resort developers.",
    bigTitleBanner: "SYMPHONY IN WATER: CRAFTING ARCHITECTURAL GRANDEUR FOR INDIA'S ELITE DEVELOPERS",
    usps: [
      {
            "title": "A 360° Editorial Aesthetic for Luxury Spaces",
            "description": "Crafted a tranquil aquatic visual language blending deep azure gradients, serif typography, and fluid micro-animations mirroring water motion.",
            "icon": "droplets"
      },
      {
            "title": "Interactive DMX 512 & Hydraulic Spec Matrix",
            "description": "Organized complex engineering data into clear visual modules covering musical fountains, nozzle arrays, underwater LED illumination, and filtration.",
            "icon": "sliders"
      },
      {
            "title": "High-Ticket Developer Lead Routing",
            "description": "Constructed tailored consultation pathways for landscape architects, municipal planners, and 5-star hospitality developers across India.",
            "icon": "briefcase"
      },
      {
            "title": "Zero-Lag Media Streaming",
            "description": "Optimized high-resolution fountain project imagery and video showcases with modern WebP compression and lazy loading.",
            "icon": "image"
      }
],
    timeline: "3 Weeks Turnaround",
    location: "Pune, Maharashtra",
    heroHeadline: "Showcasing Symphony in Water: Luxury Architectural Showcase for India's Elite Developers",
    heroSummary: "Designed and engineered an immersive, high-elegance digital showcase for Fludio Water Solutions, highlighting automated DMX 512 dancing fountains, custom stainless-steel nozzle arrays, and luxury resort water installations that drove high-ticket commercial inquiries from architects and real estate developers.",
    accentGradient: "from-cyan-600 via-teal-600 to-blue-700",
    accentColor: "#0891b2",
    badge: "Architectural Showcase & Lead Portal",
    services: [
      "Luxury Architectural Web Design",
      "Interactive Product Spec Matrix",
      "Media-Rich Video Showcase Engine",
      "Commercial Developer Lead Funnel",
      "Technical B2B SEO & Schemas",
      "Mobile-Optimized Portfolio Gallery"
    ],
    technologies: ["HTML5", "Vanilla CSS Tokens", "Modern JavaScript", "Lucide Icons", "Video Stream Embeds", "Schema.org Architectural Service"],
    clientBackground: "Fludio Water Solutions is a premier Pune-based engineering firm specializing in turnkey architectural water features, computer-choreographed musical fountains, interactive dry-deck plazas, and resort lagoon displays for township builders, luxury hotels, and civic municipal projects across India.",
    challenges: [
      "Previous web footprint failed to communicate the breathtaking visual majesty and precision PLC automation of their aquatic installations.",
      "Architects and landscape planners couldn't easily download engineering CAD specifications and nozzle spray pattern schematics.",
      "Struggled to attract high-ticket B2B commercial real estate builders directly, relying on word-of-mouth intermediaries.",
      "Heavy unoptimized video files were freezing mobile browsers on 4G networks."
    ],
    strategicSolution: {
      overview: "Inrank engineered a fluid, ultra-luxurious visual portal utilizing progressive lazy-loaded video showcases, interactive fountain spray height selector cards, and an architectural RFP consultation funnel that positions Fludio as India's foremost aquatic engineering authority.",
      pillars: [
        {
          title: "Cinematic Visual Immersion",
          description: "Implemented low-bandwidth, high-frame-rate MP4 video loops of dancing musical fountains with responsive poster fallbacks, creating instant visual wonder without bloating page weight.",
          icon: "video"
        },
        {
          title: "Architect & Consultant Spec Engine",
          description: "Organized technical documentation for DMX 512 controllers, IP68 underwater fixtures, and geyser/cascade nozzles with 1-click engineering PDF downloads.",
          icon: "file-code"
        },
        {
          title: "High-Ticket Commercial Inquiries Funnel",
          description: "Engineered project-scoping intake workflows that capture key architectural parameters: pool dimensions, budget tier, indoor vs. outdoor, and municipal permissions.",
          icon: "target"
        },
        {
          title: "Local & Pan-India Commercial SEO",
          description: "Targeted competitive architectural phrases like 'musical fountain manufacturers in Pune', 'commercial water feature contractors India', and 'dancing fountain design'.",
          icon: "search"
        }
      ]
    },
    technicalArchitecture: {
      stackOverview: "Engineered with semantic, componentized modern web standards, CSS custom properties for aquatic slate and cyan ambiance, progressive video stream decoders, and structured B2B Project Schemas.",
      layers: [
        { layer: "Presentation Architecture", tech: "Semantic HTML5 + Custom CSS", role: "Minimalist luxury layout with smooth glassmorphism overlays and dark aquatic depth." },
        { layer: "Media Streaming", tech: "Progressive WebM/MP4 Encoded Media", role: "Lightweight video background playback optimized for mobile data efficiency." },
        { layer: "Catalog Interaction", tech: "Interactive Nozzle & Lighting Gallery", role: "Real-time filtering of fountain installations by category (Musical, Dry-Deck, Resort)." },
        { layer: "Lead Architecture", tech: "RFP Architectural Intake Desk", role: "Direct transmission of blueprints and project briefs to Fludio's chief engineering officer." }
      ],
      speedAndPerformance: [
        "98/100 performance score with 0.8s time to interactive.",
        "Compressed video assets delivered via CDN with smart intersection observers.",
        "Zero layout shifts across desktop, iPad, and smartphone viewports."
      ],
      aiAndGeoStrategy: [
        "Comprehensive Project and Service structured data schema for luxury architectural tenders.",
        "Clear entity associations tying Fludio to Pune engineering, DMX 512, and municipal fountain projects.",
        "Deep semantic coverage of water filtration, aquatic hydraulics, and nozzle metallurgy."
      ]
    },
    results: {
      highlight: "₹2.8Cr+ in Pipeline Opportunities from Real Estate Developers",
      metrics: [
        { label: "Commercial Inquiries", before: "3/mo", after: "19/mo", change: "+533%", icon: "trending-up" },
        { label: "Architect Spec Downloads", before: "0", after: "140+/mo", change: "New Channel", icon: "download" },
        { label: "Mobile Bounce Rate", before: "68%", after: "24%", change: "-64%", icon: "user-check" },
        { label: "Google Rankings", before: "Page 4", after: "Top 3", change: "Dominant", icon: "award" }
      ],
      keyOutcomes: [
        "Secured turnkey water feature contracts for 2 major township developments in Baner and Kharadi.",
        "Established direct supplier partnerships with 15+ top landscape architecture firms in Pune and Mumbai.",
        "Reduced initial sales discovery cycle from 2 weeks to 48 hours thanks to self-service spec sheets."
      ]
    },
    deliverables: [
      { title: "Architectural Showcase Portal", description: "Bespoke digital brand experience highlighting turnkey water projects.", icon: "layout" },
      { title: "Interactive Project Gallery", description: "Categorized installation showcase with video loops and lighting specs.", icon: "image" },
      { title: "Nozzle & Hardware Catalog", description: "Detailed specification sheets for fountain nozzles, pumps, and IP68 lighting.", icon: "cpu" },
      { title: "Architectural RFP Intake", description: "Streamlined project inquiry form for blueprints, budgets, and site parameters.", icon: "clipboard-list" },
      { title: "Turnkey SEO Foundation", description: "High-intent keyword optimization for commercial water feature tenders.", icon: "search" },
      { title: "Mobile Conversion Suite", description: "Sticky WhatsApp consultation desk and 1-tap call dialing.", icon: "phone" }
    ],
    testimonial: {
      quote: "Before Inrank redesigned fludio.in, our website was a static brochure that didn't capture the magic of our dancing fountains. Inrank turned our site into a visual powerhouse. Top architects now come to our meetings having already reviewed our video portfolio and nozzle specifications. Our pipeline of township and resort projects has never been stronger.",
      author: "Fludio Leadership Team",
      role: "Managing Directors",
      company: "Fludio Water Solutions"
    },
    faqs: [
      {
        question: "How did Inrank keep the website fast despite heavy video content?",
        answer: "We implemented adaptive progressive video loading using Intersection Observers, lightweight WebM encoding, and responsive poster frames so videos only buffer when visible on screen."
      },
      {
        question: "What makes Fludio's RFP consultation form convert so well?",
        answer: "Instead of generic contact boxes, the form speaks the architect's language - asking for project type (Township, Resort, Plaza), water basin dimensions, and choreographic requirements."
      }
    ],
    metaTitle: "Fludio Water Solutions Case Study | Luxury Fountain Engineering Web Development",
    metaDesc: "See how Inrank built an architectural water feature showcase for Fludio Water Solutions Pune, driving ₹2.8Cr+ in commercial developer pipeline opportunities."
  },
  {
    id: "hiragrafix",
    slug: "hiragrafix-mumbai-printing-packaging",
    title: "HIRAGRAFIX™ - Corporate Printing, Packaging & Brand Merchandising",
    clientName: "HIRAGRAFIX™ (Hira Printers)",
    category: "direct",
    categoryBadge: "Direct Inrank Project",
    domain: "hiragrafix.com",
    liveUrl: "https://hiragrafix.com",
    industry: "Commercial Printing, Luxury Packaging & Merchandising",
    sector: "Corporate Printing, Luxury Rigid Packaging & Brand Merchandise",
    screenshot: "/portfolio/screenshots/hiragrafix.png",
    metaServices: ["B2B Packaging Portal","Interactive Paper & Finish Selector","Corporate Gifting Catalog","B2B WhatsApp RFQ Desk","Commercial SEO"],
    tingQuestion: "How do you showcase 20+ years of high-volume corporate printing craftsmanship to Fortune 500 brand managers online?",
    tingAnswer: "By developing a tactile, high-contrast B2B portal featuring an interactive paper GSM & finish selector, corporate gifting catalog, and WhatsApp quotation desk with sub-second responsiveness.",
    bigTitleBanner: "PRECISION PRINTING & LUXURY PACKAGING FOR BRANDS THAT DEMAND PERFECTION",
    usps: [
      {
            "title": "A 360° Tactile Showcase of Print Finishes",
            "description": "Interactive finish selector displaying spot UV, gold foil stamping, debossing, and textured paper stocks with photorealistic preview fidelity.",
            "icon": "box"
      },
      {
            "title": "Corporate Gifting & Bulk Order Estimator",
            "description": "Structured enterprise quote request engine allowing brand procurement teams to configure multi-item kits and bulk tier discounts in seconds.",
            "icon": "gift"
      },
      {
            "title": "High-Velocity Mobile Experience",
            "description": "Sub-second load speed with optimized asset preloading so busy marketing executives can browse product catalogs without waiting.",
            "icon": "gauge"
      },
      {
            "title": "Commercial SEO & Packaging Directory",
            "description": "Targeted local and national B2B search terms for mono cartons, rigid luxury boxes, and pharma foil printing across Mumbai and Pune.",
            "icon": "search"
      }
],
    timeline: "4 Weeks Turnaround",
    location: "BKC & Sakinaka, Mumbai",
    heroHeadline: "Modernizing a 50-Year Print Legacy into an Enterprise Corporate Packaging Powerhouse",
    heroSummary: "Spearheaded the complete digital brand modernization of HIRAGRAFIX™ (founded 1970 in Mumbai), launching a comprehensive corporate product catalog, instant sample request engine, and B2B quotation workflows that attracted Fortune 500 corporate gifting and luxury packaging clients across India.",
    accentGradient: "from-amber-600 via-orange-600 to-red-600",
    accentColor: "#ea580c",
    badge: "Enterprise B2B Print Portal",
    services: [
      "Corporate Brand Digital Transformation",
      "B2B Product & Material Catalog",
      "Instant Sample & Quote Calculator",
      "Enterprise Corporate Packaging SEO",
      "Corporate Client Onboarding Funnels",
      "Mobile-First B2B Merchandising UX"
    ],
    technologies: ["Modern JavaScript", "TailwindCSS Design System", "Lucide Icons", "B2B Quoting Calculator", "Product Schema JSON-LD"],
    clientBackground: "HIRAGRAFIX™ (formerly Hira Printers, established 1970) is one of Mumbai's most respected commercial printing and packaging houses, operating out of Bandra Kurla Complex (BKC) and Sakinaka. They provide offset printing, luxury mono cartons, rigid boxes, wide-format indoor/outdoor signage, and custom employee welcome kits.",
    challenges: [
      "Despite 5 decades of manufacturing craftsmanship, their legacy website looked dated and did not reflect their state-of-the-art multi-color Heidelberg printing presses.",
      "Corporate procurement teams from BKC multinationals couldn't easily browse paper stocks, GSM weights, embossing finishes, or sample kits online.",
      "Sales staff was inundated with manual back-and-forth emails calculating basic unit price estimates for brochures and boxes.",
      "No organic visibility for lucrative commercial terms like 'corporate gifting kits Mumbai' and 'rigid packaging manufacturer BKC'."
    ],
    strategicSolution: {
      overview: "Inrank designed a sleek, high-trust corporate portal emphasizing tactile craftsmanship, luxury foil stamping previews, structured material specifications (GSM, textures, coatings), and an automated sample request system that positioned HIRAGRAFIX™ as the go-to partner for enterprise brand procurement.",
      pillars: [
        {
          title: "Tactile Digital Material Catalog",
          description: "Built an interactive material explorer showcasing texture finishes (soft-touch velvet lamination, spot UV, gold foil debossing, FSC-certified kraft paper) with zoom previews.",
          icon: "box"
        },
        {
          title: "Instant Corporate Sample Kit Desk",
          description: "Engineered a low-friction sample request flow allowing enterprise procurement officers and marketing heads to order physical swatch boxes delivered directly to their offices.",
          icon: "gift"
        },
        {
          title: "Multi-Pillar B2B Services Taxonomy",
          description: "Structured deep catalog landing pages for 6 core business verticals: Corporate Stationery, Luxury Packaging, Signage & Spatial Branding, Gifting Kits, Offset Printing, and Event Collaterals.",
          icon: "layers"
        },
        {
          title: "B2B Mumbai Commercial SEO",
          description: "Engineered localized SEO dominance covering corporate commercial hubs in BKC, Lower Parel, Sakinaka, Andheri, and Navi Mumbai.",
          icon: "map-pin"
        }
      ]
    },
    technicalArchitecture: {
      stackOverview: "Designed with modern enterprise web standards, responsive typography tokens for crisp readability, zero-dependency client calculators, and extensive Schema.org Organization, Brand, and Offer catalogs.",
      layers: [
        { layer: "Presentation Architecture", tech: "Modern Semantic HTML5 & CSS", role: "High-contrast luxury layout combining industrial precision with aesthetic corporate elegance." },
        { layer: "Catalog Interaction", tech: "Interactive Material & GSM Explorer", role: "Dynamic client-side sorting of products by paper weight, finish, and minimum order quantity." },
        { layer: "Enterprise RFQ Engine", tech: "Smart Quote Estimator", role: "Custom multi-parameter quote request calculating quantities, delivery timelines, and finishing." },
        { layer: "Structured Data", tech: "Product, Brand & LocalBusiness Schema", role: "Enabling rich Google search snippets with pricing tiers and 50-year heritage credentials." }
      ],
      speedAndPerformance: [
        "99/100 Desktop PageSpeed score; loads fully in 0.68 seconds.",
        "Optimized WebP image delivery for high-resolution packaging textures.",
        "Zero script bloat with ultra-clean modular architecture."
      ],
      aiAndGeoStrategy: [
        "Ranked in top 3 Google map pack for commercial print and packaging searches in Mumbai.",
        "Clear entity verification as an ISO/FSC certified print manufacturer established in 1970.",
        "Semantic coverage of luxury retail packaging, pharmaceutical cartons, and sustainable inks."
      ]
    },
    results: {
      highlight: "+420% Inquiries for Luxury Packaging & High-Ticket Welcome Kits",
      metrics: [
        { label: "Corporate RFQs", before: "18/mo", after: "76/mo", change: "+322%", icon: "trending-up" },
        { label: "Sample Kit Requests", before: "4/mo", after: "45+/mo", change: "+1025%", icon: "gift" },
        { label: "Avg. Deal Size", before: "₹35,000", after: "₹1,85,000", change: "+428%", icon: "credit-card" },
        { label: "Google Rankings", before: "Page 3", after: "Top 3", change: "Dominant", icon: "award" }
      ],
      keyOutcomes: [
        "Won annual print and packaging contracts with 4 major FMCG and financial services enterprises headquartered in BKC.",
        "Reduced initial quotation estimation turnaround from 48 hours to under 3 hours via the structured RFQ builder.",
        "Established HIRAGRAFIX™ as the benchmark for luxury sustainable packaging in western India."
      ]
    },
    deliverables: [
      { title: "Enterprise Brand Portal", description: "Modern, high-trust corporate website honoring 50 years of print legacy.", icon: "globe" },
      { title: "Interactive Product Catalog", description: "Structured showcase of packaging, stationery, corporate gifts, and signage.", icon: "layers" },
      { title: "Sample Box Request Flow", description: "Dedicated corporate desk for ordering physical material swatch kits.", icon: "package" },
      { title: "Detailed Material Guides", description: "Interactive guides on GSM weights, embossing, foil finishes, and FSC papers.", icon: "file-text" },
      { title: "Mumbai B2B SEO Strategy", description: "Hyper-localized keyword dominance targeting corporate business parks.", icon: "search" },
      { title: "Instant WhatsApp Direct Desk", description: "Direct connection with production floor managers for urgent print deadlines.", icon: "message-circle" }
    ],
    testimonial: {
      quote: "Our company has been printing for India's biggest brands since 1970, but our website had not kept pace with how modern brand directors evaluate suppliers. Inrank completely revitalized HIRAGRAFIX. Their design looks exceptionally polished, and our sample request engine has brought us multi-lakh packaging contracts from leading corporate firms in Mumbai.",
      author: "Hira Printing & Packaging Board",
      role: "Directors",
      company: "HIRAGRAFIX™ (Hira Corporation)"
    },
    faqs: [
      {
        question: "How did Inrank structure the product catalog for hundreds of custom print items?",
        answer: "We grouped products into 6 distinct core verticals with filterable tags by material type, finish, and turnaround time, making it effortless for corporate buyers to find exactly what they need in seconds."
      },
      {
        question: "What makes the Sample Kit request desk so effective for B2B sales?",
        answer: "In print, tactile touch drives conversions. By making it easy for marketing heads to receive a curated physical sample box at their office, HIRAGRAFIX converts over 65% of sample requesters into paying corporate clients."
      }
    ],
    metaTitle: "HIRAGRAFIX™ Mumbai Case Study | Corporate Printing & Packaging Web Portal",
    metaDesc: "Read how Inrank modernised HIRAGRAFIX™ Mumbai's print legacy into a high-converting B2B corporate packaging portal, increasing monthly RFQs by +322%."
  },
  {
    id: "greytothegreen",
    slug: "grey-to-the-green-eco-biotech",
    title: "Grey To The Green - Plant-Powered Home Care & Biotech Formulations",
    clientName: "Grey To The Green (Quantum Innovation)",
    category: "direct",
    categoryBadge: "Direct Inrank Project",
    domain: "greytothegreen.com",
    liveUrl: "https://greytothegreen.com",
    industry: "Eco-Friendly Home Care, Biotech & Organic D2C",
    sector: "Eco-Friendly Biotechnology, Home Care & Plant-Powered Formulations",
    screenshot: "/portfolio/screenshots/greytothegreen.png",
    metaServices: ["Botanical Brand UX Design","Eco-Formulation Spec Matrix","D2C & Institutional Portal","Mobile-First Storefront","Sustainable E-Commerce"],
    tingQuestion: "How do you position a plant-powered biotechnology brand as the undisputed safe alternative to toxic home chemicals?",
    tingAnswer: "By designing a fresh, botanical D2C and institutional portal with transparent ingredient breakdowns, lab certification badges, and an effortless eco-subscription funnel.",
    bigTitleBanner: "NATURE RECLAIMED: BRINGING PLANT-POWERED BIO-SCIENCE INTO EVERY HOME",
    usps: [
      {
            "title": "A 360° Botanical Brand Identity",
            "description": "Clean sage-green visual identity, organic geometry, and sustainable aesthetic that reinforces safety, purity, and eco-consciousness.",
            "icon": "leaf"
      },
      {
            "title": "Interactive Formulation & Safety Lab Badges",
            "description": "Visual ingredient transparency matrix highlighting zero phosphates, biodegradable enzymes, and pet-safe certifications.",
            "icon": "shield-check"
      },
      {
            "title": "Frictionless B2C & Institutional B2B Funnels",
            "description": "Dual pathway catering to conscious home shoppers seeking retail packs and corporate facilities procurement managers ordering bulk concentrates.",
            "icon": "shopping-bag"
      },
      {
            "title": "Core Web Vitals Excellence",
            "description": "Engineered for mobile shoppers with 98/100 performance, lightning-fast product filtering, and instant checkout pathways.",
            "icon": "smartphone"
      }
],
    timeline: "3.5 Weeks Turnaround",
    location: "Bangalore, India",
    heroHeadline: "Translating Cutting-Edge Molecular Biology into High-Converting Organic D2C Trust",
    heroSummary: "Crafted a scientific yet accessible eco-luxury e-commerce and retail distributor portal for Grey To The Green (backed by molecular biologist Dr. Anil Kush), featuring US EPA-registered neem formulations (Checkmite, Eco Kavach, Bugster) with transparent clinical validation that drove both retail sales and distributor inquiries.",
    accentGradient: "from-emerald-600 via-green-600 to-teal-700",
    accentColor: "#059669",
    badge: "Eco-Biotech E-Commerce & B2B",
    services: [
      "Scientific D2C & B2B Web Architecture",
      "Interactive Product Efficacy Visualizer",
      "Scientific Trust & EPA Badge Integration",
      "D2C Conversion Rate Optimization (CRO)",
      "Organic Search & Ingredient SEO",
      "Wholesale Distributor Onboarding Funnel"
    ],
    technologies: ["Modern JavaScript", "TailwindCSS Design System", "Lucide Icons", "Product Schema JSON-LD", "Interactive Efficacy Cards"],
    clientBackground: "Grey To The Green (a division of Quantum Innovation, Bangalore) manufactures 100% organic, plant-powered household and garden wellness solutions developed under the scientific stewardship of renowned molecular biologist Dr. Anil Kush. Their signature product, Checkmite, is a breakthrough US EPA-registered neem dust-mite eliminator safe for infants and pets.",
    challenges: [
      "Shoppers were skeptical of 'organic' claims due to greenwashing in the market, requiring rock-solid scientific proof and EPA registration credibility upfront.",
      "The previous website presented products like academic research papers rather than benefit-driven lifestyle solutions.",
      "Low mobile conversion rate on product detail pages with sluggish image load times.",
      "No streamlined channel for physical organic stores, pediatric clinics, and distributors to place bulk wholesale orders."
    ],
    strategicSolution: {
      overview: "Inrank engineered a fresh, nature-inspired yet rigorously scientific digital storefront. We designed interactive 'Science Behind the Spray' modules, integrated US EPA registration badges, created clear before-and-after allergen protection infographics, and built a dedicated B2B Wholesale Portal alongside the D2C checkout funnel.",
      pillars: [
        {
          title: "Science-Backed Transparency Modules",
          description: "Engineered interactive micro-sections breaking down how bioactive cold-pressed neem limonoids neutralize dust mites and allergens without synthetic pyrethroids or toxic chemicals.",
          icon: "shield-check"
        },
        {
          title: "US EPA & Lab Certification Showcase",
          description: "Prominently embedded verifiable third-party toxicology certificates, pediatric safety badges, and Dr. Anil Kush's molecular biology research credentials.",
          icon: "award"
        },
        {
          title: "Dual Funnel: Retail D2C + B2B Distributor",
          description: "Built seamless 1-click consumer checkout paths alongside an automated wholesale distributor onboarding desk with tiered volume pricing.",
          icon: "shopping-bag"
        },
        {
          title: "Ingredient & Wellness Organic SEO",
          description: "Captured high-intent consumer health searches: 'natural dust mite spray', 'chemical-free mealybug repellent', and 'pet safe insect sprays India'.",
          icon: "search"
        }
      ]
    },
    technicalArchitecture: {
      stackOverview: "Crafted with lightweight mobile-first UI components, lush natural color palettes (sage, emerald, warm cream), instant client-side accordions, and rich Schema.org Product, Organization, and MedicalWebPage validations.",
      layers: [
        { layer: "Presentation Architecture", tech: "Clean HTML5 + TailwindCSS", role: "Earthy, premium visual aesthetic blending botanical warmth with pharmaceutical precision." },
        { layer: "Product Visuals", tech: "Responsive WebP with SVG Accents", role: "Crisp macro product renders and infographic cards illustrating dust mite elimination cycles." },
        { layer: "Wholesale Engine", tech: "Distributor Onboarding Desk", role: "Automated verification and quotation generation for retail pharmacies and organic supermarkets." },
        { layer: "Structured Data", tech: "Product & AggregateRating Schema", role: "Rich Google product snippets with 5-star review ratings and EPA certification highlights." }
      ],
      speedAndPerformance: [
        "99/100 Mobile PageSpeed score; First Contentful Paint in 0.65s.",
        "Ultra-lightweight bundle with zero third-party render-blocking scripts.",
        "Smooth micro-interactions on mobile touchscreens."
      ],
      aiAndGeoStrategy: [
        "High citation authority for natural allergen control and non-toxic dust mite treatments in AI searches.",
        "Structured FAQPage schema addressing child and pet safety around active neem formulations.",
        "Entity linkages connecting Dr. Anil Kush, Quantum Innovation, and biological pesticide patents."
      ]
    },
    results: {
      highlight: "+280% Retail Conversions & 42 Active Retail Distributors Onboarded",
      metrics: [
        { label: "Mobile Conversion Rate", before: "1.2%", after: "3.9%", change: "+225%", icon: "trending-up" },
        { label: "Wholesale Inquiries", before: "2/mo", after: "26/mo", change: "+1200%", icon: "truck" },
        { label: "Organic Search Traffic", before: "450/mo", after: "3,800+/mo", change: "+744%", icon: "search" },
        { label: "Page Load Speed", before: "4.2s", after: "0.7s", change: "-83%", icon: "zap" }
      ],
      keyOutcomes: [
        "Checkmite established as the top-ranking natural anti-dust mite spray on Google search in urban metros.",
        "Onboarded 42 retail organic stores, veterinary clinics, and eco-lifestyle boutiques across Bangalore, Mumbai, and Delhi.",
        "Reduced customer support inquiries regarding safety by 70% thanks to transparent on-page toxicology FAQs."
      ]
    },
    deliverables: [
      { title: "Eco-Biotech Digital Storefront", description: "Modern, high-converting digital portal bridging nature and science.", icon: "shopping-cart" },
      { title: "Scientific Efficacy Visualizers", description: "Interactive diagrams illustrating how neem extracts eliminate dust mites.", icon: "activity" },
      { title: "B2B Wholesale Portal", description: "Dedicated distributor onboarding engine with tiered pricing.", icon: "truck" },
      { title: "Certifications & Trust Badges", description: "Interactive validation modules for US EPA registration and lab tests.", icon: "shield" },
      { title: "Organic Wellness SEO Hub", description: "Targeted content architecture capturing health and allergen search queries.", icon: "search" },
      { title: "WhatsApp Direct Care Desk", description: "Instant botanical advisory chat for plant care and home allergen queries.", icon: "message-circle" }
    ],
    testimonial: {
      quote: "Our biggest challenge in the organic sector was distinguishing our patented molecular formulations from generic homemade sprays. Inrank built an extraordinary website that balances scientific credibility with beautiful consumer design. Both our direct retail sales and wholesale inquiries from organic stores across India have grown beyond our projections.",
      author: "Quantum Innovation Team",
      role: "Brand & Science Directors",
      company: "Grey To The Green"
    },
    faqs: [
      {
        question: "How did Inrank convey scientific credibility without overwhelming shoppers?",
        answer: "We used progressive disclosure: simple, compelling benefit headlines (e.g., '100% Pet-Safe Dust Mite Elimination') backed by expandable 'View Molecular Science & EPA Details' drawers containing lab reports and patent citations."
      },
      {
        question: "How does the dual D2C + B2B wholesale workflow operate?",
        answer: "Consumers experience an effortless retail shopping flow, while commercial retailers and organic store chains access a prominent 'Distributor & Bulk Orders' tab with custom volume calculators and instant GST invoicing."
      }
    ],
    metaTitle: "Grey To The Green Case Study | Eco-Biotech E-Commerce & Lead Generation",
    metaDesc: "Discover how Inrank Technologies built a scientific eco-luxury web portal for Grey To The Green, lifting retail conversion rate to 3.9% and onboarding 42 distributors."
  },
  {
    id: "vasroventures",
    slug: "vasro-ventures-fashion-apparel",
    title: "Vasro Ventures - Contemporary Fashion Apparel & Lifestyle Brand",
    clientName: "Vasro Ventures Pvt Ltd",
    category: "direct",
    categoryBadge: "Direct Inrank Project",
    domain: "vasroventures.com",
    liveUrl: "https://vasroventures.com",
    industry: "Contemporary Fashion, Apparel & D2C Lifestyle",
    sector: "Contemporary Fashion Apparel & D2C Lifestyle Brand",
    screenshot: "/portfolio/screenshots/vasroventures.png",
    metaServices: ["High-Fashion Storefront UI/UX","Responsive Collection Grids","Dynamic Promo Discount Bars","Instant WhatsApp Checkout","Mobile Speed Optimization"],
    tingQuestion: "How do you build a high-conversion fashion e-commerce storefront with zero cart friction and instant mobile checkouts?",
    tingAnswer: "By creating an ultra-clean, minimalist fashion storefront with responsive collection grids, interactive size guides, dynamic promotional coupon bars, and mobile-first checkout flows.",
    bigTitleBanner: "REDEFINING MODERN STREETWEAR & TIMELESS EVERYDAY LIFESTYLE APPAREL",
    usps: [
      {
            "title": "A 360° Minimalist High-Fashion UX",
            "description": "Editorial product photography layouts, sleek typography, and uncluttered visual hierarchy inspired by world-class streetwear houses.",
            "icon": "palette"
      },
      {
            "title": "Dynamic Coupon & Conversion Acceleration",
            "description": "Top notification bar with instant coupon code application, sticky quick-add mobile cart, and wishlist synchronization.",
            "icon": "tag"
      },
      {
            "title": "High-Speed Image CDN & Responsive Grid",
            "description": "Next-gen WebP imagery and responsive srcset delivering instant scrolling and zero layout jumps on smartphone browsers.",
            "icon": "layers"
      },
      {
            "title": "Frictionless Checkout Funnel",
            "description": "Streamlined multi-gateway payment integration and WhatsApp order inquiry support for maximum conversion completion.",
            "icon": "check-circle"
      }
],
    timeline: "3 Weeks Turnaround",
    location: "Maharashtra, India",
    heroHeadline: "Minimalist High-Fashion Editorial Lookbook & High-Velocity E-Commerce Experience",
    heroSummary: "Engineered a chic, editorial-grade fashion lookbook and digital apparel storefront for Vasro Ventures, featuring fluid category transitions, responsive size and silhouette guides, and instant Instagram-ready shopping funnels that positioned the brand as a modern staple in contemporary womenswear.",
    accentGradient: "from-stone-800 via-zinc-900 to-neutral-700",
    accentColor: "#18181b",
    badge: "Contemporary Fashion & Apparel",
    services: [
      "Editorial Fashion UI/UX Design",
      "Interactive Lookbook & Catalog Engine",
      "Mobile-First Touch Gestures & Micro-Animations",
      "Apparel Sizing & Silhouette Matrix",
      "E-Commerce Checkout Optimization",
      "High-Fashion Brand Positioning"
    ],
    technologies: ["Modern JavaScript", "TailwindCSS Luxury Tokens", "Lucide Icons", "Product Schema JSON-LD", "Touch Swipe Visual Carousels"],
    clientBackground: "Vasro Ventures Private Limited is a modern fashion and apparel corporate entity operating an upscale online fashion label offering chic co-ord sets, tailored jackets, contemporary skirts, and elegant wide-leg trousers designed for modern women seeking effortless sophistication.",
    challenges: [
      "Fashion buyers demand ultra-fast visual loading, but high-resolution lookbook photography was previously causing 5-second loading delays on smartphones.",
      "Generic e-commerce templates failed to reflect the sleek, editorial aesthetic of high-end fashion boutiques.",
      "High return rates caused by ambiguous sizing guides and lack of model height/measurement details.",
      "Poor social commerce integration between viral Instagram posts and seamless mobile checkout."
    ],
    strategicSolution: {
      overview: "Inrank designed a minimalist, editorial-first web experience inspired by European fashion ateliers. Using monochromatic typography, spacious white margins, instant image pre-caching, and interactive silhouette calculators, we transformed the site into a high-converting digital flagship store.",
      pillars: [
        {
          title: "Editorial Digital Lookbook",
          description: "Engineered high-fashion visual grids with sticky image previews, model measurement disclosures, and fabric composition callouts.",
          icon: "camera"
        },
        {
          title: "Instant Mobile Touch Navigation",
          description: "Optimized touch swipe carousels and 1-thumb checkout buttons tailored for millennial and Gen-Z mobile shoppers on 5G/4G connections.",
          icon: "smartphone"
        },
        {
          title: "Precision Sizing & Fit Advisor",
          description: "Integrated an interactive sizing matrix allowing shoppers to compare bust, waist, and hip metrics against exact garment measurements.",
          icon: "maximize-2"
        },
        {
          title: "Direct WhatsApp Styling Desk",
          description: "Implemented a personal stylist consultation desk via WhatsApp, allowing customers to ask styling questions and request custom tailoring.",
          icon: "zap"
        }
      ]
    },
    technicalArchitecture: {
      stackOverview: "Constructed with modern responsive web standards, sophisticated minimalist styling, WebP next-gen photography compression, and structured Product/ItemAvailability schema for Google Merchant and Shopping search.",
      layers: [
        { layer: "Presentation Architecture", tech: "Clean HTML5 + Monochromatic Design", role: "Haute couture aesthetic with generous whitespace, subtle borders, and serif editorial accents." },
        { layer: "Visual Delivery", tech: "Next-Gen WebP + Responsive Srcset", role: "Lossless image compression serving crisp high-density renders across Retina and 4K displays." },
        { layer: "Sizing Engine", tech: "Interactive Fit & Metric Switcher", role: "1-click toggling between inches and centimeters with real-time model comparison." },
        { layer: "Shopping Schema", tech: "Product & Offer Catalog Schema", role: "Rich search snippets showing stock availability, sizes (XS-XL), and price in INR." }
      ],
      speedAndPerformance: [
        "99/100 Mobile PageSpeed score; sub-second visual rendering.",
        "Zero layout shifts during image loading through aspect-ratio reservations.",
        "Fluid 60fps micro-animations on product hover and touch gestures."
      ],
      aiAndGeoStrategy: [
        "Optimized for visual search engines and Google Lens apparel indexing.",
        "Semantic fashion terminology targeting 'contemporary co-ord sets India' and 'tailored wide leg trousers'.",
        "Authoritative brand schema reinforcing Vasro Ventures as a registered Indian fashion corporate entity."
      ]
    },
    results: {
      highlight: "+360% Mobile Orders & -45% Sizing-Related Returns",
      metrics: [
        { label: "Mobile Page Load", before: "5.1s", after: "0.78s", change: "-84%", icon: "zap" },
        { label: "Checkout Conversion", before: "1.1%", after: "3.4%", change: "+209%", icon: "trending-up" },
        { label: "Return Rate", before: "24%", after: "13%", change: "-45%", icon: "check-circle" },
        { label: "Styling Desk Leads", before: "0", after: "38+/wk", change: "New Channel", icon: "message-circle" }
      ],
      keyOutcomes: [
        "Successfully launched 3 seasonal collections with 100% server uptime during viral Instagram influencer drops.",
        "Cut customer size hesitation returns nearly in half through the interactive garment measurement matrix.",
        "Achieved a 4.2x ROAS on Meta ads due to lightning-fast landing page speed and friction-free checkout."
      ]
    },
    deliverables: [
      { title: "Editorial Lookbook Portal", description: "Bespoke minimalist digital storefront reflecting luxury atelier aesthetics.", icon: "layout" },
      { title: "Interactive Sizing Matrix", description: "Comprehensive fit calculator comparing body measurements to garment cuts.", icon: "scissors" },
      { title: "Mobile Touch Carousel", description: "Ultra-smooth image sliders with 1-tap quick view and color swatches.", icon: "smartphone" },
      { title: "Personal Stylist WhatsApp Desk", description: "Direct VIP styling consultation linking buyers with fashion advisors.", icon: "message-circle" },
      { title: "E-Commerce SEO Schema", description: "Rich product snippets for Google Shopping and visual discovery.", icon: "tag" },
      { title: "Influencer Landing Templates", description: "High-speed landing pages engineered for paid Instagram ad campaigns.", icon: "zap" }
    ],
    testimonial: {
      quote: "Fashion e-commerce lives and dies by visual aesthetics and speed. If a page takes more than 2 seconds to load, the buyer is gone. Inrank built a digital storefront that looks like Vogue and loads instantly. Our customers constantly compliment the design, and our sizing returns dropped dramatically.",
      author: "Vasro Ventures Creative Team",
      role: "Founders & Creative Directors",
      company: "Vasro Ventures"
    },
    faqs: [
      {
        question: "How did Inrank achieve sub-second load times with high-res fashion photography?",
        answer: "We used modern WebP compression pipelines, responsive srcset breakpoints, and CSS-driven progressive blur up so full-resolution editorial photos appear immediately without delaying interactive buttons."
      },
      {
        question: "Why was the interactive sizing matrix so critical for ROI?",
        answer: "In fashion, return shipping costs destroy profitability. By detailing garment measurements (armhole, waist stretch, inseam) alongside model stats, buyers picked the right size on their first order."
      }
    ],
    metaTitle: "Vasro Ventures Case Study | Minimalist Fashion Apparel Web Experience",
    metaDesc: "See how Inrank built an editorial fashion lookbook & e-commerce portal for Vasro Ventures, lifting mobile conversions to 3.4% and cutting returns by 45%."
  },
  {
    id: "hcpnest",
    slug: "hcpnest-healthcare-staffing-portal",
    title: "HCPNest - Healthcare Recruitment & Medical Clinical Staffing Network",
    clientName: "HCPNest (HCP Network)",
    category: "direct",
    categoryBadge: "Direct Inrank Project",
    domain: "hcpnest.com",
    liveUrl: "https://hcpnest.com",
    industry: "Healthcare Staffing, Medical Recruitment & Clinical Job Board",
    sector: "Healthcare Talent Recruitment & Clinical Staffing Network",
    screenshot: "/portfolio/screenshots/hcpnest.png",
    metaServices: ["HIPAA-Conscious Web Portal","Dual Hospital & Clinician Flows","Interactive Job Search Matrix","1-Click Resume Ingestion","Google for Jobs Schema"],
    tingQuestion: "How do you bridge the clinical talent gap between hospitals seeking specialists and medical professionals seeking verified roles?",
    tingAnswer: "By architecting a HIPAA-conscious, trust-inspiring healthcare staffing platform with role-based application filters, instant job posting desks, and automated candidate routing.",
    bigTitleBanner: "EMPOWERING HEALTHCARE TEAMS WITH TRUSTED MEDICAL TALENT & CLINICAL PLACEMENTS",
    usps: [
      {
            "title": "A 360° Healthcare Trust Architecture",
            "description": "Calming clinical blue aesthetic, verification badges, and secure credential submission protocols that build immediate institutional trust.",
            "icon": "activity"
      },
      {
            "title": "Dual-Sided Portal for Hospitals & Clinicians",
            "description": "Tailored user journeys: 'Add Job' portal for healthcare facilities and intuitive 'Job Search' with specialty filters for doctors and nurses.",
            "icon": "users"
      },
      {
            "title": "Mobile-Optimized Candidate Applications",
            "description": "1-click resume drop and mobile-friendly application flow allowing on-duty healthcare workers to apply in under 60 seconds.",
            "icon": "file-text"
      },
      {
            "title": "SEO-Structured Clinical Job Schema",
            "description": "Google JobPosting structured data integration ensuring HCPNest listings appear directly in Google for Jobs search carousels.",
            "icon": "search"
      }
],
    timeline: "4 Weeks Turnaround",
    location: "Pan-India & Global Healthcare",
    heroHeadline: "Bridging Premier Hospitals and Healthcare Professionals via an Intuitive Clinical Talent Exchange",
    heroSummary: "Architected a dual-sided healthcare recruitment and medical staffing portal for HCPNest, allowing hospitals to publish clinical openings and medical professionals (physicians, nurses, specialists) to submit verified credentials, reducing clinical placement turnaround times from 3 weeks to under 4 days.",
    accentGradient: "from-teal-600 via-emerald-600 to-sky-700",
    accentColor: "#0d9488",
    badge: "Dual-Sided Medical Talent Portal",
    services: [
      "Dual-Sided Medical Marketplace UX",
      "Candidate Resume & Credential Uploader",
      "Employer Clinical Job Requisition Engine",
      "JobPosting Structured Data Schema",
      "HIPAA-Compliant Medical Inquiry Funnels",
      "Healthcare Search Engine Domination"
    ],
    technologies: ["Modern JavaScript", "TailwindCSS Design System", "Lucide Icons", "JobPosting Schema JSON-LD", "Filterable Clinical Taxonomy"],
    clientBackground: "HCPNest is a specialized healthcare staffing agency and digital recruitment platform connecting qualified doctors, registered nurses, allied health specialists, and hospital administrators with accredited medical centers, nursing homes, and research hospitals across India.",
    challenges: [
      "Traditional healthcare staffing relied on disorganized WhatsApp groups and manual Excel spreadsheets, causing slow placement times.",
      "Hospitals faced severe clinical nurse and ICU doctor shortages and needed verified, credentialed candidates urgently.",
      "Job listings were invisible on Google Jobs due to lack of standard JobPosting schema.",
      "Candidates were wary of submitting sensitive medical credentials without visible security and verification assurances."
    ],
    strategicSolution: {
      overview: "Inrank designed a trustworthy, high-efficiency dual-sided talent marketplace. We built dedicated workflows for hospital HR directors to publish requisitions and clinical professionals to filter openings by specialty, shift type, and geography with 1-click credential submission.",
      pillars: [
        {
          title: "Dual-Audience Portal Architecture",
          description: "Distinct user journeys: 'For Healthcare Candidates' (browse verified hospital jobs, salary benchmarks, credential vault) and 'For Medical Employers' (post requisitions, request pre-vetted staff).",
          icon: "users"
        },
        {
          title: "Google Jobs Indexing Engine",
          description: "Embedded real-time JobPosting structured data schema for every medical role, automatically featuring HCPNest vacancies directly inside Google's native Jobs Search widget.",
          icon: "search"
        },
        {
          title: "Clinical Specialty Taxonomy",
          description: "Filterable categorization covering 20+ disciplines: ICU/CCU Nursing, Emergency Medicine, Surgery, Radiology, Oncology, and Hospital Management.",
          icon: "stethoscope"
        },
        {
          title: "Rapid Emergency Placement Desk",
          description: "Dedicated 24/7 urgent staffing hotline and WhatsApp dispatch for hospitals facing immediate clinical roster shortages.",
          icon: "phone-call"
        }
      ]
    },
    technicalArchitecture: {
      stackOverview: "Engineered with medical-grade clean visual design, calm trustworthy teal and emerald palettes, rapid client-side search filtering, and robust JSON-LD JobPosting schema.",
      layers: [
        { layer: "Presentation Architecture", tech: "Clean HTML5 + Healthcare CSS Tokens", role: "High-trust clinical aesthetic conveying institutional authority and patient-centric care." },
        { layer: "Job Discovery Engine", tech: "Client-Side Specialty & Location Filter", role: "Instant search by specialty, city, shifts (day/night/locum), and salary band." },
        { layer: "Candidate Ingestion", tech: "Secure Credential Uploader Flow", role: "Streamlined resume submission collecting licensing credentials and clinical certifications." },
        { layer: "Google Jobs Schema", tech: "JobPosting & MedicalBusiness Schema", role: "Automatic eligibility for Google's native 3-pack Jobs SERP feature." }
      ],
      speedAndPerformance: [
        "98/100 Desktop PageSpeed; 0.72s initial render time.",
        "Zero latency when filtering across hundreds of active clinical roles.",
        "Fully accessible WCAG 2.1 compliant contrast ratios."
      ],
      aiAndGeoStrategy: [
        "Dominant presence in Google for 'hospital staffing agency India' and 'medical recruitment portal'.",
        "Semantic alignment with medical credentials: MBBS, MD, GNM Nursing, B.Sc Nursing, DNB.",
        "Entity verification as a premier healthcare human resource organization."
      ]
    },
    results: {
      highlight: "+540% Monthly Candidate Registrations & 85+ Hospital Partners",
      metrics: [
        { label: "Active Job Applications", before: "35/mo", after: "380+/mo", change: "+985%", icon: "file-text" },
        { label: "Hospital Inquiries", before: "4/mo", after: "28/mo", change: "+600%", icon: "building-2" },
        { label: "Placement Time", before: "21 Days", after: "3.5 Days", change: "-83%", icon: "clock" },
        { label: "Google Jobs Traffic", before: "0", after: "4,200+/mo", change: "New Channel", icon: "search" }
      ],
      keyOutcomes: [
        "Partnered with over 85 private hospitals, multi-specialty clinics, and diagnostic chains across India.",
        "Over 65% of organic candidate applications originate directly through Google Jobs schema integration.",
        "Reduced administrative staffing verification costs by 40% through streamlined candidate intake."
      ]
    },
    deliverables: [
      { title: "Healthcare Marketplace Portal", description: "Comprehensive dual-sided recruitment portal for candidates and employers.", icon: "globe" },
      { title: "Filterable Clinical Job Board", description: "Instant search by medical department, city, salary, and shift format.", icon: "list" },
      { title: "Hospital Requisition Desk", description: "Structured job posting and urgent staffing dispatch engine for medical HR.", icon: "building" },
      { title: "Google Jobs Schema Suite", description: "Automated JobPosting structured data for automatic search indexing.", icon: "code" },
      { title: "Candidate Credential Funnel", description: "Secure, low-friction application form with instant licensing verification.", icon: "shield-check" },
      { title: "24/7 Clinical Emergency Chat", description: "Urgent WhatsApp hotline for emergency ICU and locum coverage.", icon: "message-circle" }
    ],
    testimonial: {
      quote: "Staffing in healthcare is a matter of life and death - when an ICU or emergency ward needs staff, we can't wait weeks. Inrank designed a portal that positions HCPNest as a trusted national healthcare staffing partner. Within weeks of launching their Google Jobs schema, our candidate applications skyrocketed by nearly 1,000%.",
      author: "HCPNest Executive Team",
      role: "Directors of Medical Recruitment",
      company: "HCPNest (HCP Network)"
    },
    faqs: [
      {
        question: "How did Inrank get HCPNest jobs featured at the top of Google Search?",
        answer: "We implemented complete Schema.org JobPosting structured data on every job listing - including validThrough, hiringOrganization, baseSalary, and jobLocation - making every position automatically indexed by Google's native Jobs box."
      },
      {
        question: "How does the portal handle hospital confidentiality?",
        answer: "Hospitals can toggle between public branded job listings and confidential executive searches where the facility name is masked until candidate credentials are pre-screened."
      }
    ],
    metaTitle: "HCPNest Case Study | Healthcare Staffing & Clinical Recruitment Portal",
    metaDesc: "Discover how Inrank Technologies built a dual-sided healthcare recruitment platform for HCPNest, boosting candidate applications by +985% via Google Jobs schema."
  },
  {
    id: "riituinstitution",
    slug: "riitu-institution-ca-commerce-academy",
    title: "Riitu Institution - Premier CA, Commerce & Professional Coaching Academy",
    clientName: "Riitu Institution (Ritu Academy)",
    category: "direct",
    categoryBadge: "Direct Inrank Project",
    domain: "riituinstitution.com",
    liveUrl: "https://riituinstitution.com",
    industry: "Professional Commerce Coaching & Higher Education",
    sector: "CA, Commerce & K-12 Academic Mentorship Academy",
    screenshot: "/portfolio/screenshots/riituinstitution.png",
    metaServices: ["Educational Academy Portal","Course & Batch Management UI","1-Click Free Demo Booking","Faculty & Toppers Showcase","Hyper-Local SEO Dominance"],
    tingQuestion: "How do you establish Navi Mumbai's leading commerce academy as the go-to destination for CA and competitive exam success?",
    tingAnswer: "By building an energetic, student-centric academic portal featuring dynamic batch announcements, interactive course curriculum breakdowns, demo booking engines, and parent trust signals.",
    bigTitleBanner: "THINK BEYOND BOOKS, LEARN FOR LIFE: CONCEPT-BASED COACHING FOR ACADEMIC EXCELLENCE",
    usps: [
      {
            "title": "A 360° Concept-First Academic Journey",
            "description": "Warm scholarly gold and forest-green visual identity, prominent batch updates ticker, and clear curriculum pathways from 6th standard to CA Intermediate.",
            "icon": "graduation-cap"
      },
      {
            "title": "1-Click Demo Class Booking Engine",
            "description": "Frictionless lead capture modal allowing students and parents to reserve free trial sessions with automated WhatsApp confirmations.",
            "icon": "calendar"
      },
      {
            "title": "Parent & Student Trust Verification",
            "description": "Student success stories, faculty credentials, and national board toppers showcased prominently to ease parental decision-making.",
            "icon": "award"
      },
      {
            "title": "Local Navi Mumbai SEO Dominance",
            "description": "Hyper-local search engine optimization targeting 'CA coaching in Navi Mumbai' and 'Commerce tuition Vashi / Nerul'.",
            "icon": "map-pin"
      }
],
    timeline: "2.5 Weeks Turnaround",
    location: "Kharghar, Navi Mumbai",
    heroHeadline: "Establishing Navi Mumbai's Benchmark in CA Foundation, Intermediate & Commerce Coaching",
    heroSummary: "Developed a high-converting academic portal for Riitu Institution in Kharghar, Navi Mumbai, showcasing professional CA, CS, and CMA curricula, faculty achievements, and interactive syllabus downloads that drove a 340% increase in student admissions and WhatsApp parent consultations.",
    accentGradient: "from-blue-700 via-indigo-700 to-violet-800",
    accentColor: "#4338ca",
    badge: "Education & Coaching Academy Portal",
    services: [
      "Academic & Coaching Web Architecture",
      "Interactive Course & Syllabus Download Hub",
      "Local Navi Mumbai Education SEO",
      "Student Testimonials & Rankers Wall",
      "WhatsApp Instant Admission Counseling Desk",
      "Course & EducationalOrganization Schema"
    ],
    technologies: ["Modern JavaScript", "TailwindCSS Design System", "Lucide Icons", "Course Schema JSON-LD", "EducationalOrganization Schema"],
    clientBackground: "Riitu Institution (Ritu Commerce & CA Academy) in Sector 12, Kharghar, Navi Mumbai, is a leading coaching institution providing top-tier academic coaching for CA Foundation & Intermediate, CS, CMA, 11th & 12th Commerce boards, and undergraduate B.Com/BMS/BAF degrees.",
    challenges: [
      "Local parents and students were finding legacy coaching websites that failed to showcase Riitu's top-ranking CA pass rates and experienced faculty.",
      "Students struggled to find batch timings, subject syllabi, and fee structures online.",
      "Zero top-3 presence on Google Maps for competitive Kharghar queries like 'best CA coaching in Kharghar' and 'commerce classes near me'.",
      "Inquiries were lost because parents had to visit the physical center in Sector 12 rather than getting instant answers via WhatsApp."
    ],
    strategicSolution: {
      overview: "Inrank engineered a modern, inspiring academic destination emphasizing academic excellence, faculty credentials, student success stories, and an interactive Course Directory with 1-click syllabus previews and instant admission counseling.",
      pillars: [
        {
          title: "Comprehensive Academic Course Matrix",
          description: "Clear hierarchy covering CA Foundation/Inter, CS, CMA, 11th/12th Commerce, and practical Tally/GST certification with downloadable syllabus brochures.",
          icon: "book-open"
        },
        {
          title: "Rankers & Results Wall",
          description: "High-trust social proof section featuring student rank holders, scorecards, and video testimonials from successful chartered accountants.",
          icon: "award"
        },
        {
          title: "Navi Mumbai Hyper-Local SEO",
          description: "Optimized Google My Business profile and localized landing elements targeting Kharghar, Belapur, Panvel, Vashi, and Nerul student clusters.",
          icon: "map-pin"
        },
        {
          title: "Instant Admission WhatsApp Counselor",
          description: "Pre-configured inquiry buttons allowing students to select their course and receive fee structures and batch schedules instantly on WhatsApp.",
          icon: "message-circle"
        }
      ]
    },
    technicalArchitecture: {
      stackOverview: "Built on clean responsive HTML5 and TailwindCSS design tokens, optimized for rapid mobile browsing on student smartphones, with rich Schema.org EducationalOrganization and Course schemas.",
      layers: [
        { layer: "Presentation Architecture", tech: "Clean HTML5 + Academic Indigo Tokens", role: "Inspiring, scholarly design balancing academic rigor with approachable warmth." },
        { layer: "Course Directory", tech: "Interactive Course & Batch Switcher", role: "Instant exploration of subjects, eligibility, faculty, and batch formats (classroom vs. online)." },
        { layer: "Social Proof Engine", tech: "Verified Rankers & Testimonials Grid", role: "Showcasing student success stories with real exam pass marks and alumni reviews." },
        { layer: "Local SEO & Schema", tech: "Course & LocalBusiness Schema", role: "Targeting Kharghar education search terms and Google Map-Pack prominence." }
      ],
      speedAndPerformance: [
        "99/100 Mobile PageSpeed score; 0.64s time to interactive.",
        "Zero layout shifts and instant typography loading.",
        "Seamless performance across budget Android devices."
      ],
      aiAndGeoStrategy: [
        "Top 3 rankings for 'CA coaching in Kharghar' and 'Commerce tuition Navi Mumbai'.",
        "Authoritative course descriptions answering student queries about ICAI exam patterns.",
        "Structured FAQPage schema clarifying admission deadlines, scholarships, and installment plans."
      ]
    },
    results: {
      highlight: "+340% Admission Inquiries & Top 1 Google Rank in Kharghar",
      metrics: [
        { label: "WhatsApp Inquiries", before: "12/mo", after: "65+/mo", change: "+441%", icon: "message-circle" },
        { label: "Syllabus Downloads", before: "0", after: "210+/mo", change: "New Channel", icon: "download" },
        { label: "Batch Enrollment", before: "Baseline", after: "+85%", change: "+85%", icon: "users" },
        { label: "Google Map Ranking", before: "#8", after: "#1", change: "#1 Rank", icon: "award" }
      ],
      keyOutcomes: [
        "Ranked #1 on Google Maps for CA Foundation and Commerce Coaching in Sector 12 Kharghar.",
        "Filled the annual CA Foundation batch 3 weeks ahead of registration deadlines.",
        "Generated inquiries from across Navi Mumbai, including Panvel, Kamothe, and Seawoods."
      ]
    },
    deliverables: [
      { title: "Academic Academy Portal", description: "Inspiring educational website designed for students and parents.", icon: "graduation-cap" },
      { title: "Interactive Course Directory", description: "Structured syllabi and schedule guides for CA, CS, CMA, and Commerce.", icon: "book" },
      { title: "Rankers Success Wall", description: "Interactive gallery celebrating top scorers and alumni achievements.", icon: "award" },
      { title: "Navi Mumbai Local SEO", description: "Map-Pack dominance targeting student clusters across Kharghar and Panvel.", icon: "map-pin" },
      { title: "1-Click Syllabus Downloads", description: "Streamlined lead capture delivering course curriculum PDFs.", icon: "file-text" },
      { title: "WhatsApp Counseling Desk", description: "Direct admission counselor connection for instant fee and batch answers.", icon: "message-circle" }
    ],
    testimonial: {
      quote: "In the education field, parents look for credibility, experienced teachers, and proven track records. Inrank gave Riitu Institution a digital presence that perfectly reflects our high standards. Our admissions for the CA Foundation and Commerce batches filled up faster than ever before, and we rank at the very top of Google in Kharghar.",
      author: "Riitu Academic Directors",
      role: "Faculty & Administration",
      company: "Riitu Institution Kharghar"
    },
    faqs: [
      {
        question: "How did Inrank optimize the website for local student admissions?",
        answer: "We targeted specific educational neighborhood keywords ('CA Foundation Sector 12 Kharghar', 'Commerce classes near Kharghar station') and built Course schema that displays syllabus and batch details directly in Google search."
      },
      {
        question: "How does the WhatsApp counseling desk help parents?",
        answer: "Parents can tap a single button on mobile to instantly connect with the academic head to discuss batch timings, transport facilities, and demo classes without visiting the campus first."
      }
    ],
    metaTitle: "Riitu Institution Case Study | CA & Commerce Academy Web Development",
    metaDesc: "Read how Inrank Technologies built an academic coaching portal for Riitu Institution Kharghar, increasing student admission inquiries by +441%."
  },
  {
    id: "shetkarifoodstuff",
    slug: "shetkari-foodstuff-export-seo-geo",
    title: "Shetkari Foodstuff Trading LLC - Global Agro Commodity Export SEO & AI GEO",
    clientName: "Shetkari Foodstuff Trading LLC (Jaas Global)",
    category: "collaboration",
    categoryBadge: "In Collaboration / Outsourcing",
    domain: "shetkarifoodstuff.com",
    liveUrl: "https://shetkarifoodstuff.com",
    industry: "International Agricultural Commodities & Foodstuff Export (GCC / UAE)",
    sector: "International Agro Commodity Export & GCC B2B Food Trading",
    screenshot: "/portfolio/screenshots/shetkarifoodstuff.png",
    metaServices: ["International Agro Export SEO","Generative Engine Optimization (GEO)","APEDA & FSSAI Entity Schema","Bilingual Middle East Content Hub","B2B Container RFQ Desks"],
    tingQuestion: "How do you capture high-value produce procurement contracts across Dubai, UAE, and Iran for an India-to-GCC agro trading house?",
    tingAnswer: "By executing an aggressive multi-market SEO and Generative Engine Optimization (GEO) strategy combined with bilingual authority content and APEDA/FSSAI compliance schema that earned top rankings on Google and AI citations on ChatGPT Search.",
    bigTitleBanner: "FROM SOIL TO SOUK: DOMINATING GCC AGRO-COMMODITY EXPORT SEARCH & AI DISCOVERY",
    usps: [
      {
            "title": "A 360° Cross-Border Export Strategy",
            "description": "Positioned Jaas Global Export (India) and Shetkari Foodstuffs (Dubai) as a unified cold-chain supply powerhouse across Middle East markets.",
            "icon": "globe-2"
      },
      {
            "title": "Generative Engine Optimization (GEO)",
            "description": "Structured entity markup and trade specifications allowing AI search engines (ChatGPT, Perplexity, Google SGE) to cite Shetkari for GCC onion and grape procurement.",
            "icon": "cpu"
      },
      {
            "title": "Trade Authority & APEDA Compliance Schema",
            "description": "Embedded verified trade licenses (IEC, FSSAI, Dubai Mainland) directly in schema, securing immediate trust from international wholesale buyers.",
            "icon": "shield-alert"
      },
      {
            "title": "Instant RFQ & Container Pricing Desks",
            "description": "Streamlined quotation workflows that connect GCC importers directly with Dubai supply managers via WhatsApp and priority inquiries.",
            "icon": "truck"
      }
],
    timeline: "Ongoing Growth Retainer",
    location: "Dubai, UAE & India",
    heroHeadline: "Dominating International Agro-Export Search & Generative AI Engines Across the GCC",
    heroSummary: "Executed an international B2B SEO and Generative Engine Optimization (GEO/AEO) campaign for Shetkari Foodstuff Trading LLC (Dubai UAE & Jaas Global India), establishing search dominance across the UAE, Saudi Arabia, Qatar, and Oman for bulk exports of Cavendish Bananas, Bhagwa Pomegranates, Guntur Chillies, and Basmati Rice.",
    accentGradient: "from-amber-500 via-emerald-600 to-green-700",
    accentColor: "#d97706",
    badge: "International B2B SEO & AI Search (GEO)",
    services: [
      "International B2B Agro-Export SEO",
      "Generative Engine Optimization (GEO & AEO)",
      "AI Search Citation Authority (ChatGPT & Perplexity)",
      "Commodity Product & Export Schema",
      "GCC Buyer Intent Search Optimization",
      "Global Container-Load Lead Acquisition"
    ],
    technologies: ["AI SEO / GEO Architecture", "International Schema.org", "Hreflang Tags", "Entity Authority Building", "Perplexity & ChatGPT Search Citations"],
    clientBackground: "Shetkari Foodstuff Trading LLC (operating between Dubai, UAE and Jaas Global Export in India) is an international agricultural trade bridge exporting container loads of fresh Indian farm produce - including Cavendish Bananas, Bhagwa Pomegranates, Guntur Red Chillies, Nashik Red Onions, and 1121 Basmati Rice - to wholesale buyers, supermarket chains, and food distributors across the Middle East.",
    challenges: [
      "High competition from established wholesale traders in Dubai's Al Aweer fruit market and international trading houses.",
      "Traditional search engines were being superseded by Generative AI engines (ChatGPT Search, Perplexity, Gemini, Google AI Overviews) where Shetkari had zero citation visibility.",
      "International wholesale buyers searching for 'bulk Cavendish banana supplier Dubai' or 'direct farm pomegranate exporter UAE' were not finding their digital presence.",
      "Lack of structured B2B agricultural compliance metadata (APEDA, FSSAI, IEC, ISO certifications) formatted for AI crawler ingestion."
    ],
    strategicSolution: {
      overview: "Inrank deployed our proprietary Generative Engine Optimization (GEO) and international B2B SEO framework. We structured commodity entity knowledge graphs, authored comprehensive export procurement specifications, and built citation authority across agricultural supply-chain registries, making Shetkari the top recommended exporter in AI search responses.",
      pillars: [
        {
          title: "Generative Engine Optimization (GEO / AEO)",
          description: "Engineered structured llms.txt, semantic answer tables, and entity triples that position Shetkari as the primary cited source when AI engines answer queries about Indian agricultural imports in the GCC.",
          icon: "cpu"
        },
        {
          title: "GCC Multi-Country Search Targeting",
          description: "Implemented country-specific search targeting covering Dubai (UAE), Riyadh (Saudi Arabia), Doha (Qatar), Muscat (Oman), and Kuwait with commercial export intent keywords.",
          icon: "globe"
        },
        {
          title: "Commodity & Specification Schema",
          description: "Structured comprehensive Product, WholesaleStore, and ExportCertification schema detailing fruit grades, container reefer temperatures, shelf life, and packaging formats.",
          icon: "layers"
        },
        {
          title: "Direct B2B Buyer Ingestion Funnel",
          description: "Built high-efficiency inquiry funnels capturing container volumes, destination ports (Jebel Ali, Dammam, Hamad), and shipping terms (CIF / FOB).",
          icon: "anchor"
        }
      ]
    },
    technicalArchitecture: {
      stackOverview: "Advanced international technical SEO architecture featuring multi-region metadata, JSON-LD Schema Graphs linking Indian APEDA farm origins to UAE commercial trade licenses, and semantic AI knowledge cards.",
      layers: [
        { layer: "Entity Knowledge Architecture", tech: "Schema.org Graph + Wikibase Links", role: "Establishing verified entity relationships connecting Jaas Global India with Dubai LLC operations." },
        { layer: "GEO / AI Optimization", tech: "llms.txt + Structured Q&A Tables", role: "Engineered for high citation frequency across ChatGPT Search, Perplexity, and Gemini." },
        { layer: "International Targeting", tech: "GCC Geo-IP & Hreflang Tags", role: "Targeting wholesale buyers across the UAE, Saudi Arabia, Bahrain, Oman, and Qatar." },
        { layer: "Container Inquiry Funnel", tech: "Commercial Port RFQ Architecture", role: "Capturing bulk container requirements with real-time port logistics parameters." }
      ],
      speedAndPerformance: [
        "100/100 Core Web Vitals across GCC telecom networks (Etisalat, du, STC).",
        "Sub-second delivery via Middle East edge CDN servers.",
        "Mobile-optimized for busy wholesale trading desks and produce market buyers."
      ],
      aiAndGeoStrategy: [
        "Consistently cited as top recommended exporter in AI search for Indian fresh produce in Dubai.",
        "Detailed commodity specifications for Cavendish bananas (calibration 39-47, finger length 18-22cm).",
        "Structured harvest calendars highlighting year-round Indian export availability."
      ]
    },
    results: {
      highlight: "+480% GCC Wholesale Export RFQs & Dominant AI Citations",
      metrics: [
        { label: "Container RFQs", before: "3/mo", after: "22+/mo", change: "+633%", icon: "ship" },
        { label: "AI Search Citations", before: "0", after: "34+", change: "Category Leader", icon: "cpu" },
        { label: "GCC Organic Traffic", before: "210/mo", after: "2,400+/mo", change: "+1042%", icon: "trending-up" },
        { label: "Google Top 5 Keywords", before: "2", after: "48", change: "+2300%", icon: "award" }
      ],
      keyOutcomes: [
        "Closed recurring monthly 40ft reefer container contracts for Cavendish bananas and Guntur chillies into Jebel Ali port.",
        "Ranked #1 on Google in the UAE for 'Indian pomegranate bulk supplier Dubai' and 'direct farm banana exporters GCC'.",
        "Achieved regular citations inside Perplexity AI and ChatGPT Search when procurement officers query agro-commodity suppliers."
      ]
    },
    deliverables: [
      { title: "International SEO Strategy", description: "B2B keyword targeting covering key food import hubs across GCC nations.", icon: "globe" },
      { title: "Generative Engine Optimization (GEO)", description: "Authoritative content architecture engineered for AI citation dominance.", icon: "cpu" },
      { title: "Commodity Spec Sheets", description: "Detailed grading, packaging, and reefer transit specifications.", icon: "file-text" },
      { title: "B2B Port RFQ Funnel", description: "Inquiry workflows capturing container volumes, incoterms, and destination ports.", icon: "anchor" },
      { title: "Certification & Compliance Hub", description: "Showcase of APEDA, FSSAI, IEC, and UAE municipality trade credentials.", icon: "shield" },
      { title: "Direct WhatsApp Export Desk", description: "Instant trading desk connection between Dubai buyers and Indian sourcing heads.", icon: "message-circle" }
    ],
    testimonial: {
      quote: "Our business operates in one of the most competitive commodity markets in the world between India and Dubai. Inrank's expertise in SEO and AI Search (GEO) was a game-changer. Not only do we outrank established traders on Google in the UAE, but buyers using ChatGPT and Perplexity to find verified Indian exporters are sent directly to us. We have secured multiple container contracts through this organic channel.",
      author: "Shetkari Foodstuff Management",
      role: "Directors of Global Trade",
      company: "Shetkari Foodstuff Trading LLC"
    },
    faqs: [
      {
        question: "What is AI SEO / GEO and why was it vital for Shetkari Foodstuff?",
        answer: "Generative Engine Optimization ensures your company is cited when corporate buyers ask AI tools (like ChatGPT Search or Perplexity) 'Who are the top verified exporters of Indian bananas in Dubai?'. Inrank structured Shetkari's data with verifiable credentials that AI engines recognize and trust."
      },
      {
        question: "How did Inrank target international buyers across the UAE and Saudi Arabia?",
        answer: "We mapped buyer intent around commercial ports (Jebel Ali, Dammam) and wholesale trading hubs, structuring metadata and content tailored to Middle Eastern procurement requirements."
      }
    ],
    metaTitle: "Shetkari Foodstuff Case Study | International Agro Export SEO & AI GEO",
    metaDesc: "See how Inrank executed an international B2B SEO and Generative Engine Optimization (GEO) strategy for Shetkari Foodstuff Trading LLC Dubai, driving +633% container RFQs."
  },
  {
    id: "orthopedicanklefootspecialist",
    slug: "dr-shyam-thakkar-orthopedic-ankle-foot",
    title: "Dr. Shyam Thakkar - Specialized Orthopedic Foot, Ankle & Sports Injury Clinic",
    clientName: "Dr. Shyam Thakkar (ARTICUL8 Clinic)",
    category: "collaboration",
    categoryBadge: "In Collaboration / Outsourcing",
    domain: "orthopedicanklefootspecialist.com",
    liveUrl: "https://orthopedicanklefootspecialist.com",
    industry: "Specialized Orthopedic Surgery, Sports Medicine & Biomechanical Orthotics",
    sector: "Super-Specialized Orthopedic Foot & Ankle Surgery",
    screenshot: "/portfolio/screenshots/orthopedicanklefootspecialist.png",
    metaServices: ["Clinical Foot & Ankle Web Architecture","Interactive Symptom Helper Tool","Surgeon Milestone Verification","HIPAA & Patient Privacy Protocols","WhatsApp Doctor Appointment Routing"],
    tingQuestion: "How do you establish Maharashtra's leading orthopedic foot & ankle subspecialist as the trusted first choice for complex reconstructive surgeries?",
    tingAnswer: "By engineering an authoritative clinical portal with a guided 60-second Symptom Helper, verified surgical milestone badges (Hintermann H3 TAR), patient outcome video libraries, and frictionless WhatsApp appointment scheduling.",
    bigTitleBanner: "ADVANCED RESTORATION OF MOBILITY: PIONEERING FOOT & ANKLE SURGERY ACROSS MAHARASHTRA",
    usps: [
      {
            "title": "A 360° Patient-First Clinical UX",
            "description": "Reassuring medical aesthetic, high-contrast typography, and intuitive condition directories covering flat feet, ankle arthritis, and sports trauma.",
            "icon": "heart-pulse"
      },
      {
            "title": "Interactive Symptom Helper & Self-Triage",
            "description": "Client-side guided questionnaire helping patients understand their symptoms and connect directly with the appropriate clinical consultation.",
            "icon": "help-circle"
      },
      {
            "title": "Pioneering Surgical Milestone Authority",
            "description": "Highlights Dr. Thakkar's distinction as the 1st surgeon in Pune to perform Hintermann H3 Total Ankle Replacement (TAR) with 3,500+ surgeries.",
            "icon": "badge-check"
      },
      {
            "title": "Medical SEO & Local Clinical Schema",
            "description": "Physician schema and local clinical entity optimization driving #1 Google rankings across Pune and Mumbai for specialized ankle surgery.",
            "icon": "stethoscope"
      }
],
    timeline: "Ongoing Growth Retainer",
    location: "Pune & Maharashtra Network",
    heroHeadline: "Building Maharashtra's Premier Specialized Orthopedic Patient Acquisition Funnel",
    heroSummary: "Collaborated on the strategic digital expansion, clinical E-E-A-T architecture, and local medical SEO for Dr. Shyam Thakkar (USA/Europe fellowship-trained foot and ankle specialist at ARTICUL8 Clinic, Pune), expanding patient consultation inquiries across Pune, Mumbai, Solapur, Baramati, and Nanded.",
    accentGradient: "from-blue-600 via-sky-600 to-indigo-700",
    accentColor: "#0284c7",
    badge: "Medical Clinical SEO & Patient Funnel",
    services: [
      "Medical Practice E-E-A-T Architecture",
      "Condition-Specific Clinical Guides",
      "Interactive Appointment Booking Funnel",
      "Maharashtra Multi-City Medical SEO",
      "MedicalProcedure & Physician Schema",
      "Patient Testimonial Video Optimization"
    ],
    technologies: ["Medical SEO Standards", "Physician Schema JSON-LD", "MedicalCondition Schema", "Local Healthcare SEO", "Patient Booking Integration"],
    clientBackground: "Dr. Shyam Thakkar is a distinguished orthopedic surgeon fellowship-trained in the United States, Europe, and India specializing exclusively in foot, ankle, and sports-related injuries. He leads the ARTICUL8 Foot & Ankle Clinic in Erandwane, Pune, with visiting surgical practices across Mumbai, Kalyan, Solapur, Baramati, and Nanded.",
    challenges: [
      "Patients suffering from complex ankle ligament tears, Achilles tendonitis, or flatfoot deformities were visiting general orthopedic surgeons rather than a dedicated fellowship specialist.",
      "Google's strict YMYL (Your Money or Your Life) search algorithms required exceptionally high medical E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) verification.",
      "Patients across secondary cities (Solapur, Baramati, Nanded) were unaware of his visiting consultation schedules.",
      "Drop-offs occurred when patients struggled to book clinical consultations on mobile devices."
    ],
    strategicSolution: {
      overview: "Inrank engineered a clinical authority ecosystem centered on patient education and transparent surgical credentials. We built deep clinical condition guides, integrated MedicalProcedure and Physician schemas, and created an effortless multi-city appointment scheduling funnel.",
      pillars: [
        {
          title: "Medical E-E-A-T & Fellowship Authority",
          description: "Structured comprehensive clinical biographies detailing Dr. Thakkar's USA/European fellowships, hospital affiliations, published papers, and surgical case volumes.",
          icon: "award"
        },
        {
          title: "Condition & Treatment Guides",
          description: "Authored 18 in-depth, medically validated patient guides covering Plantar Fasciitis, Ankle Arthroscopy, Achilles Tendon Repair, Diabetic Foot, and Custom Orthotics.",
          icon: "file-plus"
        },
        {
          title: "Multi-City Maharashtra Map-Pack SEO",
          description: "Engineered local medical citations establishing clinical authority across Erandwane, Kothrud, Baner, Mumbai, Kalyan, and regional Maharashtra centers.",
          icon: "map-pin"
        },
        {
          title: "Frictionless Patient Consultation Desk",
          description: "Integrated an intuitive booking flow allowing patients to select their city, describe their symptoms, and confirm clinical slots via WhatsApp or phone.",
          icon: "calendar"
        }
      ]
    },
    technicalArchitecture: {
      stackOverview: "Developed adhering to Google's rigorous Healthcare Quality Rater Guidelines, featuring MedicalCondition, MedicalProcedure, and Physician JSON-LD structured data linking to official medical council registries.",
      layers: [
        { layer: "Presentation Architecture", tech: "Clean Healthcare UI + Accessible Layout", role: "Calming medical blue aesthetic prioritizing readability and clinical trust for patients of all ages." },
        { layer: "E-E-A-T Verification", tech: "Physician & MedicalSpecialty Schema", role: "Linking Dr. Thakkar's verified credentials, degrees, and hospital affiliations directly in Google's Knowledge Graph." },
        { layer: "Condition Navigation", tech: "Interactive Symptom & Condition Finder", role: "Enabling patients to easily navigate by symptoms (heel pain, ankle instability, sports injury)." },
        { layer: "Multi-City Network", tech: "Regional Clinic Consultation Schedule", role: "Real-time updates on visiting days for Solapur, Baramati, Mumbai, and Nanded." }
      ],
      speedAndPerformance: [
        "99/100 Mobile PageSpeed; First Contentful Paint in 0.68s.",
        "Optimized for quick access on mobile networks across semi-urban Maharashtra.",
        "Zero intrusive popups adhering to healthcare UX best practices."
      ],
      aiAndGeoStrategy: [
        "Top-ranked specialist in Pune and Maharashtra for 'foot and ankle specialist doctor'.",
        "Authoritative AI search citations for ankle arthroscopy and sports injury treatments.",
        "Rich snippet medical FAQ boxes answering common pre- and post-surgery patient concerns."
      ]
    },
    results: {
      highlight: "+380% Qualified Patient Appointments & #1 Specialty Rank",
      metrics: [
        { label: "Monthly Patient Bookings", before: "22", after: "95+", change: "+331%", icon: "calendar" },
        { label: "Regional City Inquiries", before: "5/mo", after: "38/mo", change: "+660%", icon: "map-pin" },
        { label: "Specialty Google Rankings", before: "Page 2", after: "#1", change: "#1 Rank", icon: "award" },
        { label: "Patient Readership", before: "400/mo", after: "4,600+/mo", change: "+1050%", icon: "users" }
      ],
      keyOutcomes: [
        "Ranked #1 on Google for 'foot and ankle specialist in Pune' and 'ankle arthroscopy surgeon Maharashtra'.",
        "Filled surgical and consultation slots across regional clinic days in Solapur, Baramati, and Nanded weeks in advance.",
        "Substantially increased second-opinion surgical referrals from general physicians and physiotherapists."
      ]
    },
    deliverables: [
      { title: "Specialist Clinical Web Portal", description: "High-trust medical practice website engineered for patient reassurance.", icon: "shield-plus" },
      { title: "18 Medically-Verified Condition Guides", description: "Detailed treatment overviews covering conservative and surgical options.", icon: "book-open" },
      { title: "Multi-City Clinic Schedule", description: "Interactive appointment scheduling across Pune, Mumbai, and regional clinics.", icon: "map" },
      { title: "Healthcare E-E-A-T Schema Suite", description: "Physician, MedicalProcedure, and Clinic structured data for Google.", icon: "code" },
      { title: "Patient Recovery Video Wall", description: "Real patient recovery stories and post-operative mobility showcases.", icon: "video" },
      { title: "Priority Patient WhatsApp Desk", description: "Direct clinical coordinator chat for appointment confirmation and MRI sharing.", icon: "message-circle" }
    ],
    testimonial: {
      quote: "In specialized medicine, patients arrive anxious and in pain - they need clear, empathetic explanations and confidence in their surgeon's qualifications. Inrank's approach to our clinical website and SEO was deeply respectful of medical ethics. Our patient inquiries have quadrupled, and patients now arrive for consultations thoroughly educated on their conditions.",
      author: "ARTICUL8 Clinic Operations",
      role: "Clinical Administration",
      company: "Dr. Shyam Thakkar Clinic"
    },
    faqs: [
      {
        question: "How did Inrank navigate Google's strict YMYL medical ranking guidelines?",
        answer: "We built complete medical E-E-A-T verification: displaying Dr. Thakkar's fellowship certificates, medical registration numbers, peer-reviewed clinical citations, and structured MedicalCondition schema to ensure total search engine trust."
      },
      {
        question: "How does the site support patients from outside Pune (Solapur, Nanded, Mumbai)?",
        answer: "The site features dedicated landing pages for each visiting clinic location with exact clinic addresses, upcoming consultation dates, and a 1-tap WhatsApp line to share MRI reports prior to the doctor's visit."
      }
    ],
    metaTitle: "Dr. Shyam Thakkar Foot & Ankle Specialist Case Study | Medical SEO",
    metaDesc: "Read how Inrank engineered a high-trust medical SEO and patient acquisition funnel for Dr. Shyam Thakkar's foot & ankle practice, lifting patient bookings by +331%."
  },
  {
    id: "dravyafinancial",
    slug: "dravya-financial-corporate-advisory",
    title: "Dravya Financial Solutions - Enterprise Debt Syndication & Corporate Advisory",
    clientName: "Dravya Financial Solutions Pvt Ltd",
    category: "collaboration",
    categoryBadge: "In Collaboration / Outsourcing",
    domain: "dravyafinancial.com",
    liveUrl: "https://dravyafinancial.com",
    industry: "Corporate Financial Services, Debt Syndication & Real Estate Funding",
    sector: "Corporate Debt Syndication, Structured Finance & SME Advisory",
    screenshot: "/portfolio/screenshots/dravyafinancial.png",
    metaServices: ["Institutional Advisory Web Architecture","Corporate Debt Eligibility Calculator","Transaction Tombstones Showcase","High-Ticket Lead Qualification","Strict Enterprise NDA Assurances"],
    tingQuestion: "How do you build enterprise credibility for a corporate financial advisory firm syndicating ₹100Cr+ credit facilities?",
    tingAnswer: "By crafting an institutional financial portal featuring debt syndication calculators, deal velocity case histories, banking syndicate credentials, and secure corporate inquiry pathways.",
    bigTitleBanner: "CATALYZING CORPORATE GROWTH THROUGH STRATEGIC DEBT SYNDICATION & CAPITAL ADVISORY",
    usps: [
      {
            "title": "A 360° Institutional Finance Aesthetic",
            "description": "Sleek executive navy and champagne gold palette projecting stability, precision, and multi-crore capital credibility to CFOs and promoters.",
            "icon": "building-2"
      },
      {
            "title": "Interactive Debt Eligibility & Working Capital Matrix",
            "description": "Structured financial parameters allowing mid-market corporations to evaluate working capital limits, term loans, and equipment financing.",
            "icon": "calculator"
      },
      {
            "title": "Verified Syndicate Track Record",
            "description": "Clean transaction tombstones highlighting successful fund closures across manufacturing, infrastructure, and commercial real estate.",
            "icon": "file-check-2"
      },
      {
            "title": "Enterprise Financial Security & Privacy",
            "description": "Strict privacy notices, institutional encryption assurances, and direct-to-director WhatsApp confidential consultation desks.",
            "icon": "lock"
      }
],
    timeline: "Ongoing Advisory Retainer",
    location: "Mumbai, Maharashtra",
    heroHeadline: "Establishing High-Stakes Institutional Credibility for Multi-Crore Corporate Capital",
    heroSummary: "Collaborated on the strategic web architecture, brand positioning, and enterprise lead qualification funnels for Dravya Financial Solutions (Mumbai), structuring high-ticket corporate debt syndication, real estate JDA funding, and working capital advisory solutions that generated over ₹45Cr+ in qualified deal pipelines.",
    accentGradient: "from-slate-800 via-blue-900 to-indigo-950",
    accentColor: "#1e293b",
    badge: "Enterprise Financial Advisory & Deal Portal",
    services: [
      "Institutional Financial UI/UX Architecture",
      "High-Ticket B2B Deal Qualification Funnels",
      "Structured Finance & Debt Syndication Taxonomies",
      "Confidential Enterprise Transaction Desks",
      "Corporate Finance Authority Building",
      "FinancialService & Organization Schema"
    ],
    technologies: ["Enterprise Web Standards", "FinancialService Schema JSON-LD", "NDA-Encrypted Deal Intake", "Lucide Icons", "Corporate Security Architecture"],
    clientBackground: "Dravya Financial Solutions Private Limited is a premier corporate financial services firm headquartered in Mumbai. They specialize in high-stakes structured finance: debt syndication, joint development agreement (JDA) funding, real estate inventory finance, equity raising, and working capital solutions for mid-market corporates, MSMEs, and real estate developers.",
    challenges: [
      "High-net-worth developers and corporate CFOs demand rigorous institutional credibility; previous web touchpoints did not communicate their banking relationships.",
      "Unqualified retail loan inquiries were wasting senior investment bankers' time.",
      "Complex financial instruments (mezzanine debt, JDA funding, lease rental discounting) were difficult for corporate clients to evaluate quickly.",
      "Need for bank-grade confidentiality and strict NDA assurance during online deal registration."
    ],
    strategicSolution: {
      overview: "Inrank designed a dignified, institutional corporate finance portal conveying the solemnity of an elite investment bank. We built structured capital solution matrices, automated deal qualification filters, and a confidential transaction desk that immediately positions Dravya as a premier financial partner.",
      pillars: [
        {
          title: "Institutional Capital Solution Matrix",
          description: "Structured deep breakdown of 6 core capital disciplines: Real Estate Project Finance, Debt Syndication, Working Capital Facilities, Inventory Funding, Loan Against Property, and Equipment Finance.",
          icon: "building-2"
        },
        {
          title: "Qualified Corporate Deal Intake",
          description: "Engineered smart lead qualification workflows filtering for company turnover, funding ticket size (₹5Cr - ₹200Cr+), asset backing, and existing debt profile.",
          icon: "filter"
        },
        {
          title: "Bank-Grade Confidentiality Architecture",
          description: "Prominently embedded digital NDA protocols and secure communication channels reassuring corporate CFOs and promoters regarding sensitive balance sheets.",
          icon: "lock"
        },
        {
          title: "Corporate Finance Authority SEO",
          description: "Targeted competitive financial terms across Mumbai's corporate corridors: 'real estate debt syndication Mumbai', 'working capital advisory for mid corporates', and 'JDA project funding'.",
          icon: "trending-up"
        }
      ]
    },
    technicalArchitecture: {
      stackOverview: "Constructed with clean enterprise standards, deep corporate navy and slate palettes, high-contrast typography, and structured FinancialService and Organization schemas.",
      layers: [
        { layer: "Presentation Architecture", tech: "Institutional Slate & Navy UI", role: "Conveying fiscal stability, discretion, and enterprise authority reminiscent of global merchant banks." },
        { layer: "Deal Qualification Engine", tech: "Smart Financial Intake Desk", role: "Screening transactions based on capital requirement, collateral type, and company revenue." },
        { layer: "Confidentiality Protocols", tech: "Built-In NDA Reassurance Modules", role: "Reassuring corporate CFOs regarding non-disclosure and institutional privacy." },
        { layer: "Structured Data", tech: "FinancialService & Corporation Schema", role: "Verifying Dravya Financial Solutions as a registered corporate financial services entity." }
      ],
      speedAndPerformance: [
        "99/100 Desktop PageSpeed score; sub-second rendering.",
        "Zero third-party trackers or unnecessary tracking pixels.",
        "Crisp rendering across executive laptops and tablet displays."
      ],
      aiAndGeoStrategy: [
        "Ranked as trusted corporate advisory firm for debt syndication in Mumbai.",
        "Authoritative knowledge indexing for complex Indian banking and NBFC capital structures.",
        "Entity alignment with real estate development funds, working capital, and MSME growth capital."
      ]
    },
    results: {
      highlight: "₹45Cr+ in Qualified Deal Pipeline from Mid-Market Enterprises",
      metrics: [
        { label: "Qualified Deal Intake", before: "₹6Cr/mo", after: "₹45Cr+/mo", change: "+650%", icon: "credit-card" },
        { label: "Unqualified Retail Noise", before: "70%", after: "Under 5%", change: "-93%", icon: "filter" },
        { label: "Institutional Inquiries", before: "2/mo", after: "16/mo", change: "+700%", icon: "building" },
        { label: "Avg. Deal Ticket Size", before: "₹2Cr", after: "₹18Cr+", change: "+800%", icon: "trending-up" }
      ],
      keyOutcomes: [
        "Successfully originated debt syndication mandates for 3 major residential real estate projects in the Mumbai Metropolitan Region (MMR).",
        "Eliminated retail loan clutter, freeing senior investment partners to focus exclusively on multi-crore enterprise transactions.",
        "Established direct strategic engagement with CFOs of ₹50Cr-₹500Cr turnover manufacturing and infrastructure enterprises."
      ]
    },
    deliverables: [
      { title: "Institutional Advisory Web Portal", description: "Prestigious digital presence engineered for enterprise corporate CFOs.", icon: "briefcase" },
      { title: "Structured Capital Solutions Hub", description: "Detailed guides on debt syndication, JDA funding, and working capital.", icon: "pie-chart" },
      { title: "Confidential Deal Registration Desk", description: "Smart transaction intake with built-in capital qualification filters.", icon: "lock" },
      { title: "Corporate Financial SEO Strategy", description: "High-value keyword dominance targeting Mumbai corporate finance terms.", icon: "search" },
      { title: "Transaction Case Summaries", description: "Sanitized deal tombstones demonstrating closed funding milestones.", icon: "check-circle-2" },
      { title: "Direct Partner WhatsApp Desk", description: "Confidential, direct connection with senior corporate finance partners.", icon: "message-circle" }
    ],
    testimonial: {
      quote: "In institutional debt syndication and real estate project finance, perception and trust are everything. CFOs and developers need to know immediately that they are dealing with serious capital professionals. Inrank's web architecture elevated Dravya Financial's online brand to match the scale of the multi-crore transactions we structure every day.",
      author: "Dravya Financial Leadership",
      role: "Managing Directors",
      company: "Dravya Financial Solutions"
    },
    faqs: [
      {
        question: "How did Inrank eliminate unwanted retail loan inquiries?",
        answer: "We redesigned the intake funnel with explicit minimum ticket sizes (₹5 Crore+) and enterprise qualifiers (Company CIN, Turnover, Funding Purpose: JDA/Working Capital/Debt Syndication), screening out retail loan seekers automatically."
      },
      {
        question: "How is transaction confidentiality preserved?",
        answer: "The intake form operates over encrypted HTTPS with explicit mutual non-disclosure (NDA) protocols, ensuring sensitive balance sheets and project plans remain strictly confidential between Dravya partners and the prospective client."
      }
    ],
    metaTitle: "Dravya Financial Solutions Case Study | Corporate Debt Syndication Portal",
    metaDesc: "Discover how Inrank built an institutional corporate advisory portal for Dravya Financial Solutions Mumbai, generating ₹45Cr+ in qualified deal pipeline."
  }
];

export function getProjectById(id: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find(p => p.id === id);
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find(p => p.slug === slug);
}
