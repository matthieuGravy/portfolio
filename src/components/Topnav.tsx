import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  useSpring,
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import HamburgerIcon from "./icons/HamburgerIcon";
import itsGravyLogo from "../assets/logo/its-gravy-logo.svg";

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
        className={`sticky w-full top-0 py-4 text-zinc-600 uppercase z-50 bg-zinc-100`}
      >
        <section className="flex justify-between md:w-4/5 md:m-auto">
          <NavLink to="/" className="hidden md:block">
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={itsGravyLogo}
              className="h-10"
              alt=""
            />
          </NavLink>

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
                  ? "top-0 py-4 absolute top-14 left-0 gap-y-4 bg-zinc-100 text-center w-full"
                  : "md:flex md:flex-row md:gap-x-4 md:flex hidden md:justify-center md:items-center"
              }`}
              animate={controls}
            >
              <motion.li
                whileTap={{ scale: 0.8 }}
                className="py-4 md:py-2 md:block md:w-auto overflow-hidden   "
              >
                <NavLink
                  to="/"
                  onClick={window.innerWidth < 768 ? closeNav : undefined}
                  className={({ isActive }) =>
                    `px-8 md:px-2 w-full hover:text-fuchsia-600 transition duration-500 transition-color ${
                      isActive ? "font-bold " : ""
                    }
                    `
                  }
                >
                  Home
                </NavLink>
              </motion.li>
              <motion.li
                whileTap={{ scale: 0.8 }}
                className="py-4 md:py-2 md:block md:w-auto overflow-hidden   "
              >
                <NavLink
                  to="/projects"
                  onClick={window.innerWidth < 768 ? closeNav : undefined}
                  className={({ isActive }) =>
                    `px-8 md:px-2 w-full hover:text-fuchsia-600 transition duration-500 transition-color ${
                      isActive ? "font-bold " : ""
                    }
                    `
                  }
                >
                  Projects
                </NavLink>
              </motion.li>
              <motion.li
                whileTap={{ scale: 0.8 }}
                className="py-4 md:py-2 md:block md:w-auto overflow-hidden   "
              >
                <NavLink
                  to="/about"
                  onClick={window.innerWidth < 768 ? closeNav : undefined}
                  className={({ isActive }) =>
                    `px-8 md:px-2 w-full hover:text-fuchsia-600 transition duration-500 transition-color ${
                      isActive ? "font-bold " : ""
                    }
                    `
                  }
                >
                  About
                </NavLink>
              </motion.li>
            </motion.ul>
          </nav>
        </section>
      </motion.header>
      <motion.div
        className="h-1 w-full fixed top-0 left-0 bg-yellow-200 z-50"
        style={{ scaleX, originX: 0 }}
      />
    </>
  );
};
export default Topnav;
