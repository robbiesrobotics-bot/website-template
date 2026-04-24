"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  company, colors, header, hero, stats,
  services, processSteps, whyChooseUs,
  areas, testimonials, faqs, footer,
} from "./config";

// ── Animation variants (matching MRI template quality) ────────────────────────
const fadeUp: Variants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};
const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};
const bounceIn: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } },
};
const slideLeft = (i = 0): Variants => ({
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 18, delay: i * 0.1 } },
});
const slideRight = (i = 0): Variants => ({
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 18, delay: i * 0.1 } },
});
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const viewport = { once: true, margin: "-50px" };

// ── Service icon SVGs ────────────────────────────────────────────────────────
const ServiceIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    tree: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 3l8 9H4L12 3zm0 4v11M8 20h8M10 20h4" />
      </svg>
    ),
    stump: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 22V8M7 8h10M5 8c0-3 2-5 7-5s7 2 7 5M5 8c0 2 1 4 7 4s7-2 7-4" />
      </svg>
    ),
    prune: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
    land: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    storm: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    emergency: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    grade: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  };
  return <>{icons[name] || icons.tree}</>;
};

// ── Process step icons ────────────────────────────────────────────────────────
const ProcessIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    phone:  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
    search: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>,
    check:  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>,
  };
  return <>{icons[name] || icons.phone}</>;
};

