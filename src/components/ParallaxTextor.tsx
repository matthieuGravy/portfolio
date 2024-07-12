import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { ParallaxProps, ParallaxTextorProps } from "../types/types";

function ParallaxText({ children, baseVelocity = 10 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 200], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(2);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 8000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <article className="text-center overflow-hidden m-0  text-fuchsia-500 py-4">
      <motion.section className=" w-max" style={{ x }}>
        <span className="uppercase tracking-wide text-4xl font-cairo">
          {children}

          {children}

          {children}

          {children}

          {children}

          {children}

          {children}
        </span>
      </motion.section>
    </article>
  );
}

function ParallaxTextor({ velocity }: ParallaxTextorProps) {
  const phrase = "available to work • Brussels • Belgium • Europe • Remote • ";
  const text = phrase.repeat(4);

  return <ParallaxText baseVelocity={velocity}>{text}</ParallaxText>;
}

export default ParallaxTextor;
