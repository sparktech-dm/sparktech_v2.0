import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-CNYK1BCL7Y";

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      if (!window.gtag) {
        window.gtag = function () {
          window.dataLayer.push(arguments);
        };
      }
      window.gtag("config", GA_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}