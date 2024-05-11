import { HeadingProps } from "../../types/types";

const Heading: React.FC<HeadingProps> = ({ title, className, level }) => {
  const font = "font-cairo";
  const color = "text-zinc-700";
  switch (level) {
    case "h1":
      return (
        <h1
          className={`${font} ${color} text-8xl pb-8 tracking-wider uppercase ${className}`}
        >
          {title}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${font} ${color} text-8xl pb-8 tracking-wider uppercase  ${className}`}
        >
          {title}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${font} ${color} text-4xl font-extralight uppercase tracking-wide pb-4 ${className}`}
        >
          {title}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`${font} ${color} text-3xl font-extralight uppercase tracking-wide py-4  ${className}`}
        >
          {title}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`${font} ${color} text-2xl font-extralight uppercase ${className}`}
        >
          {title}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`${font} ${color} text-xl font-extralight uppercase ${className}`}
        >
          {title}
        </h6>
      );
    default:
      return null;
  }
};

export default Heading;
