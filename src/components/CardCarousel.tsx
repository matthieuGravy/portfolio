import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CardCarouselProps {
  images: string[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ images }) => {
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (desktopContainerRef.current) {
        setContainerWidth(desktopContainerRef.current.offsetWidth);
        setContentWidth(desktopContainerRef.current.scrollWidth);
      }
      if (mobileContainerRef.current) {
        setContainerWidth(mobileContainerRef.current.offsetWidth);
        setContentWidth(mobileContainerRef.current.scrollWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [images]);

  const { scrollXProgress: desktopScrollXProgress } = useScroll({
    container: desktopContainerRef,
  });
  const { scrollXProgress: mobileScrollXProgress } = useScroll({
    container: mobileContainerRef,
  });

  const smoothDesktopProgress = useSpring(desktopScrollXProgress, {
    stiffness: 30,
    damping: 30,
    restDelta: 0.001,
  });

  const smoothMobileProgress = useSpring(mobileScrollXProgress, {
    stiffness: 30,
    damping: 30,
    restDelta: 0.001,
  });

  const desktopX = useTransform(
    smoothDesktopProgress,
    [0, 1],
    ["0%", `-${((contentWidth - containerWidth) / contentWidth) * 100}%`]
  );

  const mobileX = useTransform(
    smoothMobileProgress,
    [0, 1],
    ["0%", `-${((contentWidth - containerWidth) / contentWidth) * 100}%`]
  );

  return (
    <>
      <div className="md:hidden w-full overflow-x-scroll scrollbar-hide">
        <motion.div ref={mobileContainerRef} className="w-full">
          <motion.div style={{ x: mobileX }} className="flex space-x-4 py-4">
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
                  onLoad={() => console.log(`Mobile image ${index} loaded`)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden md:block w-full overflow-x-scroll scrollbar-hide">
        <motion.div
          ref={desktopContainerRef}
          className="w-full"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div style={{ x: desktopX }} className="flex space-x-4 py-4">
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
                  onLoad={() => console.log(`Desktop image ${index} loaded`)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default CardCarousel;
