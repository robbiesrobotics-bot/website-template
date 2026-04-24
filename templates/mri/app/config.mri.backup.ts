// ============================================================
// WEBSITE TEMPLATE CONFIG — A.L.I.C.E. Framework
// Robbies Robotics LLC
//
// HOW TO USE THIS FILE:
// Replace every value below with the new company's information.
// All content is centralized here — the page.tsx template
// reads from this file and never needs to be edited directly.
// ============================================================

// ── COMPANY IDENTITY ────────────────────────────────────────
export const company = {
  name: "Modern Remodeling",
  tagline: "Your Trusted Restoration Specialist",
  establishedYear: 1990,
  phone: "703-361-9944",
  sms: "571-466-8710",
  email: "info@modernremod.com",
  website: "https://modernremod.com",
  address: "10550 Associates Court, Manassas, VA 20109",
  areaServed: "Manassas and all of Northern Virginia",
  licenses: "Licensed & Bonded in Virginia, Maryland, and DC",
  // Stats (displayed in credibility bar)
  stats: {
    yearsInBusiness: "30+",
    projectsCompleted: "30,000+",
  },
  // Company initials for avatar (e.g. owner headshot fallback)
  initials: "JB",
};

// ── BRAND COLORS ───────────────────────────────────────────
// CSS variable names in globals.css: --primary, --secondary, --accent
export const colors = {
  // Primary = CTA buttons, section labels, badge backgrounds
  primary: "#8E1B1B",    // burgundy-red
  // Secondary = section backgrounds, nav pills, muted elements
  secondary: "#546571",   // slate blue-gray
  // Dark = header, footer, dark section backgrounds
  dark: "#2d3a45",        // dark blue-gray
  // Accent = light section backgrounds
  accent: "#EEF2F6",     // very light blue-gray
  // Blue-gray for body text on light backgrounds
  blueGray: "#9FB0BE",
  // Light background (white)
  light: "#ffffff",
  // Warm light background
  warm: "#FAFBFC",
};

// ── HEADER / NAV ───────────────────────────────────────────
export const header = {
  logo: "/modern_logo.png",       // path to logo image in /public
  logoAlt: "Modern Remodeling",
  phone: "703-361-9944",
  phoneDisplay: "703-361-9944",
  ctaButton: "Free Inspection",
  navLinks: [
    { label: "Damage Types", id: "damage", color: "primary" },
    { label: "Our Process",  id: "process", color: "secondary" },
    { label: "Residential",  id: "residential", color: "primary" },
    { label: "Commercial",   id: "commercial", color: "secondary" },
    { label: "Why Choose Us",id: "why", color: "primary" },
    { label: "Warranties",   id: "warranties", color: "secondary" },
    { label: "FAQ",          id: "faq", color: "primary" },
  ],
};

// ── HERO / SHOWCASE BANNER ─────────────────────────────────
export const hero = {
  badge: "Trusted Since 1990",
  image: "/top-banner.jpg",       // hero background image
  imageAlt: "Modern Remodeling — Quality restoration in Manassas and Northern Virginia",
  sectionLabel: "Trusted Since 1990",
  headline: "Your Advocate in Insurance Restoration",
  sub: "30,000+ projects completed. Insurance claims handled daily. No storm chasers. No pressure. Just honest work.",
  ctaPrimary: { label: "Call 703-361-9944", href: "tel:703361-9944" },
  ctaSecondary: { label: "View Our Work", href: "https://modernremod.com" },
  urgentLine: "24/7 Emergency Storm Team — On Standby",
  smsNumber: "571-466-8710",
};

