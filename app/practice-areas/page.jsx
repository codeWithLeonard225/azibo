import Link from "next/link";
import { practiceAreas } from "../data/practiceAreas";

export const metadata = {
  title: "Practice Areas | Azibo Kanu & Partners",
  description:
    "Explore our legal practice areas including corporate law, taxation, litigation, property law, family law and more.",
};

export default function PracticeAreasPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="text-amber-500 uppercase tracking-widest text-sm">
            Legal Services
          </span>

          <h1 className="text-5xl font-serif font-bold mt-4">
            Practice Areas
          </h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            Comprehensive legal services tailored to individuals,
            businesses, investors, institutions, and organizations
            throughout Sierra Leone.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {practiceAreas.map((area) => (
            <div
              key={area.slug}
              className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-serif font-bold">
                {area.title}
              </h2>

              <p className="mt-4 text-slate-600">
                {area.shortDescription}
              </p>

              <Link
                href={`/practice-areas/${area.slug}`}
                className="inline-block mt-6 text-amber-600 font-semibold"
              >
                View Service →
              </Link>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}