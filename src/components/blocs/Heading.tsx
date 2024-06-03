import { HeadingProps } from "../../types/types";

const Heading: React.FC<HeadingProps> = ({ title, className, level }) => {
  const fontCairo = "font-cairo";
  const colorRubik = "text-zinc-700";
  const fontRubik = "font-rubik ";
  const colorCairo = "text-fuchsia-600";
  switch (level) {
    case "h1":
      return (
        <h1
          className={`${fontRubik} ${colorRubik} text-5xl xl:text-8xl tracking-wider font-regular uppercase ${className}`}
        >
          {title}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${fontRubik} ${colorRubik} text-5xl xl:text-8xl tracking-wider font-regular  uppercase   ${className}`}
        >
          {title}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${fontRubik} ${colorRubik} text-4xl xl:text-4xl  uppercase tracking-wide  ${className}`}
        >
          {title}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`${fontRubik} ${colorCairo} text-4xl font-regular uppercase tracking-wide   ${className}`}
        >
          {title}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`${fontCairo} ${colorRubik} text-2xl xl:text-4xl font-extralight uppercase tracking-wide  ${className}`}
        >
          {title}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`${fontCairo} ${colorRubik} text-xl font-extralight uppercase ${className}`}
        >
          {title}
        </h6>
      );
    default:
      return null;
  }
};

export default Heading;
