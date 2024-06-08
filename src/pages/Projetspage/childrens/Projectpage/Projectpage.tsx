import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import { CardProject } from "../../../../components/Cards";
import { learnings, professionals, content } from "../../../../data/projets";
import ScrollTextLeft from "../../../../components/animate/ScrollTextLeft";
import ScrollTextRight from "../../../../components/animate/ScrollTextRight";
import ScrollHeading from "../../../../components/animate/ScollHeading";

const Projectpage = () => {
  const styleP = "text-xl tracking-widest text-justify font-sintony ";

  return (
    <>
      <Containers
        type="section-large"
        className="py-24 flex flex-col overflow-hidden"
      >
        <article>
          <Heading
            title={content.heading}
            level="h2"
            className="pb-16 md:pb-0"
          />
        </article>
        <article className="">
          <header className=" grid md:grid-cols-2 md:grid-rows-4 gap-y-12 md:gap-y-0 gap-x-16 pb-24 md:pb-0 ">
            <section className={`md:row-span-2 md:row-start-2`}>
              <ScrollTextLeft>
                <p className={`  ${styleP}`}>{content.learnings.textOne}</p>
              </ScrollTextLeft>
            </section>
            <ScrollHeading
              level="h4"
              className="md:row-span-2 md:self-center"
              title={content.learnings.title}
            />{" "}
            <section className={`md:row-span-2 `}>
              <ScrollTextRight className={`md:row-span-2 `}>
                <p className={`${styleP}`}>{content.learnings.textTwo}</p>
              </ScrollTextRight>
            </section>
          </header>
          <section className="grid md:grid-cols-2 xl:grid-cols-3">
            {learnings.map((projet) => (
              <CardProject
                key={projet.id}
                id={projet.id}
                to={`learning/${projet.id}`}
                name={projet.name}
                liste={projet.tech.map((tech) => (
                  <li
                    key={tech}
                    className="border-[1px] border-zinc-200 px-4 py-2 uppercase text-xs "
                  >
                    {tech}
                  </li>
                ))}
              />
            ))}
          </section>
        </article>
        <article>
          <header className="pt-24 pb-12 ">
            <ScrollHeading level="h4" className="" title="Professional" />
          </header>
          <section className="grid md:grid-cols-2 xl:grid-cols-3">
            {professionals.map((projet) => (
              <CardProject
                key={projet.id}
                id={projet.id}
                to={`professional/${projet.id}`}
                name={projet.name}
                liste={projet.tech.map((tech) => (
                  <li
                    key={tech}
                    className="border-[1px] border-zinc-200 px-4 py-2 uppercase text-xs "
                  >
                    {tech}
                  </li>
                ))}
              />
            ))}
          </section>
        </article>
      </Containers>
    </>
  );
};

export default Projectpage;
