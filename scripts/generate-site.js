#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// A.L.I.C.E. Website Generator — CLI Tool
// Generates a fully populated, deployable website from a company profile.
// ─────────────────────────────────────────────────────────────────────────────
// Usage:
//   node generate-site.js \
//     --company "ABC Plumbing" \
//     --industry tree \
//     --phone "(703) 555-0100" \
//     --email "info@abcplumbing.com" \
//     --location "Arlington, VA" \
//     --address "123 Main St, Arlington, VA 22201" \
//     --areaServed "Arlington, Alexandria, Falls Church" \
//     --output ../generated/abc-plumbing
// ─────────────────────────────────────────────────────────────────────────────

"use strict";

const fs   = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// ─── Argument Parsing ────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const key = argv[i];
    if (key.startsWith("--")) {
      const k = key.slice(2);
      args[k] = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true;
    }
  }
  return args;
}

// ─── Validation ──────────────────────────────────────────────────────────────

function validate(args) {
  const required = ["company", "industry", "phone", "email", "location", "output"];
  const missing  = required.filter(k => !args[k]);
  if (missing.length) {
    console.error(`❌  Missing required arguments: ${missing.join(", ")}`);
    process.exit(1);
  }
}

// ─── File Helpers ─────────────────────────────────────────────────────────────

function readFile(p) {
  return fs.readFileSync(p, "utf8");
}

function writeFile(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, "utf8");
}

function copyFile(src, dst) {
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
}

function copyDir(src, dst, extensionsToRename = {}) {
  if (!fs.existsSync(src)) return;
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const dstName = extensionsToRename[entry.name] || entry.name;
    const dstPath = path.join(dst, dstName);
    if (entry.isDirectory()) {
      fs.mkdirSync(dstPath, { recursive: true });
      copyDir(srcPath, dstPath, extensionsToRename);
    } else {
      copyFile(srcPath, dstPath);
    }
  }
}

// ─── Core Replacements ────────────────────────────────────────────────────────

/**
 * Apply company-specific string replacements to the template config string.
 */
