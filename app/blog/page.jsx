import Link from "next/link";
import { getSortedPostsData } from "@/app/lib/posts";
import BlogList from "@/components/blogs/BlogList";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog | Engineering Logs",
  description: "Technical notes and development logs.",
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <>
      <nav className="top-0 w-full bg-bg/90 backdrop-blur border-b border-line z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/#blogs" className="flex items-center gap-2 text-sm font-mono text-accent hover:text-primary transition-colors">
            <ArrowLeft size={15} /> [ RETURN ]
          </Link>
        </div>
      </nav>
      <section className="py-10 px-6 max-w-4xl mx-auto min-h-screen bg-bg">
        <BlogList allPosts={allPosts} />
      </section>
    </>
  );
}
