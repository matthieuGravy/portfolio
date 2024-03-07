import Itsgravy from "./Itsgravy";
import { ButtonNav } from "./Buttons";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const Topnav = () => {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    const updateNavVisibility = () => {
      const isVisible = window.innerWidth >= 768;
      setIsNavVisible(isVisible);
      console.log(("1.isNavVisible", isNavVisible));
    };

    updateNavVisibility();

    const handleResize = () => {
      updateNavVisibility();
      console.log("2. useEffect", isNavVisible);
    };

    window.addEventListener("resize", handleResize);
    console.log("3. useEffect", isNavVisible);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("5. useEffect", isNavVisible);
    };
  });

  useEffect(() => {
    if (isNavVisible) {
      console.log("4. useEffect", isNavVisible);
      controls.start((i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.1 },
      }));
    } else {
      controls.start({ opacity: 0, scale: 0.3 });
    }
  }, [isNavVisible, controls]);

  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  const closeNav = () => {
    setIsNavVisible(false);
  };

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    if (scrollYProgress > 0.1) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  }, [scrollYProgress]);

  const navFr = [
    { to: "/", content: "Home" },
    { to: "/project/projects", content: "projets" },
    { to: "/about", content: "à propos" },
    { to: "/contact", content: "contact" },
  ];
  return (
    <motion.header
      variants={{ isVisible: { y: 0 }, isHidden: { y: -100 } }}
      initial={{ y: -100 }}
      animate={
        ({ y: 0, isHidden: { y: -100 } }, isHidden ? "isHidden" : "isVisible")
      }
      transition={{ duration: 0.3 }}
      className={`fixed flex px-4 justify-between items-center fixed w-full top-0 py-4 text-neutral-50 uppercase z-50 bg-fuchsia-700`}
    >
      <ButtonNav to="/" content={<Itsgravy />} />
      <nav className="">
        <motion.button
          onClick={toggleNav}
          className="md:hidden"
          aria-label="Menu"
          whileTap={{ scale: 0.8 }}
        >
          Menu
        </motion.button>
        {isNavVisible && (
          <AnimatePresence>
            <motion.ul
              className={`flex md:static md:flex-row md:top-0 md:py-0 md:gap-x-4 gap-y-6 ${
                isNavVisible
                  ? "pointer-events-auto absolute flex-col md:flex px-12 top-14 -right-4 bg-fuchsia-700 py-8"
                  : "pointer-events-none hidden md:flex"
              }`}
              initial={{ clipPath: "inset(60% 70% 90% 50% round 0px)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
              exit={{ clipPath: "inset(80% 50% 90% 50% round 0px)" }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            >
              {navFr.map((nav) => (
                <motion.li
                  key={nav.to}
                  onClick={window.innerWidth < 768 ? closeNav : undefined}
                  className="w-max"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={controls}
                >
                  <ButtonNav to={nav.to} content={nav.content} />
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        )}
      </nav>
    </motion.header>
  );
};
export default Topnav;
