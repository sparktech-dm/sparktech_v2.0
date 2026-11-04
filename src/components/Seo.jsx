// src/components/Seo.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_IMAGE = "https://www.sparktechdm.com/Logo.png";
const SITE_NAME = "SparkTech Digital Marketing";

const Seo = ({
  title,
  description,
  keywords,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  canonicalUrl,
  twitterCard = "summary_large_image",
  children,
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#1b365d" />

      {/* Open Graph / Facebook */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {children}
    </Helmet>
  );
};

export default Seo;
