import "./index.css";
import { SERVICES_DETAILS, ServiceDetail } from "./servicesData.ts";
import { BLOG_POSTS, BlogPost } from "./blogsData.ts";
import { getServiceSidebarData } from "./sidebarConfig.ts";
import { 
  SERVICES_DATA, 
  REASONS_DATA, 
  PROCESS_DATA, 
  INDUSTRIES_DATA, 
  RESULTS_DATA, 
  TESTIMONIALS_DATA, 
  FAQS_DATA 
} from "./types.ts";
import {
  initGlobalScrollProgress,
  initSpotlightCards,
  initAnimatedCounters,
  initRoiForecaster
} from "./uiMagic.ts";

// Global Theme Handler
function initTheme() {
  // Permanently force light mode and remove the dark class
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
}

// Global Nav & Mobile Menu Handler
function initNavigation() {
  const menuToggleBtn = document.getElementById("mobile-menu-toggle") as HTMLButtonElement | null;
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer") as HTMLDivElement | null;
  const menuIconOpen = document.getElementById("menu-icon-open") as HTMLElement | null;
  const menuIconClose = document.getElementById("menu-icon-close") as HTMLElement | null;

  // Header Services Dropdown (Desktop)
  const servicesDropdownTrigger = document.getElementById("services-dropdown-trigger") as HTMLButtonElement | null;
  const servicesDropdownMenu = document.getElementById("services-dropdown-menu") as HTMLDivElement | null;
  const servicesDropdownChevron = document.getElementById("services-dropdown-chevron") as HTMLElement | null;

  // Header Services Dropdown (Mobile)
  const mobileServicesTrigger = document.getElementById("mobile-services-trigger") as HTMLButtonElement | null;
  const mobileServicesSubmenu = document.getElementById("mobile-services-submenu") as HTMLDivElement | null;
  const mobileServicesChevron = document.getElementById("mobile-services-chevron") as HTMLElement | null;

  // Toggle mobile drawer
  if (menuToggleBtn && mobileMenuDrawer) {
    menuToggleBtn.addEventListener("click", () => {
      const isOpen = !mobileMenuDrawer.classList.contains("hidden");
      if (isOpen) {
        mobileMenuDrawer.classList.add("hidden");
        if (menuIconOpen) menuIconOpen.classList.remove("hidden");
        if (menuIconClose) menuIconClose.classList.add("hidden");
      } else {
        mobileMenuDrawer.classList.remove("hidden");
        if (menuIconOpen) menuIconOpen.classList.add("hidden");
        if (menuIconClose) menuIconClose.classList.remove("hidden");
      }
    });

    // Close mobile drawer when clicking quick links
    const mobileLinks = mobileMenuDrawer.querySelectorAll("a");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenuDrawer.classList.add("hidden");
        if (menuIconOpen) menuIconOpen.classList.remove("hidden");
        if (menuIconClose) menuIconClose.classList.add("hidden");
      });
    });
  }

  // Desktop services menu toggle hover/click simulation
  if (servicesDropdownTrigger && servicesDropdownMenu) {
    let focusTimer: any = null;

    const showMenu = () => {
      clearTimeout(focusTimer);
      servicesDropdownMenu.classList.remove("opacity-0", "translate-y-2", "pointer-events-none");
      servicesDropdownMenu.classList.add("opacity-100", "translate-y-0");
      if (servicesDropdownChevron) servicesDropdownChevron.classList.add("rotate-180", "text-primary");
    };

    const hideMenu = () => {
      focusTimer = setTimeout(() => {
        servicesDropdownMenu.classList.add("opacity-0", "translate-y-2", "pointer-events-none");
        servicesDropdownMenu.classList.remove("opacity-100", "translate-y-0");
        if (servicesDropdownChevron) servicesDropdownChevron.classList.remove("rotate-180", "text-primary");
      }, 150);
    };

    servicesDropdownTrigger.parentElement?.addEventListener("mouseenter", showMenu);
    servicesDropdownTrigger.parentElement?.addEventListener("mouseleave", hideMenu);
    servicesDropdownTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isClosed = servicesDropdownMenu.classList.contains("pointer-events-none");
      if (isClosed) showMenu(); else hideMenu();
    });

    // Hide dropdown when clicking any service link inside
    const megaLinks = servicesDropdownMenu.querySelectorAll("a");
    megaLinks.forEach((link) => {
      link.addEventListener("click", () => {
        servicesDropdownMenu.classList.add("opacity-0", "translate-y-2", "pointer-events-none");
        servicesDropdownMenu.classList.remove("opacity-100", "translate-y-0");
        if (servicesDropdownChevron) servicesDropdownChevron.classList.remove("rotate-180", "text-primary");
      });
    });
  }

  // Mobile services menu toggle
  if (mobileServicesTrigger && mobileServicesSubmenu) {
    mobileServicesTrigger.addEventListener("click", () => {
      const isHidden = mobileServicesSubmenu.classList.contains("hidden");
      if (isHidden) {
        mobileServicesSubmenu.classList.remove("hidden");
        if (mobileServicesChevron) mobileServicesChevron.classList.add("rotate-180", "text-primary");
      } else {
        mobileServicesSubmenu.classList.add("hidden");
        if (mobileServicesChevron) mobileServicesChevron.classList.remove("rotate-180", "text-primary");
      }
    });
  }
}

// Expandable FAQs accordions handler
function initFaqs() {
  const faqAccordionItems = document.querySelectorAll(".faq-accordion-item");
  faqAccordionItems.forEach((item) => {
    const trigger = item.querySelector(".faq-accordion-trigger") as HTMLButtonElement | null;
    const body = item.querySelector(".faq-accordion-body") as HTMLDivElement | null;
    const chevron = item.querySelector(".faq-accordion-chevron") as SVGElement | null;

    if (trigger && body) {
      trigger.addEventListener("click", () => {
        const isOpen = !body.classList.contains("max-h-0");
        
        // Close all other FAQs
        faqAccordionItems.forEach((otherItem) => {
          const otherBody = otherItem.querySelector(".faq-accordion-body") as HTMLDivElement | null;
          const otherChevron = otherItem.querySelector(".faq-accordion-chevron") as SVGElement | null;
          if (otherBody) otherBody.classList.add("max-h-0", "opacity-0");
          if (otherChevron) otherChevron.classList.remove("rotate-180", "text-primary");
        });

        // Toggle current
        if (!isOpen) {
          body.classList.remove("max-h-0", "opacity-0");
          body.classList.add("max-h-[300px]", "opacity-100");
          if (chevron) chevron.classList.add("rotate-180", "text-primary");
        }
      });
    }
  });
}

// Standard contact enquiry form handler
function initContactForm() {
  const contactForm = document.getElementById("consultation-form") as HTMLFormElement | null;
  const formBox = document.getElementById("form-fields-container") as HTMLDivElement | null;
  const successBox = document.getElementById("form-success-container") as HTMLDivElement | null;
  const successUserPlaceholder = document.getElementById("success-user-name") as HTMLSpanElement | null;
  const successPhonePlaceholder = document.getElementById("success-user-phone") as HTMLSpanElement | null;
  const successEmailPlaceholder = document.getElementById("success-user-email") as HTMLSpanElement | null;
  const submitAnotherBtn = document.getElementById("submit-another-btn") as HTMLButtonElement | null;

  if (contactForm && formBox && successBox) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = (document.getElementById("form-name") as HTMLInputElement).value.trim();
      const email = (document.getElementById("form-email") as HTMLInputElement).value.trim();
      const phone = (document.getElementById("form-phone") as HTMLInputElement).value.trim();
      const company = (document.getElementById("form-company") as HTMLInputElement).value.trim();
      const service = (document.getElementById("form-service") as HTMLSelectElement).value;
      const budget = (document.getElementById("form-budget") as HTMLSelectElement).value;
      const message = (document.getElementById("form-message") as HTMLTextAreaElement).value.trim();

      // Fire asynchronous transmission to the server log endpoint
      fetch("/api/submit-seo-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          websiteUrl: company || "Direct Lead Inquiry",
          leadName: name,
          leadEmail: email,
          leadPhone: phone,
          leadMessage: `Service Requested: ${service}. Budget Tier: ${budget}. Goals: ${message}`,
          auditReport: "Direct organic form submission to Inrank Team."
        })
      }).catch(err => console.error("Logged submission background issue:", err));

      // Build personalized success fields
      if (successUserPlaceholder) successUserPlaceholder.textContent = name;
      if (successPhonePlaceholder) successPhonePlaceholder.textContent = phone;
      if (successEmailPlaceholder) successEmailPlaceholder.textContent = email;

      // Hide form fields and show the beautiful checked success view
      formBox.classList.add("hidden");
      successBox.classList.remove("hidden");

      // Redirect directly to the mailto trigger
      const subject = encodeURIComponent(`Inrank Growth Inquiry: ${service}`);
      const mailtoBody = encodeURIComponent(
        `Hi Inrank team,\n\n` +
        `Here is a new consultation request:\n` +
        `- Name: ${name}\n` +
        `- Email: ${email}\n` +
        `- Phone: ${phone}\n` +
        `- Company/Website: ${company}\n` +
        `- Service: ${service}\n` +
        `- Budget: ${budget}\n\n` +
        `Goals/Message:\n${message}\n`
      );

      // Trigger mail client after 1.5 seconds so they see the success card state
      setTimeout(() => {
        window.location.href = `mailto:inranktech@gmail.com?subject=${subject}&body=${mailtoBody}`;
      }, 1500);
    });
  }

  if (submitAnotherBtn && contactForm && formBox && successBox) {
    submitAnotherBtn.addEventListener("click", () => {
      contactForm.reset();
      successBox.classList.add("hidden");
      formBox.classList.remove("hidden");
    });
  }
}

