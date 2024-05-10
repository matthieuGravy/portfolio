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
import { ParallaxProps } from "../types/types";

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
    <article className="text-center overflow-hidden m-0 bg-yellow-200 text-zinc-500 py-4">
      <motion.section className=" w-max" style={{ x }}>
        <span className="inline text-xl font-extralight uppercase tracking-wide text-6xl">
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

function ParallaxTextor({ velocity }) {
  const phrase = "available to work • ";
  const text = phrase.repeat(4);

  return (
    <section className="transition-all flex flex-col gap-y-8 ">
      <ParallaxText baseVelocity={velocity}>{text}</ParallaxText>
    </section>
  );
}

export default ParallaxTextor;