// ── Main Page Component ──────────────────────────────────────────────────────
export default function Home() {
  const [showTop, setShowTop]       = useState(false);
  const [openFaq, setOpenFaq]      = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const primary   = colors.primary;
  const secondary = colors.secondary;
  const dark      = colors.dark;
  const accent    = colors.accent;
  const blueGray  = colors.blueGray;
  const warm      = colors.warm;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ═══════════════════════════════════════
          STICKY HEADER
      ═══════════════════════════════════════ */}
      <header
        className="sticky top-0 z-50 shadow-md"
        style={{ backgroundColor: dark }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: primary }}
            >
              JL
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm leading-tight">JL Tree Service</div>
              <div className="text-white/50 text-xs">Fairfax, VA</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {header.navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white/80 hover:text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white/10 transition"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <a
              href={hero.ctaPrimary.href}
              className="hidden sm:inline-flex items-center gap-2 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition shadow-lg"
              style={{ backgroundColor: primary }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.primaryHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {company.phone}
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white hover:text-white/80 transition p-1"
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════
          MOBILE MENU OVERLAY
      ═══════════════════════════════════════ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col" style={{ backgroundColor: dark }}>
          <div className="flex items-center justify-between px-4 py-4">
            <span className="text-white font-bold text-lg">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white transition">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8">
            {header.navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { scrollTo(link.id); setMobileMenuOpen(false); }}
                className="text-white text-xl font-medium hover:text-white/80 transition"
              >
                {link.label}
              </button>
            ))}
            <a
              href={hero.ctaPrimary.href}
              className="mt-4 w-full text-center text-white font-bold text-lg px-8 py-4 rounded-xl"
              style={{ backgroundColor: primary }}
            >
              Call Now: {company.phone}
            </a>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════
          QUICK NAV (below header)
      ═══════════════════════════════════════ */}
      <div style={{ backgroundColor: dark }} className="border-b border-white/10 py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="hidden sm:flex flex-wrap justify-center gap-2">
            {header.navLinks.map((c) => (
              <motion.button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className="text-white text-xs font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
                style={{ backgroundColor: c.color === "primary" ? primary : secondary }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {c.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          HERO — Dark dramatic, forest green
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: dark }}>
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-28 text-center text-white"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-8">
            <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            {hero.badge}
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {hero.headline}
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 text-white/80 leading-relaxed">
            {hero.sub}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={hero.ctaPrimary.href}
              className="w-full sm:w-auto text-white text-base sm:text-lg font-bold px-8 py-4 rounded-xl shadow-lg transition"
              style={{ backgroundColor: primary }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.primaryHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary)}
            >
              📞 {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="w-full sm:w-auto bg-white/10 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition text-base sm:text-lg"
            >
              {hero.ctaSecondary.label}
            </a>
          </motion.div>

          {/* Emergency line */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-white/70 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            {hero.urgentLine}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          STATS / CREDIBILITY BAR
      ═══════════════════════════════════════ */}
      <section style={{ backgroundColor: primary }} className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-center">
            {stats.items.map((item, ci) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center px-4"
                variants={bounceIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ delay: ci * 0.06 }}
              >
                <span className="text-white font-bold text-xl sm:text-2xl">{item.stat}</span>
                <span className="text-white/70 text-xs">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST BAR — below stats
      ═══════════════════════════════════════ */}
      <div style={{ backgroundColor: dark }} className="py-8 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { icon: "✓", text: "Free Estimates" },
              { icon: "✓", text: "Licensed & Insured" },
              { icon: "✓", text: "Family Owned" },
              { icon: "✓", text: "Same-Day Service" },
              { icon: "✓", text: "No Hidden Fees" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════ */}
      <section id="services" className="py-20 sm:py-24 px-4" style={{ backgroundColor: accent }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-14"
          >
            <p
              className="font-semibold text-sm tracking-widest uppercase mb-3"
              style={{ color: primary }}
            >
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Tree Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
              From emergency storm damage to planned property improvements, our certified crew handles every job with safety first and quality always.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, si) => (
              <motion.div
                key={svc.name}
                className="group rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: warm }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: si * 0.07, type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{ y: -6 }}
              >
                {/* Icon header */}
                <div
                  className="p-6 flex items-center gap-4"
                  style={{ backgroundColor: primary }}
                >
                  <div className="text-white opacity-90">
                    <ServiceIcon name={svc.icon} />
                  </div>
                  <h3 className="text-white font-bold text-xl">{svc.name}</h3>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-gray-600 text-sm">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: primary }}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={hero.ctaPrimary.href}
                    className="inline-flex items-center justify-center gap-2 w-full text-white font-semibold px-5 py-2.5 rounded-lg transition text-sm"
                    style={{ backgroundColor: primary }}
                  >
                    {svc.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — after services */}
      <div style={{ backgroundColor: warm }} className="border-t border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Not Sure What You Need?
          </h3>
          <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Give us a call. We'll assess your situation and give you honest advice — whether that means our services or not.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="w-full sm:w-auto text-white font-bold px-8 py-4 rounded-xl shadow-lg text-base sm:text-lg"
              style={{ backgroundColor: primary }}
            >
              Call (703) 935-8878
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="text-gray-600 font-semibold text-base hover:underline"
            >
              Or get a free estimate
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          PROCESS STEPS
      ═══════════════════════════════════════ */}
      <section id="process" className="py-20 sm:py-24 px-4" style={{ backgroundColor: dark }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-12"
          >
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: blueGray }}>
              Simple, Honest Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              What Happens When You Call
            </h2>
            <p className="text-white/60 text-base">Free estimate · No obligation · Fast response</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((s, si) => (
              <motion.div
                key={s.step}
                className="text-center relative"
                custom={si}
                variants={slideLeft(si)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {/* Connector (desktop) */}
                {si < processSteps.length - 1 && (
                  <div className="hidden sm:block absolute top-7 left-[60%] right-0 h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                )}
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full text-white font-bold text-xl mb-5 shadow-lg"
                  style={{ backgroundColor: primary }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewport}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: si * 0.15 }}
                >
                  <ProcessIcon name={s.icon} />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mt-12"
          >
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg text-base"
              style={{ backgroundColor: primary }}
            >
              📞 {hero.ctaPrimary.label}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE US — Comparison table
      ═══════════════════════════════════════ */}
      <section id="why" className="py-20 sm:py-24 px-4" style={{ backgroundColor: accent }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-12"
          >
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: primary }}>
              The Comparison That Matters
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Why Choose JL Tree Service?
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              {whyChooseUs.intro}
            </p>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.1 }}
            className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xl mb-10"
            style={{ backgroundColor: warm }}
          >
            <table className="w-full min-w-[560px]">
              <thead>
                <tr>
                  <th className="text-left p-4 text-gray-700 font-bold text-sm w-1/3 border-b border-gray-200 bg-gray-50">Factor</th>
                  <th
                    className="p-4 text-white font-bold text-sm text-center border-b border-gray-200"
                    style={{ backgroundColor: primary }}
                  >
                    JL Tree Service
                  </th>
                  <th
                    className="p-4 text-center text-gray-500 font-bold text-sm border-b border-gray-200 bg-gray-50"
                  >
                    Others
                  </th>
                </tr>
              </thead>
              <tbody>
                {whyChooseUs.table.map((row, i) => (
                  <motion.tr
                    key={row.factor}
                    className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: i * 0.05 }}
                  >
                    <td className="p-4 text-gray-700 font-medium text-sm">{row.factor}</td>
                    <td className="p-4 text-center">
                      <span
                        className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-white"
                        style={{ backgroundColor: primary, opacity: 0.85 }}
                      >
                        {row.us}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {row.them}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Key guarantees */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { icon: "🛡️", title: "Fully Insured", desc: "Complete liability coverage protects your property on every job." },
              { icon: "💰", title: "Upfront Pricing", desc: "The quote we give is the price you pay. No hidden fees, no surprises." },
              { icon: "🏠", title: "Clean Worksite", desc: "We leave your property cleaner than we found it. Guaranteed." },
            ].map((item, ii) => (
              <motion.div
                key={item.title}
                variants={bounceIn}
                className="rounded-2xl p-6 border border-gray-200 text-center"
                style={{ backgroundColor: warm }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ backgroundColor: dark }} className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Get Started with a Free Estimate
          </h3>
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            No obligation. No pressure. Just an honest assessment from people who care about doing the job right.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="w-full sm:w-auto text-white font-bold px-8 py-4 rounded-xl shadow-lg text-base sm:text-lg"
              style={{ backgroundColor: primary }}
            >
              Call (703) 935-8878
            </a>
            <span className="text-white/40 text-sm">or</span>
            <a
              href={hero.ctaSecondary.href}
              className="text-white/70 font-semibold text-base hover:text-white transition"
            >
              Request Free Estimate
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          SERVICE AREAS
      ═══════════════════════════════════════ */}
      <section id="areas" className="py-20 sm:py-24 px-4" style={{ backgroundColor: warm }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-14"
          >
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: primary }}>
              Service Areas
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proudly Serving Northern Virginia
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
              From Fairfax to Manassas, Burke to Vienna — we're your neighbors, and we're always close by.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((area, ai) => (
              <motion.div
                key={area.name}
                className="rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all"
                style={{ backgroundColor: "white" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: ai * 0.06, type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: primary }}>
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <h3 className="font-bold text-gray-900 text-base">{area.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section id="testimonials" className="py-20 sm:py-24 px-4" style={{ backgroundColor: accent }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-10"
          >
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: primary }}>
              Real Customers, Real Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            {/* Google Stars */}
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: primary }}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-500 text-sm">5.0 average · Google Reviews</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, ti) => (
              <motion.div
                key={t.name}
                className="rounded-2xl p-6 border border-gray-200"
                style={{ backgroundColor: warm }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: ti * 0.08, type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: primary }}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4 text-sm">"{t.quote}"</p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: primary }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.location} · {t.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section id="faq" className="py-20 sm:py-24 px-4" style={{ backgroundColor: warm }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-14"
          >
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: primary }}>
              Questions Answered
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`rounded-xl border transition-all duration-200 ${
                  openFaq === String(i)
                    ? "border-gray-300 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                style={{ backgroundColor: "white" }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100, damping: 20 }}
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === String(i) ? null : String(i))}
                  className="w-full text-left px-6 py-5 flex items-center gap-4 cursor-pointer"
                  whileTap={{ scale: 0.995 }}
                >
                  <span className="flex-1 font-semibold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openFaq === String(i) ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: primary }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </motion.button>
                {openFaq === String(i) && (
                  <div className="px-6 pb-5 border-t border-gray-100 pt-4">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER CTA
      ═══════════════════════════════════════ */}
      <footer style={{ backgroundColor: dark }}>
        <div className="max-w-5xl mx-auto text-center px-4 pt-14 pb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {footer.ctaHeadline}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto text-base">
            {footer.ctaSub}
          </p>
          <a
            href={footer.phoneHref}
            className="inline-block text-white text-xl sm:text-2xl font-bold px-10 py-5 rounded-xl shadow-lg mb-4 transition"
            style={{ backgroundColor: primary }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.primaryHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary)}
          >
            {footer.phoneLabel}
          </a>
          <p className="text-white/50 text-sm mb-6">{footer.email}</p>
          <p className="text-white/40 text-sm mb-8">{footer.serving}</p>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: primary }}>JL</div>
              <span className="text-white/60 text-sm">JL Tree Service</span>
            </div>
            <p className="text-white/40 text-xs">{footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* ── BACK TO TOP ── */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white text-lg"
          style={{ backgroundColor: primary }}
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}
