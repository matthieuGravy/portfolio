import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";

import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import ScrollHeading from "../../../../components/animate/ScrollHeading";
import Main from "../../../../components/Main";

import {
  learnings,
  professionals,
  shared,
  content,
} from "../../../../data/projets";

const Projectpage = () => {
  const styleP = "text-2xl text-zinc-400 tracking-wide font-sintony";
  const styleContainer =
    "grid md:grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-8 md:px-8 py-12";
  const styleHeader = "py-12 px-8";
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <>
      <Main className="flex flex-col gap-y-12 pt-12 pb-16">
        <Containers
          type="section-basic-bg"
          className="flex flex-col overflow-hidden"
        >
          <header className="py-12 px-8">
            <Heading title={content.heading} level="h2" className="" />
          </header>
          <section className="py-12 md:px-8 relative">
            <article className="space-y-8 pb-24">
              <ul className={`space-y-6 px-3.5 md:px-0 `}>
                {content.description.map((desc, index) => (
                  <motion.div
                    key={index}
                    style={{
                      translateY: useTransform(
                        scrollYProgress,
                        [0, 1],
                        [200 + index * 25, -200 - index * 25]
                      ),
                      opacity: useTransform(
                        scrollYProgress,
                        [0, 0.5, 1],
                        [0.3, 1, 0.3]
                      ),
                    }}
                  >
                    <li className={`${styleP}`}>{desc}</li>
                  </motion.div>
                ))}
              </ul>
            </article>
          </section>
        </Containers>

        <Containers type="section-large">
          <ScrollHeading
            level="h4"
            title={content.shared.title}
            className={styleHeader}
          />
          <article className={`${styleContainer}`}>
            {shared.map((project) => (
              <>
                <figure className="flex flex-col justify-between rounded-xl">
                  <NavLink to={`shared/${project.id}`}>
                    <img src={project.src} alt={project.name} />
                  </NavLink>
                  <NavLink
                    to={`shared/${project.id}`}
                    className="flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide text-zinc-400"
                  >
                    {project.name}
                  </NavLink>
                </figure>
              </>
            ))}
          </article>
        </Containers>

        <Containers type="section-large">
          <ScrollHeading
            level="h4"
            title={content.learnings.title}
            className={styleHeader}
          />
          <article className={`${styleContainer}`}>
            {learnings.map((project) => (
              <>
                <figure className="flex flex-col justify-between rounded-xl">
                  <NavLink to={`learning/${project.id}`}>
                    <img src={project.src} alt={project.name} />
                  </NavLink>
                  <NavLink
                    to={`learning/${project.id}`}
                    className="flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide text-zinc-400"
                  >
                    {project.name}
                  </NavLink>
                </figure>
              </>
            ))}
          </article>
        </Containers>
        <Containers type="section-large">
          <ScrollHeading
            level="h4"
            title={content.professionals.title}
            className={styleHeader}
          />
          <article className={`${styleContainer}`}>
            {professionals.map((project) => (
              <>
                <figure className="flex flex-col justify-between rounded-xl">
                  <NavLink to={`professional/${project.id}`}>
                    <img src={project.src} alt={project.name} />
                  </NavLink>
                  <NavLink
                    to={`professional/${project.id}`}
                    className="flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide text-zinc-400"
                  >
                    {project.name}
                  </NavLink>
                </figure>
              </>
            ))}
          </article>
        </Containers>
      </Main>
    </>
  );
};

export default Projectpage;
