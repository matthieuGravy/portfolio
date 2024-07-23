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
  const styleP = "text-2xl text-zinc-400 tracking-wide font-sintony";
  const styleContainer =
    "grid md:grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-8 md:px-8 py-12";

  return (
    <>
      <Main className="flex flex-col gap-y-12 pt-12 pb-16">
        <Containers
          type="section-basic"
          className="flex flex-col overflow-hidden"
        >
          <section className="py-12 md:px-8">
            <article className="space-y-8">
              <header className="">
                <Heading title={content.heading} level="h2" className="" />
              </header>
              <section className={`space-y-6`}>
                <ScrollTextLeft>
                  <p className={`${styleP}`}>{content.learnings.textOne}</p>
                </ScrollTextLeft>
                <ScrollTextLeft>
                  <p className={`${styleP}`}>{content.learnings.textTwo}</p>
                </ScrollTextLeft>
              </section>
            </article>
          </section>
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
                  <li key={tech} className=" px-4 py-2 uppercase text-xs ">
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
                  <li key={tech} className=" px-4 py-2 uppercase text-xs ">
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
                  <li key={tech} className=" px-4 py-2 uppercase text-xs ">
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
