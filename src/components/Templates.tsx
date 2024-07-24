import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, Suspense } from "react";

import { TemplatesProps } from "../types/types";

import ScrollTextLeft from "./animate/ScrollTextLeft";
import ScrollHeading from "./animate/ScrollHeading";
import ArrowRigths from "./animate/ArrowRigths";
import Heading from "./blocs/Heading";
import Main from "./Main";
import { Buttonext, ButtonTwo } from "./blocs/Buttons";
import Containers from "./Containers";
import Loadingimage from "./Loadingimage";
import { Figure } from "./blocs/Project.tsx";

const Templates: React.FC<TemplatesProps> = ({
  title,
  paragraphe,
  ptech,
  link,
  src,
  role,
  next,
  alt,

  source,
}) => {
  const styleP = "text-xl tracking-widest font-sintony text-zinc-500";
  const styleAnsword = styleP;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Main className="pt-12 pb-16">
        <Containers
          type="section-bento"
          className="flex flex-col xl:grid xl:grid-cols-2 xl:auto-rows-auto gap-y-16 gap-x-8"
        >
          <Containers
            type="section-basic"
            className="px-3.5 md:px-8 py-12 space-y-8"
          >
            <Heading level="h4" title={title} />
            <ScrollTextLeft className={`md:col-span-2 ${styleP}`}>
              {paragraphe}
            </ScrollTextLeft>
          </Containers>
          <Containers
            type="section-bento-bg"
            className="px-3.5 md:px-8 md:py-12"
          >
            <article className="grid grid-cols-2 self-center gap-y-8 ">
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
                    className={`text-fuchsia-800 transition-all duration-500 ${styleAnsword}`}
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
                    className={`text-fuchsia-800 transition-all duration-500 ${styleAnsword}`}
                  />
                </>
              )}
            </article>
          </Containers>
          <Containers
            type="section-bento-bg"
            className="flex items-center justify-center"
          >
            {src && (
              <section className="">
                <Suspense fallback={<Loadingimage />}>
                  <Figure src={src} alt={alt} />
                </Suspense>
              </section>
            )}
          </Containers>
          <Containers type="section-bento" className="">
            <nav className="flex flex-col items-center gap-y-8">
              <ButtonTwo
                content="All projects"
                to="/projects"
                className="rounded-xl px-4"
              />
              <NavLink
                to={next}
                className={
                  "m-auto w-72 flex justify-center bg-fuchsia-500 text-zinc-900 transition-all duration-300 ease-in-out text-2xl font-sintony uppercase rounded-xl"
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {
                  <>
                    <span className="flex gap-x-2 flex-col md:flex-row items-center px-4 py-2">
                      Next Project
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: isHovered ? 20 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="hidden md:flex items-center justify-start"
                      >
                        <ArrowRigths />
                      </motion.div>
                    </span>
                  </>
                }
              </NavLink>
            </nav>
          </Containers>
        </Containers>
      </Main>
    </>
  );
};

export default Templates;
