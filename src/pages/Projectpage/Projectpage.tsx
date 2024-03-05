import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

import { useRef } from "react";

import { PorjectCard } from "../../components/blocs/Project";

const Projectpage = () => {
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  // Premier conteneur
  const ref1 = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({ target: ref1 });
  const y1 = useParallax(scrollYProgress1, 1000);

  // Deuxième conteneur
  const ref2 = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref2 });
  const y2 = useParallax(scrollYProgress2, 400);

  // Troisième conteneur
  const ref3 = useRef(null);
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: ref3 });
  const y3 = useParallax(scrollYProgress3, 0);

  return (
    <section className="grid grid-rows-4 gap-y-16 py-24 ">
      <PorjectCard
        id={
          <h3 className="text-8xl font-extralight uppercase tracking-wide top-0 left-0 z-50 bg-fuchsia-800">
            1
          </h3>
        }
        src="https://via.placeholder.com/150"
        name="projet 1"
      />
      <PorjectCard
        id={
          <h3 className="text-8xl font-extralight uppercase tracking-wide top-0 left-0 z-50 bg-fuchsia-800">
            1
          </h3>
        }
        src="https://via.placeholder.com/150"
        name="projet 1"
      />
      <PorjectCard
        id={
          <h3 className="text-8xl font-extralight uppercase tracking-wide top-0 left-0 z-50 bg-fuchsia-800">
            1
          </h3>
        }
        src="https://via.placeholder.com/150"
        name="projet 1"
      />
      <PorjectCard
        id={
          <h3 className="text-8xl font-extralight uppercase tracking-wide top-0 left-0 z-50 bg-fuchsia-800">
            1
          </h3>
        }
        src="https://via.placeholder.com/150"
        name="projet 1"
      />
    </section>
  );
};

export default Projectpage;
