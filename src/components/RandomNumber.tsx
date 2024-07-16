import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

function RandomNumber({ finalNumber }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 1 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    if (isInView) {
      const animation = animate(count, finalNumber, {
        duration: 2,
        ease: "easeOut",
      });

      return animation.stop;
    }
  }, [count, finalNumber, isInView]);

  return (
    <motion.h4 ref={ref} className="text-5xl font-cairo text-fuchsia-500">
      {rounded}
    </motion.h4>
  );
}

export default RandomNumber;
