import React from "react";
import Seo from "../../components/Seo";

const Graph = () => {
  return (
    <>
      <Seo
        title="Graphic Design & Creative Brand Identity in Chennai | SparkTech"
        description="Elevate your brand presence with stunning graphic design, corporate branding, social media creatives, and marketing collateral by SparkTech."
        keywords="graphic design agency chennai, branding design chennai, creative visual identity, graphic designing chennai"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.sparktechdm.com/services/graphics-designing#service",
                "name": "Graphic Design & Branding Services",
                "url": "https://www.sparktechdm.com/services/graphics-designing",
                "serviceType": "Graphic Design",
                "description": "Elevate your brand presence with stunning graphic design, corporate branding, social media creatives, and marketing collateral by SparkTech.",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://www.sparktechdm.com/#organization",
                  "name": "SparkTech Digital",
                  "url": "https://www.sparktechdm.com/"
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Chennai"
                  },
                  {
                    "@type": "Country",
                    "name": "India"
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.sparktechdm.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://www.sparktechdm.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Graphic Designing"
                  }
                ]
              }
            ]
          })}
        </script>
      </Seo>
      <section className="px-6 py-50 max-w-5xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-4 text-[#f0c417]">Graphic Designing</h1>
        <p className="mb-6 text-lg">
          Great design grabs attention and communicates your brand message instantly. Our graphic design services include logos, brand kits, marketing materials, social media creatives, packaging, and more—everything you need to visually stand out in a competitive digital space.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Design Services Include:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Logo and brand identity design</li>
          <li>Social media post templates and visuals</li>
          <li>Brochures, posters, and flyers</li>
          <li>UI/UX design for websites and apps</li>
          <li>Motion graphics and illustrations</li>
        </ul>
        <p className="text-lg">
          Visual storytelling is key in today’s digital world. Let’s create designs that capture hearts and clicks.
        </p>
      </section>
    </>
  );
};

export default Graph;
