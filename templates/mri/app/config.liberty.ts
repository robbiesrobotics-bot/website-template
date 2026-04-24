// ============================================================
// WEBSITE TEMPLATE CONFIG — A.L.I.C.E. Framework
// Liberty Roofing & Restoration
//
// HOW TO USE THIS FILE:
// Replace every value below with the new company's information.
// All content is centralized here — the page.tsx template
// reads from this file and never needs to be edited directly.
// ============================================================

// ── COMPANY IDENTITY ────────────────────────────────────────
export const company = {
  name: "Liberty Roofing & Restoration",
  tagline: "Your Advocate in Insurance Restoration",
  establishedYear: 2010,
  phone: "720-555-0199",
  sms: "720-555-0100",
  email: "info@libertyroofco.com",
  website: "https://libertyroofco.com",
  address: "4200 Morrison Rd, Denver, CO 80219",
  areaServed: "Denver and all of Colorado",
  licenses: "Licensed & Bonded in Colorado",
  // Stats (displayed in credibility bar)
  stats: {
    yearsInBusiness: "15+",
    projectsCompleted: "8,000+",
  },
  // Company initials for avatar (e.g. owner headshot fallback)
  initials: "MR",
};

// ── BRAND COLORS ───────────────────────────────────────────
// CSS variable names in globals.css: --primary, --secondary, --accent
export const colors = {
  // Primary = CTA buttons, section labels, badge backgrounds
  primary: "#1B4B8E",    // royal blue
  // Secondary = section backgrounds, nav pills, muted elements
  secondary: "#4A7C59",   // forest green
  // Dark = header, footer, dark section backgrounds
  dark: "#1C2833",        // dark slate
  // Accent = light section backgrounds
  accent: "#F0F4F8",     // light blue-gray
  // Blue-gray for body text on light backgrounds
  blueGray: "#7B8FA1",
  // Light background (white)
  light: "#ffffff",
  // Warm light background
  warm: "#FAFBFC",
};

// ── HEADER / NAV ───────────────────────────────────────────
export const header = {
  logo: "/modern_logo.png",       // path to logo image in /public
  logoAlt: "Liberty Roofing & Restoration",
  phone: "720-555-0199",
  phoneDisplay: "720-555-0199",
  ctaButton: "Free Inspection",
  navLinks: [
    { label: "Damage Types", id: "damage", color: "primary" },
    { label: "Our Process",  id: "process", color: "secondary" },
    { label: "Residential",  id: "residential", color: "primary" },
    { label: "Certifications",id: "why", color: "secondary" },
    { label: "Warranties",   id: "warranties", color: "primary" },
    { label: "FAQ",          id: "faq", color: "secondary" },
  ],
};

// ── HERO / SHOWCASE BANNER ─────────────────────────────────
export const hero = {
  badge: "Trusted Since 2010",
  image: "/top-banner.jpg",       // hero background image
  imageAlt: "Liberty Roofing & Restoration — Expert restoration in Denver and across Colorado",
  sectionLabel: "Trusted Since 2010",
  headline: "Your Advocate in Insurance Restoration",
  sub: "8,000+ projects completed. Insurance claims handled daily. No storm chasers. No pressure. Just honest work backed by Colorado Rockies-sized reliability.",
  ctaPrimary: { label: "Call 720-555-0199", href: "tel:7205550199" },
  ctaSecondary: { label: "View Our Work", href: "https://libertyroofco.com" },
  urgentLine: "24/7 Emergency Storm Team — On Standby",
  smsNumber: "720-555-0100",
};

// ── FULL HERO SECTION (dark dramatic) ─────────────────────
export const heroFull = {
  badge: "Trusted by 8,000+ Colorado homeowners",
  badgeIcon: "star", // uses star SVG
  headline: "Expert Restoration",
  headlineAccent: "Backed by 15+ Years",
  sub: "Liberty Roofing & Restoration provides quality property restoration services in Denver and across Colorado — with a focus on the insurance industry.",
  sub2: "We partner with homeowners — not against them. No storm chasers. No pressure. Just honest, expert restoration backed by 15+ years of Colorado craftsmanship.",
  ctaPrimary: { label: "Schedule Free Inspection", href: "tel:7205550199" },
  ctaSecondary: { label: "Get Free Quote", href: "#", onClick: "openLeadForm" },
  certifications: [
    "BBB A+ Accredited",
    "GAF Master Elite",
    "HAAG Certified",
  ],
};

