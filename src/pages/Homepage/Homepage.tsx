import Heading from "../../components/blocs/Heading";
import Photo from "../../components/blocs/Photo";

import Scroller from "../../components/blocs/Scroller";
import { ButtonOne } from "../../components/blocs/Buttons";
import ProjectDetail from "../../components/fr/ProjectDetail";
import Landing from "../../components/blocs/Landing";

const Homepage = () => {
  return (
    <>
      <section className="flex flex-col gap-12 md:gap-24 lg:gap-y-80">
        <section className="w-full pt-36 bg-zinc-100 text-zinc-800 flex flex-col gap-y-80 pb-24">
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
              <ProjectDetail />
            </>
          </section>
          <Landing />
        </section>
      </section>
    </>
  );
};

export default Homepage;
