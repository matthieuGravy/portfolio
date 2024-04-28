import Scroller from "../../../../components/Scroller";
import MatthieuGravyDeveloperWeb from "../../../../assets/pictures/matthieu-gravy-full-background-colors.svg";
import { ButtonOne } from "../../../../components/blocs/Buttons";
import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";

const Landingpage = () => {
  return (
    <>
      <Containers
        type="section-large"
        className="grid lg:grid-cols-2 gap-x-24 gap-y-12 pt-36 place-items-center"
      >
        <figure
          className={`relative flex justify-center lg:justify-end items-center z-0 relative`}
        >
          <img
            src={MatthieuGravyDeveloperWeb}
            alt="Matthieu Gravy"
            className=""
          />
        </figure>

        <article className="">
          <Heading
            title={
              <>
                I'M <br className="lg:hidden" /> Matthieu Gravy
              </>
            }
            level="h2"
            className="text-center lg:text-left pb-4 lg:pb-8"
          />
          <p className="text-2xl tracking-widest text-center pt-12 pb-8 lg:text-left">
            A web developer capable of creating web projects {""}
            <mark className="bg-teal-200 text-zinc-600 font-semibold ps-2 pb-4">
              quickly
            </mark>{" "}
            and {""}
            <mark className="bg-teal-200 text-zinc-600 font-semibold ps-2 pb-4">
              easily
            </mark>
            .
          </p>
          <section className="">
            <ButtonOne content="more" to="/about" />
          </section>
        </article>
      </Containers>
      <Scroller />
      <Containers type="section-large" className="flex flex-col">
        <article>
          <Heading
            title="Discover my projects"
            level="h3"
            className="text-center lg:text-left "
          />
          <p className=" pb-8">
            These projects are initially test projects to help me understand
            certain technologies. They are currently under review to propose
            something more elegant.
          </p>
          <ButtonOne content="Discover" to="/projects" />
        </article>
        <article>
          <Heading
            title="Discover my articles"
            level="h3"
            className="text-center lg:text-left "
          />
          <p>
            J'ai un parcours atypique et en réalisant ce portfolio pour la
            première fois, je me suis rendu compte que j'avais introduis trop de
            texte. J'ai donc réduit le texte pour que vous puissiez mieux me
            connaître, mais aussi pour que vous puissiez mieux comprendre mes
            projets et mes compétences.
          </p>
          <p>
            Mais j'ai réalisé que je pouvais peut-être ajouté simplement des
            articles sous forme de blog. Cela me permettrait de vous partager
            mes expériences, mes découvertes et mes réflexions.
          </p>
          <ButtonOne content="Read more" to="/contact" />
        </article>
      </Containers>
    </>
  );
};

export default Landingpage;
