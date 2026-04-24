// ─────────────────────────────────────────────────────────────────────────────
// JL TREE SERVICE — Website Template Config
// A.L.I.C.E. Framework · website-template repo
// ─────────────────────────────────────────────────────────────────────────────

export const company = {
  name:        "ABC Plumbing",
  tagline:     "Arlington's Trusted Tree Service Experts",
  phone:       "(703) 555-0100",
  email:       "info@abcplumbing.com",
  address:     "123 Main St, Arlington, VA 22201",
  city:        "Arlington",
  state:       "VA",
  zip:         "22201",
  areaServed:  "Arlington, Alexandria, Falls Church",
  licenses:    "Fully Licensed & Insured",
  established: "Family Owned & Operated",
  website:     "https://abcplumbing.com",
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
  logoAlt:   "ABC Plumbing",
  phone:     "(703) 555-0100",
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
  imageAlt: "JL Tree Service — Professional tree care in Arlington and Arlington, Alexandria, Falls Church",
  headline: "Arlington, Alexandria, Falls Church's Most Trusted Tree Service",
  sub:      "Safe. Professional. Affordable. Serving Arlington, Centreville, Burke, Vienna, Springfield, and all of Arlington, Alexandria, Falls Church.",
  ctaPrimary:  { label: "Call (703) 555-0100", href: "tel:7035550100" },
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
    name:    "Tree Removal (Full Take-Down)",
    icon:    "service",
    desc:    "Complete removal of standing trees, including trunk, limbs, and root system",
    featured: false,
    features: [
      "Professional service, every time",
      "Free estimate before any work",
      "Fully licensed and insured",
      "Satisfaction guaranteed",
    ],
    cta: "Get Quote",
  },
  {
    name:    "Stump Grinding / Stump Removal",
    icon:    "service",
    desc:    "Stump grinding: $75–$400 per stump depending on size; below-grade finish so lawn can be re-seeded",
    featured: false,
    features: [
      "Professional service, every time",
      "Free estimate before any work",
      "Fully licensed and insured",
      "Satisfaction guaranteed",
    ],
    cta: "Get Quote",
  },
  {
    name:    "Tree Trimming / Pruning",
    icon:    "service",
    desc:    "Crown reduction: reduces overall canopy spread, $300–$1,500 depending on tree size",
    featured: false,
    features: [
      "Professional service, every time",
      "Free estimate before any work",
      "Fully licensed and insured",
      "Satisfaction guaranteed",
    ],
    cta: "Get Quote",
  },
  {
    name:    "Lot Clearing / Land Clearing",
    icon:    "service",
    desc:    "Full clearing of overgrown lots for construction, agricultural use, or property restoration",
    featured: false,
    features: [
      "Professional service, every time",
      "Free estimate before any work",
      "Fully licensed and insured",
      "Satisfaction guaranteed",
    ],
    cta: "Get Quote",
  },
  {
    name:    "Storm Damage Cleanup / Emergency Services",
    icon:    "service",
    desc:    "24/7 availability is the differentiator; customers in crisis need immediate response",
    featured: false,
    features: [
      "Professional service, every time",
      "Free estimate before any work",
      "Fully licensed and insured",
      "Satisfaction guaranteed",
    ],
    cta: "Get Quote",
  },
  {
    name:    "Brush Clearing / Brush Hogging",
    icon:    "service",
    desc:    "Rotary mower/brush hog treatment for overgrown areas",
    featured: false,
    features: [
      "Professional service, every time",
      "Free estimate before any work",
      "Fully licensed and insured",
      "Satisfaction guaranteed",
    ],
    cta: "Get Quote",
  },
  {
    name:    "Grading / Grading Services",
    icon:    "service",
    desc:    "Rough and finish grading for drainage correction, lawn restoration, and construction prep",
    featured: false,
    features: [
      "Professional service, every time",
      "Free estimate before any work",
      "Fully licensed and insured",
      "Satisfaction guaranteed",
    ],
    cta: "Get Quote",
  }
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
  { name: "Arlington", desc: "Professional Tree Service for Arlington residents and property owners." }
];

export const testimonials = [
  {
    name:    "ABC Homeowner",
    location:"Arlington, VA",
    quote:   "We needed ABC Plumbing for an emergency issue and they came out the same day. Professional, clean, and fair pricing. Would definitely call them again.",
    rating:  5,
    service: "Emergency Service",
  },
  {
    name:    "ABC Property Owner",
    location:"Arlington, VA",
    quote:   "Great experience from start to finish. The team was punctual, thorough, and left the property spotless. The quality of work exceeded our expectations.",
    rating:  5,
    service: "Complete Service",
  },
  {
    name:    "Satisfied Customer",
    location:"Arlington, VA",
    quote:   "Got a free estimate and the work was scheduled within days. The crew showed up on time and the job was done right. Highly recommend ABC Plumbing.",
    rating:  5,
    service: "Standard Service",
  }
];

export const faqs = [
  {
    q: "How much does tree removal cost?",
    a: "In the Fairfax area, tree removal typically ranges from $500 to $5,000+, depending on the tree's size, species, location, and accessibility. The only way to get an accurate price is a free on-site estimate. We measure the tree in person and give you a written price before any work begins.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes — all our estimates are free, on-site, and with no obligation. We'll walk the property with you, explain exactly what needs to be done, and give you a written price within 24 hours.",
  },
  {
    q: "How long does a tree removal take?",
    a: "Most residential tree removals are completed in 4–8 hours. Larger trees or trees requiring crane work may take a full day. We'll give you a time estimate with your quote.",
  },
  {
    q: "Do I need a permit to remove a tree?",
    a: "Fairfax County has specific regulations for tree removal on developed properties. Most residential tree removals do not require a permit, but certain heritage trees or properties in specific zones may. We'll research this during our inspection and handle any required paperwork.",
  },
  {
    q: "Does homeowners insurance cover tree removal?",
    a: "It depends on the situation. If a tree falls on an insured structure (your home, fence, shed), your policy typically covers removal up to a limit. If a tree falls on open land with no damage, coverage varies. We can help you navigate the claims process — many customers are surprised what their polic",
  },
  {
    q: "Are you fully insured?",
    a: "Yes. We carry $2M in general liability insurance and full workers' compensation coverage. Every crew member is covered. We'll provide certificate of insurance documentation with any estimate.",
  }
];

export const footer = {
  ctaHeadline: "Ready to Get Your Free Estimate?",
  ctaSub:      "Call now or request a quote online. We respond promptly and are happy to answer any questions before you commit to anything.",
  phoneLabel:  "(703) 555-0100",
  phoneHref:   "tel:7035550100",
  email:       "info@abcplumbing.com",
  address:    "123 Main St, Arlington, VA 22201",
  serving:    "Serving Arlington, Alexandria, Falls Church",
  copyright:   `© ${new Date().getFullYear()} ABC Plumbing. All rights reserved.`,
};
