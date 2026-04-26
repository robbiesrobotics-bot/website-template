"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  company, colors, header, hero, heroFull, processOverview,
  damageTypes, advocate, about, residential, commercial,
  credibilityBar, whyChooseUs, warranties, testimonials, gallery,
  faqs, footer, leadForm, ctaBanners,
} from "./config";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};

const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, delay: i * 0.1 }
  })
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, delay: i * 0.1 }
  })
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const viewport = { once: true, margin: "-50px" };

export default function Home() {
  const [showTop, setShowTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [galleryProject, setGalleryProject] = useState<string | null>(null);
  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── STICKY HEADER ── */}
      <header className="sticky top-0 z-50 bg-[var(--dark)] shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Image src="/modern_logo.png" alt="{company.name}" width={200} height={50} className="h-auto" />
          <div className="flex items-center gap-3">
            {/* Desktop: phone + form button */}
            <div className="hidden sm:flex items-center gap-3">
              <a href={`tel:${company.phone}`} className="bg-[var(--primary)] text-white px-4 py-2.5 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition text-sm shadow-lg">
                📞 {company.phone}
              </a>
              <a href={`tel:${company.phone}`} className="bg-[var(--warm)] text-[var(--primary)] border-2 border-[var(--primary)] px-4 py-2.5 rounded-lg font-bold hover:bg-[var(--primary)] hover:text-white transition text-sm">
                Free Inspection
              </a>
            </div>
            {/* Mobile: hamburger only */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="sm:hidden text-white hover:text-white/80 transition p-1"
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </header>


      {/* ═══════════════════════════════════════
          QUICK NAV — top of page, clean accordion
      ═══════════════════════════════════════ */}
      <section className="bg-[var(--dark)] border-b border-[var(--dark)] py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="hidden sm:flex flex-wrap justify-center gap-2">
            {[
              { label: "Damage Types", id: "damage", color: "bg-[var(--primary)]" },
              { label: "Our Process", id: "process", color: "bg-[var(--secondary)]" },
              { label: "Residential", id: "residential", color: "bg-[var(--primary)]" },
              { label: "Commercial", id: "commercial", color: "bg-[var(--secondary)]" },
              { label: "Why Choose Us", id: "why", color: "bg-[var(--primary)]" },
              { label: "Warranties", id: "warranties", color: "bg-[var(--secondary)]" },
              { label: "FAQ", id: "faq", color: "bg-[var(--primary)]" },
            ].map((c) => (
              <motion.button key={c.id} onClick={() => scrollTo(c.id)} className={`${c.color} text-white text-xs font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition cursor-pointer`}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {c.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SHOWCASE BANNER
      ═══════════════════════════════════════ */}
      <section className="relative w-full">
        <div className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] overflow-hidden">
          <Image src="/top-banner.jpg" alt={`${company.name} — Quality restoration in ${company.areaServed}`} fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </div>
        <div className="bg-[var(--dark)] px-6 sm:px-8 py-14 sm:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[var(--blue-gray)] font-semibold text-sm tracking-widest uppercase mb-3">{company.name} — Trusted Since {company.establishedYear}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">Your Advocate in Insurance Restoration</h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">{company.stats.projectsCompleted} projects completed. Insurance claims handled daily. No storm chasers. No pressure. Just honest work.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${company.phone}`} className="w-full sm:w-auto bg-[var(--primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--primary-hover)] transition shadow-lg text-base sm:text-lg">
                Call {company.phone}
              </a>
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition text-base sm:text-lg">
                View Our Work
              </a>
            </div>
            {/* 24/7 + text option */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 bg-[var(--primary)] text-white text-sm font-semibold px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                24/7 Emergency Storm Team — On Standby
              </div>
              <a href={`sms:${company.sms}`} className="text-white/60 hover:text-white text-sm font-medium underline">
                or text us: {company.sms}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* 1. HERO — Dark dramatic, brand-forward */}
      <section className="relative bg-[var(--secondary)] overflow-hidden">
        {/* Background texture gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark)] via-[var(--dark)] to-[var(--secondary)]" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        {/* Subtle diagonal accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--primary)]/10 to-transparent" />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-28 text-center text-white">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-8">
            <svg className="w-4 h-4 text-[var(--blue-gray)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            Trusted by 30,000+ {company.areaServed} homeowners
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Expert Restoration<br />
            <span className="text-[var(--blue-gray)]">Backed by {company.stats.yearsInBusiness} Years</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 text-white/80 leading-relaxed">
            {company.name} provides quality property restoration services in {company.areaServed} and the {company.areaServed} area exclusively for the insurance industry.
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm sm:text-base max-w-2xl mx-auto mb-10 text-white/60">
            We partner with homeowners — not against them. No storm chasers. No pressure. Just honest, expert restoration backed by {company.stats.yearsInBusiness} years of craftsmanship.
          </motion.p>

          {/* CTA buttons — hero */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={`tel:${company.phone}`} className="w-full sm:w-auto bg-[var(--primary)] text-white text-base sm:text-lg font-bold px-8 py-4 rounded-xl hover:bg-[var(--primary-hover)] transition shadow-lg">
              Schedule Free Inspection
            </a>
            <button onClick={() => setLeadFormOpen(true)} className="w-full sm:w-auto bg-white/10 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition text-base sm:text-lg">
              Get Free Quote
            </button>
          </motion.div>

          {/* Certification badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 text-sm font-semibold text-white">
              <svg className="w-4 h-4 text-[var(--blue-gray)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              BBB A+ Accredited
            </span>
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 text-sm font-semibold text-white">
              <svg className="w-4 h-4 text-[var(--blue-gray)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              GAF Master Elite
            </span>
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 text-sm font-semibold text-white">
              CertainTeed SELECT
            </span>
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 text-sm font-semibold text-white">
              HAAG Certified
            </span>
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 text-sm font-semibold text-white">
              VSI Certified
            </span>
          </motion.div>

        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          WHAT HAPPENS WHEN YOU CALL
      ═══════════════════════════════════════ */}
      <section className="py-14 sm:py-16 px-4 bg-[var(--accent)] border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">What Happens When You Call</h2>
            <p className="text-gray-500 text-base">Free, no-obligation. Call takes 2 minutes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {processOverview.steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[var(--primary)] text-white font-bold text-xl rounded-full mb-4 shadow-lg">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`tel:${company.phone}`} className="bg-[var(--primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--primary-hover)] transition shadow-lg text-base">
              📞 Call Now: {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. DAMAGE TYPES — 4-column photo grid
      ═══════════════════════════════════════ */}
      <section id="damage" className="py-20 sm:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">Property Restoration</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Types of Damage We Restore</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">From storm damage to fire and flood, we restore homes to pre-loss condition — working directly with your insurance carrier throughout the process.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {damageTypes.map((d, di) => (
              <motion.div key={d.name} className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-[var(--primary)]/40 hover:shadow-xl transition-all duration-300 bg-[var(--accent)]"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
                transition={{ delay: di * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={d.img} alt={`${d.name} damage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-white font-bold text-xl">{d.name} Damage</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{d.desc}</p>
                  <p className="text-xs text-gray-400 mb-4">
                    <span className="font-semibold text-gray-500">Common causes: </span>{d.causes}
                  </p>
                  <a href={d.link} target={d.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--primary)] font-semibold text-sm hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── CTA ── */}
      <div className="bg-[var(--warm)] border-t border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">Damaged by Storm or Fire?</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Free Inspection Today</h3>
          <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-xl mx-auto">We'll assess the damage and help you navigate the insurance process.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${company.phone}`} className="w-full sm:w-auto bg-[var(--primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--primary-hover)] transition shadow-lg shadow-[var(--primary)]/20 text-base sm:text-lg">Schedule Your Free Inspection</a>
            <a href={`tel:${company.phone}`} className="text-[var(--primary)] font-semibold text-base hover:underline">Or call {company.phone}</a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          3. INSURANCE PROCESS — Timeline
      ═══════════════════════════════════════ */}
      <section id="process" className="py-20 sm:py-24 px-4 bg-gradient-to-b from-[var(--accent)] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">The {company.name} Difference</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">We Advocate For You</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
              {company.name} eliminates home renovation guesswork for both the insurer and the insured. We work side-by-side with your insurance company — so you don't have to fight alone.
            </p>
          </div>

          {/* Advocate image + caption */}
          <div className="mb-12">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/advocate.jpg"
                alt="{company.name} advocates for homeowners"
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-4 italic">Serving homeowners throughout {company.areaServed}</p>
          </div>

          {/* 4-step process */}
          <div className="relative mb-16">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {advocate.timeline.map((s, si) => (
                <motion.div key={s.step} className="text-center relative"
                  custom={si} variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport}
                >
                  <motion.div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--primary)] text-white font-bold text-lg mb-5 shadow-lg shadow-[var(--primary)]/30 relative z-10"
                    initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={viewport}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: si * 0.1 }}
                  >
                    {s.step}
                  </motion.div>
                  <div className="hidden sm:flex absolute top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--secondary)] rounded-full items-center justify-center text-white mx-auto mb-4 opacity-30">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* "We Fight For You" box */}
          <div className="bg-[var(--secondary)] rounded-2xl p-6 sm:p-10 text-white">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="flex-shrink-0 sm:w-64">
                <div className="text-[var(--blue-gray)] text-sm font-semibold uppercase tracking-widest mb-2">Homeowner Protection</div>
              </div>
              <div className="flex-1 grid sm:grid-cols-2 gap-4">
                {advocate.protectionItems.map((item) => (
                  <div key={item.title} className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <h4 className="font-bold text-white mb-1.5 text-sm">{item.title}</h4>
                    <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── CTA ── */}
      <div className="bg-[var(--warm)] border-t border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">Here's How It Works</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Claim?</h3>
          <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-xl mx-auto">One call sets everything in motion. We handle the rest.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${company.phone}`} className="w-full sm:w-auto bg-[var(--primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--primary-hover)] transition shadow-lg shadow-[var(--primary)]/20 text-base sm:text-lg">Schedule Your Free Inspection</a>
            <a href={`tel:${company.phone}`} className="text-[var(--primary)] font-semibold text-base hover:underline">Or call {company.phone}</a>
          </div>
        </div>
      </div>
      {/* ═══════════════════════════════════════
          4. ABOUT: YOUR ADVOCATE
      ═══════════════════════════════════════ */}
      <section id="about" className="py-20 sm:py-24 px-4 bg-warm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div className="flex-1" custom={0} variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport}>
              <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">About {company.name}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why We're Different<br />from the Rest
              </h2>

              {/* Why different image */}
              <div className="mt-6 mb-8 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/why-different.jpg"
                  alt="Why {company.name} stands apart from the rest"
                  width={1200}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  {company.name} <strong className="text-gray-900">works exclusively</strong> with the insurance industry — bringing a keen understanding of insurance claims and how to stay within budget and scope.
                </p>

                <p>
                  Working with {company.name}, insurance companies have a <strong className="text-gray-900">trusted contractor</strong> on-site. Homeowners <strong className="text-gray-900">avoid the stress</strong> of aggressive sales tactics and jobs going over budget.
                </p>
                <p className="text-[var(--primary)] font-semibold text-lg">
                  {company.name} <strong>always finishes</strong> projects and <strong>won't disappear</strong> when the work is done.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {about.certifications.map((cert) => (
                  <span key={cert} className="inline-flex items-center gap-1.5 bg-[var(--secondary)]/10 text-[var(--secondary)] font-medium text-xs sm:text-sm rounded-full px-3 py-1.5 border border-[var(--secondary)]/20">
                    <svg className="w-3.5 h-3.5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div className="flex-1 max-w-lg" custom={0} variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <div className="bg-[var(--accent)] rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-5">The Anti-Storm-Chaser Promise</h3>
                <div className="space-y-4">
                  {about.promiseItems.map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 text-sm">{item.label}: </span>
                        <span className="text-gray-600 text-sm">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT JONATHAN BALLARD
      ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 bg-[var(--dark)] border-t border-[var(--dark)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--blue-gray)] font-semibold text-sm tracking-widest uppercase mb-3">Meet the Owner</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">From {about.ownerName}</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left">
            {/* Placeholder headshot */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-2xl bg-[var(--secondary)] flex items-center justify-center text-white text-5xl font-bold border-4 border-[var(--primary)] shadow-xl">
                JB
              </div>
              <p className="text-center text-white/50 text-xs mt-2">📸 Headshot Coming Soon</p>
            </div>
            <div className="flex-1">
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                "I founded {company.name} because I saw too many homeowners get taken advantage of after storms. I started in 1990 with one simple mission: do the job right, treat people fairly, and make sure every homeowner knows exactly what&apos;s happening with their home and their claim."
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                "When you call {company.name}, you&apos;re talking to <strong className="text-white">me or someone on my team who knows your name and your project.</strong> We&apos;re not a call center. We&apos;re your neighbors — and we take that commitment seriously."
              </p>
              <p className="text-[var(--blue-gray)] font-semibold text-base">
                — {about.ownerName}, Owner · {company.name} Inc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="bg-[var(--warm)] border-t border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">Experience the Difference</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work with a Team That's Been Here Since 1990</h3>
          <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-xl mx-auto">{company.areaServed} trusts {company.name} for good reason. See what we can do for you.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${company.phone}`} className="w-full sm:w-auto bg-[var(--primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--primary-hover)] transition shadow-lg shadow-[var(--primary)]/20 text-base sm:text-lg">Schedule Your Free Inspection</a>
            <a href={`tel:${company.phone}`} className="text-[var(--primary)] font-semibold text-base hover:underline">Or call {company.phone}</a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          VIDEO TESTIMONIAL PLACEHOLDER
      ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 bg-warm border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">See & Hear From Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Homeowner Testimonials — Coming Soon</h2>
          {/* Video placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[var(--accent)]">
            <div className="relative aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>
                </div>
                <p className="text-gray-500 font-medium">🎬 Video Testimonials</p>
                <p className="text-gray-400 text-sm mt-1">In production — launching soon</p>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Hear directly from homeowners about their {company.name} experience</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. RESIDENTIAL SERVICES
      ═══════════════════════════════════════ */}
      <section id="residential" className="py-20 sm:py-24 px-4 bg-[var(--accent)] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">Full-Service Restoration</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Residential Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg mb-8">Complete exterior restoration using the industry's highest-quality materials, installed by factory-certified craftsmen.</p>
            {/* Color Visualizer CTA */}
            <a
              href={residential.colorVisualizer.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--secondary)] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[var(--dark)] transition shadow-md text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
              Try Our Color Visualizer
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {residential.services.map((svc, si) => (
            <motion.div key={svc.name} className="bg-[var(--warm)] rounded-2xl overflow-hidden border border-gray-200 hover:border-[var(--primary)]/40 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
              transition={{ delay: si * 0.08, type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image src={svc.img} alt={`${svc.imgAlt || svc.name} by {company.name}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl drop-shadow">{svc.name}</h3>
                      <p className="text-white/80 text-sm drop-shadow">{svc.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5 mb-6">
                  {svc.features.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={svc.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[var(--primary-hover)] transition text-sm w-full justify-center">
                  {svc.cta.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. COMMERCIAL SERVICES
      ═══════════════════════════════════════ */}
      <section id="commercial" className="py-20 sm:py-24 px-4 bg-[var(--dark)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <p className="text-[var(--blue-gray)] font-semibold text-sm tracking-widest uppercase mb-3">Beyond Residential</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Commercial Property Services</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Licensed and bonded in Virginia, Maryland, and DC, {company.name} delivers professional commercial restoration that minimizes disruption to tenants, customers, and operations.
              </p>

              {/* Commercial image */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/commercial.jpg"
                  alt="Commercial property services by {company.name}"
                  width={1200}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>, label: "Apartment & Condo Buildings" },
                  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>, label: "Office Buildings" },
                  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>, label: "Retail Centers" },
                  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>, label: "Churches" },
                  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, label: "Aquatic & Fitness Facilities" },
                  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>, label: "And More" },
                ].map((item, ii) => (
                  <motion.div key={item.label} className="flex items-center gap-2.5 bg-white/10 rounded-xl px-4 py-3 border border-white/10"
                    variants={bounceIn} initial="hidden" whileInView="visible" viewport={viewport}
                    transition={{ delay: ii * 0.08 }}
                  >
                    <span className="text-[var(--blue-gray)]">{item.icon}</span>
                    <span className="text-white text-sm font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
              <a href={`${company.website}/commercial`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[var(--primary-hover)] transition">
                View Commercial Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>

            <motion.div className="flex-1 max-w-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ type: "spring", stiffness: 100, damping: 20 }}>
              <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="font-bold text-white text-lg mb-5">Commercial Process</h3>
                <div className="space-y-4">
                  {commercial.processSteps.map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold text-sm">{s.step}</div>
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-0.5">{s.title}</h4>
                        <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="font-semibold text-white text-sm mb-3">Commercial Capabilities</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { cat: "Roofing", items: "Replacement and repair" },
                      { cat: "Siding", items: "Vinyl (durable, versatile, green) and fiber cement (wood-like, flame resistant)" },
                      { cat: "Windows", items: "Double/triple-paned, welded frames, custom fit to 1/16\", midrise/highrise capable, historical districts" },
                    ].map((c) => (
                      <div key={c.cat} className="flex gap-2 text-xs">
                        <span className="text-[var(--blue-gray)] font-semibold">{c.cat}:</span>
                        <span className="text-white/60">{c.items}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. CREDIBILITY BAR
      ═══════════════════════════════════════ */}
      <section className="bg-[var(--primary)] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-center">
            {credibilityBar.stats.map((item, ci) => (
              <motion.div key={item.label} className="flex flex-col items-center px-4"
                variants={bounceIn} initial="hidden" whileInView="visible" viewport={viewport}
                transition={{ delay: ci * 0.06 }}
              >
                <span className="text-white font-bold text-xl sm:text-2xl">{item.stat}</span>
                <span className="text-white/70 text-xs">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── CTA ── */}
      <div className="bg-[var(--warm)] border-t border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">The {company.name} Promise</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">We're Ready to Help — All You Have to Do Is Call</h3>
          <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-xl mx-auto">No obligation. No pressure. Just an honest assessment from people who care.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${company.phone}`} className="w-full sm:w-auto bg-[var(--primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--primary-hover)] transition shadow-lg shadow-[var(--primary)]/20 text-base sm:text-lg">Schedule Your Free Inspection</a>
            <a href={`tel:${company.phone}`} className="text-[var(--primary)] font-semibold text-base hover:underline">Or call {company.phone}</a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          8. WHY CHOOSE US
      ═══════════════════════════════════════ */}
      <section id="why" className="py-16 sm:py-20 px-4 bg-[var(--dark)] border-t border-[var(--dark)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--blue-gray)] font-semibold text-sm tracking-widest uppercase mb-3">The Comparison That Speaks for Itself</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Why Choose {company.name}?</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-xl mb-10">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-[var(--secondary)] text-white/80 font-bold text-sm w-1/3 border-b border-white/10">Factor</th>
                  <th className="p-4 bg-[var(--primary)] text-white font-bold text-sm text-center border-b border-white/10">{company.name}</th>
                  <th className="p-4 bg-[var(--dark)] text-white/60 font-bold text-sm text-center border-b border-white/10">Typical Storm Chaser</th>
                </tr>
              </thead>
              <tbody>
                {whyChooseUs.table.map((row, i) => (
                  <motion.tr key={row.factor} className={`border-b border-white/5 ${i % 2 === 1 ? 'bg-white/5' : 'bg-transparent'}`}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
                    transition={{ delay: i * 0.05 }}
                  >
                    <td className="p-4 text-white/80 font-medium text-sm">{row.factor}</td>
                    <td className="p-4 text-center">
                      <span className="bg-[var(--primary)]/20 text-[#ff6b6b] px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">{row.us}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="bg-white/10 text-white/40 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">{row.them}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Why different image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/why-different.jpg"
              alt="Why {company.name} stands apart from the rest"
              width={1200}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* ── CTA ── */}
      <div className="bg-[var(--dark)] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--blue-gray)] font-semibold text-sm tracking-widest uppercase mb-3">Full Protection, Start to Finish</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Work Is Guaranteed — Period</h3>
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">Every project backed by workmanship guarantee and manufacturer warranties.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${company.phone}`} className="w-full sm:w-auto bg-[var(--primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--primary-hover)] transition shadow-lg shadow-[var(--primary)]/20 text-base sm:text-lg">Schedule Your Free Inspection</a>
            <a href={`tel:${company.phone}`} className="text-white/70 font-semibold text-base hover:underline">Or call {company.phone}</a>
          </div>
        </div>
      </div>
      {/* ═══════════════════════════════════════
          9. WARRANTIES
      ═══════════════════════════════════════ */}
      <section id="warranties" className="py-20 sm:py-24 px-4 bg-[var(--accent)] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">Protection & Peace of Mind</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Warranties & Guarantees</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">We stand behind every project. From material warranties to our own workmanship guarantee, you're fully protected from day one.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {warranties.map((w, wi) => (
              <motion.div key={w.title} className="bg-[var(--warm)] rounded-2xl p-6 border border-gray-200 hover:shadow-lg border-l-4" style={{ borderLeftColor: w.color === 'primary' ? colors.primary : colors.secondary }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
                transition={{ delay: wi * 0.08, type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-3" style={{ color: w.color === 'primary' ? colors.primary : colors.secondary }}>
                  {w.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── CTA ── */}
      <div className="bg-[var(--dark)] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--blue-gray)] font-semibold text-sm tracking-widest uppercase mb-3">Join Thousands of Happy Homeowners</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">{company.areaServed} Trusts {company.name}</h3>
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">See why so many homeowners choose us for their restoration needs.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${company.phone}`} className="w-full sm:w-auto bg-[var(--primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--primary-hover)] transition shadow-lg shadow-[var(--primary)]/20 text-base sm:text-lg">Schedule Your Free Inspection</a>
            <a href={`tel:${company.phone}`} className="text-white/70 font-semibold text-base hover:underline">Or call {company.phone}</a>
          </div>
        </div>
      </div>
      {/* ═══════════════════════════════════════
          10. TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-4 bg-warm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">Real Homeowners, Real Results</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            {/* Google Reviews badge */}
            <a
              href="{testimonials.googleReviewLink}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-warm border-2 border-[var(--primary)]/20 rounded-2xl px-6 py-3 hover:border-[var(--primary)] hover:shadow-lg transition mb-4"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <span className="font-bold text-gray-800 text-sm sm:text-base">Rated 4.9 on Google</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.items.map((t, ti) => (
              <motion.div key={t.name} className="bg-[var(--accent)] rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
                transition={{ delay: ti * 0.08, type: "spring", stiffness: 100, damping: 20 }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-[var(--secondary)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-[var(--primary)] text-xs font-medium">{t.service}{t.source ? " · " + t.source : ""} — {company.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════
          PHOTO GALLERY — Our Work
      ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-4 bg-[var(--dark)] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[var(--blue-gray)] font-semibold text-sm tracking-widest uppercase mb-3">Our Work Speaks For Itself</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Project Gallery</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">Before-and-after photos from real {company.name} jobs in {company.areaServed} and {company.areaServed}. More coming soon.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {[
              { label: "Roofing / Replacement", location: "{company.areaServed}, VA" },
              { label: "Siding Installation", location: "Centreville, VA" },
              { label: "Window Replacement", location: "Fairfax, VA" },
              { label: "Storm Damage Restoration", location: "Herndon, VA" },
            ].map((p, pi) => (
              <motion.button key={p.label}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
                transition={{ delay: pi * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => setGalleryProject(p.label)}
                className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-dashed border-white/20 hover:border-white/50 transition-all cursor-pointer text-left bg-transparent"
              >
                <div className="absolute inset-0 bg-[var(--dark)] flex flex-col items-center justify-center p-3 text-center">
                  <svg className="w-8 h-8 text-white/40 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <p className="text-white/60 text-sm font-medium">{p.label}</p>
                  <p className="text-white/40 text-xs mt-1">{p.location}</p>
                  <p className="text-white/30 text-xs mt-2">Tap to view</p>
                </div>
              </motion.button>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-8">More project photos coming soon — contact us to see examples of your specific project type.</p>
        </div>
      </section>

      {/* Gallery Modal */}
      {galleryProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setGalleryProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="bg-[var(--dark)] rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-[var(--blue-gray)] text-xs font-semibold uppercase tracking-widest mb-1">Project Gallery</p>
                <h3 className="text-2xl font-bold text-white">{galleryProject}</h3>
              </div>
              <button onClick={() => setGalleryProject(null)} className="text-white/50 hover:text-white transition p-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Before</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[1, 2, 3].map((n) => (
                    <div key={`before-${n}`} className="aspect-video rounded-xl bg-[var(--dark)] border-2 border-dashed border-white/20 flex flex-col items-center justify-center gap-2">
                      <svg className="w-8 h-8 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                      <span className="text-white/30 text-xs">Photo coming soon</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">After</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[1, 2, 3].map((n) => (
                    <div key={`after-${n}`} className="aspect-video rounded-xl bg-[var(--dark)] border-2 border-dashed border-white/20 flex flex-col items-center justify-center gap-2">
                      <svg className="w-8 h-8 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                      <span className="text-white/30 text-xs">Photo coming soon</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-white/30 text-sm mt-6">Full gallery with real project photos coming soon.</p>
          </motion.div>
        </div>
      )}


      {/* ═══════════════════════════════════════
          {/* ══════════════════════════════════════════════════
          11. FAQ
      ═══════════════════════════════════════ */}
      <section id="faq" className="py-20 sm:py-24 px-4 bg-[var(--accent)] border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase mb-3">Questions Answered</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} className={`rounded-xl border transition-all duration-200 ${openFaq === String(i) ? 'border-[var(--primary)] bg-warm shadow-md' : 'border-gray-200 bg-warm hover:border-gray-300'}`}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100, damping: 20 }}
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === String(i) ? null : String(i))}
                  className="w-full text-left px-6 py-5 flex items-center gap-4 cursor-pointer"
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="flex-1 font-semibold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[var(--primary)] flex-shrink-0 transition-transform duration-200 ${openFaq === String(i) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

      {/* FOOTER — merged CTA + legal */}
      <footer className="bg-[var(--dark)] text-white">
        {/* CTA block */}
        <div className="max-w-5xl mx-auto text-center px-4 pt-14 pb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Schedule Your Free, No-Obligation Roof Inspection</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Call before your adjuster's inspection — we can be there the same day to document all damage and be there for you throughout the process.
          </p>
          <a href={`tel:${company.phone}`} className="inline-block bg-[var(--primary)] text-white text-xl sm:text-2xl font-bold px-10 py-5 rounded-xl hover:bg-[var(--primary-hover)] transition shadow-lg shadow-[var(--primary)]/30 mb-4">
            {company.phone}
          </a>
          <p className="text-white/50 text-sm mb-10">Available Monday – Friday | Same-Day Availability</p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60 mb-10">
            <a href={`${company.website}/roofing`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Roofing</a>
            <span className="text-white/30">|</span>
            <a href={`${company.website}/windows`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Windows</a>
            <span className="text-white/30">|</span>
            <a href={`${company.website}/siding`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Siding</a>
            <span className="text-white/30">|</span>
            <a href={`${company.website}/flood`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Flood</a>
            <span className="text-white/30">|</span>
            <a href={`${company.website}/fire`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Fire</a>
            <span className="text-white/30">|</span>
            <a href={`${company.website}/commercial`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Commercial</a>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-white/10 max-w-5xl mx-auto"></div>
        {/* Legal strip */}
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/modern_logo.png" alt="{company.name}" width={160} height={40} className="h-auto opacity-70" />
          <p className="text-white/40 text-xs">{company.address} | {company.website.replace("https://","")}</p>
          <p className="text-white/40 text-xs">{company.licenses} | Established {company.establishedYear}</p>
        </div>
      </footer>

      {/* ── MOBILE MENU OVERLAY ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--dark)] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Image src="/modern_logo.png" alt="{company.name}" width={180} height={45} className="h-auto" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-white/70 transition p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          {/* Nav links */}
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
            {[
              { label: "Damage Types", id: "damage", color: "bg-[var(--primary)]" },
              { label: "Our Process", id: "process", color: "bg-[var(--secondary)]" },
              { label: "Residential", id: "residential", color: "bg-[var(--primary)]" },
              { label: "Commercial", id: "commercial", color: "bg-[var(--secondary)]" },
              { label: "Why Choose Us", id: "why", color: "bg-[var(--primary)]" },
              { label: "Warranties", id: "warranties", color: "bg-[var(--secondary)]" },
              { label: "FAQ", id: "faq", color: "bg-[var(--primary)]" },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => { scrollTo(c.id); setMobileMenuOpen(false); }}
                className={`${c.color} text-white font-semibold w-full px-5 py-4 rounded-xl text-left text-base`}
              >
                {c.label}
              </button>
            ))}
          </div>
          {/* Footer with call */}
          <div className="px-6 py-6 border-t border-white/10">
            <a href={`tel:${company.phone}`} className="block w-full bg-[var(--primary)] text-white font-bold text-center px-6 py-4 rounded-xl text-base">
              Call {company.phone}
            </a>
          </div>
        </div>
      )}

      {/* BACK TO TOP */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-[var(--primary)] text-white w-12 h-12 rounded-full shadow-lg hover:bg-[var(--primary-hover)] transition flex items-center justify-center cursor-pointer"
          aria-label="Back to top"
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, rotate: 360 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7"/></svg>
        </motion.button>
      )}

      {/* ── LEAD CAPTURE FORM MODAL ── */}
      {leadFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) setLeadFormOpen(false); }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-[var(--warm)] rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative"
          >
            <button
              onClick={() => setLeadFormOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Inspection</h3>
            <p className="text-gray-500 text-sm mb-6">No obligation. Takes about 20 minutes. Same-day response available.</p>
            <form onSubmit={(e) => { e.preventDefault(); setLeadFormOpen(false); alert("Thank you! We'll be in touch within the hour."); }} className="space-y-4">
              <input required type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] text-sm" />
              <input required type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] text-sm" />
              <input required type="text" placeholder="Zip Code" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] text-sm" />
              <select required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] text-sm bg-white">
                <option value="">Type of Damage</option>
                <option>Storm / Wind / Hail</option>
                <option>Fire Damage</option>
                <option>Flood / Water Damage</option>
                <option>Roof Damage</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Tell us more (optional)" rows={2} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] text-sm resize-none" />
              <button type="submit" className="w-full bg-[var(--primary)] text-white font-bold py-4 rounded-xl hover:bg-[var(--primary-hover)] transition text-base shadow-lg">
                Submit — We&apos;ll Call Within 1 Hour
              </button>
              <p className="text-center text-xs text-gray-400">Or call us directly: <a href={`tel:${company.phone}`} className="text-[var(--primary)] font-semibold hover:underline">{company.phone}</a></p>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
