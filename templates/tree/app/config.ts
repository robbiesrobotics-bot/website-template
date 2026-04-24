// ─────────────────────────────────────────────────────────────────────────────
// JL TREE SERVICE — Website Template Config
// A.L.I.C.E. Framework · website-template repo
// ─────────────────────────────────────────────────────────────────────────────

export const company = {
  name:        "JL Tree Service",
  tagline:     "Fairfax's Trusted Tree Care Experts",
  phone:       "(703) 935-8878",
  email:       "jltreeservice1@yahoo.com",
  address:     "Fairfax, VA 22030",
  city:        "Fairfax",
  state:       "VA",
  zip:         "22030",
  areaServed:  "Northern Virginia",
  licenses:    "Fully Licensed & Insured",
  established: "Family Owned & Operated",
  website:     "https://jltreeservice.com",
};

export const colors = {
  primary:   "#1B5E20",   // Forest green — authority, nature
  primaryHover: "#14471A",
  secondary: "#33691E",   // Darker green
  dark:      "#1B3A1B",   // Very dark green
  accent:    "#F1F8E9",   // Light green-white
  blueGray:  "#90A4AE",   // Neutral for dark sections
  warm:      "#FAFAF5",   // Off-white
};

export const header = {
  logo:      "/tree-logo.png",
  logoAlt:   "JL Tree Service",
  phone:     "(703) 935-8878",
  ctaButton: "Free Estimate",
  navLinks: [
    { label: "Services",    id: "services",    color: "primary"   },
    { label: "Our Process",  id: "process",     color: "secondary" },
    { label: "Service Areas",id: "areas",       color: "primary"   },
    { label: "Why Choose Us",id: "why",         color: "secondary" },
    { label: "Testimonials", id: "testimonials",color: "primary"   },
    { label: "FAQ",          id: "faq",         color: "secondary" },
  ],
};

export const hero = {
  badge:    "Family Owned · Fully Insured",
  image:    "/hero-trees.jpg",
  imageAlt: "JL Tree Service — Professional tree care in Fairfax and Northern Virginia",
  headline: "Northern Virginia's Most Trusted Tree Service",
  sub:      "Safe. Professional. Affordable. Serving Fairfax, Centreville, Burke, Vienna, Springfield, and all of Northern Virginia.",
  ctaPrimary:  { label: "Call (703) 935-8878", href: "tel:7039358878" },
  ctaSecondary:{ label: "Get Free Estimate",  href: "#quote" },
  urgentLine:  "Emergency Services Available — Same-Day Response",
};

export const stats = {
  items: [
    { stat: "25+",   label: "Years Experience"    },
    { stat: "10,000+",label: "Trees Safely Removed" },
    { stat: "5-Star",label: "Google Rating"        },
    { stat: "24/7",  label: "Emergency Response"  },
  ],
};

