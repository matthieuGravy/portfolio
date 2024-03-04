import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import { useRef } from "react";

import Photo from "../../components/blocs/Photo";
import Scroller from "../../components/blocs/Scroller";
import Resume from "../../components/fr/Resume";
import { PorjectCard } from "../../components/blocs/Project";
import Heading from "../../components/blocs/Heading";
import Article from "../../components/blocs/Article";
import Socials from "../../components/blocs/Socials";
import Accroche from "../../components/fr/Accroche";

import ParallaxTextor from "../../components/blocs/ParallaxTextor";

const Aboutpage = () => {
  const titre = <>Matthieu Gravy</>;
  const { scrollYProgress: scrollYProgress1 } = useScroll();
  const scaleX = useSpring(scrollYProgress1, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const ref = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress2, 300);

  return (
    <>
      <motion.div
        className="h-5 w-full fixed top-10 left-0 bg-fuchsia-800 z-50"
        style={{ scaleX, originX: 0 }}
      />
      <section className="grid grid-cols-3 gap-y-16">
        <section className="col-span-2 py-24">
          <Article
            className="justify-between w-full flex-row-reverse"
            children1={
              <Heading
                title={titre}
                level="h1"
                className="text-7xl font-extralight uppercase tracking-wide"
              />
            }
            children2={
              <>
                <Accroche />
                <Socials />
              </>
            }
          />
        </section>
        <section className="col-span-1 py-24">
          <Photo />
        </section>

        <hr className="col-span-3" />
        <section className="col-span-3 overflow-hidden flex flex-row group">
          <Scroller />
        </section>
        <section className="col-span-3 grid grid-cols-1 gap-y-40 py-16 overflow-hidden">
          <Resume />
        </section>
        <section className="col-span-3 overflow-hidden flex flex-row group bg-blue-200">
          <ParallaxTextor />
        </section>
        <section className="col-span-3 grid grid-cols-1 gap-y-40 py-16 overflow-hidden">
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
      </section>
    </>
  );
};

export default Aboutpage;
