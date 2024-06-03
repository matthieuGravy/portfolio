import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import { CardProject } from "../../../../components/Cards";
import projet from "../../../../data/projets";

const Projectpage = () => {
  const styleP = "text-xl tracking-widest text-justify font-sintony ";

  return (
    <>
      <Containers type="section-large" id="projects" className="">
        <article className="grid grid-cols-3 gap-8 ">
          <header className="col-span-3 grid grid-cols-2 grid-rows-4 gap-y-24 lg:gap-y-16 xl:gap-y-0 gap-x-16 ">
            <p className={`row-span-2 row-start-2  ${styleP}`}>
              I participated in a bootcamp with BeCode. I had already started
              developing on my own, but I needed more structure and guidance. I
              found JavaScript difficult to get a handle on. So, I decided to
              take this course to learn how to work in a team, use Git, manage
              constraints, and collaborate with back-end developers.
            </p>
            <Heading
              level="h3"
              title={<>Learnings</>}
              className="row-span-2 "
            />
            <p className={`row-span-2 ${styleP}`}>
              All these projects may not be visually or technically amazing, but
              they taught me a lot in their context. I am still happy to share
              them because it is partly thanks to them that I was able to
              progress.
            </p>
          </header>
          {projet.map((projet) => (
            <CardProject
              key={projet.id}
              id={projet.id}
              to={projet.to}
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
        </article>
      </Containers>
    </>
  );
};

export default Projectpage;