// Router Event Listener for Hash & Path Navigation (Single Page Layout Router)
function handleHashRouting() {
  const hash = window.location.hash;
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const mainSections = document.getElementById("main-sections") as HTMLDivElement | null;
  const serviceDetailView = document.getElementById("service-detail-view") as HTMLDivElement | null;
  const allServicesView = document.getElementById("all-services-view") as HTMLDivElement | null;
  const aboutUsView = document.getElementById("about-us-view") as HTMLDivElement | null;
  const blogView = document.getElementById("blog-view") as HTMLDivElement | null;

  if (!mainSections || !serviceDetailView || !aboutUsView || !blogView) return;

  if (path === "/about-us" || hash === "#/about-us" || hash === "#about-us") {
    renderAboutUsView();
    mainSections.classList.add("hidden");
    serviceDetailView.classList.add("hidden");
    if (allServicesView) allServicesView.classList.add("hidden");
    aboutUsView.classList.remove("hidden");
    blogView.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (path === "/blog" || hash === "#/blog" || hash === "#blog") {
    renderBlogHubView();
    mainSections.classList.add("hidden");
    serviceDetailView.classList.add("hidden");
    if (allServicesView) allServicesView.classList.add("hidden");
    aboutUsView.classList.add("hidden");
    blogView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (path.startsWith("/blog/") || hash.startsWith("#/blog/")) {
    const blogSlug = path.startsWith("/blog/") ? path.replace("/blog/", "") : hash.replace("#/blog/", "");
    const foundBlog = BLOG_POSTS.find((b) => b.slug === blogSlug);

    if (foundBlog) {
      renderBlogPostView(foundBlog);
      mainSections.classList.add("hidden");
      serviceDetailView.classList.add("hidden");
      if (allServicesView) allServicesView.classList.add("hidden");
      aboutUsView.classList.add("hidden");
      blogView.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      mainSections.classList.remove("hidden");
      serviceDetailView.classList.add("hidden");
      if (allServicesView) allServicesView.classList.add("hidden");
      aboutUsView.classList.add("hidden");
      blogView.classList.add("hidden");
    }
  } else if (path === "/services" || path === "/services.html" || hash === "#/services") {
    renderAllServicesPage();
    mainSections.classList.add("hidden");
    serviceDetailView.classList.add("hidden");
    aboutUsView.classList.add("hidden");
    blogView.classList.add("hidden");
    if (allServicesView) allServicesView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (hash === "#services") {
    serviceDetailView.classList.add("hidden");
    aboutUsView.classList.add("hidden");
    blogView.classList.add("hidden");
    if (allServicesView) allServicesView.classList.add("hidden");
    mainSections.classList.remove("hidden");
    const servicesEl = document.getElementById("services");
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: "smooth" });
    }
  } else if (
    path.startsWith("/service/") || 
    path.startsWith("/services/") || 
    hash.startsWith("#/service/") || 
    hash.startsWith("#/services/")
  ) {
    let rawServiceId = "";
    if (path.startsWith("/service/")) {
      rawServiceId = path.replace("/service/", "");
    } else if (path.startsWith("/services/")) {
      rawServiceId = path.replace("/services/", "");
    } else if (hash.startsWith("#/service/")) {
      rawServiceId = hash.replace("#/service/", "");
    } else {
      rawServiceId = hash.replace("#/services/", "");
    }
    const cleanId = rawServiceId.split("?")[0].split("#")[0].replace(/\/$/, "").trim();
    const foundService = SERVICES_DETAILS.find((s) => s.id === cleanId || s.slug === cleanId);

    if (foundService) {
      renderServiceDetailView(foundService);
      mainSections.classList.add("hidden");
      serviceDetailView.classList.remove("hidden");
      if (allServicesView) allServicesView.classList.add("hidden");
      aboutUsView.classList.add("hidden");
      blogView.classList.add("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Fallback if parameter is invalid
      mainSections.classList.remove("hidden");
      serviceDetailView.classList.add("hidden");
      if (allServicesView) allServicesView.classList.add("hidden");
      aboutUsView.classList.add("hidden");
      blogView.classList.add("hidden");
    }
  } else {
    // Standard Homepage view
    serviceDetailView.classList.add("hidden");
    if (allServicesView) allServicesView.classList.add("hidden");
    aboutUsView.classList.add("hidden");
    blogView.classList.add("hidden");
    mainSections.classList.remove("hidden");
    document.title = "Inrank Technologies | #1 Digital Marketing & Web Development Services in Pune";
    const metaDescEl = document.querySelector('meta[name="description"]');
    if (metaDescEl) {
      metaDescEl.setAttribute("content", "Inrank Technologies is Pune's premier digital marketing agency & web development company. We deliver SEO services in Pune, website development, PPC, social media and AI SEO.");
    }

    // Scroll directly to target hash tag element if normal anchors are tapped (e.g. #about, #process, #faq)
    if (hash && !hash.startsWith("#/")) {
      if (hash === "#" || hash === "#home" || hash === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (!hash && path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // Refresh dynamic interactive bindings on route change
  setTimeout(() => {
    initSpotlightCards();
    initAnimatedCounters();
    if (typeof (window as any).lucide !== "undefined") {
      (window as any).lucide.createIcons();
    }
  }, 60);
}

// Get category-specific widget HTML based on the service category/id
function getCategoryWidgetHTML(serviceId: string): string {
  if (serviceId === "website-development" || serviceId === "wordpress-development" || serviceId === "shopify-development" || serviceId === "landing-pages") {
    return `
      <!-- Core Web Vitals & Speed Simulator Widget -->
      <div class="border border-border bg-card rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
        <div class="flex items-center gap-2 border-b border-border pb-3">
          <i data-lucide="zap" class="h-4 w-4 text-amber-500 animate-bounce"></i>
          <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-foreground font-sans">Page Speed Simulator</h3>
        </div>
        <p class="text-[11px] text-muted-foreground leading-relaxed font-sans">
          See how optimization choices impact search engine indexability & Core Web Vitals scores.
        </p>

        <div class="space-y-3 pt-1">
          <!-- Platform select -->
          <div>
            <label class="block text-[10px] uppercase tracking-wider font-semibold text-stone-500 mb-1 font-sans">CMS Platform:</label>
            <select id="speed-platform-select" class="w-full bg-background border border-border rounded-lg text-xs p-2 text-foreground focus:border-primary focus:outline-none">
              <option value="wordpress" \${serviceId === 'wordpress-development' ? 'selected' : ''}>WordPress (Heavy Themes)</option>
              <option value="shopify" \${serviceId === 'shopify-development' ? 'selected' : ''}>Shopify Storefront</option>
              <option value="react">Custom React / Next.js</option>
              <option value="static">Static Lightweight HTML</option>
            </select>
          </div>

          <!-- Image & Media option -->
          <div>
            <label class="block text-[10px] uppercase tracking-wider font-semibold text-stone-500 mb-1 font-sans">Image Optimization:</label>
            <select id="speed-images-select" class="w-full bg-background border border-border rounded-lg text-xs p-2 text-foreground focus:border-primary focus:outline-none">
              <option value="unoptimized">Raw PNG/JPEG (Unoptimized)</option>
              <option value="optimized" selected>Modern WebP / AVIF Formats</option>
              <option value="lazy">WebP + Advanced Lazy Loading</option>
            </select>
          </div>

          <!-- Third Party Trackers slider -->
          <div>
            <div class="flex justify-between text-[11px] font-medium mb-1">
              <span class="text-stone-500">Analytics & Marketing Scripts:</span>
              <span id="speed-scripts-val" class="text-foreground font-mono font-bold">4 scripts</span>
            </div>
            <input 
              type="range" 
              id="speed-scripts-slider" 
              min="0" 
              max="20" 
              step="1" 
              value="4" 
              class="w-full accent-primary bg-muted rounded-lg h-1.5 cursor-pointer"
            />
          </div>
        </div>

        <!-- Live Core Web Vitals Report -->
        <div class="pt-3 border-t border-dashed border-border bg-muted/30 p-3 rounded-lg space-y-2 font-sans">
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Mobile Performance Score:</span>
            <span id="speed-score" class="font-mono font-bold px-2 py-0.5 rounded text-amber-500 bg-amber-500/10 border border-amber-500/20">72 / 100</span>
          </div>
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Largest Contentful Paint (LCP):</span>
            <span id="speed-lcp" class="font-mono font-semibold text-stone-400">2.8s</span>
          </div>
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Interaction to Next Paint (INP):</span>
            <span id="speed-inp" class="font-mono font-semibold text-stone-400">180ms</span>
          </div>
          <div class="flex justify-between items-center text-[11px] border-t border-border/60 pt-2 text-emerald-500 font-bold">
            <span>Inrank Optimized Score:</span>
            <span class="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">98 / 100</span>
          </div>
        </div>

        <p id="speed-recommendation" class="text-[10px] text-muted-foreground bg-background p-2.5 rounded-lg border border-border leading-relaxed italic font-sans">
          Optimizing your assets could trim page size by up to 60%.
        </p>
      </div>
    `;
  } else if (serviceId === "google-ads" || serviceId === "meta-ads") {
    return `
      <!-- Ad Budget & ROAS Forecaster Widget -->
      <div class="border border-border bg-card rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
        <div class="flex items-center gap-2 border-b border-border pb-3">
          <i data-lucide="trending-up" class="h-4 w-4 text-emerald-500 animate-pulse"></i>
          <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-foreground font-sans">Ad Spend & ROAS Forecaster</h3>
        </div>
        <p class="text-[11px] text-muted-foreground leading-relaxed font-sans">
          Model target ad efficiency metrics and see how localized target match optimizations scale returns.
        </p>

        <div class="space-y-3 pt-1">
          <!-- Monthly Budget -->
          <div>
            <div class="flex justify-between text-[11px] font-medium mb-1">
              <span class="text-stone-500">Monthly Ad Budget:</span>
              <span id="ad-budget-val" class="text-foreground font-mono font-bold">$2,500</span>
            </div>
            <input 
              type="range" 
              id="ad-budget-slider" 
              min="500" 
              max="50000" 
              step="500" 
              value="2500" 
              class="w-full accent-primary bg-muted rounded-lg h-1.5 cursor-pointer"
            />
          </div>

          <!-- Average CPC -->
          <div>
            <div class="flex justify-between text-[11px] font-medium mb-1">
              <span class="text-stone-500">Estimated CPC:</span>
              <span id="ad-cpc-val" class="text-foreground font-mono font-bold">$1.20</span>
            </div>
            <input 
              type="range" 
              id="ad-cpc-slider" 
              min="0.10" 
              max="10.00" 
              step="0.10" 
              value="1.20" 
              class="w-full accent-primary bg-muted rounded-lg h-1.5 cursor-pointer"
            />
          </div>

          <!-- Conversions -->
          <div>
            <div class="flex justify-between text-[11px] font-medium mb-1">
              <span class="text-stone-500">Lead Conversion Rate:</span>
              <span id="ad-conv-val" class="text-foreground font-mono font-bold">2.0%</span>
            </div>
            <input 
              type="range" 
              id="ad-conv-slider" 
              min="0.5" 
              max="15" 
              step="0.5" 
              value="2.0" 
              class="w-full accent-primary bg-muted rounded-lg h-1.5 cursor-pointer"
            />
          </div>
        </div>

        <!-- ROAS Live Forecast -->
        <div class="pt-3 border-t border-dashed border-border bg-muted/30 p-3 rounded-lg space-y-2 font-sans">
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Estimated Traffic:</span>
            <span id="ad-clicks" class="font-mono font-semibold text-stone-400">2,083 clicks</span>
          </div>
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Monthly Leads/Sales:</span>
            <span id="ad-leads" class="font-mono font-semibold text-stone-400">42 leads</span>
          </div>
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Unoptimized Cost Per Lead:</span>
            <span id="ad-cpl" class="font-mono font-bold text-red-500">$60.00</span>
          </div>
          <div class="flex justify-between items-center text-[11px] border-t border-border/60 pt-2 text-emerald-500 font-bold">
            <span>Inrank Optimized Cost Per Lead:</span>
            <span id="ad-opt-cpl" class="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">$39.00</span>
          </div>
        </div>

        <p class="text-[9px] text-stone-500 text-center italic leading-normal font-sans">
          Optimizations include smart conversion modeling, localized search exclusions and continuous asset A/B tests.
        </p>
      </div>
    `;
  } else if (serviceId === "gmb-optimization") {
    return `
      <!-- Google Maps 3-Pack & Local Visibility Simulator Widget -->
      <div class="border border-border bg-card rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
        <div class="flex items-center gap-2 border-b border-border pb-3">
          <i data-lucide="map-pin" class="h-4 w-4 text-emerald-500 animate-pulse"></i>
          <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-foreground font-sans">GMB 3-Pack & Calls Forecaster</h3>
        </div>
        <p class="text-[11px] text-muted-foreground leading-relaxed font-sans">
          Simulate how review velocity, category alignment and proximity radius expand your Google Maps 3-Pack coverage and customer phone calls.
        </p>

        <div class="space-y-3 pt-1">
          <!-- Monthly New 5-Star Reviews -->
          <div>
            <div class="flex justify-between text-[11px] font-medium mb-1">
              <span class="text-stone-500">Monthly Review Velocity:</span>
              <span id="gmb-reviews-val" class="text-foreground font-mono font-bold">12 reviews/mo</span>
            </div>
            <input 
              type="range" 
              id="gmb-reviews-slider" 
              min="1" 
              max="50" 
              step="1" 
              value="12" 
              class="w-full accent-primary bg-muted rounded-lg h-1.5 cursor-pointer"
            />
          </div>

          <!-- Target Market Proximity Radius -->
          <div>
            <div class="flex justify-between text-[11px] font-medium mb-1">
              <span class="text-stone-500">Google Maps 3-Pack Radius:</span>
              <span id="gmb-radius-val" class="text-foreground font-mono font-bold">8 km</span>
            </div>
            <input 
              type="range" 
              id="gmb-radius-slider" 
              min="2" 
              max="35" 
              step="1" 
              value="8" 
              class="w-full accent-primary bg-muted rounded-lg h-1.5 cursor-pointer"
            />
          </div>

          <!-- Business Category Type -->
          <div>
            <label class="block text-[10px] uppercase tracking-wider font-semibold text-stone-500 mb-1 font-sans">Business Industry Tier:</label>
            <select id="gmb-industry-select" class="w-full bg-background border border-border rounded-lg text-xs p-2 text-foreground focus:border-primary focus:outline-none">
              <option value="healthcare" selected>Healthcare / Dental / Clinics (High Value)</option>
              <option value="home-services">Home Services / Real Estate / Contractors</option>
              <option value="b2b-professional">Legal / Financial / Professional B2B</option>
              <option value="retail-dining">Retail / Restaurant / Hospitality</option>
            </select>
          </div>
        </div>

        <!-- Local Pack Live Metrics -->
        <div class="pt-3 border-t border-dashed border-border bg-muted/30 p-3 rounded-lg space-y-2 font-sans">
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Google Maps Profile Views:</span>
            <span id="gmb-views" class="font-mono font-semibold text-stone-400">14,200 / mo</span>
          </div>
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Direct Inbound Phone Calls:</span>
            <span id="gmb-calls" class="font-mono font-bold text-emerald-400">118 calls / mo</span>
          </div>
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Direction Requests & Clicks:</span>
            <span id="gmb-actions" class="font-mono font-semibold text-stone-400">340 actions / mo</span>
          </div>
          <div class="flex justify-between items-center text-[11px] border-t border-border/60 pt-2 text-primary font-bold">
            <span>Projected Monthly Revenue Pipeline:</span>
            <span id="gmb-pipeline" class="font-mono text-xs px-2 py-0.5 rounded bg-primary/10 border border-primary/20">$17,700 / mo</span>
          </div>
        </div>

        <p id="gmb-recommendation" class="text-[10px] text-muted-foreground bg-background p-2.5 rounded-lg border border-border leading-relaxed italic font-sans">
          Consistent weekly updates and localized geo-tagged images trigger Google algorithm's Prominence & Relevance signals.
        </p>
      </div>
    `;
  } else {
    return `
      <!-- Organic Search & Content Velocity Forecaster Widget -->
      <div class="border border-border bg-card rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
        <div class="flex items-center gap-2 border-b border-border pb-3">
          <i data-lucide="globe" class="h-4 w-4 text-emerald-500 animate-spin"></i>
          <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-foreground font-sans">Organic Traffic Forecaster</h3>
        </div>
        <p class="text-[11px] text-muted-foreground leading-relaxed font-sans">
          Model how keyword mapping, on-page taxonomy rules and programmatic content scale indexing and organic traffic.
        </p>

        <div class="space-y-3 pt-1">
          <!-- Monthly Pages -->
          <div>
            <div class="flex justify-between text-[11px] font-medium mb-1">
              <span class="text-stone-500">Monthly Page Upload Velocity:</span>
              <span id="seo-pages-val" class="text-foreground font-mono font-bold">8 pages</span>
            </div>
            <input 
              type="range" 
              id="seo-pages-slider" 
              min="1" 
              max="50" 
              step="1" 
              value="8" 
              class="w-full accent-primary bg-muted rounded-lg h-1.5 cursor-pointer"
            />
          </div>

          <!-- Current DA -->
          <div>
            <div class="flex justify-between text-[11px] font-medium mb-1">
              <span class="text-stone-500">Domain Authority (DA):</span>
              <span id="seo-da-val" class="text-foreground font-mono font-bold">25</span>
            </div>
            <input 
              type="range" 
              id="seo-da-slider" 
              min="1" 
              max="100" 
              step="1" 
              value="25" 
              class="w-full accent-primary bg-muted rounded-lg h-1.5 cursor-pointer"
            />
          </div>

          <!-- Keyword Intent Focus -->
          <div>
            <label class="block text-[10px] uppercase tracking-wider font-semibold text-stone-500 mb-1 font-sans">Keyword Intent Focus:</label>
            <select id="seo-intent-select" class="w-full bg-background border border-border rounded-lg text-xs p-2 text-foreground focus:border-primary focus:outline-none">
              <option value="commercial" selected>High Commercial Intent (Buyer Terms)</option>
              <option value="informational">Informational / Blog Resource Hubs</option>
              <option value="local">Local Hyper-Targeted (City + Service)</option>
            </select>
          </div>
        </div>

        <!-- SEO Organic Estimations -->
        <div class="pt-3 border-t border-dashed border-border bg-muted/30 p-3 rounded-lg space-y-2 font-sans">
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Estimated Google Indexed URLs:</span>
            <span id="seo-urls" class="font-mono font-semibold text-stone-400">48 URLs</span>
          </div>
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">6-Month Traffic Impressions:</span>
            <span id="seo-impressions" class="font-mono font-semibold text-stone-400">48,000 / mo</span>
          </div>
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-muted-foreground">Projected Organic Traffic:</span>
            <span id="seo-traffic" class="font-mono font-bold text-emerald-500">1,440 clicks / mo</span>
          </div>
          <div class="flex justify-between items-center text-[11px] border-t border-border/60 pt-2 text-primary font-bold">
            <span>Equivalent PPC Value Saved:</span>
            <span id="seo-saved" class="font-mono text-xs px-2 py-0.5 rounded bg-primary/10 border border-primary/20">$2,160 / mo</span>
          </div>
        </div>

        <p class="text-[9px] text-stone-500 text-center italic leading-normal font-sans">
          Using dynamic LocalBusiness JSON-LD nested schemas, correct semantic structure nesting and sub-second rendering.
        </p>
      </div>
    `;
  }
}

// Hydrate category-specific interactive calculators/planners
function hydrateCategorySpecificCalculators(serviceId: string, container: HTMLElement) {
  const isWebDev = serviceId === "website-development" || serviceId === "wordpress-development" || serviceId === "shopify-development" || serviceId === "landing-pages";
  const isAd = serviceId === "google-ads" || serviceId === "meta-ads";
  const isGmb = serviceId === "gmb-optimization";
  const isSeo = serviceId === "seo" || serviceId === "conversion-optimization";

  if (isWebDev) {
    const platformSelect = container.querySelector("#speed-platform-select") as HTMLSelectElement | null;
    const imagesSelect = container.querySelector("#speed-images-select") as HTMLSelectElement | null;
    const scriptsSlider = container.querySelector("#speed-scripts-slider") as HTMLInputElement | null;

    const scriptsVal = container.querySelector("#speed-scripts-val") as HTMLElement | null;
    const speedScore = container.querySelector("#speed-score") as HTMLElement | null;
    const speedLcp = container.querySelector("#speed-lcp") as HTMLElement | null;
    const speedInp = container.querySelector("#speed-inp") as HTMLElement | null;
    const speedRec = container.querySelector("#speed-recommendation") as HTMLElement | null;

    function calculateSpeed() {
      if (!platformSelect || !imagesSelect || !scriptsSlider) return;

      const platform = platformSelect.value;
      const images = imagesSelect.value;
      const scripts = parseInt(scriptsSlider.value);

      if (scriptsVal) scriptsVal.textContent = scripts + " script" + (scripts === 1 ? "" : "s");

      // Base scores
      let baseScore = 95;
      let baseLcp = 1.0; // seconds
      let baseInp = 50;  // milliseconds

      // Platform penalties
      if (platform === "wordpress") {
        baseScore -= 15;
        baseLcp += 1.4;
        baseInp += 120;
      } else if (platform === "shopify") {
        baseScore -= 10;
        baseLcp += 0.9;
        baseInp += 80;
      } else if (platform === "react") {
        baseScore -= 5;
        baseLcp += 0.4;
        baseInp += 30;
      }

      // Images penalties
      if (images === "unoptimized") {
        baseScore -= 20;
        baseLcp += 1.8;
      } else if (images === "optimized") {
        baseScore -= 5;
        baseLcp += 0.3;
      }

      // Scripts penalties
      baseScore -= (scripts * 1.5);
      baseLcp += (scripts * 0.12);
      baseInp += (scripts * 12);

      // Clamping
      const finalScore = Math.max(15, Math.min(99, Math.round(baseScore)));
      const finalLcp = Math.max(0.4, parseFloat(baseLcp.toFixed(1)));
      const finalInp = Math.max(20, Math.round(baseInp));

      if (speedScore) {
        speedScore.textContent = finalScore + " / 100";
        speedScore.className = "font-mono font-bold px-2 py-0.5 rounded " + 
          (finalScore >= 90 ? "text-emerald-500 bg-emerald-500/10 border border-emerald-500/20" : 
           finalScore >= 50 ? "text-amber-500 bg-amber-500/10 border border-amber-500/20" : 
           "text-red-500 bg-red-500/10 border border-red-500/20");
      }

      if (speedLcp) {
        speedLcp.textContent = finalLcp + "s";
        speedLcp.className = "font-mono font-semibold " + 
          (finalLcp <= 2.5 ? "text-emerald-500" : finalLcp <= 4.0 ? "text-amber-500" : "text-red-500");
      }

      if (speedInp) {
        speedInp.textContent = finalInp + "ms";
        speedInp.className = "font-mono font-semibold " + 
          (finalInp <= 200 ? "text-emerald-500" : finalInp <= 500 ? "text-amber-500" : "text-red-500");
      }

      if (speedRec) {
        if (finalScore >= 90) {
          speedRec.textContent = "Excellent build structure! Your pages satisfy all Google Core Web Vitals targets flawlessly.";
        } else if (images === "unoptimized") {
          speedRec.textContent = "Primary impact is image optimization. Converting graphics to modern WebP and preloading above-fold files could improve your LCP immediately.";
        } else if (scripts > 8) {
          speedRec.textContent = "High amount of marketing scripts is delaying execution thread. Consider server-side tracking proxying to pass Interaction to Next Paint.";
        } else {
          speedRec.textContent = "Standard platform overhead detected. Transitioning components to optimized code-split server pathways increases score instantly.";
        }
      }
    }

    if (platformSelect && imagesSelect && scriptsSlider) {
      platformSelect.addEventListener("change", calculateSpeed);
      imagesSelect.addEventListener("change", calculateSpeed);
      scriptsSlider.addEventListener("input", calculateSpeed);
      calculateSpeed();
    }
  }

  if (isAd) {
    const budgetSlider = container.querySelector("#ad-budget-slider") as HTMLInputElement | null;
    const cpcSlider = container.querySelector("#ad-cpc-slider") as HTMLInputElement | null;
    const convSlider = container.querySelector("#ad-conv-slider") as HTMLInputElement | null;

    const budgetVal = container.querySelector("#ad-budget-val") as HTMLElement | null;
    const cpcVal = container.querySelector("#ad-cpc-val") as HTMLElement | null;
    const convVal = container.querySelector("#ad-conv-val") as HTMLElement | null;

    const clicksText = container.querySelector("#ad-clicks") as HTMLElement | null;
    const leadsText = container.querySelector("#ad-leads") as HTMLElement | null;
    const cplText = container.querySelector("#ad-cpl") as HTMLElement | null;
    const optCplText = container.querySelector("#ad-opt-cpl") as HTMLElement | null;

    function calculateAds() {
      if (!budgetSlider || !cpcSlider || !convSlider) return;

      const budget = parseInt(budgetSlider.value);
      const cpc = parseFloat(cpcSlider.value);
      const convRate = parseFloat(convSlider.value);

      if (budgetVal) budgetVal.textContent = "$" + budget.toLocaleString();
      if (cpcVal) cpcVal.textContent = "$" + cpc.toFixed(2);
      if (convVal) convVal.textContent = convRate.toFixed(1) + "%";

      const clicks = Math.round(budget / cpc);
      const leads = Math.round(clicks * (convRate / 100));
      const currentCPL = leads > 0 ? (budget / leads) : budget;
      
      // Inrank optimizations assume 35% lower CPC (via exact negative matches) and 45% better conversion rate (landing optimization)
      const optimizedCPC = cpc * 0.65;
      const optimizedConvRate = convRate * 1.45;
      const optimizedClicks = budget / optimizedCPC;
      const optimizedLeads = optimizedClicks * (optimizedConvRate / 100);
      const optimizedCPL = optimizedLeads > 0 ? (budget / optimizedLeads) : budget * 0.4;

      if (clicksText) clicksText.textContent = clicks.toLocaleString() + " click" + (clicks === 1 ? "" : "s");
      if (leadsText) leadsText.textContent = leads.toLocaleString() + " lead" + (leads === 1 ? "" : "s");
      if (cplText) cplText.textContent = "$" + currentCPL.toFixed(2);
      if (optCplText) optCplText.textContent = "$" + optimizedCPL.toFixed(2);
    }

    if (budgetSlider && cpcSlider && convSlider) {
      budgetSlider.addEventListener("input", calculateAds);
      cpcSlider.addEventListener("input", calculateAds);
      convSlider.addEventListener("input", calculateAds);
      calculateAds();
    }
  }

  if (isSeo) {
    const pagesSlider = container.querySelector("#seo-pages-slider") as HTMLInputElement | null;
    const daSlider = container.querySelector("#seo-da-slider") as HTMLInputElement | null;
    const intentSelect = container.querySelector("#seo-intent-select") as HTMLSelectElement | null;

    const pagesVal = container.querySelector("#seo-pages-val") as HTMLElement | null;
    const daVal = container.querySelector("#seo-da-val") as HTMLElement | null;

    const urlsText = container.querySelector("#seo-urls") as HTMLElement | null;
    const impressionsText = container.querySelector("#seo-impressions") as HTMLElement | null;
    const trafficText = container.querySelector("#seo-traffic") as HTMLElement | null;
    const savedText = container.querySelector("#seo-saved") as HTMLElement | null;

    function calculateSeo() {
      if (!pagesSlider || !daSlider || !intentSelect) return;

      const monthlyPages = parseInt(pagesSlider.value);
      const da = parseInt(daSlider.value);
      const intent = intentSelect.value;

      if (pagesVal) pagesVal.textContent = monthlyPages + " page" + (monthlyPages === 1 ? "" : "s");
      if (daVal) daVal.textContent = da.toString();

      // Calculations for 6 months
      const totalUrls = monthlyPages * 6;
      
      // Base impressions per page increases with DA
      let impressionsFactor = 400; // base impressions per page
      if (da > 60) impressionsFactor = 2500;
      else if (da > 40) impressionsFactor = 1200;
      else if (da > 20) impressionsFactor = 600;

      const totalImpressions = totalUrls * impressionsFactor;

      // CTR depends on intent focus
      let ctr = 0.015; // 1.5% base
      let avgCPC = 1.80; // value per click if bought on PPC
      if (intent === "commercial") {
        ctr = 0.035; // 3.5% CTR for high buyer intent
        avgCPC = 3.50;
      } else if (intent === "local") {
        ctr = 0.05; // 5.0% for local maps / exact matches
        avgCPC = 2.50;
      } else {
        ctr = 0.012; // 1.2% for informational logs
        avgCPC = 0.90;
      }

      const projectedTraffic = Math.round(totalImpressions * ctr);
      const equivalentValue = projectedTraffic * avgCPC;

      if (urlsText) urlsText.textContent = totalUrls + " URLs";
      if (impressionsText) impressionsText.textContent = Math.round(totalImpressions).toLocaleString() + " / mo";
      if (trafficText) trafficText.textContent = projectedTraffic.toLocaleString() + " click" + (projectedTraffic === 1 ? "" : "s") + " / mo";
      if (savedText) savedText.textContent = "$" + Math.round(equivalentValue).toLocaleString() + " / mo";
    }

    if (pagesSlider && daSlider && intentSelect) {
      pagesSlider.addEventListener("input", calculateSeo);
      daSlider.addEventListener("input", calculateSeo);
      intentSelect.addEventListener("change", calculateSeo);
      calculateSeo();
    }
  } else if (isGmb) {
    const reviewsSlider = container.querySelector("#gmb-reviews-slider") as HTMLInputElement | null;
    const radiusSlider = container.querySelector("#gmb-radius-slider") as HTMLInputElement | null;
    const industrySelect = container.querySelector("#gmb-industry-select") as HTMLSelectElement | null;

    const reviewsVal = container.querySelector("#gmb-reviews-val") as HTMLElement | null;
    const radiusVal = container.querySelector("#gmb-radius-val") as HTMLElement | null;

    const viewsText = container.querySelector("#gmb-views") as HTMLElement | null;
    const callsText = container.querySelector("#gmb-calls") as HTMLElement | null;
    const actionsText = container.querySelector("#gmb-actions") as HTMLElement | null;
    const pipelineText = container.querySelector("#gmb-pipeline") as HTMLElement | null;
    const recText = container.querySelector("#gmb-recommendation") as HTMLElement | null;

    function calculateGmb() {
      if (!reviewsSlider || !radiusSlider || !industrySelect) return;

      const monthlyReviews = parseInt(reviewsSlider.value);
      const radiusKm = parseInt(radiusSlider.value);
      const industry = industrySelect.value;

      if (reviewsVal) reviewsVal.textContent = monthlyReviews + " reviews/mo";
      if (radiusVal) radiusVal.textContent = radiusKm + " km";

      let multiplier = 1.0;
      let avgCustomerVal = 350;
      if (industry === "healthcare") {
        multiplier = 1.3;
        avgCustomerVal = 450;
      } else if (industry === "home-services") {
        multiplier = 1.2;
        avgCustomerVal = 600;
      } else if (industry === "b2b-professional") {
        multiplier = 0.9;
        avgCustomerVal = 1200;
      } else {
        multiplier = 1.6;
        avgCustomerVal = 75;
      }

      // Base views driven by coverage radius and review velocity signals
      const baseArea = Math.PI * Math.pow(radiusKm, 1.3);
      const totalViews = Math.round(baseArea * 180 * multiplier + (monthlyReviews * 320));
      
      // Conversion from views to calls & actions
      const callRate = 0.009 * (1 + (monthlyReviews / 60));
      const actionRate = 0.024 * (1 + (monthlyReviews / 70));

      const totalCalls = Math.round(totalViews * callRate);
      const totalActions = Math.round(totalViews * actionRate);

      // Estimated closing rate on inbound high-intent calls (approx 25%)
      const projectedPipeline = Math.round(totalCalls * 0.25 * avgCustomerVal);

      if (viewsText) viewsText.textContent = totalViews.toLocaleString() + " / mo";
      if (callsText) callsText.textContent = totalCalls.toLocaleString() + " calls / mo";
      if (actionsText) actionsText.textContent = totalActions.toLocaleString() + " actions / mo";
      if (pipelineText) pipelineText.textContent = "$" + projectedPipeline.toLocaleString() + " / mo";

      if (recText) {
        if (monthlyReviews >= 20) {
          recText.textContent = "High review velocity accelerates Google Prominence signals, securing your position in the top 3 spots even in dense downtown areas.";
        } else if (radiusKm > 15) {
          recText.textContent = "To defend rankings across a " + radiusKm + " km radius, pair GMB updates with localized city sub-landing pages on your primary website.";
        } else {
          recText.textContent = "Boosting review requests via SMS after job completions could increase inbound call volume by up to 45% within 60 days.";
        }
      }
    }

    if (reviewsSlider && radiusSlider && industrySelect) {
      reviewsSlider.addEventListener("input", calculateGmb);
      radiusSlider.addEventListener("input", calculateGmb);
      industrySelect.addEventListener("change", calculateGmb);
      calculateGmb();
    }
  }
}

interface ServiceCtaConfig {
  tag: string;
  title: string;
  description: string;
  checklist: string[];
  buttonText: string;
}

function getServiceCtaConfig(serviceId: string): ServiceCtaConfig {
  switch (serviceId) {
    case "website-development":
      return {
        tag: "Free Code Audit",
        title: "Get a Free Speed & SEO Code Audit",
        description: "We'll analyze your website's Core Web Vitals, mobile responsiveness and clean up HTML tags for search bots.",
        checklist: [
          "Core Web Vitals Benchmark Test",
          "Mobile Code & Usability Healthcheck",
          "JS Payload & Speed Bottleneck Mapping"
        ],
        buttonText: "Book Free Speed Audit"
      };
    case "landing-pages":
      return {
        tag: "CRO Blueprint",
        title: "Get a Free Landing Page Strategy Session",
        description: "Let's review your target buyer persona, optimize your headline copywriting hierarchy and draft a high-converting wireframe proposal.",
        checklist: [
          "User Friction Factor Inspection",
          "Hero copywriting structure review",
          "Mock High-Converting Wireframe Layout"
        ],
        buttonText: "Analyze My Landing Page"
      };
    case "google-ads":
      return {
        tag: "PPC Audit",
        title: "Get a Google Ads ROI Analysis",
        description: "Our certified PPC experts will review your campaign structures, search term reports and bidding models to identify wasted ad spend.",
        checklist: [
          "Wasted Ad Spend Leak Locator",
          "High-Intent Buyer Keyword Map",
          "Quality Score & CPC Reduction Plan"
        ],
        buttonText: "Request Google Ads Audit"
      };
    case "meta-ads":
      return {
        tag: "Social Ads Audit",
        title: "Get a Meta Ads Funnel Strategy",
        description: "We will check your pixel tracking accuracy, creative fatigue rates and ad copy angles to construct a scalable Facebook & Instagram sales engine.",
        checklist: [
          "Pixel & CAPI Conversions API Check",
          "Creative Fatigue & Visual Ad Hooks Review",
          "Custom & Lookalike Audience Mapping"
        ],
        buttonText: "Audit My Social Ads"
      };
    case "seo":
      return {
        tag: "SEO Roadmap",
        title: "Get a Competitor SEO Traffic Audit",
        description: "Our SEO engineers will evaluate your top 3 competitors, scan keyword search gaps and perform a deep technical crawling audit.",
        checklist: [
          "3-Competitor Traffic Gap Analysis",
          "Technical Indexing & Crawling Scan",
          "Evergreen Topic Cluster Plan"
        ],
        buttonText: "Request SEO Audit"
      };
    case "conversion-optimization":
      return {
        tag: "CRO Audit",
        title: "Get a Conversion Rate Audit",
        description: "We'll inspect your user checkout flows, page scroll maps and checkout abandonment rate to identify drop-off causes.",
        checklist: [
          "Checkout & Forms Abandonment Check",
          "Interactive Heatmap Integration Strategy",
          "Priority 10x ROI A/B Testing Blueprint"
        ],
        buttonText: "Request CRO Audit"
      };
    case "shopify-development":
      return {
        tag: "Shopify Speed Check",
        title: "Get a Shopify Store Speed Audit",
        description: "Let us review your theme code structure, app payloads and heavy scripts to achieve sub-second load speeds.",
        checklist: [
          "Shopify App Load Weight Check",
          "Mobile Cart & Checkout Performance Check",
          "Custom Liquid Code Performance Review"
        ],
        buttonText: "Book Shopify Speed Audit"
      };
    case "wordpress-development":
      return {
        tag: "WordPress Audit",
        title: "WordPress Core Web Vitals Review",
        description: "We will audit your loaded plugins, elementor page-builder bloat and database setup to output a clear path to a 95+ performance score.",
        checklist: [
          "INP & LCP Performance Bottleneck Locator",
          "Active Plugin Conflict & Weight Analysis",
          "95+ Mobile Score Setup Blueprint"
        ],
        buttonText: "Request WordPress Review"
      };
    case "gmb-optimization":
      return {
        tag: "Local Pack Audit",
        title: "Get a Free Google My Business & Maps Audit",
        description: "Our local SEO specialists will audit your GMB profile completeness, proximity ranking grid, local citation NAP consistency and review sentiment.",
        checklist: [
          "Google Maps 3-Pack Proximity Grid Scan",
          "NAP Citation Inconsistency Detector",
          "Review Velocity & Local Pack Ranking Roadmap"
        ],
        buttonText: "Request GMB Local Audit"
      };
    default:
      return {
        tag: "Free Consultation",
        title: "Get a tailored SEO & performance blueprint",
        description: "Our growth engineers will analyze your top 3 competitors, map keyword search gaps and perform a live mobile speed audit of your current store.",
        checklist: [
          "3-Competitor Traffic Gap Analysis",
          "Core Web Vitals & INP Benchmark",
          "Ad Spend & CPL Reduction Model"
        ],
        buttonText: "Request Custom Blueprint"
      };
  }
}

// AI Search & SEO custom icon SVG (matching uploaded browser window + AI microchip design)
const AI_SEARCH_ICON_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="2" y="3" width="20" height="18" rx="2.5" /><line x1="2" y1="8" x2="22" y2="8" /><circle cx="5" cy="5.5" r="0.75" fill="currentColor" stroke="none" /><circle cx="7.5" cy="5.5" r="0.75" fill="currentColor" stroke="none" /><circle cx="10" cy="5.5" r="0.75" fill="currentColor" stroke="none" /><rect x="7.5" y="11" width="9" height="7.5" rx="1.5" /><line x1="10" y1="9.2" x2="10" y2="11" /><line x1="14" y1="9.2" x2="14" y2="11" /><line x1="10" y1="18.5" x2="10" y2="20.3" /><line x1="14" y1="18.5" x2="14" y2="20.3" /><line x1="5.7" y1="13.2" x2="7.5" y2="13.2" /><line x1="5.7" y1="16.2" x2="7.5" y2="16.2" /><line x1="16.5" y1="13.2" x2="18.3" y2="13.2" /><line x1="16.5" y1="16.2" x2="18.3" y2="16.2" /><text x="12" y="16.1" font-size="4.4" font-family="system-ui, -apple-system, sans-serif" font-weight="800" text-anchor="middle" fill="currentColor" stroke="none" letter-spacing="-0.2px">AI</text></svg>`;

// Markdown renderer helper for deep technical service descriptions
function renderMarkdownContent(content: string): string {
  if (!content) return "";
  const lines = content.split("\n");
  const htmlParts: string[] = [];
  let inList = false;

  const flushList = () => {
    if (inList) {
      htmlParts.push("</ul>");
      inList = false;
    }
  };

  const formatInline = (str: string): string => {
    // Bold
    let out = str.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-stone-900 dark:text-stone-100">$1</strong>');
    // Markdown links: [text](url)
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, text, url) => {
      const isInternal = url.startsWith("#") || url.startsWith("/");
      if (isInternal) {
        return `<a href="${url}" class="text-primary underline hover:text-primary/80 transition-colors font-semibold">${text}</a>`;
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:text-primary/80 transition-colors font-semibold">${text}</a>`;
    });
    return out;
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine) {
      flushList();
      continue;
    }

    if (rawLine.startsWith("### ")) {
      flushList();
      const text = formatInline(rawLine.substring(4));
      htmlParts.push(`<h4 class="font-display text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mt-6 mb-2 tracking-tight">${text}</h4>`);
    } else if (rawLine.startsWith("## ")) {
      flushList();
      const text = formatInline(rawLine.substring(3));
      htmlParts.push(`<h3 class="font-display text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 mt-8 mb-3 pt-5 border-t border-border/40 tracking-tight">${text}</h3>`);
    } else if (rawLine.startsWith("> ")) {
      flushList();
      const text = formatInline(rawLine.substring(2));
      htmlParts.push(`<blockquote class="border-l-4 border-emerald-500 bg-emerald-500/5 pl-4 pr-3 py-3 my-4 rounded-r-md text-stone-900 dark:text-stone-100 italic text-sm sm:text-base leading-relaxed font-normal">${text}</blockquote>`);
    } else if (rawLine.startsWith("- ")) {
      if (!inList) {
        htmlParts.push('<ul class="space-y-2.5 my-4">');
        inList = true;
      }
      const text = formatInline(rawLine.substring(2));
      htmlParts.push(`<li class="flex items-start gap-2.5 text-sm sm:text-base text-stone-800 dark:text-stone-200 font-normal"><span class="h-2 w-2 rounded-full bg-emerald-500 shrink-0 mt-2"></span><span>${text}</span></li>`);
    } else {
      flushList();
      const text = formatInline(rawLine);
      htmlParts.push(`<p class="text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed my-3.5 font-normal">${text}</p>`);
    }
  }
  flushList();
  return htmlParts.join("");
}

