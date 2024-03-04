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

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 8], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(90, -90, v)}%`);

  const directionFactor = useRef<number>(2);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1200);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="text-center overflow-hidden flex flex-nowrap m-0">
      <motion.div className=" w-[120vw]" style={{ x }}>
        <span className="inline">{children} </span>
      </motion.div>
    </div>
  );
}

export default function ParallaxTextor() {
  const text =
    "JAVASCRIPT • TYPESCRIT • REACT • REDUX • VUE 3 • VITE • BOOTSRAP • TAILWINDCSS • DAISY UI • FRAMER-MOTION • GSAP • NODEJS • EXPRESS • POSTMAN • INSOMNIA • MONGOOSE • SEQUELIZE • BASH • PHP • CHARTJS • GIT • GITHUB • GITLAB • JIRA • TRELLO • NPM • PNPM • UBUNTU ";
  return (
    <section className="transition-all">
      <ParallaxText baseVelocity={-15}>{text}</ParallaxText>
      <ParallaxText baseVelocity={15}>{text}</ParallaxText>
    </section>
  );
}
