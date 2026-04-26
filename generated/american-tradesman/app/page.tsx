'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// ─── DATA ───────────────────────────────────────────────────────────────────

const heroBadge = "25+ Years Serving Commercial Properties"
const heroHeadlineAccent = "Commercial Contractor"
const heroCertifications = [
  "Licensed & Insured",
  "Commercial & Residential",
  "Property Management Specialists",
  "Free Estimates Available",
]
const processSteps = [
  { step: "1", title: "Free Consultation",    desc: "Call or submit our form. We assess the scope, property type, and timeline — then connect you with the right trade specialist." },
  { step: "2", title: "Project Assessment",   desc: "We evaluate scope in person or via site documentation. We identify trades involved, materials, and code considerations." },
  { step: "3", title: "Detailed Proposal",    desc: "You receive a clear, itemized proposal covering scope, schedule, and cost. No hidden fees, no surprises." },
  { step: "4", title: "Professional Execution",desc: "Our vetted trade crews show up on time, work clean, and stay on schedule. One contact for all trades." },
  { step: "5", title: "Final Walkthrough",   desc: "We walk the completed project with you, confirm every detail, and make sure you're fully satisfied." },
]
const services = [
  { name: "Painting & Finishes",         tagline: "Interior & exterior surfaces that last",         features: ["Interior & exterior commercial painting","Elastomeric and industrial coatings","Surface prep, spackle, and priming","Parking garage line painting","Color consultation included"] },
  { name: "HVAC & Mechanical",           tagline: "Climate control your tenants expect",           features: ["New HVAC system installation","Repair and emergency service","Preventive maintenance programs","Ductwork fabrication and repair","Energy efficiency upgrades"] },
  { name: "Plumbing & Concrete",         tagline: "From foundation to fixture",                    features: ["Full-service commercial plumbing","Water heater and boiler service","Concrete foundations and slabs","Sidewalks, curbing, and flatwork","Excavation and trenching"] },
  { name: "Bathroom Remodeling & Tile",  tagline: "Modern finishes that hold up to real use",      features: ["Full bathroom demolition and rebuild","Ceramic, porcelain, and stone tile","Stone patio and outdoor living","ADA-compliant fixture upgrades","Waterproofing systems"] },
  { name: "Framing, Drywall & Insulation",tagline: "The structural backbone, done right",          features: ["Light gauge and steel stud framing","Drywall installation and finishing","Knockdown, smooth, and texture","Batt and spray foam insulation","Soundproofing assemblies"] },
  { name: "Low Voltage & Technology",     tagline: "Wiring the modern commercial building",       features: ["Structured cabling (Cat5e–Cat6a)","Fiber optic installation","Access control and card readers","Security camera systems","Fire alarm systems"] },
  { name: "Land Clearing & Excavation",  tagline: "Site prep that sets the project up right",    features: ["Tree and brush clearing","Stump grinding and removal","Grading and rough grading","Demolition and debris removal","Retaining wall installation"] },
  { name: "Property Management",          tagline: "Ongoing maintenance your tenants deserve",     features: ["Annual and preventive maintenance","24/7 emergency response","Make-ready unit turnovers","Capital improvement planning","Property condition assessments"] },
]
const whyRows = [
  { factor: "Trades Covered",     us: "Every Trade Under One Roof",              them: "One Trade Per Contractor" },
  { factor: "Accountability",    us: "Single Point of Contact — Start to Finish", them: "Multiple Subcontractors — No One in Charge" },
  { factor: "Response Time",      us: "24/7 Emergency Response Available",       them: "Business Hours Only" },
  { factor: "Crew Model",         us: "Vetted In-House Trade Crews",            them: "Subcontractor Pool — Unknown Quality" },
  { factor: "Estimates",         us: "Free, Detailed, Itemized Proposals",     them: "Vague Bids with Hidden Add-Ons" },
  { factor: "Experience",         us: "25+ Years in Commercial Contracting",    them: "Residential Background — Learning Curve" },
  { factor: "Property Management",us: "Dedicated Maintenance Programs",           them: "Project Work Only" },
  { factor: "Communication",      us: "Real Updates, Real Timelines",            them: "Radio Silence Until the Invoice" },
]
const credibilityStats = [
  { stat: "25+",   label: "Years" },
  { stat: "1,500+",label: "Projects" },
  { stat: "Licensed",label: "& Insured" },
  { stat: "24/7",   label: "Emergency" },
  { stat: "All",    label: "Trades" },
  { stat: "Free",   label: "Estimates" },
  { stat: "One",    label: "Contact" },
]
const testimonials = [
  { quote: "American Tradesman Group has been our go-to contractor for three years. They handled a full exterior repaint, two bathroom remodels, and an HVAC replacement — all on time, on budget, and with minimal disruption to our tenants. I can count on them for anything.", author: "Regional Property Manager", company: "Parkside Apartments — 480 Units" },
  { quote: "We were juggling six different contractors for a portfolio of 12 buildings. American Tradesman consolidated that to one. The difference in coordination, accountability, and results has been night and day.", author: "Director of Facilities", company: "Coastal Living Properties — HOA Management" },
  { quote: "The stone patio they built for our outdoor common area came out better than the architect's renderings. Our residents have been raving about it for months.", author: "Community Manager", company: "The Reserve at Fairlington — 320 Units" },
  { quote: "Had an emergency water main break at 11 PM on a Sunday. American Tradesman had a crew on-site by 6 AM and had the repair done before our tenants noticed. That's the kind of responsiveness property managers need.", author: "Facilities Director", company: "Meridian Commerce Center — 8 Buildings" },
  { quote: "We use ATG for all of our low voltage work — structured cabling, access control, security cameras. They understand commercial infrastructure and coordinate cleanly with our other trades.", author: "IT Infrastructure Manager", company: "National Commercial Real Estate Firm" },
  { quote: "Their painting crew did three apartment buildings in one summer — over 200 units total. The quality was consistent across all three, and they finished ahead of schedule.", author: "Regional Manager", company: "Cedar Ridge Apartment Homes — 600 Units" },
]
const faqs = [
  { q: "What types of properties do you work on?", a: "We work with commercial buildings, apartment complexes, multi-family communities, HOA properties, retail centers, office parks, industrial facilities, and municipal properties. If it has a building envelope, we can service it." },
  { q: "Are you licensed and insured?", a: "Yes. American Tradesman Group is fully licensed and insured in all applicable jurisdictions. We carry comprehensive commercial general liability, workers' compensation, and surety bonds." },
  { q: "Do you offer free estimates?", a: "Yes. We offer free, no-obligation project assessments and detailed proposals. For emergency or small-scope calls, we can often provide same-day estimates over the phone." },
  { q: "How do you handle projects with multiple trades?", a: "That's our specialty. We manage all trades internally — painting, HVAC, plumbing, concrete, tile, framing, low voltage, and more. One project manager, one contract, one standard of quality." },
  { q: "Do you work with property managers on ongoing maintenance contracts?", a: "Absolutely. We offer preventive maintenance programs tailored to your portfolio size and building age, including scheduled inspections, minor repairs, and priority emergency response." },
  { q: "What areas do you serve?", a: "We serve commercial properties nationwide. Our crews are strategically located across major metros, so we're able to dispatch quickly to most major markets." },
  { q: "Can you work around tenant or occupant schedules?", a: "Yes. We routinely work in occupied buildings — coordinating work hours around tenant schedules, using dust barriers, and maintaining clean work areas." },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [leadFormOpen, setLeadFormOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', project: '', message: '' })

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-[#2D2D2D]">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/logo.svg" alt="American Tradesman Group" width={160} height={40} className="h-10 w-auto object-contain" />
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {[
              ['Services', 'services'],
              ['Process', 'process'],
              ['Why Us', 'why'],
              ['Testimonials', 'testimonials'],
              ['FAQ', 'faq'],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-sm text-[#6B7280] hover:text-[#02235B] transition-colors font-medium">
                {label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:8445940499" className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#02235B]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              (844) 594-0499
            </a>
            <button onClick={() => setLeadFormOpen(true)}
              className="bg-[#02235B] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#011630] shadow-glow-navy transition-colors">
              Get a Free Estimate
            </button>
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 text-[#2D2D2D]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative hero-gradient overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* Hero shine */}
        <div className="hero-shine absolute inset-0" />
        {/* Red accent bar */}
        <div className="absolute top-0 left-0 w-1 h-full bg-[#D1000B]" />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-[#B4B4B6] text-sm font-medium tracking-widest uppercase mb-6">{heroBadge}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Your Full-Service<br />
              <span className="text-[#D1000B]">{heroHeadlineAccent}</span>
            </h1>
            <p className="text-lg text-[#8FA8C4] leading-relaxed mb-10 max-w-2xl">
              American Tradesman Group delivers turnkey contracting solutions for commercial buildings, apartment complexes, and property management companies. From painting to plumbing, framing to HVAC — we do it all, we do it right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8445940499"
                className="inline-flex items-center justify-center gap-2 bg-[#D1000B] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#a50009] btn-glow transition-all text-base">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Call (844) 594-0499
              </a>
              <button onClick={() => setLeadFormOpen(true)}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-base">
                Get a Free Estimate
              </button>
            </div>
            {/* Certifications */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-10 border-t border-white/10">
              {heroCertifications.map((cert) => (
                <span key={cert} className="flex items-center gap-2 text-sm text-[#8FA8C4]">
                  <svg className="w-4 h-4 text-[#D1000B] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="stat-bar">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {credibilityStats.map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-black text-white">{stat}</p>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#D1000B] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#02235B] tracking-tight">Commercial Contracting Services</h2>
            <p className="text-[#6B7280] mt-3 max-w-xl">From initial consultation to final walkthrough, American Tradesman Group handles every trade — one team, one standard, one point of accountability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E7EB] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-deep">
            {services.map((svc) => (
              <div key={svc.name} className="svc-card p-8 group">
                <div className="w-10 h-10 rounded-lg bg-[#02235B]/5 flex items-center justify-center mb-5 group-hover:bg-[#02235B]/10 transition-colors">
                  <svg className="w-5 h-5 text-[#02235B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <h3 className="text-base font-bold text-[#02235B] mb-1">{svc.name}</h3>
                <p className="text-[#D1000B] text-xs font-medium italic mb-4">{svc.tagline}</p>
                <ul className="space-y-1.5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[#6B7280]">
                      <span className="text-[#D1000B] mt-0.5">—</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 px-6 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#D1000B] text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#02235B] tracking-tight">What Happens When You Reach Out</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((s) => (
              <div key={s.step}>
                <div className="text-5xl font-black text-[#E5E7EB]/40 leading-none mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#02235B] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="why" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#D1000B] text-sm font-semibold uppercase tracking-widest mb-3">Why ATG</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#02235B] tracking-tight">Why Property Managers Choose Us</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[#02235B]">
                  <th className="text-left py-4 pr-6 text-sm font-bold text-[#02235B]">Factor</th>
                  <th className="text-left py-4 pr-6 text-sm font-bold text-[#D1000B]">American Tradesman</th>
                  <th className="text-left py-4 text-sm font-medium text-[#9CA3AF]">Typical Contractor</th>
                </tr>
              </thead>
              <tbody>
                {whyRows.map((row) => (
                  <tr key={row.factor} className="border-b border-[#E5E7EB] hover:bg-[#F8F8F8] transition-colors">
                    <td className="py-4 pr-6 text-sm font-semibold text-[#2D2D2D]">{row.factor}</td>
                    <td className="py-4 pr-6 text-sm text-[#2D2D2D]">{row.us}</td>
                    <td className="py-4 text-sm text-[#9CA3AF]">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 px-6 bg-[#02235B]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#D1000B] text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testi-card rounded-xl p-8">
                <svg className="w-8 h-8 text-[#D1000B] mb-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{t.quote}</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-[#D1000B] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#02235B] tracking-tight">Common Questions</h2>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#E5E7EB]">
                <button
                  onClick={() => setOpenFaq(openFaq === String(i) ? null : String(i))}
                  className="w-full flex items-center justify-between py-5 text-left hover:text-[#02235B] transition-colors">
                  <span className="text-sm font-semibold text-[#02235B] pr-8">{faq.q}</span>
                  <svg className={`w-4 h-4 text-[#D1000B] flex-shrink-0 transition-transform ${openFaq === String(i) ? 'rotate-45' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6"/></svg>
                </button>
                {openFaq === String(i) && (
                  <p className="text-sm text-[#6B7280] leading-relaxed pb-5">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-section py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Ready to get started?</h2>
          <p className="text-[#8FA8C4] mb-10">Tell us about your project and a member of our team will follow up within one business day. For immediate assistance, call us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8445940499"
              className="inline-flex items-center justify-center gap-2 bg-[#D1000B] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#a50009] btn-glow transition-all text-base">
              Call (844) 594-0499
            </a>
            <button onClick={() => setLeadFormOpen(true)}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-base">
              Submit a Project Request
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-[#E5E7EB] py-12 px-6 shadow-[inset_0_1px_0_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <Image src="/logo.svg" alt="American Tradesman Group" width={160} height={40} className="h-10 w-auto object-contain mb-4" />
              <p className="text-sm text-[#6B7280] max-w-xs">Quality craftsmanship you can build on. Commercial contracting for buildings, apartments, and property managers nationwide.</p>
            </div>
            <div className="flex gap-8">
              {[['Services', 'services'],['Process', 'process'],['Why Us', 'why'],['Testimonials', 'testimonials'],['FAQ', 'faq']].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-sm text-[#6B7280] hover:text-[#02235B] transition-colors">{label}</button>
              ))}
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#9CA3AF]">© {new Date().getFullYear()} American Tradesman Group LLC. All rights reserved.</p>
            <a href="tel:8445940499" className="text-sm font-semibold text-[#02235B]">(844) 594-0499</a>
          </div>
        </div>
      </footer>

      {/* ── LEAD FORM MODAL ── */}
      {leadFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && setLeadFormOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
            <button onClick={() => setLeadFormOpen(false)} className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#2D2D2D] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <h2 className="text-2xl font-black text-[#02235B] mb-1">Get a Free Estimate</h2>
            <p className="text-sm text-[#6B7280] mb-8">We'll follow up within one business day.</p>
            <form onSubmit={(e) => { e.preventDefault(); setLeadFormOpen(false) }}
              className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#02235B]" />
                <input required type="tel" placeholder="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#02235B]" />
              </div>
              <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#02235B]" />
              <input required placeholder="Property Type / Project Description" value={formData.project} onChange={e => setFormData({...formData, project: e.target.value})}
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#02235B]" />
              <textarea required rows={3} placeholder="Tell us more about the project..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#02235B] resize-none" />
              <button type="submit"
                className="w-full bg-[#02235B] text-white font-bold py-3 rounded-lg hover:bg-[#011630] transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── MOBILE MENU ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col p-6">
          <div className="flex items-center justify-between mb-10">
            <Image src="/logo.svg" alt="American Tradesman Group" width={160} height={40} className="h-10 w-auto object-contain" />
            <button onClick={() => setMobileMenuOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <nav className="space-y-1">
            {[['Services', 'services'],['Process', 'process'],['Why Us', 'why'],['Testimonials', 'testimonials'],['FAQ', 'faq']].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="block w-full text-left text-xl font-semibold text-[#02235B] py-4 border-b border-[#E5E7EB] hover:text-[#D1000B] transition-colors">
                {label}
              </button>
            ))}
          </nav>
          <div className="mt-auto space-y-3">
            <a href="tel:8445940499" className="flex items-center gap-2 text-[#02235B] font-semibold text-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              (844) 594-0499
            </a>
            <button onClick={() => { setMobileMenuOpen(false); setLeadFormOpen(true) }}
              className="w-full bg-[#02235B] text-white font-bold py-4 rounded-lg">
              Get a Free Estimate
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