// ── FULL HERO SECTION (dark dramatic) ─────────────────────
export const heroFull = {
  badge: "Trusted by 30,000+ Northern Virginia homeowners",
  badgeIcon: "star", // uses star SVG
  headline: "Expert Restoration",
  headlineAccent: "Backed by 30+ Years",
  sub: "Modern Remodeling provides quality property restoration services in Manassas and the Northern Virginia area exclusively for the insurance industry.",
  sub2: "We partner with homeowners — not against them. No storm chasers. No pressure. Just honest, expert restoration backed by 30+ years of craftsmanship.",
  ctaPrimary: { label: "Schedule Free Inspection", href: "tel:7033619944" },
  ctaSecondary: { label: "Get Free Quote", href: "#", onClick: "openLeadForm" },
  certifications: [
    "BBB A+ Accredited",
    "GAF Master Elite",
    "CertainTeed SELECT",
    "HAAG Certified",
    "VSI Certified",
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
      desc: "We meet you on-site, document all damage using industry-leading tools, and identify hidden issues adjusters often miss.",
      icon: "search",
    },
    {
      step: "3",
      title: "We Handle Everything",
      desc: "We create the Xactimate estimate, meet your adjuster on-site, and manage the full insurance claim from approval to completion.",
      icon: "check",
    },
  ],
  cta: { label: "Call Now: 703-361-9944", href: "tel:7033619944" },
};

// ── DAMAGE TYPES (4-column grid) ──────────────────────────
export const damageTypes = [
  {
    name: "Hail",
    img: "/damage/hail.jpg",
    desc: "Hailstorms can cause significant damage to your roof, siding, and gutters — often invisible from the ground. Most hail damage is covered by homeowners insurance.",
    causes: "Severe thunderstorms, late-season storms",
    link: "https://modernremod.com",
  },
  {
    name: "Wind",
    img: "/damage/wind.jpg",
    desc: "High winds can lift, tear, or completely remove shingles and siding, leaving your home vulnerable to water intrusion. Wind damage claims are among the most common.",
    causes: "Microbursts, hurricanes, tornadoes, straight-line winds",
    link: "https://modernremod.com",
  },
  {
    name: "Flood",
    img: "/damage/flood.jpg",
    desc: "Water is deceptive — it penetrates structural cavities and needs sophisticated moisture detection. We partner with removal services to ensure mold won't return.",
    causes: "Frozen pipes, plumbing issues, flooding, hurricanes, heavy rain",
    link: "https://modernremod.com/flood",
  },
  {
    name: "Fire",
    img: "/damage/fire.jpg",
    desc: "Our goal is to restore to pre-loss condition. We assess the extent of damage, prevent further damage, and work with both the homeowner and insurance company throughout.",
    causes: "Cooking equipment, heating, electrical equipment, smoking, candles, lighting",
    link: "https://modernremod.com/fire",
  },
];

