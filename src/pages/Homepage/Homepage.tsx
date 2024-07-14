import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Suspense, useState, useEffect, useRef } from "react";

import { GrGithub, GrLinkedinOption } from "react-icons/gr";

import MaskMatt from "../../assets/pictures/mask-matt.png";

import { ButtonOne, Buttonext } from "../../components/blocs/Buttons";
import Heading from "../../components/blocs/Heading";
import Containers from "../../components/Containers";
import ParallaxTextor from "../../components/ParallaxTextor";
import ScrollTextRight from "../../components/animate/ScrollTextRight";
import ScrollTextLeft from "../../components/animate/ScrollTextLeft";
import Getintouch from "../../components/Getintouch/Getintouch";
import Scroller from "../../components/Scroller";
import Loadingimage from "../../components/Loadingimage";
import Main from "../../components/Main";

import { jumbo, greetingWords } from "../../data/home";
import {
  MissionDownEn,
  MissionUpEn,
} from "../../components/data/homepage/Mission";

const Homepage = () => {
  const [contactButton, setContatButton] = useState(false);
  const figureRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: figureRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const hourRange = new Date().getHours();
  const greeting =
    hourRange < 12
      ? greetingWords.morning
      : hourRange < 18
      ? greetingWords.afternoon
      : greetingWords.evening;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const ContactSection = ({ contactButton, greeting }) => {
    const [key, setKey] = useState(0);

    useEffect(() => {
      setKey((prevKey) => prevKey + 1);
    }, [contactButton, greeting]);

    return (
      <AnimatePresence mode="wait">
        <motion.article
          key={key}
          className={`md:pt-12 md:ps-8 space-y-4`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {contactButton ? (
            <motion.div variants={itemVariants}>
              <motion.header>
                <Heading title="Get in touch" level="h4" className={``} />
              </motion.header>
            </motion.div>
          ) : (
            <motion.div variants={itemVariants}>
              <Heading title={<>{greeting}</>} level="h4" className={``} />
            </motion.div>
          )}
        </motion.article>
      </AnimatePresence>
    );
  };

  const styleP =
    "text-2xl text-zinc-400 tracking-widest text-center font-sintony ";
  const classname =
    "hover:scale-90 transition-transform duration-500 ease-in-out";

  const title = jumbo.subtitle;
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
  const buttonVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  const transitionSettings = {
    initial: { duration: 0.4, ease: "easeOut" },
    animate: { duration: 0.4, ease: "easeInOut" },
    exit: { duration: 0.4, ease: "easeIn" },
  };

  return (
    <>
      <Main className="flex flex-col gap-y-8 md:gap-y-16 pb-16 overflow-hidden">
        <Containers
          type="section-large"
          className="mt-12 rounded-xl bg-[#131316] flex overflow-hidden"
        >
          <section className="grid xl:grid-cols-2 w-full ">
            <article className="flex flex-col justify-between space-y-8">
              <ContactSection
                contactButton={contactButton}
                greeting={greeting}
              />
              <header className="md:ps-8 space-y-8 md:pb-8">
                <Heading title={jumbo.title} level="h1" className="" />
                <Heading
                  title={<>{titleAnimation}</>}
                  level="h3"
                  className=""
                />
              </header>
              <footer className="md:pb-12 md:ps-8 flex gap-x-8 lg:items-center justify-end flex-col-reverse md:flex-row-reverse xl:flex-row ">
                <motion.button
                  onClick={() => setContatButton(!contactButton)}
                  className="text-fuchsia-500 hover:bg-fuchsia-500 hover:text-zinc-800 rounded-lg flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide uppercase mt-8 md:mt-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{
                    duration: 0.8,
                    delay: 4.5,
                    repeatType: "reverse",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {contactButton ? (
                      <motion.span
                        key="back"
                        variants={buttonVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transitionSettings}
                      >
                        Back
                      </motion.span>
                    ) : (
                      <motion.span
                        key="contact"
                        variants={buttonVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transitionSettings}
                      >
                        Contact
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
                <Buttonext
                  link="https://www.linkedin.com/in/matthieuGravy"
                  title="Linkedin"
                  className="flex flex-row justify-start rounded-lg"
                  content={
                    <>
                      <motion.figure
                        className="flex gap-x-2 text-zinc-700 hover:shadow-2xl transition-all duration-500 hover:bg-teal-200 rounded-full p-2 "
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 1,
                          delay: 3,
                          repeatType: "reverse",
                        }}
                      >
                        <GrLinkedinOption
                          size={24}
                          color="#3f3f46"
                          className=""
                        />
                        <span className="md:hidden">/matthieugravy</span>
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
                        className="font-cairo font-xl hover:shadow-2xl transition-all duration-500 hover:bg-teal-200 text-zinc-700 rounded-full p-2 flex gap-x-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 1,
                          delay: 2.5,
                          repeatType: "reverse",
                        }}
                      >
                        <GrGithub
                          size={24}
                          color="#3f3f46"
                          className={classname}
                        />
                        <span className="md:hidden">/matthieuGravy</span>
                      </motion.figure>
                    </>
                  }
                />
                <motion.article
                  className="h-10 text-zinc-700 flex items-center "
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 2.5,
                    repeatType: "reverse",
                  }}
                >
                  <a
                    className="font-cairo space-x-2 flex transition-all duration-500 hover:text-[#131316] hover:bg-teal-200 px-2 py-1 rounded-xl  items-center"
                    href="tel:+32487217823"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    <p> +32 (0) 487 21 78 23</p>
                  </a>
                </motion.article>
              </footer>
            </article>
            <article className="flex flex-col justify-between ">
              {contactButton === true ? (
                <>
                  <Getintouch className="xl:min-h-[80vh] md:px-8 py-12 " />
                </>
              ) : (
                <figure
                  ref={figureRef}
                  className="flex items-end xl:min-h-[80vh]"
                >
                  <Suspense fallback={<Loadingimage />}>
                    <motion.img
                      src={MaskMatt}
                      alt=""
                      width="450px"
                      style={{ y }}
                      initial={{ x: 50, y: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    />
                  </Suspense>
                </figure>
              )}
            </article>
          </section>
        </Containers>

        <figure className="overflow-hidden m-auto py-24 lg:py-16 xl:py-0">
          <ParallaxTextor velocity={1} />
        </figure>
        <Containers
          type="section-large"
          className="md:py-12 space-y-8 bg-[#131316] rounded-xl"
        >
          <article className="md:px-8 flex flex-col lg:flex-row gap-x-12 gap-y-6">
            <ScrollTextLeft>
              <MissionUpEn className={styleP} />
            </ScrollTextLeft>
            <ScrollTextRight>
              <MissionDownEn className={styleP} />
            </ScrollTextRight>
          </article>

          <Scroller />

          <div className="flex justify-center">
            <ButtonOne content="more" to="/about" className="rounded-xl px-4" />{" "}
          </div>
        </Containers>
        <Containers type="section-large" className=" rounded-xl"></Containers>
      </Main>
    </>
  );
};

export default Homepage;
