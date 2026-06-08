"use client";

import { useState } from "react";
import Link from "next/link";
import { faqData } from "@/app/data/faqs";

export default function FAQPage() {
  // Track open state using the question's unique ID string
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-500/20">

      {/* Hero Banner Section */}
      <section className="relative bg-slate-950 text-white py-20 px-6 text-center border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-70" />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-amber-500 uppercase tracking-[4px] text-xs font-bold bg-amber-500/10 px-4 py-1.5 rounded border border-amber-500/20">
            Support Matrix
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-5 tracking-tight text-slate-100">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-slate-400 font-light text-base md:text-lg max-w-2xl mx-auto">
            Clear responses regarding company incorporation procedures, litigation timelines, consultation structures, and land law parameters.
          </p>
        </div>
      </section>

      {/* Accordions Processing Grid Container */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {faqData.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              
              {/* Category Group Heading */}
              <h2 className="text-lg uppercase tracking-wider font-bold text-slate-950 border-l-2 border-amber-500 pl-3">
                {group.category}
              </h2>

              {/* Accordion Roster Stack */}
              <div className="space-y-3">
                {group.questions.map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-white border border-slate-200/80 rounded-xl overflow-hidden transition-all duration-200 shadow-sm hover:border-slate-300"
                    >
                      {/* Accordion Trigger Button Button */}
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 focus:outline-none transition-colors hover:bg-slate-50/50"
                      >
                        <span className="font-serif font-bold text-base md:text-lg text-slate-950 tracking-tight leading-snug">
                          {faq.question}
                        </span>
                        <span className={`text-xl font-light text-amber-600 transition-transform duration-300 select-none shrink-0 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                          ＋
                        </span>
                      </button>

                      {/* Smooth Content Expand Layer */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-[500px] opacity-100 border-t border-slate-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="p-6 text-slate-600 font-light text-sm md:text-base leading-relaxed bg-slate-50/40">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Direct Escalation Call to Action Block */}
      <section className="bg-slate-950 text-white py-20 text-center px-6 relative border-t border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-slate-100">
            Have a Specific Legal Problem?
          </h3>
          <p className="mt-3 text-slate-400 font-light max-w-md text-sm md:text-base">
            Every scenario features distinct structural parameters. Our counsel are fully cross-trained to evaluate your context.
          </p>
          <Link
            href="/book-consultation"
            className="inline-block mt-8 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 transition shadow-md"
          >
            Open a Formal Case File
          </Link>
        </div>
      </section>

    </main>
  );
}