"use client";
import { useState } from "react";
import Link from "next/link";
import { FileText, Globe } from "lucide-react";
import { getCategoryColor } from "@/app/lib/utils";

export default function BlogList({ allPosts }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedLang, setSelectedLang] = useState("ALL");

  const categories = ["ALL", ...new Set(allPosts.map(post => post.category))];

  const filteredPosts = allPosts.filter(post => {
    const matchCategory = selectedCategory === "ALL" || post.category === selectedCategory;
    const matchLang     = selectedLang === "ALL" || (post.lang || "ZH-TW") === selectedLang;
    return matchCategory && matchLang;
  });

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-line">
        <div>
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-[0.12em] uppercase mb-4">
            <span className="w-4 h-px bg-line-strong inline-block" />
            Engineering Logs
          </div>
          <h1 className="text-3xl font-bold text-primary tracking-tight">Blog</h1>
        </div>

        <div className="flex flex-col items-end gap-3">
          {/* Language filter */}
          <div className="flex items-center gap-1 border border-line rounded-md overflow-hidden">
            <Globe size={12} className="text-muted ml-2.5" />
            {["ALL", "EN", "ZH-TW"].map(lang => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`text-[10px] font-mono px-2.5 py-1.5 transition-colors ${
                  selectedLang === lang ? "bg-primary text-bg" : "text-muted hover:text-primary"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-1.5 justify-end">
            {categories.map(cat => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded text-[11px] font-mono border transition-all ${
                    isSelected ? getCategoryColor(cat) : "bg-card border-line text-muted hover:border-line-strong hover:text-secondary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Post list */}
      <div className="space-y-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block p-5 bg-card border border-line rounded-lg hover:border-line-strong hover:shadow-sm transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
                <h2 className="text-[17px] font-semibold text-primary group-hover:text-accent transition-colors tracking-tight">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 text-[11px] font-mono shrink-0">
                  <span className="text-muted">{post.date}</span>
                  <span className={`px-2 py-0.5 rounded border ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="px-1.5 py-0.5 rounded border border-line text-muted bg-subtle">
                    {post.lang === "EN" ? "EN" : "ZH-TW"}
                  </span>
                </div>
              </div>
              <p className="text-secondary text-[13px] leading-relaxed mb-3 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-muted group-hover:text-accent transition-colors font-mono">
                <FileText size={11} />
                <span>READ_ENTRY</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="py-16 text-center border border-dashed border-line rounded-lg text-muted font-mono text-sm">
            [ NO_LOGS_FOUND ]
          </div>
        )}
      </div>
    </div>
  );
}