// Renders the detailed view container inside #service-detail-view dynamically on hash change
function renderServiceDetailView(service: ServiceDetail) {
  const sidebarData = getServiceSidebarData(service.id);
  const relatedCategoryServices = SERVICES_DETAILS.filter(s => s.category === service.category && s.id !== service.id);

  // Update document metadata tags
  document.title = service.metaTitle;
  const metaDescEl = document.querySelector('meta[name="description"]');
  if (metaDescEl) {
    metaDescEl.setAttribute("content", service.metaDesc);
  }

  // Pre-fill selection input in the contact form with service title context
  const selectServiceInput = document.getElementById("form-service") as HTMLSelectElement | null;
  if (selectServiceInput) {
    // Loop options to find matching text
    for (let i = 0; i < selectServiceInput.options.length; i++) {
      if (selectServiceInput.options[i].text.toLowerCase() === service.title.toLowerCase() || 
         (service.id === "seo" && selectServiceInput.options[i].value === "SEO") ||
         (service.id === "website-development" && selectServiceInput.options[i].value === "Website Development") ||
         (service.id === "gmb-optimization" && (selectServiceInput.options[i].value.includes("GMB") || selectServiceInput.options[i].value.includes("Google My Business")))) {
        selectServiceInput.selectedIndex = i;
        break;
      }
    }
  }

  const container = document.getElementById("service-detail-view");
  if (!container) return;

  // Dynamic JSON-LD Schema Injection
  const existingSchema = document.getElementById("dynamic-service-schema");
  if (existingSchema) existingSchema.remove();
  
  const schemaScript = document.createElement("script");
  schemaScript.id = "dynamic-service-schema";
  schemaScript.type = "application/ld+json";
  schemaScript.innerHTML = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": service.metaTitle,
      "description": service.metaDesc,
      "url": window.location.href,
      "breadcrumb": `Home > Services > ${service.title}`
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": service.title,
      "provider": {
        "@type": "Organization",
        "name": "Inrank Technologies"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": window.location.origin + "/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": window.location.href
        }
      ]
    }
  ]);
  document.head.appendChild(schemaScript);

  // Choose display icon name dynamically
  let iconMarkup = "";
  switch (service.id) {
    case "website-development": iconMarkup = `<i data-lucide="code-xml" class="h-3.5 w-3.5 mr-2"></i>`; break;
    case "landing-pages": iconMarkup = `<i data-lucide="layout-template" class="h-3.5 w-3.5 mr-2"></i>`; break;
    case "google-ads": iconMarkup = `<i data-lucide="target" class="h-3.5 w-3.5 mr-2"></i>`; break;
    case "meta-ads": iconMarkup = `<i data-lucide="megaphone" class="h-3.5 w-3.5 mr-2"></i>`; break;
    case "seo": iconMarkup = `<i data-lucide="search" class="h-3.5 w-3.5 mr-2"></i>`; break;
    case "ai-seo-agency":
    case "geo-seo-agency":
    case "ai-ranking-citations":
      iconMarkup = `<span class="inline-block h-3.5 w-3.5 mr-2 text-emerald-500">${AI_SEARCH_ICON_SVG}</span>`;
      break;
    case "conversion-optimization": iconMarkup = `<i data-lucide="mouse-pointer-click" class="h-3.5 w-3.5 mr-2"></i>`; break;
    case "shopify-development": iconMarkup = `<i data-lucide="shopping-bag" class="h-3.5 w-3.5 mr-2"></i>`; break;
    case "wordpress-development": iconMarkup = `<i data-lucide="file-code-2" class="h-3.5 w-3.5 mr-2"></i>`; break;
    case "gmb-optimization": iconMarkup = `<i data-lucide="map-pin" class="h-3.5 w-3.5 mr-2"></i>`; break;
    default: iconMarkup = `<i data-lucide="settings" class="h-3.5 w-3.5 mr-2"></i>`;
  }



  // Dynamic assembly of FAQs list
  let serviceFaqsHTML = "";
  service.faqs.forEach((faq) => {
    serviceFaqsHTML += `
      <div class="service-faq-item border-b border-border group">
        <h3>
          <button
            type="button"
            class="service-faq-trigger flex w-full items-center justify-between text-left font-display text-base sm:text-lg font-semibold py-4 text-foreground hover:text-emerald-600 transition-colors focus:outline-none cursor-pointer"
          >
            <span>${faq.q}</span>
            <i data-lucide="chevron-down" class="service-faq-chevron h-4 w-4 shrink-0 text-muted-foreground group-hover:text-emerald-600 transition-transform duration-300"></i>
          </button>
        </h3>
        <div class="service-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
          <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 pb-4 leading-relaxed font-normal">
            ${faq.a}
          </p>
        </div>
      </div>
    `;
  });

  // Dynamic list of Services offered
  let detailedServicesListHTML = "";
  service.detailedServices.forEach((serv) => {
    detailedServicesListHTML += `
      <li class="flex items-start gap-3">
        <div class="mt-1 h-5 w-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
          <i data-lucide="check" class="h-3 w-3 text-primary"></i>
        </div>
        <div>
          <h4 class="font-display font-semibold text-foreground text-sm sm:text-base">${serv}</h4>
        </div>
      </li>
    `;
  });

  // Dynamic list of Services type
  let serviceTypesChipsHTML = "";
  service.serviceTypes.forEach((st) => {
    serviceTypesChipsHTML += `
      <span class="inline-flex items-center gap-1 border border-border bg-card hover:border-primary/50 hover:bg-muted text-foreground text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded transition-colors select-none font-sans">
        <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
        ${st}
      </span>
    `;
  });

  // Assemble full markup structure
  container.innerHTML = `
    <!-- MAIN DETAIL WRAPPER -->
    <div class="relative pt-24 sm:pt-28 md:pt-36 pb-20 overflow-hidden">
      
      <!-- Breadcrumbs navigation header -->
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8 mb-6 sm:mb-8 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-sans">
        <a href="#" class="hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
          <i data-lucide="home" class="h-3.5 w-3.5"></i> Home
        </a>
        <span class="text-stone-500">/</span>
        <a href="#services" class="hover:text-primary transition-colors cursor-pointer">
          Services
        </a>
        <span class="text-stone-500">/</span>
        <span class="text-primary font-semibold truncate max-w-[200px] sm:max-w-none">${service.title}</span>
      </div>

      <!-- Main Columns Grid layout -->
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8">
        
        <div class="grid lg:grid-cols-12 gap-10">
          
          <!-- Left Column Content -->
          <div class="lg:col-span-9 space-y-10">
            
            <!-- Breadcrumbs / Indicator -->
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center rounded bg-card border border-border px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground font-sans">
                ${iconMarkup}
                Services
              </span>
              <span class="text-stone-600">/</span>
              <span class="text-xs font-semibold uppercase tracking-[0.16em] text-primary font-sans">${service.title}</span>
            </div>

            <!-- Hero Headline -->
            <div class="space-y-4">
              <h1 class="font-display font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-foreground text-balance">
                ${service.heroHeadline}
              </h1>
              <p class="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed text-balance font-normal">
                ${service.shortDesc}
              </p>
            </div>

            <!-- Key visual media image -->
            <div class="relative aspect-[16/9] rounded-xl overflow-hidden border border-border bg-card">
              <img
                src="${service.heroImage}"
                alt="${service.title} banner"
                class="object-cover w-full h-full opacity-90"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/65 to-transparent"></div>
            </div>

            <!-- Deep detail Markdown-style description -->
            <div class="border-t border-border pt-8">
              <h3 class="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Service Scope & Engineering</h3>
              <div class="space-y-1 font-sans max-w-3xl">
                ${renderMarkdownContent(service.longDescMarkdown)}
              </div>
            </div>

            <!-- Supported Service Types section -->
            <div class="border-t border-border pt-8 space-y-4">
              <h3 class="font-display text-lg sm:text-xl font-bold text-foreground">Available Sub-Specialties</h3>
              <div class="flex flex-wrap gap-2">
                ${serviceTypesChipsHTML}
              </div>
            </div>

            ${(() => {
              const relatedBlog = BLOG_POSTS.find(b => b.serviceId === service.id);
              if (!relatedBlog) return "";
              return `
                <!-- Dedicated Research Guide & Deep Technical Report -->
                <div class="border-t border-border pt-8">
                  <div class="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-4">
                    <div class="flex items-center justify-between">
                      <span class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        <i data-lucide="book-open" class="h-4 w-4"></i>
                        Related Technical Engineering Guide
                      </span>
                      <span class="text-xs text-muted-foreground">${relatedBlog.readingTime}</span>
                    </div>
                    <h4 class="font-display text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors">
                      <a href="#/blog/${relatedBlog.slug}">${relatedBlog.title}</a>
                    </h4>
                    <p class="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      ${relatedBlog.intro}
                    </p>
                    <div class="pt-2">
                      <a
                        href="#/blog/${relatedBlog.slug}"
                        class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline"
                      >
                        Read Complete Research Report (1600+ Words)
                        <i data-lucide="arrow-right" class="h-4 w-4"></i>
                      </a>
                    </div>
                  </div>
                </div>
              `;
            })()}

            <!-- Detailed nested list services offered -->
            <div class="border-t border-border pt-8 space-y-6">
              <div class="space-y-2">
                <h3 class="font-display text-xl sm:text-2xl font-bold text-foreground">Detailed Capabilities</h3>
                <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-md">Our continuous engineering deployment workflow spans several concrete functional fields:</p>
              </div>
              <ul class="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                ${detailedServicesListHTML}
              </ul>
            </div>

            <!-- Immediate action conversion footer banner -->
            <div class="p-6 sm:p-8 rounded-xl border border-border bg-card/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div class="space-y-1">
                <h4 class="font-display font-bold text-lg text-foreground">Ready to accelerate growth?</h4>
                <p class="text-stone-600 dark:text-stone-300 text-xs sm:text-sm">Get a free live diagnostic audit of your performance funnels.</p>
              </div>
              <a
                href="#contact"
                class="inline-flex items-center justify-center gap-1.5 px-6 h-11 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg hover:shadow-emerald-600/25 active:scale-[0.98] transition-all duration-200 text-center shrink-0 cursor-pointer"
              >
                Inquire now
                <i data-lucide="arrow-up-right" class="h-4 w-4"></i>
              </a>
            </div>

          </div>

          <!-- Right Column Elements -->
          <div class="lg:col-span-3 space-y-6">
            
            <!-- 1. Live Benchmarks & KPI SLA Card -->
            <div class="border border-border bg-card rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
              <div class="flex items-center justify-between border-b border-border pb-3">
                <div class="flex items-center gap-2">
                  <div class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span class="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground font-sans">Performance SLA</span>
                </div>
                <span class="text-[9px] font-mono px-1.5 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 font-semibold">Live Metric</span>
              </div>
              <div class="space-y-3 font-sans">
                ${sidebarData.benchmarks.map(b => `
                  <div class="p-2.5 rounded-lg bg-muted/40 border border-border/50">
                    <div class="text-lg font-bold font-display text-primary">${b.value}</div>
                    <div class="text-xs font-semibold text-foreground">${b.label}</div>
                    <div class="text-[10px] text-muted-foreground mt-0.5">${b.sub}</div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- 2. Custom Strategy Audit CTA Card -->
            <div class="relative overflow-hidden border border-primary/20 bg-gradient-to-br from-card to-primary/5 rounded-xl p-5 sm:p-6 shadow-md space-y-4 font-sans">
              <div class="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>
              
              <div class="flex items-center gap-2 border-b border-border/80 pb-3">
                <i data-lucide="sparkles" class="h-4 w-4 text-primary animate-pulse"></i>
                <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">Inrank Strategy Audit</h3>
              </div>
              
              <div class="space-y-2">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">${sidebarData.auditCta.tag}</span>
                <h4 class="text-sm font-bold text-foreground">${sidebarData.auditCta.title}</h4>
                <p class="text-[11px] text-muted-foreground leading-relaxed">
                  ${sidebarData.auditCta.description}
                </p>
              </div>

              <div class="space-y-2 pt-1">
                ${sidebarData.auditCta.checklist.map(item => `
                <div class="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-300">
                  <i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5"></i>
                  <span>${item}</span>
                </div>
                `).join("")}
              </div>

              <div class="pt-2">
                <a 
                  href="#contact" 
                  class="flex w-full items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-md hover:shadow-emerald-600/25 active:scale-[0.98] transition-all shadow-sm cursor-pointer text-center"
                >
                  <span>${sidebarData.auditCta.buttonText}</span>
                  <i data-lucide="arrow-right" class="h-3.5 w-3.5"></i>
                </a>
              </div>
            </div>

            <!-- 3. Senior Engineering Experience Card (8+ Years) -->
            <div class="border border-border bg-card rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
              <div class="flex items-center justify-between border-b border-border pb-3">
                <div class="flex items-center gap-2">
                  <i data-lucide="shield-check" class="h-4 w-4 text-primary"></i>
                  <span class="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">Engineering Lead</span>
                </div>
                <span class="text-[9px] font-mono px-1.5 py-0.5 rounded border border-primary/20 bg-primary/10 text-primary font-bold">${sidebarData.experience.years}</span>
              </div>
              <div class="space-y-2.5 font-sans">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                    PM
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-foreground">${sidebarData.experience.name}</h4>
                    <p class="text-[10px] text-muted-foreground uppercase tracking-wider">${sidebarData.experience.role}</p>
                  </div>
                </div>
                <p class="text-[11px] text-muted-foreground leading-relaxed">
                  ${sidebarData.experience.description}
                </p>
                <div class="pt-2 border-t border-border/60 text-[10px] text-muted-foreground flex items-center gap-1.5">
                  <i data-lucide="check-circle" class="h-3.5 w-3.5 text-emerald-500 shrink-0"></i>
                  <span>Direct technical oversight on every sprint. Zero junior handoffs.</span>
                </div>
              </div>
            </div>

            <!-- 4. Confidential White-Label Agency Outsourcing Card -->
            <div class="border border-border bg-gradient-to-br from-card to-muted/30 rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
              <div class="flex items-center justify-between border-b border-border pb-3">
                <div class="flex items-center gap-2">
                  <i data-lucide="briefcase" class="h-4 w-4 text-primary"></i>
                  <span class="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">Agency Outsource</span>
                </div>
                <span class="text-[9px] font-mono px-1.5 py-0.5 rounded border border-border bg-background text-muted-foreground font-semibold">100% NDA</span>
              </div>
              <div class="space-y-2.5 font-sans">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">
                  ${sidebarData.outsourcing.badge}
                </span>
                <h4 class="text-sm font-bold text-foreground">${sidebarData.outsourcing.title}</h4>
                <p class="text-[11px] text-muted-foreground leading-relaxed">
                  ${sidebarData.outsourcing.description}
                </p>
                <div class="pt-2">
                  <a
                    href="#contact"
                    class="flex w-full items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border border-emerald-600 bg-white dark:bg-card text-emerald-600 hover:bg-emerald-600 hover:text-white active:scale-[0.98] transition-all text-center cursor-pointer shadow-xs"
                  >
                    <span>${sidebarData.outsourcing.buttonText}</span>
                    <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- 5. Related Category Capabilities Card -->
            ${relatedCategoryServices.length > 0 ? `
              <div class="border border-border bg-card rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
                <div class="flex items-center gap-2 border-b border-border pb-3">
                  <i data-lucide="layers" class="h-4 w-4 text-primary"></i>
                  <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">Related Category Services</h3>
                </div>
                <div class="space-y-2 font-sans">
                  ${relatedCategoryServices.slice(0, 4).map(rel => `
                    <a
                      href="#/service/${rel.id}"
                      class="flex items-center justify-between p-2.5 rounded-lg border border-border/60 bg-muted/20 hover:bg-muted/60 hover:border-primary/40 transition-colors group"
                    >
                      <div class="space-y-0.5 pr-2">
                        <div class="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">${rel.title}</div>
                        <div class="text-[10px] text-muted-foreground line-clamp-1">${rel.shortDesc}</div>
                      </div>
                      <i data-lucide="chevron-right" class="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0"></i>
                    </a>
                  `).join("")}
                </div>
              </div>
            ` : ""}

          </div>

        </div>

        <!-- Custom expert FAQs list -->
        <section id="service-faqs" class="mt-20 border-t border-border pt-16">
          <div class="max-w-3xl mx-auto">
            
            <div class="text-center space-y-3.5 mb-10">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-xs">
                <i data-lucide="help-circle" class="h-3.5 w-3.5"></i>
                <span>Frequently Asked Questions</span>
              </div>
              <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-sans">
                Frequently Asked Questions About ${service.title}
              </h2>
              <p class="text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-xl mx-auto font-sans leading-relaxed">
                Everything you need to know about Inrank's ${service.title} deliverables, timelines, execution workflows and technical guarantees.
              </p>
            </div>

            <div class="space-y-3">
              ${serviceFaqsHTML}
            </div>

          </div>
        </section>

      </div>
    </div>
  `;

  // Hydrate Lucide icons on newly injected elements immediately!
  if (typeof (window as any).lucide !== "undefined") {
    (window as any).lucide.createIcons();
  }

  // Hydrate the service FAQs accordion triggers
  const sFaqItems = container.querySelectorAll(".service-faq-item");
  sFaqItems.forEach((item) => {
    const trigger = item.querySelector(".service-faq-trigger") as HTMLButtonElement | null;
    const body = item.querySelector(".service-faq-body") as HTMLDivElement | null;
    const chevronIcon = item.querySelector(".service-faq-chevron") as SVGElement | null;

    if (trigger && body) {
      trigger.addEventListener("click", () => {
        const isOpen = !body.classList.contains("max-h-0");

        // Close all other service FAQs
        sFaqItems.forEach((other) => {
          const oBody = other.querySelector(".service-faq-body") as HTMLDivElement | null;
          const oChevron = other.querySelector(".service-faq-chevron") as SVGElement | null;
          if (oBody) {
            oBody.classList.remove("max-h-[300px]", "opacity-100");
            oBody.classList.add("max-h-0", "opacity-0");
          }
          if (oChevron) oChevron.classList.remove("rotate-180", "text-primary");
        });

        // Toggle focus
        if (!isOpen) {
          body.classList.remove("max-h-0", "opacity-0");
          body.classList.add("max-h-[300px]", "opacity-100");
          if (chevronIcon) chevronIcon.classList.add("rotate-180", "text-primary");
        }
      });
    }
  });

  // Hydrate category-specific calculator
  hydrateCategorySpecificCalculators(service.id, container);
}

// Renders the dedicated About Us page inside #about-us-view target dynamically
function renderAboutUsView() {
  // Update document metadata tags
  document.title = "About Inrank Technologies | Web, SEO & Growth Team";
  const metaDescEl = document.querySelector('meta[name="description"]');
  if (metaDescEl) {
    metaDescEl.setAttribute("content", "Learn about Inrank Technologies, a Pune-based digital growth team helping businesses worldwide with websites, SEO, paid ads, Shopify, WordPress and CRO.");
  }

  const container = document.getElementById("about-us-view");
  if (!container) return;

  // Dynamic JSON-LD Schema Injection for Entity building
  const existingSchema = document.getElementById("dynamic-about-schema");
  if (existingSchema) existingSchema.remove();

  const schemaScript = document.createElement("script");
  schemaScript.id = "dynamic-about-schema";
  schemaScript.type = "application/ld+json";
  
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://inranktech.com/#organization",
        "name": "Inrank Technologies",
        "url": "https://inranktech.com/",
        "logo": "/logo.png",
        "sameAs": [
          "https://www.instagram.com/inranktech",
          "https://www.linkedin.com/company/inranktech"
        ],
        "areaServed": ["Pune", "India", "Worldwide"],
        "description": "Inrank Technologies is a performance-focused digital growth team that helps businesses grow through websites, SEO, ads and conversion optimization."
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://inranktech.com/#localbusiness",
        "name": "Inrank Technologies",
        "url": "https://inranktech.com/",
        "telephone": "+917038612280",
        "email": "hello@inranktech.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "areaServed": ["Pune", "India", "Worldwide"]
      },
      {
        "@type": "WebSite",
        "@id": "https://inranktech.com/#website",
        "url": "https://inranktech.com/",
        "name": "Inrank Technologies",
        "publisher": {
          "@id": "https://inranktech.com/#organization"
        }
      },
      {
        "@type": "AboutPage",
        "@id": "https://inranktech.com/about-us/#webpage",
        "url": "https://inranktech.com/#/about-us",
        "name": "About Inrank Technologies",
        "description": "Learn about Inrank Technologies, a Pune-based digital growth team helping businesses worldwide with websites, SEO, paid ads, Shopify, WordPress and CRO.",
        "isPartOf": {
          "@id": "https://inranktech.com/#website"
        },
        "about": {
          "@id": "https://inranktech.com/#organization"
        },
        "mainEntity": {
          "@id": "https://inranktech.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://inranktech.com/about-us/#breadcrumb"
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://inranktech.com/about-us/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://inranktech.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://inranktech.com/#/about-us"
          }
        ]
      }
    ]
  };

  schemaScript.innerHTML = JSON.stringify(schemaGraph);
  document.head.appendChild(schemaScript);

  // Assemble full About Us markup structure
  container.innerHTML = `
    <div class="relative pt-24 sm:pt-28 md:pt-36 pb-20 overflow-hidden">
      <!-- Background Visual Grid/Gradients -->
      <div class="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none" style="background-image: radial-gradient(circle, var(--color-border) 1.2px, transparent 1.2px); background-size: 24px 24px;"></div>
      <div class="absolute top-1/4 -left-32 w-[450px] h-[450px] rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <!-- Breadcrumbs navigation header -->
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8 mb-6 sm:mb-8">
        <div class="flex items-center gap-2">
          <a href="#" class="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Home</a>
          <span class="text-stone-500">/</span>
          <span class="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-primary">About Us</span>
        </div>
      </div>

      <!-- Hero Header Section -->
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8 mb-16 sm:mb-24">
        <div class="grid lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7 space-y-6">
            <span class="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
              <i data-lucide="info" class="h-3.5 w-3.5 text-primary"></i>
              Entity Profile
            </span>
            <h1 class="font-display font-bold text-4xl sm:text-6xl tracking-tight text-foreground leading-[1.05]">
              About Inrank Technologies
            </h1>
            <p class="text-muted-foreground text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
              Inrank Technologies is a performance-focused digital growth team that helps businesses grow through websites, SEO, ads and conversion optimization.
            </p>
            <div class="pt-2 flex flex-wrap gap-4">
              <a href="#contact" class="inline-flex items-center justify-center gap-1.5 px-6 h-11 text-sm font-semibold rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/95 transition-all cursor-pointer">
                Book a Strategy Call
                <i data-lucide="arrow-right" class="h-4 w-4"></i>
              </a>
              <a href="#/service/seo" class="inline-flex items-center justify-center gap-1.5 px-6 h-11 text-sm font-semibold rounded-md border border-border bg-white dark:bg-card hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-foreground transition-all cursor-pointer">
                Our Services
              </a>
            </div>
          </div>
          
          <!-- Quick Entity Snapshot Panel Card -->
          <div class="lg:col-span-5">
            <div class="border border-border bg-card rounded-xl p-6 sm:p-8 shadow-sm space-y-5">
              <h3 class="font-display font-bold text-lg text-foreground border-b border-border pb-3">
                Inrank Entity Snapshot
              </h3>
              <div class="space-y-4 font-sans text-sm">
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 text-primary"><i data-lucide="map-pin" class="h-4.5 w-4.5"></i></div>
                  <div>
                    <span class="font-bold text-foreground block">Location</span>
                    <span class="text-muted-foreground">Pune, Maharashtra, India</span>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 text-primary"><i data-lucide="users-2" class="h-4.5 w-4.5"></i></div>
                  <div>
                    <span class="font-bold text-foreground block">Team Model</span>
                    <span class="text-muted-foreground">Lean, Expert-led Senior Growth Partners</span>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 text-primary"><i data-lucide="globe" class="h-4.5 w-4.5"></i></div>
                  <div>
                    <span class="font-bold text-foreground block">Target Clients</span>
                    <span class="text-muted-foreground">Local Pune relevance & Worldwide buyer intent (US, UK, AU)</span>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 text-primary"><i data-lucide="mail" class="h-4.5 w-4.5"></i></div>
                  <div>
                    <span class="font-bold text-foreground block">Direct Contact</span>
                    <a href="mailto:hello@inranktech.com" class="text-primary hover:underline">hello@inranktech.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Who We Are Section -->
      <section class="max-w-7xl mx-auto px-5 sm:px-8 mb-20 sm:mb-28 border-t border-border pt-16">
        <div class="grid lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-5 space-y-3">
            <span class="text-xs uppercase tracking-[0.22em] font-semibold text-primary">[01] : Who We Are</span>
            <h2 class="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground font-sans">
              A Growth Partner, Not Another Agency
            </h2>
          </div>
          <div class="lg:col-span-7 space-y-4 font-sans text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              Inrank Technologies is built for businesses that need more than just a website or vanity impressions. We believe every line of code, every marketing rupee and every layout revision should be mapped back to business metrics you actually care about: qualified organic leads, high-intent traffic and verifiable sales revenue.
            </p>
            <p>
              Operating directly from Pune, Maharashtra, we work like an embedded senior growth engineering partner rather than a bloated, volume-first agency. Instead of junior account handlers or communication bottlenecks, you collaborate directly with senior builders and SEO engineers who own the strategy and execution from day one.
            </p>
          </div>
        </div>

        <!-- Pune Operations & Growth War Room Showcase -->
        <div class="mt-12 grid sm:grid-cols-3 gap-6">
          <div class="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:border-primary/40 transition-all">
            <div class="aspect-[4/3] overflow-hidden bg-muted">
              <img src="/images/team-warroom.jpg" alt="Inrank Technologies Growth Strategy War Room" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-4 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-primary">Strategic Execution</span>
              <h4 class="font-display font-bold text-sm text-foreground">Pune Strategy War Room</h4>
              <p class="text-xs text-muted-foreground leading-normal">Weekly keyword gap audits, competitor footprint analysis and sprint roadmaps.</p>
            </div>
          </div>

          <div class="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:border-primary/40 transition-all">
            <div class="aspect-[4/3] overflow-hidden bg-muted">
              <img src="/images/pune-tech-hub.jpg" alt="Inrank Technologies Pune Engineering & AI Search Lab" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-4 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-primary">Engineering Center</span>
              <h4 class="font-display font-bold text-sm text-foreground">Pune AI Search Lab</h4>
              <p class="text-xs text-muted-foreground leading-normal">Engineering sub-second Core Web Vitals, GEO/AEO prompt models and JSON-LD schema graphs.</p>
            </div>
          </div>

          <div class="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:border-primary/40 transition-all">
            <div class="aspect-[4/3] overflow-hidden bg-muted">
              <img src="/images/office-strategy.jpg" alt="Inrank Technologies Conversion & Analytics Command Center" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-4 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-primary">Data & Tracking</span>
              <h4 class="font-display font-bold text-sm text-foreground">Conversion Command Center</h4>
              <p class="text-xs text-muted-foreground leading-normal">Full-funnel GA4 attribution, server-side Meta CAPI tracking and behavioral heatmaps.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- What We Do & Our Core Services Section -->
      <section class="max-w-7xl mx-auto px-5 sm:px-8 mb-20 sm:mb-28 border-t border-border pt-16">
        <div class="text-center space-y-4 mb-12 sm:mb-16">
          <span class="text-xs uppercase tracking-[0.22em] font-semibold text-primary">[02] : Our Specialties</span>
          <h2 class="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground font-sans">
            Our Core Services
          </h2>
          <p class="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Inrank Technologies helps businesses grow through websites, SEO, ads and conversion optimization, fully integrated into a cohesive pipeline.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Web Dev Card -->
          <div class="border border-border bg-card rounded-xl p-6 shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div class="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
              <i data-lucide="code-xml" class="h-5 w-5"></i>
            </div>
            <h3 class="font-display font-bold text-base text-foreground mb-2">Web Development</h3>
            <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              Custom websites built for speed, SEO, mobile performance and lead generation.
            </p>
          </div>

          <!-- Landing Page Card -->
          <div class="border border-border bg-card rounded-xl p-6 shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div class="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
              <i data-lucide="layout-template" class="h-5 w-5"></i>
            </div>
            <h3 class="font-display font-bold text-base text-foreground mb-2">Landing Page Development</h3>
            <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              Conversion-focused landing pages designed for Google Ads, Meta Ads and campaign-specific demands.
            </p>
          </div>

          <!-- SEO Card -->
          <div class="border border-border bg-card rounded-xl p-6 shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div class="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
              <i data-lucide="search" class="h-5 w-5"></i>
            </div>
            <h3 class="font-display font-bold text-base text-foreground mb-2">SEO Solutions</h3>
            <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              Technical SEO, on-page optimisation, content strategy, structured data and rankings that translate to revenue.
            </p>
          </div>

          <!-- Google Ads Card -->
          <div class="border border-border bg-card rounded-xl p-6 shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div class="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
              <i data-lucide="target" class="h-5 w-5"></i>
            </div>
            <h3 class="font-display font-bold text-base text-foreground mb-2">Google Ads Management</h3>
            <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              Search, Performance Max, remarketing and conversion-focused campaign management built around ROAS.
            </p>
          </div>

          <!-- Meta Ads Card -->
          <div class="border border-border bg-card rounded-xl p-6 shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div class="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
              <i data-lucide="megaphone" class="h-5 w-5"></i>
            </div>
            <h3 class="font-display font-bold text-base text-foreground mb-2">Meta Ads Management</h3>
            <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              Facebook and Instagram funnel strategy, creative testing, retargeting and audience intelligence that scale.
            </p>
          </div>

          <!-- CRO Card -->
          <div class="border border-border bg-card rounded-xl p-6 shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div class="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
              <i data-lucide="mouse-pointer-click" class="h-5 w-5"></i>
            </div>
            <h3 class="font-display font-bold text-base text-foreground mb-2">Conversion Optimization</h3>
            <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              Heatmaps, user behaviour analysis, landing page optimisation, A/B testing strategy and funnel audits to increase revenue.
            </p>
          </div>

          <!-- Shopify Card -->
          <div class="border border-border bg-card rounded-xl p-6 shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div class="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
              <i data-lucide="shopping-bag" class="h-5 w-5"></i>
            </div>
            <h3 class="font-display font-bold text-base text-foreground mb-2">Shopify Development</h3>
            <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              Custom Shopify stores, theme development, app integrations, migrations and e-commerce growth frameworks.
            </p>
          </div>

          <!-- WordPress Card -->
          <div class="border border-border bg-card rounded-xl p-6 shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div class="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
              <i data-lucide="file-code-2" class="h-5 w-5"></i>
            </div>
            <h3 class="font-display font-bold text-base text-foreground mb-2">WordPress Development</h3>
            <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              Custom WordPress builds, redesigns, plugin integration, speed optimisation, SEO setups and long-term support.
            </p>
          </div>
        </div>
      </section>

      <!-- Why Clients Work With Us Section (5 Strategic Growth Pillars) -->
      <section class="max-w-7xl mx-auto px-5 sm:px-8 mb-20 sm:mb-28 border-t border-border pt-16">
        <div class="text-center space-y-4 mb-12 sm:mb-16">
          <span class="text-xs uppercase tracking-[0.22em] font-semibold text-primary">[03] : Strategic Pillars</span>
          <h2 class="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground font-sans">
            Our 5 Pillars of Market Dominance
          </h2>
          <p class="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Engineered from our comprehensive Pune SEO, GEO, AEO & AI Search Growth Strategy to outperform legacy agencies.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <!-- Pillar 1 -->
          <div class="p-6 rounded-2xl border border-border bg-white dark:bg-card hover:border-primary/40 hover:bg-white dark:hover:bg-card transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div class="space-y-3">
              <div class="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm border border-primary/20">01</div>
              <h3 class="font-display font-bold text-base sm:text-lg text-foreground">Revenue Architecture Over Vanity Metrics</h3>
              <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
                We measure outcomes by qualified phone calls, booked consults and pipeline sales value rather than empty impression spikes or irrelevant keyword rankings.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 font-mono">Deliverable: Real pipeline leads</span>
          </div>

          <!-- Pillar 2 -->
          <div class="p-6 rounded-2xl border border-border bg-white dark:bg-card hover:border-primary/40 hover:bg-white dark:hover:bg-card transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div class="space-y-3">
              <div class="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm border border-primary/20">02</div>
              <h3 class="font-display font-bold text-base sm:text-lg text-foreground">Proof Before Adjectives</h3>
              <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
                Every claim is verified with raw analytics data: 318% organic inquiry surges, 3.4x validated e-commerce ROAS and 99/100 Core Web Vitals speed scores.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 font-mono">Deliverable: Verifiable case studies</span>
          </div>

          <!-- Pillar 3 -->
          <div class="p-6 rounded-2xl border border-border bg-white dark:bg-card hover:border-primary/40 hover:bg-white dark:hover:bg-card transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div class="space-y-3">
              <div class="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm border border-primary/20">03</div>
              <h3 class="font-display font-bold text-base sm:text-lg text-foreground">Hyper-Local Pune Commercial Authority</h3>
              <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
                Dominating high-value Pune business corridors (FC Road, Shivaji Nagar, Baner, Hinjewadi, Viman Nagar) across Google Maps 3-Pack and localized organic search.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 font-mono">Deliverable: Map 3-Pack prominence</span>
          </div>

          <!-- Pillar 4 -->
          <div class="p-6 rounded-2xl border border-border bg-white dark:bg-card hover:border-primary/40 hover:bg-white dark:hover:bg-card transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div class="space-y-3">
              <div class="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm border border-primary/20">04</div>
              <h3 class="font-display font-bold text-base sm:text-lg text-foreground">Dual-Engine Search &amp; AI Discovery (GEO/AEO)</h3>
              <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
                Positioning brands to win both traditional Google search rankings and recommendation citations inside ChatGPT Search, Perplexity AI, Claude and Gemini Overviews.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 font-mono">Deliverable: Generative engine citations</span>
          </div>

          <!-- Pillar 5 -->
          <div class="p-6 rounded-2xl border border-border bg-white dark:bg-card hover:border-primary/40 hover:bg-white dark:hover:bg-card transition-all flex flex-col justify-between space-y-4 shadow-sm sm:col-span-2 lg:col-span-2">
            <div class="space-y-3">
              <div class="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm border border-primary/20">05</div>
              <h3 class="font-display font-bold text-base sm:text-lg text-foreground">Founder-Led Senior Partner Execution</h3>
              <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
                Direct accountability with our Senior Growth Engineering Lead (8+ years technical SEO and growth engineering experience). No junior account reps, zero handoff confusion and absolute transparency in bi-weekly sprint reviews.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 font-mono">Deliverable: Direct engineering leadership accountability</span>
          </div>
        </div>
      </section>

      <!-- How We Work Section -->
      <section class="max-w-7xl mx-auto px-5 sm:px-8 mb-20 sm:mb-28 border-t border-border pt-16">
        <div class="text-center space-y-4 mb-12 sm:mb-16">
          <span class="text-xs uppercase tracking-[0.22em] font-semibold text-primary">[04] : Our Process</span>
          <h2 class="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground font-sans">
            How We Work
          </h2>
          <p class="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto font-sans">
            The process usually starts with a detailed review of your current website, traffic sources, conversion rates and competitor structures.
          </p>
        </div>

        <!-- 3 Step Horizontal / Vertical Layout -->
        <div class="grid md:grid-cols-3 gap-8 relative">
          <!-- Step 1 -->
          <div class="space-y-4 relative bg-card p-6 rounded-xl border border-border">
            <div class="text-4xl font-extrabold text-primary/10">01</div>
            <h3 class="font-display font-bold text-lg text-foreground font-sans">Step 1: Audit and strategy</h3>
            <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
              Current performance, technical issues, funnel gaps and growth opportunities are identified with clear data and structured logs.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="space-y-4 relative bg-card p-6 rounded-xl border border-border">
            <div class="text-4xl font-extrabold text-primary/10">02</div>
            <h3 class="font-display font-bold text-lg text-foreground font-sans">Step 2: Build and optimise</h3>
            <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
              Web pages, codebases, advanced custom SEO improvements, ad structures and conversion triggers are implemented directly.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="space-y-4 relative bg-card p-6 rounded-xl border border-border">
            <div class="text-4xl font-extrabold text-primary/10">03</div>
            <h3 class="font-display font-bold text-lg text-foreground font-sans">Step 3: Measure and improve</h3>
            <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
              Full tag tracking, GA4/GTM reporting and ongoing micro-refinement loops keep the entire system improving over time instead of decaying.
            </p>
          </div>
        </div>
      </section>

      <!-- Audience & Target Reach Sections -->
      <section class="max-w-7xl mx-auto px-5 sm:px-8 mb-20 sm:mb-28 border-t border-border pt-16">
        <div class="grid md:grid-cols-2 gap-8 font-sans">
          <!-- Industries Supported -->
          <div class="border border-border bg-card rounded-xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div class="flex items-center gap-2 mb-2">
              <div class="p-2 rounded bg-primary/10 text-primary"><i data-lucide="building" class="h-4.5 w-4.5"></i></div>
              <h3 class="font-display font-bold text-xl text-foreground font-sans">Industries We Support</h3>
            </div>
            <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
              We focus on high-intent sectors where speed and search relevance dominate conversion loops. Our typical partnerships cover:
            </p>
            <div class="grid grid-cols-2 gap-2 font-sans text-xs text-foreground">
              <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>Service Businesses</span>
              <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>SaaS Brands</span>
              <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>Local Small Business</span>
              <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>E-Commerce Stores</span>
              <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>Healthcare & Medical</span>
              <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>Education & Coaches</span>
              <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>Real Estate & Properties</span>
            </div>
          </div>

          <!-- Who We Work With -->
          <div class="border border-border bg-card rounded-xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div class="flex items-center gap-2 mb-2">
              <div class="p-2 rounded bg-primary/10 text-primary"><i data-lucide="briefcase" class="h-4.5 w-4.5"></i></div>
              <h3 class="font-display font-bold text-xl text-foreground font-sans">Who We Work With</h3>
            </div>
            <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
              Inrank Technologies works with progressive businesses in Pune, across India and internationally (including US, UK, Australia).
            </p>
            <p class="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
              The best fit is usually a business that values clear reporting, execution speed, technical accuracy and prefers a collaborative, direct partnership with senior growth engineers over generic sales-pitch talk.
            </p>
          </div>
        </div>
      </section>

      <!-- Founder & Expert Bio Section for E-E-A-T -->
      <section class="max-w-7xl mx-auto px-5 sm:px-8 mb-20 sm:mb-28 border-t border-border pt-16">
        <div class="border border-border bg-card/30 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div class="grid md:grid-cols-12 gap-8 items-center">
            <div class="md:col-span-4 flex justify-center">
              <div class="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary shadow-md bg-muted">
                <!-- Fallback initials if image isn't loaded -->
                <div class="absolute inset-0 flex items-center justify-center bg-zinc-900 text-stone-100 font-display font-semibold text-4xl">IT</div>
                <img src="/images/lead-growth-engineer.jpg" alt="Inrank Technologies Growth Engineering Leadership" class="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-300" onload="this.classList.remove('opacity-0');" />
              </div>
            </div>
            <div class="md:col-span-8 space-y-4">
              <div class="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Senior Growth Engineer &amp; Technical Lead</div>
              <h3 class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-sans">Growth Engineering Lead</h3>
              <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
                Our Senior Growth Engineering Lead directs the strategy and engineering framework at Inrank Technologies. With over 8+ years of hands-on expertise in technical SEO, high-performance web architecture and full-funnel conversion rate optimization (CRO), our leadership team coordinates growth strategies for local brands in Pune and international clients worldwide. Our specialists are certified across major digital marketing platforms and focus strictly on evidence-backed, transparent deliverables.
              </p>
              <div class="p-3.5 bg-primary/5 rounded-xl border border-primary/20 text-xs text-foreground italic font-sans leading-relaxed">
                &ldquo;When you work with Inrank Technologies, you aren't handed off to junior interns or account managers who don't touch code. You work directly with senior growth builders who engineer your rankings and conversion funnels with personal accountability.&rdquo;
              </div>
              <div class="flex flex-wrap items-center gap-6 pt-1 text-xs text-muted-foreground font-sans">
                <span class="flex items-center gap-1.5"><i data-lucide="award" class="h-4 w-4 text-primary"></i> Certified Specialist</span>
                <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="h-4 w-4 text-primary"></i> 8+ Years Experience</span>
                <span class="flex items-center gap-1.5"><i data-lucide="map-pin" class="h-4 w-4 text-primary"></i> Pune, MH, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Frequently Asked Questions Accordion Section -->
      <section class="max-w-7xl mx-auto px-5 sm:px-8 mb-20 sm:mb-28 border-t border-border pt-16 font-sans">
        <div class="max-w-3xl mx-auto">
          <div class="text-center space-y-4 mb-12">
            <span class="text-xs uppercase tracking-[0.22em] font-semibold text-primary">[05] : FAQ</span>
            <h2 class="font-display font-bold text-3xl tracking-tight text-foreground font-sans">
              Frequently Asked Questions
            </h2>
          </div>

          <div class="space-y-4 font-sans">
            <!-- FAQ 1 -->
            <div class="about-faq-item border-b border-border group">
              <h3>
                <button type="button" class="about-faq-trigger flex w-full items-center justify-between text-left font-display text-base sm:text-lg font-semibold py-4 text-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer">
                  <span>What does Inrank Technologies do?</span>
                  <i data-lucide="chevron-down" class="about-faq-chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300"></i>
                </button>
              </h3>
              <div class="about-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
                <p class="text-xs sm:text-sm text-muted-foreground pb-4 leading-relaxed">
                  Inrank Technologies helps businesses grow through web development, SEO, paid ads, e-commerce setups and conversion optimization under one roof.
                </p>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="about-faq-item border-b border-border group">
              <h3>
                <button type="button" class="about-faq-trigger flex w-full items-center justify-between text-left font-display text-base sm:text-lg font-semibold py-4 text-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer">
                  <span>Where is Inrank Technologies based?</span>
                  <i data-lucide="chevron-down" class="about-faq-chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300"></i>
                </button>
              </h3>
              <div class="about-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
                <p class="text-xs sm:text-sm text-muted-foreground pb-4 leading-relaxed">
                  Inrank Technologies is based in Pune, Maharashtra, India and works with clients locally and globally.
                </p>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="about-faq-item border-b border-border group">
              <h3>
                <button type="button" class="about-faq-trigger flex w-full items-center justify-between text-left font-display text-base sm:text-lg font-semibold py-4 text-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer">
                  <span>Do you work only with local clients?</span>
                  <i data-lucide="chevron-down" class="about-faq-chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300"></i>
                </button>
              </h3>
              <div class="about-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
                <p class="text-xs sm:text-sm text-muted-foreground pb-4 leading-relaxed">
                  No. While Pune and India are important service areas, the business is positioned to deliver remote engineering and optimization for clients worldwide using structured handovers and regular progress tracking.
                </p>
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="about-faq-item border-b border-border group">
              <h3>
                <button type="button" class="about-faq-trigger flex w-full items-center justify-between text-left font-display text-base sm:text-lg font-semibold py-4 text-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer">
                  <span>What makes Inrank Technologies different from a typical agency?</span>
                  <i data-lucide="chevron-down" class="about-faq-chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300"></i>
                </button>
              </h3>
              <div class="about-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
                <p class="text-xs sm:text-sm text-muted-foreground pb-4 leading-relaxed">
                  The difference is the combination of deep technical development, SEO, media buying and conversion optimization without layers of management. You work directly with the senior builders who execute your growth strategy.
                </p>
              </div>
            </div>

            <!-- FAQ 5 -->
            <div class="about-faq-item border-b border-border group">
              <h3>
                <button type="button" class="about-faq-trigger flex w-full items-center justify-between text-left font-display text-base sm:text-lg font-semibold py-4 text-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer">
                  <span>Can I hire you for one service only?</span>
                  <i data-lucide="chevron-down" class="about-faq-chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300"></i>
                </button>
              </h3>
              <div class="about-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
                <p class="text-xs sm:text-sm text-muted-foreground pb-4 leading-relaxed">
                  Yes. Businesses can engage for a single service such as custom web development, landing pages, or stand-alone SEO audits and expand scope as they scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Let’s Build Growth That Lasts CTA Section -->
      <section class="max-w-7xl mx-auto px-5 sm:px-8">
        <div class="relative bg-gradient-to-br from-indigo-950/80 via-slate-900 to-emerald-950/80 border border-slate-800 rounded-3xl p-8 sm:p-16 text-center overflow-hidden shadow-lg">
          <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle, var(--color-border) 1.2px, transparent 1.2px); background-size: 24px 24px;"></div>
          <div class="relative max-w-2xl mx-auto space-y-6">
            <h2 class="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white text-balance font-sans">
              Let’s Build Growth That Lasts
            </h2>
            <p class="text-stone-300 text-sm sm:text-base leading-relaxed font-sans text-balance">
              If the goal is a faster website, better rankings, stronger paid traffic performance, or an e-commerce setup that sells, we should talk.
            </p>
            <div class="pt-4">
              <a href="#contact" class="inline-flex items-center justify-center gap-1.5 px-8 h-12 text-sm font-semibold rounded-md bg-primary text-primary-foreground shadow-lg hover:bg-primary/95 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer font-sans">
                Book a Strategy Call
                <i data-lucide="arrow-right" class="h-4.5 w-4.5"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  // Hydrate Lucide icons on newly injected elements immediately!
  if (typeof (window as any).lucide !== "undefined") {
    (window as any).lucide.createIcons();
  }

  // Hydrate the about FAQs accordion triggers
  const aFaqItems = container.querySelectorAll(".about-faq-item");
  aFaqItems.forEach((item) => {
    const trigger = item.querySelector(".about-faq-trigger") as HTMLButtonElement | null;
    const body = item.querySelector(".about-faq-body") as HTMLDivElement | null;
    const chevronIcon = item.querySelector(".about-faq-chevron") as SVGElement | null;

    if (trigger && body) {
      trigger.addEventListener("click", () => {
        const isOpen = !body.classList.contains("max-h-0");

        // Close all other about FAQs
        aFaqItems.forEach((other) => {
          const oBody = other.querySelector(".about-faq-body") as HTMLDivElement | null;
          const oChevron = other.querySelector(".about-faq-chevron") as SVGElement | null;
          if (oBody) {
            oBody.classList.remove("max-h-[300px]", "opacity-100");
            oBody.classList.add("max-h-0", "opacity-0");
          }
          if (oChevron) oChevron.classList.remove("rotate-180", "text-primary");
        });

        // Toggle focus
        if (!isOpen) {
          body.classList.remove("max-h-0", "opacity-0");
          body.classList.add("max-h-[300px]", "opacity-100");
          if (chevronIcon) chevronIcon.classList.add("rotate-180", "text-primary");
        }
      });
    }
  });
}

