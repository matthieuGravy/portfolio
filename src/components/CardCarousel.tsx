import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const CardCarousel = ({ images }) => {
  const desktopContainerRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [mobileConstraints, setMobileConstraints] = useState({
    left: 0,
    right: 0,
  });

  useEffect(() => {
    if (desktopContainerRef.current) {
      setContainerWidth(desktopContainerRef.current.offsetWidth);
      setContentWidth(desktopContainerRef.current.scrollWidth);
    }
    if (mobileContainerRef.current) {
      const containerWidth = mobileContainerRef.current.offsetWidth;
      const scrollWidth = mobileContainerRef.current.scrollWidth;
      setMobileConstraints({ left: 0, right: containerWidth - scrollWidth });
    }
  }, []);

  const { scrollXProgress } = useScroll({ container: desktopContainerRef });

  const smoothProgress = useSpring(scrollXProgress, {
    stiffness: 30,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", `-${((contentWidth - containerWidth) / contentWidth) * 100}%`]
  );

  return (
    <>
      <div className="lg:hidden w-full overflow-hidden">
        {" "}
        {/* Version mobile/tablette */}
        <motion.div ref={mobileContainerRef} className="cursor-grab">
          <motion.div
            drag="x"
            dragConstraints={mobileConstraints}
            className="flex"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[200px] p-2"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Gallery item ${index}`}
                  className="w-full h-auto rounded-lg pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden lg:block w-full overflow-x-scroll scrollbar-hide">
        {" "}
        {/* Version desktop */}
        <div ref={desktopContainerRef}>
          <motion.div style={{ x }} className="flex space-x-4 py-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px]"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Gallery item ${index}`}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
