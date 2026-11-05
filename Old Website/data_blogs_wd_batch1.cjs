// Helper function to verify no em dashes and no oxford commas
function cleanText(txt) {
  return txt
    .replace(/—|--/g, "-")
    .replace(/,\s+and\b/g, " and");
}

const blogsWebDesignBatch1 = [
  {
    id: "modern-web-development-engineering",
    slug: "modern-web-development-engineering",
    serviceId: "website-development",
    title: "Modern Web Development Engineering: Jamstack Architectures, Core Web Vitals and Custom Code Supremacy",
    category: "Web Development & Website Performance",
    date: "September 2, 2026",
    readingTime: "12 min read",
    image: "/images/service-website-development.jpg",
    focusKeyword: "website development",
    relatedKeywords: [
      "custom web development engineering",
      "Jamstack architecture benefits",
      "Core Web Vitals INP optimization",
      "headless CMS development",
      "bespoke web engineering versus templates",
      "TypeScript React web development"
    ],
    metaTitle: "Modern Web Development Engineering 2026 | Inrank",
    metaDesc: "Discover modern web development engineering in 2026. Master Jamstack architectures, sub-second Core Web Vitals, headless CMS builds and custom code advantages.",
    intro: cleanText(`Website development in 2026 is no longer about assembling off-the-shelf theme templates and gluing together dozens of conflicting third-party plugins. Modern web development is a high-performance software engineering discipline. By developing custom, lightweight codebases using modern frameworks like Vite, React, TypeScript and Tailwind CSS, forward-thinking enterprises achieve sub-second server response times, flawless Core Web Vitals scores and resilient digital storefronts that turn casual visitors into loyal paying customers.`),
    whyMattersHeading: "Why Bloated Off-the-Shelf Templates Fail and Custom Engineering Dominates",
    whyMatters: cleanText(`For over a decade, traditional digital design agencies took the lazy route: purchasing generic forty-dollar WordPress themes loaded with pre-packaged visual builders, unoptimized slider libraries and thousands of lines of redundant CSS code. While these websites may look passable on a desktop screen, their underlying technical foundation is fundamentally broken.

According to official performance benchmarks documented on [web.dev Core Web Vitals](https://web.dev/vitals/), modern search engines directly correlate page rendering speed with mobile search rankings and user engagement. When a mobile customer visits a slow, template-bloated website, every single second of page delay reduces conversion rates by up to 20 percent. Sluggish websites suffer from terrible Time to First Byte (TTFB), high Interaction to Next Paint (INP) latency and unpredictable Cumulative Layout Shifts (CLS) that frustrate visitors and destroy commercial credibility.

Furthermore, search engine crawlers operate under finite crawl budgets. When Googlebot encounters an unoptimized website with gigabytes of unminified JavaScript bundles, it restricts the depth of its crawl, leaving critical commercial pages unindexed for weeks. Server overhead climbs rapidly as bloated themes consume excessive database memory and CPU cycles during traffic spikes, leading to frequent 504 gateway timeout crashes during peak marketing campaigns.

Architectural choices also dictate long-term maintenance costs. Monolithic templates require constant plugin updates, where a routine patch to an obscure third-party widget can unexpectedly break checkout flows, shatter CSS grid layouts and compromise customer checkout security.

Consumer standards have elevated in tandem. Modern buyers expect instantaneous page transitions, smooth micro-interactions and flawless responsive rendering across smartphones, tablets and ultra-wide desktop monitors. A website that lags during navigation signals amateurism and causes immediate brand abandonment.

Investing in bespoke [website development services](#/service/website-development) delivers a decisive competitive advantage. Custom-engineered websites deliver near-perfect 100/100 Google Lighthouse scores, provide military-grade security against common CMS vulnerabilities and establish a durable digital infrastructure capable of scaling effortlessly as your business expands across domestic and global markets. Clean architecture ensures your digital brand asset remains fast, secure and adaptable for years to come.`),
    mistakesHeading: "Catastrophic Web Development Mistakes That Destroy Business Growth",
    mistakes: cleanText(`Thousands of businesses invest substantial capital into website redesigns only to experience collapsed search traffic and stagnant conversion rates due to critical engineering blunders.

The primary error is relying on heavy visual page builders like Elementor, Divi or legacy WPBakery. These visual tools generate deeply nested DOM trees containing tens of thousands of redundant div wrappers, inline styling declarations and uncompressed JavaScript libraries. This code bloat severely degrades mobile CPU execution times, causing mobile devices to freeze during scrolling and triggering poor Core Web Vitals scores.

The second widespread blunder is ignoring image and media asset optimization. Websites frequently load raw 5-megabyte PNG files directly into the browser viewport without modern next-generation compression formats (WebP and AVIF), responsive srcset attributes or explicit width and height dimensions. This causes severe layout shifts and forces mobile visitors on cellular connections to endure multi-second loading delays.

The third critical mistake is neglecting semantic HTML5 hierarchy and structured accessibility standards. Omitting proper heading levels (H1, H2, H3), descriptive ARIA labels and clean landmark elements prevents search engine crawlers from interpreting your page architecture and excludes users with visual impairments.

The fourth major pitfall is deploying unminified JavaScript bundles without code-splitting or tree-shaking. Loading massive monolithic JavaScript bundles on the initial page load monopolizes the browser main thread, causing severe Interaction to Next Paint (INP) delays that penalize mobile search rankings.

Finally, organizations fail to plan for long-term content scalability and API flexibility. Building monolithic web architectures that couple front-end presentation tightly to rigid legacy databases makes future redesigns cost-prohibitive and prevents omnichannel content distribution.`),
    whatToDoHeading: "The 4-Pillar Custom Web Development Engineering Architecture",
    whatToDo: cleanText(`Building a lightning-fast, high-converting digital platform requires a modern software engineering architecture that eliminates technical bloat and prioritizes user experience.

### Pillar 1: Modern Component Architecture and Framework Selection
Construct your digital platform using modern web technologies such as Vite, React, TypeScript and semantic Tailwind CSS. By utilizing component-based architectures, your development team writes clean, modular, reusable code that is strictly typed and easily maintainable. Enforce automated tree-shaking and dead-code elimination to ensure that only the exact JavaScript required for the active viewport is delivered to the client browser.

### Pillar 2: Core Web Vitals Optimization and Edge Asset Delivery
Optimize critical rendering paths to achieve sub-second document delivery. Implement edge caching via global Content Delivery Networks (CDNs) like Cloudflare, ensuring that your Time to First Byte (TTFB) remains under 100 milliseconds worldwide. Convert all visual assets to modern WebP and AVIF formats, implement native lazy-loading for below-the-fold media and inline critical above-the-fold CSS to eliminate render-blocking stylesheet requests.

### Pillar 3: Headless Content Architecture and Decoupled APIs
Decouple your front-end presentation layer from your back-end content management system using modern headless CMS platforms like Sanity, Strapi or decoupled headless WordPress. This architecture provides internal marketing teams with intuitive content publishing dashboards while allowing developers to serve pre-rendered static HTML via Jamstack principles, guaranteeing impenetrable security and instantaneous page loads.

### Pillar 4: Conversion-First Telemetry and Full-Funnel Integration
Integrate comprehensive analytics and conversion tracking directly into the codebase. Configure server-side Google Tag Manager, implement event-driven dataLayers and establish direct webhooks to your enterprise CRM. Ensure every commercial page features sticky mobile calls to action, clear value propositions and frictionless form fields. Explore our specialized [website development services](#/service/website-development) to deploy this state-of-the-art framework.`),
    sections: [
      {
        heading: "Generative AI, Answer Engine Optimization and Machine-Readable Web Code",
        content: cleanText(`As generative artificial intelligence engines like Perplexity, ChatGPT Search, Claude and Google AI Overviews increasingly dominate search discovery, web development must adapt to satisfy machine-reading bots.

Modern AI crawlers prioritize websites that utilize clean semantic HTML5 markup, structured JSON-LD schema graphs and fast DOM trees. When an AI crawler inspects a website, it parses heading structures, table matrices and factual declarations to extract direct answers for conversational search queries.

Websites burdened by convoluted page builder code confuse AI parsers, resulting in zero citations within AI-synthesized answer summaries. By engineering semantic, machine-readable websites adhering to official [W3C Web Standards](https://www.w3.org), your enterprise secures prime real estate across generative answer engines.`)
      },
      {
        heading: "Enterprise Security Architecture and Core Vulnerability Prevention",
        content: cleanText(`Digital security is an essential pillar of modern web engineering. Traditional monolithic CMS platforms with dozens of plugins represent lucrative targets for malicious SQL injection, cross-site scripting (XSS) and brute-force authentication attacks.

Decoupled headless architectures drastically reduce corporate attack surfaces. By serving pre-compiled static HTML assets from distributed edge servers, there is no active database connection or dynamic PHP processing exposed to the public internet. Pairing this decoupled architecture with strict Content Security Policies (CSP), automated SSL certificate renewal and regular dependency audits guarantees enterprise data security.`)
      },
      {
        heading: "8+ Years of Senior Engineering Leadership and White-Label Web Outsourcing",
        content: cleanText(`Inrank Technologies is directed by our Senior Growth Engineering Lead, who brings over 8+ years of hands-on experience in full-stack software development, custom web engineering and technical SEO architecture. Having engineered custom web platforms for mid-market enterprises, B2B SaaS corporations and high-growth retail brands across India, North America and Europe, our technical lead personally oversees all architectural code standards, database designs and performance audits.

Furthermore, Inrank Technologies functions as a trusted white-label web development outsourcing partner for creative design studios, advertising agencies and IT consultancies globally. Under our confidential white-label agreements, partner agencies deliver custom-coded, ultra-fast web platforms under their own brand banner. We operate under strict Non-Disclosure Agreements (NDAs), providing clean codebases, complete Git repository ownership, comprehensive documentation and reliable turnaround times that empower agency partners to scale their web service revenues without expanding internal development headcount.`)
      }
    ],
    checklistHeading: "Actionable Modern Web Development Checklist",
    checklistItems: [
      cleanText("Audit existing website code to eradicate bloated page builders and redundant third-party plugins."),
      cleanText("Achieve sub-second TTFB by deploying edge caching across global Content Delivery Networks."),
      cleanText("Ensure Largest Contentful Paint (LCP) renders under 2.5 seconds on real mobile cellular devices."),
      cleanText("Remediate main-thread blocking scripts to guarantee Interaction to Next Paint (INP) remains below 200ms."),
      cleanText("Convert all photographic assets to modern WebP and AVIF formats with responsive srcset attributes."),
      cleanText("Implement validated JSON-LD schema graphs covering Organization, WebSite and Service entities."),
      cleanText("Decouple front-end presentation from content databases using modern headless CMS architectures."),
      cleanText("Provide full source code repository ownership and comprehensive Git documentation upon deployment.")
    ],
    usefulResources: [
      { name: "web.dev Core Web Vitals Guide", url: "https://web.dev/vitals/" },
      { name: "W3C Web Architecture Standards", url: "https://www.w3.org" },
      { name: "Mozilla Developer Network Web Docs", url: "https://developer.mozilla.org" },
      { name: "Google Search Central Page Experience", url: "https://developers.google.com/search/docs/appearance/page-experience" }
    ],
    faqs: [
      {
        question: "Why is custom web development superior to WordPress page builders?",
        answer: cleanText("Custom web development delivers lightweight, minified code with zero plugin bloat, achieving sub-second load times, 95+ Core Web Vitals scores, enhanced security and complete architectural freedom compared to slow, vulnerable page builders.")
      },
      {
        question: "How long does it take to engineer a bespoke custom website?",
        answer: cleanText("A bespoke custom corporate website typically requires 4 to 8 weeks from initial information architecture and UI design through component engineering, CMS integration, quality assurance testing and final production launch.")
      },
      {
        question: "What is the Jamstack and why does it matter for business performance?",
        answer: cleanText("Jamstack stands for JavaScript, APIs and Markup. By pre-rendering web pages into static HTML and serving them from edge CDNs, Jamstack websites deliver near-instantaneous speed, lower hosting costs and virtually impenetrable security.")
      },
      {
        question: "Can creative agencies outsource web development projects to Inrank Technologies?",
        answer: cleanText("Yes. Inrank Technologies provides confidential white-label web development outsourcing for agencies worldwide. We deliver clean, modern codebases under strict NDAs with 100 percent source code ownership transferred to the partner.")
      },
      {
        question: "How does modern web development improve organic search rankings?",
        answer: cleanText("Fast, custom-coded websites fulfill Google's Core Web Vitals criteria, provide clean semantic HTML for crawl efficiency and reduce bounce rates, directly boosting mobile search rankings and crawl frequency.")
      }
    ],
    ctaText: "Engineer Your High-Performance Website",
    ctaLink: "#/service/website-development"
  },
  {
    id: "custom-website-design-frameworks",
    slug: "custom-website-design-frameworks",
    serviceId: "custom-website-design",
    title: "Custom Website Design for High-Conversion Brands: UI/UX Frameworks and Visual Hierarchy Mastery",
    category: "Web Development & Website Performance",
    date: "September 4, 2026",
    readingTime: "12 min read",
    image: "/images/service-custom-website-design.jpg",
    focusKeyword: "custom website design",
    relatedKeywords: [
      "bespoke UI/UX design frameworks",
      "visual hierarchy web design",
      "conversion-focused website design",
      "Figma design systems for web",
      "responsive mobile-first design",
      "brand credibility web design"
    ],
    metaTitle: "Custom Website Design Frameworks 2026 | Inrank",
    metaDesc: "Discover bespoke custom website design frameworks for 2026. Master UI/UX design systems, visual hierarchy, mobile-first layouts and high-converting aesthetics.",
    intro: cleanText(`Custom website design is the strategic fusion of visual aesthetics, behavioral psychology and intuitive user experience engineering. In an era where online users form an enduring opinion about corporate credibility within 50 milliseconds of landing on a page, generic website templates destroy business value. Modern custom website design creates bespoke digital experiences featuring tailored typography scales, harmonious color theory, intentional visual hierarchy and frictionless conversion journeys that elevate brand authority and drive sustainable revenue.`),
    whyMattersHeading: "Why First Impressions Dictate Commercial Trust and Template Design Fails",
    whyMatters: cleanText(`When a prospective client, high-net-worth customer or enterprise procurement director visits your digital domain, their subconscious mind evaluates your company's operational competence within fractions of a second.

Extensive behavioral research conducted by the [Nielsen Norman Group](https://www.nngroup.com) demonstrates that users make instantaneous snap judgments regarding corporate legitimacy based primarily on visual presentation, layout coherence and typography clarity. Websites built on cheap, overused templates immediately signal a low-effort commodity business, undermining premium pricing power and driving prospective clients directly toward competitors.

Generic templates suffer from rigid visual constraints. They force your unique brand story, complex service offerings and proprietary methodologies into pre-determined geometric boxes that do not fit your commercial goals. The result is visual clutter, awkward spacing, inconsistent typography scales and confusing mobile layouts that induce cognitive friction and paralyze user decision-making.

In stark contrast, bespoke [custom website design](#/service/custom-website-design) begins with your commercial objectives, target audience psychology and brand positioning. Every element (from curated typography pairings and deliberate white space to interactive micro-animations and sticky calls to action) is engineered purposefully to guide user attention through an irresistible narrative arc. Harmonious color palettes selected via the 60-30-10 rule establish visual equilibrium, where 60 percent dominant neutral background, 30 percent secondary structure and 10 percent vibrant accent color draw immediate focus to primary conversion buttons.

Typography acts as the voice of your brand. Using curated, modern typefaces from Google Fonts (such as Inter, Outfit or Plus Jakarta Sans) paired with mathematically calibrated modular type scales ensures effortless legibility across compact smartphone displays and high-resolution Retina screens.

Investing in tailored custom website design transforms your website into an authoritative sales representative that works for your enterprise 24/7. By projecting unshakeable corporate credibility, clarifying your unique value propositions and eliminating mobile usability friction, custom design elevates brand perception and delivers consistently higher conversion rates across every marketing channel.`),
    mistakesHeading: "Costly UI/UX Design Blunders That Repel Qualified Buyers",
    mistakes: cleanText(`The majority of commercial websites fail to achieve their revenue potential because their visual design violates fundamental human cognitive principles and mobile usability standards.

The primary mistake is sacrificing clarity for artistic self-indulgence. Designers frequently incorporate confusing horizontal scroll effects, hidden navigation hamburgers on desktop screens, illegible ultra-thin typography and mysterious floating icons that frustrate users. When visitors must expend mental effort deciphering how to navigate your site or where to click, they experience decision fatigue and leave.

The second widespread blunder is designing strictly for desktop monitors while treating mobile responsiveness as an afterthought. Over 70 percent of initial web discovery occurs on mobile devices. When desktop layouts are carelessly squished onto vertical smartphone viewports without adjusting touch target sizes, typography hierarchy or spacing, mobile visitors struggle to read content or tap buttons, causing massive bounce rates.

The third critical error is establishing a chaotic visual hierarchy with competing focal points. Pages that feature multiple flashing banners, competing high-contrast buttons, auto-playing video carousels and unorganized blocks of text overwhelm the user's visual cortex. Without a singular, obvious visual path guiding the eye toward primary action triggers, visitors feel overwhelmed and abandon the session.

The fourth major pitfall is ignoring accessibility standards and color contrast ratios. Light gray text set against white backgrounds or low-contrast button states violates [W3C Web Accessibility Guidelines](https://www.w3.org) and renders content unreadable for millions of users, exposing organizations to legal liabilities and depressing conversion rates.

Finally, organizations fail to build cohesive design systems. Websites designed without centralized typography tokens, standardized spacing units and reusable UI component libraries look disjointed, presenting conflicting button styles and misaligned layouts across secondary service pages.`),
    whatToDoHeading: "The 4-Phase Bespoke Website Design Engineering Methodology",
    whatToDo: cleanText(`Creating an extraordinary, high-converting custom website demands a disciplined four-phase design process that harmonizes creative artistry with commercial conversion rigor.

### Phase 1: User Persona Research and Information Architecture
Begin by analyzing your target buyer's psychological motivations, primary objections and key decision criteria. Map out intuitive user journeys and construct wireframes that establish a logical content hierarchy. Organize navigation menus so that prospective buyers can locate core service offerings, case studies and pricing inquiries in two clicks or less, eliminating all navigation ambiguity. Conduct qualitative stakeholder interviews to align business goals with customer expectations.

### Phase 2: Design System Engineering in Figma
Construct an enterprise design system inside Figma before writing a single line of code. Define a harmonious typography scale using modern typefaces, an accessible color palette featuring 60-30-10 color harmony rules, standardized 8-point spatial grids and interactive component states (default, hover, active, focused). Build responsive auto-layout components for cards, modals, buttons and input fields to ensure seamless cross-device adaptability.

### Phase 3: Mobile-First Responsive Layout Architecture
Design every view mobile-first, ensuring that content stacks logically, primary value propositions remain visible above the mobile fold and all interactive touch targets measure at least 48x48 pixels. Implement sticky mobile navigation bars, bottom-anchored call-to-action buttons and thumb-friendly checkout paths that streamline user interaction on handheld devices. Test wireframes across multiple viewport widths to prevent unexpected text wrapping.

### Phase 4: Micro-Interactions and Front-End Component Handoff
Enrich the visual experience with subtle micro-interactions, smooth scroll transitions and interactive states that make the interface feel responsive and alive. Provide comprehensive component documentation and design specifications for pixel-perfect front-end implementation. Deliver production-ready SVG icons and optimized assets. Discover how our specialized [custom website design services](#/service/custom-website-design) can elevate your brand authority.`),
    sections: [
      {
        heading: "Brand Storytelling, Color Psychology and Conversion Aesthetics",
        content: cleanText(`Visual design is fundamentally an emotional language. Every color hue, whitespace ratio and typographic weight communicates subtle subconscious cues about your organization's reliability and prestige.

By deploying intentional color psychology, our design team selects palettes that evoke specific commercial emotions. Deep navy blues and slate grays convey institutional stability and corporate security, while vibrant emeralds and indigos stimulate forward-looking innovation and high energy.

Pairing strategic color palettes with genuine client photography, real office environments and transparent team portraits dismantles buyer skepticism. When prospects perceive authentic human beings behind the brand, sales friction dissolves and inquiry rates surge.`)
      },
      {
        heading: "Generative AI, Answer Engine Optimization and Visual Credibility Signals",
        content: cleanText(`Visual design directly impacts search engine optimization and generative AI citation authority. While AI models evaluate text, their algorithms heavily weight user engagement telemetry, including average session duration, bounce rates and return-to-SERP velocity.

Websites engineered with custom, high-credibility UI/UX retain visitors significantly longer. When Google and generative AI engines observe that users spend several minutes exploring your content rather than bouncing back to search results, their algorithms interpret your domain as an authoritative source of truth.

Furthermore, custom design incorporates structured information matrices, step-by-step process diagrams and clear visual breakdowns that generative AI scrapers parse effortlessly, increasing the likelihood that your brand is cited within AI-synthesized answer summaries.`)
      },
      {
        heading: "Design Systems and Component Scalability for Enterprise Platforms",
        content: cleanText(`For growing mid-market enterprises, a website is a living digital platform that continuously expands with new landing pages, product updates and commercial resources.

By establishing a centralized, tokenized design system, your organization ensures effortless scalability. New landing pages can be assembled in hours using pre-approved, accessible UI components that automatically adhere to corporate brand standards. This eliminates visual drift, reduces future design costs and ensures a unified brand presence across all digital touchpoints.`)
      },
      {
        heading: "8+ Years of Senior Engineering Leadership and White-Label Design Outsourcing",
        content: cleanText(`Inrank Technologies is led by our Senior Growth Engineering Lead, who brings over 8+ years of hands-on technical software engineering and UI/UX design architecture experience to every client deployment. Our technical lead oversees all wireframing frameworks, Figma design systems and front-end translation workflows personally, ensuring that aesthetic beauty is always backed by robust engineering and conversion discipline.

Furthermore, Inrank Technologies provides confidential white-label custom website design services for digital marketing agencies, creative studios and consultancies worldwide. We deliver bespoke Figma UI/UX design files, interactive prototypes, design systems and pixel-perfect front-end code under strict Non-Disclosure Agreements (NDAs). Partner agencies expand their creative capabilities and client retention rates by delivering world-class digital design under their own brand banner without maintaining expensive full-time design departments.`)
      }
    ],
    checklistHeading: "Actionable Custom Website Design Checklist",
    checklistItems: [
      cleanText("Conduct user persona interviews to map out high-converting, intuitive navigation journeys."),
      cleanText("Build a centralized Figma design system with defined typography scales, color tokens and spatial grids."),
      cleanText("Design all layouts mobile-first, ensuring all touch targets meet minimum 48x48 pixel standards."),
      cleanText("Verify that color contrast ratios comply with W3C Web Content Accessibility Guidelines (WCAG)."),
      cleanText("Ensure primary value propositions, social proof badges and calls to action sit above the mobile fold."),
      cleanText("Incorporate subtle micro-interactions to make the digital experience feel responsive and engaging."),
      cleanText("Eliminate cognitive clutter by maintaining generous white space and clean visual hierarchy."),
      cleanText("Deliver comprehensive UI documentation and reusable component libraries for seamless development.")
    ],
    usefulResources: [
      { name: "Nielsen Norman Group UX Guidelines", url: "https://www.nngroup.com" },
      { name: "W3C Web Accessibility Guidelines", url: "https://www.w3.org/WAI/" },
      { name: "Figma Design Systems Best Practices", url: "https://www.figma.com/best-practices/" },
      { name: "Smashing Magazine UX Design Patterns", url: "https://www.smashingmagazine.com" }
    ],
    faqs: [
      {
        question: "What is the difference between custom website design and template customization?",
        answer: cleanText("Template customization attempts to modify pre-existing rigid themes, resulting in code bloat and design compromises. Custom website design creates a bespoke user interface from scratch in Figma tailored specifically to your brand identity, user psychology and business objectives.")
      },
      {
        question: "How does bespoke custom design improve website conversion rates?",
        answer: cleanText("Custom design eliminates cognitive friction, establishes immediate brand trust, guides user attention through proven visual hierarchy and provides frictionless mobile navigation, routinely doubling conversion rates compared to generic templates.")
      },
      {
        question: "Do you deliver editable design system files in Figma?",
        answer: cleanText("Yes. Every custom website design engagement includes full delivery of organized, tokenized Figma design system files, component libraries, typography tokens and interactive desktop and mobile prototypes.")
      },
      {
        question: "Can creative agencies outsource custom UI/UX design to Inrank Technologies?",
        answer: cleanText("Yes. Inrank Technologies provides confidential white-label UI/UX design and Figma prototyping services for agencies worldwide under complete non-disclosure agreements with full asset ownership transferred to the partner.")
      },
      {
        question: "How long does a comprehensive custom website design process take?",
        answer: cleanText("A comprehensive custom design process spanning user persona discovery, wireframing, high-fidelity Figma design systems and client revisions typically requires 3 to 6 weeks depending on project scope.")
      }
    ],
    ctaText: "Design Your Bespoke Digital Platform",
    ctaLink: "#/service/custom-website-design"
  }
];

module.exports = { blogsWebDesignBatch1 };
