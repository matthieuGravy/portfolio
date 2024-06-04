import Heading from "./blocs/Heading";
import Containers from "./Containers";
import { ButtonextTwo } from "./blocs/Buttons";
import { NavLink } from "react-router-dom";
import { TemplatesProps } from "../types/types";
import ArrowRigths from "./dynamic-icons/ArrowRigths";

const Templates: React.FC<TemplatesProps> = ({
  title,
  paragraphe,
  ptech,
  pversion,
  figure,
  role,
  tonext,
  toprev,
  button,
  source,
}) => {
  const styleP = "text-xl tracking-widest font-sintony";
  const styleAnsword = "font-sintony text-lg text-zinc-400";
  return (
    <>
      <Containers
        type="jumbo-vertical"
        className="py-24"
        children={
          <>
            <section className=" flex flex-row justify-between py-16">
              <NavLink
                to={`${toprev}`}
                className="hover:text-fuchsia-700 flex flex-row"
              >
                {
                  <>
                    <span className="ps-2">previous project</span>
                  </>
                }
              </NavLink>

              <NavLink
                to={`${tonext}`}
                className="hover:text-fuchsia-700 flex flex-row"
              >
                <>
                  <span className="pe-2">next project</span>
                  <ArrowRigths />
                </>
              </NavLink>
            </section>
            <Heading title={title} level="h2" className="lg:w-1/2" />
          </>
        }
        childrentwo={
          <>
            <article className="md:grid md:grid-cols-2 flex flex-col  place-content-between relative gap-x-8">
              <section className="space-y-12">
                <p className={styleP}>{paragraphe}</p>
                <section className="grid grid-cols-2 gap-y-8 w-4/5 ">
                  <Heading level="h6" className="" title="role" />
                  <p className={styleAnsword}>{role}</p>

                  <Heading title="Stack" level="h6" className="" />
                  <p className={styleAnsword}>{ptech}</p>

                  <Heading title="Website" level="h6" className="" />
                  <ButtonextTwo
                    link={pversion}
                    title={`View live ${title}`}
                    content={pversion}
                  />

                  {button}
                  <Heading title="Github" level="h6" className="" />
                  <ButtonextTwo
                    link={source}
                    title={`${title} source code`}
                    content="View source code"
                  />
                </section>
              </section>
              <section className="grid grid-cols-2 gap-x-8 gap-y-16">
                {figure}
              </section>
            </article>
          </>
        }
      />
    </>
  );
};

export default Templates;
