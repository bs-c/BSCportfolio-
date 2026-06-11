import { getPostData, getSortedPostsData } from "@/app/lib/posts";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { use } from "react";
import { getCategoryColor } from "@/app/lib/utils";
import { notFound } from "next/navigation";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map(post => ({ slug: post.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostData(slug);
  return { title: `${post.title} | BSC Blog` };
}

export default function Post({ params }) {
  const { slug } = use(params);
  const post = getPostData(slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen bg-bg">
      {/* Nav */}
      <nav className="sticky top-0 w-full bg-bg/90 backdrop-blur border-b border-line z-50">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center">
          <Link href="/blog" className="flex items-center gap-2 text-sm font-mono text-accent hover:text-primary transition-colors">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
      </nav>

      <div className="py-16 px-6 max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-line">
          <div className="flex gap-3 mb-5 text-[11px] font-mono items-center">
            <span className="text-accent">{post.date}</span>
            <span className="text-muted">/</span>
            <span className={`px-2 py-0.5 rounded border ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 leading-tight tracking-tight">
            {post.title}
          </h1>
        </header>

        {/* Body */}
        <div className="prose prose-slate max-w-none
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-primary
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5
          prose-p:text-secondary prose-p:leading-relaxed prose-p:text-[16px]
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-primary prose-strong:font-semibold
          prose-code:text-accent prose-code:bg-accent-light prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[13px] prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-subtle prose-pre:border prose-pre:border-line prose-pre:rounded-lg
          prose-blockquote:border-l-accent prose-blockquote:text-secondary
          prose-hr:border-line">
          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
