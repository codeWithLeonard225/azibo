"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaScaleBalanced, 
  FaBriefcase, 
  FaFileInvoiceDollar, 
  FaShieldHalved, 
  FaBuildingShield, 
  FaChartLine, 
  FaArrowRightLong,
  FaCircleCheck,
  FaUsersGear, 
  FaRegComments,
  FaFileContract
} from "react-icons/fa6";

export default function HomePage() {
  return (
    <main className="w-full bg-slate-50 text-slate-900 overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-32 px-6 overflow-hidden">
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto text-center z-10"
        >
          <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-4 py-1.5 rounded-full mb-6 border border-amber-500/20">
            Barristers & Solicitors | Taxation Consultants
          </span>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Trusted Legal Solutions for Individuals, Businesses, and Institutions in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">Sierra Leone</span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Azibo Kanu & Partners is a premier full-service law firm offering sophisticated advocacy, strategic regulatory business advisory, and specialized corporate taxation services across West Africa.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-8 py-4 rounded-lg font-semibold shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 text-center tracking-wide"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto border border-slate-700 bg-slate-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/60 hover:border-slate-500 transition-all duration-300 text-center"
            >
              Contact Chambers
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Establishment & Excellence</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">About Our Firm</h2>
            <div className="w-12 h-1 bg-amber-500 mt-4 rounded-full" />
          </div>
          <div className="md:col-span-7">
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              Azibo Kanu & Partners is a full-service law firm committed to delivering exceptional legal services across Sierra Leone. Our team of experienced barristers and solicitors provides strategic legal solutions to individuals, businesses, government institutions, and international organizations.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center mt-6 text-amber-600 font-semibold hover:text-amber-700 group transition"
            >
              Learn More About Our Philosophy 
              <FaArrowRightLong className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PRACTICE AREAS ================= */}
      <section className="bg-slate-900 text-white py-24 px-6 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Comprehensive Legal Expertise</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">Core Areas of Practice</h2>
            <p className="text-slate-400 mt-4 font-light">
              Providing target dynamic legal strategies structured precisely around corporate frameworks and local tax codes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Corporate & Commercial Law", slug: "corporate-law", icon: FaBriefcase, desc: "Business formations, structural governance, joint ventures, and regulatory mergers." },
              { title: "Taxation Law", slug: "taxation-law", icon: FaFileInvoiceDollar, desc: "Corporate fiscal planning, dispute resolutions, auditing support, and compliance frameworks." },
              { title: "Litigation & Dispute Resolution", slug: "litigation", icon: FaScaleBalanced, desc: "Formidable courtroom representation, corporate mediation, and swift asset recovery paths." },
              { title: "Property & Real Estate Law", slug: "property-law", icon: FaBuildingShield, desc: "Title verifications, structural transfers, commercial leasing, and developer support." },
              { title: "Family & Divorce Law", slug: "family-law", icon: FaUsersGear, desc: "Matrimonial disputes, estate division, protective custody execution, and family trusts." },
              { title: "Criminal Defense", slug: "criminal-defense", icon: FaShieldHalved, desc: "Complex financial white-collar defense, representation, and specialized appellate work." }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  href={`/practice-areas/${item.slug}`}
                  className="group bg-slate-950 p-8 rounded-xl border border-slate-800/60 shadow-xl hover:border-amber-500/40 hover:bg-slate-950/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="text-xl" />
                    </div>
                    <h3 className="font-serif font-semibold text-xl tracking-wide text-slate-100 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-3 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center mt-6 text-xs font-semibold uppercase tracking-wider text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    Explore Focus Area <FaArrowRightLong className="ml-1 w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/practice-areas"
              className="inline-flex items-center border border-slate-800 bg-slate-950 px-6 py-3 rounded-lg text-sm font-medium hover:border-slate-600 transition"
            >
              View All 19 Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Our Pillars of Operations</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">Why Strategic Clients Retain Us</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Experienced Legal Team",
            "Personalized Legal Advice",
            "Strong Courtroom Representation",
            "Business-Focused Solutions",
            "Confidential & Ethical Service",
            "Proven Track Record"
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition duration-300 flex items-start gap-4">
              <FaCircleCheck className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="font-serif font-semibold text-lg text-slate-900">{item}</p>
                <p className="text-sm text-slate-500 mt-1 font-light">Maintaining rigid fidelity to precise professional standards across all administrative channels.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LAWYERS PREVIEW ================= */}
      <section className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-20 px-6 text-center border-b border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4">Our Multidisciplinary Counsel</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Chambers houses fifteen dedicated advocates specializing across individual business legal operational fields to maintain complete dynamic internal collaboration.
          </p>
          <div className="mt-8">
            <Link
              href="/lawyers"
              className="inline-flex items-center bg-amber-500 text-slate-950 px-8 py-3.5 rounded-lg font-semibold hover:bg-amber-400 transition"
            >
              Meet Our 15 Lawyers
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CASE HIGHLIGHTS ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Track Record</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">Case Highlights</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Commercial Dispute", desc: "Recovered significant business assets for a corporate client within complex cross-border proceedings." },
            { title: "Property Matter", desc: "Successfully resolved long-standing multi-party land ownership disputes via rigorous structural litigation." },
            { title: "Tax Advisory", desc: "Assisted an international corporation in achieving flawless structural regulatory compliance with local fiscal policy." }
          ].map((caseItem, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-300 group-hover:bg-amber-500 transition-colors" />
              <h3 className="font-serif font-semibold text-xl text-slate-900">{caseItem.title}</h3>
              <p className="text-slate-600 mt-4 font-light text-sm leading-relaxed">{caseItem.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-slate-100 py-24 px-6 text-center border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-200">
            <FaRegComments className="text-xl text-amber-600" />
          </div>
          <p className="italic max-w-3xl mx-auto text-xl md:text-2xl font-serif text-slate-800 leading-relaxed">
            "The team handled our business registration and corporate tax structural setup professionally, maintaining exceptional transparency and efficiency throughout."
          </p>
          <div className="mt-6">
            <p className="font-semibold text-slate-900">— Prominent Enterprise Director</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Freetown, Sierra Leone</p>
          </div>
        </div>
      </section>

      {/* ================= BLOG PREVIEW ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Knowledge Capital</span>
        <h2 className="text-3xl font-serif font-bold mt-2 mb-4">Legal Insights & Analysis</h2>
        <p className="text-slate-600 mb-10 max-w-2xl mx-auto font-light">
          Stay informed on evolving business regulations, property mandates, and fiscal taxation reforms within Sierra Leone.
        </p>
        <Link
          href="/blog"
          className="bg-slate-950 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition shadow-lg tracking-wide inline-flex items-center gap-2 text-sm font-medium"
        >
          <FaFileContract className="text-base" /> Read Legal Briefings
        </Link>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/5 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_100%,transparent_100%)]" />
        <div className="relative max-w-4xl mx-auto z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Require Definitive Legal Representation?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto font-light text-base md:text-lg">
            Retain Azibo Kanu & Partners to manage your corporate governance, property verifications, or tactical dispute representation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition shadow-md"
            >
              Contact Chambers
            </Link>
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto border border-slate-700 bg-slate-900/60 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Book Priority Consultation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}