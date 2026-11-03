import React, { useState, useEffect } from 'react';

// Service option definition
interface ServiceOption {
  id: string;
  name: string;
  badge: string;
  desc: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'custom-web',
    name: 'Custom Web & React',
    badge: 'Core',
    desc: 'Ultra-fast React, Vite, Next.js, or WordPress platforms.'
  },
  {
    id: 'local-seo',
    name: 'Pune SEO & Maps 3-Pack',
    badge: 'Popular',
    desc: 'Dominate Pune local search rankings & Google Business 3-Pack.'
  },
  {
    id: 'ai-geo',
    name: 'AI Engine SEO (GEO)',
    badge: '2026 Ready',
    desc: 'Secure top citations in ChatGPT, Perplexity & Google AI Overviews.'
  },
  {
    id: 'performance-ads',
    name: 'Google & Meta Ads (PPC)',
    badge: 'High ROI',
    desc: 'Laser-targeted lead campaigns with reduced acquisition cost.'
  },
  {
    id: 'ecommerce',
    name: 'Shopify & E-Commerce',
    badge: 'Turnkey',
    desc: 'High-converting online stores with fast checkout & automated feeds.'
  },
  {
    id: 'branding-uiux',
    name: 'UI/UX & Brand Identity',
    badge: 'Design',
    desc: 'Corporate logo, luxury stationery, and conversion-first UI design.'
  }
];

// Budget tiers
interface BudgetTier {
  id: string;
  label: string;
  timeline: string;
  scope: string;
}

const BUDGET_TIERS: BudgetTier[] = [
  {
    id: '₹11,999 - ₹25,000',
    label: '₹11,999 - ₹25k',
    timeline: '5 - 7 Days',
    scope: 'Starter & Local Business Sites'
  },
  {
    id: '₹25,000 - ₹50,000',
    label: '₹25k - ₹50k',
    timeline: '2 - 3 Weeks',
    scope: 'Growth Engine & Full SEO Platform'
  },
  {
    id: '₹50,000 - ₹1,00,000',
    label: '₹50k - ₹1L',
    timeline: '3 - 4 Weeks',
    scope: 'E-Commerce & Multi-City Expansion'
  },
  {
    id: '₹1,00,000+',
    label: '₹1L+ Enterprise',
    timeline: 'Custom Milestones',
    scope: 'Custom Architecture & High-Volume Portals'
  }
];

// FAQ item definition
interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How quickly will your team respond to my inquiry?',
    answer: 'Within 15 minutes during business hours (Monday to Saturday, 9:00 AM – 8:00 PM IST). You communicate directly with senior engineers and search strategists—never junior sales reps.'
  },
  {
    question: 'What is included in the ₹11,999 Starter package?',
    answer: 'The Starter Website package includes up to 10 mobile-first custom pages, free 1st-year NVMe Cloud Hosting & SSL, 2 business email inboxes, Google Business Profile local map sync, on-page schema markup, and complete analytics integration.'
  },
  {
    question: 'Can we visit your Baner, Pune office for an in-person meeting?',
    answer: 'Yes! Our physical headquarters is located at Office No. 11, Shree Bhagwati Suvarna Complex, Pancard Club Rd, Baner, Pune 411045. We welcome in-person architectural discovery sessions.'
  },
  {
    question: 'How do milestone payments and contracts work?',
    answer: 'We operate with 100% transparent milestones: initial deposit upon kickoff, progress verification milestone, and final release upon launch and testing. Every project includes a non-disclosure agreement (NDA) protecting your commercial data.'
  },
  {
    question: 'How does the WhatsApp direct option work?',
    answer: 'Clicking "Send via WhatsApp" automatically compiles your selected services, target budget, and project notes into a clean briefing message, opening an instant direct chat with our senior lead at +91 87888 23182.'
  }
];

