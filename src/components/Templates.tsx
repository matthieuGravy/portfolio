import Heading from "./blocs/Heading";
import { Buttonext } from "./blocs/Buttons";
import { NavLink } from "react-router-dom";
import { TemplatesProps } from "../types/types";

import ScrollTextLeft from "./animate/ScrollTextLeft";
import ScrollTextRight from "./animate/ScrollTextRight";
import ScrollHeading from "./animate/ScollHeading";
import ArrowRigths from "./animate/ArrowRigths";

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
  return (
    <>
      <article className="px-3.5 flex flex-col md:grid md:grid-cols-2 md:gap-x-8 relative py-24 md:w-4/5 mx-auto gap-y-24 md:gap-y-24 overflow-hidden">
        <section className="">
          <article className="top-40 sticky space-y-12">
            <Heading title={title} level="h2" className="lg:w-1/2" />
            <ScrollTextLeft className={styleP}>{paragraphe}</ScrollTextLeft>
            <article className="grid grid-cols-2 gap-y-8 w-4/5 ">
              <ScrollHeading level="h6" title="role" />

              <ScrollTextRight>
                <p className={styleAnsword}>{role}</p>
              </ScrollTextRight>

              <ScrollHeading level="h6" className="" title="stack" />
              <ScrollTextRight>
                <p className={styleAnsword}>{ptech}</p>
              </ScrollTextRight>

              {link && (
                <>
                  <ScrollHeading level="h6" className="" title="website" />
                  <ScrollTextRight>
                    <Buttonext
                      link={link}
                      title={`View live ${title}`}
                      content="View live website"
                      className={`${styleAnsword}`}
                    />
                  </ScrollTextRight>
                </>
              )}

              {source && (
                <>
                  <ScrollHeading level="h6" className="" title="Git" />
                  <ScrollTextRight>
                    <Buttonext
                      link={source}
                      title={`${title} source code`}
                      content="View source code"
                      className={`${styleAnsword}`}
                    />
                  </ScrollTextRight>
                </>
              )}
            </article>
          </article>
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
                <ArrowRigths />
              </>
            }
          </NavLink>

          <NavLink
            to={next}
            className={
              "flex h-20 items-center bg-fuchsia-600 hover:opacity-80 transition-all duration-300 ease-in-out"
            }
          >
            {
              <>
                <Heading
                  level="h5"
                  title="Next Project"
                  className="flex text-zinc-200 ps-4"
                />
              </>
            }
          </NavLink>
        </nav>
      </article>
    </>
  );
};

export default Templates;