// ── PROCESS STEPS (3-step overview) ───────────────────────
export const processOverview = {
  headline: "What Happens When You Call",
  sub: "Free, no-obligation. Call takes 2 minutes.",
  steps: [
    {
      step: "1",
      title: "Call or Submit Form",
      desc: "Reach us by phone, text, or online form. We respond within 1 hour — often within minutes.",
      icon: "phone",
    },
    {
      step: "2",
      title: "Free Inspection",
      desc: "We meet you on-site, document all damage using industry-leading tools, and identify hidden issues adjusters often miss — including Colorado's unique hail and wind damage patterns.",
      icon: "search",
    },
    {
      step: "3",
      title: "We Handle Everything",
      desc: "We create the Xactimate estimate, meet your adjuster on-site, and manage the full insurance claim from approval to completion.",
      icon: "check",
    },
  ],
  cta: { label: "Call Now: 720-555-0199", href: "tel:7205550199" },
};

// ── DAMAGE TYPES (4-column grid) ──────────────────────────
export const damageTypes = [
  {
    name: "Hail",
    img: "/damage/hail.jpg",
    desc: "Colorado's violent hailstorms are among the most damaging in the country — capable of destroying roofs, siding, and gutters in minutes. Most hail damage is covered by homeowners insurance.",
    causes: "Severe thunderstorms, Front Range supercells, late-season storms",
    link: "https://libertyroofco.com",
  },
  {
    name: "Wind",
    img: "/damage/wind.jpg",
    desc: "High winds from Colorado's infamous microbursts and Chinook events can lift, tear, or completely remove shingles and siding. Wind damage claims are among the most common in our region.",
    causes: "Microbursts, Front Range gusts, straight-line winds, tornado alley proximity",
    link: "https://libertyroofco.com",
  },
  {
    name: "Flood",
    img: "/damage/flood.jpg",
    desc: "Water is deceptive — it penetrates structural cavities and needs sophisticated moisture detection. Denver's clay-heavy soils can make drainage issues worse. We partner with removal services to ensure mold won't return.",
    causes: "Frozen pipes, plumbing issues, flash flooding, heavy mountain rain, snowmelt",
    link: "https://libertyroofco.com/flood",
  },
  {
    name: "Fire",
    img: "/damage/fire.jpg",
    desc: "Colorado's dry climate and high wildfire risk make fire damage restoration a critical specialty. We assess the extent of damage, prevent further damage, and work with both the homeowner and insurance company throughout.",
    causes: "Wildfires, lightning strikes, heating systems, electrical faults",
    link: "https://libertyroofco.com/fire",
  },
];

// ── ADVOCATE / PROCESS SECTION ─────────────────────────────
export const advocate = {
  sectionLabel: "The Liberty Roofing Difference",
  headline: "We Advocate For You",
  sub: "Liberty Roofing eliminates home renovation guesswork for both the insurer and the insured. We work side-by-side with your insurance company — so you don't have to fight alone through Colorado's complex claims process.",
  image: "/advocate.jpg",
  imageAlt: "Liberty Roofing advocates for Colorado homeowners",
  imageCaption: "Serving homeowners throughout Denver and all of Colorado",
  // 4-step timeline
  timeline: [
    {
      step: 1,
      title: "Site Visit",
      desc: "We assess the damage in person, using industry-leading tools to identify all affected areas — including hidden damage that adjusters often miss in Colorado's unique climate.",
      icon: "eye",
    },
    {
      step: 2,
      title: "Estimate",
      desc: "We use Xactimate — the same software insurance companies use — to produce accurate, itemized estimates that properly account for every line item of damage.",
      icon: "document",
    },
    {
      step: 3,
      title: "Approval",
      desc: "We work directly with your insurance company to include all line items in the scope of repair — and we meet the adjuster on-site to ensure nothing is overlooked.",
      icon: "shield",
    },
    {
      step: 4,
      title: "Restore",
      desc: "Our certified crews restore your property using premium materials — and we don't disappear when the work is done. We stand behind every project, guaranteed.",
      icon: "home",
    },
  ],
  // Homeowner protection grid
  protectionHeadline: "Homeowner Protection",
  protectionItems: [
    {
      title: "ACV vs. RCV Explained",
      desc: "We help you understand the difference between Actual Cash Value and Replacement Cost Value — and make sure every item of damage is identified and documented so your claim fully reflects the scope of work needed.",
    },
    {
      title: "Your Right to Choose",
      desc: "You have the legal right to choose your own contractor. Your insurance company cannot force you to use their preferred vendor.",
    },
    {
      title: "No Rate Increases",
      desc: "Filing a legitimate storm damage claim is an isolated event and typically does not raise your individual premiums.",
    },
    {
      title: "No Deductible Waivers",
      desc: "We never cover or waive deductibles — that's insurance fraud. We work within the system honestly and transparently, every time.",
    },
  ],
};

