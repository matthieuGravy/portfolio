import Itsgravy from "./Itsgravy";
import { ButtonNav } from "./Buttons";
import { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import HamburgerIcon from "../icons/HamburgerIcon";

const Topnav = () => {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isNavVisible || window.innerWidth > 768) {
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
      if (window.innerWidth <= 768) {
        setIsNavVisible(false);
      }
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
      <motion.div whileTap={{ scale: 0.8 }}>
        <ButtonNav to="/" content={<Itsgravy />} />
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
              ? "top-0 py-4 absolute top-14 right-0 gap-y-4  bg-fuchsia-700 text-center"
              : "md:flex md:flex-row md:gap-x-4 md:flex hidden md:justify-center md:items-center"
          }`}
          animate={controls}
        >
          {navFr.map((nav) => (
            <li
              key={nav.to}
              className="w-full py-4  md:py-0 md:block md:w-auto overflow-hidden hover:opacity-75 hover:bg-fuchsia-600"
              initial={{ opacity: 1, scale: 0.5 }}
            >
              <ButtonNav
                to={nav.to}
                onClick={window.innerWidth < 768 ? closeNav : undefined}
                content={nav.content}
                className="px-8 md:px-0  w-full"
              />
            </li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
};
export default Topnav;
