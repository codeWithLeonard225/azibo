import Link from "next/link";
import { notFound } from "next/navigation";
import { practiceAreas } from "@/app/data/practiceAreas";

// Explicit parameters generated statically for high performance SEO indexing
export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = practiceAreas.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Azibo Kanu & Partners`,
    description: service.shortDescription || service.overview,
  };
}

export default async function PracticeAreaPage({ params }) {
  const { slug } = await params;
  const service = practiceAreas.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-500/20">

      {/* Hero */}
      <section className="relative bg-slate-950 text-white py-28 px-6 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-70" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-amber-500 uppercase tracking-[4px] text-xs font-bold bg-amber-500/10 px-4 py-1.5 rounded border border-amber-500/20">
            Legal Practice Division
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-6 tracking-tight text-slate-100">
            {service.title}
          </h1>
          <div className="w-12 h-0.5 bg-amber-500 my-6 rounded-full" />

          <p className="max-w-3xl mx-auto text-slate-400 font-light text-base md:text-lg leading-relaxed">
            Strategic legal solutions engineered for modern corporations, institutional investors, and individual portfolios across West Africa.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <Link
              href="/book-consultation"
              className="inline-flex justify-center items-center w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 transition shadow-xl shadow-amber-500/10"
            >
              Book Consultation
            </Link>

            <Link
              href="/contact"
              className="inline-flex justify-center items-center w-full sm:w-auto border border-slate-700 bg-slate-950/40 text-slate-300 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-slate-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Block */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-white border-b border-slate-200/60">
        <div className="space-y-4 max-w-4xl">
          <span className="text-amber-600 uppercase tracking-widest text-xs font-bold border-l-2 border-amber-500 pl-3">
            Operational Overview
          </span>
          <h2 className="text-3xl font-serif font-bold text-slate-950 tracking-tight">
            Strategic Defense & Core Scope
          </h2>
          <p className="mt-6 text-slate-600 font-light text-base md:text-lg leading-relaxed">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Services Checklist Grid */}
      <section className="bg-slate-100 py-24 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">Execution Map</span>
            <h2 className="text-3xl font-serif font-bold text-slate-950 tracking-tight mt-2">
              Legal Focus Frameworks
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {service.services.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm border border-slate-200/60 flex items-center gap-3 font-medium text-slate-800 text-sm md:text-base hover:shadow-md transition-shadow"
              >
                <span className="text-amber-500 text-lg font-bold">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representative Case Ledger */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-2xl mb-12">
          <span className="text-amber-600 uppercase tracking-widest text-xs font-bold border-l-2 border-amber-500 pl-3">
            Proven Track Record
          </span>
          <h2 className="text-3xl font-serif font-bold text-slate-950 tracking-tight mt-2">
            Representative Matters
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="border border-slate-200 bg-slate-50/50 rounded-xl p-8 flex flex-col gap-3 hover:bg-white hover:shadow-lg transition-all duration-300">
            <h3 className="font-serif font-bold text-xl text-slate-950 tracking-tight">
              Corporate Expansion Operations
            </h3>
            <p className="text-slate-600 font-light text-sm leading-relaxed">
              Advised a growing company on legal requirements and regulatory structuring parameters for regional business transitions.
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50/50 rounded-xl p-8 flex flex-col gap-3 hover:bg-white hover:shadow-lg transition-all duration-300">
            <h3 className="font-serif font-bold text-xl text-slate-950 tracking-tight">
              Regulatory Compliance Mitigation
            </h3>
            <p className="text-slate-600 font-light text-sm leading-relaxed">
              Assisted domestic organizations in meeting industry-specific compliance indices and safeguarding asset portfolios against statutory risks.
            </p>
          </div>
        </div>
      </section>

      {/* Search Engine Agnostic FAQ Segment */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-slate-100 py-24 px-6 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center flex flex-col items-center mb-12">
              <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">Inquiries Panel</span>
              <h2 className="text-3xl font-serif font-bold text-slate-950 tracking-tight mt-2">
                Frequently Asked Questions
              </h2>
              <div className="w-12 h-0.5 bg-amber-500 mt-4 rounded-full" />
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl border border-slate-200/60 shadow-sm flex flex-col gap-3"
                >
                  <h3 className="font-serif font-bold text-base md:text-lg text-slate-950 tracking-tight">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conversion Terminal (CTA) */}
      <section className="bg-slate-950 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 tracking-tight">
            Need Expert Legal Counseling?
          </h2>

          <p className="mt-4 text-slate-400 font-light text-base md:text-lg max-w-2xl">
            Speak with our experienced legal team today to safeguard your commercial configurations or private assets.
          </p>

          <Link
            href="/book-consultation"
            className="inline-block mt-8 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 transition shadow-xl shadow-amber-500/10"
          >
            Book Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}