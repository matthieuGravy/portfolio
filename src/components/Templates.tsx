import Heading from "./blocs/Heading";
import Containers from "./Containers";
import { ButtonextTwo } from "./blocs/Buttons";
import FlecheRightIcon from "./icons/FlecheRightIcon";
import { NavLink } from "react-router-dom";

interface TemplatesProps {
  title: string;
  paragraphe?: string;
  ptech?: string;
  pversion?: string;
  figure?: React.ReactNode;
  role?: string;
  tonext: string;
  toprev: string;
  source: string;
  button?: React.ReactNode;
}

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
  return (
    <>
      <Containers
        type="jumbo-vertical"
        className="pt-24"
        children={
          <>
            <section className=" flex flex-row justify-between py-16">
              <NavLink
                to={`/${toprev}`}
                className="hover:text-fuchsia-700 flex flex-row"
              >
                {
                  <>
                    <span className="ps-2">previous project</span>
                  </>
                }
              </NavLink>

              <NavLink
                to={`/${tonext}`}
                className="hover:text-fuchsia-700 flex flex-row"
              >
                <>
                  <span className="pe-2">next project</span>
                  <FlecheRightIcon />
                </>
              </NavLink>
            </section>
            <Heading title={title} level="h2" className="lg:w-1/2" />
          </>
        }
        childrentwo={
          <>
            <article className="md:grid md:grid-cols-2 flex flex-col  place-content-between relative gap-x-8">
              <section className="">
                <p className="text-justify">{paragraphe}</p>
                <section className="grid grid-cols-2 gap-y-8 w-4/5 ">
                  <Heading level="h6" className="" title="role" />
                  <p className="uppercase text-zinc-400">{role}</p>

                  <Heading title="Stack" level="h6" className="" />
                  <p className="uppercase text-zinc-400">{ptech}</p>

                  <Heading title="Website" level="h6" className="" />
                  <p className="uppercase text-zinc-400">{pversion}</p>
                  {button}
                  <Heading title="Github" level="h6" className="" />
                  <ButtonextTwo
                    link={source}
                    title="lien github"
                    content="link"
                    className="uppercase text-zinc-400"
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
