import MatthieuGravyDeveloperWeb from "../assets/matthieu.svg";
import { ButtonOne } from "../components/blocs/Buttons";
import Heading from "../components/blocs/Heading";
import Containers from "../components/Containers";

const Landing = () => {
  return (
    <Containers
      type="section-large"
      className="px-2 md:w-4/5 md:m-auto lg:px-0 lg:grid lg:grid-cols-2 gap-x-8 relative gap-y-24 pt-24"
    >
      <article className="m-auto">
        <Heading title={<>I'M Matthieu Gravy</>} level="h2" className="" />
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
        className={`h-auto overflow-hidden opacity-60 flex justify-end items-center z-0  `}
      >
        <img
          src={MatthieuGravyDeveloperWeb}
          alt="Matthieu Gravy"
          className="h-4/5 w-auto border-t-8 border-top border-teal-400"
        />
      </figure>
    </Containers>
  );
};
export default Landing;
