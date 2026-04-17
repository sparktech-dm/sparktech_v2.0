import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ef29561408af5a2d2ea3b1ffd871435735274eba?width=947",
      title: "Unlocking the Power of SEO Keyword Research",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/06d79cf225dc8055873557d4fc0a784bdf85cdfe?width=947",
      title: "Navigating the Marketplace for SEO Tools",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9efc33b89dbb8aaa5a668eb24f188229c89ecf73?width=947",
      title: "Top SEO Tools: A Comprehensive Guide",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7f94cb529a0d18349c36482c74a52a2e99102c59?width=947",
      title: "Organic Search: Why It Matters",
    },
  ];

  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }
      `}</style>

      <section className="w-full  relative overflow-hidden min-h-[300vh]">
        <div className="relative z-10 flex flex-col justify-center items-center px-4 py-24 md:py-32">
          <h1 className="text-[#f0c417] text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{
              fontFamily: 'Unbounded, "Unbounded Placeholder", sans-serif',
              fontSize: "50px",
              fontWeight: 400,
              lineHeight: "38px",
              color: "#f0c417",
            }}>
            Exclusive Blogs
          </h1>
        </div>

        <div className="cards-wrapper relative flex flex-col items-center px-4 lg:px-10 space-y-12 md:space-y-16">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              ref={el => (revealRefs.current[index] = el)}
              className="opacity-0 transition duration-1000 w-full max-w-[1229px]"
            >
              <div className="bg-white rounded-2xl shadow-[0px_5px_24px_rgba(0,0,0,0.1),0px_24px_47px_rgba(0,0,0,0.1)] overflow-hidden w-full">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <h2 className="text-[#0A0507] text-2xl md:text-4xl lg:text-[54px] font-light mb-4"
                    style={{
              fontFamily: 'Unbounded, "Unbounded Placeholder", sans-serif',
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: "38px",
              color: "#0A0507",
            }}>
                      {post.title}
                    </h2>
                    <p className="text-[#0A0507] text-base md:text-lg lg:text-[22px] font-light mb-6 leading-snug lg:leading-[151.359%]"
                    style={{
                      fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: "#0A0507",
                    }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="bg-[#f0c417] text-white text-base md:text-lg lg:text-[22px] font-light rounded-md px-4 py-3 w-fit"
                    >
                      Read more
                    </Link>
                  </div>
                  <div className="lg:w-1/2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-60 md:h-96 lg:h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
          <section id="footer" className="px-4 py-10">
            <Footer />
          </section>
    </>
  );
};

export default Blogs;
