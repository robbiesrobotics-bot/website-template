# A.L.I.C.E. Website Generator

Generates a fully populated, deployable website from a company profile + industry research.

## Quick Start

```bash
cd website-template/scripts
node generate-site.js \
  --company "ABC Plumbing" \
  --industry tree \
  --phone "(703) 555-0100" \
  --email "info@abcplumbing.com" \
  --location "Arlington, VA" \
  --address "123 Main St, Arlington, VA 22201" \
  --areaServed "Arlington, Alexandria, Falls Church" \
  --output ../generated/abc-plumbing
```

Then:
```bash
cd ../generated/abc-plumbing
npm install
npm run build
npx vercel --prod
```

## All Options

| Flag | Required | Description |
|------|----------|-------------|
| `--company` | ✅ | Company name, e.g. `"ABC Plumbing"` |
| `--industry` | ✅ | Template: `tree` or `mri` |
| `--phone` | ✅ | Display phone, e.g. `"(703) 555-0100"` |
| `--email` | ✅ | Contact email |
| `--location` | ✅ | City, State — e.g. `"Arlington, VA"` |
| `--address` | | Full street address (defaults to `--location`) |
| `--areaServed` | | Service area description (defaults to `--location`) |
| `--tagline` | | Custom hero tagline |
| `--badge` | | Hero badge text (default: `"Family Owned · Fully Insured"`) |
| `--output` | ✅ | Output directory path |

## How It Works

1. **Reads the industry research** (`templates/{industry}/research/base.md`) — the intelligence layer containing real service descriptions, pricing ranges, FAQ answers, trust drivers, and CTA language
2. **Reads the template config** (`templates/{industry}/app/config.ts`) — the full TypeScript config with premium design
3. **Applies company-specific replacements** — phone, email, address, city, area served, website URL, copyright
4. **Auto-populates sections from research:**
   - Services (from research service descriptions)
   - FAQs (from research FAQ section)
   - Service areas (from research location mentions)
5. **Generates testimonials** — 3 realistic testimonial templates with the new company name
6. **Copies template files** (page.tsx, layout.tsx, globals.css, public assets, build config) to the output directory

## Output Directory Structure

```
{output}/
├── app/
│   ├── config.ts      ← GENERATED (company-specific)
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
│   └── (images)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Adding New Industry Templates

1. Create a new template directory: `templates/{new-industry}/`
2. Add `app/config.ts` — the full TypeScript config (use the tree template as a reference)
3. Add `research/base.md` — industry intelligence brief (use the tree research as a reference)
4. The generator will automatically find and use it with `--industry {new-industry}`

## Research File Format

The `research/base.md` is the intelligence layer. It should include:

- **Service descriptions** with pricing ranges (used to auto-populate service cards)
- **FAQ section** with `Q:` and `A:` patterns (auto-extracted for the FAQ section)
- **Trust drivers** (certifications, insurance amounts, guarantees)
- **CTA language** patterns
- **Service-area locations** (auto-extracted for the areas section)

The generator parses these sections automatically — no extra config needed.

## Vercel Deployment

After generation:

```bash
cd {output}
npm install
npm run build
npx vercel --prod
```

Or set up a Git repo and connect to Vercel for automatic deploys on push.

---

Built by **Webber** (A.L.I.C.E. Website Builder Specialist)
