import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function CanonicalTag() {
  const location = useLocation();
  const basePath = location.pathname;
  
  // Enforce trailing slash for home, no trailing slash for subpages
  const formattedPath = basePath === '/' 
    ? '/' 
    : basePath.replace(/\/$/, '');
    
  const canonicalUrl = `https://www.sparktechdm.com${formattedPath}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