// Helper to generate a single blog card HTML
function generateBlogCardHTML(blog: BlogPost): string {
  return `
    <div id="blog-post-card-${blog.id}" class="group border border-border bg-white dark:bg-card hover:bg-white dark:hover:bg-card rounded-xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all flex flex-col shadow-sm">
      <div class="relative h-48 overflow-hidden bg-muted">
        <img src="${blog.image}" alt="${blog.focusKeyword}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <span class="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] bg-zinc-900 text-stone-100 rounded-md font-sans">
          ${blog.category}
        </span>
      </div>
      <div class="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <div class="flex items-center gap-3 text-xs text-muted-foreground font-sans">
            <span>${blog.date}</span>
            <span class="h-1 w-1 rounded-full bg-border"></span>
            <span>${blog.readingTime}</span>
          </div>
          <h3 class="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
            <a href="#/blog/${blog.slug}">${blog.title}</a>
          </h3>
          <p class="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-sans">
            ${blog.intro}
          </p>
        </div>
        <div class="pt-2 border-t border-border/50 flex items-center justify-between">
          <span class="text-[10px] text-muted-foreground italic font-sans font-medium">Focus: ${blog.focusKeyword}</span>
          <span class="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Read article <i data-lucide="arrow-right" class="h-3.5 w-3.5"></i>
          </span>
        </div>
      </div>
    </div>
  `;
}

