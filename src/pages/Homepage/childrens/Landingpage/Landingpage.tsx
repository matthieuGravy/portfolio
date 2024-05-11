import Scroller from "../../../../components/Scroller";
import MatthieuGravyDeveloperWeb from "../../../../assets/pictures/matthieu-gravy-full-background-colors.svg";
import { ButtonOne } from "../../../../components/blocs/Buttons";
import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import ParallaxTextor from "../../../../components/ParallaxTextor";
import triangle from "../../../../assets/backgrounds/triangle-zinc.svg";
import triangleFlip from "../../../../assets/backgrounds/triangle-zinc-flip.svg";
const Landingpage = () => {
  const hourRange = new Date().getHours();
  const greeting =
    hourRange < 12
      ? "Good morning"
      : hourRange < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <>
      <Containers
        type="section-large"
        className="grid lg:grid-cols-2 gap-x-24 gap-y-12 pt-36 place-items-center"
      >
        <article className="p-24">
          <Heading
            title={<>I'M Matthieu Gravy</>}
            level="h2"
            className="w-[400px]"
          />
          <p className="text-2xl tracking-widest text-center pt-12 pb-8 lg:text-left font-sintony">
            A web developer capable of creating web projects {""}
            <mark className="bg-teal-200 font-semibold ps-2 pb-4">
              quickly
            </mark>{" "}
            and {""}
            <mark className="bg-teal-200 font-semibold ps-2 pb-4">easily</mark>.
          </p>
          <section className="">
            <ButtonOne content="more" to="/about" />
          </section>
        </article>
        <article>
          <Heading title={greeting} level="h3" className="col-span-2" />
        </article>
      </Containers>
      <Containers
        type="section-large"
        className="grid lg:grid-cols-2 gap-y-12 "
      >
        <article className="p-24">
          <Heading title={<>My Skills</>} level="h2" className="w-[400px]" />
          <p className="text-2xl tracking-widest text-center pt-12 pb-8 lg:text-left font-sintony">
            I specialize in React, TypeScript, and Tailwind CSS. I also have
            experience with Vue.js, Node.js, Express, and MongoDB.
          </p>
        </article>
        <figure className="flex items-center">
          <Scroller />
        </figure>
      </Containers>
      <figure className="">
        <img src={triangle} alt="" className="w-full" />
        <ParallaxTextor velocity={1} />
        <img src={triangleFlip} alt="" className="w-full" />
      </figure>
      <Containers
        type="section-large"
        className="grid lg:grid-cols-2 gap-y-12 "
      >
        <figure className="bg-orange-500 rounded-xl">
          <div className=" rounded-xl overflow-hidden p-24">
            <img
              src={MatthieuGravyDeveloperWeb}
              alt="Matthieu Gravy"
              className=""
            />
          </div>
        </figure>
        <article className="space-y-8 rounded-xl p-24">
          <Heading
            title="Discover my projects"
            level="h2"
            className="col-span-2  "
          />
          <p className="font-sintony text-2xl tracking-widest">
            These projects are initially test projects to help me understand
            certain technologies. They are currently under review to propose
            something more elegant.
          </p>
          <ButtonOne content="Discover" to="/projects" />
        </article>
      </Containers>
    </>
  );
};

export default Landingpage;
