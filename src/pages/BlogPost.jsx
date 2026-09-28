import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogData } from "../components/Blogs";
import Footer from "../components/Footer";

export default function BlogPost({ post: propPost }) {
  const { id } = useParams();

  // Find post from props or URL params (supports matching by id or slug)
  const post =
    propPost ||
    blogData.find(
      (item) => item.id === id || item.slug === id
    ) ||
    blogData[0]; // Graceful fallback if testing without parameters

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-[#1b365d] flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link
          to="/blogs"
          className="text-[#cc7722] hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Back to Blogs
        </Link>
      </div>
    );
  }

  // 1. Dynamic Canonical URL
  const postSlug = post.slug || post.id;
  const canonicalUrl =
    post.canonicalUrl || `https://www.sparktechdm.com/blogs/${postSlug}`;

  // 2. Safe ISO 8601 formatting for datePublished and dateModified
  const formatISO = (dateStr) => {
    if (!dateStr) return new Date().toISOString();
    const date = new Date(dateStr);
    return !isNaN(date.getTime()) ? date.toISOString() : dateStr;
  };

  const datePublished = formatISO(post.datePublished);
  const dateModified = post.dateModified ? formatISO(post.dateModified) : datePublished;

  // 3. Featured Image absolute URL
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : `https://www.sparktechdm.com${post.image?.startsWith("/") ? "" : "/"}${post.image || "Blog1.webp"}`;

  // 4. Author Name extraction
  const authorName =
    typeof post.author === "object" && post.author !== null
      ? post.author.name
      : post.author || "Spark Tech Digital";

  // 5. BlogPosting JSON-LD Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "headline": post.title,
    "description": post.excerpt || post.subtitle || "",
    "image": [imageUrl],
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Spark Tech Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.sparktechdm.com/assets/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified
  };

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Spark Tech Digital`}</title>
        <meta name="description" content={post.excerpt} />

        {/* BlogPosting JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white text-[#1b365d] font-inter pt-32 pb-16">
        <article className="max-w-4xl mx-auto px-6">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#cc7722] hover:text-[#b36319] transition-colors"
            >
              <ArrowLeft size={16} /> Back to All Blogs
            </Link>
          </div>

          {/* Header */}
          <header className="mb-8">
            {post.subtitle && (
              <span className="text-xs font-bold uppercase tracking-widest text-[#cc7722] mb-3 block">
                {post.subtitle}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald text-[#1b365d] tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User size={16} className="text-[#cc7722]" />
                <span className="font-medium text-[#1b365d]">{authorName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#cc7722]" />
                <time dateTime={datePublished}>
                  {new Date(datePublished).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </time>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {imageUrl && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border-2 border-[#cc7722]/30 max-h-[500px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content Body */}
          <div className="prose prose-lg max-w-none text-[#1b365d] leading-relaxed space-y-6 mb-12">
            {post.excerpt && (
              <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed italic border-l-4 border-[#cc7722] pl-4">
                {post.excerpt}
              </p>
            )}

            {Array.isArray(post.content) ? (
              post.content.map((para, idx) => (
                <p key={idx} className="text-base md:text-lg text-[#1f3a58] leading-relaxed">
                  {para}
                </p>
              ))
            ) : (
              <p className="text-base md:text-lg text-[#1f3a58] leading-relaxed">
                {post.content}
              </p>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2 mb-16">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mr-2">
                <Tag size={14} className="text-[#cc7722]" /> Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#f2eee0] border border-[#cc7722]/40 text-[#1b365d] rounded-full px-3.5 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
