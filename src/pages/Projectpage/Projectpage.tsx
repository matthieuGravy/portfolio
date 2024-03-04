import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

import { useRef } from "react";

import { PorjectCard } from "../../components/blocs/Project";

const Projectpage = () => {
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const ref = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress2, 300);

  return (
    <section className="grid gap-y-16">
      <PorjectCard
        ref={ref}
        id={
          <motion.h3
            style={{ y, originY: 0 }}
            className="text-8xl font-extralight uppercase tracking-wide top-0 left-0 z-50 bg-fuchsia-800"
          >
            1
          </motion.h3>
        }
        src="https://via.placeholder.com/150"
        name="projet 1"
      />
      <PorjectCard
        ref={ref}
        id={
          <motion.h3
            style={{ y }}
            className="text-8xl font-extralight uppercase tracking-wide top-0 left-0 z-50 bg-fuchsia-800"
          >
            2
          </motion.h3>
        }
        src="https://via.placeholder.com/150"
        name={<>project</>}
      />
      <PorjectCard
        ref={ref}
        id={
          <motion.h3
            style={{ y }}
            className="text-8xl font-extralight uppercase tracking-wide top-0 left-0 z-50 bg-fuchsia-800"
          >
            3
          </motion.h3>
        }
        src="https://via.placeholder.com/150"
        name="projet 3"
      />
      <PorjectCard
        ref={ref}
        id={
          <motion.h3
            style={{ y }}
            className="text-8xl font-extralight uppercase tracking-wide top-0 left-0 z-50 bg-fuchsia-800"
          ></motion.h3>
        }
        src="https://via.placeholder.com/150"
        name="projet 4"
      />
    </section>
  );
};

export default Projectpage;
