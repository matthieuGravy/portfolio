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
      <section className="pt-24 flex flex-col gap-12 md:gap-24 lg:gap-y-40">
        <Socials />
        <Landing />
        <article className="overflow-hidden flex flex-row group ">
          <Scroller />
        </article>
        <section className="bg-yellow-200 md:w-4/5 md:m-auto pt-24 px lg:px-0">
          <>
            <Heading
              title="Projets"
              level="h2"
              className="text-zinc-800 text-center lg:text-left ps-8"
            />
            <section className="py-16 md:pb-0 md:pt-0 px-4 md:px-8">
              <ProjectDetail />
            </section>
          </>
        </section>
        <section className="bg-zinc-100 text-zinc-800 pt-24 pb-16 w-full">
          <section className="md:w-4/5 md:m-auto px-2 lg:px-0 lg:grid lg:grid-cols-2 gap-x-8">
            <article className="pb-8 lg:pb-0 text-center lg:text-left flex flex-col justify-center w-4/5">
              <h2 className="text-5xl uppercase">
                Je suis <br />
                Matthieu Gravy
              </h2>
              <p className="tracking-widest text-2xl text-center lg:text-left">
                Un développeur web capable de créer des projets web rapidement
                et facilement.
              </p>
              <section className="pt-8">
                <ButtonOne content="more" to="/about" />
              </section>
            </article>
            <figure>
              <Photo />
            </figure>
          </section>
          <article></article>
        </section>
      </section>
    </>
  );
};

export default Homepage;
