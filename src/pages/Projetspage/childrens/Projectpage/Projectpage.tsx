import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import { CardProject } from "../../../../components/Cards";
import { learnings, professionals } from "../../../../data/projets";
import ScrollTextLeft from "../../../../components/animate/ScrollTextLeft";
import ScrollTextRight from "../../../../components/animate/ScrollTextRight";
import ScrollHeading from "../../../../components/animate/ScollHeading";

const Projectpage = () => {
  const styleP = "text-xl tracking-widest text-justify font-sintony ";

  return (
    <>
      <Containers
        type="section-large"
        id="projects"
        className="py-24 flex flex-col"
      >
        <article>
          <Heading title="Projects" level="h2" className="pb-16 md:pb-0" />
        </article>
        <article className="">
          <header className=" grid md:grid-cols-2 md:grid-rows-4 gap-y-12 md:gap-y-0 gap-x-16 pb-24 md:pb-0 ">
            <ScrollTextLeft className={`md:row-span-2 md:row-start-2`}>
              <p className={`  ${styleP}`}>
                I participated in a bootcamp with BeCode. I had already started
                developing on my own, but I needed more structure and guidance.
                I found JavaScript difficult to get a handle on. So, I decided
                to take this course to learn how to work in a team, use Git,
                manage constraints, and collaborate with back-end developers.
              </p>
            </ScrollTextLeft>
            <ScrollHeading
              level="h4"
              className="md:row-span-2 md:self-center"
              title="Learnings"
            />{" "}
            <ScrollTextRight className={`md:row-span-2 `}>
              <p className={`${styleP}`}>
                All these projects may not be visually or technically amazing,
                but they taught me a lot in their context. I am still happy to
                share them because it is partly thanks to them that I was able
                to progress.
              </p>
            </ScrollTextRight>
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
