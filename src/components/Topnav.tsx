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

import { toplinksEn } from "../data/en/navEn";

const Topnav = () => {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const controls = useAnimation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isNavVisible || windowWidth > 768) {
      controls.start((i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.1 },
      }));
    } else {
      controls.start({ opacity: 0, scale: 0.3 });
    }
  }, [isNavVisible, controls, windowWidth]);

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
          {/* logo */}
          <NavLink to="/" className="hidden md:block">
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={itsGravyLogo}
              className="h-10"
              alt=""
            />
          </NavLink>

          {/* nav mobile*/}
          <nav className="text-right w-auto pointer-events-auto md:hidden ">
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
                  ? " py-4 absolute top-14 left-0 gap-y-4 bg-zinc-100 text-center w-full"
                  : "md:flex md:flex-row md:gap-x-4 hidden md:justify-center md:items-center"
              }`}
              animate={controls}
            >
              {toplinksEn.map((link) => (
                <motion.li
                  whileTap={{ scale: 0.8 }}
                  className="py-4 md:py-2 md:block md:w-auto overflow-hidden   "
                >
                  <NavLink
                    to={link.link}
                    onClick={closeNav}
                    className={({ isActive }) =>
                      `px-8 md:px-2 w-full hover:text-fuchsia-600 transition duration-500 transition-color ${
                        isActive ? "font-bold " : ""
                      }
                        `
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* nav desktop*/}
          <nav className="hidden md:block text-right w-auto pointer-events-auto ">
            <motion.ul
              className={`pointer-events-auto md:flex md:flex-row md:gap-x-4 hidden md:justify-center md:items-center`}
              animate={controls}
            >
              {toplinksEn.map((link) => (
                <motion.li
                  whileTap={{ scale: 0.8 }}
                  className="py-4 md:py-2 md:block md:w-auto overflow-hidden px-8 md:px-2"
                >
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `w-full hover:text-fuchsia-600 transition duration-500 transition-color ${
                        isActive ? "font-bold " : ""
                      }
                        `
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
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
