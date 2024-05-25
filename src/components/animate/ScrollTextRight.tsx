interface ScrollTextRightProps {
  children: React.ReactNode;
  className?: string;
}

import { useRef } from "react";
import { useInView } from "framer-motion";

const ScrollTextRight: React.FC<ScrollTextRightProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <article
      className={`${className} ${
        inView ? "opacity-100" : "opacity-0"
      } transition-all duration-1000 ease-in-out delay-500`}
      ref={ref}
      style={{
        transform: inView ? "none" : "translateX(200px)",
      }}
    >
      {children}
    </article>
  );
};

export default ScrollTextRight;
