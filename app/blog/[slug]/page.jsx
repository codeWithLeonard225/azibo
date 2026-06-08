import { notFound } from "next/navigation";
import { blogs } from "@/app/data/blogs";

// Helper finder to match slugs accurately
function getBlog(slug) {
  return blogs.find((b) => b.slug === slug);
}

// Statically pre-compiles paths for blazing-fast SEO load speeds
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Asynchronous Metadata generator for optimal Google indexing
export async function generateMetadata({ params }) {
  const { slug } = await params; // Unwrapping asynchronous routing parameters
  const blog = getBlog(slug);

  if (!blog) {
    return {
      title: "Article Not Found | Azibo Kanu & Partners",
    };
  }

  return {
    title: `${blog.title} | Azibo Kanu & Partners`,
    description: blog.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params; // Properly unwrapping the async parameters promise
  const blog = getBlog(slug);

  if (!blog) {
    notFound(); // Clean redirect to standard global 404 fallback layout
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-500/20">

      {/* Hero Banner Section */}
      <section className="bg-slate-950 text-white py-24 text-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-70" />
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-amber-500 uppercase tracking-[3px] text-xs font-bold bg-amber-500/10 px-4 py-1.5 rounded border border-amber-500/20">
            {blog.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-serif font-bold mt-5 tracking-tight text-slate-100 max-w-3xl leading-tight">
            {blog.title}
          </h1>

          <div className="w-12 h-0.5 bg-amber-500 my-6 rounded-full" />

          <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">
            By {blog.author} • {blog.date}
          </p>
        </div>
      </section>

      {/* Deep-Dive Article Body Content */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-white border border-slate-200/60 rounded-xl p-8 md:p-12 shadow-sm text-slate-700 leading-relaxed text-base md:text-lg whitespace-pre-line font-light">
          {blog.content}
        </div>
      </article>

      {/* Conversion Banner Section */}
      <section className="bg-slate-950 text-white py-20 text-center px-6 border-t border-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-100">
            Need Legal Assistance?
          </h2>
          <p className="mt-3 text-slate-400 font-light max-w-md text-sm md:text-base">
            Speak with our multi-disciplinary firm practitioners regarding your statutory or corporate matters.
          </p>
          <a
            href="/book-consultation"
            className="inline-block mt-8 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 transition shadow-md"
          >
            Book Consultation
          </a>
        </div>
      </section>

    </main>
  );
}