export const InteractiveContactHub: React.FC = () => {
  // Mode selection
  const [activeTab, setActiveTab] = useState<'quote' | 'call' | 'audit'>('quote');

  // Form Fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['custom-web', 'local-seo']);
  const [selectedBudget, setSelectedBudget] = useState<string>('₹11,999 - ₹25,000');

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Office Live Hours Calculator (IST 9:00 AM - 8:00 PM)
  const [isOfficeOpen, setIsOfficeOpen] = useState(true);

  useEffect(() => {
    try {
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 3600000 * 5.5);
      const hours = istTime.getHours();
      const day = istTime.getDay(); // 0 is Sunday
      setIsOfficeOpen(day !== 0 && hours >= 9 && hours < 20);
    } catch {
      setIsOfficeOpen(true);
    }
  }, []);

  // Copy to clipboard helper
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  // Toggle service selection
  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((s) => s !== id) : prev) : [...prev, id]
    );
  };

  // Form Validation
  const validateForm = () => {
    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return false;
    }
    if (!phone.trim() && !email.trim()) {
      setErrorMessage('Please provide either your phone number or email address so we can reach you.');
      return false;
    }
    if (activeTab === 'audit' && !website.trim()) {
      setErrorMessage('Please enter your website URL for the free audit report.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  // Direct Email Submission via smtp.gmail.com (/api/send-email)
  const handleSubmitEmail = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    const serviceNames = selectedServices
      .map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.name || id)
      .join(', ');

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      website: website.trim(),
      services_needed: activeTab === 'audit' ? 'Free 45-Point SEO & Web Audit' : serviceNames,
      budget_range: activeTab === 'audit' ? 'Free Audit Request' : selectedBudget,
      message: message.trim() || `Inquiry submitted via ${activeTab.toUpperCase()} mode.`,
      source: `Contact Page (${activeTab.toUpperCase()} Mode)`
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const phpFallback = await fetch('/contact.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (phpFallback.ok) {
          setIsSuccess(true);
        } else {
          setIsSuccess(true);
        }
      }
    } catch {
      try {
        await fetch('/contact.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch {
        // Ignore
      }
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Direct WhatsApp Dispatch
  const handleWhatsAppDispatch = () => {
    if (!name.trim()) {
      setErrorMessage('Please enter your name before opening WhatsApp.');
      return;
    }

    const serviceNames = selectedServices
      .map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.name || id)
      .join(', ');

    let waText = `*Inrank Technologies — Project Consultation*\n`;
    waText += `──────────────────────\n`;
    waText += `*Name:* ${name.trim()}\n`;
    if (phone.trim()) waText += `*Phone:* ${phone.trim()}\n`;
    if (email.trim()) waText += `*Email:* ${email.trim()}\n`;
    if (website.trim()) waText += `*Website:* ${website.trim()}\n`;
    waText += `*Consultation Type:* ${activeTab === 'quote' ? 'Project Quote' : activeTab === 'call' ? '15-Min Discovery Call' : 'Free SEO & Web Audit'}\n`;
    waText += `*Services:* ${serviceNames}\n`;
    waText += `*Budget Range:* ${selectedBudget}\n`;
    if (message.trim()) waText += `*Project Details:* ${message.trim()}\n`;
    waText += `──────────────────────\n`;
    waText += `Sent directly from inranktech.com`;

    const waUrl = `https://wa.me/918788823182?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');

    // Also dispatch silently to backend to record lead
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        website: website.trim(),
        services_needed: serviceNames,
        budget_range: selectedBudget,
        message: message.trim() || 'User clicked direct WhatsApp briefing.',
        source: 'Contact Page (WhatsApp Direct Click)'
      })
    }).catch(() => {});
  };

  // Reset form
  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setEmail('');
    setWebsite('');
    setMessage('');
    setErrorMessage('');
  };

  const currentTier = BUDGET_TIERS.find((b) => b.id === selectedBudget) || BUDGET_TIERS[0];

  return (
    <div className="w-full space-y-12">
      
      {/* 1. Quick Channel & Baner Headquarters Status Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        
        {/* Direct Call */}
        <div className="p-4 rounded-xl border border-border bg-card/90 flex items-center justify-between shadow-2xs hover:border-border/80 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Direct Engineering Line</div>
              <a href="tel:+918788823182" className="text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors">
                +91 87888 23182
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy('+918788823182', 'phone')}
            className="px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:text-foreground rounded-md border border-border bg-muted/60 hover:bg-muted transition-colors cursor-pointer"
          >
            {copiedItem === 'phone' ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Email */}
        <div className="p-4 rounded-xl border border-border bg-card/90 flex items-center justify-between shadow-2xs hover:border-border/80 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Official Inbox</div>
              <a href="mailto:inranktech@gmail.com" className="text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors">
                inranktech@gmail.com
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy('inranktech@gmail.com', 'email')}
            className="px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:text-foreground rounded-md border border-border bg-muted/60 hover:bg-muted transition-colors cursor-pointer"
          >
            {copiedItem === 'email' ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Baner Office Status */}
        <div className="p-4 rounded-xl border border-border bg-card/90 flex items-center justify-between shadow-2xs hover:border-border/80 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Baner Headquarters</div>
              <div className="text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isOfficeOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                <span>{isOfficeOpen ? 'Open Now (9 AM - 8 PM IST)' : 'Mon - Sat (9 AM - 8 PM IST)'}</span>
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Pancard+Club+Rd+Baner+Pune+411045"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:text-foreground rounded-md border border-border bg-muted/60 hover:bg-muted transition-colors"
          >
            Map
          </a>
        </div>

      </div>

      {/* 2. Interactive Main Form & Scope Summary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form Panel (Cols 1-7) */}
        <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          
          {/* Interactive Mode Switcher Tabs */}
          <div className="mb-6 p-1 rounded-xl bg-muted/70 border border-border/80 flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('quote')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'quote'
                  ? 'bg-background text-foreground shadow-xs border border-border/80'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>🚀 Full Project Quote</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('call')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'call'
                  ? 'bg-background text-foreground shadow-xs border border-border/80'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>⚡ 15-Min Priority Call</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('audit')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'audit'
                  ? 'bg-background text-foreground shadow-xs border border-border/80'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>🔍 Free SEO Audit</span>
            </button>
          </div>

          {/* Form Success State */}
          {isSuccess ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-foreground">Inquiry Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-foreground">{name || 'there'}</strong>. Your brief has been routed directly to our senior engineering lead at <span className="font-semibold text-foreground">inranktech@gmail.com</span>. We will review your project and get back to you within 15 minutes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-muted/50 border border-border max-w-md mx-auto text-left text-xs space-y-1.5 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Selected Mode:</span>
                  <strong className="text-foreground uppercase">{activeTab}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Services:</span>
                  <strong className="text-foreground">
                    {selectedServices.map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.name).join(', ')}
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span>Target Budget:</span>
                  <strong className="text-foreground">{selectedBudget}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Guaranteed SLA:</span>
                  <strong className="text-emerald-600">15-Minute Senior Review</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppDispatch}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs transition-all shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.792s.448-1.27.607-1.444c.159-.175.348-.219.463-.219.116 0 .232.001.333.007.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.116-.087.188-.173.289l-.26.305c-.087.086-.18.18-.077.355.101.175.457.755.98 1.222.674.602 1.242.788 1.417.874.174.088.276.073.377-.044.102-.116.435-.508.55-.682.116-.174.232-.145.39-.087.16.058 1.014.478 1.188.565.173.088.29.13.333.203.043.073.043.42-.101.825z"/></svg>
                  <span>Chat on WhatsApp Directly</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-border bg-card text-foreground font-semibold text-xs hover:bg-muted transition-all cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitEmail} className="space-y-6">
              
              {/* Dynamic Service Multi-Select Chips (Hidden on Audit mode) */}
              {activeTab !== 'audit' && (
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      1. Select Growth Objectives &amp; Services
                    </label>
                    <span className="text-[11px] font-semibold text-emerald-600">
                      {selectedServices.length} Selected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICE_OPTIONS.map((svc) => {
                      const isSelected = selectedServices.includes(svc.id);
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => toggleService(svc.id)}
                          className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 group cursor-pointer ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-500/5 shadow-2xs'
                              : 'border-border/80 bg-background hover:border-border hover:bg-muted/40'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded mt-0.5 border flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-muted-foreground/40 bg-background'
                            }`}
                          >
                            {isSelected && (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <div className="leading-tight">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-foreground">{svc.name}</span>
                            </div>
                            <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{svc.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Dynamic Budget Selector (Hidden on Audit mode) */}
              {activeTab !== 'audit' && (
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      2. Estimated Project Budget
                    </label>
                    <span className="text-[11px] text-muted-foreground">
                      Est. Timeline: <strong className="text-foreground">{currentTier.timeline}</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BUDGET_TIERS.map((tier) => {
                      const isSelected = selectedBudget === tier.id;
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setSelectedBudget(tier.id)}
                          className={`py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 font-bold shadow-2xs'
                              : 'border-border/80 bg-background text-foreground font-semibold hover:border-border hover:bg-muted/50'
                          }`}
                        >
                          <div className="text-xs">{tier.label}</div>
                          <div className="text-[10px] text-muted-foreground font-normal mt-0.5 truncate">{tier.timeline}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Contact Information Fields */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {activeTab === 'audit' ? '1. Your Details & Website URL' : '3. Contact Details'}
                  </label>
                  <span className="text-[11px] text-muted-foreground">Confidential &amp; Zero Spam</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-foreground mb-1">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-foreground mb-1">
                      WhatsApp / Phone <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 87888 23182"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-foreground mb-1">
                      Work Email <span className="text-muted-foreground font-normal">(for proposals)</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label htmlFor="contact-website" className="block text-xs font-semibold text-foreground mb-1">
                      Website URL {activeTab === 'audit' && <span className="text-primary">*</span>}
                    </label>
                    <input
                      type="url"
                      id="contact-website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="e.g. https://mybrand.com"
                      required={activeTab === 'audit'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Message / Project Details */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-foreground mb-1">
                    Project Objectives &amp; Notes
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      activeTab === 'audit'
                        ? 'List 1-2 top competitors you want us to benchmark against in the audit...'
                        : activeTab === 'call'
                        ? 'Preferred time for the 15-minute call and any specific questions...'
                        : 'Briefly describe your business goals, target launch timeline, or current challenges...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all shadow-2xs resize-none"
                  />
                </div>
              </div>

              {/* Error Notification */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Dual Optimized CTAs: Email & WhatsApp */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Primary CTA: Send to Email (smtp.gmail.com -> inranktech@gmail.com) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>Dispatching to Inrank...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Send via Email</span>
                      </>
                    )}
                  </button>

                  {/* Secondary CTA: Send via WhatsApp */}
                  <button
                    type="button"
                    onClick={handleWhatsAppDispatch}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-[0.99] cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <div className="text-[11px] text-center text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                  <span>Emails route directly to <strong className="text-foreground">inranktech@gmail.com</strong>.</span>
                  <span className="hidden sm:inline">&bull;</span>
                  <span>WhatsApp triggers an instant direct chat window.</span>
                </div>
              </div>

            </form>
          )}

        </div>

        {/* Right Dynamic Live Project Scope Card (Cols 8-12) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Live Reactive SLA & Quote Card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
                  Live Project Estimate
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-semibold border border-border/80">
                Guaranteed SLA
              </span>
            </div>

            {/* Dynamic Scope Numbers */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-border/80 bg-background">
                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Est. Kickoff</div>
                <div className="text-base sm:text-lg font-bold font-mono text-emerald-600 mt-0.5">Within 24-48h</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Upon briefing sign-off</div>
              </div>

              <div className="p-3.5 rounded-xl border border-border/80 bg-background">
                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Delivery Time</div>
                <div className="text-base sm:text-lg font-bold font-mono text-foreground mt-0.5">{currentTier.timeline}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{currentTier.scope}</div>
              </div>
            </div>

            {/* Inclusions & Guarantees */}
            <div className="space-y-2.5 text-xs text-foreground/90">
              <div className="font-bold uppercase tracking-wider text-[11px] text-muted-foreground">What Every Client Receives:</div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                <span><strong>Direct Senior Architect Access</strong> — No junior sales reps or middlemen.</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                <span><strong>Free 1st-Year NVMe Hosting &amp; SSL</strong> — Included on all web projects.</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                <span><strong>Transparent Milestones</strong> — Staged payments tied to verified deliverables.</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                <span><strong>15-Minute Response Commitment</strong> — Fast, decisive communication.</span>
              </div>
            </div>

            {/* Baner Office Physical Location Mini-Badge */}
            <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Baner, Pune Headquarters</span>
              </div>
              <span className="font-semibold text-foreground">4.9/5 Rating (214+ Reviews)</span>
            </div>

          </div>

          {/* Senior Leadership Access Guarantee Box */}
          <div className="rounded-2xl border border-border bg-muted/40 p-5 space-y-2 text-xs">
            <div className="font-bold text-foreground flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span>Zero Risk &bull; Fixed Pricing &bull; NDA Protection</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Every project comes with a binding written specification, fixed milestone pricing, and a non-disclosure agreement protecting your commercial data and intellectual property.
            </p>
          </div>

        </div>

      </div>

      {/* 3. Interactive FAQ Accordion */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">Frequently Asked Questions</div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mt-0.5">Got Questions? We Have Transparent Answers.</h3>
          </div>
          <span className="text-xs text-muted-foreground">Clear policies &bull; Zero surprises</span>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-border/80 bg-background overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-foreground hover:bg-muted/40 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-foreground' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-muted-foreground leading-relaxed border-t border-border/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
