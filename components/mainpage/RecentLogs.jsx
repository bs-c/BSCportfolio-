"use client";
import Link from "next/link";
import { Newspaper, ArrowRight, FileText } from "lucide-react";
import { getCategoryColor } from "@/app/lib/utils";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";

export default function RecentLogs({ posts = [] }) {
  const { lang } = useLang();
  const b = t[lang].blogs;

  return (
    <section id="blogs" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Newspaper className="text-cyan-500" /> {b.title}
        </h2>
        <Link
          href="/blog"
          className="hidden md:flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors font-mono text-sm"
        >
          {b.viewAll} <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group relative flex flex-col p-6 bg-slate-950 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-between mb-4 text-xs font-mono">
              <span className="text-cyan-500">{post.date}</span>
              <span className={`px-2 py-0.5 rounded border transition-colors ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-white transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 grow">
              {post.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 group-hover:text-cyan-400 transition-colors mt-auto">
              <FileText size={14} />
              <span>{b.readEntry}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 md:hidden text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors font-mono text-sm border border-slate-800 px-6 py-3 rounded hover:bg-slate-900"
        >
          {b.viewAll} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
