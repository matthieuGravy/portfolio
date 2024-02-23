import Photo from "../../components/blocs/Photo";
import Scroller from "../../components/blocs/Scroller";
import Resume from "../../components/fr/Resume";
import { PorjectCard } from "../../components/blocs/Project";
import Heading from "../../components/blocs/Heading";
import Article from "../../components/blocs/Article";
import Paragraphe from "../../components/blocs/Paragraphe";
import { motion, useScroll, useSpring } from "framer-motion";

const Aboutpage = () => {
  const titre = <>Matthieu Gravy</>;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
              <Paragraphe
                className="tracking-wider	pe-24"
                children={<Resume />}
              />
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
        <section className="col-span-3 grid grid-cols-1 gap-y-16 py-16">
          <PorjectCard
            id="1"
            src="https://via.placeholder.com/150"
            name="projet 1"
          />
          <PorjectCard
            id="2"
            src="https://via.placeholder.com/150"
            name="projet 2"
          />
          <PorjectCard
            id="3"
            src="https://via.placeholder.com/150"
            name="projet 3"
          />
          <PorjectCard
            id="4"
            src="https://via.placeholder.com/150"
            name="projet 4"
          />
        </section>
      </section>
    </>
  );
};

export default Aboutpage;
