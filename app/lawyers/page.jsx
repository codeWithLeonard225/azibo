"use client";

import { useState } from "react";
import { lawyers } from "../data/lawyers";

export default function LawyersPage() {
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-slate-950 text-white py-20 text-center">
        <h1 className="text-5xl font-bold font-serif">Our Lawyers</h1>
        <p className="mt-4 text-slate-300">
          Meet our experienced legal team
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">

          {lawyers.map((lawyer) => (
            <div
              key={lawyer.slug}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedLawyer(lawyer)}
            >

              {/* PHOTO */}
              <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-4 overflow-hidden" />

              <h2 className="text-xl font-bold">{lawyer.name}</h2>
              <p className="text-slate-500">{lawyer.position}</p>
              <p className="text-sm mt-2 text-slate-600">{lawyer.experience}</p>

              <button className="mt-4 text-amber-600 font-semibold">
                Quick View →
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedLawyer && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">

          <div className="bg-white max-w-2xl w-full rounded-xl p-6 relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedLawyer(null)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            {/* CONTENT */}
            <h2 className="text-3xl font-bold">{selectedLawyer.name}</h2>
            <p className="text-slate-500">{selectedLawyer.position}</p>

            <div className="mt-4 space-y-3 text-slate-700">

              <p><strong>Experience:</strong> {selectedLawyer.experience}</p>

              <p><strong>Biography:</strong> {selectedLawyer.biography}</p>

              <p><strong>Education:</strong></p>
              <ul className="list-disc pl-5">
                {selectedLawyer.education.map((edu, i) => (
                  <li key={i}>{edu}</li>
                ))}
              </ul>

              <p><strong>Notable Cases:</strong></p>
              <ul className="list-disc pl-5">
                {selectedLawyer.notableCases.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <div className="mt-4">
                <p><strong>Email:</strong> {selectedLawyer.email}</p>
                <p><strong>Phone:</strong> {selectedLawyer.phone}</p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-6 flex gap-3">
              <a
                href="/book-consultation"
                className="bg-amber-500 px-4 py-2 rounded text-black font-semibold"
              >
                Book Consultation
              </a>

              <button
                onClick={() => setSelectedLawyer(null)}
                className="border px-4 py-2 rounded"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}