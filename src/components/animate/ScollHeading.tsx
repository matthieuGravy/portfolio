interface ScrollHeadingProps {
  className?: string;
  title?: string;
  level: string;
}
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Heading from "../blocs/Heading";

const ScrollHeading: React.FC<ScrollHeadingProps> = ({
  className,
  title = "titre", // use title from props, default to "titre" if undefined
  level,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  const titleAnimation = title.split("").map((char, index) => (
    <motion.span
      ref={ref}
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} // use inView to control opacity
      transition={{ delay: index * 0.1 }}
    >
      {char}
    </motion.span>
  ));

  return (
    <article
      className={className}
      style={{
        transform: inView ? "none" : "",
        opacity: inView ? 1 : 0,
        transition: "",
      }}
    >
      <Heading title={titleAnimation} level={level} className="" />
    </article>
  );
};

export default ScrollHeading;
