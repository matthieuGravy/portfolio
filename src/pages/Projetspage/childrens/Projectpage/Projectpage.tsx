import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import { CardProject } from "../../../../components/Cards";
import {
  learnings,
  professionals,
  shared,
  content,
} from "../../../../data/projets";
import ScrollTextLeft from "../../../../components/animate/ScrollTextLeft";
import ScrollHeading from "../../../../components/animate/ScrollHeading";
import Main from "../../../../components/Main";

const Projectpage = () => {
  const styleP = "text-xl tracking-widest text-justify font-sintony ";
  const styleContainer =
    "grid md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8 px-8 py-12";

  return (
    <>
      <Main className="flex flex-col gap-y-12">
        <Containers
          type="section-large"
          className="py-24 flex flex-col  overflow-hidden"
        >
          <article className="">
            <header className="">
              <Heading title={content.heading} level="h2" className="" />
            </header>
            <section className={``}>
              <ScrollTextLeft>
                <p className={`  ${styleP}`}>{content.learnings.textOne}</p>
              </ScrollTextLeft>
            </section>
          </article>
        </Containers>
        <Containers type="section-large">
          <article className={`${styleContainer}`}>
            <ScrollHeading level="h4" title={content.shared.title} />
            {shared.map((projet) => (
              <CardProject
                key={projet.id}
                id={projet.id}
                to={`shared/${projet.id}`}
                name={projet.name}
                liste={projet.tech.map((tech) => (
                  <li
                    key={tech}
                    className="border-[1px] border-teal-200 px-4 py-2 uppercase text-xs "
                  >
                    {tech}
                  </li>
                ))}
              />
            ))}
          </article>
        </Containers>
        <Containers type="section-large">
          <article className={`${styleContainer}`}>
            <ScrollHeading level="h4" title={content.learnings.title} />
            {learnings.map((projet) => (
              <CardProject
                key={projet.id}
                id={projet.id}
                to={`learning/${projet.id}`}
                name={projet.name}
                liste={projet.tech.map((tech) => (
                  <li
                    key={tech}
                    className="border-[1px] border-teal-200 px-4 py-2 uppercase text-xs "
                  >
                    {tech}
                  </li>
                ))}
              />
            ))}
          </article>
        </Containers>
        <Containers type="section-large">
          <article className={`${styleContainer}`}>
            <ScrollHeading level="h4" className="" title="Professional" />
            {professionals.map((projet) => (
              <CardProject
                key={projet.id}
                id={projet.id}
                to={`professional/${projet.id}`}
                name={projet.name}
                liste={projet.tech.map((tech) => (
                  <li
                    key={tech}
                    className="border-[1px] border-teal-200 px-4 py-2 uppercase text-xs "
                  >
                    {tech}
                  </li>
                ))}
              />
            ))}
          </article>
        </Containers>
      </Main>
    </>
  );
};

export default Projectpage;