export const services = [
  {
    name:    "Tree Removal",
    icon:    "tree",
    desc:    "Complete removal of dead, dying, hazardous, or unwanted trees. We handle trees of any size, in any location — close to homes, near power lines, or in tight spaces.",
    featured: true,
    features: [
      "Fully equipped for trees of all sizes",
      "Complete stump and root removal available",
      "Fully licensed and insured crew",
      "Property protection guaranteed",
      "Free estimate before any work begins",
    ],
    cta: "Schedule Removal",
  },
  {
    name:    "Stump Grinding",
    icon:    "stump",
    desc:    "Don't let an old stump ruin your yard. Our industrial stump grinders remove stumps below ground level, leaving your lawn ready for sod, mulch, or planting.",
    featured: true,
    features: [
      "Stumps ground 6–12 inches below grade",
      "Root fragment clearing",
      "Fill dirt and seed available",
      "Same-day service often available",
      "Competitive, upfront pricing",
    ],
    cta: "Get Stump Grinding Quote",
  },
  {
    name:    "Tree Trimming & Pruning",
    icon:    "prune",
    desc:    "Regular pruning keeps trees healthy, beautiful, and safe. We trim for shape, health, and clearance — removing deadwood, crossing branches, and storm damage before it falls.",
    featured: true,
    features: [
      "Crown reduction and thinning",
      "Deadwood and storm damage removal",
      "Hazard limb removal",
      "Vista pruning for views",
      "Seasonal maintenance programs",
    ],
    cta: "Request Pruning Service",
  },
  {
    name:    "Lot Clearing & Land Clearing",
    icon:    "land",
    desc:    "From overgrown lots to new construction sites, we clear vegetation, trees, and debris to give you a clean, usable piece of land. Fast, thorough, and on budget.",
    featured: false,
    features: [
      "Overgrown lot restoration",
      "Construction and build-site clearing",
      "Brush and debris removal",
      "Grading and final cleanup",
    ],
    cta: "Discuss Your Project",
  },
  {
    name:    "Storm Damage Cleanup",
    icon:    "storm",
    desc:    "When storms hit, so do we. Ice storms, high winds, and thunderstorms leave behind hazardous debris and fallen trees. We respond fast to restore safety and clear your property.",
    featured: false,
    features: [
      "24/7 emergency response",
      "Fallen tree and limb removal",
      "Immediate hazard assessment",
      "Insurance documentation assistance",
      "Same-day site clearing",
    ],
    cta: "Storm Emergency? Call Now",
  },
  {
    name:    "Emergency Services",
    icon:    "emergency",
    desc:    "Tree emergencies don't wait for business hours. A tree on your house, a limb blocking your driveway, or a dangerous hanging branch — we respond fast and work safely.",
    featured: true,
    features: [
      "Available 7 days a week",
      "Same-day response guaranteed",
      "Tree-on-house specialized removal",
      "Full liability insurance coverage",
      "No overtime charges for emergencies",
    ],
    cta: "Emergency? Call (703) 935-8878",
  },
  {
    name:    "Grading",
    icon:    "grade",
    desc:    "Proper grading controls water flow, prevents erosion, and prepares your property for landscaping or construction. We shape and grade land to exact specifications.",
    featured: false,
    features: [
      "Drainage improvement",
      "Construction site preparation",
      "Erosion control",
      "Final grade to spec",
    ],
    cta: "Request Grading Service",
  },
];

export const processSteps = [
  {
    step:  "1",
    title: "Call or Request Quote",
    desc:  "Give us a call or fill out our form. We respond promptly — often within the hour during business hours.",
    icon:  "phone",
  },
  {
    step:  "2",
    title: "Free On-Site Estimate",
    desc:  "We come to your property, assess the job, and provide a clear, honest estimate. No obligation, no pressure.",
    icon:  "search",
  },
  {
    step:  "3",
    title: "We Do the Work",
    desc:  "Once you approve, we schedule your job and arrive on time with the right equipment. We leave your property clean.",
    icon:  "check",
  },
];

export const whyChooseUs = {
  title:    "Why Property Owners Choose JL Tree Service",
  intro:    "When a tree is threatening your home, or you need a job done right the first time, here's what sets us apart.",
  table: [
    { factor: "Licensed & Insured",     us: "Yes — Full Coverage",    them: "Often Uninsured"         },
    { factor: "Family Owned & Operated",us: "Yes — Local Family",     them: "Often a Franchise"       },
    { factor: "Free Estimates",          us: "Yes — Always Free",      them: "May Charge for Visit"    },
    { factor: "Same-Day Service",        us: "Often Available",        them: "Week+ Wait Common"       },
    { factor: "Cleanup Included",        us: "Yes — We Leave It Clean",them: "Extra Charges Common"    },
    { factor: "Upfront, Honest Pricing",us: "No Hidden Fees",          them: "Surprise Add-Ons"        },
  ],
};

export const areas = [
  { name: "Fairfax",      desc: "Our home base. Serving Fairfax homeowners and businesses with every tree service."       },
  { name: "Centreville",  desc: "Fast, reliable tree removal and trimming for Centreville residents and property managers."},
  { name: "Clifton",      desc: "Rural properties, large lots, and estate tree care — our specialty in Clifton."          },
  { name: "Burke",        desc: "Trusted by Burke homeowners for safe, professional tree trimming and removal."          },
  { name: "Oakton",       desc: "Residential and commercial tree services for Oakton and the surrounding communities."    },
  { name: "Vienna",       desc: "Precision tree care for Vienna's tree-lined neighborhoods and historic properties."   },
  { name: "Annandale",    desc: "Fast response for Annandale residents — from storm damage to routine trimming."        },
  { name: "Springfield",  desc: "Full-service tree care for Springfield homes, townhomes, and commercial properties."  },
  { name: "Manassas",     desc: "Complete tree removal, stump grinding, and land clearing for Manassas and Bristow."     },
  { name: "Bristow",     desc: "Growing community with growing trees — we keep Bristow properties safe and beautiful." },
];

