import MatthieuGravyDeveloperWeb from "../assets/matthieu-gravy-developer-web.svg";
import { ButtonOne } from "../components/blocs/Buttons";
import Heading from "../components/blocs/Heading";
import Containers from "../components/Containers";

const Landing = () => {
  return (
    <Containers
      type="section-large"
      className="px-2 md:w-4/5 md:m-auto lg:px-0 lg:grid lg:grid-cols-2 gap-x-8 relative"
    >
      <article className="m-auto">
        <Heading
          title={
            <>
              I'm <br />
              Matthieu <br />
              <mark className="bg-yellow-200">Gravy</mark>
            </>
          }
          level="h1"
          className="text-4xl lg:text-5xl"
        />
        <p className="text-2xl tracking-widest text-center  lg:text-left">
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
        <section className="pb-8 pt-4">
          <ButtonOne content="more" to="/about" />
        </section>
      </article>
      <figure
        className={`h-auto overflow-hidden opacity-60 flex justify-end z-0`}
      >
        <img src={MatthieuGravyDeveloperWeb} alt="Matthieu Gravy" />
      </figure>
    </Containers>
  );
};
export default Landing;
