// Modern Interactive UI Enhancements ("UI Magic") for Inrank Technologies

/**
 * 1. Global Reading & Scroll Progress Indicator
 * Updates the width of #global-scroll-progress as the user scrolls through any page or view.
 */
export function initGlobalScrollProgress() {
  const progressBar = document.getElementById("global-scroll-progress");
  const navbar = document.getElementById("navbar");

  const updateScroll = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollPercent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));

    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Dynamic glass header elevation
    if (navbar) {
      if (scrollTop > 24) {
        navbar.classList.add("shadow-sm", "border-b", "border-border/80");
      } else {
        navbar.classList.remove("shadow-sm");
      }
    }
  };

  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();
}

/**
 * 2. Mouse Tracking Spotlight Effect on Cards
 * Dynamically computes CSS variables --mouse-x and --mouse-y on hover for .spotlight-card elements
 */
export function initSpotlightCards() {
  const cards = document.querySelectorAll<HTMLElement>(".spotlight-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/**
 * 3. Animated Metric Counters
 * Animates numbers smoothly when they enter the viewport
 */
export function initAnimatedCounters() {
  const counterElements = document.querySelectorAll<HTMLElement>(".counter-num");
  if (!counterElements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const targetStr = el.getAttribute("data-target");
          if (!targetStr) return;

          const target = parseFloat(targetStr);
          const prefix = el.getAttribute("data-prefix") || "";
          const suffix = el.getAttribute("data-suffix") || "";
          const decimalPlaces = parseInt(el.getAttribute("data-decimal") || "0", 10);

          let start = 0;
          const duration = 1400; // ms
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (target - start) * easeOut;

            el.textContent = `${prefix}${decimalPlaces > 0 ? current.toFixed(decimalPlaces) : Math.round(current)}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${prefix}${decimalPlaces > 0 ? target.toFixed(decimalPlaces) : target}${suffix}`;
            }
          };

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.25 }
  );

  counterElements.forEach((el) => observer.observe(el));
}

/**
 * 4. Interactive AI SEO & Speed Scanner
 * Handles URL analysis simulation, real-time diagnostic logs, circular gauges and audit recommendations
 */
export function initAiScanner() {
  // AI Audit scanner feature removed per user request
}

/**
 * 5. Interactive Growth Pipeline & ROAS Forecaster
 * Dynamically computes estimated impressions, targeted clicks, qualified inquiries and projected ROAS
 */
export function initRoiForecaster() {
  const slider = document.getElementById("roi-budget-slider") as HTMLInputElement | null;
  const budgetDisplay = document.getElementById("roi-budget-display");
  const industrySelect = document.getElementById("roi-industry-select") as HTMLSelectElement | null;
  const reachVal = document.getElementById("roi-reach-val");
  const clicksVal = document.getElementById("roi-clicks-val");
  const leadsVal = document.getElementById("roi-leads-val");
  const multipleVal = document.getElementById("roi-multiple-val");
  const lockBtn = document.getElementById("roi-lock-btn");

  if (!slider) return;

  const calculateProjections = () => {
    const budget = parseInt(slider.value, 10);
    const industry = industrySelect ? industrySelect.value : "clinic";

    // Format currency display
    if (budgetDisplay) {
      if (budget >= 100000) {
        const inLakhs = (budget / 100000).toFixed(1).replace(".0", "");
        budgetDisplay.textContent = `₹${inLakhs} Lakh / month`;
      } else {
        budgetDisplay.textContent = `₹${budget.toLocaleString("en-IN")} / month`;
      }
    }

    // Benchmark Multipliers
    let impPerRupee = 0.55;
    let avgCpc = 24;
    let convRateMin = 0.032;
    let convRateMax = 0.048;
    let roasMin = 3.2;
    let roasMax = 4.4;

    if (industry === "d2c") {
      impPerRupee = 0.85;
      avgCpc = 16;
      convRateMin = 0.024;
      convRateMax = 0.038;
      roasMin = 2.8;
      roasMax = 4.1;
    } else if (industry === "b2b") {
      impPerRupee = 0.38;
      avgCpc = 38;
      convRateMin = 0.045;
      convRateMax = 0.065;
      roasMin = 3.5;
      roasMax = 5.2;
    }

    const impressions = Math.round(budget * impPerRupee);
    const clicks = Math.round(budget / avgCpc);
    const leadsMin = Math.max(1, Math.round(clicks * convRateMin));
    const leadsMax = Math.max(leadsMin + 5, Math.round(clicks * convRateMax));

    if (reachVal) reachVal.textContent = `${impressions.toLocaleString("en-IN")}+`;
    if (clicksVal) clicksVal.textContent = `${clicks.toLocaleString("en-IN")}+`;
    if (leadsVal) leadsVal.textContent = `${leadsMin} - ${leadsMax}`;
    if (multipleVal) multipleVal.textContent = `${roasMin}x - ${roasMax}x`;
  };

  slider.addEventListener("input", calculateProjections);
  if (industrySelect) {
    industrySelect.addEventListener("change", calculateProjections);
  }

  calculateProjections();

  // "Lock In This Forecast" CTA
  if (lockBtn) {
    lockBtn.addEventListener("click", () => {
      const budget = slider.value;
      const industry = industrySelect ? industrySelect.options[industrySelect.selectedIndex].text : "Healthcare";
      const leads = leadsVal?.textContent || "60-80";
      const roas = multipleVal?.textContent || "3.5x";

      const budgetSelect = document.getElementById("form-budget") as HTMLSelectElement | null;
      const messageField = document.getElementById("form-message") as HTMLTextAreaElement | null;
      const contactSec = document.getElementById("contact");

      if (budgetSelect) {
        const num = parseInt(budget, 10);
        if (num <= 50000) budgetSelect.value = "INR 25,000 - 50,000";
        else if (num <= 100000) budgetSelect.value = "INR 50,000 - 1,00,000";
        else budgetSelect.value = "INR 1,00,000+";
      }

      if (messageField) {
        messageField.value = `Applied from Growth Forecaster:\n- Industry: ${industry}\n- Monthly Investment: ₹${parseInt(budget, 10).toLocaleString("en-IN")}\n- Target Leads: ${leads}\n- Target ROAS: ${roas}\nLooking forward to reviewing the bespoke growth blueprint with Inrank.`;
      }

      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
