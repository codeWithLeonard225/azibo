import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Contact Us | Azibo Kanu & Partners",
  description:
    "Contact Azibo Kanu & Partners for legal advice, business registration, taxation services, litigation, property law, and corporate legal support in Sierra Leone.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <span className="text-amber-500 uppercase tracking-widest text-sm">
            Contact Us
          </span>

          <h1 className="text-5xl font-serif font-bold mt-4">
            Get In Touch
          </h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            We are ready to assist individuals, businesses,
            institutions, and investors with trusted legal
            solutions throughout Sierra Leone.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow border">
            <FaMapMarkerAlt className="text-amber-500 text-3xl mb-4" />

            <h3 className="font-bold text-xl">
              Office Address
            </h3>

            <p className="mt-3 text-slate-600">
              55 Robert Street
              <br />
              Freetown, Sierra Leone
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow border">
            <FaPhoneAlt className="text-amber-500 text-3xl mb-4" />

            <h3 className="font-bold text-xl">
              Phone
            </h3>

            <p className="mt-3 text-slate-600">
              +232 XXX XXX XXX
              <br />
              +232 XXX XXX XXX
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow border">
            <FaEnvelope className="text-amber-500 text-3xl mb-4" />

            <h3 className="font-bold text-xl">
              Email
            </h3>

            <p className="mt-3 text-slate-600">
              info@azibokanu.com
              <br />
              legal@azibokanu.com
            </p>
          </div>

        </div>

      </section>

      {/* Contact Form + Map */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow border">

            <h2 className="text-3xl font-serif font-bold">
              Send Us a Message
            </h2>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-3 rounded-lg transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow border overflow-hidden">

            <iframe
              src="https://www.google.com/maps?q=55+Robert+Street+Freetown+Sierra+Leone&output=embed"
              width="100%"
              height="100%"
              className="min-h-[500px]"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-serif font-bold">
            Need Immediate Legal Assistance?
          </h2>

          <p className="mt-4 text-slate-300">
            Speak directly with our legal team today.
          </p>

          <a
            href="/book-consultation"
            className="inline-block mt-8 bg-amber-500 text-slate-950 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition"
          >
            Book Consultation
          </a>

        </div>

      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/23278355416"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50"
      >
        <FaWhatsapp size={28} />
      </a>

    </main>
  );
}