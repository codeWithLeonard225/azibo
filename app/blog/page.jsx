"use client";

import { useState } from "react";
import Link from "next/link";
import { blogs } from "../data/blogs";

const CATEGORIES = ["All", "Tax", "Property", "Business Law", "Employment"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Dynamic filter computing active list metrics
  const filteredBlogs = blogs.filter((blog) => {
    if (activeCategory === "All") return true;
    return blog.category === activeCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-500/20">

      {/* HERO */}
      <section className="relative bg-slate-950 text-white py-20 text-center px-6 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-70" />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-slate-100">
            Legal Insights
          </h1>
          <p className="mt-4 text-slate-400 font-light text-base md:text-lg">
            Articles on law, business, taxation, and property in Sierra Leone.
          </p>
        </div>
      </section>

      {/* BLOG CONTENT CONTAINER */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* Dynamic Category Filtering Row */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {CATEGORIES.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all focus:outline-none ${
                activeCategory === cat
                  ? "bg-slate-950 text-amber-500 border border-slate-950 shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Layout Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-slate-200 rounded-xl bg-white">
            <p className="text-slate-500 font-light">No articles available under this topic currently.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm hover:shadow-xl hover:border-slate-300/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-amber-600 bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/10 inline-block">
                    {blog.category}
                  </span>

                  <h2 className="text-xl font-serif font-bold mt-4 tracking-tight text-slate-950 group-hover:text-amber-600 transition-colors leading-snug">
                    {blog.title}
                  </h2>

                  <p className="text-slate-600 text-sm mt-3 font-light leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">{blog.date}</span>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase font-bold tracking-wider text-slate-950 hover:text-amber-600 transition"
                  >
                    Read More <span className="text-amber-500">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

    </main>
  );
}