import { Outlet } from "react-router-dom";
import Containers from "../../components/Containers";
import Heading from "../../components/blocs/Heading";
import MatthieuGravyDeveloperWeb from "../../assets/matthieu-gravy-developer-web.svg";
import { CardProject } from "../../components/Cards";
import Projets from "../../components/fr/projets";

import Scroller from "../../components/Scroller";
import { ButtonOne } from "../../components/blocs/Buttons";
import Getintouch from "../../components/Getintouch/Getintouch";

const Homepage = () => {
  return (
    <>
      <main className="text-zinc-800 flex flex-col gap-12 md:gap-24 lg:gap-y-80 pt-24 pb-24">
        <article className="absolute bg-slate-200 z-30 h-full ">
          <Outlet />
        </article>
        <Containers
          type="section-large"
          className="px-2 md:w-4/5 md:m-auto lg:px-0 lg:grid lg:grid-cols-2 gap-x-8 relative"
        >
          <article className="">
            <Heading
              title={
                <>
                  I'm <br />
                  Matthieu <br />
                  Gravy
                </>
              }
              level="h1"
              className="text-4xl lg:text-5xl"
            />
            <p className="text-2xl tracking-widest text-center lg:text-left">
              A web developer capable of creating web projects quickly and
              easily.
            </p>
            <section className="pb-8 pt-4">
              <ButtonOne content="more" to="/about" />
            </section>
          </article>
          <figure className={`h-auto overflow-hidden opacity-60  z-0`}>
            <img src={MatthieuGravyDeveloperWeb} alt="Matthieu Gravy" />
          </figure>
        </Containers>
        <article className="flex flex-row overflow-hidden group">
          <Scroller />
        </article>

        <section className="md:w-4/5 md:m-auto px lg:px-0">
          <>
            <Heading
              title={<>Personal Projects</>}
              level="h2"
              className="lg:w-1/2"
            />
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 md:gap-y-16 md:gap-x-16 md:py-24">
              {Projets.map((projet) => (
                <CardProject
                  buttonCardsonClick={() => setIsOutlet(true)}
                  buttonOneClick={() => setIsOutlet(true)}
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
          </>
        </section>
        <Getintouch />
      </main>
    </>
  );
};

export default Homepage;
