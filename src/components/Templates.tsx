import Heading from "./blocs/Heading";
import { Buttonext } from "./blocs/Buttons";
import { NavLink } from "react-router-dom";
import { TemplatesProps } from "../types/types";

import ScrollTextLeft from "./animate/ScrollTextLeft";
import ScrollHeading from "./animate/ScollHeading";
import ArrowRigths from "./animate/ArrowRigths";

import { motion } from "framer-motion";
import { useState } from "react";

const Templates: React.FC<TemplatesProps> = ({
  title,
  paragraphe,
  ptech,
  link,
  figure,
  role,
  next,

  source,
}) => {
  const styleP = "text-xl tracking-widest font-sintony";
  const styleAnsword = styleP + " text-zinc-400";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <article className="px-3.5 md:px-0 flex flex-col md:grid md:grid-cols-2 md:gap-x-8 relative py-24 md:w-4/5 mx-auto gap-y-24 md:gap-y-24 ">
        <section className="relative space-y-12">
          <motion.article
            className="sticky top-40 space-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Heading title={title} level="h2" className="lg:w-1/2" />
            <ScrollTextLeft className={styleP}>{paragraphe}</ScrollTextLeft>
            <article className="grid grid-cols-2 gap-y-8 w-4/5 ">
              <ScrollHeading level="h6" title="role" />

              <p className={styleAnsword}>{role}</p>

              <ScrollHeading level="h6" className="" title="stack" />

              <p className={styleAnsword}>{ptech}</p>

              {link && (
                <>
                  <ScrollHeading level="h6" className="" title="website" />

                  <Buttonext
                    link={link}
                    title={`View live ${title}`}
                    content="View live website"
                    className={`${styleAnsword}`}
                  />
                </>
              )}

              {source && (
                <>
                  <ScrollHeading level="h6" className="" title="Git" />

                  <Buttonext
                    link={source}
                    title={`${title} source code`}
                    content="View source code"
                    className={`${styleAnsword}`}
                  />
                </>
              )}
            </article>
          </motion.article>
        </section>
        {figure && (
          <section className="grid gap-x-8 gap-y-16">{figure}</section>
        )}
        <nav className="md:col-span-2 h-20 grid grid-cols-2 md:gap-x-8 items-center ">
          <NavLink
            to={"/projects"}
            className={
              "flex h-20 items-center bg-teal-200 hover:bg-teal-300 transition-all duration-300 ease-in-out"
            }
          >
            {
              <>
                <Heading
                  level="h5"
                  title="all projects"
                  className="flex text-zinc-700 ps-4"
                />
              </>
            }
          </NavLink>
          <NavLink
            to={next}
            className={
              "flex flex-col md:flex-row h-20 items-center justify-center bg-fuchsia-600 hover:bg-fuchsia-500 transition-all duration-300 ease-in-out"
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {
              <>
                <Heading
                  level="h5"
                  title="Next Project"
                  className="flex text-zinc-200 ps-4  "
                />
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: isHovered ? 40 : 20 }}
                  transition={{ duration: 0.4 }}
                  className="hidden md:flex items-center"
                >
                  <ArrowRigths />
                </motion.div>
              </>
            }
          </NavLink>
        </nav>
      </article>
    </>
  );
};

export default Templates;
