import { motion } from "framer-motion";

import { GrGithub, GrLinkedinOption } from "react-icons/gr";

import MatthieuGravyDeveloperWeb from "../../assets/pictures/matthieu-gravy-full-background-colors.svg";
import triangle from "../../assets/backgrounds/triangle-zinc.svg";
import triangleFlip from "../../assets/backgrounds/triangle-zinc-flip.svg";
import matthieuFocus from "../../assets/pictures/Frame 16.svg";

import { ButtonOne, Buttonext } from "../../components/blocs/Buttons";
import Heading from "../../components/blocs/Heading";
import Containers from "../../components/Containers";
import ParallaxTextor from "../../components/ParallaxTextor";
import ScrollTextRight from "../../components/animate/ScrollTextRight";
import ScrollTextLeft from "../../components/animate/ScrollTextLeft";
import ScrollHeading from "../../components/animate/ScollHeading";
import Getintouch from "../../components/Getintouch/Getintouch";
import Scroller from "../../components/Scroller";

const Homepage = () => {
  //parallax effect

  const hourRange = new Date().getHours();
  const greeting =
    hourRange < 12
      ? "Good morning"
      : hourRange < 18
      ? "Good afternoon"
      : "Good evening";

  const styleP = "text-2xl tracking-widest font-sintony";
  const styleRow = "lg:row-span-2 flex flex-col justify-center space-y-4 z-20";
  const classname =
    "hover:scale-90 transition-transform duration-500 ease-in-out";

  const title = "Specialized in front-end";
  const titleAnimation = title.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      {char}
    </motion.span>
  ));
  return (
    <>
      <main className="overflow-hidden">
        <Containers
          type="section-large"
          className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-8 rounded-xl gap-y-24 lg:gap-y-16 xl:gap-y-0 gap-x-16 relative"
        >
          <article className={`${styleRow}`}>
            <Heading title="Web developer" level="h1" />
            <section className="relative">
              <Heading title={titleAnimation} level="h3" className="" />
            </section>
            <section className="flex gap-x-8 justify-center">
              <Buttonext
                link="https://www.linkedin.com/in/matthieuGravy"
                title="Linkedin"
                className="flex flex-row justify-start rounded-lg"
                content={
                  <>
                    <motion.figure
                      className="hover:shadow-2xl transition-all duration-500 hover:bg-teal-200 rounded-full p-2 "
                      initial={({ y: 0 }, { opacity: 0 })}
                      animate={({ y: 16 }, { opacity: 1 })}
                      transition={{
                        duration: 1,
                        delay: 3,
                        repeatType: "reverse",
                      }}
                    >
                      <GrLinkedinOption
                        size={24}
                        color="#3f3f46"
                        className={classname}
                      />
                    </motion.figure>
                  </>
                }
              />
              <Buttonext
                link="https://github.com/matthieuGravy"
                title="Github"
                className="flex flex-row items-center"
                content={
                  <>
                    <motion.figure
                      className="hover:shadow-2xl transition-all duration-500 hover:bg-teal-200 rounded-full p-2"
                      initial={({ y: 0 }, { opacity: 0 })}
                      animate={({ y: 16 }, { opacity: 1 })}
                      transition={{
                        duration: 1,
                        delay: 3.5,
                        repeatType: "reverse",
                      }}
                    >
                      <GrGithub
                        size={24}
                        color="#3f3f46"
                        className={classname}
                      />
                    </motion.figure>
                  </>
                }
              />
            </section>
          </article>
          <header className={styleRow}>
            <Heading title={greeting} level="h4" className={``} />
            <ScrollHeading level="h3" className="" title="Matthieu Gravy" />
          </header>

          <figure
            className={`lg:row-start-2 lg:row-span-2 lg:col-start-2 z-20`}
          >
            <img
              src={matthieuFocus}
              alt="Illustration"
              className="max-h-900px w-4/5 mx-auto rounded-xl"
            />
          </figure>
          <ScrollTextRight className={styleRow}>
            <p className={styleP}>
              A web developer based in Brussels, specializing in modern web
              technologies. I am capable of creating web projects quickly and
              easily.
            </p>
            <section className="">
              <ButtonOne content="more" to="/about" className="" />{" "}
            </section>
          </ScrollTextRight>
          <figure className={`flex items-center row-span-2 `}>
            <Scroller />
          </figure>

          <article className={styleRow}>
            <ScrollHeading
              level="h2"
              className="md:w-[400px]"
              title="My Skills"
            />
          </article>
          <ScrollTextLeft className={styleRow}>
            <p className={styleP}>
              I specialize in React, Javascript, and Tailwind CSS. I also have
              experience with Typescript, Vue.js, Node.js, Express, and MongoDB.
            </p>
          </ScrollTextLeft>
        </Containers>

        <figure className="py-24 lg:py-16 xl:py-0">
          <img src={triangle} alt="" className="w-full" />
          <ParallaxTextor velocity={1} />
          <img src={triangleFlip} alt="" className="w-full" />
        </figure>

        <Containers
          type="section-large"
          className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 rounded-xl gap-y-24 lg:gap-y-16 xl:gap-y-0 gap-x-16 "
        >
          <figure className="rounded-xl p-4 lg:row-span-2 lg:row-start-2 lg:col-start-2">
            <motion.img
              src={MatthieuGravyDeveloperWeb}
              alt="Matthieu Gravy web developer illustration"
              className="max-h-900px w-4/5 mx-auto rounded-xl"
            />
          </figure>
          <article
            className={`lg:col-start-1 lg:row-span-2 bg-red-300 ${styleRow}`}
          >
            <ScrollHeading level="h2" className="" title="My projects" />
          </article>

          <ScrollTextLeft className={`${styleRow} bg-red-200`}>
            <p className={styleP}>
              These projects are initially test projects to help me understand
              certain technologies. They are currently under review to propose
              something more elegant.
            </p>
            <ButtonOne content="Discover" to="/projects" />
          </ScrollTextLeft>
        </Containers>
        <Getintouch />
      </main>
    </>
  );
};

export default Homepage;
