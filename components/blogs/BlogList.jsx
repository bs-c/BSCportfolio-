"use client"; // 🔥 必須是 Client Component 才能用 useState
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Newspaper, FileText, Globe } from "lucide-react";
import { getCategoryColor } from "@/app/lib/utils";

export default function BlogList({ allPosts }) {
  // 1. 定義兩個狀態
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedLang, setSelectedLang] = useState("ALL"); // 🔥 新增語言狀態

  const categories = ["ALL", ...new Set(allPosts.map((post) => post.category))];

  // 2. 雙重篩選邏輯 (Category AND Language)
  const filteredPosts = allPosts.filter((post) => {
    // 條件 A: 分類符合 (或選 ALL)
    const matchCategory =
      selectedCategory === "ALL" || post.category === selectedCategory;
    // 條件 B: 語言符合 (或選 ALL) - 假設您的 md 檔頭有 lang: "EN" 或 "ZH"
    const matchLang =
      selectedLang === "ALL" || (post.lang || "繁中") === selectedLang;

    return matchCategory && matchLang;
  });

  return (
    <div className="space-y-12">
      {/* Header 區塊 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <Newspaper className="text-cyan-500" /> Blogs
          </h1>
        </div>

        {/* 🔥 修改重點：分類按鈕區 */}
        <div className="flex flex-col items-end gap-4">
          {/* 🔥 語言切換器 (做得很低調，像系統設定) */}
          <div className="flex items-center gap-2 bg-slate-900/50 p-1 rounded border border-slate-800">
            <Globe size={12} className="text-slate-500 ml-2" />
            {["ALL", "EN", "繁中"].map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`
                   text-[10px] font-mono px-2 py-0.5 rounded transition-all
                   ${
                     selectedLang === lang
                       ? "bg-slate-700 text-white shadow-sm"
                       : "text-slate-500 hover:text-slate-300"
                   }
                 `}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* 分類按鈕 (維持原樣) */}
          <div className="flex flex-wrap gap-2 justify-end">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-3 py-1.5 rounded text-xs font-mono border transition-all duration-300
                    ${
                      isSelected
                        ? getCategoryColor(cat)
                        : "bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300"
                    }
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 文章列表區 (這部分不用動，但我把顏色函式整合進去了) */}
      <div className="grid gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block group p-6 bg-slate-950/50 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-all hover:-translate-x-1"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <h2 className="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-slate-500">{post.date}</span>
                  <span
                    className={`px-2 py-0.5 rounded border ${getCategoryColor(post.category)}`}
                  >
                    {post.category}
                  </span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${
                      post.lang === "EN"
                        ? "border-slate-600 text-slate-300 bg-slate-800" // 英文：低調灰/白
                        : "border-slate-600 text-cyan-500 bg-slate-800" // 中文：稍微亮一點
                    }`}
                  >
                    {post.lang === "EN" ? "EN" : "繁中"}
                  </span>

                  {/* 使用共用的顏色函式 */}
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 group-hover:text-cyan-500 transition-colors font-mono">
                <FileText size={12} />
                <span>READ_ENTRY</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="py-12 text-center border border-dashed border-slate-800 rounded-lg text-slate-600 font-mono">
            [ NO_LOGS_FOUND_IN_CATEGORY ]
          </div>
        )}
      </div>
    </div>
  );
}
