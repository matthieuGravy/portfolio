import Heading from "./blocs/Heading";
import { Buttonext } from "./blocs/Buttons";
import { NavLink } from "react-router-dom";
import { TemplatesProps } from "../types/types";

import ScrollTextLeft from "./animate/ScrollTextLeft";
import ScrollTextRight from "./animate/ScrollTextRight";
import ScrollHeading from "./animate/ScollHeading";

const Templates: React.FC<TemplatesProps> = ({
  title,
  paragraphe,
  ptech,
  link,
  figure,
  role,
  next,
  preview,
  source,
}) => {
  const styleP = "text-xl tracking-widest font-sintony";
  const styleAnsword = styleP + " text-zinc-400";
  return (
    <>
      <article className=" flex flex-col md:grid md:grid-cols-2 md:gap-x-8 relative py-24 md:w-4/5 mx-auto">
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
            <nav className=" flex flex-row justify-between  ">
              <NavLink
                to={`${preview}`}
                className="hover:text-fuchsia-700 flex flex-row"
              >
                {
                  <>
                    <span className="">previous project</span>
                  </>
                }
              </NavLink>

              <NavLink
                to={`${next}`}
                className="hover:text-fuchsia-700 flex flex-row"
              >
                <>Next project</>
              </NavLink>
            </nav>
          </article>
        </section>
        {figure && (
          <section className="grid gap-x-8 gap-y-16">{figure}</section>
        )}
      </article>
    </>
  );
};

export default Templates;
