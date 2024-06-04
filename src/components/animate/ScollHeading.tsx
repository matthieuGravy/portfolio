import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Heading from "../blocs/Heading";
import { ScrollHeadingProps } from "../../types/types";

const ScrollHeading: React.FC<ScrollHeadingProps> = ({
  className,
  title = "titre",
  level,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  const titleAnimation = title.split("").map((char, index) => (
    <motion.span
      ref={ref}
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {char}
    </motion.span>
  ));
  if (!["h1", "h2", "h3", "h4", "h5", "h6"].includes(level)) {
    throw new Error(`Invalid level: ${level}`);
  }
  return (
    <article
      className={className}
      style={{
        transform: inView ? "none" : "",
        opacity: inView ? 1 : 0,
        transition: "",
      }}
    >
      <Heading title={<>{titleAnimation}</>} level={level} className="" />{" "}
    </article>
  );
};

export default ScrollHeading;
