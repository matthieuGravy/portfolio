import { ButtonNav } from "./blocs/Buttons";
import { useState, useEffect } from "react";
import {
  useSpring,
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import HamburgerIcon from "./icons/HamburgerIcon";
import { NavLink } from "react-router-dom";
const Topnav = () => {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isNavVisible || window.innerWidth > 768) {
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
    if (previous !== undefined && latest > previous && latest > 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
      if (window.innerWidth <= 768) {
        setIsNavVisible(false);
      }
    }
  });

  useEffect(() => {
    if (scrollYProgress.get() > 0.1) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  }, [scrollYProgress]);

  const navFr = [
    { to: "/", content: "Home" },
    { to: "/project/projects", content: "projets" },
    { to: "/about", content: "à propos" },
  ];
  const { scrollYProgress: scrollYProgress1 } = useScroll();
  const scaleX = useSpring(scrollYProgress1, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.header
        variants={{ isVisible: { y: 0 }, isHidden: { y: -72 } }}
        initial={{ y: -72 }}
        animate={isHidden ? { y: -72 } : { y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed fixed w-full top-0 py-4 text-zinc-600 uppercase z-50 bg-zinc-100`}
      >
        <section className="flex justify-between px-8 md:w-4/5 md:m-auto">
          <motion.div whileTap={{ scale: 0.8 }}>
            <NavLink to="/">{"itsgravy"}</NavLink>
          </motion.div>
          <nav className="text-right w-auto pointer-events-auto ">
            <motion.button
              onClick={toggleNav}
              className="md:hidden uppercase"
              aria-label="Menu"
              whileTap={{ scale: 0.8 }}
            >
              <HamburgerIcon />
            </motion.button>
            <motion.ul
              className={`pointer-events-auto ${
                isNavVisible
                  ? "top-0 py-4 absolute top-14 right-0 gap-y-4  bg-zinc-800 text-center"
                  : "md:flex md:flex-row md:gap-x-4 md:flex hidden md:justify-center md:items-center"
              }`}
              animate={controls}
            >
              {navFr.map((nav) => (
                <li
                  key={nav.to}
                  className="w-full py-4 md:py-2 md:block md:w-auto overflow-hidden transition duration-500 transition-color hover:text-neutral-50 hover:bg-fuchsia-700"
                >
                  <ButtonNav
                    to={nav.to}
                    onClick={window.innerWidth < 768 ? closeNav : undefined}
                    content={nav.content}
                    className="px-8 md:px-2 w-full"
                  />
                </li>
              ))}
            </motion.ul>
          </nav>
        </section>

        <motion.div
          className="h-1 w-full fixed top-0 left-0 bg-neutral-100  z-50"
          style={{ scaleX, originX: 0 }}
        />
      </motion.header>
      <motion.div
        className="h-1 w-full fixed top-0 left-0 bg-fuchsia-700 z-50"
        style={{ scaleX, originX: 0 }}
      />
    </>
  );
};
export default Topnav;