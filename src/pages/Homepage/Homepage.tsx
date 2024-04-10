import Heading from "../../components/blocs/Heading";
import Photo from "../../components/blocs/Photo";

import Scroller from "../../components/blocs/Scroller";
import Socials from "../../components/blocs/Socials";
import { ButtonOne } from "../../components/blocs/Buttons";
import ProjectDetail from "../../components/fr/ProjectDetail";
import Landing from "../../components/blocs/Landing";

const Homepage = () => {
  return (
    <>
      <section className="flex flex-col gap-12 md:gap-24 lg:gap-y-40">
        <Socials />
        <section className="w-full pt-36 bg-zinc-100 text-zinc-800 flex flex-col gap-y-32 ">
          <section className="px-2 md:w-4/5 md:m-auto lg:px-0 lg:grid lg:grid-cols-2 gap-x-8">
            <article className="flex flex-col justify-center w-4/5 pb-8 m-auto text-center lg:pb-0 lg:text-left lg:margin-0">
              <h2 className="text-5xl uppercase">
                Je suis <br />
                Matthieu Gravy
              </h2>
              <p className="text-2xl tracking-widest text-center lg:text-left">
                Un développeur web capable de créer des projets web rapidement
                et facilement.
              </p>
              <section className="pb-8 ">
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
          <section className="bg-teal-600 pt-24 md:w-4/5 md:m-auto px lg:px-0">
            <>
              <Heading
                title="Projets"
                level="h2"
                className="text-center text-zinc-800 lg:text-left ps-8"
              />
              <section className="px-4 py-16 md:pb-0 md:pt-0 md:px-8">
                <ProjectDetail />
              </section>
            </>
          </section>
        </section>
        <section className="bg-zinc-800 pb-24">
          <Landing />
        </section>
      </section>
    </>
  );
};

export default Homepage;
