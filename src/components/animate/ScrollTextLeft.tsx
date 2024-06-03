interface ScrollScrollTextLeftProps {
  children: React.ReactNode;
  className?: string;
}

import { useRef } from "react";
import { useInView } from "framer-motion";

const ScrollTextLeft: React.FC<ScrollScrollTextLeftProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <article
      className={`${className} ${
        inView ? "opacity-100" : "opacity-0"
      } transition-all duration-1000 ease-in-out delay-500 text-right`}
      ref={ref}
      style={{
        transform: inView ? "none" : "translateX(-200px)",
      }}
    >
      {children}
    </article>
  );
};

export default ScrollTextLeft;