// Mapping each of the 27 services to Inrank's 4 proprietary pillars
const SERVICE_PILLAR_MAP: Record<string, { pillar: string; icon: string; badge: string }> = {
  // Pillar 1: Search & AI Discovery (7)
  "seo": { pillar: "Search & AI Discovery", icon: "search", badge: "12,100/mo Search Volume · KD 32" },
  "backlink-building": { pillar: "Search & AI Discovery", icon: "link-2", badge: "DR 50-85+ Editorial Links · Zero PBNs" },
  "gmb-optimization": { pillar: "Search & AI Discovery", icon: "map-pin", badge: "Google 3-Pack Maps Leader · High Intent Calls" },
  "ai-seo-agency": { pillar: "Search & AI Discovery", icon: "sparkles", badge: "SearchGPT & Perplexity Engine Optimization" },
  "geo-seo-agency": { pillar: "Search & AI Discovery", icon: "compass", badge: "Generative Engine Optimization Architecture" },
  "ai-ranking-citations": { pillar: "Search & AI Discovery", icon: "share-2", badge: "AI Knowledge Graph & Entity Citations" },
  "content-marketing": { pillar: "Search & AI Discovery", icon: "file-text", badge: "Topic Clusters & High Authority Backlinks" },

  // Pillar 2: Paid Media & Social (7)
  "google-ads": { pillar: "Paid Media & Social", icon: "target", badge: "Certified Partner · High ROAS PMax & Search" },
  "meta-ads": { pillar: "Paid Media & Social", icon: "crosshair", badge: "Conversions API (CAPI) & High ROAS Retargeting" },
  "social-media-marketing": { pillar: "Paid Media & Social", icon: "share", badge: "Multi-Platform Organic Growth & Viral Reels" },
  "linkedin-management": { pillar: "Paid Media & Social", icon: "briefcase", badge: "B2B Pipeline & Thought Leadership Ghostwriting" },
  "pay-per-click-ppc": { pillar: "Paid Media & Social", icon: "bar-chart-2", badge: "Negative Keyword Scrubbing · Quality Score 9+" },
  "conversion-optimization": { pillar: "Paid Media & Social", icon: "trending-up", badge: "A/B Funnel Testing & Friction Reduction" },
  "influencer-marketing": { pillar: "Paid Media & Social", icon: "users", badge: "Creator Vetting & Verified Coupon Attribution" },

  // Pillar 3: Web & E-Commerce (8)
  "website-development": { pillar: "Web & E-Commerce", icon: "code-xml", badge: "Sub-Second Load Times · Core Web Vitals 95+" },
  "custom-website-design": { pillar: "Web & E-Commerce", icon: "layout", badge: "Bespoke Figma UI/UX & Responsive Systems" },
  "landing-pages": { pillar: "Web & E-Commerce", icon: "zap", badge: "Direct Response Architecture & Fast Clicks" },
  "shopify-development": { pillar: "Web & E-Commerce", icon: "shopping-bag", badge: "Shopify Plus Architecture & Liquid Engineering" },
  "wordpress-development": { pillar: "Web & E-Commerce", icon: "globe", badge: "Hardened Security & Custom Gutenberg Blocks" },
  "e-commerce-development": { pillar: "Web & E-Commerce", icon: "shopping-cart", badge: "Multi-Gateway Checkout & Cart Recovery" },
  "mobile-app-development": { pillar: "Web & E-Commerce", icon: "smartphone", badge: "Cross-Platform React Native & Native Speed" },
  "website-maintenance": { pillar: "Web & E-Commerce", icon: "shield-check", badge: "24/7 Security Patches & Daily Cloud Backups" },

  // Pillar 4: Branding (5)
  "brand-name": { pillar: "Branding", icon: "type", badge: "Linguistic Clearance & Trademark Ready" },
  "logo-design": { pillar: "Branding", icon: "pen-tool", badge: "Vector Grid Mathematics & Brand Styleguides" },
  "business-card-design": { pillar: "Branding", icon: "credit-card", badge: "Luxury Tactile Finishes & Embossed Foil Specs" },
  "letterhead-design": { pillar: "Branding", icon: "file", badge: "Official Corporate Identity & Digital Templates" },
  "brochure-designing": { pillar: "Branding", icon: "book-open", badge: "Sales Collateral & High-Resolution Print Ready" }
};

