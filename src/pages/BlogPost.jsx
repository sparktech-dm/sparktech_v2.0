import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../components/Seo";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogData } from "../components/Blogs";
import Footer from "../components/Footer";

// Helper to render inline markdown links [Anchor Text](/url) as React Router Links
function renderParagraphWithLinks(text) {
  if (typeof text !== "string") return text;
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const linkText = match[1];
    const linkUrl = match[2];
    if (linkUrl.startsWith("http")) {
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cc7722] underline font-medium hover:text-[#1b365d] transition-colors"
        >
          {linkText}
        </a>
      );
    } else {
      parts.push(
        <Link
          key={match.index}
          to={linkUrl}
          className="text-[#cc7722] underline font-medium hover:text-[#1b365d] transition-colors"
        >
          {linkText}
        </Link>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex === 0) {
    return text;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts;
}

export default function BlogPost({ post: propPost }) {
  const { id } = useParams();

  // Find post from props or URL params (supports matching by id or slug)
  const post =
    propPost ||
    (id
      ? blogData.find((item) => item.id === id || item.slug === id)
      : null);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-[#1b365d] flex flex-col items-center justify-center p-8">
        <Helmet>
          <title>404: Post Not Found | SparkTech Digital</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1 className="text-3xl font-bold mb-4 font-oswald text-[#cc7722]">Post Not Found</h1>
        <p className="text-gray-600 mb-6 max-w-md text-center">
          The blog article you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>
        <Link
          to="/blogs"
          className="text-[#cc7722] hover:underline flex items-center gap-2 font-medium"
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
      "@type": "Organization",
      "name": "Spark Tech Digital",
      "url": "https://www.sparktechdm.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Spark Tech Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.sparktechdm.com/Logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified
  };

  return (
    <>
      <Seo
        title={`${post.title} | SparkTech Digital`}
        description={post.excerpt || post.subtitle || ""}
        keywords={post.tags?.join(", ")}
        ogType="article"
        ogImage={imageUrl}
        canonicalUrl={canonicalUrl}
      >
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
      </Seo>

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

            {post.sections && post.sections.length > 0 ? (
              post.sections.map((section, sIdx) => (
                <div key={sIdx} className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold font-oswald text-[#1b365d] uppercase tracking-wide mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-base md:text-lg text-[#1f3a58] leading-relaxed mb-4">
                      {renderParagraphWithLinks(para)}
                    </p>
                  ))}
                </div>
              ))
            ) : Array.isArray(post.content) ? (
              post.content.map((para, idx) => (
                <p key={idx} className="text-base md:text-lg text-[#1f3a58] leading-relaxed">
                  {renderParagraphWithLinks(para)}
                </p>
              ))
            ) : (
              <p className="text-base md:text-lg text-[#1f3a58] leading-relaxed">
                {renderParagraphWithLinks(post.content)}
              </p>
            )}

            {/* Contextual In-Article CTA */}
            <div className="my-10 p-6 md:p-8 bg-[#f2eee0] border-2 border-[#cc7722] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <h3 className="text-lg md:text-xl font-bold font-oswald text-[#1b365d] uppercase mb-2">
                  Accelerate Your Digital Growth in Chennai
                </h3>
                <p className="text-sm text-[#395c7a]">
                  Partner with SparkTech Digital for data-driven SEO, custom web development, and performance advertising.
                </p>
              </div>
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#1f3a58] hover:bg-[#1b365d] text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md shrink-0 cursor-pointer"
              >
                Schedule Consultation
              </Link>
            </div>
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

        {/* Related Articles */}
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-oswald text-[#1b365d] uppercase tracking-wide mb-8">
              Related Articles & Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogData
                .filter((item) => item.id !== post.id)
                .slice(0, 3)
                .map((related) => (
                  <div
                    key={related.id}
                    className="bg-[#fcfaf7] border border-[#cc7722]/30 rounded-2xl overflow-hidden flex flex-col justify-between p-5 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div>
                      <div className="relative h-36 rounded-lg overflow-hidden mb-4 bg-gray-100">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[11px] font-bold uppercase text-[#cc7722] tracking-wider block mb-1">
                        {related.subtitle}
                      </span>
                      <h3 className="text-base font-bold text-[#1b365d] leading-snug mb-2 font-oswald">
                        <Link
                          to={`/blogs/${related.slug || related.id}`}
                          className="hover:text-[#cc7722] transition-colors"
                        >
                          {related.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                        {related.excerpt}
                      </p>
                    </div>
                    <Link
                      to={`/blogs/${related.slug || related.id}`}
                      className="text-xs font-bold text-[#cc7722] hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      Read Article &rarr;
                    </Link>
                  </div>
                ))}
            </div>
          </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
