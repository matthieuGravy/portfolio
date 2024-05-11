import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import { CardProject } from "../../../../components/Cards";
import projet from "../../../../data/projets";

const Projectpage = () => {
  return (
    <>
      <Containers
        type="section-large"
        id="projects"
        className="flex flex-col gap-y-12 pt-36"
      >
        <Heading
          title="Projects"
          level="h2"
          className="text-center md:text-start"
        />
        <section className="grid place-items-center md:place-items-start lg:grid-cols-2 gap-y-16 md:gap-y-16 md:gap-x-16 md:py-24">
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
        </section>
      </Containers>
    </>
  );
};

export default Projectpage;
