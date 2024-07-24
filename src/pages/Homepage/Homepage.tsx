import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Suspense, useState, useEffect, useRef } from "react";

import { GrGithub, GrLinkedinOption } from "react-icons/gr";

import MaskMatt from "../../assets/pictures/mask-matt.png";
import TemplateHtml from "../../assets/pictures/shine/template-html.png";
import TemplateVue from "../../assets/pictures/shine/template-vue.png";
import TemplateGsap from "../../assets/pictures/shine/template-vue-gsap.png";

import {
  ButtonOne,
  Buttonext,
  ButtonTwo,
} from "../../components/blocs/Buttons";
import Heading from "../../components/blocs/Heading";
import Containers from "../../components/Containers";
import ParallaxTextor from "../../components/ParallaxTextor";
import ScrollTextRight from "../../components/animate/ScrollTextRight";
import ScrollTextLeft from "../../components/animate/ScrollTextLeft";
import ScrollHeading from "../../components/animate/ScrollHeading";
import Getintouch from "../../components/Getintouch/Getintouch";
import Scroller from "../../components/Scroller";
import Loadingimage from "../../components/Loadingimage";
import Main from "../../components/Main";
import CardCarousel from "../../components/CardCarousel";
import RandomNumber from "../../components/RandomNumber";

import { jumbo, greetingWords } from "../../data/home";
import {
  MissionDownEn,
  MissionUpEn,
} from "../../components/data/homepage/Mission";
import { shared, learnings, professionals } from "../../data/projets";

const Homepage = () => {
  const galleryTemplate = [TemplateHtml, TemplateVue, TemplateGsap];
  const renderListItem = (finalNumber: number, title: string) => (
    <li className="flex flex-col items-center gap-y-6">
      <article className="space-y-6 px-8 text-center">
        <RandomNumber finalNumber={finalNumber} />
        <Heading level="h5" title={title} />
      </article>
    </li>
  );

  const [contactButton, setContatButton] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(!contactButton);
  useEffect(() => {
    setIsImageVisible(!contactButton);
  }, [contactButton]);

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
  interface ContactSectionProps {
    contactButton: string | boolean;
    greeting: string;
  }
  const ContactSection: React.FC<ContactSectionProps> = ({
    contactButton,
    greeting,
  }) => {
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
          {(typeof contactButton === "string" && contactButton.length > 0) ||
          (typeof contactButton === "boolean" && contactButton) ? (
            <motion.div variants={itemVariants}>
              <motion.header>
                <Heading title="Let's talk" level="h4" className={``} />
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

  const styleP = "text-2xl text-zinc-400 tracking-wide font-sintony ";
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
      <Main className="flex flex-col gap-y-12 md:gap-y-16 pb-16 overflow-hidden pt-12">
        <Containers type="section-large" className=" flex overflow-hidden">
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
              <footer className="z-30 md:pb-12 md:ps-8 flex gap-x-8 lg:items-center justify-end flex-col-reverse md:flex-row-reverse xl:flex-row ">
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
            <article className="flex flex-col justify-between">
              {contactButton ? (
                <Getintouch className="xl:min-h-[700px] md:px-8 py-12 " />
              ) : (
                <figure
                  ref={figureRef}
                  className="flex items-end justify-center xl:justify-start xl:min-h-[700px] "
                >
                  <Suspense fallback={<Loadingimage />}>
                    {isImageVisible && (
                      <motion.img
                        src={MaskMatt}
                        alt=""
                        width="450px"
                        style={{ y }}
                        initial={{ x: 50, y: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                      />
                    )}
                  </Suspense>
                </figure>
              )}
            </article>
          </section>
        </Containers>

        <figure className="overflow-hidden m-auto py-24 lg:py-16 xl:py-0">
          <ParallaxTextor velocity={1} />
        </figure>
        <Containers type="section-large" className="py-8 md:py-12 space-y-8 ">
          <article className="md:px-8 flex flex-col lg:flex-row gap-x-12 gap-y-6">
            <ScrollTextLeft>
              <MissionUpEn className={styleP} />
            </ScrollTextLeft>
            <ScrollTextRight>
              <MissionDownEn className={styleP} />
            </ScrollTextRight>
          </article>

          <div className="flex justify-center">
            <ButtonOne
              content="Learn More"
              to="/about"
              className="rounded-xl px-4"
            />{" "}
          </div>

          <Scroller />
        </Containers>
        <section className=" space-y-12 pb-12 rounded-xl">
          <ScrollHeading
            title="My projects"
            level="h3"
            className="text-center pt-16"
          />
          <ul className="grid grid-rows-3 gap-y-8 md:grid-cols-3 md:grid-rows-1 pb-12">
            {renderListItem(shared?.length || 0, "Shared Projects")}
            {renderListItem(learnings?.length || 0, "Learnings")}
            {renderListItem(
              professionals?.length || 0,
              "Professional Projects"
            )}
          </ul>
          <div className="flex justify-center">
            <ButtonTwo
              content="View more"
              to="/projects"
              className="rounded-xl px-4"
            />{" "}
          </div>
        </section>
        <Containers type="section-large" className=" space-y-8 ">
          <article className="space-y-12 py-8 md:py-12">
            <ScrollHeading
              title="Shared for developpers"
              level="h3"
              className="md:ps-8 flex flex-col gap-y-16"
            />
            <section className="flex flex-col lg:grid grid-cols-2 gap-8">
              <article className="md:ps-8 space-y-6">
                <ScrollTextLeft>
                  <p className={`${styleP}`}>
                    I've crafted three distinct portfolios, each a journey
                    through modern web development with{" "}
                    <mark className="text-[#dd4b25] bg-transparent">HTML</mark>,{" "}
                    <mark className="text-[#c66393] bg-transparent">Sass</mark>,{" "}
                    <mark className="text-[#8712f3] bg-transparent">
                      Bootstrap
                    </mark>
                    , <mark className="text-[#3fb27f] bg-transparent">Vue</mark>
                    ,{" "}
                    <mark className="text-[#a5fd84] bg-transparent">GSAP</mark>.
                    These projects are designed to be nearly ready-to-use,
                    saving developers valuable time in creating their online
                    presence.
                  </p>
                </ScrollTextLeft>
                <ScrollTextLeft>
                  <p className={`${styleP}`}>
                    Need a professional portfolio but short on time? These
                    templates are shared on GitHub, offering a quick solution to
                    showcase your skills. Simply fork, customize, and deploy -
                    your polished web presence is just a few clicks away.
                  </p>
                </ScrollTextLeft>{" "}
              </article>
              <figure className="max-w-[600px] overflow-hidden">
                <CardCarousel images={galleryTemplate} />
              </figure>
            </section>
          </article>
        </Containers>
      </Main>
    </>
  );
};

export default Homepage;
