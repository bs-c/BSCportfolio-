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
    <section id="blogs" className="py-24 px-6 bg-subtle border-b border-line">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-[0.12em] uppercase mb-5">
              <span className="w-4 h-px bg-line-strong inline-block" />
              Logs
            </div>
            <h2 className="text-3xl font-bold text-primary tracking-tight flex items-center gap-3">
              <Newspaper size={24} className="text-accent" /> {b.title}
            </h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-muted hover:text-primary transition-colors font-mono text-[12px]">
            {b.viewAll} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group relative flex flex-col p-6 bg-card border border-line rounded-lg hover:border-line-strong transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between mb-4 text-[11px] font-mono">
                <span className="text-accent">{post.date}</span>
                <span className={`px-2 py-0.5 rounded border text-[10px] transition-colors ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
              </div>
              <h3 className="text-[16px] font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2 tracking-tight">
                {post.title}
              </h3>
              <p className="text-secondary text-[13px] leading-relaxed mb-6 line-clamp-3 grow">
                {post.description}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono text-muted group-hover:text-accent transition-colors mt-auto">
                <FileText size={12} />
                <span>{b.readEntry}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors font-mono text-[12px] border border-line px-6 py-3 rounded hover:border-line-strong">
            {b.viewAll} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
