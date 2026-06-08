"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaScaleBalanced,
  FaEye,
  FaBullseye,
  FaShieldHalved,
  FaHandshake,
  FaAward,
  FaArrowRight,
  FaGavel,
} from "react-icons/fa6";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const values = [
    {
      icon: <FaShieldHalved />,
      title: "Integrity",
      description:
        "We uphold honesty, transparency, accountability, and ethical conduct in every aspect of our legal practice.",
    },
    {
      icon: <FaAward />,
      title: "Excellence",
      description:
        "We pursue the highest standards of legal service through continuous learning, preparation, and professional development.",
    },
    {
      icon: <FaHandshake />,
      title: "Professionalism",
      description:
        "We conduct ourselves with dignity, respect, competence, and dedication to achieving the best outcomes for our clients.",
    },
    {
      icon: <FaGavel />,
      title: "Confidentiality",
      description:
        "We safeguard our clients’ information and legal matters with the highest level of discretion and trust.",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-28 px-6 border-b border-slate-800">

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full text-amber-400 text-xs uppercase tracking-widest"
          >
            <FaScaleBalanced />
            About Our Chambers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-5xl md:text-6xl font-bold font-serif"
          >
            Azibo Kanu & Partners
          </motion.h1>

          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            A leading full-service law firm providing trusted legal
            representation, corporate advisory, taxation consultancy,
            dispute resolution, and regulatory compliance services to
            individuals, businesses, government institutions, and
            international organizations across Sierra Leone.
          </motion.p>
        </div>
      </section>

      {/* ABOUT FIRM */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-amber-600 uppercase tracking-widest text-sm font-semibold">
              About The Firm
            </span>

            <h2 className="mt-4 text-4xl font-serif font-bold">
              Trusted Legal Advisors Committed to Excellence
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Azibo Kanu & Partners is a distinguished law firm dedicated
              to providing practical, strategic, and results-oriented
              legal services.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Our lawyers advise corporations, entrepreneurs,
              investors, institutions, and private individuals on a
              wide range of legal matters while maintaining the highest
              standards of integrity, professionalism, and confidentiality.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Through a combination of legal expertise and industry
              knowledge, we deliver solutions that protect our clients'
              interests and support sustainable growth.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200"
          >
            <FaScaleBalanced className="text-5xl text-amber-500 mb-6" />

            <h3 className="text-2xl font-serif font-bold">
              Our Commitment
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              To provide exceptional legal services that protect our
              clients' interests, support informed decision-making,
              and contribute to the advancement of justice and the
              rule of law.
            </p>
          </motion.div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          <motion.div
            whileHover={{ y: -4 }}
            className="p-10 rounded-2xl border border-slate-200 shadow-lg"
          >
            <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-600 mb-6">
              <FaBullseye size={24} />
            </div>

            <h3 className="font-serif text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-5 text-slate-600 leading-relaxed">
              To provide accessible, ethical, innovative, and
              results-driven legal services while maintaining the
              highest standards of professional excellence and
              client care.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-10 rounded-2xl border border-slate-200 shadow-lg"
          >
            <div className="w-14 h-14 bg-slate-950 rounded-lg flex items-center justify-center text-amber-400 mb-6">
              <FaEye size={24} />
            </div>

            <h3 className="font-serif text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-5 text-slate-600 leading-relaxed">
              To be among the most trusted and respected law firms in
              Sierra Leone and West Africa, recognized for legal
              excellence, innovation, and exceptional client service.
            </p>
          </motion.div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 bg-slate-100">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-amber-600 uppercase tracking-widest text-sm font-semibold">
              Core Values
            </span>

            <h2 className="mt-4 text-4xl font-serif font-bold">
              Principles That Guide Our Practice
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
              >
                <div className="w-12 h-12 bg-slate-950 text-amber-400 rounded-lg flex items-center justify-center text-xl mb-5">
                  {value.icon}
                </div>

                <h3 className="font-serif text-xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-5xl mx-auto">

          <div className="mb-16">
            <span className="text-amber-600 uppercase tracking-widest text-sm font-semibold">
              Our History
            </span>

            <h2 className="mt-4 text-4xl font-serif font-bold">
              Building a Legacy of Legal Excellence
            </h2>
          </div>

          <div className="border-l-2 border-slate-200 pl-8 space-y-12">

            <div>
              <h3 className="font-serif text-2xl font-bold">
                Foundation
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Azibo Kanu & Partners was established to provide
                high-quality legal representation and advisory services
                to individuals, businesses, government institutions,
                and development partners in Sierra Leone.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold">
                Growth & Expansion
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                As the legal and commercial landscape evolved, the firm
                expanded its services to include corporate law,
                taxation, dispute resolution, property law,
                employment law, and regulatory compliance.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold">
                Today
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Today, the firm serves a diverse client base and
                continues to build a reputation for excellence,
                reliability, and trusted legal counsel.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Need Trusted Legal Advice?
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Speak with our experienced legal team and discover how we can
            assist with your legal, corporate, taxation, or dispute
            resolution needs.
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-8 py-4 rounded-lg font-bold uppercase tracking-wider"
            >
              Schedule Consultation
              <FaArrowRight />
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
}