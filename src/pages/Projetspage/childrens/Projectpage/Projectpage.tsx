import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import { CardProject } from "../../../../components/Cards";
import projet from "../../../../data/projets";

const Projectpage = () => {
  return (
    <>
      <Containers type="section-large" id="projects" className="">
        <article className="bg-red-200 relative grid grid-cols-4 grid-rows-4">
          <div className="cols-span-2 row-span-2 col-start-2 row-start-2 bg-yellow-200 w-[700px] h-[700px] rounded-[40vh] flex justify-center items-center">
            {" "}
            <Heading
              level="h2"
              className="text-center md:text-start"
              title={
                <>
                  Learning
                  <br /> Projects
                </>
              }
            />
          </div>

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
                  {tech}e
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