// ── ADVOCATE / PROCESS SECTION ─────────────────────────────
export const advocate = {
  sectionLabel: "The Modern Remodeling Difference",
  headline: "We Advocate For You",
  sub: "Modern Remodeling eliminates home renovation guesswork for both the insurer and the insured. We work side-by-side with your insurance company — so you don't have to fight alone.",
  image: "/advocate.jpg",
  imageAlt: "Modern Remodeling advocates for homeowners",
  imageCaption: "Serving homeowners throughout Manassas and all of Northern Virginia",
  // 4-step timeline
  timeline: [
    {
      step: 1,
      title: "Site Visit",
      desc: "We assess the damage in person, using industry-leading tools to identify all affected areas — including hidden damage that adjusters often miss.",
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
  sectionLabel: "About Modern Remodeling",
  headline: "Why We're Different",
  headlineExtra: "from the Rest",
  image: "/why-different.jpg",
  imageAlt: "Why Modern Remodeling stands apart from the rest",
  paragraphs: [
    {
      text: "Modern Remodeling works exclusively with the insurance industry — bringing a keen understanding of insurance claims and how to stay within budget and scope.",
      strong: null,
    },
    {
      text: "Working with Modern Remodeling, insurance companies have a trusted contractor on-site. Homeowners avoid the stress of aggressive sales tactics and jobs going over budget.",
      strong: "trusted contractor",
    },
    {
      text: "Modern Remodeling always finishes projects and won't disappear when the work is done.",
      strong: null,
      highlight: "Modern Remodeling always finishes projects and won't disappear when the work is done.",
    },
  ],
  certifications: [
    "CertainTeed SELECT Shingle Master",
    "GAF Master Elite",
    "HAAG Certified",
    "VSI Certified",
  ],
  // Anti-storm-chaser promise
  promiseTitle: "The Anti-Storm-Chaser Promise",
  promiseItems: [
    {
      label: "No Door-to-Door Soliciting",
      desc: "You'll find us through your insurance company or a trusted referral — not at your front door after a storm.",
    },
    {
      label: "No High-Pressure Tactics",
      desc: "No door-to-door pitches. No urgency tactics. We educate, never pressure.",
    },
    {
      label: "Local, Permanent Presence",
      desc: "Established in 1990. We're not going anywhere — and neither is our work.",
    },
    {
      label: "Owner Accountability",
      desc: "Accountability starts at the top. Our owner is accessible and invested in every project.",
    },
  ],
  ownerName: "Jonathan Ballard",
  ownerInitials: "JB",
  ownerTitle: "Owner · Modern Remodeling Inc.",
  ownerQuote: [
    "I founded Modern Remodeling because I saw too many homeowners get taken advantage of after storms. I started in 1990 with one simple mission: do the job right, treat people fairly, and make sure every homeowner knows exactly what's happening with their home and their claim.",
    "When you call Modern Remodeling, you're talking to me or someone on my team who knows your name and your project. We're not a call center. We're your neighbors — and we take that commitment seriously.",
  ],
};

// ── RESIDENTIAL SERVICES ───────────────────────────────────
export const residential = {
  sectionLabel: "Full-Service Restoration",
  headline: "Residential Services",
  sub: "Complete exterior restoration using the industry's highest-quality materials, installed by factory-certified craftsmen.",
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
      imgAlt: "Roofing repair and replacement by Modern Remodeling",
      features: [
        "CertainTeed, GAF, TAMKO, Owens Corning",
        "CertainTeed SELECT Shingle Master certified",
        "MSA (Master Shingle Applicator) workforce",
        "Written guarantee on workmanship",
        "Show up when they say — often early",
        "Property left neat, clean, debris cleared",
      ],
      cta: { label: "View Roofing Details", href: "https://modernremod.com/roofing" },
    },
    {
      name: "Windows",
      subtitle: "Replacement & New Install",
      img: "/windows-header.jpg",
      imgAlt: "Window replacement and new installation by Modern Remodeling",
      features: [
        "Double and/or triple-paned glass",
        "Fully welded frames and sashes",
        "Custom built to 1/16\" of existing frame",
        "Thermally insulated, energy efficient",
        "Lifetime labor and material warranty",
        "100% satisfaction guarantee",
      ],
      cta: { label: "View Window Details", href: "https://modernremod.com/windows" },
    },
    {
      name: "Siding",
      subtitle: "Aluminum, Vinyl & Fiber Cement",
      img: "/siding-header.jpg",
      imgAlt: "Siding installation by Modern Remodeling",
      features: [
        "Vinyl: durable, versatile, lifetime warranty",
        "Fiber Cement: wood-like, flame resistant",
        "Won't rot or corrode — lasts longer than wood",
        "Certified installers, many colors & styles",
        "Most efficient, courteous, tidy crew",
        "Eco-friendly, green building material",
      ],
      cta: { label: "View Siding Details", href: "https://modernremod.com/siding" },
    },
  ],
};

// ── COMMERCIAL SERVICES ────────────────────────────────────
export const commercial = {
  sectionLabel: "Beyond Residential",
  headline: "Commercial Property Services",
  sub: "Licensed and bonded in Virginia, Maryland, and DC, Modern Remodeling delivers professional commercial restoration that minimizes disruption to tenants, customers, and operations.",
  image: "/commercial.jpg",
  imageAlt: "Commercial property services by Modern Remodeling",
  propertyTypes: [
    "Apartment & Condo Buildings",
    "Office Buildings",
    "Retail Centers",
    "Churches",
    "Aquatic & Fitness Facilities",
    "And More",
  ],
  cta: { label: "View Commercial Services", href: "https://modernremod.com/commercial" },
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
    { cat: "Windows", items: "Double/triple-paned, welded frames, custom fit to 1/16\", midrise/highrise capable, historical districts" },
  ],
};

