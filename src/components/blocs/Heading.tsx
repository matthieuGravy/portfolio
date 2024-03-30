interface HeadingProps {
  title?: string | JSX.Element;
  className?: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({ title, className, level }) => {
  switch (level) {
    case "h1":
      return (
        <h1
          className={`md:text-7xl text-5xl font-extralight uppercase tracking-wide pb-8 ${className}`}
        >
          {title}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`md:text-6xl text-3xl font-extralight uppercase tracking-wider ${className}`}
        >
          {title}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`md:text-4xl text-2xl font-extralight uppercase tracking-wide pb-4 ${className}`}
        >
          {title}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`text-xl font-extralight uppercase tracking-wide py-4  ${className}`}
        >
          {title}
        </h4>
      );
    case "h5":
      return (
        <h5 className={`font-extralight uppercase ${className}`}>{title}</h5>
      );
    case "h6":
      return (
        <h6 className={`font-extralight uppercase ${className}`}>{title}</h6>
      );
    default:
      return null;
  }
};

export default Heading;
