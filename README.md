# A.L.I.C.E. Website Template Framework

**Template version:** 1.0.0  
**Framework:** Next.js 14 + TypeScript + Tailwind CSS + Framer Motion  
**Owner:** Robbies Robotics LLC

---

## Overview

This is the master template used to generate high-quality, animated business websites. The MRI sales pitch site (mri-sales-pitch.vercel.app) was reverse-engineered into this reusable framework.

**What this template preserves:**
- Overall layout and section order
- Scroll behavior and smooth navigation
- Sticky header + mobile hamburger menu
- Framer Motion animations (fadeUp, slideLeft, stagger, bounceIn)
- Contrast and visual hierarchy
- Spacing, polish, animation feel
- Responsive/mobile behavior
- Premium quality throughout

**What is NOT preserved (per-site customization):**
- Company name, tagline, phone, email, address
- Branding and color scheme
- Specific business content (testimonials, services, FAQ, etc.)
- Domain/URL and images

---

## Quick Start — Generate a New Site

### Step 1: Copy the Template

```bash
# Clone the template repo
git clone https://github.com/robbiesrobotics/website-template.git new-site-name
cd new-site-name

# Install dependencies
npm install
```

### Step 2: Fill in `app/config.ts`

Edit `app/config.ts` — every field in that file is the business data for the new site. The page template reads from this file and never needs to be edited directly.

Key sections:
- `company` — name, phone, address, area served, stats
- `colors` — brand color palette (primary, secondary, dark, accent)
- `header`, `hero`, `heroFull` — header and hero content
- `damageTypes[]` — service categories
- `testimonials[]` — customer reviews
- `faqs[]` — frequently asked questions
- `warranties[]` — guarantee cards
- `residential.services[]` — service cards
- `footer`, `leadForm`, `ctaBanners` — CTAs and footer

### Step 3: Add Images

Replace placeholder images in `/public/`:
- `modern_logo.png` → company logo
- `top-banner.jpg` → hero background image
- `advocate.jpg`, `why-different.jpg`, `commercial.jpg` → section images
- `roofing-header.jpg`, `windows-header.jpg`, `siding-header.jpg` → service card images
- `damage/hail.jpg`, `damage/wind.jpg`, `damage/flood.jpg`, `damage/fire.jpg` → damage type photos

### Step 4: Deploy

```bash
# Create new Vercel project
vercel

# Or link to existing Vercel project
vercel link
vercel --prod
```

---

## Color System

All colors are controlled by CSS variables in `app/globals.css`:

```css
:root {
  --primary:    #8E1B1B;  /* CTA buttons, section labels */
  --secondary:  #546571;  /* Section backgrounds */
  --dark:       #2d3a45;  /* Header, footer */
  --accent:     #EEF2F6;  /* Light backgrounds */
  --blue-gray:  #9FB0BE;  /* Body text on dark */
  --warm:       #FAFBFC;  /* Card backgrounds */
}
```

To re-theme a site, change only these 6 values.

---

## File Structure

```
website-template/
├── app/
│   ├── config.ts       ← ALL business content (edit this only)
│   ├── page.tsx        ← Template (do not edit directly)
│   ├── layout.tsx
│   └── globals.css      ← CSS variables (colors)
├── public/             ← Images (replace with company assets)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## A.L.I.C.E. Agent Workflow

When you say **"let's make a new site"** in the A.L.I.C.E Sales Telegram group, the A.L.I.C.E. agent:

1. Spawns the Website Generator specialist
2. Runs a Q&A to collect: company name, phone, area served, colors, services, testimonials, FAQ items
3. Writes the data to `app/config.ts`
4. Replaces placeholder images (or asks for image uploads)
5. Runs `vercel --prod` to deploy
6. Returns the new URL

---

## Deployment via Vercel API

Each new site = new Vercel project + unique URL. The template repo is the source; each deployment is a separate Vercel project.

To deploy programmatically:
```bash
vercel --prod --token YOUR_VERCEL_TOKEN
```

---

## Support

Owner: Robbies Robotics LLC  
Contact: contact@robbiesrobotics.ai  
GitHub: https://github.com/robbiesrobotics/website-template