function generateServiceCardHTML(service: ServiceDetail) {
  const meta = SERVICE_PILLAR_MAP[service.id] || { pillar: "Search & AI Discovery", icon: "sparkles", badge: "Specialized Discipline" };
  const deliverables = service.detailedServices.slice(0, 3);
  const isAiService = service.id === "ai-seo-agency" || service.id === "geo-seo-agency" || service.id === "ai-ranking-citations";

  return `
    <div class="service-directory-card group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-border/80 hover:border-emerald-500/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_2px_6px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-8px_rgba(16,185,129,0.18),0_8px_16px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden" data-service-id="${service.id}" data-pillar="${meta.pillar}" data-title="${service.title.toLowerCase()}" data-desc="${service.shortDesc.toLowerCase()}">
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="space-y-4">
        <div class="flex items-center justify-between gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            ${isAiService ? `<span class="h-3.5 w-3.5 inline-block shrink-0">${AI_SEARCH_ICON_SVG}</span>` : `<i data-lucide="${meta.icon}" class="h-3.5 w-3.5"></i>`}
            ${meta.pillar}
          </span>
          <span class="text-[10px] font-mono text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded font-semibold">ID: ${service.id}</span>
        </div>

        <div>
          <h3 class="font-display font-bold text-lg sm:text-xl text-stone-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            <a href="#/service/${service.id}" class="hover:underline">
              ${service.title}
            </a>
          </h3>
          <div class="mt-2">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-border/80">
              <i data-lucide="trending-up" class="h-3 w-3 text-emerald-500"></i>
              ${meta.badge}
            </span>
          </div>
        </div>

        <p class="text-[13px] text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3 font-normal">
          ${service.shortDesc}
        </p>

        <div class="pt-3 border-t border-border/60 space-y-1.5">
          <div class="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">Deliverables & Scope:</div>
          <ul class="text-xs text-stone-700 dark:text-stone-300 space-y-1 font-medium">
            ${deliverables.map(d => `
              <li class="flex items-start gap-1.5">
                <i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5"></i>
                <span class="line-clamp-1">${d}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>

      <div class="pt-5 mt-4 border-t border-border/60">
        <a href="#/service/${service.id}" class="flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-600 text-emerald-600 dark:text-emerald-400 hover:text-white font-semibold text-xs transition-all duration-200 group/btn shadow-xs active:scale-[0.98]">
          <span>Explore Architecture & Guide</span>
          <i data-lucide="arrow-right" class="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform"></i>
        </a>
      </div>
    </div>
  `;
}

// Renders the dedicated All Services Directory page under #all-services-view
function renderAllServicesPage() {
  document.title = "All 27 Growth Services & Engineering Capabilities | Inrank Technologies";
  const metaDescEl = document.querySelector('meta[name="description"]');
  if (metaDescEl) {
    metaDescEl.setAttribute("content", "Explore Inrank Technologies' 27 specialized growth services across Search & AI Discovery, Paid Media & Social, Web & E-Commerce, and Branding. 8+ years experience and 100% white-label agency outsourcing.");
  }

  const container = document.getElementById("all-services-view");
  if (!container) return;

  // Dynamic JSON-LD Schema Injection
  const existingSchema = document.getElementById("dynamic-services-schema");
  if (existingSchema) existingSchema.remove();

  const schemaScript = document.createElement("script");
  schemaScript.id = "dynamic-services-schema";
  schemaScript.type = "application/ld+json";
  
  const schemaGraph = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://inranktech.com/services/#services",
    "name": "Inrank Technologies 27 Specialized Growth Services Directory",
    "url": "https://inranktech.com/#/services",
    "description": "Complete directory of 27 specialized digital growth disciplines, from Google My Business optimization and backlink building to custom web engineering and white-label outsourcing.",
    "publisher": {
      "@type": "Organization",
      "name": "Inrank Technologies",
      "logo": "/logo.png"
    },
    "hasPart": SERVICES_DETAILS.map(s => ({
      "@type": "Service",
      "name": s.title,
      "url": `https://inranktech.com/#/service/${s.id}`,
      "description": s.shortDesc
    }))
  };

  schemaScript.innerHTML = JSON.stringify(schemaGraph);
  document.head.appendChild(schemaScript);

  const cardsHTML = SERVICES_DETAILS.map(generateServiceCardHTML).join("");

  container.innerHTML = `
    <div class="relative pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28">
      
      <!-- Radial background decorations -->
      <div class="absolute inset-0 opacity-50 dark:opacity-20 pointer-events-none" style="background-image: radial-gradient(circle, var(--color-border) 1.2px, transparent 1.2px); background-size: 28px 28px;"></div>
      <div class="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

      <!-- Breadcrumbs navigation -->
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8 mb-6 sm:mb-8">
        <div class="flex items-center gap-2">
          <a href="#" class="text-xs sm:text-sm text-muted-foreground hover:text-emerald-500 transition-colors cursor-pointer">Home</a>
          <span class="text-stone-500">/</span>
          <span class="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">Services Directory</span>
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto px-5 sm:px-8 space-y-12 sm:space-y-16">
        
        <!-- Hero Title Section -->
        <div class="space-y-5 max-w-4xl">
          <span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400 shadow-sm">
            <i data-lucide="layers" class="h-3.5 w-3.5"></i>
            Proprietary 4-Pillar Architecture · 27 Specialized Disciplines
          </span>
          <h1 class="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.08]">
            Comprehensive Growth Services & Technical Capabilities
          </h1>
          <p class="text-muted-foreground text-base sm:text-lg leading-relaxed font-sans max-w-3xl">
            From Google My Business 3-Pack domination and editorial backlink building to custom web engineering, high-ROAS paid advertising and confidential white-label agency outsourcing. Every discipline is executed under senior engineering leadership with over 8+ years of proven commercial experience.
          </p>

          <!-- Proof Metrics Bar -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-border/60">
            <div class="p-3.5 rounded-xl bg-white dark:bg-card border border-border/70">
              <div class="font-display font-extrabold text-2xl text-emerald-600 dark:text-emerald-400">27</div>
              <div class="text-xs text-muted-foreground font-medium">Core Growth Services</div>
            </div>
            <div class="p-3.5 rounded-xl bg-card border border-border/70">
              <div class="font-display font-extrabold text-2xl text-emerald-600 dark:text-emerald-400">8+ Yrs</div>
              <div class="text-xs text-muted-foreground font-medium">Senior Engineering</div>
            </div>
            <div class="p-3.5 rounded-xl bg-card border border-border/70">
              <div class="font-display font-extrabold text-2xl text-emerald-600 dark:text-emerald-400">100%</div>
              <div class="text-xs text-muted-foreground font-medium">White-Label NDA Available</div>
            </div>
            <div class="p-3.5 rounded-xl bg-card border border-border/70">
              <div class="font-display font-extrabold text-2xl text-emerald-600 dark:text-emerald-400">#1 / Top 3</div>
              <div class="text-xs text-muted-foreground font-medium">Local Maps & Organic Target</div>
            </div>
          </div>
        </div>

        <!-- Filter & Search Controls Bar -->
        <div class="space-y-4 p-4 sm:p-6 rounded-2xl bg-card border border-border/70 shadow-sm">
          <div class="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            <!-- Category Pills -->
            <div class="flex flex-wrap gap-2 items-center" id="services-filter-buttons">
              <button class="service-filter-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white shadow-sm active:scale-95 transition-all" data-pillar="all">
                All Disciplines (27)
              </button>
              <button class="service-filter-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-muted hover:bg-emerald-600 hover:text-white text-foreground active:scale-95 transition-all" data-pillar="Search & AI Discovery">
                Search & AI Discovery (7)
              </button>
              <button class="service-filter-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-muted hover:bg-emerald-600 hover:text-white text-foreground active:scale-95 transition-all" data-pillar="Paid Media & Social">
                Paid Media & Social (7)
              </button>
              <button class="service-filter-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-muted hover:bg-emerald-600 hover:text-white text-foreground active:scale-95 transition-all" data-pillar="Web & E-Commerce">
                Web & E-Commerce (8)
              </button>
              <button class="service-filter-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-muted hover:bg-emerald-600 hover:text-white text-foreground active:scale-95 transition-all" data-pillar="Branding">
                Branding (5)
              </button>
            </div>

            <!-- Live Search Input -->
            <div class="relative w-full md:w-72">
              <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"></i>
              <input 
                id="services-search-input" 
                type="text" 
                placeholder="Search 27 services..." 
                class="w-full pl-9 pr-8 py-2 text-xs rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
              <button id="services-search-clear" class="hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <i data-lucide="x" class="h-3.5 w-3.5"></i>
              </button>
            </div>
          </div>

          <!-- Dynamic Results Counter -->
          <div class="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/40">
            <span id="services-results-counter">Displaying ${SERVICES_DETAILS.length} of ${SERVICES_DETAILS.length} specialized growth services</span>
            <span class="text-[11px]">Click any card to inspect deliverables and technical specifications</span>
          </div>
        </div>

        <!-- Services Cards Grid -->
        <div id="all-services-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${cardsHTML}
        </div>

        <!-- Empty Search State -->
        <div id="services-empty-state" class="hidden text-center py-16 px-4 rounded-2xl bg-card border border-dashed border-border space-y-3">
          <div class="h-12 w-12 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
            <i data-lucide="search-x" class="h-6 w-6"></i>
          </div>
          <h3 class="font-display font-bold text-lg text-foreground">No matching services found</h3>
          <p class="text-xs text-muted-foreground max-w-md mx-auto">
            We could not find any services matching your search. Try searching for "Backlinks", "GMB", "SEO", "Shopify", "Meta Ads" or "WhatsApp".
          </p>
          <button id="services-reset-search-btn" class="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.98] shadow transition-all">
            Reset Filters & View All
          </button>
        </div>

        <!-- 100% White-Label Agency Outsourcing Feature Banner -->
        <section class="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-card via-card to-emerald-950/20 border border-emerald-500/30 shadow-xl relative overflow-hidden">
          <div class="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

          <div class="relative space-y-6 max-w-4xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              <i data-lucide="briefcase" class="h-3.5 w-3.5"></i>
              Agency Partnership Engine
            </div>

            <h2 class="font-display font-bold text-2xl sm:text-4xl text-foreground">
              100% White-Label Agency Outsourcing & Wholesale Fulfillment
            </h2>

            <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Leading digital marketing agencies, branding studios and corporate consultancies across India, the United States, the United Kingdom and Australia partner with Inrank Technologies as their confidential technical fulfillment engine. Expand your agency's service catalog to 31 specialized disciplines instantly with zero hiring risk, zero operational overhead and guaranteed delivery under your own brand banner.
            </p>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div class="p-4 rounded-xl bg-background/60 border border-border/60 space-y-2">
                <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <i data-lucide="shield" class="h-4 w-4"></i>
                  Strict NDA Protection
                </div>
                <p class="text-xs text-muted-foreground">We never contact your clients or publicize case studies. Complete client confidentiality guaranteed.</p>
              </div>

              <div class="p-4 rounded-xl bg-background/60 border border-border/60 space-y-2">
                <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <i data-lucide="cpu" class="h-4 w-4"></i>
                  8+ Yrs Technical Depth
                </div>
                <p class="text-xs text-muted-foreground">Fulfillment overseen directly by Senior Growth Engineering Leads with over 8 years experience.</p>
              </div>

              <div class="p-4 rounded-xl bg-background/60 border border-border/60 space-y-2">
                <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <i data-lucide="percent" class="h-4 w-4"></i>
                  Wholesale Margins
                </div>
                <p class="text-xs text-muted-foreground">Fixed wholesale retainer pricing designed to allow your agency healthy 50% to 150% profit markups.</p>
              </div>

              <div class="p-4 rounded-xl bg-background/60 border border-border/60 space-y-2">
                <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <i data-lucide="file-check" class="h-4 w-4"></i>
                  Unbranded Reporting
                </div>
                <p class="text-xs text-muted-foreground">White-label performance dashboards, automated monthly PDF reports and transparent analytics.</p>
              </div>
            </div>

            <div class="pt-2 flex flex-col sm:flex-row gap-3">
              <a href="#contact" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-emerald-600/25 active:scale-[0.98] transition-all">
                <span>Inquire About Agency Outsourcing</span>
                <i data-lucide="arrow-right" class="h-4 w-4"></i>
              </a>
              <a href="https://wa.me/917038612280?text=Hi%20Inrank,%20I%20am%20interested%20in%20white-label%20agency%20outsourcing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-white dark:bg-card hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-foreground font-semibold text-sm shadow-sm active:scale-[0.98] transition-all group">
                <i data-lucide="message-circle" class="h-4 w-4 text-emerald-500 group-hover:text-white transition-colors"></i>
                <span>Direct WhatsApp Partner Desk</span>
              </a>
            </div>
          </div>
        </section>

        <!-- Final Strategic Audit CTA -->
        <div class="text-center py-10 space-y-4 max-w-2xl mx-auto">
          <h3 class="font-display font-bold text-2xl text-foreground">Need a Tailored Growth Architecture?</h3>
          <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Whether you require an individual high-impact service or an integrated multi-channel growth engine, our engineering team is ready to analyze your current baseline and architect an actionable roadmap.
          </p>
          <div class="flex items-center justify-center gap-4 pt-2">
            <a href="#contact" class="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow hover:shadow-lg hover:shadow-emerald-600/25 active:scale-[0.98] transition-all">
              Request Growth Audit
            </a>
            <a href="tel:+917038612280" class="px-5 py-2.5 rounded-lg border border-border bg-white dark:bg-card text-foreground hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-xs font-semibold shadow-sm active:scale-[0.98] transition-all flex items-center gap-2 group">
              <i data-lucide="phone" class="h-3.5 w-3.5 text-emerald-500 group-hover:text-white transition-colors"></i> Call +91 70386 12280
            </a>
          </div>
        </div>

      </div>
    </div>
  `;

  // Hydrate Lucide icons
  if (typeof (window as any).lucide !== "undefined") {
    (window as any).lucide.createIcons();
  }

  // Bind interactive filtering & live search
  const filterButtons = container.querySelectorAll(".service-filter-btn");
  const searchInput = document.getElementById("services-search-input") as HTMLInputElement | null;
  const clearBtn = document.getElementById("services-search-clear") as HTMLButtonElement | null;
  const resetBtn = document.getElementById("services-reset-search-btn") as HTMLButtonElement | null;
  const counterEl = document.getElementById("services-results-counter") as HTMLSpanElement | null;
  const cards = container.querySelectorAll<HTMLElement>(".service-directory-card");
  const emptyState = document.getElementById("services-empty-state") as HTMLDivElement | null;

  let activePillar = "all";
  let searchTerm = "";

  const updateCardVisibility = () => {
    let visibleCount = 0;

    cards.forEach(card => {
      const cardPillar = card.dataset.pillar || "";
      const cardTitle = card.dataset.title || "";
      const cardDesc = card.dataset.desc || "";
      const cardId = card.dataset.serviceId || "";

      const matchesPillar = activePillar === "all" || cardPillar === activePillar;
      const matchesSearch = searchTerm === "" || 
        cardTitle.includes(searchTerm) || 
        cardDesc.includes(searchTerm) || 
        cardPillar.toLowerCase().includes(searchTerm) ||
        cardId.includes(searchTerm);

      if (matchesPillar && matchesSearch) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (counterEl) {
      counterEl.textContent = `Displaying ${visibleCount} of ${SERVICES_DETAILS.length} specialized growth services`;
    }

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove("hidden");
      } else {
        emptyState.classList.add("hidden");
      }
    }
  };

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetPillar = btn.getAttribute("data-pillar") || "all";
      activePillar = targetPillar;

      // Update active button state
      filterButtons.forEach(b => {
        b.classList.remove("bg-emerald-600", "text-white", "shadow-sm");
        b.classList.add("bg-muted", "text-foreground");
      });
      btn.classList.remove("bg-muted", "text-foreground");
      btn.classList.add("bg-emerald-600", "text-white", "shadow-sm");

      updateCardVisibility();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = (e.target as HTMLInputElement).value.toLowerCase().trim();
      if (clearBtn) {
        if (searchTerm.length > 0) {
          clearBtn.classList.remove("hidden");
        } else {
          clearBtn.classList.add("hidden");
        }
      }
      updateCardVisibility();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchTerm = "";
      clearBtn.classList.add("hidden");
      updateCardVisibility();
      searchInput.focus();
    });
  }

  if (resetBtn && searchInput) {
    resetBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchTerm = "";
      activePillar = "all";
      if (clearBtn) clearBtn.classList.add("hidden");

      filterButtons.forEach((b, idx) => {
        if (idx === 0) {
          b.classList.add("bg-emerald-500", "text-white", "shadow-sm");
          b.classList.remove("bg-muted", "text-foreground");
        } else {
          b.classList.remove("bg-emerald-500", "text-white", "shadow-sm");
          b.classList.add("bg-muted", "text-foreground");
        }
      });

      updateCardVisibility();
    });
  }
}

