/**
 * scripts/generate-ssg.js
 * Multi-Page Static Site Generator for SparkTech Digital Marketing
 * Generates genuinely unique, prerendered HTML files for all 16 sitemap URLs.
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run "vite build" first.');
  process.exit(1);
}

const baseTemplate = fs.readFileSync(templatePath, 'utf8');

// Extract Blog Data from source
const blogsSource = fs.readFileSync(path.join(projectRoot, 'src/components/Blogs.jsx'), 'utf8');
const blogLines = blogsSource.split('\n');
const blogDataCode = blogLines.slice(8, 268).join('\n').replace('export const blogData =', '').replace(/;\s*$/, '');
const blogArticles = eval('(' + blogDataCode + ')');

// Common navigation header HTML
const commonHeader = `
      <header class="static-site-header">
        <nav aria-label="Main Navigation">
          <a href="/" aria-label="SparkTech Digital Home">
            <img src="/Logo.png" alt="SparkTech Digital Marketing Logo" width="160" height="40" />
          </a>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/career">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>`;

// Common footer HTML
const commonFooter = `
      <footer>
        <p><strong>SparkTech Digital</strong> — C1, Honey tone Apartments, Shankarapuram 1st Street, Choolaimedu, Chennai 600094 | Phone: <a href="tel:+918939892219">+91 8939892219</a> | Email: <a href="mailto:sparktechdm@gmail.com">sparktechdm@gmail.com</a></p>
        <p>&copy; 2026 SparkTech Digital Marketing. All rights reserved. Explore our <a href="/sitemap.xml">XML Sitemap</a>.</p>
      </footer>`;

// Helper to assemble full HTML page
function buildPageHtml({
  url,
  title,
  description,
  keywords,
  schemaJson,
  ogImage = 'https://www.sparktechdm.com/Logo.png',
  is404 = false,
  mainHtml
}) {
  const canonicalUrl = `https://www.sparktechdm.com${url === '/' ? '/' : url.replace(/\/$/, '')}`;
  
  let html = baseTemplate;

  // 1. Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

  // 2. Replace Meta Description
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${description}"`);

  // 3. Replace Keywords
  if (keywords) {
    html = html.replace(/<meta\s+name="keywords"\s+content="[^"]*"/i, `<meta name="keywords" content="${keywords}"`);
  }

  // 4. Replace Canonical
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s+data-rh="true"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" data-rh="true" />`);

  // 5. Replace Open Graph
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"/i, `<meta property="og:url" content="${canonicalUrl}"`);
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"/i, `<meta property="og:title" content="${title}"`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"/i, `<meta property="og:description" content="${description}"`);
  html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"/i, `<meta property="og:image" content="${ogImage}"`);

  // 6. Replace Twitter
  html = html.replace(/<meta\s+name="twitter:url"\s+content="[^"]*"/i, `<meta name="twitter:url" content="${canonicalUrl}"`);
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"/i, `<meta name="twitter:title" content="${title}"`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"/i, `<meta name="twitter:description" content="${description}"`);
  html = html.replace(/<meta\s+name="twitter:image"\s+content="[^"]*"/i, `<meta name="twitter:image" content="${ogImage}"`);

  // 7. Replace JSON-LD Schema
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">\n${JSON.stringify(schemaJson, null, 2)}\n    </script>`);

  // 7b. Add noindex for 404 page
  if (is404) {
    html = html.replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>');
  }

  // 8. Replace Content inside <div id="root">...</div>
  const rootOpenTag = '<div id="root">';
  const rootStartIndex = html.indexOf(rootOpenTag);
  if (rootStartIndex === -1) {
    throw new Error('Could not find <div id="root"> in baseTemplate');
  }
  
  const metaPixelIndex = html.indexOf('<!-- Meta Pixel Code (Deferred Bootstrap) -->');
  const searchLimit = metaPixelIndex !== -1 ? metaPixelIndex : html.indexOf('</body>');
  const closingRootRelative = html.substring(rootStartIndex, searchLimit).lastIndexOf('</div>');
  const closingRootIndex = rootStartIndex + closingRootRelative;
  
  const beforeRoot = html.substring(0, rootStartIndex + rootOpenTag.length);
  const afterRoot = html.substring(closingRootIndex);
  
  const fullRootContent = `\n${commonHeader}\n\n      <main>\n${mainHtml}\n      </main>\n\n${commonFooter}\n    `;
  
  return `${beforeRoot}${fullRootContent}${afterRoot}`;
}

// -------------------------------------------------------------
// PAGE DEFINITIONS (All 16 Sitemap URLs)
// -------------------------------------------------------------
const pages = [
  // 1. HOMEPAGE (Already customized in baseTemplate, but we ensure parity)
  {
    url: '/',
    outputPath: 'index.html',
    title: 'Digital Marketing Company in Chennai | SparkTech Digital',
    description: 'SparkTech is a premier digital marketing company in Chennai offering expert SEO, web development, and performance marketing services to grow your business.',
    keywords: 'digital marketing company in chennai, digital marketing agency chennai, seo company in chennai, web development chennai, sparktech digital',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.sparktechdm.com/#organization",
          "name": "SparkTech Digital",
          "legalName": "SparkTech Digital Marketing",
          "url": "https://www.sparktechdm.com/",
          "logo": "https://www.sparktechdm.com/Logo.png",
          "image": "https://www.sparktechdm.com/Logo.png",
          "description": "SparkTech Digital Marketing is a premier digital growth agency in Chennai providing SEO, web development, Google Ads, social media marketing, and email automation.",
          "email": "sparktechdm@gmail.com",
          "telephone": "+91 8939892219",
          "sameAs": [
            "https://www.instagram.com/sparktech.dm/",
            "https://in.linkedin.com/company/sparktech-dm",
            "https://maps.app.goo.gl/4sYLYqWiS9KQRijP8"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "C1, Honey tone Apartments, Shankarapuram 1st Street",
            "addressLocality": "Choolaimedu",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600094",
            "addressCountry": "IN"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91 8939892219",
              "contactType": "customer service",
              "email": "sparktechdm@gmail.com",
              "areaServed": "IN",
              "availableLanguage": ["English", "Tamil"]
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.sparktechdm.com/#website",
          "name": "SparkTech Digital",
          "url": "https://www.sparktechdm.com/",
          "publisher": {
            "@id": "https://www.sparktechdm.com/#organization"
          }
        }
      ]
    },
    skipGeneration: true // Base dist/index.html is already preserved
  },

  // 2. ABOUT US
  {
    url: '/about',
    outputPath: 'about/index.html',
    title: 'About Us | SparkTech Digital Marketing Agency Chennai',
    description: 'Learn about SparkTech Digital, our expert team, core values, and milestones as a leading digital marketing company in Chennai helping businesses scale online.',
    keywords: 'about sparktech digital, digital marketing team chennai, marketing agency journey, web development agency chennai',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.sparktechdm.com/about#webpage",
          "name": "About Us | SparkTech Digital - Premier Digital Agency in Chennai",
          "url": "https://www.sparktechdm.com/about",
          "description": "Learn about SparkTech Digital's journey, team, and mission to deliver cutting-edge SEO, web design, and digital growth solutions for businesses in Chennai.",
          "isPartOf": { "@id": "https://www.sparktechdm.com/#website" },
          "about": { "@id": "https://www.sparktechdm.com/#organization" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
              { "@type": "ListItem", "position": 2, "name": "About Us" }
            ]
          }
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">OUR STORY & GROWTH</p>
          <h1>About Us: Our Journey & Vision</h1>
          <p class="lead">SparkTech Digital Marketing is a results-driven agency in Chennai dedicated to transforming ambitious businesses into market leaders through modern web technology, strategic SEO, and high-impact digital campaigns.</p>
          
          <section>
            <h2>Building Digital Excellence in Chennai</h2>
            <p>Founded with a passion for transparent and performance-led marketing, SparkTech Digital has established a proven track record across Tamil Nadu and pan-India. We combine local market intelligence with global best practices to ensure every client achieves predictable, scalable growth.</p>
            <p>From our headquarters in Choolaimedu, Chennai, we work alongside startups, retail brands, and established enterprises to solve complex digital challenges. Explore our full suite of <a href="/services">digital marketing services</a> or read about our <a href="/services/seo">SEO methodology</a>.</p>
          </section>

          <section>
            <h2>Key Agency Milestones</h2>
            <ul>
              <li><strong>2+ Years</strong> of continuous client expansion and proven ROI.</li>
              <li><strong>15+ Happy Clients</strong> achieving consistent organic and paid lead flow.</li>
              <li><strong>25+ Completed Projects</strong> across web development, branding, and search campaigns.</li>
              <li><strong>20+ Dedicated Professionals</strong> specializing in UI/UX, full-stack engineering, and creative strategy.</li>
            </ul>
          </section>

          <section>
            <h2>Meet the SparkTech Team</h2>
            <p>Our multidisciplinary team brings together skilled developers, seasoned SEO analysts, creative copywriters, and paid media strategists who take ownership of your growth metrics.</p>
            <div>
              <img src="/Logo.png" alt="SparkTech Digital Marketing Logo" width="160" height="40" loading="lazy" />
              <img src="/rocket-removebg-preview.webp" alt="SparkTech Growth Projects Icon" width="40" height="40" loading="lazy" />
            </div>
            <p>Interested in joining our forward-thinking team? Check our open roles on our <a href="/career">Careers page</a>.</p>
          </section>

          <section>
            <h2>Connect with Our Chennai Office</h2>
            <p>We invite you to discuss your business goals with our strategists. Visit our <a href="/contact">contact page</a> or explore our latest insights on our <a href="/blogs">digital marketing blog</a>.</p>
          </section>
        </article>`
  },

  // 3. SERVICES OVERVIEW
  {
    url: '/services',
    outputPath: 'services/index.html',
    title: 'Digital Marketing Services in Chennai | SparkTech Digital',
    description: 'Explore results-driven digital marketing services in Chennai by SparkTech Digital, including SEO, custom web development, PPC Google Ads, social media marketing, and email automation.',
    keywords: 'digital marketing services in chennai, seo services chennai, web development chennai, google ads agency chennai, social media marketing chennai',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.sparktechdm.com/services#webpage",
          "name": "Digital Marketing Services in Chennai | SparkTech Digital",
          "url": "https://www.sparktechdm.com/services",
          "description": "Explore our comprehensive digital marketing, SEO, web development, and branding services tailored to grow your business online.",
          "isPartOf": { "@id": "https://www.sparktechdm.com/#website" },
          "about": { "@id": "https://www.sparktechdm.com/#organization" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services" }
            ]
          }
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">WHAT WE DELIVER</p>
          <h1>Our Digital Marketing Services</h1>
          <p class="lead">At SparkTech Digital, we design and execute data-backed growth strategies tailored to the unique demands of businesses in Chennai, India, and global markets.</p>

          <section>
            <h2>Comprehensive Digital Growth Solutions</h2>
            <p>Our core services integrate search visibility, responsive design, targeted performance marketing, and automated customer nurture funnels to maximize return on ad spend and organic acquisition.</p>
            
            <article>
              <h3><a href="/services/seo">Search Engine Optimization (SEO)</a></h3>
              <p>Achieve top rankings on Google with data-driven technical audits, keyword mapping, on-page optimization, and high-impact local SEO across Chennai.</p>
            </article>

            <article>
              <h3><a href="/services/website-development">Website Development & UI/UX Design</a></h3>
              <p>Custom, mobile-first websites engineered with modern frameworks like React for lightning-fast speeds, seamless UX, and high conversion rates.</p>
            </article>

            <article>
              <h3><a href="/services/social-media-marketing">Social Media Marketing (SMM)</a></h3>
              <p>Amplify brand awareness and capture qualified inbound leads through precision-targeted campaigns on Meta, Instagram, and LinkedIn.</p>
            </article>

            <article>
              <h3><a href="/services/email-marketing">Automated Email Marketing</a></h3>
              <p>Drive customer retention and lifetime customer value with customized lifecycle nurture workflows, drip sequences, and sales funnels.</p>
            </article>
          </section>

          <section>
            <h2>Why Partner with SparkTech Digital?</h2>
            <p>We don't believe in vanity metrics. Every campaign is tracked using granular analytics to ensure your marketing spend translates into measurable revenue. Read our case studies and guides on our <a href="/blogs">blogs page</a> or schedule a consultation via our <a href="/contact">contact form</a>.</p>
          </section>
        </article>`
  },

  // 4. SEO SERVICES
  {
    url: '/services/seo',
    outputPath: 'services/seo/index.html',
    title: 'SEO Services in Chennai | Search Engine Optimization | SparkTech',
    description: 'Drive organic traffic, improve Google rankings, and gain qualified leads with expert technical, on-page, off-page, and local SEO services in Chennai.',
    keywords: 'seo services in chennai, search engine optimization chennai, local seo chennai, technical seo agency chennai',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://www.sparktechdm.com/services/seo#service",
          "name": "Search Engine Optimization (SEO) Services",
          "url": "https://www.sparktechdm.com/services/seo",
          "serviceType": "Search Engine Optimization",
          "description": "Drive organic traffic, improve Google rankings, and gain qualified leads with expert technical, on-page, off-page, and local SEO services in Chennai.",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.sparktechdm.com/#organization",
            "name": "SparkTech Digital",
            "url": "https://www.sparktechdm.com/"
          },
          "areaServed": [
            { "@type": "City", "name": "Chennai" },
            { "@type": "AdministrativeArea", "name": "Choolaimedu" },
            { "@type": "Country", "name": "India" }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.sparktechdm.com/services" },
            { "@type": "ListItem", "position": 3, "name": "SEO Services" }
          ]
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">ORGANIC SEARCH DOMINANCE</p>
          <h1>Search Visibility & SEO Services in Chennai</h1>
          <p class="lead">Capture high-intent customer demand when potential buyers search for your products and services. SparkTech provides end-to-end technical, on-page, and local SEO services designed to outrank regional competitors.</p>

          <section>
            <h2>Technical, On-Page & Local SEO Expertise</h2>
            <p>Our SEO methodology goes far beyond keyword stuffing. We perform rigorous technical site audits, rectify Core Web Vitals bottlenecks, build semantic schema architectures, and optimize your Google Business Profile for localized Chennai searches including Choolaimedu, Anna Nagar, and Nungambakkam.</p>
            <ul>
              <li><strong>In-Depth Keyword Research:</strong> Uncovering high-commercial-intent search queries that convert into paying clients.</li>
              <li><strong>Technical Architecture:</strong> Fast load times, clean crawl budgets, mobile indexing, and XML sitemaps.</li>
              <li><strong>Local SEO Mastery:</strong> Citation building, Google Maps optimization, and location-targeted landing pages.</li>
              <li><strong>Transparent Analytics:</strong> Monthly keyword movement tracking, organic traffic attribution, and conversion reporting.</li>
            </ul>
          </section>

          <section>
            <h2>Related Growth Resources</h2>
            <p>Learn more about our SEO strategies in our detailed guides: <a href="/blogs/improve-website-rankings-with-seo">How to Improve Website Rankings with SEO</a> and <a href="/blogs/why-quality-content-matters-for-seo-and-brand-growth">Why Quality Content Matters for SEO</a>. Ready to dominate Google search? <a href="/contact">Request a free SEO audit</a> today.</p>
          </section>
        </article>`
  },

  // 5. WEBSITE DEVELOPMENT
  {
    url: '/services/website-development',
    outputPath: 'services/website-development/index.html',
    title: 'Website Development Company in Chennai | UI/UX Design | SparkTech',
    description: 'Build fast, responsive, and SEO-friendly websites with SparkTech Digital. Custom web development, UI/UX design, and web applications tailored for growth in Chennai.',
    keywords: 'website development company in chennai, web design agency chennai, custom react web development, ui ux design chennai',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://www.sparktechdm.com/services/website-development#service",
          "name": "Website Development & UI/UX Design Services",
          "url": "https://www.sparktechdm.com/services/website-development",
          "serviceType": "Web Development",
          "description": "Fast, secure, responsive, and SEO-friendly website development and UI/UX design built with modern frameworks to convert visitors into customers.",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.sparktechdm.com/#organization",
            "name": "SparkTech Digital",
            "url": "https://www.sparktechdm.com/"
          },
          "areaServed": [
            { "@type": "City", "name": "Chennai" },
            { "@type": "Country", "name": "India" }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.sparktechdm.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Website Development" }
          ]
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">HIGH-CONVERTING DIGITAL HUBS</p>
          <h1>Website Development & UI/UX Design Services in Chennai</h1>
          <p class="lead">Your website is your 24/7 digital storefront. We develop bespoke, blazing-fast websites engineered to engage visitors and turn casual traffic into loyal paying customers.</p>

          <section>
            <h2>Modern Front-End & Responsive Web Architecture</h2>
            <p>Built with leading-edge frameworks including React and modern CSS, our web applications load instantly, deliver flawless mobile user experiences, and adhere to strict accessibility standards.</p>
            <ul>
              <li><strong>Custom Front-End Engineering:</strong> Clean, maintainable code architectures tailored to your specific brand identity.</li>
              <li><strong>Mobile-First UI/UX Design:</strong> Intuitive navigation, clear call-to-action pathways, and seamless checkout or inquiry flows.</li>
              <li><strong>SEO-First Construction:</strong> Built-in meta tag handling, semantic heading structures, and instant indexability.</li>
              <li><strong>High Security & Speed:</strong> Optimized asset caching, HTTPS compliance, and Core Web Vitals tuning.</li>
            </ul>
          </section>

          <section>
            <h2>Convert Visitors into Inbound Leads</h2>
            <p>Discover how your website architecture impacts your bottom line in our article: <a href="/blogs/build-website-that-converts-visitors-into-customers">Building a Website That Converts</a>. Contact our web development team via our <a href="/contact">contact page</a> to start your project.</p>
          </section>
        </article>`
  },

  // 6. SOCIAL MEDIA MARKETING
  {
    url: '/services/social-media-marketing',
    outputPath: 'services/social-media-marketing/index.html',
    title: 'Social Media Marketing Agency in Chennai | SMM Services | SparkTech',
    description: 'Engage your target audience, build brand loyalty, and drive conversions with data-driven social media marketing campaigns across Meta, Instagram, and LinkedIn in Chennai.',
    keywords: 'social media marketing agency in chennai, smm services chennai, instagram marketing chennai, meta ads agency chennai',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://www.sparktechdm.com/services/social-media-marketing#service",
          "name": "Social Media Marketing (SMM) Services",
          "url": "https://www.sparktechdm.com/services/social-media-marketing",
          "serviceType": "Social Media Marketing",
          "description": "Build brand awareness, engage your audience, and drive qualified conversions with targeted social media campaigns across Meta, Instagram, and LinkedIn.",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.sparktechdm.com/#organization",
            "name": "SparkTech Digital",
            "url": "https://www.sparktechdm.com/"
          },
          "areaServed": [
            { "@type": "City", "name": "Chennai" },
            { "@type": "Country", "name": "India" }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.sparktechdm.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Social Media Marketing" }
          ]
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">AUDIENCE ENGAGEMENT & BRAND AUTHORITY</p>
          <h1>Social Media Marketing & Brand Engagement in Chennai</h1>
          <p class="lead">Build an enduring community around your brand and capture qualified leads across Meta, Instagram, and LinkedIn through strategic creative content and targeted paid social ads.</p>

          <section>
            <h2>Strategic Social Media Campaigns That Drive ROI</h2>
            <p>We blend eye-catching creative visuals with granular demographic, behavioral, and geographic targeting to reach your ideal prospective customers across Chennai and pan-India.</p>
            <ul>
              <li><strong>Content Strategy & Storytelling:</strong> High-quality creative carousels, reels, and thought leadership posts.</li>
              <li><strong>Targeted Paid Ad Management:</strong> Lead generation, retargeting funnels, and conversion optimization on Meta and LinkedIn.</li>
              <li><strong>Community Management:</strong> Proactive customer engagement, comment monitoring, and reputation building.</li>
              <li><strong>Performance Tracking:</strong> Tracking customer acquisition cost (CAC), return on ad spend (ROAS), and engagement metrics.</li>
            </ul>
          </section>

          <section>
            <h2>Learn More About Customer Relationships</h2>
            <p>Read our in-depth guide on <a href="/blogs/build-strong-customer-relationships-through-social-media">Building Strong Customer Relationships Through Social Media</a>. Ready to grow your audience? <a href="/contact">Get in touch with our social media team</a>.</p>
          </section>
        </article>`
  },

  // 7. EMAIL MARKETING
  {
    url: '/services/email-marketing',
    outputPath: 'services/email-marketing/index.html',
    title: 'Email Marketing & Automation Services in Chennai | SparkTech',
    description: 'Nurture leads, retain customers, and drive recurring revenue with personalized automated email marketing workflows and campaigns by SparkTech Digital.',
    keywords: 'email marketing services in chennai, automated email flows chennai, lifecycle marketing, drip campaigns chennai',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://www.sparktechdm.com/services/email-marketing#service",
          "name": "Email Marketing & Marketing Automation Services",
          "url": "https://www.sparktechdm.com/services/email-marketing",
          "serviceType": "Email Marketing",
          "description": "Automate customer engagement and increase customer lifetime value with targeted email workflows, lead nurture funnels, and retention campaigns.",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.sparktechdm.com/#organization",
            "name": "SparkTech Digital",
            "url": "https://www.sparktechdm.com/"
          },
          "areaServed": [
            { "@type": "City", "name": "Chennai" },
            { "@type": "Country", "name": "India" }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.sparktechdm.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Email Marketing" }
          ]
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">AUTOMATED REVENUE & CUSTOMER RETENTION</p>
          <h1>Automated Email Marketing & Lifecycle Flows in Chennai</h1>
          <p class="lead">Unlock the full lifetime value of your customer database. SparkTech builds automated email workflows that nurture cold prospects, recover abandoned revenue, and turn one-time buyers into repeat brand champions.</p>

          <section>
            <h2>Lifecycle Email Funnels & Automated Sequences</h2>
            <p>Email remains the highest-ROI digital channel when powered by smart segmentation, behavioral triggers, and persuasive copy.</p>
            <ul>
              <li><strong>Welcome & Onboarding Sequences:</strong> Introducing new subscribers to your brand story and establishing immediate trust.</li>
              <li><strong>Lead Nurture Drips:</strong> Providing educational value that gently guides prospects toward purchasing decisions.</li>
              <li><strong>Re-engagement & Win-Back:</strong> Reigniting interest among dormant subscribers with tailored offers.</li>
              <li><strong>Deliverability Optimization:</strong> Ensuring high inbox placement with SPF, DKIM, and DMARC compliance.</li>
            </ul>
          </section>

          <section>
            <h2>Integrate Email with Your Growth Strategy</h2>
            <p>Combine email automation with our <a href="/services/website-development">website development</a> and <a href="/services/seo">SEO services</a> for a complete acquisition engine. <a href="/contact">Schedule an email strategy session</a> today.</p>
          </section>
        </article>`
  },

  // 8. CAREER
  {
    url: '/career',
    outputPath: 'career/index.html',
    title: 'Careers at SparkTech | Digital Marketing & Tech Jobs in Chennai',
    description: 'Join our dynamic team of digital marketers, SEO specialists, developers, and designers at SparkTech Digital in Chennai. Explore open job roles and apply today.',
    keywords: 'careers at sparktech, digital marketing jobs chennai, seo job vacancies chennai, web developer hiring chennai',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.sparktechdm.com/career#webpage",
          "name": "Careers at SparkTech Digital | Job Openings in Chennai",
          "url": "https://www.sparktechdm.com/career",
          "description": "Join our dynamic team of digital marketers, SEO specialists, developers, and designers at SparkTech Digital in Chennai.",
          "isPartOf": { "@id": "https://www.sparktechdm.com/#website" },
          "about": { "@id": "https://www.sparktechdm.com/#organization" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
              { "@type": "ListItem", "position": 2, "name": "Careers" }
            ]
          }
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">WORK WITH US</p>
          <h1>Careers at SparkTech Digital Marketing</h1>
          <p class="lead">We are always searching for passionate creative thinkers, technical problem solvers, and ambitious digital marketing professionals to join our expanding team in Chennai.</p>

          <section>
            <h2>Join Our Creative & Technical Team in Chennai</h2>
            <p>At SparkTech, you'll work on live client projects that push boundaries in SEO, custom web design, and digital brand expansion. We cultivate a collaborative environment where initiative, learning, and real-world results are celebrated.</p>
            <ul>
              <li><strong>SEO Analyst & Strategist:</strong> Technical site auditing, keyword discovery, and rank acceleration.</li>
              <li><strong>Front-End Web Developer:</strong> Modern React web development, UI engineering, and performance optimization.</li>
              <li><strong>Social Media & Content Creator:</strong> Creative copywriting, reel creation, and brand storytelling.</li>
              <li><strong>PPC & Performance Marketer:</strong> Managing high-impact Google Ads and Meta paid acquisition funnels.</li>
            </ul>
          </section>

          <section>
            <h2>How to Apply</h2>
            <p>Send your resume, portfolio, and a brief note about yourself to <a href="mailto:sparktechdm@gmail.com">sparktechdm@gmail.com</a>, or reach out to us directly through our <a href="/contact">contact page</a>. Visit our <a href="/about">About Us page</a> to learn more about our company culture.</p>
          </section>
        </article>`
  },

  // 9. CONTACT US
  {
    url: '/contact',
    outputPath: 'contact/index.html',
    title: 'Contact SparkTech | Digital Marketing Office in Choolaimedu, Chennai',
    description: 'Get in touch with SparkTech Digital Marketing in Choolaimedu, Chennai. Request a free digital strategy consultation or call us at +91 8939892219.',
    keywords: 'contact sparktech, digital marketing company in choolaimedu, digital marketing company in chennai, seo consultation chennai',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://www.sparktechdm.com/#localbusiness",
          "name": "SparkTech Digital",
          "url": "https://www.sparktechdm.com/",
          "image": "https://www.sparktechdm.com/Logo.png",
          "telephone": "+91 8939892219",
          "email": "sparktechdm@gmail.com",
          "hasMap": "https://maps.app.goo.gl/4sYLYqWiS9KQRijP8",
          "parentOrganization": {
            "@id": "https://www.sparktechdm.com/#organization"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "C1, Honey tone Apartments, Shankarapuram 1st Street",
            "addressLocality": "Choolaimedu",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600094",
            "addressCountry": "IN"
          },
          "areaServed": [
            { "@type": "City", "name": "Chennai" },
            { "@type": "AdministrativeArea", "name": "Choolaimedu" }
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://www.sparktechdm.com/contact#webpage",
          "name": "Contact SparkTech | Digital Marketing Office in Choolaimedu, Chennai",
          "url": "https://www.sparktechdm.com/contact",
          "description": "Get in touch with SparkTech Digital Marketing in Choolaimedu, Chennai. Request a free digital strategy consultation.",
          "isPartOf": { "@id": "https://www.sparktechdm.com/#website" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
              { "@type": "ListItem", "position": 2, "name": "Contact Us" }
            ]
          }
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">GET IN TOUCH</p>
          <h1>Contact SparkTech Digital Marketing in Chennai</h1>
          <p class="lead">Ready to accelerate your online business growth? Contact our digital marketing specialists in Choolaimedu, Chennai to schedule a complimentary strategy session.</p>

          <section>
            <h2>Visit Our Choolaimedu Office</h2>
            <address>
              <strong>SparkTech Digital Marketing</strong><br />
              C1, Honey tone Apartments, Shankarapuram 1st Street,<br />
              Choolaimedu, Chennai, Tamil Nadu – 600094, India.<br />
              Phone: <a href="tel:+918939892219">+91 8939892219</a><br />
              Email: <a href="mailto:sparktechdm@gmail.com">sparktechdm@gmail.com</a>
            </address>
            <p>Locate us easily on <a href="https://maps.app.goo.gl/4sYLYqWiS9KQRijP8" target="_blank" rel="noopener noreferrer">Google Maps</a>.</p>
          </section>

          <section>
            <h2>Schedule a Free Digital Strategy Consultation</h2>
            <p>Whether you require a comprehensive <a href="/services/seo">SEO audit</a>, a modern <a href="/services/website-development">custom website redesign</a>, or targeted <a href="/services/social-media-marketing">social media ad campaigns</a>, our team is here to help you scale.</p>
          </section>
        </article>`
  },

  // 10. BLOGS HUB
  {
    url: '/blogs',
    outputPath: 'blogs/index.html',
    title: 'Digital Marketing Blogs & Insights | SparkTech Digital',
    description: 'Actionable insights, proven strategies, and industry guides on SEO, web development, Google Ads, and social media marketing from SparkTech Digital.',
    keywords: 'digital marketing blogs, seo tips chennai, web development insights, marketing strategy articles',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.sparktechdm.com/blogs#webpage",
          "name": "Digital Marketing Blogs & Insights | SparkTech Digital",
          "url": "https://www.sparktechdm.com/blogs",
          "description": "Actionable insights, proven strategies, and industry guides on SEO, web development, Google Ads, and social media marketing from SparkTech Digital.",
          "isPartOf": { "@id": "https://www.sparktechdm.com/#website" },
          "about": { "@id": "https://www.sparktechdm.com/#organization" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blogs" }
            ]
          }
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">INDUSTRY KNOWLEDGE & GUIDES</p>
          <h1>Digital Marketing Blogs & Strategic Insights</h1>
          <p class="lead">Explore practical guides, data-driven frameworks, and strategic insights written by our SEO and digital marketing practitioners in Chennai.</p>

          <section>
            <h2>Featured Articles & Guides</h2>
            ${blogArticles.map(b => `
            <article class="blog-card-summary">
              <h3><a href="/blogs/${b.slug}">${b.title}</a></h3>
              <p>${b.excerpt}</p>
              <p><strong>Topic:</strong> ${b.tags.join(', ')}</p>
            </article>`).join('\n')}
          </section>

          <section>
            <h2>Grow Your Business with SparkTech</h2>
            <p>Want us to implement these performance strategies for your brand? Explore our <a href="/services">services portfolio</a> or speak directly with our team via our <a href="/contact">contact page</a>.</p>
          </section>
        </article>`
  },

  // 404 NOT FOUND PAGE
  {
    url: '/404',
    outputPath: '404.html',
    title: '404: Page Not Found | SparkTech Digital',
    description: 'The page you are looking for does not exist. Return to the SparkTech Digital homepage.',
    keywords: '404, page not found, sparktech digital',
    is404: true,
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.sparktechdm.com/404#webpage",
          "name": "404: Page Not Found | SparkTech Digital",
          "url": "https://www.sparktechdm.com/404",
          "description": "The page you are looking for does not exist."
        }
      ]
    },
    mainHtml: `
        <div class="relative z-10 text-white overflow-x-clip min-h-[70vh] bg-cover bg-center bg-fixed bg-black flex flex-col items-center justify-center text-center px-4 py-24">
          <h1 class="text-6xl md:text-8xl font-bold mb-4 text-[#cc7722]">404</h1>
          <p class="text-xl md:text-2xl font-semibold mb-6 text-white">Page Not Found</p>
          <p class="text-gray-400 max-w-md mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <a href="/" class="inline-flex items-center px-6 py-3 bg-[#cc7722] hover:bg-[#b36319] text-white font-medium rounded-lg transition-colors">Back to Homepage</a>
        </div>`
  },

  // Content Creation (Lead Generation)
  {
    url: '/services/content-creation',
    outputPath: 'services/content-creation/index.html',
    title: 'B2B & B2C Lead Generation Services in Chennai | SparkTech',
    description: 'Capture and convert high-intent prospects with targeted lead generation funnels, optimized landing pages, and multi-channel acquisition campaigns.',
    keywords: 'lead generation chennai, b2b lead generation, acquisition funnels chennai',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://www.sparktechdm.com/services/content-creation#service",
          "name": "Lead Generation & Funnel Strategy Services",
          "url": "https://www.sparktechdm.com/services/content-creation",
          "serviceType": "Lead Generation",
          "description": "Capture and convert high-intent prospects with targeted lead generation funnels, optimized landing pages, and multi-channel acquisition campaigns.",
          "provider": { "@type": "Organization", "@id": "https://www.sparktechdm.com/#organization", "name": "SparkTech Digital", "url": "https://www.sparktechdm.com/" }
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">INBOUND ACQUISITION</p>
          <h1>Lead Generation Strategy & Funnels in Chennai</h1>
          <p class="lead">Turn web traffic into sales conversations with customized lead generation funnels, high-converting landing pages, and automated qualification systems.</p>
          <section>
            <h2>Proven Inbound Lead Generation</h2>
            <p>We build multi-channel acquisition campaigns combining paid ads, organic search, and conversion-optimized landing pages to deliver a steady stream of qualified prospects.</p>
            <p><a href="/contact">Schedule a lead generation strategy session</a> with our team.</p>
          </section>
        </article>`
  },

  // Video Editing (Google Ads & PPC)
  {
    url: '/services/video-editing',
    outputPath: 'services/video-editing/index.html',
    title: 'Google Ads & PPC Campaign Management in Chennai | SparkTech',
    description: 'Maximize your advertising ROI with high-converting Google Ads, PPC search campaigns, display ads, and creative ad assets managed by SparkTech.',
    keywords: 'google ads agency chennai, ppc campaign management chennai, ad creative chennai',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://www.sparktechdm.com/services/video-editing#service",
          "name": "Google Ads & PPC Campaign Management Services",
          "url": "https://www.sparktechdm.com/services/video-editing",
          "serviceType": "PPC Advertising",
          "description": "Maximize your advertising ROI with high-converting Google Ads, PPC search campaigns, display ads, and creative ad assets managed by SparkTech.",
          "provider": { "@type": "Organization", "@id": "https://www.sparktechdm.com/#organization", "name": "SparkTech Digital", "url": "https://www.sparktechdm.com/" }
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">HIGH-ROI PAID SEARCH</p>
          <h1>Ads Creative & PPC Campaign Management in Chennai</h1>
          <p class="lead">Stop wasting marketing spend. SparkTech creates, optimizes, and scales Google Ads campaigns that capture high-intent search queries with maximum return on investment.</p>
          <section>
            <h2>Strategic Paid Search & Video Advertising</h2>
            <p>From search text ads and display banners to YouTube video ad creative, our performance marketing specialists optimize every dollar for maximum conversions.</p>
            <p><a href="/contact">Get a free Google Ads audit</a> today.</p>
          </section>
        </article>`
  },

  // Graphics Designing
  {
    url: '/services/graphics-designing',
    outputPath: 'services/graphics-designing/index.html',
    title: 'Graphic Design & Creative Brand Identity in Chennai | SparkTech',
    description: 'Elevate your brand presence with stunning graphic design, corporate branding, social media creatives, and marketing collateral by SparkTech.',
    keywords: 'graphic design agency chennai, branding design chennai, creative visual identity',
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://www.sparktechdm.com/services/graphics-designing#service",
          "name": "Graphic Design & Branding Services",
          "url": "https://www.sparktechdm.com/services/graphics-designing",
          "serviceType": "Graphic Design",
          "description": "Elevate your brand presence with stunning graphic design, corporate branding, social media creatives, and marketing collateral by SparkTech.",
          "provider": { "@type": "Organization", "@id": "https://www.sparktechdm.com/#organization", "name": "SparkTech Digital", "url": "https://www.sparktechdm.com/" }
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">CREATIVE VISUAL IDENTITY</p>
          <h1>Graphic Designing & Brand Identity in Chennai</h1>
          <p class="lead">Distinguish your business with cohesive, high-impact graphic design assets across digital and print touchpoints.</p>
          <section>
            <h2>Design That Inspires & Converts</h2>
            <p>Our creative team designs logos, social media visual systems, marketing brochures, and presentation decks that communicate authority and trust.</p>
            <p><a href="/contact">Discuss your creative design needs</a> with our team.</p>
          </section>
        </article>`
  }
];

// Add the 6 individual blog posts to page definitions
blogArticles.forEach(b => {
  pages.push({
    url: `/blogs/${b.slug}`,
    outputPath: `blogs/${b.slug}/index.html`,
    title: `${b.title} | SparkTech Digital`,
    description: b.excerpt,
    keywords: b.tags.join(', '),
    ogImage: `https://www.sparktechdm.com${b.image}`,
    schemaJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "@id": `https://www.sparktechdm.com/blogs/${b.slug}#article`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.sparktechdm.com/blogs/${b.slug}`
          },
          "headline": b.title,
          "description": b.excerpt,
          "image": [`https://www.sparktechdm.com${b.image}`],
          "author": {
            "@type": "Organization",
            "@id": "https://www.sparktechdm.com/#organization",
            "name": "SparkTech Digital",
            "url": "https://www.sparktechdm.com/"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.sparktechdm.com/#organization",
            "name": "SparkTech Digital",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.sparktechdm.com/Logo.png"
            }
          },
          "datePublished": b.datePublished,
          "dateModified": b.dateModified
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.sparktechdm.com/blogs" },
            { "@type": "ListItem", "position": 3, "name": b.title }
          ]
        }
      ]
    },
    mainHtml: `
        <article class="content-container">
          <p class="eyebrow">${b.subtitle || 'DIGITAL MARKETING INSIGHT'}</p>
          <h1>${b.title}</h1>
          <p class="meta-info">Published by <strong>SparkTech Digital</strong> | Updated ${b.dateModified.split('T')[0]}</p>
          <p class="lead">${b.excerpt}</p>
          <div>
            <img src="${b.image}" alt="${b.title}" width="700" height="350" fetchpriority="high" />
          </div>

          ${b.content ? b.content.map(p => `<p>${p}</p>`).join('\n') : ''}

          ${b.sections ? b.sections.map(sec => `
          <section>
            <h2>${sec.heading}</h2>
            ${sec.paragraphs.map(p => `<p>${p}</p>`).join('\n')}
          </section>`).join('\n') : ''}

          <section>
            <h2>Accelerate Your Growth with SparkTech Digital</h2>
            <p>Ready to implement proven growth strategies for your business in Chennai? Learn more about our <a href="/services/seo">SEO services</a>, <a href="/services/website-development">website development solutions</a>, or <a href="/contact">contact our team</a> for a free consultation.</p>
          </section>
        </article>`
  });
});

console.log(`\n=============================================================`);
console.log(`MULTI-PAGE SSG GENERATION: ${pages.length} SITEMAP URLS`);
console.log(`=============================================================`);

let generatedCount = 0;

pages.forEach(p => {
  if (p.skipGeneration) {
    console.log(`[SKIP] ${p.url} (Preserving existing dist/index.html)`);
    return;
  }

  const outFilePath = path.join(distDir, p.outputPath);
  const outDir = path.dirname(outFilePath);
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const pageHtml = buildPageHtml(p);
  fs.writeFileSync(outFilePath, pageHtml, 'utf8');

  // Also write clean-url HTML file (e.g. dist/about.html or dist/services/seo.html)
  if (p.url !== '/') {
    const cleanHtmlPath = path.join(distDir, `${p.url.replace(/^\//, '')}.html`);
    const cleanDir = path.dirname(cleanHtmlPath);
    if (!fs.existsSync(cleanDir)) {
      fs.mkdirSync(cleanDir, { recursive: true });
    }
    fs.writeFileSync(cleanHtmlPath, pageHtml, 'utf8');
  }

  generatedCount++;
  console.log(`[GENERATED] ${p.url} -> dist/${p.outputPath} & dist/${p.url.replace(/^\//, '')}.html (${(pageHtml.length / 1024).toFixed(1)} KB)`);
});

console.log(`\nSuccessfully generated ${generatedCount} unique static HTML files in dist/!`);
