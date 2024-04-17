import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Heading from "../../components/blocs/Heading";
import Photo from "../../components/blocs/Photo";
import { PorjectCard } from "../../components/blocs/Project";
import Projets from "../../components/fr/projets";

import Scroller from "../../components/blocs/Scroller";
import { ButtonOne } from "../../components/blocs/Buttons";
import Landing from "../../components/blocs/Landing";

const Homepage = () => {
  const [isOutlet, setIsOutlet] = useState(true);

  return (
    <>
      <section className="flex flex-col gap-12 md:gap-24 lg:gap-y-80">
        <section className="w-full pt-36 bg-zinc-100 text-zinc-800 flex flex-col gap-y-80 pb-24">
          {isOutlet ? (
            <Outlet />
          ) : (
            <>
              <section className="px-2 md:w-4/5 md:m-auto lg:px-0 lg:grid lg:grid-cols-2 gap-x-8">
                <article className="flex flex-col justify-center w-4/5 pb-8 m-auto text-center lg:pb-0 lg:text-left lg:margin-0">
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
                <figure>
                  <Photo />
                </figure>
              </section>
              <article className="flex flex-row overflow-hidden group">
                <Scroller />
              </article>
            </>
          )}
          <section className="md:w-4/5 md:m-auto px lg:px-0">
            <>
              <Heading
                title={
                  <>
                    Personal <br />
                    Projects
                  </>
                }
                level="h2"
                className="text-center text-zinc-800 lg:text-left ps-8"
              />
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 md:gap-y-16 md:gap-x-16 md:py-24">
                {Projets.map((projet) => (
                  <PorjectCard
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
                        className="border-[1px] border-zinc-200 text-zinc-400 px-4 py-2 uppercase text-xs "
                      >
                        {tech}
                      </li>
                    ))}
                  />
                ))}
              </section>
            </>
          </section>

          <Landing />
        </section>
      </section>
    </>
  );
};

export default Homepage;
