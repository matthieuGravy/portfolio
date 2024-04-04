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

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

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
    let moveBy = directionFactor.current * baseVelocity * (delta / 3000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="text-center overflow-hidden m-0 bg-stone-900">
      <motion.div className=" w-max" style={{ x }}>
        <span className="inline text-xl font-extralight uppercase tracking-wide">
          {children}

          {children}

          {children}

          {children}

          {children}

          {children}

          {children}
        </span>
      </motion.div>
    </div>
  );
}

function ParallaxTextor() {
  const phrase = "available to work • ";
  const text = phrase.repeat(4);

  return (
    <section className="transition-all">
      <ParallaxText baseVelocity={-5}>{text}</ParallaxText>
      <ParallaxText baseVelocity={5}>{text}</ParallaxText>
    </section>
  );
}

export default ParallaxTextor;
