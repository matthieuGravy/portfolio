import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Matthieu Gravy : Front-End Developer",
  description = "Web developer with a rich and diverse background. Expertise in problem-solving, adaptability, and innovation. Varied experience bringing a unique perspective to web development. Passionate about continuous learning and constant improvement.",
  keywords = "JS, TS, JavaScript, TypeScript, Bruxelles, Brussels, BXL, bxl, React, dev, developer, front-end, Gravy, gravy, Matthieu, matthieu",
  image = "https://itsgravy.dev/GRAVY.svg",
  url = "https://itsgravy.dev/",
}) => {
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Others */}
      <meta name="author" content="Matthieu Gravy" />
      <meta name="theme-color" content="dark" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
