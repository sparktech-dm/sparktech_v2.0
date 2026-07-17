import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-XXXXXXXXXX"; // Replace with your Measurement ID

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", GA_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}