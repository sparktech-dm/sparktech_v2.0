// components/Seo.jsx
import { Helmet } from "react-helmet";

const Seo = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="theme-color" content="#380B58" />
  </Helmet>
);

export default Seo;
