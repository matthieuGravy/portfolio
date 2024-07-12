import { motion, AnimatePresence } from "framer-motion";
import { Suspense, useState, useEffect } from "react";

import { GrGithub, GrLinkedinOption } from "react-icons/gr";

import MatthieuGravyDeveloperWeb from "../../assets/pictures/matthieu-gravy-full-background-colors.svg";

import MaskMatt from "../../assets/pictures/mask-matt.png";

import { ButtonOne, Buttonext } from "../../components/blocs/Buttons";
import Heading from "../../components/blocs/Heading";
import Containers from "../../components/Containers";
import ParallaxTextor from "../../components/ParallaxTextor";
import ScrollTextRight from "../../components/animate/ScrollTextRight";
import ScrollTextLeft from "../../components/animate/ScrollTextLeft";
import ScrollHeading from "../../components/animate/ScollHeading";
import Getintouch from "../../components/Getintouch/Getintouch";
import Scroller from "../../components/Scroller";
import Loadingimage from "../../components/Loadingimage";
import Main from "../../components/Main";

import { jumbo, greetingWords, projects } from "../../data/home";
import {
  MissionDownEn,
  MissionUpEn,
} from "../../components/data/homepage/Mission";
import {
  ProjetDownEn,
  ProjetUpEn,
} from "../../components/data/homepage/Projects";

const Homepage = () => {
  const [contactButton, setContatButton] = useState(false);
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
          className={`pt-12 ps-8 space-y-4`}
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
  const styleRow = "flex flex-col justify-center space-y-4 z-20";
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
      <Main className="flex flex-col gap-y-16">
        <Containers
          type="section-large"
          className="mt-12 rounded-xl bg-[#131316] flex overflow-hidden"
        >
          <section className="grid grid-cols-2 w-full ">
            <article className="flex flex-col justify-between space-y-8">
              <ContactSection
                contactButton={contactButton}
                greeting={greeting}
              />
              <header className="ps-8 space-y-8 pb-8">
                <Heading title={jumbo.title} level="h1" className="" />
                <Heading
                  title={<>{titleAnimation}</>}
                  level="h3"
                  className=""
                />
              </header>
              <footer className="pb-12 ps-8 flex gap-x-8 lg:items-end justify-end  ">
                <motion.button
                  onClick={() => setContatButton(!contactButton)}
                  className="transition-all duration-500 hover:bg-fuchsia-500  text-zinc-900 bg-zinc-700  px-4 py-2 rounded-lg font-sintony uppercase"
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
                        className="hover:shadow-2xl transition-all duration-500 hover:bg-teal-200 rounded-full p-2 "
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
                    className="space-x-2 flex transition-all duration-500 hover:text-[#131316] hover:bg-teal-200 px-2 py-1 rounded-xl  items-center"
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
                  <Getintouch className="min-h-[80vh] px-8 py-12" />
                </>
              ) : (
                <figure className="flex items-end min-h-[80vh]">
                  <Suspense fallback={<Loadingimage />}>
                    <motion.img
                      src={MaskMatt}
                      alt=""
                      width="450px"
                      initial={{ x: 50, y: 50, opacity: 0 }}
                      animate={{ x: 0, y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    />
                  </Suspense>
                </figure>
              )}
            </article>
          </section>
        </Containers>
        <Containers type="section-large" className="py-12 space-y-8">
          <article className="px-8 flex gap-x-12">
            <ScrollTextLeft>
              <MissionUpEn className={styleP} />
            </ScrollTextLeft>
            <ScrollTextRight>
              <MissionDownEn className={styleP} />
            </ScrollTextRight>
          </article>
          <div>
            <ButtonOne content="more" to="/about" className="" />{" "}
          </div>
        </Containers>
        <Containers type="section-large" className="bg-[#131316] rounded-xl">
          <Scroller />
        </Containers>
        <article className="flex h-40 ">
          <figure className="overflow-hidden m-auto py-24 lg:py-16 xl:py-0">
            <ParallaxTextor velocity={1} />
          </figure>
        </article>
      </Main>
    </>
  );
};

export default Homepage;