// Renders the main blog hub page under #blog-view dynamically
function renderBlogHubView() {
  // Update document metadata tags
  document.title = "Digital Growth Blog | SEO, Web Development & Ads Insights";
  const metaDescEl = document.querySelector('meta[name="description"]');
  if (metaDescEl) {
    metaDescEl.setAttribute("content", "Read practical insights on SEO, AI search, web development, Google Ads, Meta Ads, Shopify, WordPress and conversion optimization.");
  }

  const container = document.getElementById("blog-view");
  if (!container) return;

  // Dynamic JSON-LD Schema Injection for Entity building
  const existingSchema = document.getElementById("dynamic-blog-schema");
  if (existingSchema) existingSchema.remove();

  const schemaScript = document.createElement("script");
  schemaScript.id = "dynamic-blog-schema";
  schemaScript.type = "application/ld+json";
  
  const schemaGraph = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://inranktech.com/blog/#blog",
    "name": "Inrank Technologies Digital Growth Blog",
    "url": "https://inranktech.com/#/blog",
    "description": "Practical guides on SEO, AI search, web performance, paid ads, Shopify and CRO.",
    "publisher": {
      "@type": "Organization",
      "name": "Inrank Technologies",
      "logo": "/logo.png"
    }
  };

  schemaScript.innerHTML = JSON.stringify(schemaGraph);
  document.head.appendChild(schemaScript);

  // Group posts by Category
  const categoriesList = [
    { name: "SEO & AI Search", icon: "search" },
    { name: "Google Ads & Meta Ads", icon: "target" },
    { name: "Web Development & Website Performance", icon: "code-xml" },
    { name: "Shopify, WordPress & Conversion Optimization", icon: "mouse-pointer-click" },
    { name: "AI Solutions & Modern Search Architecture", icon: "sparkles" },
    { name: "Brand Identity & Corporate Design", icon: "palette" },
    { name: "Strategic Growth & Inbound Marketing", icon: "trending-up" }
  ];

  // Highlight first two blogs as "Featured Guides"
  const featuredPosts = BLOG_POSTS.slice(0, 2);

  // Compile full list for search and latest
  const latestHTML = BLOG_POSTS.map(generateBlogCardHTML).join("");

  // Compile dynamic category sections
  const categorySectionsHTML = categoriesList.map(cat => {
    const posts = BLOG_POSTS.filter(b => b.category === cat.name);
    if (posts.length === 0) return "";
    return `
      <section class="space-y-6">
        <div class="flex items-center gap-3 border-b border-border pb-4">
          <div class="p-1.5 rounded bg-primary/10 text-primary"><i data-lucide="${cat.icon}" class="h-4.5 w-4.5"></i></div>
          <h2 class="font-display font-bold text-2xl text-foreground">${cat.name}</h2>
          <span class="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-mono ml-auto">${posts.length} Guides</span>
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          ${posts.map(generateBlogCardHTML).join("")}
        </div>
      </section>
    `;
  }).join("");

  const featuredHTML = featuredPosts.map(blog => `
    <div id="featured-guide-${blog.id}" class="group border border-border bg-white dark:bg-card hover:bg-white dark:hover:bg-card rounded-2xl p-6 sm:p-8 flex flex-col md:grid md:grid-cols-12 gap-6 sm:gap-8 hover:border-primary/50 transition-all">
      <div class="md:col-span-5 rounded-xl overflow-hidden h-52 md:h-full min-h-[180px] bg-muted relative">
        <img src="${blog.image}" alt="${blog.focusKeyword}" class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
        <span class="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-md font-sans">
          Featured
        </span>
      </div>
      <div class="md:col-span-7 flex flex-col justify-between space-y-4 font-sans">
        <div class="space-y-3">
          <div class="flex items-center gap-3 text-xs text-muted-foreground">
            <span>${blog.date}</span>
            <span class="h-1 w-1 rounded-full bg-border"></span>
            <span>${blog.readingTime}</span>
          </div>
          <h3 class="font-display font-bold text-xl sm:text-2xl text-foreground leading-snug group-hover:text-primary transition-colors">
            <a href="#/blog/${blog.slug}">${blog.title}</a>
          </h3>
          <p class="text-sm text-muted-foreground leading-relaxed">
            ${blog.intro}
          </p>
          <div class="flex flex-wrap gap-2 pt-1">
            ${blog.relatedKeywords.slice(0, 3).map(kw => `
              <span class="px-2 py-0.5 rounded text-[10px] bg-muted text-muted-foreground font-mono">#${kw}</span>
            `).join("")}
          </div>
        </div>
        <div class="pt-4 border-t border-border/60 flex items-center justify-between">
          <span class="text-xs text-muted-foreground font-medium">Primary: <strong class="text-foreground">${blog.focusKeyword}</strong></span>
          <a href="#/blog/${blog.slug}" class="text-sm font-semibold text-primary flex items-center gap-1.5 hover:translate-x-1 transition-transform">
            Read complete guide <i data-lucide="arrow-right" class="h-4 w-4"></i>
          </a>
        </div>
      </div>
    </div>
  `).join("");

  // Build the outer HTML Structure
  container.innerHTML = `
    <div class="relative pt-24 sm:pt-28 md:pt-36 pb-20 overflow-hidden font-sans">
      <!-- Background details -->
      <div class="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none" style="background-image: radial-gradient(circle, var(--color-border) 1.2px, transparent 1.2px); background-size: 24px 24px;"></div>
      <div class="absolute top-1/4 -right-32 w-[450px] h-[450px] rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <!-- Breadcrumbs navigation header -->
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8 mb-6 sm:mb-8">
        <div class="flex items-center gap-2">
          <a href="#" class="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Home</a>
          <span class="text-stone-500">/</span>
          <span class="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-primary">Blog Hub</span>
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto px-5 sm:px-8">
        
        <!-- Hero Header section -->
        <div class="space-y-4 max-w-3xl mb-12 sm:mb-16">
          <span class="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
            <i data-lucide="book-open" class="h-3.5 w-3.5"></i>
            Inrank Insights
          </span>
          <h1 class="font-display font-bold text-4xl sm:text-6xl tracking-tight text-foreground leading-[1.05]">
            Digital Growth Insights
          </h1>
          <p class="text-muted-foreground text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
            Actionable guides on SEO, AI search, web development, paid ads, Shopify, WordPress and conversion optimization for businesses that want smarter digital growth.
          </p>
        </div>

        <!-- Featured Guides block -->
        <section class="mb-16 sm:mb-24 space-y-6">
          <div class="flex items-center gap-3 border-b border-border pb-4">
            <div class="p-1.5 rounded bg-primary/10 text-primary"><i data-lucide="award" class="h-4.5 w-4.5"></i></div>
            <h2 class="font-display font-bold text-2xl text-foreground">Featured Guides</h2>
          </div>
          <div class="grid gap-6">
            ${featuredHTML}
          </div>
        </section>

        <!-- Category blocks with internal linking maps -->
        <div class="grid lg:grid-cols-12 gap-10">
          
          <!-- MAIN CONTENT HUB LISTS -->
          <div class="lg:col-span-9 space-y-16 sm:space-y-24">
            
            <!-- Latest Articles section with search engine -->
            <section class="space-y-6">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                <div class="flex items-center gap-3">
                  <div class="p-1.5 rounded bg-primary/10 text-primary"><i data-lucide="layers" class="h-4.5 w-4.5"></i></div>
                  <h2 class="font-display font-bold text-2xl text-foreground">Latest Articles</h2>
                </div>
                <!-- Search filter element -->
                <div class="relative w-full sm:max-w-xs">
                  <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"></i>
                  <input 
                    type="text" 
                    id="blog-search-input" 
                    placeholder="Search all guides..." 
                    class="w-full pl-9 pr-4 py-2 text-xs border border-border bg-card rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                  />
                </div>
              </div>
              
              <div id="latest-articles-grid" class="grid sm:grid-cols-2 gap-6">
                ${latestHTML}
              </div>
              <div id="blog-empty-state" class="hidden text-center py-12 border border-dashed border-border rounded-xl space-y-3">
                <i data-lucide="alert-circle" class="h-10 w-10 text-muted-foreground mx-auto"></i>
                <h4 class="font-bold text-base text-foreground">No articles found</h4>
                <p class="text-xs text-muted-foreground max-w-xs mx-auto">Try refining your terms. We cover SEO, AI overviews, Google Ads, WordPress, Shopify and Web Performance.</p>
              </div>
            </section>

            <!-- Dynamic Category Sections -->
            ${categorySectionsHTML}

          </div>

          <!-- SIDEBAR MODULES FOR INTENT AND AUTHOR STRENGTH -->
          <div class="lg:col-span-3 space-y-8">
            
            <!-- EEAT Author Snapshot -->
            <div class="border border-border bg-card rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
              <div class="flex items-center gap-2 pb-2 border-b border-border">
                <i data-lucide="shield" class="h-4 w-4 text-primary"></i>
                <h3 class="text-xs font-semibold uppercase tracking-wider text-foreground">Editorial Trust</h3>
              </div>
              <div class="text-center space-y-3">
                <div class="relative w-20 h-20 rounded-full overflow-hidden border border-primary/30 mx-auto bg-muted">
                  <div class="absolute inset-0 flex items-center justify-center bg-zinc-900 text-stone-100 font-display font-bold text-xl">IT</div>
                  <img src="/images/lead-engineer.jpg" alt="Senior Growth Engineering Lead" class="absolute inset-0 object-cover w-full h-full opacity-0" onload="this.classList.remove('opacity-0');" />
                </div>
                <div>
                  <h4 class="font-bold text-sm text-foreground">Senior Growth Engineer</h4>
                  <p class="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Technical Lead &amp; Growth Architect</p>
                </div>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  Our engineering team brings 8+ years executing high-performance technical SEO, custom web architectures and server-side tracking pipelines.
                </p>
              </div>
            </div>

            <!-- Confidential White-Label Agency Outsourcing Card -->
            <div class="border border-border bg-card rounded-xl p-5 sm:p-6 shadow-sm space-y-3 font-sans">
              <div class="flex items-center justify-between pb-2 border-b border-border">
                <div class="flex items-center gap-2">
                  <i data-lucide="briefcase" class="h-4 w-4 text-primary"></i>
                  <h3 class="text-xs font-semibold uppercase tracking-wider text-foreground">Agency White-Label</h3>
                </div>
                <span class="text-[9px] font-mono px-1.5 py-0.5 rounded border border-border bg-muted text-muted-foreground font-semibold">100% NDA</span>
              </div>
              <h4 class="font-bold text-sm text-foreground">Outsource Growth Fulfillment</h4>
              <p class="text-xs text-muted-foreground leading-relaxed">
                Digital marketing agencies worldwide outsource SEO campaigns, custom web development and paid ad tracking to Inrank under strict non-disclosure agreements.
              </p>
              <div class="pt-2">
                <a href="#contact" class="flex w-full items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border border-primary bg-white dark:bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-all text-center cursor-pointer shadow-xs">
                  <span>Partner With Inrank</span>
                  <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i>
                </a>
              </div>
            </div>

            <!-- Internal Linking Commercial Offers Map -->
            <div class="border border-border bg-card rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
              <div class="flex items-center gap-2 pb-2 border-b border-border">
                <i data-lucide="link" class="h-4 w-4 text-primary"></i>
                <h3 class="text-xs font-semibold uppercase tracking-wider text-foreground">Our Service Areas</h3>
              </div>
              <p class="text-xs text-muted-foreground leading-relaxed">
                Connect your business to modern growth frameworks. Read about our execution parameters:
              </p>
              <div class="space-y-2 text-xs font-medium">
                <a href="#/service/seo" class="flex items-center justify-between p-2 rounded bg-muted/40 hover:bg-primary/10 text-foreground transition-colors">
                  <span>SEO Solutions</span>
                  <i data-lucide="chevron-right" class="h-3 w-3"></i>
                </a>
                <a href="#/service/gmb-optimization" class="flex items-center justify-between p-2 rounded bg-muted/40 hover:bg-primary/10 text-foreground transition-colors">
                  <span>GMB & Maps Ranking</span>
                  <i data-lucide="chevron-right" class="h-3 w-3"></i>
                </a>
                <a href="#/service/website-development" class="flex items-center justify-between p-2 rounded bg-muted/40 hover:bg-primary/10 text-foreground transition-colors">
                  <span>Website Development</span>
                  <i data-lucide="chevron-right" class="h-3 w-3"></i>
                </a>
                <a href="#/service/google-ads" class="flex items-center justify-between p-2 rounded bg-muted/40 hover:bg-primary/10 text-foreground transition-colors">
                  <span>Google Ads Management</span>
                  <i data-lucide="chevron-right" class="h-3 w-3"></i>
                </a>
                <a href="#/service/shopify-development" class="flex items-center justify-between p-2 rounded bg-muted/40 hover:bg-primary/10 text-foreground transition-colors">
                  <span>Shopify Development</span>
                  <i data-lucide="chevron-right" class="h-3 w-3"></i>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  `;

  // Hydrate Lucide icons on newly injected elements immediately!
  if (typeof (window as any).lucide !== "undefined") {
    (window as any).lucide.createIcons();
  }

  // Bind real-time search logic!
  const searchInput = document.getElementById("blog-search-input") as HTMLInputElement | null;
  const articlesGrid = document.getElementById("latest-articles-grid") as HTMLDivElement | null;
  const emptyState = document.getElementById("blog-empty-state") as HTMLDivElement | null;

  if (searchInput && articlesGrid) {
    searchInput.addEventListener("input", (e) => {
      const term = (e.target as HTMLInputElement).value.toLowerCase().trim();
      
      const filtered = BLOG_POSTS.filter(blog => {
        return blog.title.toLowerCase().includes(term) ||
               blog.focusKeyword.toLowerCase().includes(term) ||
               blog.intro.toLowerCase().includes(term) ||
               blog.category.toLowerCase().includes(term) ||
               blog.relatedKeywords.some(kw => kw.toLowerCase().includes(term));
      });

      if (filtered.length > 0) {
        articlesGrid.innerHTML = filtered.map(generateBlogCardHTML).join("");
        articlesGrid.classList.remove("hidden");
        if (emptyState) emptyState.classList.add("hidden");
      } else {
        articlesGrid.classList.add("hidden");
        if (emptyState) emptyState.classList.remove("hidden");
      }

      // Re-hydrate Lucide icons in updated lists
      if (typeof (window as any).lucide !== "undefined") {
        (window as any).lucide.createIcons();
      }
    });
  }
}