// ── ABOUT / WHY SECTION ────────────────────────────────────
export const about = {
  sectionLabel: "About Liberty Roofing & Restoration",
  headline: "Why We're Different",
  headlineExtra: "from the Rest",
  image: "/why-different.jpg",
  imageAlt: "Why Liberty Roofing stands apart from the rest",
  paragraphs: [
    {
      text: "Liberty Roofing works exclusively with the insurance industry — bringing a keen understanding of insurance claims and how to stay within budget and scope.",
      strong: null,
    },
    {
      text: "Working with Liberty Roofing, insurance companies have a trusted contractor on-site. Homeowners avoid the stress of aggressive sales tactics and jobs going over budget.",
      strong: "trusted contractor",
    },
    {
      text: "Liberty Roofing always finishes projects and won't disappear when the work is done.",
      strong: null,
      highlight: "Liberty Roofing always finishes projects and won't disappear when the work is done.",
    },
  ],
  certifications: [
    "GAF Master Elite",
    "HAAG Certified",
    "BBB A+ Accredited",
  ],
  // Anti-storm-chaser promise
  promiseTitle: "The Anti-Storm-Chaser Promise",
  promiseItems: [
    {
      label: "No Door-to-Door Soliciting",
      desc: "You'll find us through your insurance company or a trusted referral — not at your front door after a Colorado storm.",
    },
    {
      label: "No High-Pressure Tactics",
      desc: "No door-to-door pitches. No urgency tactics. We educate, never pressure.",
    },
    {
      label: "Local, Permanent Presence",
      desc: "Established in 2010. We're not going anywhere — and neither is our work.",
    },
    {
      label: "Owner Accountability",
      desc: "Accountability starts at the top. Our owner is accessible and invested in every project.",
    },
  ],
  ownerName: "Marcus Rivera",
  ownerInitials: "MR",
  ownerTitle: "Owner · Liberty Roofing & Restoration",
  ownerQuote: [
    "I founded Liberty Roofing because I saw too many Colorado homeowners get taken advantage of after storms. I started in 2010 with one simple mission: do the job right, treat people fairly, and make sure every homeowner knows exactly what's happening with their home and their claim.",
    "When you call Liberty Roofing, you're talking to me or someone on my team who knows your name and your project. We're not a call center. We're your neighbors — and we take that commitment seriously.",
  ],
};

// ── RESIDENTIAL SERVICES ───────────────────────────────────
export const residential = {
  sectionLabel: "Full-Service Restoration",
  headline: "Residential Services",
  sub: "Complete exterior restoration using the industry's highest-quality materials, installed by factory-certified craftsmen — serving Denver and all of Colorado.",
  colorVisualizer: {
    label: "Try Our Color Visualizer",
    href: "https://colorview.certainteed.com/",
    icon: "palette",
  },
  services: [
    {
      name: "Roofing",
      subtitle: "Replacement & Repair",
      img: "/roofing-header.jpg",
      imgAlt: "Roofing repair and replacement by Liberty Roofing",
      features: [
        "GAF, Owens Corning, CertainTeed",
        "GAF Master Elite certified",
        "HAAG Certified inspectors",
        "Written guarantee on workmanship",
        "Show up when they say — often early",
        "Property left neat, clean, debris cleared",
      ],
      cta: { label: "View Roofing Details", href: "https://libertyroofco.com/roofing" },
    },
    {
      name: "Windows",
      subtitle: "Replacement & New Install",
      img: "/windows-header.jpg",
      imgAlt: "Window replacement and new installation by Liberty Roofing",
      features: [
        "Double and/or triple-paned glass",
        "Fully welded frames and sashes",
        "Custom built to 1/16\" of existing frame",
        "Thermally insulated, energy efficient",
        "Lifetime labor and material warranty",
        "100% satisfaction guarantee",
      ],
      cta: { label: "View Window Details", href: "https://libertyroofco.com/windows" },
    },
    {
      name: "Siding",
      subtitle: "Aluminum, Vinyl & Fiber Cement",
      img: "/siding-header.jpg",
      imgAlt: "Siding installation by Liberty Roofing",
      features: [
        "Vinyl: durable, versatile, lifetime warranty",
        "Fiber Cement: wood-like, flame resistant",
        "Won't rot or corrode — lasts longer than wood",
        "Certified installers, many colors & styles",
        "Most efficient, courteous, tidy crew",
        "Eco-friendly, green building material",
      ],
      cta: { label: "View Siding Details", href: "https://libertyroofco.com/siding" },
    },
  ],
};

