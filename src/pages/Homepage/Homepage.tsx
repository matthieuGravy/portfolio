import { Outlet } from "react-router-dom";
import Containers from "../../components/Containers";
import Heading from "../../components/blocs/Heading";
import { CardProject } from "../../components/Cards";
import projet from "../../components/fr/projets";

import Getintouch from "../../components/Getintouch/Getintouch";

const Homepage = () => {
  return (
    <>
      <main className="text-zinc-800 flex flex-col gap-12 md:gap-24 lg:gap-y-24">
        <Outlet />
        <Containers type="section-large" id="projects">
          <Heading title="Projects" level="h2" className="lg:w-1/2" />
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 md:gap-y-16 md:gap-x-16 md:py-24">
            {projet.map((projet) => (
              <CardProject
                key={projet.id}
                id={projet.id}
                to={projet.to}
                name={projet.name}
                role={projet.role}
                className=""
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
        <Getintouch />
      </main>
    </>
  );
};

export default Homepage;
