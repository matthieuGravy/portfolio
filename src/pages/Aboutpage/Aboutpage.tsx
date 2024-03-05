import { motion, useScroll, useSpring } from "framer-motion";

import Photo from "../../components/blocs/Photo";
import Scroller from "../../components/blocs/Scroller";
import Resume from "../../components/fr/Resume";

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

  return (
    <>
      <motion.div
        className="h-1 w-full fixed top-14 left-0 bg-fuchsia-700 opacity-75 z-50"
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
        <section className="col-span-1 py-24 ">
          <Photo />
        </section>
        <hr className="col-span-3" />
        <section className="col-span-3 overflow-hidden flex flex-row group ">
          <ParallaxTextor />
        </section>

        <hr className="col-span-3" />
        <section className="col-span-3 overflow-hidden flex flex-row group">
          <Scroller />
        </section>
        <section className="col-span-3 grid grid-cols-1 gap-y-40 py-16 overflow-hidden">
          <Resume />
        </section>
      </section>
    </>
  );
};

export default Aboutpage;