// ── CREDIBILITY BAR ───────────────────────────────────────
export const credibilityBar = {
  stats: [
    { stat: "30+", label: "Years" },
    { stat: "30,000+", label: "Projects" },
    { stat: "GAF", label: "Master Elite" },
    { stat: "CertainTeed", label: "SELECT Shingle Master" },
    { stat: "HAAG", label: "Certified" },
    { stat: "BBB", label: "A+" },
    { stat: "VSI", label: "Certified" },
    { stat: "Licensed & Bonded", label: "VA, MD, DC" },
  ],
};

// ── WHY CHOOSE US (comparison table) ─────────────────────
export const whyChooseUs = {
  sectionLabel: "The Comparison That Speaks for Itself",
  headline: "Why Choose Modern Remodeling?",
  table: [
    { factor: "Years in Business", us: "30+ Years — Established 1990", them: "1–3 Years" },
    { factor: "Projects Completed", us: "30,000+", them: "A Few Hundred at Most" },
    { factor: "Insurance Expertise", us: "Full Advocacy — We Meet Your Adjuster", them: "Leave It to You" },
    { factor: "Local Presence", us: "Permanent, Local Office", them: "Here Today, Gone Tomorrow" },
    { factor: "Certifications", us: "GAF Master Elite, CertainTeed, HAAG, VSI", them: "None or Minimal" },
    { factor: "BBB Rating", us: "A+ Accredited", them: "Not Rated or Poor" },
    { factor: "Claims Process", us: "Xactimate + Adjuster Meetings Included", them: "No Insurance Knowledge" },
    { factor: "After the Job", us: "Stands Behind Every Project", them: "Disappears When Work Is Done" },
    { factor: "Sales Tactics", us: "No Aggressive Tactics — Anti-Storm-Chaser", them: "High-Pressure Door-to-Door" },
    { factor: "Owner Accountability", us: "Jonathan Ballard — Owner Accessible", them: "No Named Owner" },
  ],
  image: "/why-different.jpg",
  imageAlt: "Why Modern Remodeling stands apart from the rest",
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
    title: "CertainTeed SureStart",
    desc: "Our CertainTeed installations include the SureStart warranty, providing full replacement cost coverage for manufacturing defects — at no additional charge.",
    color: "secondary",
    icon: "cert",
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
    desc: "We carry $1 million general liability, $2 million aggregate, and $10 million umbrella policies — protecting your property during every phase of the project.",
    color: "primary",
    icon: "umbrella",
  },
];

// ── TESTIMONIALS ───────────────────────────────────────────
export const testimonials = {
  sectionLabel: "Real Homeowners, Real Results",
  headline: "What Our Customers Say",
  googleRating: 4.9,
  googleReviewLink: "https://share.google/FVRbPdpLFntexmHLV",
  items: [
    {
      name: "Edward S.",
      service: "Roofing",
      quote: "The team at Modern Remodeling was professional from start to finish. They showed up when they said they would, finished ahead of schedule, and left my property immaculate. The new roof looks incredible.",
      rating: 5,
      source: "BBB",
    },
    {
      name: "Julio G.",
      service: "Windows",
      quote: "I had all my windows replaced and the difference is night and day. The house is quieter, warmer in winter, and the curb appeal jumped significantly. Lifetime warranty gives me total peace of mind.",
      rating: 5,
      source: null,
    },
    {
      name: "Ada D.",
      service: "Siding",
      quote: "The fiber cement siding is absolutely beautiful — the wood-like character without any of the maintenance headaches. The crew was efficient, courteous, and kept the site clean every single day.",
      rating: 5,
      source: null,
    },
    {
      name: "Nicole S.",
      service: "Flood Restoration",
      quote: "After the heavy rains caused water damage, Modern Remodeling handled everything. They worked with my insurance company directly, identified hidden moisture issues, and made sure mold wouldn't return. I didn't have to fight with anyone — they did it for me.",
      rating: 5,
      source: null,
    },
    {
      name: "Shirley P.",
      service: "Fire Restoration",
      quote: "A kitchen fire caused damage I didn't even realize was so extensive. Modern Remodeling assessed everything, worked with my insurance adjuster on-site, and restored my home to better-than-before condition.",
      rating: 5,
      source: null,
    },
    {
      name: "Min B.",
      service: "Roofing",
      quote: "We could not get a great roof without Adam's help. The whole team were professional and very quick. Outstanding service and great communication. I am extremely happy with my new roof. Totally recommended Modern Remodeling Inc.",
      rating: 5,
      source: "BBB",
    },
  ],
};