// ── COMMERCIAL SERVICES ────────────────────────────────────
export const commercial = {
  sectionLabel: "Commercial Property Services",
  headline: "Commercial Property Services",
  sub: "Licensed and bonded in Colorado, Liberty Roofing delivers professional commercial restoration that minimizes disruption to tenants, customers, and operations.",
  image: "/commercial.jpg",
  imageAlt: "Commercial property services by Liberty Roofing",
  propertyTypes: [
    "Apartment & Condo Buildings",
    "Office Buildings",
    "Retail Centers",
    "HOAs & Townhome Communities",
    "Churches",
    "And More",
  ],
  cta: { label: "View Commercial Services", href: "https://libertyroofco.com/commercial" },
  processTitle: "Commercial Process",
  processSteps: [
    { step: "1", title: "Design Meeting", desc: "We meet with property managers and boards to understand the scope and budget before any work begins." },
    { step: "2", title: "Estimate", desc: "Detailed estimates using industry-standard software, transparent line items, and scope documentation." },
    { step: "3", title: "Contract", desc: "We can attend board meetings to present our proposal and answer questions from stakeholders." },
    { step: "4", title: "Remodel", desc: "Clean, safe construction zones with advance notice of work and a direct contact number for questions throughout." },
  ],
  capabilities: [
    { cat: "Roofing", items: "Replacement and repair" },
    { cat: "Siding", items: "Vinyl (durable, versatile, green) and fiber cement (wood-like, flame resistant)" },
    { cat: "Windows", items: "Double/triple-paned, welded frames, custom fit to 1/16\", thermally insulated" },
  ],
};

// ── CREDIBILITY BAR ───────────────────────────────────────
export const credibilityBar = {
  stats: [
    { stat: "15+", label: "Years" },
    { stat: "8,000+", label: "Projects" },
    { stat: "GAF", label: "Master Elite" },
    { stat: "HAAG", label: "Certified" },
    { stat: "BBB", label: "A+" },
    { stat: "Licensed & Bonded", label: "Colorado" },
  ],
};

// ── WHY CHOOSE US (comparison table) ─────────────────────
export const whyChooseUs = {
  sectionLabel: "The Comparison That Speaks for Itself",
  headline: "Why Choose Liberty Roofing?",
  table: [
    { factor: "Years in Business", us: "15+ Years — Established 2010", them: "1–3 Years" },
    { factor: "Projects Completed", us: "8,000+", them: "A Few Hundred at Most" },
    { factor: "Insurance Expertise", us: "Full Advocacy — We Meet Your Adjuster", them: "Leave It to You" },
    { factor: "Local Presence", us: "Permanent, Denver Local Office", them: "Here Today, Gone Tomorrow" },
    { factor: "Certifications", us: "GAF Master Elite, HAAG Certified, BBB A+", them: "None or Minimal" },
    { factor: "BBB Rating", us: "A+ Accredited", them: "Not Rated or Poor" },
    { factor: "Claims Process", us: "Xactimate + Adjuster Meetings Included", them: "No Insurance Knowledge" },
    { factor: "After the Job", us: "Stands Behind Every Project", them: "Disappears When Work Is Done" },
    { factor: "Sales Tactics", us: "No Aggressive Tactics — Anti-Storm-Chaser", them: "High-Pressure Door-to-Door" },
    { factor: "Owner Accountability", us: "Marcus Rivera — Owner Accessible", them: "No Named Owner" },
  ],
  image: "/why-different.jpg",
  imageAlt: "Why Liberty Roofing stands apart from the rest",
};

