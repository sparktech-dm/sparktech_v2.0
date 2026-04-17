import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  // Blog data - this would typically come from an API or database
  const blogData = {
    1: {
      title:
        "Unlocking the Power of SEO Keyword Research: A Guide to Choosing the Right Tools",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/73eb0628f3df91dd0e0280776913d494da235a90?width=2880",
      date: "February 7, 2024",
      category: "Our Three Step Process",
    },
  };

  const blog = blogData[id] || blogData[1]; // Default to first blog

  return (
    <div className="w-full min-h-screen text-white">
      {/* Hero Section - Fixed margins to prevent overflow */}
      <div className="px-4 lg:px-10 pt-20">
        <section className="relative w-full h-[500px] md:h-[700px] lg:h-[823px] max-w-[1440px] mx-auto rounded-[40px] overflow-hidden">
          {/* Background Image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[400px] md:h-[500px] lg:h-[650px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
            }}
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-10">
            {/* Tags */}
            <div className="flex justify-center items-center gap-2 md:gap-[10px] mb-6 md:mb-10">
              <div className="flex items-center justify-center px-2 md:px-3 py-1 rounded-[39px] bg-white/10">
                <span className="text-white text-center font-['Inter'] text-[10px] md:text-[11px] font-black uppercase leading-[22px] tracking-wide">
                  {blog.category}
                </span>
              </div>
              <div className="flex items-center justify-center px-2 md:px-3 py-1 rounded-[39px] bg-white/10">
                <span className="text-white text-center font-['Inter'] text-[10px] md:text-[11px] font-black uppercase leading-[22px] tracking-wide">
                  {blog.date}
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center">
              <h1 className="text-white font-['Unbounded'] text-xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight md:leading-[55px] tracking-[-1px] md:tracking-[-2.5px] max-w-[1360px] mx-auto px-2">
                {blog.title}
              </h1>
            </div>
          </div>
        </section>
      </div>

      {/* Content Section */}
      <section className="px-4 lg:px-10 py-8 md:py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Overview Section - Made responsive with scrollable content on mobile */}
          <div className="w-full min-h-[200px] md:h-[325px] rounded-[20px] md:rounded-[30px] bg-[#F58327] mb-8 md:mb-16 flex items-center justify-center p-4 md:p-6 lg:p-8">
            <div className="text-center max-w-[800px] overflow-y-auto max-h-[180px] md:max-h-none">
              <p className="text-[#0D0D0D] font-['Inter'] text-base md:text-xl lg:text-2xl xl:text-[28px] font-normal leading-6 md:leading-8 lg:leading-[39px] tracking-[-0.5px] md:tracking-[-1.2px]">
                Keyword research is the cornerstone of any successful SEO
                strategy, helping businesses identify the terms and phrases
                their target audience is searching for and optimize their
                content accordingly. With a plethora of keyword research tools
                available in the market, choosing the right tool can be a
                daunting task.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-[1400px] p-10 bg-[#2B2B2B] rounded-[20px] mx-auto space-y-8 md:space-y-12 rounded-[30px] lg:space-y-16">
            {/* Introduction */}
            <div className="opacity-70">
              <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                In this blog post, we'll explore some of the top SEO keyword
                research tools and provide guidance on selecting the best tool
                for your business's needs.
              </p>
            </div>

            {/* Google Keyword Planner */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                <span className="font-bold">Google Keyword Planner:</span>
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Overview</span>: Google Keyword
                    Planner is a free tool provided by Google Ads that allows
                    users to discover new keywords, assess their search volume
                    and competition, and get bid estimates for paid advertising
                    campaigns.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Key Features</span>: The tool
                    provides keyword ideas based on seed keywords or website
                    URLs, along with historical metrics like search volume
                    trends and average CPC (cost-per-click) data.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Benefits</span>: Google Keyword
                    Planner is ideal for businesses looking for basic keyword
                    research capabilities and insights directly from Google's
                    search engine.
                  </p>
                </div>
              </div>
            </div>

            {/* Semrush */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                <span className="font-bold">Semrush:</span>
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Overview</span>: Semrush is an
                    all-in-one SEO suite that offers a robust keyword research
                    tool among its comprehensive features. It provides extensive
                    keyword data, competitive analysis, and domain insights to
                    help businesses uncover profitable keyword opportunities.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Key Features</span>: Semrush's
                    Keyword Magic Tool allows users to explore millions of
                    keywords and access metrics such as search volume, keyword
                    difficulty, and SERP features. It also offers keyword
                    grouping and filtering options for efficient analysis.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Benefits</span>: Semrush is
                    suitable for businesses seeking advanced keyword research
                    capabilities, competitive insights, and comprehensive SEO
                    solutions beyond keyword research.
                  </p>
                </div>
              </div>
            </div>

            {/* Ahrefs */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                <span className="font-bold">Ahrefs:</span>
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Overview</span>: Ahrefs is a
                    powerful SEO toolset that includes a keyword research tool
                    among its various features. It provides detailed keyword
                    data, including search volume, keyword difficulty, and SERP
                    analysis, to help businesses identify valuable keyword
                    opportunities.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Key Features</span>: Ahrefs'
                    Keywords Explorer tool offers in-depth keyword analysis,
                    including keyword difficulty scores, click metrics, and
                    related keyword suggestions. It also provides insights into
                    top-ranking pages and their backlink profiles.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Benefits</span>: Ahrefs is
                    well-suited for businesses focused on competitive keyword
                    analysis, backlink research, and comprehensive SEO
                    strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Moz Keyword Explorer */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                <span className="font-bold">Moz Keyword Explorer:</span>
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Overview</span>: Moz Keyword
                    Explorer is a user-friendly keyword research tool that
                    provides valuable insights into keyword metrics, difficulty
                    scores, and SERP analysis. It helps businesses identify
                    high-potential keywords and prioritize their SEO efforts.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Key Features</span>: Moz Keyword
                    Explorer offers metrics like keyword difficulty, organic CTR
                    (click-through-rate), and priority scores to help users
                    assess the competitiveness and potential of keywords. It
                    also provides SERP analysis and keyword suggestions.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Benefits</span>: Moz Keyword
                    Explorer is ideal for businesses looking for intuitive
                    keyword research tools with actionable insights and
                    prioritization features.
                  </p>
                </div>
              </div>
            </div>

            {/* KeywordTool.io */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                <span className="font-bold">KeywordTool.io:</span>
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Overview</span>: KeywordTool.io
                    is a popular keyword research tool that specializes in
                    generating keyword suggestions from various sources,
                    including Google, YouTube, Bing, and Amazon. It offers a
                    wide range of long-tail keyword ideas for different
                    platforms and languages.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Key Features</span>:
                    KeywordTool.io provides keyword suggestions based on
                    autocomplete queries from search engines, helping businesses
                    uncover relevant and trending topics. It also offers
                    filtering options and search volume data for keyword
                    analysis.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <span className="text-white text-sm md:text-base leading-5 md:leading-6 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                    <span className="font-bold">Benefits</span>: KeywordTool.io
                    is suitable for businesses looking to expand their keyword
                    research beyond traditional search engines and explore
                    niche-specific keywords across multiple platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="space-y-4 md:space-y-6 pt-4 md:pt-8">
              <p className="text-white font-['Inter'] text-sm md:text-[15px] leading-5 md:leading-6">
                Conclusion: Choosing the right SEO keyword research tool is
                essential for businesses looking to optimize their content and
                improve their search engine rankings. Whether you opt for Google
                Keyword Planner for basic insights or invest in comprehensive
                SEO suites like Semrush and Ahrefs for advanced capabilities,
                it's crucial to consider factors like features, usability, and
                budget when selecting a tool. By leveraging the right keyword
                research tool, businesses can uncover valuable keyword
                opportunities, enhance their content strategy, and achieve
                better results in their SEO efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-10 md:h-20"></div>
    </div>
  );
};

export default BlogDetail;