// ── PHOTO GALLERY ──────────────────────────────────────────
export const gallery = {
  headline: "Our Work Speaks For Itself",
  sub: "Before-and-after photos from real Modern Remodeling jobs in Manassas and Northern Virginia. More coming soon.",
  slots: [
    { label: "Roofing / Replacement", location: "Manassas, VA" },
    { label: "Siding Installation", location: "Centreville, VA" },
    { label: "Window Replacement", location: "Fairfax, VA" },
    { label: "Storm Damage Restoration", location: "Herndon, VA" },
  ],
  footerNote: "More project photos coming soon — contact us to see examples of your specific project type.",
};

// ── FAQ ─────────────────────────────────────────────────────
export const faqs = [
  {
    q: "Do you work with insurance companies?",
    a: "Yes — and that's all we do. Modern Remodeling partners exclusively with the insurance industry. We work with all major insurance carriers, use Xactimate (the same software they use), and meet adjusters on-site to ensure your claim is handled fairly and completely.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. We are licensed and bonded in Virginia, Maryland, and DC. We carry $1 million general liability, $2 million aggregate, and $10 million umbrella policies. We're also GAF Master Elite, CertainTeed SELECT Shingle Master, HAAG Certified, and VSI Certified.",
  },
  {
    q: "How do I know if I have storm damage?",
    a: "Most storm damage isn't visible from the ground. Our free inspection uses hands-on assessment and drone technology to identify damage to shingles, flashing, vents, and other components that would otherwise go unnoticed. If your neighbors have damage, there's a good chance you do too.",
  },
  {
    q: "What does a free inspection include?",
    a: "Our comprehensive inspection includes a thorough damage assessment, a detailed damage report, and a full explanation of your insurance options — with zero obligation. We show up when we say we will, often finishing ahead of schedule.",
  },
  {
    q: "What about mold from water damage?",
    a: "We have specialized training to identify moisture sources and evaluate mold growth — both visible and suspected. We contain the damage and partner with professional removal services to ensure mold won't return. Water is deceptive; it penetrates structural cavities and requires sophisticated moisture detection.",
  },
  {
    q: "Will filing a claim raise my insurance rates?",
    a: "No. Storm damage claims are considered 'acts of God' and typically do not raise individual premiums. Your rates are more likely to increase from area-wide events regardless of whether you file — not from your individual claim.",
  },
  {
    q: "Do I have to use my insurance company's contractor?",
    a: "Absolutely not. You have the legal right to choose your own contractor. Your insurance company may recommend preferred vendors, but the final choice is always yours — and Modern Remodeling will support you throughout the process — not the insurance company.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roof replacements are completed in a single day. Larger or more complex projects may take 2-3 days. We communicate the timeline clearly before starting, protect your property with tarps and barriers, and perform a magnetic sweep after to ensure no nails remain.",
  },
  {
    q: "How much will this cost me?",
    a: "Your out-of-pocket cost is limited to your insurance deductible — nothing more. We work with your insurance settlement directly. If your claim is denied, there is no obligation to move forward with any work, and you owe us nothing.",
  },
  {
    q: "What if my claim is denied?",
    a: "If your claim is denied, you have the right to appeal — and we can help. We document everything thoroughly, use Xactimate estimates backed by industry standards, and will meet with adjusters to document all damage and support your claim. If the claim is ultimately denied, you owe us nothing.",
  },
  {
    q: "How long does the insurance process take from start to finish?",
    a: "Most claims are approved within 1-2 weeks of the adjuster inspection. Once approved, we typically begin work within 5-10 business days. The entire process — from initial call to completed restoration — usually spans 3-6 weeks depending on claim complexity and material availability.",
  },
];