function applyReplacements(configStr, data) {
  let r = configStr;

  r = r.replace(/"JL Tree Service"/g,          `"${data.companyName}"`);
  r = r.replace(/'JL Tree Service'/g,            `'${data.companyName}'`);
  r = r.replace(/"Fairfax's Trusted Tree Care Experts"/g,  `"${data.tagline}"`);
  r = r.replace(/'Fairfax's Trusted Tree Care Experts'/g,  `'${data.tagline}'`);
  r = r.replace(/jltreeservice1@yahoo\.com/g,   data.email);
  r = r.replace(/Fairfax, VA 22030/g,           data.address);
  r = r.replace(/Fairfax, VA \d{5}(-\d{4})?/g, data.address);
  r = r.replace(/\b22030(-\d{4})?\b/g,            data.zip);
  r = r.replace(/Fairfax/gi,                    data.city);
  r = r.replace(/Northern Virginia/gi,           data.areaServed);
  r = r.replace(/NoVa/gi,                      data.areaServed);
  r = r.replace(/NOVA/gi,                      data.areaServed.toUpperCase());
  r = r.replace(/VA(?!\w)/g,                  data.state);
  r = r.replace(/\(703\) 935-8878/g,          data.phone);
  r = r.replace(/7039358878/g,                 data.phoneRaw);
  r = r.replace(/tel:7039358878/g,             `tel:${data.phoneRaw}`);
  r = r.replace(/Northern Virginia's Most Trusted Tree Service/g, `${data.areaServed}'s Most Trusted ${data.industryLabel} Service`);
  r = r.replace(/Family Owned · Fully Insured/g, data.badge || "Family Owned · Fully Insured");
  r = r.replace(/https:\/\/jltreeservice\.com/g, `https://${data.domain}`);
  r = r.replace(/© \d{4} JL Tree Service/g,    `© ${new Date().getFullYear()} ${data.companyName}`);

  return r;
}

// ─── Service Generation from Research ───────────────────────────────────────

/**
 * Parse service names and one-line descriptions from the research markdown.
 * Returns an array of { name, desc } objects.
 */
function parseServicesFromResearch(researchText, industry) {
  const services = [];

  // Only match ### H3 headings (actual service names), skip ## and ####
  const sectionRegex = /^###\s+(.+?)\s*\n([\s\S]*?)(?=\n#{1,4}\s|\n##\s+[^#]|$)/gm;
  let match;

  while ((match = sectionRegex.exec(researchText)) !== null) {
    const title = match[1].trim();
    const body  = match[2].trim();

    // Skip if title looks like a subsection header (contains numbers or weird chars)
    if (/^\d+\./.test(title)) continue;

    // Get a meaningful description: first bullet or first long line
    const lines = body.split("\n").map(l => l.trim()).filter(l => l.length > 20);
    const firstLine = lines[0] || "";
    const desc = firstLine.replace(/^[-*]\s*/, "").replace(/[#*]/g, "").trim().slice(0, 200);

    if (title.length > 3 && title.length < 80 && desc.length > 20) {
      services.push({ name: title, desc });
    }
  }

  // Deduplicate and limit
  const seen = new Set();
  return services
    .filter(s => !seen.has(s.name.toLowerCase()) && seen.add(s.name.toLowerCase()))
    .slice(0, 7);
}

// ─── FAQ Generation from Research ────────────────────────────────────────────

function parseFaqsFromResearch(researchText) {
  const faqs = [];

  // Format: **Q: question?**  (ends with ?**)
  // Next line: A: answer text
  // s flag = dotall so . matches newlines
  const qaRegex = /\*\*Q:\s*(.+?)\*\*\nA:\s*([\s\S]*?)(?=\n\*\*Q:|\n#{1,3}\s|\n##\s+[^#]|$)/gis;
  let match;

  while ((match = qaRegex.exec(researchText)) !== null) {
    const q = match[1].replace(/\*\*/g, "").trim();
    const a = match[2].replace(/\*\*/g, "").trim().slice(0, 300);
    if (q.length > 5 && a.length > 10) {
      faqs.push({ q, a });
    }
  }

  return faqs.slice(0, 6);
}

// ─── Testimonial Auto-Generation ─────────────────────────────────────────────

function generateTestimonials(companyName, city, state) {
  const firstName = companyName.split(" ")[0];
  return [
    {
      name: `${firstName} Homeowner`,
      location: `${city}, ${state}`,
      quote: `We needed ${companyName} for an emergency issue and they came out the same day. Professional, clean, and fair pricing. Would definitely call them again.`,
      rating: 5,
      service: "Emergency Service",
    },
    {
      name: `${firstName} Property Owner`,
      location: `${city}, ${state}`,
      quote: `Great experience from start to finish. The team was punctual, thorough, and left the property spotless. The quality of work exceeded our expectations.`,
      rating: 5,
      service: "Complete Service",
    },
    {
      name: `Satisfied Customer`,
      location: `${city}, ${state}`,
      quote: `Got a free estimate and the work was scheduled within days. The crew showed up on time and the job was done right. Highly recommend ${companyName}.`,
      rating: 5,
      service: "Standard Service",
    },
  ];
}

// ─── Config File Writer ───────────────────────────────────────────────────────

/**
 * Write a full config.ts from a template string after replacements
 * and injecting generated sections.
 */
function writeConfig(configStr, data, outputDir) {
  // Inject generated services (if research was found)
  if (data.services.length > 0) {
    const servicesBlock = data.services.map(s => `  {
    name:    "${s.name}",
    icon:    "service",
    desc:    "${s.desc}",
    featured: false,
    features: [
      "Professional service, every time",
      "Free estimate before any work",
      "Fully licensed and insured",
      "Satisfaction guaranteed",
    ],
    cta: "Get Quote",
  }`).join(",\n");

    configStr = configStr.replace(
      /export const services = \[[\s\S]*?\];/m,
      `export const services = [\n${servicesBlock}\n];`
    );
  }

  // Inject generated FAQs
  if (data.faqs.length > 0) {
    const faqsBlock = data.faqs.map(f => `  {
    q: "${f.q.replace(/"/g, '\\"')}",
    a: "${f.a.replace(/"/g, '\\"')}",
  }`).join(",\n");

    configStr = configStr.replace(
      /export const faqs = \[[\s\S]*?\];/m,
      `export const faqs = [\n${faqsBlock}\n];`
    );
  }

  // Inject generated testimonials
  const testimonialBlock = data.testimonials.map(t => `  {
    name:    "${t.name}",
    location:"${t.location}",
    quote:   "${t.quote.replace(/"/g, '\\"')}",
    rating:  ${t.rating},
    service: "${t.service}",
  }`).join(",\n");

  configStr = configStr.replace(
    /export const testimonials = \[[\s\S]*?\];/m,
    `export const testimonials = [\n${testimonialBlock}\n];`
  );

  // Inject generated areas
  if (data.areas.length > 0) {
    const areasBlock = data.areas.map(a => `  { name: "${a.name}", desc: "${a.desc}" }`).join(",\n");
    configStr = configStr.replace(
      /export const areas = \[[\s\S]*?\];/m,
      `export const areas = [\n${areasBlock}\n];`
    );
  }

  // Fix phone href (tel: with digits only)
  configStr = configStr.replace(
    /ctaPrimary:[^}]+href:[^,]+/g,
    (m) => m.replace(/href:"[^"]+"/, `href:"tel:${data.phoneRaw}"`)
  );

  // Regenerate footer section: fix serving (from auto-generated areas) and copyright
  // Use the parsed areas if available; otherwise derive from the areaServed string
  let footerAreas;
  if (data.areas.length > 1) {
    footerAreas = data.areas.map(a => a.name).join(", ");
  } else {
    // Fallback: use the areaServed string as-is
    footerAreas = data.areaServed;
  }
  configStr = configStr.replace(
    /export const footer = \{[\s\S]*?\};/m,
    `export const footer = {
  ctaHeadline: "Ready to Get Your Free Estimate?",
  ctaSub:      "Call now or request a quote online. We respond promptly and are happy to answer any questions before you commit to anything.",
  phoneLabel:  "${data.phone}",
  phoneHref:   "tel:${data.phoneRaw}",
  email:       "${data.email}",
  address:    "${data.address}",
  serving:    "Serving ${footerAreas}",
  copyright:   \`© \${new Date().getFullYear()} ${data.companyName}. All rights reserved.\`,
};`
  );

  const outPath = path.join(outputDir, "app", "config.ts");
  writeFile(outPath, configStr);
  console.log(`✅  Config written → ${outPath}`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const argv  = process.argv.slice(2);
  const args  = parseArgs(argv);

  // ── Interactive prompt if no args ──────────────────────────────────────────
  if (Object.keys(args).length === 0 || argv.includes("--help") || argv.includes("-h")) {
    console.log(`
🏗   A.L.I.C.E. Website Generator
    Usage: node generate-site.js [options]

Options:
  --company     Company name (required)
  --industry    Industry template: tree | mri (required)
  --phone       Phone number (required)
  --email       Email address (required)
  --location    City, State (e.g. "Arlington, VA") (required)
  --address     Full address (e.g. "123 Main St, Arlington, VA 22201")
  --areaServed  Service area description (e.g. "Arlington, Alexandria, Falls Church")
  --output      Output directory path (required)
  --badge       Hero badge text (optional, default: "Family Owned · Fully Insured")
  --tagline     Company tagline (optional)

Example:
  node generate-site.js \
    --company "ABC Plumbing" \
    --industry tree \
    --phone "(703) 555-0100" \
    --email "info@abcplumbing.com" \
    --location "Arlington, VA" \
    --address "123 Main St, Arlington, VA 22201" \
    --areaServed "Arlington, Alexandria, Falls Church" \
    --output ../generated/abc-plumbing
`);
    process.exit(0);
  }

  validate(args);

  const TEMPLATE_ROOT = path.join(__dirname, "..", "templates");
  const industry      = args.industry || "tree";
  const templateDir   = path.join(TEMPLATE_ROOT, industry);
  const researchDir   = path.join(templateDir, "research");

  // ── Check template exists ─────────────────────────────────────────────────
  if (!fs.existsSync(templateDir)) {
    console.error(`❌  Industry template not found: ${industry}`);
    console.error(`Available templates: ${fs.readdirSync(TEMPLATE_ROOT).join(", ")}`);
    process.exit(1);
  }

  // ── Resolve output path ───────────────────────────────────────────────────
  const outputDir = path.resolve(args.output);
  if (fs.existsSync(outputDir)) {
    console.error(`⚠️  Output directory already exists: ${outputDir}`);
    console.error("   Move or delete it before re-generating, or use a different --output path.");
    process.exit(1);
  }

  // ── Parse location ────────────────────────────────────────────────────────
  const locationMatch = args.location.match(/^(.+?),\s*(\w{2})$/);
  const city  = locationMatch ? locationMatch[1].trim()  : args.location;
  const state = locationMatch ? locationMatch[2].trim()  : "VA";

  // ── Extract zip from full address ─────────────────────────────────────────
  const zipMatch = (args.address || "").match(/\b(\d{5}(?:-\d{4})?)\b/);
  const zip = zipMatch ? zipMatch[1] : "22030";

  // ── Parse phone for tel: href ─────────────────────────────────────────────
  const phoneRaw = args.phone.replace(/\D/g, "");

  // ── Build company data ────────────────────────────────────────────────────
  const companyName   = args.company;
  const industryLabel = industry === "tree" ? "Tree Service"
                      : industry === "mri" ? "Restoration"
                      : industry.charAt(0).toUpperCase() + industry.slice(1);

  const domain = args.email.split("@")[1] || `${companyName.toLowerCase().replace(/\s+/g, "")}.com`;

  const data = {
    companyName,
    email:       args.email,
    phone:       args.phone,
    phoneRaw,
    city,
    state,
    zip,
    address:     args.address     || args.location,
    areaServed:  args.areaServed   || args.location,
    domain,
    tagline:     args.tagline     || `${city}'s Trusted ${industryLabel} Experts`,
    badge:       args.badge,
    industryLabel,
    services:    [],
    faqs:        [],
    testimonials: generateTestimonials(companyName, city, state),
    areas:       [{ name: city, desc: `Professional ${industryLabel} for ${city} residents and property owners.` }],
  };

  // ── Load research (intelligence layer) ───────────────────────────────────
  const researchPath = path.join(researchDir, "base.md");
  let researchText  = "";

  if (fs.existsSync(researchPath)) {
    researchText = readFile(researchPath);
    console.log(`📋  Research loaded: ${researchPath}`);

    data.services = parseServicesFromResearch(researchText, industry);
    data.faqs     = parseFaqsFromResearch(researchText);

    // Parse areas from research
    const areaMatches = [...researchText.matchAll(/(?:^|\n)([A-Z][a-zA-Z ]+?(?:VA|VA\s|,|County))/gm)]
      .map(m => m[1].trim())
      .filter(a => a.length > 2 && a.length < 40)
      .slice(0, 8);

    if (areaMatches.length > 1) {
      data.areas = areaMatches.map(name => ({
        name,
        desc: `Professional ${industryLabel} for ${name} residents and property owners.`,
      }));
    }

    console.log(`   → ${data.services.length} services auto-populated from research`);
    console.log(`   → ${data.faqs.length} FAQs auto-populated from research`);
  } else {
    console.log(`⚠️  No research file at ${researchPath} — using template defaults`);
  }

  // ── Load template config ─────────────────────────────────────────────────
  const templateConfigPath = path.join(templateDir, "app", "config.ts");
  if (!fs.existsSync(templateConfigPath)) {
    console.error(`❌  Template config not found: ${templateConfigPath}`);
    process.exit(1);
  }

  let configStr = readFile(templateConfigPath);
  console.log(`📄  Template loaded: ${templateConfigPath}`);

  // ── Apply company-specific replacements ──────────────────────────────────
  configStr = applyReplacements(configStr, data);
  console.log(`🔄  Company replacements applied`);

  // ── Copy template structure to output ────────────────────────────────────
  const templateAppSrc = path.join(templateDir, "app");
  const templateAppDst = path.join(outputDir, "app");
  const templatePublicDst = path.join(outputDir, "public");

  // Copy app/ (except config.ts — we'll write our generated one)
  copyDir(templateAppSrc, templateAppDst);
  // Copy public/
  copyDir(path.join(templateDir, "public"), templatePublicDst);
  // Copy root-level build files
  for (const file of ["package.json", "next.config.js", "tailwind.config.js", "tsconfig.json", "postcss.config.js"]) {
    const src = path.join(templateDir, file);
    if (fs.existsSync(src)) copyFile(src, path.join(outputDir, file));
  }

  // Remove node_modules and lock files from copy
  const rmLock = (dir) => {
    for (const f of ["package-lock.json", "yarn.lock", "pnpm-lock.yaml"]) {
      const p = path.join(dir, f);
      if (fs.existsSync(p)) fs.unlinkSync(p);
    }
    const nm = path.join(dir, "node_modules");
    if (fs.existsSync(nm)) fs.rmSync(nm, { recursive: true });
  };
  rmLock(outputDir);

  console.log(`📁  Template files copied to: ${outputDir}`);

  // ── Write generated config.ts ─────────────────────────────────────────────
  writeConfig(configStr, data, outputDir);

  // ── Summary ───────────────────────────────────────────────────────────────
  console.log(`
✅  Website generated successfully!

📍  Output: ${outputDir}

Next steps:
  1. cd ${outputDir}
  2. npm install
  3. npm run build
  4. npx vercel --prod

Company:    ${data.companyName}
Industry:   ${industry}
Location:   ${data.city}, ${data.state}
Services:   ${data.services.length > 0 ? data.services.length + " auto-populated from research" : "from template"}
FAQs:       ${data.faqs.length > 0 ? data.faqs.length + " auto-populated from research" : "from template"}
`);
}

main();