// Renders an individual blog post reader view under #blog-view dynamically
function renderBlogPostView(blog: BlogPost) {
  const matchingService = SERVICES_DETAILS.find(s => s.id === blog.serviceId) || SERVICES_DETAILS.find(s => s.id === "seo") || SERVICES_DETAILS[0];
  const matchingSidebar = getServiceSidebarData(matchingService.id);

  // Update document metadata tags
  document.title = `${blog.metaTitle} | Inrank Blog`;
  const metaDescEl = document.querySelector('meta[name="description"]');
  if (metaDescEl) {
    metaDescEl.setAttribute("content", blog.metaDesc);
  }

  const container = document.getElementById("blog-view");
  if (!container) return;

  // Dynamic JSON-LD Schema Injection for Entity building
  const existingSchema = document.getElementById("dynamic-blog-post-schema");
  if (existingSchema) existingSchema.remove();

  const schemaScript = document.createElement("script");
  schemaScript.id = "dynamic-blog-post-schema";
  schemaScript.type = "application/ld+json";
  
  const schemaGraph = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://inranktech.com/blog/${blog.slug}/#blogposting`,
    "headline": blog.title,
    "description": blog.metaDesc,
    "image": `https://inranktech.com${blog.image}`,
    "datePublished": "2026-07-15",
    "author": {
      "@type": "Person",
      "name": "Senior Growth Engineer",
      "url": "https://inranktech.com/#/about-us"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Inrank Technologies",
      "logo": "https://inranktech.com/logo.png"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://inranktech.com/#/blog/${blog.slug}`
    }
  };

  schemaScript.innerHTML = JSON.stringify(schemaGraph);
  document.head.appendChild(schemaScript);

  // Parse paragraphs/bullets/headings/markdown links helper
  const renderParagraphs = (text: string) => {
    return text.split("\n\n").map(para => {
      // Inline markdown links and bold formatting
      const formatInline = (str: string) => {
        return str
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, anchor, url) => {
            const isExt = url.startsWith("http");
            return `<a href="${url}" ${isExt ? 'target="_blank" rel="noopener noreferrer"' : ""} class="text-primary font-medium hover:underline inline-flex items-center gap-0.5">${anchor}${isExt ? ' <i data-lucide="arrow-up-right" class="inline h-3 w-3"></i>' : ""}</a>`;
          })
          .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
      };

      if (para.startsWith("### ")) {
        const headingText = para.replace(/^###\s+/, "");
        return `<h3 class="font-display font-bold text-lg sm:text-xl text-foreground tracking-tight mt-6 mb-2">${formatInline(headingText)}</h3>`;
      }
      if (para.startsWith("- ") || para.startsWith("* ")) {
        const items = para.split("\n");
        return `<ul class="list-disc pl-5 my-4 space-y-1 font-sans text-muted-foreground text-sm sm:text-base leading-relaxed">
          ${items.map(i => `<li>${formatInline(i.replace(/^[-*]\s+/, ""))}</li>`).join("")}
        </ul>`;
      }
      return `<p class="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed my-4">${formatInline(para)}</p>`;
    }).join("");
  };

  // Compile Accordion FAQs
  const blogFaqsHTML = blog.faqs.map((faq, index) => `
    <div class="blog-faq-item border border-border bg-card rounded-lg px-4 sm:px-5 shadow-sm">
      <h3>
        <button type="button" class="blog-faq-trigger flex w-full items-center justify-between text-left font-display text-sm sm:text-base font-semibold py-4 text-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer">
          <span>${faq.question}</span>
          <i data-lucide="chevron-down" class="blog-faq-chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300"></i>
        </button>
      </h3>
      <div class="blog-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
        <p class="text-xs sm:text-sm text-muted-foreground pb-4 leading-relaxed">
          ${faq.answer}
        </p>
      </div>
    </div>
  `).join("");

  // Get other blog posts for internal link suggestion builder
  const otherBlogs = BLOG_POSTS.filter(b => b.id !== blog.id);
  const otherBlogsOptions = otherBlogs.map(b => `<option value="${b.slug}">${b.title}</option>`).join("");

  // Build XML Sitemap Preview helper
  const sitemapXmlPreview = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://inranktech.com/#/blog/${blog.slug}</loc>
    <lastmod>2026-07-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  // Build Layout Markup
  container.innerHTML = `
    <!-- Top Progress Scroll Indicator -->
    <div id="blog-progress-bar" class="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-75" style="width: 0%;"></div>

    <div class="relative pt-24 sm:pt-28 md:pt-36 pb-20 overflow-hidden font-sans">
      <!-- Background elements -->
      <div class="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none" style="background-image: radial-gradient(circle, var(--color-border) 1.2px, transparent 1.2px); background-size: 24px 24px;"></div>
      <div class="absolute top-1/4 -left-32 w-[450px] h-[450px] rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <!-- Breadcrumbs navigation header -->
      <div class="relative max-w-6xl mx-auto px-5 sm:px-8 mb-6 sm:mb-8">
        <div class="flex items-center gap-2 text-xs sm:text-sm">
          <a href="#" class="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Home</a>
          <span class="text-stone-500">/</span>
          <a href="#/blog" class="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Blog Hub</a>
          <span class="text-stone-500">/</span>
          <span class="font-semibold uppercase tracking-[0.1em] text-primary truncate max-w-[150px] sm:max-w-xs">${blog.title}</span>
        </div>
      </div>

      <!-- Main Layout Grid (2 Columns: 8/12 for main blog, 4/12 for interactive Rank Math Co-pilot) -->
      <div class="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT COLUMN: Core Blog Reader -->
          <article class="lg:col-span-8 space-y-8">
            
            <!-- Headers -->
            <header class="space-y-4">
              <div class="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded font-sans">
                  ${blog.category}
                </span>
                <span id="pillar-badge-ui" class="hidden px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 rounded font-sans items-center gap-1 animate-fade-in">
                  <i data-lucide="award" class="h-3 w-3"></i> Rank Math Pillar Content
                </span>
                <span>Published on ${blog.date}</span>
                <span class="h-1 w-1 rounded-full bg-border"></span>
                <span>${blog.readingTime}</span>
              </div>

              <h1 class="font-display font-bold text-3xl sm:text-5xl tracking-tight text-foreground leading-[1.1] text-balance">
                ${blog.title}
              </h1>

              <!-- Author Box -->
              <div class="flex items-center gap-3 pt-2">
                <div class="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                  <div class="absolute inset-0 flex items-center justify-center bg-zinc-900 text-stone-100 font-display font-semibold text-xs">IT</div>
                  <img src="/images/lead-engineer.jpg" alt="Senior Growth Engineer" class="absolute inset-0 object-cover w-full h-full opacity-0" onload="this.classList.remove('opacity-0');" />
                </div>
                <div>
                  <div class="text-xs font-semibold text-foreground">Written by Senior Growth Engineer</div>
                  <div class="text-[10px] text-muted-foreground">Inrank Technologies Growth Architecture &amp; Technical SEO Team</div>
                </div>
              </div>
            </header>

            <!-- Big Hero Image with Keyword-rich Alt Text and Caption -->
            <figure class="rounded-xl overflow-hidden bg-card shadow-sm border border-border">
              <div class="aspect-[16/9] w-full overflow-hidden bg-muted">
                <img src="${blog.image}" alt="${blog.title} - ${blog.focusKeyword} - Inrank Technologies" class="w-full h-full object-cover" />
              </div>
              <figcaption class="px-4 py-2.5 text-xs text-muted-foreground bg-muted/30 border-t border-border flex items-center justify-between font-sans">
                <span>Focus Subject: <strong class="text-foreground">${blog.focusKeyword}</strong></span>
                <span class="text-[10px] font-mono text-primary font-semibold">2026 Strategy Guide</span>
              </figcaption>
            </figure>

            <!-- CORE BLOG BODY -->
            <div class="prose max-w-none space-y-8 text-foreground font-sans">
              
              <!-- Direct Answer block (First 100 words including Focus Keyword) -->
              <div class="border-l-4 border-primary pl-4 sm:pl-5 italic my-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-sans bg-muted/30 py-3 pr-3 rounded-r-md">
                ${blog.intro}
              </div>

              <!-- Why Matters H2 -->
              <section class="space-y-3">
                <h2 class="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight flex items-center gap-2 border-b border-border pb-2 mt-8">
                  <span class="text-primary font-mono text-base font-semibold">#1 :</span>
                  ${blog.whyMattersHeading}
                </h2>
                ${renderParagraphs(blog.whyMatters)}
              </section>

              <!-- Mistakes H2 -->
              <section class="space-y-3">
                <h2 class="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight flex items-center gap-2 border-b border-border pb-2 mt-8">
                  <span class="text-primary font-mono text-base font-semibold">#2 :</span>
                  ${blog.mistakesHeading}
                </h2>
                ${renderParagraphs(blog.mistakes)}
              </section>

              <!-- What to do instead H2 -->
              <section class="space-y-3">
                <h2 class="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight flex items-center gap-2 border-b border-border pb-2 mt-8">
                  <span class="text-primary font-mono text-base font-semibold">#3 :</span>
                  ${blog.whatToDoHeading}
                </h2>
                ${renderParagraphs(blog.whatToDo)}
              </section>

              ${blog.inContentImage ? `
                <!-- Technical Architecture Diagram / Infographic -->
                <figure class="my-8 rounded-xl overflow-hidden border border-border bg-card shadow-sm font-sans">
                  <div class="aspect-[16/9] w-full overflow-hidden bg-muted">
                    <img
                      src="${blog.inContentImage.src}"
                      alt="${blog.inContentImage.alt}"
                      class="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption class="p-3.5 text-xs text-muted-foreground bg-muted/40 border-t border-border flex items-center justify-between">
                    <span class="flex items-center gap-1.5 font-medium text-foreground">
                      <i data-lucide="image" class="h-3.5 w-3.5 text-primary shrink-0"></i>
                      ${blog.inContentImage.caption}
                    </span>
                    <span class="text-[10px] font-mono text-primary font-bold px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 shrink-0">
                      Inrank Blueprint
                    </span>
                  </figcaption>
                </figure>
              ` : ""}

              <!-- In-Depth Technical Deep Dives (Sections) -->
              ${blog.sections && blog.sections.length > 0 ? blog.sections.map((sec, secIdx) => `
                <section class="space-y-3">
                  <h2 class="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight flex items-center gap-2 border-b border-border pb-2 mt-8">
                    <span class="text-primary font-mono text-base font-semibold">#3.${secIdx + 1} :</span>
                    ${sec.heading}
                  </h2>
                  ${renderParagraphs(sec.content)}
                </section>
              `).join("") : ""}

              <!-- Dynamic Internal Link Injection Area -->
              <div id="dynamic-internal-links" class="space-y-3"></div>

              <!-- Action Checklist / Resources H2 -->
              <section class="space-y-4">
                <h2 class="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight flex items-center gap-2 border-b border-border pb-2 mt-8">
                  <span class="text-primary font-mono text-base font-semibold">#4 :</span>
                  ${blog.checklistHeading}
                </h2>
                <ul class="space-y-3">
                  ${blog.checklistItems.map(item => `
                    <li class="flex items-start gap-3">
                      <div class="mt-1 bg-emerald-500/10 text-emerald-500 rounded-full p-0.5 shrink-0">
                        <i data-lucide="check" class="h-3.5 w-3.5"></i>
                      </div>
                      <span class="text-muted-foreground text-sm sm:text-base leading-relaxed">${item}</span>
                    </li>
                  `).join("")}
                </ul>

                <!-- High-Authority Outbound Links Box -->
                <div class="bg-muted/40 border border-border rounded-xl p-5 mt-6 space-y-3">
                  <h4 class="font-bold text-sm text-foreground flex items-center gap-2">
                    <i data-lucide="external-link" class="h-4 w-4 text-primary"></i>
                    High-Authority Outbound References (Dofollow Verified):
                  </h4>
                  <ul class="space-y-1.5 text-xs sm:text-sm">
                    ${blog.usefulResources.map(res => `
                      <li>
                        <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline inline-flex items-center gap-1.5 font-medium">
                          ${res.name} <span class="text-[9px] px-1 bg-emerald-500/10 text-emerald-500 rounded border border-emerald-500/20 font-mono">dofollow</span> <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i>
                        </a>
                      </li>
                    `).join("")}
                  </ul>
                </div>
              </section>

              <!-- Older Posts / Topic Cluster Internal Links -->
              <section class="space-y-3 border-t border-border pt-8 mt-12">
                <h2 class="font-display font-bold text-lg sm:text-xl text-foreground tracking-tight flex items-center gap-2">
                  <i data-lucide="layers" class="h-4 w-4 text-primary"></i>
                  Topic Cluster: Related Organic Guides
                </h2>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  These internal articles are interlinked to distribute PageRank authority and help Google crawlers discover the depth of our content system:
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  ${otherBlogs.slice(0, 2).map(ob => `
                    <a href="#/blog/${ob.slug}" class="block p-3 rounded-lg border border-border bg-white dark:bg-card hover:bg-white dark:hover:bg-card hover:border-primary/40 hover:shadow-sm transition-all group">
                      <div class="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">${ob.category}</div>
                      <h4 class="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">${ob.title}</h4>
                      <div class="text-[10px] text-muted-foreground mt-2 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 bg-primary/5 text-primary rounded">Internal link</span>
                        <span>${ob.readingTime}</span>
                      </div>
                    </a>
                  `).join("")}
                </div>
              </section>

              <!-- Accordion FAQ section -->
              <section class="space-y-4 border-t border-border pt-8 mt-12">
                <h2 class="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight flex items-center gap-2 border-b border-border pb-2">
                  <span class="text-primary font-mono text-base font-semibold">#5 :</span>
                  Expert FAQs
                </h2>
                <div class="space-y-3">
                  ${blogFaqsHTML}
                </div>
              </section>

            </div>

            <!-- Elegant Commercial Conversion CTA Component -->
            <section class="border border-slate-200 bg-gradient-to-br from-indigo-50/50 via-white to-emerald-50/50 rounded-2xl p-6 sm:p-10 text-center shadow-md space-y-5 max-w-2xl mx-auto mt-16">
              <div class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <i data-lucide="sparkles" class="h-6 w-6"></i>
              </div>
              <div class="space-y-2">
                <h3 class="font-display font-bold text-2xl text-slate-900">Let's Build Growth That Converts</h3>
                <p class="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-sans">
                  We tie every technical decision directly back to search rankings, conversion paths and business revenue metrics. Set up a consultation to discuss your roadmap.
                </p>
              </div>
              <div class="pt-2">
                <a href="${blog.ctaLink}" class="inline-flex items-center justify-center gap-2 px-6 h-12 text-sm font-semibold rounded-md bg-primary text-primary-foreground shadow-md hover:bg-primary/95 transition-all cursor-pointer font-sans">
                  ${blog.ctaText}
                  <i data-lucide="arrow-right" class="h-4 w-4"></i>
                </a>
              </div>
            </section>

          </article>

          <!-- RIGHT COLUMN: High-Converting Strategy CTA Sidebar -->
          <aside class="lg:col-span-4 lg:sticky lg:top-24 mt-8 lg:mt-0 space-y-6">
            
            <!-- Focused Conversion Audit CTA Card -->
            <div class="relative overflow-hidden border border-primary/25 bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl p-6 sm:p-7 shadow-lg space-y-5 font-sans">
              <!-- Decorative Ambient Glow -->
              <div class="absolute -right-8 -top-8 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div class="flex items-center justify-between border-b border-border/80 pb-3">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  <i data-lucide="sparkles" class="h-3 w-3"></i>
                  ${matchingService.title} Audit
                </span>
                <span class="text-[9px] font-mono px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 font-bold">100% Free</span>
              </div>

              <div class="space-y-2">
                <h3 class="font-display font-bold text-lg sm:text-xl text-foreground leading-snug">
                  Get a Free Strategy Audit for Your Business
                </h3>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  Our senior growth engineers will analyze your top competitors, search traffic gaps and conversion leaks with a 45-point technical inspection.
                </p>
              </div>

              <!-- Checklist of Deliverables -->
              <div class="space-y-2.5 pt-2 border-t border-border/60">
                <div class="flex items-start gap-2.5 text-xs text-foreground font-medium">
                  <i data-lucide="check-circle-2" class="h-4 w-4 text-emerald-500 shrink-0 mt-0.5"></i>
                  <span>3-Competitor Traffic & Keyword Gap Scan</span>
                </div>
                <div class="flex items-start gap-2.5 text-xs text-foreground font-medium">
                  <i data-lucide="check-circle-2" class="h-4 w-4 text-emerald-500 shrink-0 mt-0.5"></i>
                  <span>Technical Funnel & Core Web Vitals Review</span>
                </div>
                <div class="flex items-start gap-2.5 text-xs text-foreground font-medium">
                  <i data-lucide="check-circle-2" class="h-4 w-4 text-emerald-500 shrink-0 mt-0.5"></i>
                  <span>Actionable 90-Day Compounding Growth Plan</span>
                </div>
              </div>

              <!-- Primary Action Buttons -->
              <div class="pt-3 space-y-2.5">
                <a
                  href="#contact"
                  class="flex w-full items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/95 transition-all shadow-md hover:shadow-lg text-center cursor-pointer"
                >
                  <span>Request Free Strategy Audit</span>
                  <i data-lucide="arrow-right" class="h-4 w-4"></i>
                </a>

                <a
                  href="https://wa.me/917038612280"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex w-full items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border border-border bg-white dark:bg-card hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-foreground transition-all text-center cursor-pointer"
                >
                  <i data-lucide="message-circle" class="h-4 w-4 text-emerald-500"></i>
                  <span>Chat on WhatsApp (+91 70386 12280)</span>
                </a>
              </div>

              <!-- Trust Footer -->
              <div class="pt-3 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground font-sans">
                <span class="flex items-center gap-1">
                  <i data-lucide="shield-check" class="h-3.5 w-3.5 text-primary"></i> 100% Strict NDA
                </span>
                <span>Zero Sales Pitch Talk</span>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  `;

  // Hydrate Lucide icons on newly injected elements immediately!
  if (typeof (window as any).lucide !== "undefined") {
    (window as any).lucide.createIcons();
  }

  // Hydrate local blog FAQs accordion triggers
  const bFaqItems = container.querySelectorAll(".blog-faq-item");
  bFaqItems.forEach((item) => {
    const trigger = item.querySelector(".blog-faq-trigger") as HTMLButtonElement | null;
    const body = item.querySelector(".blog-faq-body") as HTMLDivElement | null;
    const chevronIcon = item.querySelector(".blog-faq-chevron") as SVGElement | null;

    if (trigger && body) {
      trigger.addEventListener("click", () => {
        const isOpen = !body.classList.contains("max-h-0");

        // Close all other blog FAQs
        bFaqItems.forEach((other) => {
          const oBody = other.querySelector(".blog-faq-body") as HTMLDivElement | null;
          const oChevron = other.querySelector(".blog-faq-chevron") as SVGElement | null;
          if (oBody) {
            oBody.classList.remove("max-h-[300px]", "opacity-100");
            oBody.classList.add("max-h-0", "opacity-0");
          }
          if (oChevron) oChevron.classList.remove("rotate-180", "text-primary");
        });

        // Toggle focus
        if (!isOpen) {
          body.classList.remove("max-h-0", "opacity-0");
          body.classList.add("max-h-[300px]", "opacity-100");
          if (chevronIcon) chevronIcon.classList.add("rotate-180", "text-primary");
        }
      });
    }
  });

  // Scroll depth tracking and progress bar handler
  const handleScrollDepth = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / docHeight) * 100;
    const pBar = document.getElementById("blog-progress-bar");
    if (pBar) {
      pBar.style.width = `${scrollPercent}%`;
    }
  };

  // Add event listener for scroll progress bar tracking
  window.addEventListener("scroll", handleScrollDepth);
  // Initial compute
  setTimeout(handleScrollDepth, 100);
}

// Global Launcher Mount Listener
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initFaqs();
  initContactForm();

  // Modern UI Magic & Interactive Features
  initGlobalScrollProgress();
  initSpotlightCards();
  initAnimatedCounters();
  initRoiForecaster();

  // Watch for Direct Route Changes & init router on initial load
  window.addEventListener("hashchange", handleHashRouting);
  handleHashRouting();

  // Build Lucide elements immediately across parent HTML structure
  if (typeof (window as any).lucide !== "undefined") {
    (window as any).lucide.createIcons();
  }
});