// ── FOOTER ─────────────────────────────────────────────────
export const footer = {
  ctaHeadline: "Schedule Your Free, No-Obligation Roof Inspection",
  ctaSub: "Call before your adjuster's inspection — we can be there the same day to document all damage and support your claim throughout the process.",
  ctaPhone: "703-361-9944",
  ctaPhoneDisplay: "703-361-9944",
  ctaHours: "Available Monday – Friday | Same-Day Availability",
  footerLinks: [
    { label: "Roofing", href: "https://modernremod.com/roofing" },
    { label: "Windows", href: "https://modernremod.com/windows" },
    { label: "Siding", href: "https://modernremod.com/siding" },
    { label: "Flood", href: "https://modernremod.com/flood" },
    { label: "Fire", href: "https://modernremod.com/fire" },
    { label: "Commercial", href: "https://modernremod.com/commercial" },
  ],
  logo: "/modern_logo.png",
  logoAlt: "Modern Remodeling",
  legal: "10550 Associates Court, Manassas, VA 20109 | modernremod.com",
  licenseInfo: "Licensed & Bonded: VA, MD, DC | Established 1990",
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
  ctaPhone: "703-361-9944",
};

// ── STORM DAMAGE CTA BANNER ────────────────────────────────
export const ctaBanners = {
  stormDamage: {
    label: "Damaged by Storm or Fire?",
    headline: "Get Your Free Inspection Today",
    sub: "We'll assess the damage and help you navigate the insurance process.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7033619944" },
    ctaSecondary: { label: "Or call 703-361-9944", href: "tel:7033619944" },
  },
  readyToStart: {
    label: "Here's How It Works",
    headline: "Ready to Start Your Claim?",
    sub: "One call sets everything in motion. We handle the rest.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7033619944" },
    ctaSecondary: { label: "Or call 703-361-9944", href: "tel:7033619944" },
  },
  experience: {
    label: "Experience the Difference",
    headline: "Work with a Team That's Been Here Since 1990",
    sub: "Manassas trusts Modern Remodeling for good reason. See what we can do for you.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7033619944" },
    ctaSecondary: { label: "Or call 703-361-9944", href: "tel:7033619944" },
  },
  promise: {
    label: "The Modern Remodeling Promise",
    headline: "We're Ready to Help — All You Have to Do Is Call",
    sub: "No obligation. No pressure. Just an honest assessment from people who care.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7033619944" },
    ctaSecondary: { label: "Or call 703-361-9944", href: "tel:7033619944" },
  },
  guaranteed: {
    label: "Full Protection, Start to Finish",
    headline: "Our Work Is Guaranteed — Period",
    sub: "Every project backed by workmanship guarantee and manufacturer warranties.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7033619944" },
    ctaSecondary: { label: "Or call 703-361-9944", href: "tel:7033619944" },
  },
  trust: {
    label: "Join Thousands of Happy Homeowners",
    headline: "Manassas Trusts Modern Remodeling",
    sub: "See why so many homeowners choose us for their restoration needs.",
    ctaPrimary: { label: "Schedule Your Free Inspection", href: "tel:7033619944" },
    ctaSecondary: { label: "Or call 703-361-9944", href: "tel:7033619944" },
  },
};
