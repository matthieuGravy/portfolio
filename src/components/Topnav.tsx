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
      closeNav();
    } else {
      setIsHidden(false);
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
        className={`sticky w-full top-0 py-4 text-zinc-700 uppercase z-50 bg-zinc-100`}
      >
        <section className="md:w-4/5 md:m-auto relative">
          {/* logo */}

          {/* nav mobile*/}
          <nav className="flex justify-between text-right w-full pointer-events-auto  ">
            <NavLink to="/" className=" ">
              <motion.img
                whileTap={{ scale: 0.8 }}
                src={itsGravyLogo}
                className="h-10 ps-3.5 md:px-0"
                alt="logo itsgravy"
                onClick={closeNav}
              />
            </NavLink>
            <motion.button
              onClick={toggleNav}
              className="md:hidden uppercase pe-3.5 md:pe-0"
              aria-label="Menu"
              whileTap={{ scale: 0.8 }}
            >
              <HamburgerIcon />
            </motion.button>
            <motion.ul
              className={`pointer-events-auto md:hidden  ${
                isNavVisible
                  ? "absolute top-14 gap-y-4  py-4 bg-zinc-100 text-center w-screen"
                  : "hidden"
              }`}
              animate={controls}
            >
              {toplinksEn.map((link) => (
                <motion.li
                  key={link.id}
                  whileTap={{ scale: 0.8 }}
                  className="py-4 md:py-2 md:block md:w-auto overflow-hidden "
                >
                  <NavLink
                    to={link.link}
                    onClick={closeNav}
                    className={({ isActive }) =>
                      `px-8 md:px-2 w-full hover:text-fuchsia-600 transition duration-500 transition-color font-cairo text-2xl uppercase tracking-wide font-extralight ${
                        isActive ? "" : ""
                      }
                        `
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>

            {/* nav desktop*/}
            <ul
              className={`pointer-events-auto md:flex md:flex-row md:gap-x-8 hidden md:justify-end md:items-center `}
            >
              {toplinksEn.map((link) => (
                <motion.li
                  key={link.id}
                  whileTap={{ scale: 0.8 }}
                  className="md:flex md:w-auto overflow-hidden "
                >
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `flex hover:text-fuchsia-600 transition duration-500 transition-color font-cairo text-2xl uppercase tracking-wide font-regular ${
                        isActive ? " text-fuchsia-600" : ""
                      }
                        `
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
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
