import { NavLink } from "react-router-dom";

import Containers from "../../../../components/Containers";
import ScrollHeading from "../../../../components/animate/ScrollHeading";
import Main from "../../../../components/Main";

import {
  learnings,
  professionals,
  shared,
  content,
} from "../../../../data/projets";

const Projectpage = () => {
  const styleContainer =
    "grid md:grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-8 md:px-8 py-12 place-items-center";
  const styleHeader = "py-12 px-8";

  return (
    <>
      <Main className="flex flex-col gap-y-12 pt-12 pb-16">
        <Containers type="section-large">
          <ScrollHeading
            level="h4"
            title={content.shared.title}
            className={styleHeader}
          />
          <article className={`${styleContainer}`}>
            {shared.map((project) => (
              <>
                <figure className="flex flex-col justify-between rounded-xl">
                  <NavLink to={`shared/${project.id}`}>
                    <img src={project.src} alt={project.name} />
                  </NavLink>
                  <NavLink
                    to={`shared/${project.id}`}
                    className="flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide text-zinc-400"
                  >
                    {project.name}
                  </NavLink>
                </figure>
              </>
            ))}
          </article>
        </Containers>

        <Containers type="section-large">
          <ScrollHeading
            level="h4"
            title={content.learnings.title}
            className={styleHeader}
          />
          <article className={`${styleContainer}`}>
            {learnings.map((project) => (
              <>
                <figure className="flex flex-col justify-between rounded-xl">
                  <NavLink to={`learning/${project.id}`}>
                    <img src={project.src} alt={project.name} />
                  </NavLink>
                  <NavLink
                    to={`learning/${project.id}`}
                    className="flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide text-zinc-400"
                  >
                    {project.name}
                  </NavLink>
                </figure>
              </>
            ))}
          </article>
        </Containers>
        <Containers type="section-large">
          <ScrollHeading
            level="h4"
            title={content.professionals.title}
            className={styleHeader}
          />
          <article className={`${styleContainer}`}>
            {professionals.map((project) => (
              <>
                <figure className="flex flex-col justify-between rounded-xl">
                  <NavLink to={`professional/${project.id}`}>
                    <img src={project.src} alt={project.name} />
                  </NavLink>
                  <NavLink
                    to={`professional/${project.id}`}
                    className="flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide text-zinc-400"
                  >
                    {project.name}
                  </NavLink>
                </figure>
              </>
            ))}
          </article>
        </Containers>
      </Main>
    </>
  );
};

export default Projectpage;
