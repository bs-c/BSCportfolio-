import { getPostData, getSortedPostsData } from "@/app/lib/posts";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { use } from "react"; // 🔥 1. 新增這行：引入 use
import { getCategoryColor } from "@/app/lib/utils";

// 🔥 1. 引入數學插件
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// 🔥 2. 引入 KaTeX 的 CSS (這行最重要，沒加的話公式會變亂碼)
import "katex/dist/katex.min.css";

// 產生靜態路徑 (這部分維持不變)
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

// 設定動態 Metadata
export async function generateMetadata({ params }) {
  // 🔥 2. 修正：params 是 Promise，必須加 await
  const { slug } = await params;
  const post = getPostData(slug);
  return { title: `${post.title} | BSC Blog` };
}

// 頁面本體
export default function Post({ params }) {
  // 🔥 3. 修正：使用 use() 來解包 params，取得 slug
  const { slug } = use(params);

  // 現在 slug 有值了，再去抓資料就不會報錯 undefined.md
  const post = getPostData(slug);

  return (
    <article className="py-24 px-6 max-w-3xl mx-auto min-h-screen">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 mb-8 transition-colors font-mono text-sm"
      >
        <ArrowLeft size={16} />
        BACK_TO_Blogs
      </Link>

      <header className="mb-12 border-b border-slate-800 pb-8">
        <div className="flex gap-4 mb-4 text-xs font-mono">
          <span className="text-cyan-500">{post.date}</span>
          <span className="text-slate-600">/</span>
          <span
            className={`px-2 py-0.5 rounded border ${getCategoryColor(post.category)}`}
          >
            {post.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>
      </header>

      <div className="prose prose-invert prose-cyan max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-p:leading-relaxed prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