// ── WARRANTIES ─────────────────────────────────────────────
export const warranties = [
  {
    title: "Workmanship Guarantee",
    desc: "Every project is backed by our written workmanship guarantee. If there's ever an issue with our installation, we fix it — period.",
    color: "primary",
    icon: "shield",
  },
  {
    title: "GAF Golden Pledge Warranty",
    desc: "As a GAF Master Elite contractor, we offer the Golden Pledge Warranty — the strongest roof warranty available, covering both materials and labor for up to 25 years.",
    color: "secondary",
    icon: "star",
  },
  {
    title: "Windows — Lifetime Warranty",
    desc: "Our replacement windows come with a lifetime labor and material warranty, plus a 100% satisfaction guarantee. Your investment is protected for the life of your home.",
    color: "primary",
    icon: "window",
  },
  {
    title: "Vinyl Siding — Lifetime Warranty",
    desc: "Our vinyl siding products carry a lifetime warranty — won't rot or corrode. It's a green choice that adds lasting value and protection to your home.",
    color: "secondary",
    icon: "siding",
  },
  {
    title: "$1M Liability + $10M Umbrella",
    desc: "We carry $1 million general liability and $10 million umbrella policies — protecting your property during every phase of the project.",
    color: "primary",
    icon: "umbrella",
  },
];

// ── TESTIMONIALS ───────────────────────────────────────────
export const testimonials = {
  sectionLabel: "Real Homeowners, Real Results",
  headline: "What Our Customers Say",
  googleRating: 4.9,
  googleReviewLink: "https://share.google/libertyroofco",
  items: [
    {
      name: "Rebecca T.",
      service: "Roofing",
      quote: "After the August hailstorm that hit our Cherry Creek neighborhood, Liberty Roofing was the only company that didn't use high-pressure tactics. They met my adjuster on-site and got my claim approved for everything it should have been. My new roof looks incredible.",
      rating: 5,
      source: "BBB",
    },
    {
      name: "David M.",
      service: "Roofing",
      quote: "I've been in my Highlands Ranch home for 20 years and put off replacing my hail-damaged roof forever. Marcus and his team made the whole insurance process painless. They handled everything — I barely had to lift a finger. Couldn't recommend them more highly.",
      rating: 5,
      source: null,
    },
    {
      name: "Sandra K.",
      service: "Windows & Siding",
      quote: "When the windstorm tore off half my siding in Westminster, Liberty Roofing was out the next day to assess. They walked me through the entire claim process, helped me understand my ACV vs. RCV coverage, and the final result exceeded my expectations. These guys are the real deal.",
      rating: 5,
      source: null,
    },
  ],
};

// ── PHOTO GALLERY ──────────────────────────────────────────
export const gallery = {
  headline: "Our Work Speaks For Itself",
  sub: "Before-and-after photos from real Liberty Roofing jobs across the Denver metro area and Colorado. More coming soon.",
  slots: [
    { label: "Roofing / Replacement", location: "Cherry Creek, Denver" },
    { label: "Siding Installation", location: "Highlands Ranch, CO" },
    { label: "Window Replacement", location: "Lakewood, CO" },
    { label: "Storm Damage Restoration", location: "Westminster, CO" },
  ],
  footerNote: "More project photos coming soon — contact us to see examples of your specific project type.",
};

