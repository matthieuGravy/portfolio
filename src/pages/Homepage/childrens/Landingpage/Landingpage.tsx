import Scroller from "../../../../components/Scroller";
import MatthieuGravyDeveloperWeb from "../../../../assets/pictures/matthieu-gravy-full-background-colors.svg";
import { ButtonOne } from "../../../../components/blocs/Buttons";
import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import Elipseproject from "../../../../components/dynamics/Eipseproject.tsx";
import triangleZinc from "../../../../assets/backgrounds/triangle-zinc.svg";
import triangleZincFlip from "../../../../assets/backgrounds/triangle-zinc-flip.svg";
import ParallaxTextor from "../../../../components/ParallaxTextor";
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
        <figure>
          <section className="relative transform -rotate-[4deg]">
            <ParallaxTextor velocity={5} />
          </section>
          <img src={triangleZinc} alt="" className="-mb-1 w-full" />
        </figure>

        <section className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 bg-zinc-900 items-center overflow-hidden">
          <figure className="relative ">
            <Elipseproject />

            <article className="absolute top-0 left-0 h-full flex items-center z-10  ">
              <figcaption className="flex flex-col w-[320px] sm:w-3/5 md:w-[500px] xl:w-[600px] space-y-4 ps-2 md:ps-4">
                <Heading
                  title="Discover my projects"
                  level="h3"
                  className="text-left lg:text-left text-zinc-800"
                />
                <article className="space-y-2 text-zinc-700">
                  <p className="">
                    These projects are initially test projects to help me
                    understand certain technologies. They are currently under
                    review to propose something more elegant.
                  </p>
                  <ButtonOne content="Discover" to="/projects" />
                </article>
              </figcaption>
            </article>
          </figure>
        </section>
        <figure>
          <img src={triangleZincFlip} alt="" className="-mt-1 w-full" />
        </figure>
      </article>
    </>
  );
};

export default Landingpage;
