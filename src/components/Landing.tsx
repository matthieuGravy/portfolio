import MatthieuGravyDeveloperWeb from "../assets/matthieu.svg";
import { ButtonOne } from "../components/blocs/Buttons";
import Heading from "../components/blocs/Heading";
import Containers from "../components/Containers";
import ParallaxTextor from "../components/blocs/ParallaxTextor";

const Landing = () => {
  return (
    <Containers
      type="section-large"
      className="grid lg:grid-cols-2 gap-x-12 relative gap-y-12 pt-24 place-items-center"
    >
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
      <figure
        className={`overflow-hidden opacity-60 flex justify-center lg:justify-end items-center z-0 relative`}
      >
        <img
          src={MatthieuGravyDeveloperWeb}
          alt="Matthieu Gravy"
          className=""
        />
        <article className="absolute h-[100vh]">
          <ParallaxTextor />
        </article>
      </figure>
    </Containers>
  );
};
export default Landing;