// ── FAQ ─────────────────────────────────────────────────────
export const faqs = [
  {
    q: "Do you work with insurance companies?",
    a: "Yes — and that's all we do. Liberty Roofing partners exclusively with the insurance industry. We work with all major insurance carriers in Colorado, use Xactimate (the same software they use), and meet adjusters on-site to ensure your claim is handled fairly and completely.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. We are licensed and bonded in the state of Colorado. We carry $1 million general liability and $10 million umbrella policies. We're also GAF Master Elite, HAAG Certified, and BBB A+ Accredited.",
  },
  {
    q: "How do I know if I have storm damage?",
    a: "Most storm damage — especially Colorado hail damage — isn't visible from the ground. Our free inspection uses hands-on assessment and drone technology to identify damage to shingles, flashing, vents, and other components that would otherwise go unnoticed. If your neighbors have damage from the same storm, there's a good chance you do too.",
  },
  {
    q: "What does a free inspection include?",
    a: "Our comprehensive inspection includes a thorough damage assessment, a detailed damage report, and a full explanation of your insurance options — with zero obligation. We show up when we say we will.",
  },
  {
    q: "Will filing a claim raise my insurance rates?",
    a: "No. Storm damage claims are considered 'acts of God' and typically do not raise individual premiums in Colorado. Your rates are more likely to increase from area-wide events regardless of whether you file — not from your individual claim.",
  },
  {
    q: "What if my claim is denied?",
    a: "If your claim is denied, you have the right to appeal — and we can help. We document everything thoroughly, use Xactimate estimates backed by industry standards, and will meet with adjusters to document all damage and support your claim. If the claim is ultimately denied, you owe us nothing.",
  },
];

// ── FOOTER ─────────────────────────────────────────────────
export const footer = {
  ctaHeadline: "Schedule Your Free, No-Obligation Roof Inspection",
  ctaSub: "Call before your adjuster's inspection — we can be there the same day to document all damage and support your claim throughout the process.",
  ctaPhone: "720-555-0199",
  ctaPhoneDisplay: "720-555-0199",
  ctaHours: "Available Monday – Friday | Same-Day Availability",
  footerLinks: [
    { label: "Roofing", href: "https://libertyroofco.com/roofing" },
    { label: "Windows", href: "https://libertyroofco.com/windows" },
    { label: "Siding", href: "https://libertyroofco.com/siding" },
  ],
  logo: "/modern_logo.png",
  logoAlt: "Liberty Roofing & Restoration",
  legal: "4200 Morrison Rd, Denver, CO 80219 | libertyroofco.com",
  licenseInfo: "Licensed & Bonded in Colorado | Established 2010",
};

// ── LEAD FORM ───────────────────────────────────────────────
export const leadForm = {
  title: "Get Your Free Inspection",
  sub: "No obligation. Takes about 20 minutes. Same-day response available.",
  submitLabel: "Submit — We'll Call Within 1 Hour",
  damageTypes: [
    "Storm / Wind / Hail",
    "Fire Damage",
    "Flood / Water Damage",
    "Roof Damage",
    "Other",
  ],
  ctaNote: "Or call us directly:",
  ctaPhone: "720-555-0199",
};

// ── STORM DAMAGE CTA BANNERS ────────────────────────────────
export const ctaBanners = {
  stormDamage: {
    label: "Damaged by Storm or Fire?",
    headline: "Get Your Free Inspection Today",
    sub: "We'll assess the damage and help you navigate the insurance process.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7205550199" },
    ctaSecondary: { label: "Or call 720-555-0199", href: "tel:7205550199" },
  },
  readyToStart: {
    label: "Here's How It Works",
    headline: "Ready to Start Your Claim?",
    sub: "One call sets everything in motion. We handle the rest.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7205550199" },
    ctaSecondary: { label: "Or call 720-555-0199", href: "tel:7205550199" },
  },
  experience: {
    label: "Experience the Difference",
    headline: "Work with a Team That's Been Here Since 2010",
    sub: "Denver trusts Liberty Roofing for good reason. See what we can do for you.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7205550199" },
    ctaSecondary: { label: "Or call 720-555-0199", href: "tel:7205550199" },
  },
  promise: {
    label: "The Liberty Roofing Promise",
    headline: "We're Ready to Help — All You Have to Do Is Call",
    sub: "No obligation. No pressure. Just an honest assessment from people who care.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7205550199" },
    ctaSecondary: { label: "Or call 720-555-0199", href: "tel:7205550199" },
  },
  guaranteed: {
    label: "Full Protection, Start to Finish",
    headline: "Our Work Is Guaranteed — Period",
    sub: "Every project backed by workmanship guarantee and manufacturer warranties.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7205550199" },
    ctaSecondary: { label: "Or call 720-555-0199", href: "tel:7205550199" },
  },
  trust: {
    label: "Join Thousands of Happy Colorado Homeowners",
    headline: "Denver Trusts Liberty Roofing",
    sub: "See why so many homeowners choose us for their restoration needs.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7205550199" },
    ctaSecondary: { label: "Or call 720-555-0199", href: "tel:7205550199" },
  },
};