export const testimonials = [
  {
    name:    "Margaret T.",
    location:"Fairfax, VA",
    quote:   "A huge oak limb came down in my yard during the ice storm and blocked my entire driveway. JL Tree Service was there the same morning I called. They cleared it fast, safely, and the price was exactly what they quoted. I was so relieved.",
    rating:  5,
    service: "Storm Damage Cleanup",
  },
  {
    name:    "Robert C.",
    location:"Burke, VA",
    quote:   "I've used JL Tree Service three times over the years — stump grinding, a big dead tree removal, and pruning. Every time, the crew shows up on time, does the work right, and cleans up completely. There is no one else I would call.",
    rating:  5,
    service: "Multiple Services",
  },
  {
    name:    "Sandra L.",
    location:"Vienna, VA",
    quote:   "The estimate was completely free and James took the time to explain exactly what needed to be done — and what didn't. No upselling, no pressure. The trimming they did on my Japanese Maple was done with real care. Highly recommend.",
    rating:  5,
    service: "Tree Trimming",
  },
  {
    name:    "David M.",
    location:"Centreville, VA",
    quote:   "We had a dead tree that was leaning toward our house and needed it gone before a big storm. They came out the next day and removed it carefully without damaging our landscaping. Professional, clean, and reasonably priced.",
    rating:  5,
    service: "Tree Removal",
  },
  {
    name:    "Patricia H.",
    location:"Springfield, VA",
    quote:   "Three old stumps in my backyard were an eyesore for years. JL ground them all down and now I finally have a usable yard. They were in and out in a few hours and left the area clean. Great people to work with.",
    rating:  5,
    service: "Stump Grinding",
  },
  {
    name:    "James W.",
    location:"Oakton, VA",
    quote:   "We bought a property with a completely overgrown lot. JL Tree Service cleared everything — brush, dead trees, the works — and left us with a clean slate to landscape. They did exactly what they said they would do.",
    rating:  5,
    service: "Lot Clearing",
  },
];

export const faqs = [
  {
    q: "How much does tree removal cost in Northern Virginia?",
    a: "Tree removal costs vary based on the size, location, and condition of the tree. We provide free, on-site estimates so you know exactly what to expect before any work begins. Most residential removals in the Fairfax area range based on size — call us for your specific situation.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes — every estimate is free and comes with no obligation. We come to your property, assess the job in person, and give you a clear, honest price. No pressure, no gimmicks.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. JL Tree Service is fully licensed and carries full liability insurance. We protect your property and our crew. We can provide proof of insurance before any work begins if needed.",
  },
  {
    q: "Do you handle emergency tree situations?",
    a: "Yes. We offer emergency response for trees that have fallen on homes, vehicles, or are blocking access. Call us immediately and we will do our best to respond the same day. Storm damage situations are our specialty.",
  },
  {
    q: "What happens to the wood and debris after tree work?",
    a: "We clear all brush, limbs, and wood from your property as part of the job. If you want to keep the firewood, just let us know and we will stack it for you. Otherwise, we haul it away.",
  },
  {
    q: "Do you offer stump grinding separately from tree removal?",
    a: "Yes. Stump grinding is available as a standalone service. Many customers choose to remove a tree and grind the stump at the same time, but we are also happy to grind an existing stump from a tree that was removed previously.",
  },
  {
    q: "How do I know if a tree needs to be removed versus trimmed?",
    a: "During our free estimate, we will assess the tree's health, structure, and any hazards. We will honestly recommend removal only if trimming won't solve the problem. We don't upsell — our goal is to give you the right solution for your situation.",
  },
  {
    q: "Do you offer regular maintenance programs?",
    a: "Yes. We offer annual and semi-annual pruning programs for property owners who want to keep their trees healthy and avoid costly problems down the road. Ask us about our maintenance plans.",
  },
];

export const footer = {
  ctaHeadline: "Ready to Get Your Free Estimate?",
  ctaSub:      "Call now or request a quote online. We respond promptly and are happy to answer any questions before you commit to anything.",
  phoneLabel:  "(703) 935-8878",
  phoneHref:   "tel:7039358878",
  email:       "jltreeservice1@yahoo.com",
  address:    "Fairfax, VA 22030",
  serving:    "Serving Fairfax, Centreville, Clifton, Burke, Oakton, Vienna, Annandale, Springfield, Manassas, Bristow, and all of Northern Virginia",
  copyright:   `© ${new Date().getFullYear()} JL Tree Service. All rights reserved.`,
};
