export const metadata = {
  title: "Book Consultation | Azibo Kanu & Partners",
  description:
    "Schedule a legal consultation with Azibo Kanu & Partners.",
};

export default function BookConsultationPage() {
  const practiceAreas = [
    "Corporate & Commercial Law",
    "Taxation Law",
    "Litigation & Dispute Resolution",
    "Property & Real Estate Law",
    "Family & Divorce Law",
    "Employment & Labour Law",
    "Immigration Law",
    "Criminal Defense",
    "Constitutional Law",
    "Banking & Finance Law",
    "Intellectual Property Law",
    "Contract Law",
    "Debt Recovery",
    "Human Rights Law",
    "Mining & Natural Resources Law",
    "Maritime Law",
    "Arbitration & Mediation",
    "NGO Registration",
    "Business Registration",
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <span className="text-amber-500 uppercase tracking-widest text-sm">
            Consultation Booking
          </span>

          <h1 className="text-5xl font-serif font-bold mt-4">
            Book a Consultation
          </h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            Request a confidential consultation with our legal team.
            We will review your matter and contact you to confirm
            your appointment.
          </p>

        </div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <div className="bg-white shadow-lg rounded-2xl p-8 border">

          <h2 className="text-3xl font-serif font-bold mb-8">
            Consultation Request Form
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+232..."
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Practice Area
              </label>

              <select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500">

                <option value="">
                  Select Practice Area
                </option>

                {practiceAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}

              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-medium">
                  Preferred Date
                </label>

                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Preferred Time
                </label>

                <input
                  type="time"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

            </div>

            <div>
              <label className="block mb-2 font-medium">
                Brief Description of Your Matter
              </label>

              <textarea
                rows="6"
                placeholder="Describe your legal matter..."
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-4 rounded-lg transition"
            >
              Submit Consultation Request
            </button>

          </form>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-serif font-bold">
            Need Immediate Legal Assistance?
          </h2>

          <p className="mt-4 text-slate-300">
            Contact our office directly and a member of our team
            will assist you.
          </p>

        </div>

      </section>

    </main>
  );
}