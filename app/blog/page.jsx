import Link from "next/link";
import { getSortedPostsData } from "@/app/lib/posts"; // 引入剛剛寫的引擎
import BlogList from "@/components/blogs/BlogList";
import { ArrowLeft, Newspaper, FileText } from "lucide-react";

export const metadata = {
  title: "Blog | Engineering Logs",
  description: "Technical notes and development logs.",
};

export default function BlogPage() {
  // 1. 在 Server 端獲取所有文章
  const allPosts = getSortedPostsData();

  return (
    <>
      <nav className="top-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/#blogs"
            className="flex items-center gap-2 text-sm font-mono text-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft size={16} /> [ RETURN_TO_ROOT ]
          </Link>
        </div>
      </nav>
      <section className="py-10 px-6 max-w-4xl mx-auto min-h-screen">
        {/* 2. 把資料傳給 Client Component 進行渲染與篩選 */}
        <BlogList allPosts={allPosts} />
      </section>
    </>
  );
}
