import Scroller from "../../../../components/Scroller";
import MatthieuGravyDeveloperWeb from "../../../../assets/pictures/matthieu-gravy-full-background-colors.svg";
import { ButtonOne } from "../../../../components/blocs/Buttons";
import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import Elipseproject from "../../../../components/dynamics/Eipseproject.tsx";
import triangleZinc from "../../../../assets/backgrounds/triangle-zinc.svg";
import triangleZincFlip from "../../../../assets/backgrounds/triangle-zinc-flip.svg";

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
      <article>
        <img src={triangleZinc} alt="" />

        <section className="flex flex-row items-center pe-12 bg-zinc-900">
          <Elipseproject />

          <article className="w-[600px] space-y-4 ">
            <Heading
              title="Discover my projects"
              level="h3"
              className="text-center lg:text-left text-zinc-200"
            />
            <article className="space-y-2 text-zinc-400">
              <p className="">
                These projects are initially test projects to help me understand
                certain technologies. They are currently under review to propose
                something more elegant.
              </p>
              <ButtonOne content="Discover" to="/projects" />
            </article>
          </article>
        </section>
        <img src={triangleZincFlip} alt="" />
      </article>
      <Containers type="section-large" className="flex flex-col">
        <article>
          <Heading
            title="Discover my articles"
            level="h3"
            className="text-center lg:text-left "
          />
          <p>trop de texte par rapport à un parcours comme le miens atypique</p>
          <p>Envie de partager via des articles</p>
          <ButtonOne content="Read more" to="/blog" />
        </article>
      </Containers>
    </>
  );
};

export default Landingpage;
