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
  const [mobileConstraints, setMobileConstraints] = useState({
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (desktopContainerRef.current) {
        setContainerWidth(desktopContainerRef.current.offsetWidth);
        setContentWidth(desktopContainerRef.current.scrollWidth);
      }
      if (mobileContainerRef.current) {
        const containerWidth = mobileContainerRef.current.offsetWidth;
        const scrollWidth = mobileContainerRef.current.scrollWidth;
        setMobileConstraints({ left: 0, right: containerWidth - scrollWidth });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [images]);

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
      <div className="md:hidden w-full overflow-hidden bg-gray-100 border border-gray-300">
        <motion.div ref={mobileContainerRef} className="cursor-grab">
          <motion.div
            drag="x"
            dragConstraints={mobileConstraints}
            className="flex"
            onDragStart={() => console.log("Mobile drag started")}
            onDragEnd={() => console.log("Mobile drag ended")}
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
          className="cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            style={{ x }}
            className="flex space-x-4 py-4"
            drag="x"
            dragConstraints={{
              left: -(contentWidth - containerWidth),
              right: 0,
            }}
          >
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
